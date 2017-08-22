{-# LANGUAGE DataKinds, GeneralizedNewtypeDeriving, OverloadedStrings, TemplateHaskell #-}
import           System.IO
import           Control.Concurrent             (forkIO)
import           Data.Tuple.Select
import           Control.Concurrent.STM
import           Control.Concurrent.MVar (newMVar, readMVar, takeMVar, putMVar)
import           Control.Exception              (finally)
import           Control.Exception.Base         (mask_)
import           Control.Monad                  (forM_, forever)
import           Control.Monad.IO.Class         (liftIO)
import           Data.FileEmbed                 (embedDir)
import           Data.List                      (intersperse, intercalate, delete)
import           Data.List.Split                (splitOn)
import           Data.Monoid                    (mappend)
import           Data.Text                      (Text, pack, unpack)
import qualified Data.Text                      as T
import qualified Data.Text.IO                   as TIO
import           Fm                             (rText, truck)
import qualified Network.Wai
import qualified Network.Wai.Application.Static as Static
import qualified Network.Wai.Handler.Warp       as Warp
import qualified Network.Wai.Handler.WebSockets as WaiWS
import           Network.WebSockets             (sendClose)
import qualified Network.WebSockets             as WS
import           System.Directory
import           Tasks                          hiding (main)
import           Prelude hiding (readFile, writeFile, appendFile)
-- import System.Environment (getEnv)a
--
xcomments = "xcomments" :: FilePath
xnames = "xnames" :: FilePath
namesFile = "namesFile" :: FilePath

unify :: String -> String
unify = filter (\v -> v /= '\n')

solo :: Text
solo = "solo"

nobody :: Text
nobody = "nobody"

com = pack ","

dollar :: Text
dollar = "<$>"

empty :: Text
empty = ""

true = pack "true"
false = pack "false"

at = pack "<@>"
oh = pack "<o>"
comma = pack ", "
comma2 = pack ","
emptyText = pack ""
nl = pack "\n"
mark = pack "<$>"

type Name = Text
type Score = Int
type Goal = Int
type Group = Text
type Password = Text
type ID = Int
type Comments = Text
type Client = (Name, Score, Goal, Group, WS.Connection, Password, ID, Comments)

type ServerState = [Client]

newServerState :: ServerState
newServerState = []

toggle :: Text -> Text
toggle text | text ==true = false | text == false = true

newId :: ID
newId = 0

counter = newTVar 0

change z [a,b,c,d] = [z,b,c,d]
change _ [] = ["$","$","$","$"]
change _ _ = ["foo","bar","change()","problem"]
stringify [a,b,c,d] = "a,b,c,d"


remove :: Int -> Text -> IO Text
remove n a = do
  let b = T.splitOn at a
  let c = splitAt n b
  let d = mappend (fst c) (drop 1 (snd c))
  return $ T.intercalate at d

substitute :: Int -> Text -> Text -> IO Text

substitute n t revision = do
  print "<@><>@<><@> bee, be, b, cee, c, d, e, f, f <@><>@<><@> <@><>@<><@> In substitute. BEGIN"
  print "n, t, revision are:"
  print n
  print t
  print revision
  let bee = T.splitOn (pack "<@>") t
  print "bee"
  print bee
  let be = filter (\v -> not (v == mempty)) bee
  print "be:"
  print be
  let b = splitAt n be
  print "b:"
  print b
  let cee = head $ snd b
  print "cee:"
  print cee
  let c = T.splitOn "," cee
  print "c:"
  print c
  let d = drop 1 (snd b)
  print "d:"
  print d
  let eee = change revision c
  print "eee:"
  print eee
  let e = T.intercalate comma2 eee
  print "e:"
  print e
  let f = (fst b) `mappend` (e:d);
  print "f:"
  print f
  let g = T.intercalate at f
  print "g:"
  print "<@><>@<><@> <@><>@<><@> <@><>@<><@> In substitute. END"
  return g

removeTask n tasks = do
    let (ys,zs) = splitAt n tasks in return $ ys ++ (tail zs)



{-
  let c = splitAt n task
  let d = snd c
  let e = drop 1 d
  let f = fst c
  let g = f ++ e
  let h = T.intercalate at g
  return h -}

head2 :: [Text] -> Text
head2 [a,b] = a
head2 _ = pack "Inappropriate head2 argument"

tail2 :: [Text] -> Text
tail2 [a,b] = b
tail2 _ = pack "Inappropriate tail2 argument"

head3 :: [String] -> String
head3 [a,b] = a
head3 _ = "Inappropriate head2 argument"

tail3 :: [String] -> String
tail3 [a,b] = b
tail3 _ = "Inappropriate tail2 argument"

head4 :: [Text] -> Text
head4 [] = empty
head4 xs = head xs

head5 [[(a,b,c,d,e,f,g,h)]] = [(a,b,c,d,e,f,g,h)]
head5 _ = [("a","b","c","d","e","f","g","h")]

safeTail [] = []
safeTail v  = tail v

getName = sel1

getCli name cli | sel1 cli == name  = True
                | otherwise = False


getClient name state = filter (getCli name) state

getConn = sel5

getNm id s = head [ sel1 cl | cl <- s, (sel7 cl) == id]

getN :: [Client] -> Text
getN [(a,_,_,_,_,_,_,_)] = a
getN [] = pack "Mr. Nobody"

getScore :: Client -> Score
getScore (_,b,_,_,_,_,_,_) = b

getGoal :: Client -> Goal
getGoal (_,_,c,_,_,_,_,_) = c

findGroup :: Client -> Group
findGroup (_,_,_,d,_,_,_,_) = d

-- getConn :: Client -> WS.Connection
-- getConn (_,_,_,_,e,_,_) = e

get4 :: [String] -> [Int]
get4 [_,_,_,a,b,c,d,_,_] = fmap read [a,b,c,d]
get4 _ = [-1,-1,-1,-1]

get5 :: [String] -> [Double]
get5 [_,_,_,a,b,c,d,e] = fmap read [a,b,c,d,e]
get5 _ = [-1,-1,-1,-1,-1]

get2 :: [String] -> Text
get2 [_,_,_,_,_,_,_,e,f] = T.intercalate com (fmap pack [e,f])
get2 _ = pack "error in get2"

get2G [_,_,_,_,_,_,_,e,f] = fmap read [e,f]
get2G _ = [8888, 8888]

subState :: Text -> Text -> [(Text,Int,Int,Text,WS.Connection,Text,Int,Text)] -> [(Text,Int,Int,Text,WS.Connection,Text,Int,Text)]
subState name gr state  | gr /= solo  = [ (a,b,c,d,e,f,g,h) | (a,b,c,d,e,f,g,h) <- state, gr == d ]
                        | gr == solo = [ (a,b,c,d,e,f,g,h) | (a,b,c,d,e,f,g,h) <- state, name == a]

extract :: [Text] -> Text
extract [x] = x
extract _ = mempty

getGroup name state = extract [ d | (a,_,_,d,_,_,_,_) <- state, name == a ]

content :: [String] -> String
content [] = "Empty List"
content [x] = x
content _ = "Major malfunction in the function named 'content'."

bcast :: Text -> ServerState -> IO ()
bcast message clients = do
    TIO.putStrLn message
    forM_ clients $ \(_ ,_, _, _, conn,_,_,_) -> WS.sendTextData conn message

textState s = [ a  `mappend` " | score: " `mappend` pack (show b) `mappend` " | goals: " `mappend` pack (show c) `mappend` " | " | (a,b,c,_,_,_,_,_) <- s]

extractHead :: [Text] -> Text
extractHead [a,b] = a
extractHead _ = pack "Error. ExtractHead is being applied to something other than a two item list of Text"

extractTail [a,b] = b
extractTail _ = pack "Error. ExtractTail is being applied to something other than a two item list of Text"

newName :: Text -> Text -> Text -> Client -> Client
newName name1 name2 name3 (a, b, c, d, e, f, g, h) | name1 == a  = (name2, b, c, d, e, name3,g, h)
                                    | otherwise = (a, b, c, d, e, f, g, h)

changeName :: Text -> Text -> Text -> ServerState -> ServerState
changeName name1 name2 name3 = map (newName name1 name2 name3)

newGroupKeepScore :: Text -> Text -> Client -> Client
newGroupKeepScore name group (a, b, c, d, e, f, g, h)  | name == a  = (a, b, c, group, e, f, g, h)
                                                       | otherwise = (a, b, c, d, e, f, g, h)
changeGroupKeepScore :: Text -> Text -> ServerState -> ServerState
changeGroupKeepScore name group = map (newGroupKeepScore name group)

newGroup :: Text -> Text -> Client -> Client
newGroup name group (a, b, c, d, e, f, g, h) | name == a  = (a, 0, 0, group, e, f, g, h)
                                             | otherwise = (a, b, c, d, e, f, g, h)

changeGroup :: Text -> Text -> ServerState -> ServerState
changeGroup name group = map (newGroup name group)

changeS :: Text -> Int -> Int -> Client -> Client
changeS x y z (a, b, c, d, e, f, g, h) | x == a    = (a, y, z, d, e, f, g, h)
                         | otherwise = (a, b, c, d, e, f, g, h)

chg6 :: Text -> Int -> Int -> Client -> Client
chg6 x y z (a, b, c, d, e, f, g, h) | x == a    = (a, y, z, d, e, f, g, h)
                         | otherwise = (a, b, c, d, e, f, g, h)

changeScore :: Text -> Int -> Int -> ServerState -> ServerState
changeScore name k q = map (changeS name k q)

chgScore :: Text -> Int -> Int -> ServerState -> ServerState
chgScore name k q = map (chg6 name k q)

matches :: Text -> ServerState -> [Client]
matches a ss = [ x | x <- ss, getName x == a]

clientExists :: Text -> ServerState -> Bool
clientExists a ss  | null (matches a ss)   = False
                   | otherwise             = True

matchesGroup :: Text -> ServerState -> [Client]
matchesGroup a ss = [ x | x <- ss, findGroup x == a]

groupExists :: Text -> ServerState -> Bool
groupExists a ss   | null (matchesGroup a ss) = False
                   | otherwise                = True

addClient :: Client -> ServerState -> ServerState
addClient client clients = client : clients

removeClient :: Client -> ServerState -> ServerState
removeClient name = filter ((/= getName name) . getName)

clientEq (a',b',c',d',e',f',g') a | a == a' = True
                                  | otherwise = False

rmClient :: Name -> ServerState -> ServerState
rmClient name state = do
  newState <- [ c | c <- state, (getName c) /= name]
  return newState

closeClientConn :: WS.WebSocketsData a => Client -> ServerState -> a -> ServerState
closeClientConn client s = do
    let s' = removeClient client s
    _ <- sendClose (getConn client)
    return s'

broadcast :: Text -> ServerState -> IO ()
broadcast message clients = do
    print $ "Message being broadcast: " ++ (T.unpack message)
    TIO.putStrLn message
    forM_ clients $ \(_ , _, _, _, conn,_,_,_) -> WS.sendTextData conn message

player = newTVar nobody

main :: IO ()
main = do
    -- por <- getEnv "PORT"
    -- let port = read por
    state <- atomically $ newTVar newServerState
    Warp.runSettings
     (Warp.setPort 3055 $
       Warp.setTimeout 36000
         Warp.defaultSettings) $
           WaiWS.websocketsOr WS.defaultConnectionOptions (application state) staticApp
staticApp :: Network.Wai.Application
staticApp = Static.staticApp $ Static.embeddedSettings $(embedDir "./src/dist")
application :: TVar ServerState -> WS.ServerApp
application state pending = do
    print "App is fired up"
    conn <- WS.acceptRequest pending
    msg <- WS.receiveData conn
    print $ T.unpack msg
    count <- atomically counter
    id0 <- atomically $ readTVar count
    let id = id0 + 1
    atomically $ writeTVar count id
    clients <- atomically $ readTVar state
    case msg of
        _   | not (prefix `T.isPrefixOf` msg) ->
                WS.sendTextData conn ("Wrong announcement" :: Text)
            | any ($ getName client)
                [T.null] ->
                    WS.sendTextData conn ("Name cannot be empty" :: Text)
            | clientExists (getName client) clients ->
                do
                  let duplicate = getName client
                  WS.sendTextData conn ("EE#$42,solo," `mappend` duplicate `mappend` " ,solo" :: Text)
            | otherwise -> flip finally disconnect $ do
                    let name = getName client
                    st <- atomically $ readTVar state
                    let st2 = addClient client st
                    atomically $ writeTVar state st2
                    WS.sendTextData conn ("CC#$42,solo," `mappend` name `mappend` " ,joined" :: Text)
                    talk conn state client
         where
                prefix = "CC#$42"
                namePword = T.splitOn oh $ T.drop (T.length prefix) msg
                client = (head namePword, 0, 0, solo, conn, last namePword, id, (pack "david<o>Still testing"))
                disconnect = do
                    st <- atomically $ readTVar state
                    let name = getNm id st
                    print $ T.unpack name ++ " is leaving"
                    sta <- atomically $ readTVar state
                    atomically $ writeTVar state $ filter (\v -> ((sel7 v) /= id)) sta
                    sta' <- atomically $ readTVar state  
                    let grp = getGroup name sta'
                    let subSt = subState name grp sta'
                    broadcast ("NN#$42," `mappend` grp `mappend` ",Major malfunction. I am Mr. Nobody"
                      `mappend` (pack "<br>") `mappend`
                        T.concat (intersperse "<br>" (textState subSt))) subSt   

talk :: WS.Connection -> TVar ServerState -> Client -> IO ()
talk conn state client = forever $ do
  msg <- WS.receiveData conn
  let msg2 = T.unpack msg
  let mArr = splitOn "," msg2
  print $ "In talk. The incoming message is " ++ msg2
  let msgArray = T.splitOn "," msg
  let group = msgArray !! 1
  let sender = msgArray !! 2
  let extra = msgArray !! 3
  let extraStr = mArr !! 3
  let extra2 = msgArray !! 4
  let extraNum = read (mArr !! 3) :: Int
  let extraNum2 = read (mArr !! 4) :: Int
  let mes = "<><><><><> Outgoing message from Main.hs " :: Text
  let tsks = (T.unpack group) :: FilePath
  print "<$><$><><@><@><> tsks"
  print tsks 
  print "<$><$><><@><@><> tsks"
  cos <- TIO.readFile xcomments
  comms <- atomically $ newTVar cos
  comments <- atomically $ readTVar comms
  ns <- TIO.readFile namesFile
  tks <- read2 tsks
  taskTVar <- atomically $ newTVar tks
  taskFile <- atomically $ readTVar taskTVar
  print "<$><$><><@><@><> taskFile, taskFile == mempty"
  print taskFile
  print $ show $ taskFile == mempty
  print "<$><$><><@><@><> taskFile, taskFile == mempty"
  if taskFile == mempty 
    then atomically $ writeTVar taskTVar emptyText 
    else atomically $ writeTVar taskTVar taskFile
    
  if "CA#$42" `T.isPrefixOf` msg
     then
         do
             st <- atomically $ readTVar state
             let subSt = subState sender group st
             broadcast ("NN#$42," `mappend` group `mappend` "," `mappend` sender `mappend` ","
               `mappend` (pack "<br>") `mappend` 
                 T.concat (intersperse "<br>" (textState subSt))) subSt
             z <- rText $ get4 mArr
             let x = get2 mArr
             print $ show z
             print $ show x
             broadcast ("CA#$42," `mappend` group `mappend` "," `mappend` sender `mappend` "," `mappend` z `mappend` "," `mappend` x ) subSt

-- ******************************** Comments are maintained in a file and in a TVar ****** START

     else if "GZ#$42" `T.isPrefixOf` msg               -- FETCH AND BROADCAST ALL COMMENTS
        then                                           -- PERFORM ON LOAD
            do
                st <- atomically $ readTVar state
                broadcast ("ZZ#$42," `mappend` group `mappend` "," 
                    `mappend` sender `mappend` "," `mappend` comments) st

     else if "GN#$42" `T.isPrefixOf` msg -- RECEIVE A NEW COMMENT, UPDATE THE FILE AND THE TVAR,
                                         --  AND BROADCAST THE NEW COMMENT 
        then
            do
                old <- atomically $ readTVar comms
                let updat = old `mappend` extra
                let updated = T.replace (pack "<@><@>") (pack "<@>") updat
                TIO.writeFile xcomments updated
                atomically $ writeTVar comms updated
                st <- atomically $ readTVar state
                broadcast ("ZN#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` extra) st

     else if "GD#$42" `T.isPrefixOf` msg              -- DELETE A COMMENT
        then
            do
                a <- TIO.readFile xcomments
                b <- remove extraNum a
                TIO.writeFile xcomments b
                st <- atomically $ readTVar state
                broadcast ("ZD#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` extra) st
                    
     else if "GE#$42" `T.isPrefixOf` msg              -- EDIT A COMMENT
        then
            do
                a <- atomically $ readTVar comms
                b <- substitute extraNum a extra
                TIO.writeFile xcomments b
                atomically $ writeTVar comms b
                st <- atomically $ readTVar state
                broadcast ("ZE#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` extra `mappend` "," `mappend` extra2) st





-- ******************************** Comments are maintained in a file and in a TVar ****** START
 
     else if "CE#$42" `T.isPrefixOf` msg ||
        "CH#$42" `T.isPrefixOf` msg || "XY#$42" `T.isPrefixOf` msg ||
        "DE#$42" `T.isPrefixOf` msg || "EQ#$42" `T.isPrefixOf` msg ||
        "GQ#$42" `T.isPrefixOf` msg || "CF#$42" `T.isPrefixOf` msg ||
        "CY#$42" `T.isPrefixOf` msg || "CR#$42" `T.isPrefixOf` msg || "CD#$42" `T.isPrefixOf` msg ||
        "IA#$42" `T.isPrefixOf` msg || "DY#$42" `T.isPrefixOf` msg
        then
            do
                st <- atomically $ readTVar state
                let subSt = subState sender group st
                broadcast msg subSt
                print $ mes `mappend` msg
                let names = [a | (a,_,_,_,_,_,_,_) <- st]
                print "Here are the names which are currently being served"
                mapM_ print names

     else if "CO#$42" `T.isPrefixOf` msg
        then
            mask_ $ do
                old <- atomically $ readTVar state
                let new = changeGroup sender extra old
                atomically $ writeTVar state new
                let subSt1 = subState sender extra new
                broadcast ("NN#$42," `mappend` group `mappend` "," `mappend` sender `mappend` "," `mappend` (pack "<br>") `mappend` T.concat (intersperse "<br>" (textState subSt1))) subSt1

     else if "XX#$42" `T.isPrefixOf` msg
        then
            mask_ $ do
                s <- atomically $ readTVar state
                let new = filter (\(a,_,_,_,_,_,_,_) -> a == sender) s
                atomically $ writeTVar state new

     else if "CG#$42" `T.isPrefixOf` msg
        then
            mask_ $ do
                old <- atomically $ readTVar state
                let new = changeScore sender extraNum extraNum2 old
                atomically $ writeTVar state new
                st <- atomically $ readTVar state
                let subSt = subState sender group st
                broadcast ("NN#$42," `mappend` group `mappend` "," `mappend` sender `mappend` ","
                    `mappend` (pack "<br>") `mappend` T.concat (intersperse "<br>" (textState subSt))) subSt

-- ****************************************** TASKS

     else if "TD#$42" `T.isPrefixOf` msg  -- send the tasks when someone changes group.
        then
            do
                st <- atomically $ readTVar state
                let subSt = subState sender group st
                print "<$><$><$> & & & & & <@><@><@>  In TD#$42 - - taskFile and tFile are below"
                print taskFile
                let tFile = T.replace nl T.empty taskFile
                print tFile
                print "<$><$><$> & & & & & <@><@><@>  In TD#$42 - - taskFile and tFile are above"
                TIO.writeFile tsks tFile
                broadcast ("TD#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` mark `mappend` tFile) subSt

     else if "TA#$42" `T.isPrefixOf` msg  -- add a new task
        then
            do
                st <- atomically $ readTVar state
                let subSt = subState sender group st
                let newTask = head.drop 1 $ T.splitOn (pack "<$#&#$>") msg
                let a = newTask `mappend` taskFile
                save tsks $ T.replace nl T.empty a
                atomically $ writeTVar taskTVar a
                broadcast ("TA#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` mark `mappend` newTask) subSt

     else if "TE#$42" `T.isPrefixOf` msg          -- edit a task
        then
            do
                b <- substitute extraNum taskFile extra2
                save tsks $ T.replace nl T.empty b
                atomically $ writeTVar taskTVar b
                st <- atomically $ readTVar state
                let subSt = subState sender group st
                broadcast ("TE#$42," `mappend` group `mappend` com
                    `mappend` sender `mappend` com `mappend` extra `mappend` com `mappend` extra2  ) subSt

     else if "TT#$42" `T.isPrefixOf` msg   -- toggle the checkbox 
        then
            do
                st <- atomically $ readTVar state
                let subSt = subState sender group st
                let pair = splitAt extraNum (T.splitOn at taskFile)
                let txt = Prelude.head (snd pair)
                let list2 = T.splitOn com txt
                let bool |(list2 !! 1) == true = false 
                         | otherwise = true
                
                print "************************************ txt and bool >>>>>"
                print txt
                print bool
                print "************************************ txt and bool >>>>>"
                let list3 = [list2 !! 0, bool, list2 !! 2, list2 !! 3]
                let txt2 = T.intercalate com list3
                let list4 = (fst pair) ++ txt2:(drop 1 (snd pair))
                let taskList = T.intercalate at list4
                atomically $ writeTVar taskTVar taskList
                save tsks taskList
                broadcast ("TT#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` extra) subSt
 
     else if "TX#$42" `T.isPrefixOf` msg  -- Delete a task
        then
            do
                let b = T.splitOn at taskFile
                let c = splitAt extraNum b
                let d = fst c ++ (tail (snd c))
                let e = T.intercalate at d
                atomically $ writeTVar taskTVar e
                TIO.writeFile tsks e
                st <- atomically $ readTVar state
                let subSt = subState sender group st
                broadcast ("TX#$42," `mappend` group `mappend` ","
                    `mappend` sender `mappend` "," `mappend` (pack $ show extraNum)) st
                    

-- ****************************************************************************** START COMMENTS

--
-- ****************************************************************************** END COMMENTS


    else do
        print "*********************************************************"
        print "Message fell through to the bottom in Main.hs"
        print msg
        st <- atomically $ readTVar state
        print "length of ServerState: "
        print (length st);
        let names = [a | (a,_,_,_,_,_,_,_) <- st]
        print "Here are the names which are currently being served"
        mapM_ print names
        print "<@><#><$><#><@>"
        old <- atomically $ readTVar state
        let new = old
        atomically $ writeTVar state new
        print "*********************************************************"

