
    // onChange = require('on-change');
    // import ws from 'ws';
    // import {makeHTTPDriver} from '@cycle/http';
    // import {require} from "requirejs";
    // Maybe = require('folktale/maybe');
    // console.log("Maybe is", Maybe);
    // compose = require('folktale/core/lambda/compose');
    import {h,p,span,h1,h2,h3,pre,a,br,div,label,input,hr,makeDOMDriver} from '@cycle/dom';
    import {clone} from 'ramda';
    import Cycle from '@cycle/xstream-run';
    import code from './code.js';
    import {run} from './cycle-run.js';

    //  socket = new WebSocket("ws://localhost:3055");
    
    // socket = new WebSocket("ws://142.93.205.167:3055");
    socket = new WebSocket("ws://schalk.net:3055");
    // socket = new WebSocket("ws://schalk.site:3055");
    // ws = new WebSocket("ws://echo.websocket.org");

console.log("************************** h and clone *****************"),
    h = h;   // For use in monad.js

    clone = clone;
    console.log(clone);
console.log(" END ************************** h and clone ***************** EBD"),

  bNode = function bNode(arr) {
      var x = styl(arr.length);
      var node = h('div#bNode', [
        h('button#0.num', {
          style: {
            display: x[0]
          }
        }, ' ' + arr[0] + ' '),
        h('button#1.num', {
          style: {
            display: x[1]
          }
        }, ' ' + arr[1] + ' '),
        h('button#2.num', {
          style: {
            display: x[2]
          }
        }, ' ' + arr[2] + ' '),
        h('button#3.num', {
          style: {
            display: x[3]
          }
        }, ' ' + arr[3] + ' ')
      ]);
      return node;
    };


    MonadState.prototype.dec = function () {
      this.s[1] -= 1;
      buttonNode = bNode(this.s[0][this.s[1]][4]);
      socket.send(`CG#$42,${pMgroup.x},${pMname.x},${
      this.s[0][this.s[1]][0]},${this.s[0][this.s[1]][1]}`)
      window[this.id] = this;
      return this;
    };

    MonadState.prototype.inc = function () {
      this.s[1] += 1
      buttonNode = bNode(this.s[0][this.s[1]][4]);
      socket.send(`CG#$42,${pMgroup.x},${pMname.x},${this.s[0][this.s[1]][0]},${this.s[0][this.s[1]][1]}`)
      window[this.id] = this;
      return this;
    };

    MonadState.prototype.run = function ([
      score = this.s[0][this.s[1]][0],
      goals = this.s[0][this.s[1]][1],
      operator = this.s[0][this.s[1]][2],
      picked = this.s[0][this.s[1]][3].slice(),
      display = this.s[0][this.s[1]][4].slice(),
      playerName = pMname.x,
      playerGroup = pMgroup.x
    ]) {
      pMscore.ret(score);
      pMgoals.ret(goals);
      pMgroup.ret(playerGroup);
      this.s[1] += 1;
      var newState = this.s.slice();
      newState[0].splice(this.s[1], 0, [score, goals, operator, picked, display, playerName, playerGroup])
      this.s = newState;
      buttonNode = bNode(display);
      return window['gameMonad'] = new MonadState('gameMonad', newState);
    }

    function updateCalc(ar, op) {
      var result = calc(ar[0], op, ar[1]);
      ar
      if (result === 18 || result === 20) {
        score(result);
      } else {
        var a = gameMonad.fetch4().slice();
        a.push(result);
        gameMonad.run([, , 0, [], a, , ]);
      }
    };

    function process(a) { //Assembles the HTML for display.
      var arr = a;
      commentMonad.html = [];
      var n = -1;
      arr.map(a => {
        var x = a.split("<o>");
        if (x.length != 2) x = ['malfunction', '8888']
        x[1] = x[1].replace(/<<>>/g, ',');
        var show = showFunc(x[0], pMname.x);
        n += 1;
        commentMonad.html.push(h('div#' + n, [
          h('span', x[0] + ' commented: ' + x[1].replace(/<<>>/g, ",")),
          h('br'),
          h('textarea#commit', {
            props: {
              cols: 55,
              rows: 2
            },
            style: {
              display: show
            }
          }, x[1]),
          h('button#deleteB', {
            props: {
              innerHTML: 'delete'
            },
            style: {
              display: show,
              fontSize: 14
            }
          }),
          h('br'),
          h('span', '***************************************************************')
        ]))
      })
    }

    function pfactors(primes, n) {
      var ar = [];
      while (n != 1) {
        primes.map(p => {
          if (n / p === Math.floor(n / p)) {
            ar.push(p);
            n = n / p;
          };
        })
      }
      return ar;
    }

    MonadState3.prototype.init = function (str) { // All comments delivered on load.
      this.s[0] = str;
      this.s[1] = this.s[0].split("<@>");
      this.s[1] = this.s[1].filter(v => (v != ""));
      result444 = process(this.s[1]);
    }

    MonadState3.prototype.append = function (str) {
      this.s[0] = this.s[0] + str;
      this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
      process(this.s[1]);
    }

    MonadState3.prototype.edit = function (num, txt) {
      console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
      this.s[1].splice(num, 1, txt);
      this.s[0] = this.s[1].join("<@>");
      this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
      console.log('this.s[1]', this.s[1]);
      console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
      process(this.s[1]);
    };

    MonadState3.prototype.remove = function (num) {
      console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
      console.log(this.s[1]);
      this.s[1] = this.s[1].filter(v => v !== '');
      console.log(this.s[1]);
      this.s[1].splice(num, 1);
      console.log(this.s[1]);
      console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
      this.s[0] = this.s[1].join("<@>");
      process(this.s[1]);
    };

    MonadState3.prototype.init = function (str) { // All comments delivered on load.
      this.s[0] = str;
      this.s[1] = this.s[0].split("<@>");
      this.s[1] = this.s[1].filter(v => (v != ""));
      result444 = process(this.s[1]);
    }

    MonadState3.prototype.append = function (str) {
      this.s[0] = this.s[0] + str;
      this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
      process(this.s[1]);
    }

    MonadState3.prototype.edit = function (num, txt) {
      console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
      this.s[1].splice(num, 1, txt);
      this.s[0] = this.s[1].join("<@>");
      this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
      console.log('this.s[1]', this.s[1]);
      console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedit in edit');
      process(this.s[1]);
    };

    MonadState3.prototype.remove = function (num) {
      console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
      console.log(this.s[1]);
      this.s[1] = this.s[1].filter(v => v !== '');
      console.log(this.s[1]);
      this.s[1].splice(num, 1);
      console.log(this.s[1]);
      console.log('QQQQQQQQQQQQQQQQQQQQQQQQQQ In remove. this.s[1]')
      this.s[0] = this.s[1].join("<@>");
      process(this.s[1]);
    };

    it7 = () => mMZ52.bnd(string => {
      callOrder = callOrder > 24 ? 1 : callOrder + 1;
      if (callOrder === 1) start77 = Date.now();
      m42_.push(callOrder + "  ");
      m42_.push(string)
      m42_.push(h('br'));
      if (callOrder === 25) m42_.push('Elapsed time: ' + (Date.now() - start77) + " ms");
    });

    it7_b = () => mMZ53.bnd(string => {
      callOrder2 = callOrder2 > 24 ? 1 : callOrder2 + 1;
      if (callOrder2 === 1) start78 = Date.now();
      m43_.push(callOrder2 + "  ");
      m43_.push(string)
      m43_.push(h('br'));
      if (callOrder2 === 25) m43_.push('Elapsed time: ' + (Date.now() - start78) + " ms");
    });

    var funcP = () => {
      var fred = [];
      bind(1)(addP(2))(cubeC)(addC(3))(multP(2))(multC(3))
        (addC(30))(multP(1 / 5))(it4)(it6)(it7)().slice(1, 9)
        .map(v => v.then(q => {
          fred.push(q.x);
          freday = fred.join(' ')
          diffRender()
        }))
    }

    function websocketsDriver() {
      return xs.create({
        start: listener => {
          socket.onmessage = msg => listener.next(msg)
        },
        stop: () => {
          socket.close()
        }
      });
    };

    socket.onclose = function (event) {
      console.log('<><><> ALERT - socket is closing. <><><> ', event);
    };

    login();

    function login() {
      console.log('00000000000000000000000000000000 Entering login', socket.readyState);
      setTimeout(function () {
        if (socket.readyState === 1) {
          console.log('readyState is', socket.readyState);
          var v = Math.random().toString().substring(5);
          var v2 = v.toString().substring(2);
          var v2 = "password"
          playerName = v;
          playerGroup = "solo";
          pMname.ret(v);
          pMoldName.ret(v);
          pMgroup.ret('solo');
          gameMonad.run([0, 0, 0, [],
            [7, 7, 7, 7], v, "solo"
          ]);
          var combo = v + '<o>' + v2;
          socket.send('CC#$42' + combo);
          pMcombo.ret(combo);
          pMclicked.ret([]);
          socket.send(`GZ#$42,solo,${v}`);
        } else {
          login();
        }
      }, 1000)
    }

    function main(sources) {
      console.log('0^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ got to main()');

      const messages$ = sources.WS.map(e => {
        var v = e.data.split(',');
        var group = v[1]
        var sender = v[2];
        var extra = v[3];
        var extra2 = v[4];

        mMZ9.bnd(() => {
          console.log("sender is", sender);
          console.log("extra is", extra);
          console.log("The full message is", e);
          console.log("v is", v);
        });

        mMZ10.bnd(() => {
          if (sender === pMname.x) {
            gameMonad.run([v[7], v[8], 0, [],
              [v[3], v[4], v[5], v[6]]
            ]);
          } else gameMonad.run([, , , [],
            [v[3], v[4], v[5], v[6]]
          ]);
        });

        mMZ11.bnd(() => {
          console.log('The message arrived', messages$);
          var message = v.slice(3, v.length).join(', ');
          var str = v[2] + ': ' + message;
          messages.unshift(h('span', str), h('br'));
          console.log('The message was typeof ar', typeof str);
        });

        mMZ12.bnd(() => {
          mMgoals2.ret('The winner is ' + v[2]);
          setTimeout(function () {
            mMgoals2.ret('')
          }, 700);
        });

        mMZ13.bnd(() => {
          mMgoals2.ret('A player named ' + v[2] +
            ' is currently logged in. Page will refresh in 4 seconds.')
          refresh()
        });

        mMZ14.bnd(() => {
          var ar = e.data.split("<$>")[1];
          console.log("In mZ14.bnd - - ar is", ar);
          console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzztaskMonad', taskMonad);
          return taskMonad.init(ar);
        });

        mMZ15.bnd(() => {
          var ar = [];
          var arr = v[3].slice();
          var arr2 = arr.split("<$!$>");
          var arr3 = arr2.map(v => {
            console.log('In mMZ15.bnd ar, arr, arr2, and arr3 are', ar, arr, arr2, arr3),
              ar.push(v);
            ar.push(h('br'));
          });
          gameData = ar;
        });

        mMZ16.bnd(() => { // Prefix RR#$42
          var str = mMcommentStr.x;
          if (extra2 === "code1") {
            mMregister.ret('The registered name ' + extra + ' and the associated password were recognized. ');
            socket.send('GZ#$42,' + pMgroup.x + ',' + pMname.x + ',<@>' + str);
          }
          if (extra2 === "code2") {
            mMregister.ret('The new name ' + extra + ' was registered.');
            socket.send('GZ#$42,' + pMgroup.x + ',' + pMname.x + ',<@>' + str);
          }
          if (extra2 === "code3") {
            pMname.ret(sender);
            mMregister.ret('The password you entered is not the password that is registered for ' + tempName + '.');
            mMshowRegister.ret('inline');
          }
        });

        mMZ17.bnd(() => { // Prefix GZ#$42
          var newStr = extra.substring(0, extra.length - 3);
          newStr = newStr.replace(/<@><@>/g, "<@>");
          newStr = newStr.replace(/↵/g, '');
          if (newStr === "") return;
          commentMonad.init(newStr);
        });

        mMZ18.bnd(() => { // Prefix GN#$42  NEW COMMENT
          commentMonad.append(extra);
        });

        mMZ19.bnd(() => { // Prefix GE#$42  EDIT A COMMENT
          commentMonad.edit(extra, extra2);
          console.log('In mMZ19 to edit a comment. <><><><><><><> extra, extra2:', extra, extra2);
        });

        mMZ20.bnd(() => { // Prefix GD#$42  DELETE A COMMENT
          commentMonad.remove(parseInt(extra, 10));
        });
        // ******************************************************* TASKS
        mMZ21.bnd(() => { // add a new a task
          console.log('ooooooooooooooooooo New task from the server', extra);
          taskMonad.append(extra);
        });

        mMZ22.bnd(() => { // edit a task
          taskMonad.edit(v[3], v[4]);
        });

        mMZ23.bnd(() => {
          console.log('In mMZ23 -- v[3] is', v[3]);
          taskMonad.toggle(v[3]);
        });

        mMZ24.bnd(() => { //Delete a task
          taskMonad.delete(v[3]);
        });

        mMZ25.bnd(() => { // Receive tasks when group changes
          console.log('QQQQQQ  Bingo! extra is QQQQQQQWWWWWWWWWWQQQQQQQQ in mMZ25.bnd. ', extra);
          taskMonad.html = taskMonad.init(extra);
        });

        mMZ27.bnd(() => {
          console.log("mMZ27 v[3]", v[3]);
          mMZ38.release(v[3]);
        });

        mMZ28.bnd(() => {
          if (playerName === sender) mMZ40.release(v[3]);
          else console.log('message from sender to BC#$42')
        });

        mMZ29.bnd(() => {
          if (playerName === sender) mMZ41.release(v[3]);
          // else console.log('message from sender to BD#$42')
        });

        mMZ30.bnd(() => {
          if (playerName === sender) mMZ42.release(v[3]);
          else console.log('message from sender to BE#$42')
        });


        ret(v[0])
          .bnd(next, 'CC#$42', mMZ9)
          .bnd(next, 'CA#$42', mMZ10) // Dice roll
          .bnd(next, 'CD#$42', mMZ11)
          .bnd(next, 'CE#$42', mMZ12)
          .bnd(next, 'EE#$42', mMZ13)
          .bnd(next, 'TD#$42', mMZ14)
          .bnd(next, 'NN#$42', mMZ15)
          .bnd(next, 'RR#$42', mMZ16)
          .bnd(next, 'GZ#$42', mMZ17) // Comments automatically arrive after the app loads
          .bnd(next, 'GN#$42', mMZ18)
          .bnd(next, 'GE#$42', mMZ19)
          .bnd(next, 'GD#$42', mMZ20)
          .bnd(next, 'TA#$42', mMZ21) // Automatic task list load on group change
          .bnd(next, 'TE#$42', mMZ22) // edit a task
          .bnd(next, 'TT#$42', mMZ23) // chechbox
          .bnd(next, 'TX#$42', mMZ24) // delete button
          .bnd(next, 'TI#$42', mMZ25) // group change
          .bnd(next, 'BB#$42', mMZ27) // works in conjunction with it4
          .bnd(next, 'BC#$42', mMZ28) // works in conjunction with it4
          .bnd(next, 'BD#$42', mMZ29) // works in conjunction with it4_b
          .bnd(next, 'BE#$42', mMZ30) // works in conjunction with it4_c
      });

      function next(x, y, instance, z) {
        if (x == y) {
          instance.release(z);
        }
        return ret(x);
      };

      var mBind$ = sources.DOM.select("#makeBind").events("click");

      var mBindAction$ = mBind$.map(() => bindTest());

      var itterResult = h('div', 'ready');
      var doubleResult = h('div', 'ready');

      var comment$ = sources.DOM.select('#comment').events('keydown');

      var commentAction$ = comment$.map(e => {
        if (e.keyCode == 13) {
          e.preventDefault();
          var comment = e.target.value.replace(/,/g, "<<>>");
          comment = pMname.x + "<o>" + comment
          socket.send(`GN#$42,${pMgroup.x},${pMname.x},<@>${comment}<@>`);
        }
      });

      var deleteClick2$ = sources.DOM
        .select('#deleteB').events('click');

      var deleteAction2$ = deleteClick2$.map(function (e) {
        var index = parseInt(e.target.parentElement.id, 10);
        var old = commentMonad.s[1].slice(index, index + 1)[0];
        socket.send(`GD#$42,${pMgroup.x},${pMname.x},${index},${old}`);
      });

      var editB$ = sources.DOM
        .select('textarea#commit').events('keydown');

      var editBAction$ = editB$.map(function (e) {
        if (e.keyCode == 13) {
          var index = parseInt(e.target.parentElement.id, 10);
          var w = e.target.value.split(",");
          var nu = pMname.x + "<o>" + w.join('<<>>');
          var old = commentMonad.s[1].slice(index, index + 1)[0];
          socket.send(`GE#$42,${pMgroup.x},${pMname.x},${index},${old},${nu}`);
        }
      })

      var abcde = 'inline';
      var fghij = 'inline';

      var registerPress$ = sources.DOM
        .select('input.register').events('keypress');

      var registerPressAction$ = registerPress$.map(e => {
        mMerror.ret('');
        var str = e.target.value;
        var count = (str.match(/,/g) || []).length;
        if (count === 0) nameMess = "Please enter a name, a comma, and a password";
        else if (count > 1) nameMess = "Commas are not allowed in names or passwords";
        else nameMess = '';
        var art = str.split(',');
        if (e.keyCode === 13) {
          mMerror.ret('');
          if (art.length != 2) {
            mMerror.ret(' There should be one and only one comma');
            return;
          } else {
            var name = art[0];
            pMname.ret(art[0]);
            tempName = name;
            var x = art.join('<o>');
            mMshowRegister.ret('none');
            playerName = name;
            console.log('pMname.x is', pMname.x);
            console.log(pMname.x === playerName);
            socket.send(`RR#$42,${pMgroup.x},${pMoldName.x},${x}`);
          }
          setTimeout(function () {
            socket.send(`CG#$42,${pMgroup.x},${name},${pMscore.x},${pMgoals.x}`);
          }, 700);
        }
      });

      var groupPress$ = sources.DOM
        .select('input#group').events('keypress');

      var groupPressAction$ = groupPress$.map(e => {
        if (e.keyCode === 13 && e.target.value) {
          var g = e.target.value.replace(/,/g, '');
          pMgroup.ret(g); 
          send("CO#$42", g);
          gameMonad.run([0, 0, 0, [],
            [0, 0, 0, 0], , g
          ]);
          socket.send(`TI#$42,${g},${pMname.x}`);
        }
      });

      var messagePress$ = sources.DOM
        .select('input.inputMessage').events('keydown');

      var messagePressAction$ = messagePress$.map(function (e) {
        if (e.keyCode === 13) {
          socket.send(`CD#$42,${pMgroup.x},${pMname.x},${e.target.value}`);
          e.target.value = '';
        }
      });

      var updatePlayers = function updatePlayers(data) {
        sMplayers.s.clear();
        var namesL = data.split("<br>");
        namesList = namesL.slice(1);
        updateScore(namesList);
        namesList.forEach(player => sMplayers.s.add(player.trim()));
      }

      function updateScore(v) {
        var g = [];
        for (let k of v) {
          g.push(h('div', '  ' + k));
        };
        return g
      };

      var m80Change$ = sources.DOM
        .select('#m80').events('change');

      var m80Action$ = m80Change$.map(() => {});

      //****************************************************************** START MATRIX
      var indexDS = 0;

      function rMatrixF(a) {
        var cw1 = Math.sqrt(a[0] * a[5] + a[1] * a[4]);
        var cw2 = Math.sqrt(a[2] * a[7] + a[3] * a[6]);
        var cw3 = Math.sqrt(a[8] * a[13] + a[9] * a[12]);
        var cw4 = Math.sqrt(a[10] * a[15] + a[14] * a[11]);
        var cw = Math.sqrt(cw1 * cw4 + cw2 * cw3);
        return cw
      }



      var rNumsDS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

      var ArrDS = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      ];

      function makeRDS(arr) {
        var r = arr;
        return [
          h('button#mR0.mR', r[0]),
          h('button#mR1.mR', r[1]),
          h('button#mR2.mR', r[2]),
          h('button#mR3.mR', r[3]),
          h('button#mR4.mR', r[4]),
          h('button#mR5.mR', r[5]),
          h('button#mR6.mR', r[6]),
          h('button#mR7.mR', r[7]),
          h('button#mR8.mR', r[8]),
          h('button#mR9.mR', r[9]),
          h('button#mR10.mR', r[10]),
          h('button#mR11.mR', r[11]),
          h('button#mR12.mR', r[12]),
          h('button#mR13.mR', r[13]),
          h('button#mR14.mR', r[14]),
          h('button#mR15.mR', r[15])
        ];
      };

      var rDataDS = [
        h('button#mR0.mR', 0),
        h('button#mR1.mR', 1),
        h('button#mR2.mR', 2),
        h('button#mR3.mR', 3),
        h('button#mR4.mR', 4),
        h('button#mR5.mR', 5),
        h('button#mR6.mR', 6),
        h('button#mR7.mR', 7),
        h('button#mR8.mR', 8),
        h('button#mR9.mR', 9),
        h('button#mR10.mR', 10),
        h('button#mR11.mR', 11),
        h('button#mR12.mR', 12),
        h('button#mR13.mR', 13),
        h('button#mR14.mR', 14),
        h('button#mR15.mR', 15)
      ];

      function rExchange(j, k, rN = rNumsDS, AR = ArrDS, rD = rDataDS, i = mMindexDS) {
        console.log("In rExchange i is", i);
        var r = rN;
        var a = r[j];
        r[j] = r[k];
        r[k] = a;
        console.log(r);
        var g = r.slice();
        AR.splice(i.x, 0, g);
        console.log(AR)
        rD = makeRDS(r);
        return rD;
      }

      var horseDS = rDataDS;
      //****************************************************************** END MATRIX

      var rNuS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
      var rGrid$ = rNuS => xs.of(rNuS);

      function gridDriver() {
        return xs.create({
          start: listener => {
            rGrid$ = ar => listener.next(ar)
          },
          stop: () => {}
        })
      };

      function rExDS([, rN = rNumsDS, AR = ArrDS, rD = rDataDS, i = mMindexDS]) {
        console.log("In rExchange i is", i);
        var j = ar[0];
        var k = ar[1];
        var r = rN;
        var a = r[j];
        r[j] = r[k];
        r[k] = a;
        console.log(r);
        var g = r.slice();
        AR.splice(i.x, 0, g);
        console.log(AR)
        rD = makeRDS(r);
        return rD;
      }


      function rClick() {
        document.getElementById('rNums').click()
      };

      var indexDS = 0;

      var m80$ = sources.DOM
        .select('#mR0').events('click')
        .map(e => {
          console.log("e is", e);
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m81$ = sources.DOM
        .select('button#mR1.mR').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m82$ = sources.DOM
        .select('#mR2.mR').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m83$ = sources.DOM
        .select('button#mR3').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m84$ = sources.DOM
        .select('button#mR4').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m85$ = sources.DOM
        .select('button#mR5').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m86$ = sources.DOM
        .select('button#mR6').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m87$ = sources.DOM
        .select('button#mR7').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m88$ = sources.DOM
        .select('button#mR8').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m89$ = sources.DOM
        .select('button#mR9').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m810$ = sources.DOM
        .select('button#mR10').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m811$ = sources.DOM
        .select('button#mR11').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m812$ = sources.DOM
        .select('button#mR12').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m813$ = sources.DOM
        .select('button#mR13').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m814$ = sources.DOM
        .select('button#mR14').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      var m815$ = sources.DOM
        .select('button#mR15').events('click')
        .map(e => {
          rADS.push(toInt(e.target.id.slice(2, 4)));
          if (rADS.length === 2) {
            mMindexDS.ret(mMindexDS.x + 1);
            rExchange(rADS[0], rADS[1]);
            rADS = [];
          }
        });

      function rGridFunc(a = rADS, i = mMindexDS) {
        i.ret(i.x + 1);
        rExchange(a[0], a[1]);
        a = [];
      };

      var gridCh$ = sources.DOM
        .select('#gridInput').events('change');

      var backCl$ = sources.DOM
        .select('#gridBack').events('click')

      var bAction$ = backCl$.map(() => {
        if (mMindexDS.x > 0) {
          mMindexDS.ret(mMindexDS.x - 1);
          rNumsDS = ArrDS[mMindexDS.x].slice();
        };
      });

      var forwardCl$ = sources.DOM
        .select('#gridForward').events('click')

      var fAction$ = forwardCl$.map(() => {
        if (mMindexDS.x + 1 < ArrDS.length) {
          mMindexDS.ret(mMindexDS.x + 1);
          rNumsDS = ArrDS[mMindexDS.x].slice();
        };
      });

      //*********************** ZULU ********************************* END MATRIX

      var rollClick$ = sources.DOM
        .select('#roll').events('click');

      var rollClickAction$ = rollClick$.map(() => {
        var a = gameMonad.fetch0() - 1;
        var b = gameMonad.fetch1();
        socket.send(`CA#$42,${pMgroup.x},${pMname.x},6,6,12,20,${a},${b}`);
      });

      var numClick$ = sources.DOM
        .select('.num').events('click');

      var numClickAction$ = numClick$.map(e => {
        if (gameMonad.fetch3().length < 2) {
          var a = gameMonad.fetch3();
          var b = gameMonad.fetch4();
          a.push(b.splice(e.target.id, 1)[0]);
          gameMonad.run([, , , a, b, , ]);
          if (a.length === 2 && gameMonad.fetch2() != 0) {
            updateCalc(a, gameMonad.fetch2())
          }
        }
      }).startWith([0, 0, 0, 0]);

      var opClick$ = sources.DOM
        .select('.op').events('click');

      var opClickAction$ = opClick$.map(e => {
        var s3 = gameMonad.fetch3();
        if (s3.length === 2) {
          updateCalc(s3, e.target.innerHTML);
        } else {
          gameMonad.run([, , e.target.innerHTML, , , , ]);
        }
      });

      var forwardClick$ = sources.DOM
        .select('#ahead.tao1').events('click')

      var backClick$ = sources.DOM
        .select('#back.tao100').events('click');

      var backAction$ = backClick$.map(() => {
        if (gameMonad.s[1] > 0) {
          gameMonad.dec();
        }
      });

      var forwardAction$ = forwardClick$.map(() => {
        if (gameMonad.s[1] < gameMonad.s[0].length - 1) {
          gameMonad.inc();
        }
      });

      var nextInt$ = sources.DOM.select('#pr1').events('click')
      .map(e => {proxyResult = count.next});

      var prevInt$ = sources.DOM.select('#pr2').events('click')
      .map(e => {proxyResult = count.previous});

      var primeInts$ = sources.DOM.select('#pr3').events('click')
      .map(e => {proxyResult = count.factorial});

      var factorialInt$ = sources.DOM.select('#pr4').events('click')
      .map(e => {proxyResult = count.primes});

      var allInts$ = sources.DOM.select('#pr5').events('click')
      .map(e => {proxyResult = count.ints});


      var fibNums$ = sources.DOM.select('#fibNum').events('keypress')
      .map(e => {
          if (e.keyCode === 13) {
              F_17 = f17(Math.abs(Math.floor(toInt(e.target.value))));
              F_18 = f17(Math.abs(Math.floor(toInt(e.target.value))),0,1,true);
          }
      });

      // ******************************************************************** <><><><><><> -> End Demos
      var itterPress$ = sources.DOM
        .select('#itter').events('keypress');
      var itterADSction$ = itterPress$.map(e => {
        if (e.keyCode === 13) {
          itterResult = h('div', styleFunc(["#FFD700", , "16px", , , ]), bind(pInt(e.target.value))(v => v)(() => mMZ23.bnd(v => v * v * v))(() => 3)(x => mMZ23.release(3) + x)(q => q * q / ar[1])(terminate).join(', '));
        }
      });

      var doublePress$ = sources.DOM
        .select('#double').events('keypress');

      var doubleAction$ = doublePress$.map(e => {
        var dRes = "";
        if (e.keyCode === 13) {
          bind(3)
            (cubeP)(addP(3))(c => ar[1]
              .then(v => v - 75 + c * ar[0]))(terminate)
            .map(v => v.then ? v.then(s =>
              dRes = dRes + s + ', ') : dRes = dRes + v + ', ')
        }
      });

      // ******************************************************************** <><><><><><> -> End Demos

var fib2 = function fib2(v) {
  if (v[2] > 1) {
    mMfib.ret([v[1], v[0] + v[1], v[2] - 1]);
  } else {
    mM19.ret(v[0]);
  }
};

var fibPress$ = sources.DOM
  .select('input#code').events('keydown');

var fibPressAction$ = fibPress$.map(function (e) {
  if (e.target.value === '') {
    return;
  };
  if (e.keyCode === 13) {
    mM21.ret(e.target.value);
    fib2([0, 1, e.target.value]);
  }
});

var printingPress$ = sources.DOM
  .select('input#demo2').events('keydown');

var demo2Action$ = printingPress$.map(function (e) {
  if (e.target.value === '') return;
  if (e.keyCode === 13) {
    Bind.bind1 = [];
    bind1(e.target.value)(cubeP)
      (() => idP(Bind.bind1[0] - Bind.bind1[1]))
      (v => addP(Bind.bind1[1])(v))
  };
});


// *******************************************n****************************** ENDOM iginal Fibonacci END

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START PRIME FIB
var topPrime = 2;
var fS = [2]
var pFS = [2];



const workerB$ = sources.WWB.map(m => {
  if (m.data[3] === 'color') {
    fill1Monad.ret(m.data[0]);
    fill2Monad.ret(m.data[1]);
    fill3Monad.ret(m.data[2]);
    mMprimeBlurb.ret(m.data[5]);
    mMfibBlurb.ret(m.data[4]);
    mMprimeFibBlurb.ret(m.data[6]);
  } else {
    fS = m.data[1].join(', ');
    pFS = m.data[2].join(', ');
    mMelapsed.ret(elapsed(m.data[3]))
    if (m.data[0].length > primeState2.length) {
      primeState2 = m.data[0];
      fibState = m.data[1];
      prFibState = m.data[2];
      var topP = primeState2.slice(-1);
      topPrime = topP.toString();
    }
  }
});

var fibKeyPress5$ = sources.DOM
  .select('input#fib92').events('keyup');

var primeFib$ = fibKeyPress5$.map(num => {
  var n = num.target.value;
  var j = Math.sqrt(n);
  var k = primeState2.slice(-1)[0];
  if (k > j) {
    var t = Date.now();
    var fibs = fibState.slice(0, fibState.indexOf(fibState.find(e => e > n)));
    fS = fibs.join(', ');
    var prFibs = fibs.filter(n => prFibState.indexOf(n) !== -1);
    pFS = prFibs.join(', ');
    mMelapsed.ret(elapsed(t));
    diffRender();
  } else {
    workerB.postMessage([primeState2, fibState, prFibState, n]);
  }
});

var clearprimes$ = sources.DOM
  .select('#clearprimes').events('click')
  .map(() => mMres.ret([mMres.x[0], '', mMres.x[2], mMres.x[3]]));


// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  Begin Easy


//******************************************************************* worker
m42_RES = [];
m43_RES = [];

var clearClick$ = sources.DOM
  .select('button.clear_P').events('click')
  .map(e => {
    m42_RESULT = [];
    m42_RESULT2 = [];
  })

var factors2Press$ = sources.DOM
  .select('button.factors_P').events('click');

var factors2Action$ = factors2Press$.map(function (e) {
  var factors = [];
  mMfactors3.ret('');
  bind(65)(cubeC)(it4)(it6)(it7);
});

workerG$ = sources.WWG.map(m => {
  console.log("Message from workerG", m);
  m778_RESULT = result778(m.data);
  mMZ38.release(m.data);
  if (m.data) {
    console.log('GOOD m.data')
  } else {
    return "cow"
  }
  if (m.target) {
    console.log('GOOD m.target')
  } else {
    return "shit"
  }
  if (m.data[1]) {
    console.log('GOOD m.data[1]')
  } else {
    return 'donkey'
  }
  if (m.target.ar2) {
    console.log('GOOD m.data.ar2')
  } else {
    return 'dung'
  }

});

workerL$ = sources.WWL.map(m => {
  console.log("Message from workerL$ MMMMMMMMMMMMMMMMMMMMMMMMMM Here it is:", m);
  m779_RESULT = result779(m.data);
  console.log("Still in workerL$ -- m779_RESULT is", m779_RESULT);
  mMZ39.release(m.data);
  if (m.data) {
    console.log('GOOD m.data')
  } else {
    return "cow"
  }
  if (m.target) {
    console.log('GOOD m.target')
  } else {
    return "shit"
  }
  if (m.data[1]) {
    console.log('GOOD m.data[1]')
  } else {
    return 'donkey'
  }
  if (m.target.ar2) {
    console.log('GOOD m.data.ar2')
  } else {
    return 'dung'
  }

});

var clearClick8$ = sources.DOM
  .select('button.clear_R').events('click')
  .map(() => {
    m43_ = [];
  })

var factorsClick8$ = sources.DOM
  .select('button#factors_R').events('click'); 

var factorsAction8$ = factorsClick8$.map(e => {
  var i = 0;
  m43_ = [];
  while (i < 25) {
    Compose().run(145)(x => x ** 3)(it4_b)(it6_b)(it7_b)();
    i += 1;
  }
});

var aplusClick$ = sources.DOM
  .select('button#aplus').events('click')
  .map(() => {
    _count.add_a
  });

var aminusClick$ = sources.DOM
  .select('button#aminus').events('click')
  .map(() => {
    _count.subtract_a
  });

var bplusClick$ = sources.DOM
  .select('button#bplus').events('click')
  .map(() => {
    _count.add_b
  });

var bminusClick$ = sources.DOM
  .select('button#bminus').events('click')
  .map(() => {
    _count.subtract_b
  });

var resetStateClick$ = sources.DOM
  .select('button#resetState').events('click')
  .map(() => {
    _count.resetState
  });

var setStateA$ = sources.DOM
  .select('#stateA').events('keyup')
  .map(e => {
        _state.a = toFloat(e.target.value);
        _count.go;
  })

var setStateB$ = sources.DOM
  .select('#stateB').events('keyup')
  .map(e => {
        _state.b = toFloat(e.target.value);
        _count.go;
  })






workerH$ = sources.WWH.map(m => {
  mMZ52.release(m.data[1]);
  var w = m.data[0][m.data[0].length - 1];
  if (m.data[0].length > primeState.length) primeState = m.data[0];
});

var factors3Press$ = sources.DOM
  .select('input#factors').events('keypress');

var factors3Action$ = factors3Press$.map(function (e) {
  if (e.keyCode === 13) {
    bind(e.target.value)(it8);
  }
});

/*
workerL$ = sources.WWL.map(m => {
  mMZ53.release(m.data[1]);
  var w = m.data[0][m.data[0].length - 1];
  if (m.data[0].length > primeState.length) primeState = m.data[0];
});
*/

workerM$ = sources.WWM.map(m => {
  mMZ53.release(m.data[1]);
  var w = m.data[0][m.data[0].length - 1];
  if (m.data[0].length > primeState.length) primeState = m.data[0];
});

var factors3Press$ = sources.DOM
  .select('input#factors').events('keypress');

var factors3Action$ = factors3Press$.map(function (e) {
  if (e.keyCode === 13) {
    bind(e.target.value)(it8);
  }
});

mMZ40.bnd(v => {
  console.log("Now <E><E><E><E><E><E><E><Edward the Late>>>>>>>>>>posting to workerH -- v is", v);
  workerH.postMessage([primeState, v])
});

mMZ41.bnd(v => {
  console.log("Now <E><E><E><E><E><E><E><Edward the Late>>>>>>>>>>posting to workerL -- v is", v);
  workerL.postMessage([primeState, v])
});

const result778 = x => h('div', [
  m778_RESULT,
  h('br'),
  h('span', bigBlue, x[3]),
  h('span', bigGreen, x[0]),
  h('span', bigBlue, x[4]),
  h('span', bigRed, x[5]),
]);

var m778_RESULT = h('div', '');

const result779 = x => h('div', [
  m779_RESULT,
  h('br'),
  h('span', bigBlue, x[3]),
  h('span', bigGreen, x[0]),
  h('span', bigBlue, x[4]),
  h('span', bigRed, x[5]),
]);

var m779_RESULT = h('div', '');


var mMZ33Func = x => mMZ33
  .bnd(x => {
    mMt32 = new Monad(x, 'mMt32');
    mMt33.ret(x + ' cubed is ' + x * x * x)
    mMZ33Func(x + 1);
  });

mMZ33Func(0);

var testZ = sources.DOM
  .select('#testZ').events('click');

var testZAction$ = testZ.map(function () {
  mMZ33.release(mMt32.x + 1);
});

var testQ = sources.DOM
  .select('#testQ').events('click');

var testQAction$ = testQ.map(() => {
  mMZ33.release(0);
  diffRender();
});

var testW = sources.DOM
  .select('#testW').events('keypress');

var testWAction$ = testW.map(function (e) {
  if (e.keyCode === 13) {
    mMZ33.release(parseInt(e.target.value, 10));
    diffRender();
  }
});
//*********************************** pingpong ***************  START


var ping = n => ar => {
  var k = Math.floor(Math.random() * 5) + 1;
  if (ar[0] > 10 || ar[1] > 10) {
    diffRender();
    return;
  }
  setTimeout(() => {
    if (n <= k) {
      ppStyle = !ppStyle;
      incF$(n);
      ping(n + 1)(ar);
      diffRender();
    } else if (n % 2 === 0) {
      ar[0] += 1;
      m67_RESULT = h('pre', ppYR, `     SCORE: ping  \${ar[0]} pong: \${ar[1]}  `)
      ping(0)(ar);
      diffRender();
    } else {
      ar[1] += 1
      m67_RESULT = h('pre', ppY, `     SCORE: ping  \${ar[0]} pong: \${ar[1]}  `);
      ping(0)(ar);
      diffRender();
    }
  }, 500);
}

var pingD = a => b => c => h('div', [
  h('pre', a, ` ping        ---> `),
  h('pre', b, `                 <---        pong `),
  h('pre', `          -- SCORE: ping: ` + c[0] + ` pong: ` + c[1]),
]);

m67_RESULT = pingD(_A1)(_A3)([3, 2]);

PingpongMaker = (name) => {
  var a = _A1;
  var b = _A3;
  var c = [0, 0];
  var n = 0;
  var bool = true;
  var k = Math.floor(Math.random() * 7) + 1;
  return function train() {
    if (c[0] > 10 || c[1] > 10) return;
    var ms = 400;
    if (a === _A3) {
      a = _A1;
      b = _A3
    } else if (a === _A1) {
      a = _A3;
      b = _A2
    };
    if (n <= k) {
      n += 1;
      window[name] = pingD(a)(b)(c);
      diffRender();
    } else if (n % 2 === 0) {
      ms = 600
      n = 0
      c[0] += 1;
      window[name] = pingD(_A1)(_A3)(c);
      diffRender();
      k = Math.floor(Math.random() * 7) + 1;
    } else if (n % 2 === 1) {
      ms = 600;
      n = 0;
      c[1] += 1;
      window[name] = pingD(_A3)(_A2)(c);
      diffRender();
      k = Math.floor(Math.random() * 7) + 1;
    }
    setTimeout(function () {
      train();
    }, ms);
  }
}

var makeDisplay = a => b => c => h('div', [
    h('pre', a, ` ping        ---> `),
    h('pre', b, `                 <---        pong `),
    h('pre', `          -- SCORE: ping: ` + c[0] + ` pong: ` + c[1]),
  ]),

  pingCompute = bool => aa => bb => cc =>
  dd => {
    var a;
    var b;
    if (a === "serve") {
      a = _A3;

    }
    var a = aa = bool ? _A1 : _A3;
    var b = aa = bool ? _A3 : _A2;
    pingDisplay = makeDisplay(a)(b)(cc)(d);
  };

var pingScore = [0, 0];

pp4 = () => {
  var a = _A3;
  var b = _A2;
  var c = _A3;
  var d = [0, 0];
  var random = 0;
  var turns = 0;
  var bool = true;
  var car;
  var ms = 300;
  return car = () => {
    bool = !bool;
    pingCompute(bool)(a)(b)(c)
    diffRender()
    if (random === 0) random = Math.floor(Math.random() * 11) + 1; // New serve flag "random === 0" detected.
    setTimeout(function () {
      if (pingScore[0] >= 11 || pingScore[1] >= 11) {
        diffRender()
        turns = 0;
        random = 0;
        pingScore = [0, 0];
      };
      if (turns >= random && turns % 2 === 0) {
        pingScore[0] += 1;
        turns = 0;
        random = 0; // A signal to compute a new random number when the next message comes in.
        diffRender()
      }
      if (turns >= random && turns % 2 === 1) {
        pingScore[1] += 1;
        turns = 0;
        random = 0;
        diffRender()
      }
      ms = (turns < random) ? 300 : 900;
      turns += 1;
      diffRender()
      car()
    }, ms)
  }
};


      // ***************************** start click    

      var pingpong$ = sources.DOM
        .select('button.pingpong').events('click')
        .map(() => {
          PingpongMaker('m67_RESULT')();
          PingpongMaker('m68_RESULT')();
          PingpongMaker('m69_RESULT')();
        });


      // ******************************* end click    

      pingScore = [0, 0];
      pingScore2 = [0, 0];
      pingScore3 = [0, 0];
      // ***************************** start message from workerI    

      const otherP = bool => a => b => c => {
        if (typeof bool !== 'boolean') {
          window[a] = window[a] === _A3 ? _A1 : _A3
          window[b] = window[a] === _A3 ? _A2 : _A3
          diffRender()
          return;
        }
        if (bool) {
          window[a] = _A1;
          window[b] = _A3;
          window[c][0] += 1;
          diffRender();
          return;
        }
        window[a] = _A3;
        window[b] = _A2;
        window[c][1] += 1;
        diffRender();
      };

      const workerI$ = sources.WWI.map(m => {

        if (m.data === "game over") return;
        otherP(m.data)('ping43')('ping44')('pingScore');
        otherP(m.data)('ping45')('ping46')('pingScore2');
        otherP(m.data)('ping47')('ping48')('pingScore3');
        workerI.postMessage(m.data);
        diffRender();
      });


      // ***************************** end message from workerI    

      var pinpon4$ = sources.DOM
        .select('button.pingpong4').events('click')

      var pingpong4$ = pinpon4$.map(() => {

        pp4('ping43')('ping44')('pingScr1');
        // pp4('ping45')('ping46')('pingScr2'); 
        // pp4('ping47')('ping48')('pingScr3');
      });

      // *********************************** pingpong ***************  FINISH

      // var fredButton = h('button#fredButton', "fredButton");
      var diffR = h('button#diffRender', "diffRender");

      const fred$ = sources.FD.map(e => {
        freday = e;
      })

      var frd$ = sources.DOM
        .select('div#fredB').events('click')

      var fredAction$ = frd$.map((e) => {
        freday = [];
        diffRender()
      });

      var fredGo$ = sources.DOM
        .select('button#fredB')
        .events('click')
        .map(() => {
          freday = [];
          funcP()
        });

      // **********************************************************************

      var bindBD$ = sources.BD.map(m => console.log("Say what?", m))

      const workerC$ = sources.WWC.map(m => {
        console.log('The message arriving from workerC is', m.data);
        mMfactors.ret(m.data[1]);
        var w = m.data[0][m.data[0].length - 1];
        if (m.data[0].length > primeState.length) primeState = m.data[0];
      });

      var factorsP$ = sources.DOM
        .select('input#factors_5').events('keyup');

      var fA$ = factorsP$.map(function (e) {
        mMfactors7.ret('');
        var factors = [];
        if (e.keyCode === 13) {
          var ar = (e.target.value).split(',').map(v => parseInt(v, 10));
          if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
            mMfactors7.ret('It works only if you enter two integers separated by a comma.');
            return;
          } else {
            //workerD.postMessage([primesMonad.s, ar, mMfactors6.x]);
            workerD.postMessage([primesMonad.s, ar, decompMonad.s, 'Happy, happy']);
          }
        }
      });

      const workerD$ = sources.WWD.map(m => {
        mMfactors6.ret(m.data[0][3]);
        window['primesMonad'] = new MonadState('primesMonad', m.data[0], primes_state);
        mMfactors8.ret(m.data[1]);
      });


      // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  End Easy
      const largestFactor = x => bind(1111111)(prm5)(split2)(largest)(terminate).pop()



      var factorsPress_b$ = sources.DOM
        .select('input#factors_1').events('keydown');

      var factorsAction$ = factorsPress_b$.map(function (num) {
        if (num.keyCode === 13) {
          var n = num.target.value;
          var j = Math.sqrt(n);
          var k = primeState.slice(-1)[0];
          if (k > j) {
            var primes = primeState.slice(0, primeState.indexOf(primeState.find(e => e > n)));
          } else primes = primeState;
          workerE.postMessage([primes, n]);
        }
      });

      const workerE$ = sources.WWE.map(m => {
        mMfactors.ret(m.data[1]);
      });

      var factorsP_b$ = sources.DOM
        .select('input#factors_5b').events('keyup');

      var fA_b$ = factorsP_b$.map(function (e) {
        mMfactors7.ret('');
        var factors = [];
        if (e.keyCode === 13) {
          var ar = (e.target.value).split(',').map(v => parseInt(v, 10));
          console.log('In fA$ ar is', ar);
          if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
            mMfactors7.ret('It works only if you enter two integers separated by a comma.');
            return;
          } else {
            workerF.postMessage([primesMonad.s, ar, decompMonad.s]);
          }
        }
      });

      const workerF$ = sources.WWF.map(m => {
        console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -> Back in the main thread. m is', m);
        mMfactors6_b.ret(m.data[2][3]);
        window['primesMonad'] = new MonadState('primesMonad', m.data[0], primes_state);
        window['decompMonad'] = new MonadState('decompMonad', m.data[2], primes_state);
        mMfactors8_b.ret(m.data[1]);
      });

      var factorsP_c$ = sources.DOM
        .select('input#factors800').events('keyup');

      var fA_c$ = factorsP_c$.map(function (e) {
        mMfactors800.ret('');
        var factors = [];
        var ar = (e.target.value).split(',').map(v => parseInt(v, 10));
        if (e.keyCode === 13) {
          if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
            mMfactors7.ret('It works only if you enter two integers separated by a comma.');
            return;
          } else {
            mMfactors800.ret(simpleWay(ar[0], ar[1]));
          }
        }
      });

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ENDOM prime factors END
      // ?<>>><>><><><><>>>><><><  traversal  ><><><><><><>>><><><><><><><><><><><>< START traversal
      document.onload = function (event) {
        console.log('onload event: ', event);
        mMitterfib5.release(200);
      }

      // document.getElementById('login').focus();
      // <>>><>><><><><>>>><><><  traversal  ><><><><><><>>><><><><><><><><><><><>< ENDOM traversal
      // <>>><>><><><><>>>><><><  traversal  ><><><><><><>>><><><><><><><><><><><>< START Itterator


      function gMap(x, f, id) {
        var mon = new Monad(f(x), id);
        window[id] = mon;
        return mon;
      }

      var solve = function solve() {
        var g = makeBind();
        mMZ3.bnd(a => {
          g = g.b(a)
          mMquad4.ret('');
          mMquad6.ret('');
          mMquad5.ret(a + " * x * x ")
          mMZ3.bnd(b => {
            mMquad6.ret(b + ' * x ')
            mMZ3.bnd(c => {
              mMtemp.ret([a, b, c])
                .bnd(gMap, qS4, 'mMtemp2')
                .bnd(result => {
                  let x = result[0]
                  let y = result[1]
                  if (x === 0) {
                    mMquad5.ret('No solution', mMtemp)
                    mMquad6.ret(' ');
                    solve();
                    return;
                  }
                  if (y === 0) {
                    mMquad5.ret('No solution')
                    mMquad6.ret(' ')
                    solve();
                    return;
                  };
                  mMquad4.ret("Solutiions for " + a + ", " + b + " and " + c + " are " + x + " and  " + y)
                  mMquad5.ret(p(a).text + " * " + x + " * " + x + " + " + p(b).text +
                    " * " + x + " + " + p(c).text + " = 0")
                  mMquad6.ret(p(a).text + " * " + y + " * " + y + " + " + p(b).text +
                    " * " + y + " + " + p(c).text + " = 0")
                  solve(); // Continuing the endless loop.
                })
            })
          })
        })
      };
      solve();


      var quad$ = sources.DOM
        .select('#quad').events('keypress');

      var quadAction$ = quad$.map(function (e) {
        if (e.keyCode === 13) {
          mMZ3.release(e.target.value);
          document.getElementById('quad').value = null;
        }
      });


var trip9 = function (x) {
    var original_f = x;
    var f = x;
    return function g (d) {
         f = f(d);
        if ( typeof f === "number") {
            console.log("Result: ", f);
            f = original_f;
          }     
}
}
var foo9 = trip9( (a) =>(b) => (c) => a+b+c )  


foo(4);
foo(5);
foo(6);

foo(7);
foo(8);
foo(9);


 // **************************************************** START mBnd demo

 var dem3$ = sources.DOM
    .select('#dem3').events('keypress');

 var oneAction$ = dem3$.map(e => {
      if (e.keyCode === 13) {  
          obQ.push(e.target.value);
          e.target.value = null;
      }
  });

 var dem4$ = sources.DOM
    .select('#dem4').events('keypress');

  var twoAction$ = dem4$.map(e => {
      if (e.keyCode === 13) {  
          fu_4(e.target.value);
          e.target.value = null;
      }
  });

  var dem5$ = sources.DOM
    .select('#dem5').events('keypress');

  var threeAction$ = dem5$.map(e => {
      if (e.keyCode === 13) {  
          ann27 (e.target.value);
          e.target.value = null;
      }
  });

  var dem6$ = sources.DOM
    .select('#dem6').events('keypress');

  var fourAction$ = dem6$.map(e => {
      if (e.keyCode === 13) {  
          push3 (_arQuad, e.target.value);
          e.target.value = null;
      }
  });

  var dem8$ = sources.DOM
    .select('#dem8').events('keypress');

  var eightAction$ = dem8$.map(e => {
      if (e.keyCode === 13) {  
          runCompTest(toFloat(e.target.value));
          // e.target.value = null;
      }
  });

/*
  var dem6$ = sources.DOM
    .select('#dem6').events('keypress');

  oneAction$ = dem6$.map(e => {
      if (e.keyCode === 13) {  
          ann27(e.target.value);
          e.target.value = null;
      }
  });
*/



 // ******************************************BEGIN TODO LIST



      var task2 = function task2(str) {
        socket.send(`TD#$42,${get(pMgroup)},${get(pMname)},@${str}`)
      };

      function comment2(str) {
        socket.send(`TD#$42,${get(pMgroup)},${get(pMname)},@${str}`)
      };


      var foo$ = sources.DOM
        .select('#foocow').events('keypress');

      var fooAction$ = foo$.map(function (e) {
        if (e.keyCode === 13) {
            runFoo(toInt(e.target.value));
        }
      });

      // *****************************************END TODO LIST
      var captionClick$ = sources.DOM
        .select('#caption').events('click');

      var captionClickAction$ = captionClick$.map(function () {
        (get(mMcaptionDiv) === 'none') ?
        mMcaptionDiv.ret('block'):
          mMcaptionDiv.ret('none')
      });

      var gameClick$ = sources.DOM
        .select('#game').events('click');

      var gameClickAction$ = gameClick$.map(function () {
        (get(mMgameDiv) === 'none') ?
        mMgameDiv.ret('block'):
          mMgameDiv.ret('none')
      });

      var clearPicked$ = sources.DOM
        .select('#clear').events('click');

      var clearADSction$ = clearPicked$.map(() => {
        gameMonad.clearPicked();
      });

      var elemB$ = sources.DOM.select('input#group').events('keypress')
        .map(e => {
          mM10.ret(e.target.value);
          pMgroup.ret(e.target.value);
          worker.postMessage([mM9.x, e.target.value]);
        });

      var pr$ = sources.DOM
        .select('#primeNumbers').events('keypress');

      var prADSction$ = pr$.map(function (e) {
        if (e.keyCode === 13) {
          worker.postMessage(["CE#$42", primesMonad.s, e.target.value]);
        }
      });


      // Clicking the checkbox to indicate that a task has been finished.
      var box$ = sources.DOM.select('.box').events('click');

      var boxAction$ = box$.map(e => {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log('In boxAction$ -- e is', e);
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        var index = parseInt(e.target.parentElement.id, 10);
        var task = taskMonad.s[1].slice(index, index + 1)[0];
        var old = task;
        var ar = task.split("<$>");
        ar = ar.filter(v => v !== "");
        ar[1] = ar[1] === "false" ? "true" : "false"
        var newTask = ar.join("<$>");
        socket.send(`TT#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
      });

      var cbx2$ = sources.DOM.select('.cbx2').events('click');

      var cbx2Action$ = cbx2$.map(e => {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log('In cbxAction$ -- e is', e);
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        var index = parseInt(e.target.parentNode.id, 10);
        var task = taskMonad.s[1].slice(index, index + 1)[0];
        var old = task;
        var ar = task.split("<$>");
        ar = ar.filter(v => v !== "");
        ar[1] = ar[1] === "false" ? "true" : "false"
        var newTask = ar.join("<$>");
        socket.send(`TT#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
      });


      // Clicking the DELETE button.


      var deleteClick$ = sources.DOM
        .select('#deleteTask').events('click');

      var deleteAction$ = deleteClick$.map(function (e) {
        var index = parseInt(e.target.parentNode.id, 10);
        var old = taskMonad.s[1].slice(index, index + 1)[0];
        socket.send(`TX#$42,${pMgroup.x},${pMname.x},${index},${old}`);
      });

      // Editing a task.

      var edit$ = sources.DOM
        .select('#edit2').events('keypress');

      var editAction$ = edit$.map(function (e) {
        var arr;
        var str;
        if (e.keyCode === 13) {
          var index = parseInt(e.target.parentElement.id, 10);
          var old = taskMonad.s[1][index];
          var ar = old.split("<$>");
          var newAr = e.target.value.split(',');
          var newString = newAr.join("<<>>");
          ar.shift();
          ar.unshift(newString);
          var newTask = ar.join("<$>");
          socket.send(`TE#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
        }
      });

      var newTask$ = sources.DOM
        .select('input.newTask').events('keydown');

      var newTaskAction$ = newTask$.map(function (e) {
        if (e.keyCode === 13) {
          var alert = '';
          var ar = e.target.value.split(',');
          if (ar.length < 2) {
            mMalert.ret('You should enter responsible party then a comma then a task');
            return;
          } else {
            var x = ar.shift();
            var y = ar.shift();
            var z = ar.join("<<>>")
            var result = z + '<$>' + 'false' + '<$>' + x + '<$>' + y
            socket.send(`TA#$42,${pMgroup.x},${pMname.x},${result}<@>`)
          }
        }
      });

      console.log('Getting close to calcStream@');

      var chatClick$ = sources.DOM
        .select('#chat2').events('click')
        .map(() => showChatDiv = showChatDiv === "none" ? "block" : "none")

      var todoClick$ = sources.DOM
        .select('#todoButton').events('click')
        .map(() => showTodoDiv = showTodoDiv === "none" ? "block" : "none")

      var result_8$ = sources.DOM
        .select('#res8').events('click');

      var diffR$ = sources.DOM
        .select('#diffRender').events('click')
        .map(() => {
          if (diffRend < 50) {
            diffRend += 1
          } else diffRend = 0;
        });


      var diffRendChange$ = sources.DOM
        .select('input#change').events('onChange')
        .map(e => {
          console.log('diffRend changed <C><C>< Change ><C><C> --> --> e is', e);
        })

      var diffRendClick$ = sources.DOM
        .select('input#change').events('click')
        .map(e => {
          console.log('diffRend changed <C><C>< Click Click Click ><C><C> --> --> e is', e);
        })

      var res8$ = result_8$.map(() => {
        res8_Style = res8_HIDE;
        setTimeout(() => {
          res8_Style = res8_SHOW, 4600;
          diffRender()
        }, 4200);
        RESULT_8 = [];
        bind(1)(addP(2))(cubeC)(addC(3))(multC(2))(multP(3))
          (addC(30))(multC(1 / 10))(terminate).slice(1, 8).map(v => v.then(z => {;
            RESULT_8.push(z.x + ' ');
            console.log(RESULT_8);
            diffRender()
          }))
      });

      console.log('NOW WE ARE AT calcStream@');

      var test5Press$ = sources.DOM
        .select('input#test5').events('keypress');

      var test5Action$ = test5Press$.map(function (e) {
        if (e.keyCode === 13) {
          test5(e.target.value);
        }
      });


      var test7Press$ = sources.DOM
        .select('input#test7').events('keypress');

      var test7Action$ = test7Press$.map(function (e) {
        if (e.keyCode === 13) {
          runTestResult = runTest(toInt(e.target.value));
        }
      });

  
      var calcStream$ = xs.merge( twoAction$, threeAction$, eightAction$, fourAction$, setStateA$, setStateB$, aplusClick$, aminusClick$, bplusClick$, bminusClick$, resetStateClick$, fibNums$, nextInt$, prevInt$, primeInts$, factorialInt$, allInts$, fooAction$, oneAction$, mBindAction$, gridCh$, fAction$, bAction$, m80$, m81$, m82$, m83$, m84$, m85$, m86$, m87$, m88$, m89$, m810$, m811$, m812$, m813$, m814$, m815$, pingpong$, test5Action$, test7Action$, diffRendChange$, diffRendClick$, demo2Action$, bindBD$, doubleAction$, itterADSction$, fredGo$, fredAction$, diffR$, res8$, m80Action$, commentAction$, boxAction$, cbx2Action$, messagePressAction$, fA_c$, forwardAction$, backAction$, prADSction$, fA$, factorsP$, fA_b$, factorsP_b$, clearprimes$, workerB$, workerC$, workerD$, workerE$, workerF$, workerI$, clearClick$, clearClick8$, workerG$, workerH$, workerL$, workerM$, clearADSction$, factorsAction$, factorsAction8$, factors2Action$, factors3Action$, primeFib$, fibPressAction$, quadAction$, editAction$, editBAction$, testWAction$, testZAction$, testQAction$, deleteAction$, deleteAction2$, newTaskAction$, chatClick$, gameClickAction$, todoClick$, captionClickAction$, groupPressAction$, rollClickAction$, registerPressAction$, messages$, numClickAction$, opClickAction$)

      return {
        DOM: calcStream$.map(() => {
          return h('div.main', [ // 1 bracket

h('div.image_3', [
  h('img.image_2', { props: { src: "logo.svg" }}),
  h('span', ' '),
  h('a', { props: { href: "https://cycle.js.org/", target: "_blank" }}, 'A Cycle.js application') 
]),
h('div', { style: { textAlign: "center", fontWeight: "bold" }}, [
  h('br'),
  h('div', {
    style: { fontSize: "32px", color: "rgb(130,170,18", textAlign: "center" }}, 'THE ESSENCE OF FUNCTIONAL JAVASCRIPT'),
]), 
h('br'),
h('div', styleFunc(["rgb(180,180,56)",, "23px", "italic", ,"center" ]), 'Small, reusable functions' ),
h('div', styleFunc(["rgb(180,180,56)",, "23px", "italic", ,"center" ]), 'directed by program-specific functions' ),
h('br'),
          
                        h('div.content', [ // 2 brackets  main -> content ->

h('span.tao', ' This is a ' ), 
  
                      h('a', {props: {href:"https://cycle.js.org/", target: "_blank" }}, 'Cycle.js' ), 

h('span', ' application working in conjunction with a '),
  
                      h('a', {props: {href:"https://www.haskell.org/#step3", target: "_blank" }}, 'Haskell ' ), 

h('a.a2', {props: {href: "http://hackage.haskell.org/package/wai-websockets-3.0.1.2/docs/Network-Wai-Handler-WebSockets.html", target: "_blank" }}, 'Wai WebSockets' ),
  
h('span', ' server, each on its own ' ),

                      h('a', {props: {href:"https://lists.ubuntu.com/archives/ubuntu-announce/2018-April/000231.html", target: "_blank" }}, 'Ubuntu 18.04' ), 

                      h('a.a2', {props: {href: "https://www.digitalocean.com/", target: "_blank" }}, ' Digital Ocean' ),

h('span', ' droplet. The JavaScript is plain, unrestricted ' ),
  
                     h('a', {props: {href:"https://tc39.github.io/ecma262/", target: "_blank" }}, 'Ecmascript 2019' ), 
h('span', ', transpiled with ' ),
                      h('a', {props: {href:"https://babeljs.io/", target: "_blank" }}, 'Babel' ), 

h('span', ' and bundled by ' ),                          
                      h('a', {props: {href:"https://webpack.js.org/concepts/", target: "_blank" }}, 'Webpack' ), 
h('span', '.' ),
h('br'),
        // index_01  **************************************************** START INTRO

h('br'),
h('span.tao', ' According to ' ),                       
h('a', {props: {href: "https://www.geeksforgeeks.org/functional-programming-paradigm/", target: "_blank" }}, 'Geeks for Geeks' ),
h('span', ', \"Functional programming is a programming paradigm in which we try to bind everything in pure mathematical functions style.\". The article is a good read for coders who are curious about the \"functional programming\" buzz that is humming on the Internet. It discusses pure functions, recursion, referential transparency first-class functions, higher-order functions, and the oxymoronic phrase: \"immutable variables\", with some example code written in JavaScript. ' ), 
h('br'),
h('br'),
h('span.tao', {style: {color: "#FF00DD"}}, ' WARNING:' ), 
h('span', ' Unless you are already proficient at creating functions that use recursion, closures, currying, reactivity, and sensible composition, trying to scrupulously conform to the functional-paradigm will stifle your creativity and slow you progress toward mastering JavaScript. It\'s good to avoid mutating variables outside of function scope, but trying to make JavaScript functions behave like mathematical functions is a waste of time, and a waste of valuable features of an increasingly powerful programming language. ' ),
h('p', ' Suppose you want to chain computations involving functions, primitive values, and promises where functions can readily access the return values of prior functions, resolution values of previously returned promises, and primitive values inserted into the sequence. ' ),
h('p', ' It is highly unlikely that you working with a framework or library that can help you, but if you are a functional programmer, you can create a higher-order function to suit your needs. Instances of Compose() (below) do all of these things. ' ),  
                          
h('pre', `function Compose ( AR = [] )  {
  var ar , x, ob, f_ , p ;
  if (Array.isArray(AR)) ar = AR.slice()
  else ar = AR;
  if (ar.length) {x = ar[ar.length-1]}; 
    return  ob = {ar: ar, run:  function run (x) {
    if (x instanceof Promise) x.then(y => {if (y != undefined) ob.ar.push(y)})
        else {if (x != undefined) ar.push(x)}; 
        return function f_ (func) {
            if (func === 'stop') return ar;
            
            else if (typeof func !== "function") p = func;
            else if (x instanceof Promise) p = x.then(v => func(v));
            else p = func(x);
            return run(p);
        };
  } };
};

function fork (x) {return  x.ar.pop()}; 

var a = Compose([3,27]);  
var b = Compose(a.ar.slice());  // b forks off of a and starts an independent computation.

var array_b = b.run(fork(b))(x=>x+3)(x=>x*x)('stop');  
var array_a = a.run(fork(a))(x=>x-13)(x=>x*3)('stop');

console.log('array_a is', array_a); // [3, 27, 14, 42] 
console.log('array_b is', array_b); // [3, 27, 30, 900] ` ),
                          
h('p', ' When a function is provided to ob.run, its return value is pushed into ob.ar. Pending promises resolve inside of ob.ar and the resolution values become available as possible arguments for subsequent functions. ' ),    

h('p', ' The object "b" (above) branches off of "a" to compute "900". "a" goes on to compute "42". "a" and "b" can be viewed as final results or partial computations that will complete if they receive additional primitive values and further instructions in the form of functions, or just some additional funcitons. Here\'s the basic composition syntax: ' ),                           


  h('div', styleFunc(["#4dff4d", "3%", "21px", , , ]), [
  h('div', 'ob.run(x)(functiona1)(function2) ... (functionN)')
  ]), 
  h('p', ' where  ' ),
  h('pre', styleFunc(["#ABDDAB", , "19px", , , ]), `    x can be any value,

    function1, function2, ... need not be functions. There are no type
       restrictions on the values of the "functions",

    true functions operate from left to right,
    
    there are no type restrictions on the functions\' return values,

    functions have built-in access to all prior primitive value entries, function return values,
       and Promise resolution values,

    ob can be re-started with the expression "ob.run(fork(ob))". and can launch separate 
       branches with expressions like "var branch = Compose(ob.ar)",   

    sequences of functions can be run anonymously with statements like
       "Compose().run(4)(x=>x**4)(x=>x/2**6)('stop');" // [4, 256, 4].

` ),
    h('p', ' The first example (below) performs a computation, requests a quasi-random number from the WebSocket server, requests that number\'s prime decomposition from a web worker, and displays the result. The code runs twenty-five times each time the button is clicked. '),
                        
h('br')

                        ]),
            h('div.content2',  [

  h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), ' Demonstration 1 '),

                                                                    h('div', {style: {display: "flex" }},  [

                                                                    h('div', {style: {marginRight: "3%", width: "50%" }},   [


h('pre', `var it4_b = x => {
  
  .send(\`BD#$42,\${pMgroup.x},\${pMname.x},\${x}\`);
}

var mMZ41 = new MonadItter();
var mMZ53 = new MonadItter();

var it6_b = y => {
  mMZ41.bnd(y => workerM.postMessage([primeState, y]));
}

it7_b = () => mMZ53.bnd(string => {
  callOrder2 = callOrder2 > 24 ? 1 : callOrder2 + 1;
  if (callOrder2 === 1) start78 = Date.now();
  m43_.push(callOrder2 + "  ");
  m43_.push(string)
  m43_.push(h('br'));
  if (callOrder2 === 25) m43_.push(
    'Elapsed time: ' + (Date.now() - start78) + " ms"
  );
});  ` ),



                                              ]),
                                              h('div', {style: {marginRight: "2%", width: "50%" }},   [




  h('span', ' Click below to begin twenty-five runs of: '),
  h('br'),
  h('br'),
  h('span', styleFunc(["rgb(7, 247, 247)", "12%", "20px", , , , , ]), 'ob.run(145)(x=>x**3)(it4_c)(it6_c)(it7_c)'),
  h('br'),
  h('br'),
  h('button#factors_R', { style: { fontSize: '15px' }}, 'ob.run(145)(x=>x**3)( . . . ' ),
  h('span', "~~"),
  h('button.clear_R', {
    style: {
      fontSize: '15px',
      marginLeft: "0"
    }
  }, 'clear results'),
  h('br'),
  h('br'),
  h('div#demo2', {style: {fontSize: "15px"}},  m43_),
  h('br'),
  h('br'),
  h('br'),

  ])
  ]),
            

h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), 'Demonstration 2 - Compose() Stress Test '  ),   



                                                             h('div', {style: {display: "flex" }},  [
                                                             h('div', {style: {marginRight: "2%", width: "50%" }},   [




h('br'),
h('p', ' To see the demonstration, Click "GO" or enter a number and then re-enter it several times. idP() and squareP() are the identity and square functions delayed in ES6 Promises. ' ),

h('pre', `

function test4 (w) {  
    var f = Compose(); 
    return f.run(w)(cubeP)(x=>idP(x+f.ar[0]))
    (squareP)(() => idP(f.ar[2]**3))
    (x=>idP(x/f.ar[3]))(x=>idP(x-f.ar[1]))
};

function test5 (n) {
    var x = toInt(n);
    _C0 = test4(x+0);
    _C1 = test4(x+1);
    _C2 = test4(x+2);
    _C3 = test4(x+3);
    _C4 = test4(x+4);
    _C5 = test4(x+5);
    _C6 = test4(x+6);
    _C7 = test4(x+7);
    _C8 = test4(x+8;
} ` ),
                                           ]),
                           h('div', {style: {marginRight: "2%", width: "50%" }},   [

                h('br'),

                h('div', `${_C0.join(", ")}`),
                h('div', `${_C1.join(", ")}`),
                h('div', `${_C2.join(", ")}`),
                h('div', `${_C3.join(", ")}`),
                h('div', `${_C4.join(", ")}`),
                h('div', `${_C5.join(", ")}`),
                h('div', `${_C6.join(", ")}`),
                h('div', `${_C7.join(", ")}`),
                h('div', `${_C8.join(", ")}`),
                h('br'),
                h('span', ' value of n --> '),
                h('input#test5', {
                  style: {
                    height: "15px",
                    color: "blue",
                    fontSize: "18px"
                  }
                }),
                h('br'),
                h('br'),
                h('button#makeBind', {
                  style: {
                    fontSize: '17px',
                    marginLeft: "7%"
                  }
                }, 'GO'),
                h('br'),
                h('br'),
h('p', ' Compose() returns similar objects, each of which occupies a unique address in memory, so it\'s no surprise that simultaneously called run methods of objects returned by Compose() don\'t clash with one another, or that restarted incomplete sequences don\'t trip over themselves. These features, along with functions using previously returned Promise resolution values, are demonstrated here.  ' ),
h('p', ' The variables prefixed by "_C" are permanent fixtures of the virtual DOM. The side effect of repeatedly changing their values while test4 executes can\'t cause any mischief. All it does is trigger Snabdom\'s diff and render procedure. ' ),                             
                h('br')
        
                                           ])

                                           ]),

                                              ]),
                              h('div.content', [

            h('h1', {style: {color: "#ccffbb" }}, 'Programming For the Web ' ),


h('p', ' If you are writing software to handle funds transfers between customer accounts and between customer accounts and outside entities, it would be of the utmost importance to make sure that all interrupted transactions get rolled all the way back and that completed funds transfers are done correctly with appropriate documentation. Haskell would be a good choice for handling these sorts of things. Pure functions and immutable data would help assure that there will never be any surprises. ' ),
h('p', ' If you are writing JavaScript code that will run in browsers, your work environment doesn\'t need to be so austere. You don\'t have to empty part of your programming toolbox. ' ),
h('p', ' There are those who use only designated "good parts" of JavaScript. Some developers restrict JavaScript\'s potential by never redefining variables or mutating objects, never creating functions that cause side effects before they complete, insisting that functions consistently return the same value when given the same argument, and more. Then there are those who take the bull by the horns or, switching metaphores, play JavaScript like a piano, restricted only by their imaginations and the common-sense imperative that code be robust, efficient, and maintainable. ' ),


h('span.tao', ' Suppose you want to run the ' ),
h('a', { props: { href: "https://en.wikipedia.org/wiki/Quadratic_formula", target: "_blank" }}, 'quadratic formula'),
h('p', ' on asynchronously received numbers. A function like obQ.push() (below), where quadMaker("a", "b") (below) does the calculation each time obQ.f() receives three numbers, accomplish this succinctly and transparently. Does it matter that obQ.f() does not return the same value each time it is called on the same argument? I don\'t think so, but those who think JavaScript can be improved by forcing it to adhere to the functional paradign might feel compelled to contrive a pure-function workaround. ' ),
h('br'),
h('p', ' quadMaker() returns functions whose results become attributes of the object "_oB_", which is a permanent fixture in several places in the virtual DOM. The results returned by quadMaker() are the real solutions, if any exist, to equations of the form A*x*x + B*x + C = 0, where users provide the coefficients "A", "B", and "C" and the formula finds whatever real values of x satisfy the equation.' ),                    

h('pre', `function quadMaker (x,y) {
    return a => b => c => {
        var aa = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        var bb = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
        if (aa === aa) {
            _oB_[x] = \`\${a}*x*x + \${b}*x + \${c} = 0 has the following solutions:\`;
            _oB_[y] = \`x = \${aa} and x = \${bb}\`;
        }
        if (!(aa === aa)) {
            _oB_[x] = \`\${a}*x*x + \${b}*x + \${c} = 0 has no solution\`;
            _oB_[y] = '';
        }
    }
} ` ),
                              
                              ]),
                  h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), 'Demonstration 3 '  ),   

                              h('div', {style: {display: "flex" }},  [
                              h('div', {style: {marginRight: "2%", width: "50%" }},   [

h('p', ' Here\'s the initial definition of obQ along with the definition of its method, obQ.push: ' ),
h('pre',  `var obQ  = { ar: [] };

obQ.push = x => {
    var a = obQ.ar
    a.push(x);
    if (a.length === 3) {
        quadMaker('a', 'b')(a[0])(a[1])(a[2]); 
        a.length = 0
    }
}; ` ), 
h('p', ' Entering a number initiates a keypress event "e". A listener routes "e.target.value" to obQ.push(). Every third time obQ.push() executes, quadMaker("a","b") provides the result to _oB_.a and _oB_.b in the virtual DOM. prompting Snabbdom to refresh the DOM. The update might also be facilitated by React, NodeJS, RxJS, Bacon, etc., but this is a Cycle.js application. ' ), 
h('span.tao', ' quadMaker("a","b") might cause even more consternation among functional paradigm purists. Side effects are triggered in the DOM ' ),
h('span', {style: {color: "#eeccaa", fontStyle: "italic" }},  'while it is still running.' ),
h('br'),
h('p', ' Asychronously evaluating numbers with the quadratic formula can be accomplished with pure functions. A function returned by quadMaker() returns a two-parameter function when given one argument. That function returns a two-parameter function which returns a one-parameter function. Instead of side effects, a result could be returned which another function could apply to the virtual DOM.  A better approach, at least in my opinion, is to embrace the fact that the Ecmascript 2018-specification provides functions designed to do much more than mimic mathematical functions. For example, one function can update several parts of a virtual DOM and return nothing but "undefined", as seen in this demonstration. ' )
                                                              ]),
                                        h('div', {style: {marginLeft: "3%", marginRight: "2%", width: "50%" }},   [


h('p', ' Enter three coefficients for a quadratic equation, ONE NUMBER AT A TIME. An event listener will call obQ.push on your entries. The third entry will trigger execution of quadMaker("a","b")(x)(y)(z) where "x", "y", and "z" are the numbers you entered. ' ),

                h('input#dem3', {
                  style: {
                    height: "15px",
                    color: "blue",
                    fontSize: "18px"
                  }
                }),
                h('br'),
                h('br'),

                h('div', {style: {color: "#ffabab"}}, [
                h('br'),
                _oB_.a,
                h('br'),
                _oB_.b,
                h('br'),
                h('br'),   ]),

h('span.tao', ' By the way, I am enthusiastic about functional programming, and greatly enjoy tinkering with the Haskell WebSocket server associated with this site. The ' ),
h('a', {props: {href:"https://github.com/fantasyland/fantasy-land", target: "_blank" }}, 'Fantasyland' ),
h('span', ' algebraic javascript specification is an admirable achievement. People who are familiar with Haskell can jump right in and start coding with familiar monads and functors borrowed from the Haskell ' ),
h('a', {props: {href: "http://hackage.haskell.org/package/base-4.12.0.0/docs/Prelude.html", target: "_blank"}}, 'Prelude module' ), 
h('span', '. The '  ),
h('a', {props: {href:"https://github.com/origamitower/folktale", target: "_blank" }}, 'Folktale' ),
h('span', ' library also succeeds in implementing an API similar to the Haskell Prelude module. But when my goal is providing a robust, pleasing user interface for the Web, I like having at my fingertips all the power and possibilities of unrestricted Ecmascript 2018. ' ),
h('br'),

                                                          ])
                                                          ]),




h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), ' Demonstration 4 '),


h('div', {style: {display: "flex" }},  [
  h('div', {style: {marginRight: "2%", width: "50%" }},   [
h('p', ' curriedAsync facilitates the asynchronous execution of curried functions that do not ultimately return functions. A symple tweak could make it work where the final result is a function. Here\'s the definition: ' ),

h('pre', `var curriedAsync = function curriedAsync (x) {
    var original_f = x;
    var f = x;
    return function g (d) {
        f = f(d);  // f will be a function the first two times
        if (typeof f !== "function") f = original_f;
    }
}; 

var fu_4 = curriedAsync(quadMaker("c", "d")); ` ),

                                                              ]),
                                        h('div', {style: {marginRight: "2%", width: "50%" }},   [


h('p', ' Enter three coefficients for a quadratic equation, ONE NUMBER AT A TIME. fu_4 will execute on each of them.' ),
                h('input#dem4', {
                  style: {
                    height: "15px",
                    color: "blue",
                    fontSize: "18px"
                  }
                }),
                h('br'),

                h('div', {style: {color: "#ffabab"}}, [
                h('br'),
                _oB_.c,
                h('br'),
                _oB_.d,
                h('br'), ])


                                     ])
                                     ]),




h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), ' Demonstration 5 '),

                                              h('div.content2', [

h('div', {style: {display: "flex" }},  [
  h('div', {style: {marginRight: "2%", width: "50%" }},   [

h('p', ' Sometimes it is convenient to re-use a tool you already have rather than define a new one. Here Compose() provides the object "ob" so ob.run can populate ob.ar until it has three numbers. At that point, quadMaker(\'e\', \'f\') runs on the numbers in ob.ar, then ob.ar is emptied in preparation for receiving new data. ' ),

h('pre', `function ann23 () {
     var ob = Compose()
     return func = y => {
        ob.run(toFloat(y));
        if (ob.ar.length === 3) {
            quadMaker("e", "f")(ob.ar[0])(ob.ar[1])(ob.ar[2]);
            ob.ar = [];
            diffRender();
        }
        return func; 
    }
};

var ann27 = ann23(); 
            // User entries are processed by ann23() ` )

                                                              ]),

             h('div', {style: {marginRight: "2%", width: "50%" }},   [


h('p', ' Enter three coefficients for a quadratic equation, ONE NUMBER AT A TIME. The third time you press <ENTER>, the answer will appear. ' ),
                h('input#dem5', {
                  style: {
                    height: "15px",
                    color: "blue",
                    fontSize: "18px"
                  }
                }),
                h('br'),
                h('br'),

                h('div', {style: {color: "#ffabab"}}, [
                h('br'),
                _oB_.e,
                h('br'),
                _oB_.f,
                h('br'),
                h('br'),   ]),

                                  
h('div#proxy2', ' ' ),

                                        ])
                                        ])
                                       ]),



h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), ' Demonstration 6 '),

                                              h('div.content2', [

h('div', {style: {display: "flex" }},  [
  h('div', {style: {marginRight: "2%", width: "50%" }},   [

h('p', ' Here\'s a way to use a proxy to asynchronously evaluate numbers with the quadratic formula. push3() is a proxy of itself. When _arQuad acquires a third element, the quadratic formula runs and _arQuad is emptied in preparation for the next three numbers. ' ),

h('pre',  `var  _arQuad = [];

function push3 (ar, x) {ar.push(x);  return ar };

push3 = new Proxy(push3, {
    apply: function(a, b, c) {
        if (c[0].length === 3) {console.log('c is',c); c = [ [], c[1] ]}
        if (c[0].length === 2) {
          console.log('c is',c); 
           quadMaker("g", "h")(c[0][0])(c[0][1])(c[1]);
            _arQuad = [];
        }
    return Reflect.apply(a,b,c);
    }
}); ` ),

                                                              ]),
                                      h('div', {style: {marginRight: "2%", width: "50%" }},   [


h('p', ' Enter three coefficients for a quadratic equation, ONE NUMBER AT A TIME. Your entries will be routed to push3(). ' ),
                h('input#dem6', {
                  style: {
                    height: "15px",
                    color: "blue",
                    fontSize: "18px"
                  }
                }),
                h('br'),
                h('br'),

                h('div', {style: {color: "#ffabab"}}, [
                h('br'),
                _oB_.g,
                h('br'),
                _oB_.h,
                h('br'),
                h('br'),   ]),
                                  
h('br'),
h('br'),
h('span', ' More proxy demonstrations are at ' ),
h('a', {props: {href: "#proxies" }}, 'Fun With Proxies' ),
h('span', '. ' )


                                        ])
                                        ])
                                       ]),


h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), ' Demonstration 7 '),

                                              h('div.content2', [

h('div', {style: {display: "flex" }},  [
  h('div', {style: {marginRight: "2%", width: "50%" }},   [

h('p', ' Here is another approach to function composition, featuring rapid-fire redefinition of a parameter "v" by functions in an array ("ar"). "v" and "ar" are available to every function in "ar". In the example, we see "v => ar[3](v)" and "y => y - x" where y is the previously computed value and x is the starting value. A more elaborate version could be made to handle asynchronous code. "f_86", "foo", and runFoo are shown below. ' ),
h('p', ' Enter a number "n" on the right to call "runFoo(n)". ' ),
h('pre', `    var f_86 = v => t => {
        var ar = [v]; 
        t.map(g => ar.push(v=g(v))); 
         return ar
    }; ` ),

h('pre', {style: {color: "#8ffc95"}}, `    var foo = x => f_86(x)([v=>v**3, v=>v+x, v=>v**2,v=>ar[3](v),
        v=>v**(1/4),v=>v-x,v=>Math.round(v**(1/3))]); ` ),    

h('pre', `    function runFoo (n) {
        foocow_0 = foo(n+0));
        foocow_1 = foo(n+1));
        foocow_2 = foo(n+2));
        foocow_3 = foo(n+3));
        foocow_4 = foo(n+4));
        foocow_5 = foo(n+5));
        foocow_6 = foo(n+6));
        foocow_7 = foo(n+7));
        foocow_8 = foo(n+8));
    } ` )

                                           ]),
                                           h('div',  [ 

h('div', 'Enter a number "n" below to see the result of "runFoo" executing on nine numbers' ),
  h('br'),
h('input#foocow',    ),
  h('br'),
  h('br'),
h('div', `${foocow_0.join(", ")}`),
h('div', `${foocow_1.join(", ")}`),
h('div', `${foocow_2.join(", ")}`),
h('div', `${foocow_3.join(", ")}`),
h('div', `${foocow_4.join(", ")}`),
h('div', `${foocow_5.join(", ")}`),
h('div', `${foocow_6.join(", ")}`),
h('div', `${foocow_7.join(", ")}`)

                                                             ])
                                                             ])
                                                             ]), 


h('h3', styleFunc(["#8ffc95", , "23px", , , "center"]), ' Demonstration 8 - Branching Sequences'),

                                              h('div.content2', [

h('div', {style: {display: "flex" }},  [
  h('div', {style: {marginRight: "2%", width: "50%" }},   [

h('p', ' Let ob = Compose() and let f1, f2, ... fn be JavaScript values. These f\'s will usually be functions, but they can be anything, including undefined. ob.run(f1)(f2) ... (fn)(\'stop\') produces an array of the f\'s return values, or the resolution values of returned promises. ' ),
h('p', ' ob can resume pocessing values in multiple branches. ob2 = Compose(ob.ar) and ob3 = Compose(ob.ar) are two such branches. Their transformation do not affect one another, and they do not affect ob. ' ),


h('p', ' When someone enters a number n in the box on the right, "runCompTest(n)" executes. Here\'s the definition: ' ),
h('pre', `function runCompTest (k) {

    A1 = A2 = A3 = A4 = A5 = A6 = A7 = [];

    obbb1 = Compose([k]);

    console.log("obbb1.ar is", obbb1.ar);

    obbb2 = Compose(obbb1.ar);
    A1 = obbb2.run(k+1)(x=>x*x)('stop');
      
    obbb3 = Compose(A1);
    A2 = obbb3.run(k+2)(x=>x*x)('stop');
      
    obbb4 = Compose(A2);
    A3 = obbb4.run(k+3)(x=>x*x)('stop');
      
    obbb5 = Compose(A1);
    A4 = obbb5.run(k+4)(x=>x*x)('stop');
      
    obbb6 = Compose(A1);
    A5 = obbb5.run(k+5)(squareQ)(x => mMZ56.release(x))(\'stop\');
      
    mMZ57.bnd(x => { 
        diffRender();
        obbb6 = Compose(A5);
        A6 = obbb6.run(x+1)(squareQ)(()=>diffRender())(\'stop\')});
        console.log("A6 is",A6);  
}  ` ),
h('p', 'The following code is situated in the virtual DOM. ' ), 
h('pre', `h('div', A1.join(', ') ),
h('div', A2.join(', ') ),
h('div', A3.join(', ') ),
h('div', A4.join(', ') ),
h('div', A5.join(', ') ),
h('div', A6.join(', ') ), ` ),


h('h1', 'COW DEMONSTRATION' )

                    
                                             ]),
                                    h('div', {style: {marginRight: "2%", width: "50%" }},   [

                h('input#dem8', {
                  style: {
                    height: "15px",
                    color: "blue",
                    fontSize: "18px"
                  }
                }),
                h('br'),
                h('br'),


h('div', A1.join(', ') ),
h('div', A2.join(', ') ),
h('div', A3.join(', ') ),
h('div', A4.join(', ') ),
h('div', A5.join(', ') ),
h('div', A6.join(', ') ),
h('div', A7.join(', ') ),
                                              

                                    ])
                                    ])
                                    ]),



  h('div', styleFunc(["#361B01", , , , "90%", "center"]), '**************************************************************************************************************'),


                                                            h('div.content', [



  h('span.tao', ' There are library functions, for example Lodash/fp\'s '),
  h('br'),
  h('a', {
    props: {
      href: "https://lodash.com/docs/4.17.4#flow"
    }
  }, "  .flow"),
  h('span', ' and Ramda\'s '),
  h('a', {
    props: {
      href: "http://ramdajs.com/docs/#compose"
    }
  }, 'R.compose'),
  h('span', ', that facilitate simple function composition; i.e., each function\'s argument is the preceding function\'s return value. bind() does this while also giving every linked function along a chain access to the return values of every function, and the resolution values of every promise that precedes it.  '),
  h('br'),
  h('br'),
  h('span.tao', 'This project was created by and is actively maintained by David Schalk. The code repository is at '),
  h('a', {
    props: {
      href: "https://github.com/dschalk/functional-javascript",
      target: "_blank"
    }
  }, 'functional-javascript'),
  h('span', '. Please leave a comment in the '),
  h('a', {
    props: {
      href: "#comments"
    }
  }, 'comments'),
  h('span', ' section near the end of this page. You can email me at pyschalk@gmail.com. '),
                    ]), 
h('h1', '___________________________________________________________'),
h('div.content', [ // 4
          h('div#bind'),

          h('br'),
  h('h3', 'MonadItter' ),
          h('p', ' The asynchronous functions in Demonstration 1 use monadItter instances mMZ40 and mMZ52 instead of Promises. Here\'s the definition of MonadItter: '),
          h('pre', `  var MonadItter = function MonadItter() {
  this.p = function () {};
  this.release = function () {
    return this.p.apply(this, arguments);
  };
  this.bnd = function (func) {
    return this.p = func;
  };
}; `),
          h('p', ' MonadItter instances trap incoming WebSocket messages based on their six-digit prefixes and redirect them according to their intended purposes. No error checking is needed. If a prefix is not recognized, the message falls through and is disregarded. This is how incoming WebSocket messages are parsed: '),
h('pre',   {style: {color: "#aaffff"}}, `        const messages$ = sources.WS.map(e => {
        var v = e.data.split(',')
        // console.log("ret(v[0])", ret(v[0]));
        var group = v[1]
        var sender = v[2];
        var extra = v[3];
        var extra2 = v[4];

        mMZ9.bnd(() => {
          console.log("sender is", sender);
          console.log("extra is", extra);
          console.log("The full message is", e);
          console.log("v is", v);
        });

        mMZ10.bnd(() => {
          if (sender === pMname.x) {
            gameMonad.run([v[7], v[8], 0, [],
              [v[3], v[4], v[5], v[6]]
            ]);
          } else gameMonad.run([, , , [],
            [v[3], v[4], v[5], v[6]]
          ]);
        });
               . . .

        mMZ29.bnd(() => {
          if (playerName === sender) mMZ41.release(v[3]);
          // else console.log('message from sender to BD#$42')
        });

        mMZ30.bnd(() => {
          if (playerName === sender) mMZ42.release(v[3]);
          else console.log('message from sender to BE#$42')
        });

        ret(v[0])  // "ret(v[0])" puts v[0] in a Monad2 instance 
          .bnd(next, 'CC#$42', mMZ9)
          .bnd(next, 'CA#$42', mMZ10) // Dice roll

               . . .

          .bnd(next, 'BD#$42', mMZ29) // works in conjunction with it4_b
          .bnd(next, 'BE#$42', mMZ30) // works in conjunction with it4_c
      });

      function next(x, y, instance, z) {
        if (x == y) {
          instance.release(z);
        }
        return ret(x);
      }; ` ),

h('p', ' I still haven\'t discussed the function "ret()". It is similar to "pure" and "return" in Haskell in that it encapsulates a value in an instance of "Monad2()", an abbreviated version of "Monad()". Instances of Monad2 are objects "m" with values "m.x" and functions "m.bnd" that operate on functions "f" and return similar object with values m.x\' = f(x). Here\'s the definition of Monad2: ' ),
      
h('pre', `  function Monad2(z = 0) {
      this.x = z;
  };

  Monad2.prototype.ret = a => new Monad2(a);
  Monad2.prototype.bnd = function (func, ...args) {
      return func(this.x, ...args)
} ` ),
h('p', ' And here\'s the definition of "ret()": ' ),  
h('pre', `  function ret (val = 0) {
      return new Monad2(val);
  }; ` ),
h('p', ' The names "Monad" and Monad2" were selected during a time when I was toying with the idea of isolating side effects in linked objects. I borrowed some terminology from the Haskell programming language, but similarities between Haskell monads and my JavaScript monads are pretty superficial. Sure, composing my "monads" involves a monad A operating on some function "f" that returns a "monad" B with value f(A.x), but the types of A and B are "object" and the constructors are Monad. Haskell monads encapsulate composed transformations of values to values possibly having different types. ' ), 


          h('h3', 'Reactivity'),
          h('span.tao', ' Reactivity can be achieved in many ways, including: plain JavaScript and HTML event listeners, BaconJs, RxJS,  occurs naturally in the Cycle.js framework. Many developers find that Cycle.js has an unusually steep learning curve. It isn\'t so bad if you start with Andrew Staltz\' '),
          h('a', {props: {
              href: "https://egghead.io/courses/cycle-js-fundamentals",
              target: "_blank"} 
          }, ' Overview of Cycle.js.'),
          h('span', ' Its elegance of its core concept is breathtaking. '),
          h('br'),
          h('br'),
          h('a.tao', {props: {href: 'https://github.com/snabbdom/snabbdom'}}, ' Snabbdom'),

          h('span', ', '),
          h('a', {props: {href: 'http://x-stream.github.io/'}}, ' xstream,'),
          h('span', ' and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimentation and fun so many of its functions and variable definitions are included in scripts in the index.html page. "var" is used instead of "const" in order to facilitate experimentation. '),
          h('br'),

          h('p', ' The next interactive demonstration accepts user input and executes the following statement in a web worker: '),
          h('pre', `bind(ar[1])(execF)(fpFunc(ar[0])(x)); `),
          h('span', ' The parameters are defined in the '),
          h('a', {props: {href: "#fp" }}, 'appendix'),
          h('span', '. '),
          h('br'),
h('pre', {
  style: {
    color: "red",
    fontStyle: "italic"
  }
}, `Red Indicates An Ongoing Computation`),

h('pre', `Fibonacci numbers   Prime Numbers   Prime Fibonacci Numbers `),

h('span', mMfibBlurb.x),
h('span', [
  h('svg', {
    attrs: {
      width: 50,
      height: 50
    }
  }, [
    h('circle', {
      attrs: {
        cx: 25,
        cy: 25,
        r: 20,
        stroke: 'purple',
        'stroke-width': 4,
        fill: fill1Monad.x
      }
    })
  ])
]),

h('span', mMprimeBlurb.x),
h('span', [
  h('svg', {
    attrs: {
      width: 50,
      height: 50
    }
  }, [
    h('circle', {
      attrs: {
        cx: 25,
        cy: 25,
        r: 20,
        stroke: 'purple',
        'stroke-width': 4,
        fill: fill2Monad.x
      }
    })
  ])
]),

h('span', mMprimeFibBlurb.x),
h('span', [
  h('svg', {
    attrs: {
      width: 50,
      height: 50
    }
  }, [
    h('circle', {
      attrs: {
        cx: 25,
        cy: 25,
        r: 20,
        stroke: 'purple',
        'stroke-width': 4,
        fill: fill3Monad.x
      }
    })
  ])
]),
h('br'),
h('br'),
h('p.red', 'The elapsed time is ' + mMelapsed.x + ' milliseconds.'),
h('input#fib92'),
h('br'),
h('br'),
h('span#PF_7.red6', 'Fibonacci Numbers'),
h('br'),
h('span#PF_9.turk', fS),
h('br'),
h('span#PF_8.red6', 'Prime Fibonacci Numbers'),
h('br'),
h('span#primeFibs.turk', pFS),
h('br'),
h('span#PF_21.red6', 'The largest generated prime number.'),
h('br'),
h('span.turk', topPrime),
h('br'),
h('h3', ' Promises are not needed '),
h('p', ' Asynchronous code can be handled without reliance on Ecmascript 2015 promises either explicitly or implicitly (e.g. using async/await). Cycle.js drivers eliminate any need to explicitly use functions from a reactive library, but xstream is an integral component of Cycle.js unless you choose most.js or RxJS. '),

h('p', ' The second demonstration in this series decomposes numbers into its their prime factors. Testing with sequences of 9\'s, the first substantial lag occurs at 9,999,999 - unless a large array of prime numbers has already been generated in the previous demonstration or elsewhere. Here it is:'),
h('input#factors_1'),
h('br'),
h('br'),
h('span', mMfactors.x),
h('span.tao3', mMfactors23.x),
h('p', ' primesMonad and the functions primarily involved in its transformation are shown below: '),
code.primes,
h('p', ' primesMonad state updates are generated in workerB.js and stored in the main thread. Users set new upper bounds on the size of the largest Fibonacci number in the series to be considered by entering a number in a browser input box. Here is the relevant code: '),
code.primes3,
h('p', ' The user\'s selected number along with the current state of primesMonad (primesMonad.s) gets posted to workerB, which gets functionality beyond its prototype from workerB.js, which orchestrates preparation of the return message that will be posted back to the main thread. workerB.js delegates the job to functions in script2.js by calling: '),
code.primes4,
h('p', ' execF prepares the Fibonacci series and sends its state, along with the state of primesMonad that it received from workerB.js, to fpTransformer. execP is called with the current state and the largest Fibonacci number that had been recently produced by execF as arguments. The updated state is an array with four elements, [new upper bound, new series, largest prime produced in the current browser session, largest series]. If the new result is larger than any previous one, the first and second elements of the state array are identical to the third and fourth. Otherwise, they are smaller. As is apparent in the following code, primesMonad is re-created in the main thread using the state array that was posted by workerB. '),
code.primes2,

h('br'),
h('a', {
  props: {
    href: '#top'
  }
}, 'Back to the top'),

              h('h2', 'MonadItter'),
              h('p', ' As shown in the "Monads" section (above), the definition of MonadItter is: '),
              code.monadItter,
              h('p', ' MonadItter instances don\'t link to one another. They exist to facilitate the work of instances of Monad, MonadState, etc. Here\'s how they work: '),
              h('p', 'For any instance of MonadItter, say "it", "it.bnd(func)" causes it.p === func. Calling the method "it.release(...args)" causes p(...args) to run, possibly with arguments supplied by the caller. '),
              h('p', ' MonadItter instances control the routing of incoming WebSocket messages. In one of the demonstrations below, they behave much like ES2015 iterators.'),
              h('h3', ' A Basic Iterator '),
              h('p', 'The following example illustrates the use of release() with an argument. It also shows a lambda expressions being provided as an argument for the method mMZ1.bnd() (thereby becoming the value of mMZ1.p), and then mMZ1.release providing an arguments for the function mMZ1.p. The code is shown beneath the following two buttons. '),
              h('button#testZ', 'mMZ33.release(1)'),
              h('p', mMt33.x),
              h('span', 'Refresh button: '),
              h('button#testQ', 'mMt33.ret(0) '),
              h('span.tao', ' The expression mMt33.x sits permanently in the Motorcycle virtual DOM description. You can call '),
              h('span.green', 'mMZ33.release(v)'),
              h('span', ' by entering a value for v below: '),
              h('br'),
              h('span', 'Please enter an integer here: '),
              h('input#testW'),
              h('p', ' cube() is defined in the Monad section (above). If you click "mMZ1.release(1)" several times, the code (above) will run several times, each time with v === 1. The result, mMt3.x, is shown below the button. mMZ1.p (bnd()\'s argument) remains constant while mMZ1.release(1) is repeatedly called, incrementing the number being cubed each time. '),
              h('p', ' Here is another example. It demonstrates lambda expressions passing values to a remote location for use in a computation. If you enter three numbers consecutively below, call them a, b, and c, then the quadratic equation will be used to find solutions for a*x**2 + b*x + c = 0. The a, b, and c you select might not have a solution. If a and b are positive numbers, you are likely to see solutions if c is a negative number. For example, 12, 12, and -24 yields the solutions 1 and -2. '),
              h('p#quad4.red2', mMquad4.x),
              h('p#quad5.red2', mMquad5.x),
              h('p#quad6.red2', mMquad6.x),
              h('p', 'Run mMZ3.release(v) three times for three numbers. The numbers are a, b, and c in ax*x + b*x + c = 0. Remember to press <ENTER> after each number. '),
              h('input#quad'),
              h('p', ' The function "solve()" is at the center of the algorithm. See how mMZ3.bind() appears three times. Each time a user enters a number, say "x", mMZ3.release(x) executes. After the third number, solve calls itself so the process can start again. I prefer this approach over ES6 generators. Here\'s solve(): '),
              code.quad,
              h('p', ' And here are the supporting functions: '),
              code.quad2,
              h('p', ' fmap (above) facilitated using qS4 in a monadic sequence. qS4 returns an array, not an instance of Monad, but fmap lifts qS4 into the monadic sequence. '),
              h('p', ' The function solve() is recursive. It invokes itself after release() executes three times. The expression "solve()" resets solve to the top, where mMZ3.p becomes a function containing two nested occurrences of mMZ3.bnd. After mMZ3.release() executes, mMZ3.p becomes the function that is the argument to the next occurrence of mMZ3.bnd. That function contains yet another occurrence of mMZ3.bnd. MonadItter is syntactic sugar for nested callbacks. '),

              h('h3', ' Preserve Archives By Avoiding Mutation '),
              h('p', ' When you assign a variable to an array, for example "var arr = [1,2,3]", arr points to a location in memory. Suppose you want to preserve a record of previous values of arr. You can\'t do it with an array such as b below: '),
              h('pre', `    var arr = [1,2,3];
    var c = arr;          
    var b = [arr];
    c.push(4);
    console.log(arr);   // [1,2,3,4]
    console.log(b[0]);  // [1,2,3,4] ` ),
              h('p', ' That didn\'t work because b[0] points to the same place in memory as arr and c. "arr.push(4)" mutated the value in arr\'s location and "b.push(arr)" added a copy. "b[0] == b[1]" returning true verifies that both elements of b point to the same place in memory because in JavaScript, the "==" operator on objects (including arrays) is defined to return true if and only if the objects\' '),
              h('p', ' Here is what happens when "arr.slice()" is pushed into b: '),
              h('pre', `  var arr = [1,2,3];
    var b = [arr.slice()];
    arr.push(4);
    b.push(arr.slice());
    console.log(b[0]);  // [1,2,3]
    console.log(b[1]);  // [1,2,3,4] `),
              h('p', ' Success! "arr.slice()" returned a copy of arr assigned to a new location in memory. It is anonymous, so the only way to access it is through b. b[0], b[1], and arr each have unique locations in memory so mutating one has no effect on the others. '),
              h('p', ' The sixteen-square grid below puts these concepts into practice. If you click two squares, they exchange locations on the grid. If you do this several times, the "BACK" and "FORWARD" buttons will display the result of each pair of clicks. '),
              h('div#donkey', makeRDS(ArrDS[mMindexDS.x])),
              h('br'),
              h('button#gridBack', 'back'),
              h('button#gridForward', 'forward'),
              h('p', "index: " + mMindexDS.x),
              h('p', "rNumsDS: " + rNumsDS.join(', ')),
              h('p', "rMatrixF(rNumsDS: " + rMatrixF(rNumsDS)),
              h('p', ' Reactivity is achieved in these demonstrations through Cycle.js rather than RxJS, Bacon, or something else that could work just as well, though perhaps not quite as elegantly. This section provides a glimpse of how I use (some might say, \"misuse\") Cycle.js. '),
              h('p', ' If you click any two numbers above they will exchange places with one another. The array "rNumsDS" keeps track of the positions of numbers on the grid. '),
              h('pre', `var rNumsDS = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] `),
              h('p', ' Each square on the grid is a button. This is the initial setup: '),
              h('pre', `  var rDataDS = [
      h('button#mR0.mR', 0 ),
      h('button#mR1.mR', 1 ),
      h('button#mR2.mR', 2 ),
      h('button#mR3.mR', 3 ),
      h('button#mR4.mR', 4 ),
      h('button#mR5.mR', 5 ),
      h('button#mR6.mR', 6 ),
      h('button#mR7.mR', 7 ),
      h('button#mR8.mR', 8 ),
      h('button#mR9.mR', 9 ),
      h('button#mR10.mR', 10 ),
      h('button#mR11.mR', 11 ),
      h('button#mR12.mR', 12 ),
      h('button#mR13.mR', 13 ),
      h('button#mR14.mR', 14 ),
      h('button#mR15.mR', 15 ) ] 
                
      var ArrDS = [
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
      ];  `),
              h('p', ' The following line of code is a fixture of the virtual DOM. It accounts for the sixteen-square grid shown above: '),
              h('pre', `  h('div#donkey', ArrDS[indexDS] ) `),
              h('p', ' If you begin exploring the demonstration by clicking the upper right square, this code in main() responds by placing the number 3 in rADS: '),
              h('pre', `  var m83$ = sources.DOM
    .select('button#mR3').events('click')
    .map(e => {
      rADS.push(toInt(e.target.id.slice(2,4)));
      if (rADS.x.length === 2) {
       rDataDS = rExchange (rADS[0], rADS[1]); 
      }
    }) `),
              h('p', ' Then if you click the bottom right square (var m815), rADS expands to contain "3" and "15". This causes rExchange(3,15) to run and return the updated value of rDataDS. '),
              h('pre', `  function rExchange (k,n) {
      var a = rNumsDS[k];
      rNumsDS[k] = rNumsDS[n];
      rNumsDS[n] = a;
      rADS = [];
      return makeRDS(rNumsDS);
    } `),
              h('p', ' The last line of rExchange is a call to makeRDS, which is defined as follows: '),
              h('pre', `  function makeRDS (arr) {
      var r = arr.slice();
      return [
        h('button#mR0.mR', r[0] ), 
        h('button#mR1.mR', r[1] ),
        h('button#mR2.mR', r[2] ), 
        h('button#mR3.mR', r[3] ), 
        h('button#mR4.mR', r[4] ), 
        h('button#mR5.mR', r[5] ),
        h('button#mR6.mR', r[6] ), 
        h('button#mR7.mR', r[7] ), 
        h('button#mR8.mR', r[8] ), 
        h('button#mR9.mR', r[9] ),
        h('button#mR10.mR', r[10] ), 
        h('button#mR11.mR', r[11] ), 
        h('button#mR12.mR', r[12] ), 
        h('button#mR13.mR', r[13] ),
        h('button#mR14.mR', r[14] ), 
        h('button#mR15.mR', r[15] ) 
      ];
    } `),



              h('p', ' button#R9.mR has id "#R9" and formatting class "mR". When numbers are rearranged, the id\'s remain in fixed positions. '),
              h('p', ' The process is responsive because r83 and r815 are merged in the stream that feeds the virtual DOM; i.e., the stream returned by main() and fed back into main() by run(). Cycle.run(main, sources) is the last line of the front-end code. '),
              h('p#proxies', ' This code undoubtedly deviates from Cycle.js and functional programming recommended practices. After all, rNumsDS and rDataDS are global variables tracking the state of the grid. Cycle.js favors maintaining state in streams and functional aficionados eschew global variables, period. Me, I just like to make things work as neatly and efficiently as I can. Making a state stream would be a hassle and, since this is not a group effort, nobody is going to hijack my variable names. So, for now, grid state will hang out in global scope. '),

h('a', {props: {href: "#proxy2"}}, 'Back to the Demonstration 6' ),
h('h2', 'FUN WITH PROXIES' ),

  
h('p', ' Proxies can be useful for debugging, type checking, error handling, and more. Where they really shine is in reactive programming. Modern Firefox and Chrome browsers have supported them for quite some time and it seems inevitable that we will see more and more of them in production code. In this Cycle.js application, the virtual DOM diff & render procedure is provided by MobX, which is beginning the switch to reliance on ES6 Proxies for reactivity. autoRefresh() uses a proxy in conjunction with MobX to update the DOM each time a function composed with Bind(true) and mBnd(true) executes (see Demonstrations 1 and 2). The following demonstration features an empty object that seems to contain an invisible key named "attribute" along with invisible methods for which "attribute" is a parameter.' ),
h('pre', `   var count = {}

console.log(count.next);      // 1
console.log(count.next);      // 2
console.log(count.next);      // 3
console.log(count.next);      // 4
console.log(count.factorial); // 24 ` ),
h('p', ' What? Isn\'t count.next supposed to return "ReferenceError: next is not defined"? What\'s going on here? ' ),
h('div', {style: {fontSize: "28px", color: "red", textAlign: "center"}}, proxyResult ),
h('br'),


h('button#pr1', {style: {fontSize: "18px"}}, "count.next" ),
h('button#pr2', {style: {fontSize: "18px"}}, "count.previous" ),
h('button#pr3', {style: {fontSize: "18px"}}, "count.factorial" ),
h('br'),
h('br'),
h('button#pr4', {style: {fontSize: "18px"}}, "count.primes" ),
h('button#pr5', {style: {fontSize: "18px"}}, "count.ints" ),

h('p', ' The following code shows why count behaves as though it had methods and an attribute: ' ),
h('pre', `    function addOne () {this.attribute = this.attribute + 1}
    function takeOne () {this.attribute = this.attribute - 1}

    function primeNums(n) {
      var store  = [], i, j, primes = [];
      for (i = 2; i <= n; ++i) {
        if (!store [i]) {
          primes.push(i);
          for (j = i << 1; j <= n; j += i) {
            store[j] = true;
          }
        }
      }
      return primes.join('. ');
    }


    function intArray (n) {
         return [...Array(n+1).keys()].join(', ');
    }

    var factorial = n =>
        n <= 1 ? n : n * factorial(n - 1);

    var _state_ = {attribute: 0}

    var handlerGet = {
        get: (a, b, c) => {
            if (b === "next") {addOne.apply(_state_); return _state_.attribute}
            else if (b === "previous") {takeOne.apply(_state_); return _state_.attribute}
            else if (b === "factorial") {return factorial(_state_.attribute)}
            else if (b === "primes") {return primeNums(_state_.attribute)}
            else if (b === "ints") {return intArray(_state_.attribute)}
        }
    }

    count = new Proxy (count, handlerGet); ` ),
h('br'),
h('span.tao', ' "count" is a proxy of itself. Trying to get a value from it invokes "handlerGet", overriding the default behavior (throwing a ReferenceError). NOTE: In order to avoid future name clashes and reduce siliness in production code, I changed the definition of count to: ' ),
h('span', {style: {color: "#ee00bb"}}, '\"const count = new Proxy ({}, handlerGet);\"' ),
h('span', '. Mutating \"count = {}\" into a proxy of itself was for demonstration purposes only. Both versions function alike. '),
h('br'),
h('h3', {style: {color: "#bbee00"}}, 'Function Call Trap' ),
h('p', ' The behavior of functions can be modified with the "apply" trap. While "get: (a,b,c) =>" in a handler is "get: (target object, key, value) =>", "apply: (a,b,c) =>" is "apply: (target function, single argument, argument list) =>" ' ),
h('p', ' As initially defined, f17() does nothing more than this: f17(a,b,c,d) -> [a,c,b+c,d]. Re-defined as a proxy of itself, f17 generates arrays of Fibonacci numbers. The default values of b, c, and d are 0, 1, and false respectively, so f17(n) is equivalent to f17(n,0,1,false), returning the Fibonacci numbers under "n". f17(n,0,1,true) returns an array of prime Fibonacci numbers under n. Here\'s the code: ' ),  
h('div', {style: {color: "#FFAABB"}}, "f17(x): " + F_17  ),

h('br'),
h('div', {style: {color: "#ffaabb"}}, "f17(x,0,1,true): " + F_18 ),
h('br'),
h('span', 'Enter a number "x" here: ' ),
h('input#fibNum', ),
h('div', ' The floor of the absolute value will be used. ' ),
h('p', ' Here\'s the code: ' ), 
h('pre', {style: {color: "#00DDDD"}}, `    function primeNums(n) {
      var store  = [], i, j, primes = [];
      for (i = 2; i <= n; ++i) {
        if (!store [i]) {
          primes.push(i);
          for (j = i << 1; j <= n; j += i) {
            store[j] = true;
          }
        }
      }
      return primes;
    }

    function f17 (c, a=0, b=1, d=false) {return [c, b, a+b,d]};

    var fibHandler = {
        apply: function(a, b, c) {
             var ax = a(...c)
             var arr = [0];
            while (ax[2] < ax[0]) { 
                ax = a(...ax);
                arr.push(ax[1]);
            }
            if (c[3]) {
                var prms = primeNums(c[0]);
                var prmFibs = prms.filter(v => arr.includes(v));
                return \`The prime Fibonacci numbers up to \${c[0]} are \${prmFibs.join(', ')}\`;
            }    
            else return \`The Fibonacci numbers up to \${ax[0]} are \${arr}\`
        }
    }

    f17 = new Proxy(f17, fibHandler)  ` ),

h('h3', {style: {color: "#bbee00"}}, 'Spreadsheet-like Behavior' ),
h('p', ' In spreadsheets, such as Microsoft\'s Excell, when a + b = c, changing a or b automatically changes c. Such behavior is easy to implement with proxies. ' ),

h('table', {style: {color: '#ffaa00', fontSize: '22px'}}, [
  h('tr', [
    h('td', "A"),
    h('td', _state.a) ]),

  h('tr', [
    h('td', "B"),
    h('td', _state.b) ]),

  h('tr', [
    h('td', "SUM"),
    h('td', _state.sum) ]),

  h('tr', [
    h('td', {style: {paddingRight: '23px'}}, "PRODUCT     "),
    h('td', _state.prod) ]) ]),

h('br', ),
h('br', ),

h('button#aplus', {style: {fontSize: '17px'}}, ' A + ' ),
h('button#aminus', {style: {fontSize: '17px'}}, ' A - ' ),
h('button#bplus', {style: {fontSize: '17px'}}, ' B + ' ),
h('button#bminus', {style: {fontSize: '17px'}}, ' B - ' ),
h('br', ),
h('br', ),
h('button#resetState', {style: {fontSize: '17px'}}, ' Reset ' ),
h('span',{style: {paddingLeft: '20px'}}, 'A :' ),
h('input#stateA', ),
h('span',{style: {paddingLeft: '20px'}}, 'B :' ),
h('input#stateB', ),
h('br'),
h('p', ' Here\'s the code: ' ),
h('pre', `  const _state = {a: 0, b: 0, sum: 0, prod: 0 }

  function add_a () {this.a += 1}
  function subtract_a () {this.a -= 1}

  function add_b () {this.b += 1}
  function subtract_b () {this.b -= 1}

  function set_a (x) {this.a = x};
  function set_b (z) {this.b = z};

  function sum () {this.sum = this.a + this.b}
  function prod () {this.prod = this.a * this.b}

  function resetState () {this.a=0;this.b=0;this.sum=0;this.prod=0};

  var handlerUpdate = {
      get: (a, b, c) => {
          if (b === "add_a") add_a.apply(_state)
          else if (b === "add_b") add_b.apply(_state)
          else if (b === "subtract_a") subtract_a.apply(_state)
          else if (b === "subtract_b") subtract_b.apply(_state)
          else if (b === "resetState") resetState.apply(_state)
          else if (b === "resetState") resetState.apply(_state)
          sum.apply(_state);  
          prod.apply(_state);
          diffRender();
      }
  }

  const _count = new Proxy ({}, handlerUpdate); ` ), 

h('p', ' ' ), 
h('a', {props: {href: "#proxy2"}}, 'Back to the first demonstration' ),

h('span#comments'),
h('br'),
h('div#comment'),
h('h2', {
  style: {
    color: "red"
  }
}, 'Comments'),

h('a', {
  props: {
    href: '#top'
  }
}, 'Back to the top'),
h('div#com2', {
  style: {
    display: abcde
  }
}),
h('h3', 'User Names' ),
h('p', ' When this page loads in the browser, a user name is automatically generated in order to establish a unique WebSocket connection. This makes it possible to exchange text messages with other group members, play the game, and work on a shared todo list. If you want to leave a comment, you need to log in with a user name and a password of your choice. Each can be a single character or you could use a hard-to-hack combination of alphabet letter, numbers, and special characters. The main requirement is that there be only one comma, and that it be placed between the name and the password. '),
h('p', 'The server will keep your user name and password in a text file. If you use your saved user name and password sometime in the future, you will be able to edit or delete any comments you previously made. '),
h('p', ' If you enter a user name that has not been recorded, you will be logged in as that user. The user name and password will be saved. This means that you do not need to first register and then log in. This is an all-in-one process. If you enter a recognized user name but the password does not match the password in the record, you will be asked to try again. '),
h('br'),
h('h3', 'Register'),
h('span.red', mMregister.x),
h('input.register', {
  style: {
    display: mMshowRegister.x
  }
}),
h('br'),
h('br'),
h('h3', 'COMMENTS - One paragraph at a time.'),
h('textarea#comment', {
  style: {
    width: "60%",
    height: "90px"
  }
}, ''),
h('br'),
h('br'),
h('div', commentMonad.html),
h('p', ' When this website loads, it receives from the server a string containing all of the comments. The string is saved in commentMonad.s[0]. The string is transformed into an array of comments which is saved in commentMonad.s]1]. '),
h('p', ' When a comment is created, modified, or deleted, a WebSocket message goes to the server which performs some of its own housekeeping and broadcasts a message to all online browsers. It is received in messages$ and forwarded comments.js. '),
h('p', ' The functions in the comments.js file mutate commentsMonad. There is no reason to create fresh instances of commentMonad, other than out of devout devotion to the doctrine of non-mutation. How silly that would be! Nothing touches commentMonad outside of the comments.js file; there is no danger. '),
h('p', ' commentMonad stands in stark contrast to the gameMonad, which is never mutated although it sees much action during game play. Immutability is necessary for game history traversal. Here is the entire Comments.js file: '),
h('pre', `function showFunc (name, name2)
  {return name == name2 ? 'inline-block' : 'none'}

  var MonadState3 = function MonadState3(g, state) {
    this.id = g;
    this.s = state;
    this.bnd = (func, ...args) => func(this.s, ...args);
    this.ret = function (a) {
      return window[this.id] = new MonadState(this.id, a);
    };
  }  

  bind2(n)(cubeP)(addP(3))(a=>a+ar[0]+ar[1]-18)(multP(1/3))
    (addP(-11))(()=>ar[1]+ar[2]+ar[3])(terminate) ;

  var commentMonad = new MonadState3('commentMonad',   [ '', [] ]);

  MonadState3.prototype.html = [];

  MonadState3.prototype.init = function (str) { // fetch all comments
    this.s[0] = str;
    this.s[1] = this.s[0].split("<@>");
    this.s[1] = this.s[1].filter(v => (v != ""));
    process(this.s[1]);
  }

  MonadState3.prototype.append = function (str) {
    this.s[0] = this.s[0] + str;
    this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
    process(this.s[1]);
  }

  MonadState3.prototype.edit = function (num,txt) {
    this.s[1].splice(num,1,txt);
    this.s[0] = this.s[1].join("<@>");
    this.s[1] = this.s[0].split('<@>').filter(v => (v != ""));
    process(this.s[1]);
  };

  MonadState3.prototype.remove = function (num) {
    this.s[1] = this.s[1].filter(v => v!== '');
    this.s[1].splice(num,1);
    this.s[0] = this.s[1].join("<@>");
    this.html = process(this.s[1]);
    return this.html;
  };

  function process (a) { //Assembles the HTML for display.
    var arr = a;
    mMcomments.ret([]);
    var n = -1;
    arr.map(a => {
      var x = a.split("<o>");
      if (x.length != 2) x = ['malfunction', '8888']
      x[1] = x[1].replace(/<<>>/g, ',');
      show = showFunc(x[0], pMname.x);
      n+=1;
      mMcomments.bnd(push, h('div#'+n, [
        h('span', x[0] + ' commented: ' + x[1].replace(/<<>>/g, ",")),
        h('br'),
        h('textarea#commit', {props: {cols: 55, rows: 2},
           style: {display: show }}, x[1]),
        h('button#deleteB', {props: {innerHTML: 'delete'},
       style: {display: show, fontSize:14}}),
        h('br' ),
        h('span', '***************************************************************')
      ]))
    })
  } `),
              h('a', { props: { href: '#top' }}, 'Back to the top'),
              h('p', ' *************************************************************************************** '),

            h('pre', `
var compose = (...fns) =>
fns.reduceRight((prevFn, nextFn) =>
  (...args) => nextFn(prevFn(...args)),
  value => value
);

var example = compose(
val => { console.log(1, val); return val**2; },
val => { console.log(2, val); return val+=4; },
val => { console.log(3, val); return val*=2; }); `),




            h('br'),
           // h('input#change', diffRend),
            h('br'),
           // h('input#textbox', `${pigText}`),
            h('div#changeDisplay', [diffRend]),
            h('button#diffRender', 'diffRender()'),
            h('br'),
            h('br'),
            h('br')
          ])
        ])
      })
    }
  }

  diffRender = () => document.getElementById('diffRender').click();
  sources.DOM = makeDOMDriver('#main-container');
  sources.WS = websocketsDriver;
  sources.GD = gridDriver;

  Cycle.run(main, sources);
