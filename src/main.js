  import {run} from '@cycle/xstream-run';
  import {h, p, span, h1, h2, h3, pre, br, div, label, input, hr, makeDOMDriver} from '@cycle/dom';
  import code from './code.js';
  import {curry, flip, compose} from 'ramda'

  console.log(' Now loading main.js <@><@><@><@> <<< @ >>> <@><@><@><@>');
  var textA = h('textarea', 'You bet!' );
  var formA = h('form#horses', 'You bet!' );
  console.log(xs);


  login();
  function login () {
    console.log('00000000000000000000000000000000 Entering login', socket.readyState);
    setTimeout(function () {
      if (socket.readyState === 1) {
        console.log('readyState is',socket.readyState);
        var v = Math.random().toString().substring(5);
        var v2 = v.toString().substring(2);
        var v2 = "password"
        playerName = v;
        playerGroup = "solo";
        pMname.ret(v);
        pMoldName.ret(v);
        pMgroup.ret('solo');
        gameMonad.run([0,0,0,[],[7,7,7,7],v,"solo"]);
        var combo = v + '<o>' + v2;
        socket.send('CC#$42' + combo );
        pMcombo.ret(combo);
        pMclicked.ret([]);
        socket.send(`GZ#$42,solo,${v}`);
      }
      else {
        login();
      }
    },650 )
  }

  function main(sources) {
   console.log('0^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ got this far');

   const messages$ = sources.WS.map( e => {
     console.log(e);
     var v = e.data.split(',')
     var group = v[1]
     var sender =  v[2];
     var extra = v[3];
     var extra2 = v[4];
     console.log('In messages$ - - v is', v );

     mMZ9.bnd( () => {
       // pMname.ret(sender);
     });

     mMZ10.bnd( () => {
       if (sender === pMname.x) {
         gameMonad.run([v[7], v[8], 0, [], [v[3], v[4], v[5], v[6]]]);
       }
       else gameMonad.run([, , , [], [v[3], v[4], v[5], v[6]]]);
     });

     mMZ11.bnd( () => {
       console.log('The message arrived', messages$);
       var message = v.slice(3,v.length).join(', ');
       var str = v[2] + ': ' + message;
       messages.unshift(h('span', str ), h('br'));
       console.log('The message was typeof ar', typeof str );
     });

     mMZ12.bnd( () => {
       mMgoals2.ret('The winner is ' + v[2]);
       setTimeout( function () {mMgoals2.ret('')},700);
     });

     mMZ13.bnd( () => {
       mMgoals2.ret('A player named ' + v[2] +
         ' is currently logged in. Page will refresh in 4 seconds.')
       refresh() });

     mMZ14.bnd( () => {
       var ar = e.data.split("<$>")[1];
       console.log("In mZ14.bnd - - ar is", ar);
       console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzztaskMonad',taskMonad);
       return taskMonad.init(ar);
     });

     mMZ15.bnd( () => {
       var ar = [];
       var arr = v[3].slice();
       var arr2 = arr.split("<$!$>");
       var arr3  = arr2.map(v => {
         console.log('In mMZ15.bnd ar, arr, arr2, and arr3 are', ar, arr, arr2, arr3),
         ar.push(v);
         ar.push(h('br'));
       });
       gameData = ar;
     });

     mMZ16.bnd( () => {                          // Prefix RR#$42
       var str = mMcommentStr.x;
       if (extra2 === "code1") {
         mMregister.ret('The registered name ' + extra + ' and the associated password were recognized. ' );
         socket.send('GZ#$42,' + pMgroup.x + ',' + pMname.x + ',<@>' + str);
       }
       if (extra2 === "code2") {
         mMregister.ret('The new name ' + extra + ' was registered.' );
         socket.send('GZ#$42,' + pMgroup.x + ',' + pMname.x + ',<@>' + str);
       }
       if (extra2 === "code3") {
         pMname.ret(sender);
         mMregister.ret('The password you entered is not the password that is registered for ' + extra + '.' );
       }
     });

     mMZ17.bnd( () => {                          // Prefix GZ#$42
       var newStr = extra.substring(0, extra.length-3);
       newStr = newStr.replace(/<@><@>/g, "<@>");
       newStr = newStr.replace(/↵/g, '');
       if (newStr === "") return;
       commentMonad.init(newStr);
     });

     mMZ18.bnd( () => {                          // Prefix GN#$42  NEW COMMENT
       commentMonad.append(extra);
     });

     mMZ19.bnd( () => {                          // Prefix GE#$42  EDIT A COMMENT
       commentMonad.edit(extra, extra2);
       console.log('In mMZ19 to edit a comment. <><><><><><><> extra, extra2:',extra,extra2);
     });

     mMZ20.bnd( () => {                         // Prefix GD#$42  DELETE A COMMENT
       commentMonad.remove(parseInt(extra,10));
     });
    // ******************************************************* TASKS
     mMZ21.bnd( () => {        // add a new a task
       console.log('ooooooooooooooooooo New task from the server', extra);
       taskMonad.append(extra);
     });

     mMZ22.bnd( () => {        // edit a task
       taskMonad.edit(v[3],v[4]);
     });

     mMZ23.bnd( () => {
       taskMonad.toggle(v[3]+1);
     });

     mMZ24.bnd( () => {        //Delete a task
       taskMonad.delete(v[3]);
     });

     mMZ25.bnd( () => {        // Receive tasks when group changes
       console.log('QQQQQQQQQQQQQWWWWWWWWWWQQQQQQQQ in mMZ25.bnd. extra is ',extra);

       taskMonad.init(extra);
     });

     mMZ27.bnd( () => {
       mMZ38.release(v[3]);
     });

     mMZ28.bnd( () => {
       mMZ40.release(v[3]);
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
    .bnd(next, 'TA#$42', mMZ21)  // Automatic task list load on group change
    .bnd(next, 'TE#$42', mMZ22)  // edit a task
    .bnd(next, 'TT#$42', mMZ23)  // chechbox
    .bnd(next, 'TX#$42', mMZ24)  // delete button
    .bnd(next, 'TI#$42', mMZ25)  // group change
    .bnd(next, 'BB#$42', mMZ27)  // works in conjunction with it4
    .bnd(next, 'BC#$42', mMZ28)  // works in conjunction with it4
   });

   console.log('1^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ got this far');
  function next(x, y, instance, z) {
    if (x == y) {
        instance.release(z);
    }
    return ret(x);
  };

  /*
  async function waitP (f, args) {
    var z = await (p);
    m80.ret(z);
    console.log(m80.x);
    return m80.x;
  }
  console.log('m80.x',m80.x);
   function bind (x, ar = [], args) {
      this.ar = ar;
      var xano = "Charles"
      ar.push(x);
      if (ar.length === 0) ar = [x];
      console.log('Entering bind. x and ar are',x,ar);
      return function debug8 (func, args=[]) {
        if (func.name === "terminate") return ar;

        if (func(x, ...args) instanceof Promise) {
          console.log('bind: func(x, ...args) instanceof Promise');
          return async () => {
            await waitP(func(x, ...args))
            return bind(m80, ar);
          }
        }

        var y = func(x, ...args)

        if (func(x, ...args) instanceof Monad) {
          console.log('bind: y is a monad. y.x and ar',y.x,ar);
          return bind(y.x, ar);
        }
        else {
          console.log('bind: func(x, ...args) is not a Monad or a Promise. y',y);
          return bind(y, ar);
        }
      };
    };
  */

  var comment$ = sources.DOM.select('#comment').events('keydown');

  var commentAction$ = comment$.map(e => {
    if (e.keyCode == 13) {
      e.preventDefault();
      console.log('In commentAction$ eeeeeeeeeeeeeeeee e is', e );
      var comment = e.target.value.replace(/,/g, "<<>>");
      comment = pMname.x + "<o>" + comment
      socket.send(`GN#$42,${pMgroup.x},${pMname.x},<@>${comment}<@>`);
    }
  });

  var deleteClick2$ = sources.DOM
      .select('#deleteB').events('click');

  var deleteAction2$ = deleteClick2$.map(function (e) {
      var index = parseInt(e.target.parentElement.id, 10);
      var old = commentMonad.s[1].slice(index,index+1)[0];
      socket.send(`GD#$42,${pMgroup.x},${pMname.x},${index},${old}`);
  });

  var editB$ = sources.DOM
      .select('textarea#commit').events('keydown');

  var editBAction$ = editB$.map( function (e) {
    if (e.keyCode == 13) {
      console.log("!!! <MAGNOLIA BLOSSOMS> !!! we are in editBAction$");
      console.log('Here is e',e);
      var index = parseInt(e.target.parentElement.id, 10);
      var w = e.target.value.split(",");
      var nu = pMname.x + "<o>" + w.join('<<>>');
      var old = commentMonad.s[1].slice(index,index+1)[0];
      console.log('This goes to the server from editBAction$',index,old,nu+'<@>');
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
      var art = str.split(',');
      if (e.keyCode === 13) {
        mMerror.ret('');
        if (art.length != 2) {
          mMerror.ret(' There should be one and only one comma' );
          return;
        }
        else {
          var name = art[0];
          var x = art.join('<o>');
          mMshowRegister.ret('none');
          pMname.bnd(backupMonad.ret)
          pMname.ret(name);
          console.log('pMname.x is', pMname.x );
          socket.send(`RR#$42,${pMgroup.x},${pMoldName.x},${x}`); }
          setTimeout(function () {
            socket.send(`CG#$42,${pMgroup.x},${name},${pMscore.x},${pMgoals.x}`);
          },700);
      }
    });

    var groupPress$ = sources.DOM
        .select('input#group').events('keypress');

    var groupPressAction$ = groupPress$.map(e => {
      console.log("BAMM! You");
      if (e.keyCode === 13) {
        send("CO#$42", e.target.value);
        gameMonad.run([0,0,0,[],[0,0,0,0],,e.target.value]);
        socket.send(`TI#$42,${e.target.value},${pMname.x}`);
        setTimeout ( () => send("CO#$42", e.target.value),500);
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

    var updatePlayers = function updatePlayers (data) {
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

    var m80Action$ = m80Change$.map(() => {
      console.log('Hot dog, we got a live one. m80.x is', m80.x);
    });

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
      if (gameMonad.fetch3().length < 2)  {
        var a = gameMonad.fetch3();
        var b = gameMonad.fetch4();
        a.push(b.splice(e.target.id, 1)[0]);
        console.log('In numClickAction$ - - - gameMonad.index and gameMonad.s ', gameMonad.index, gameMonad.s );
        gameMonad.run([,,,a,b,,]);
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
      }
      else {
        gameMonad.run([,,e.target.innerHTML,,,,]);
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

// ******************************************************************** <><><><><><> -> End Demos
    var itterPress$ = sources.DOM
        .select('#itter').events('keypress');
    var itterAction$ = itterPress$.map(e => {
      if (e.keyCode === 13) {
        itterResult = h('div', styleFunc(["#FFD700",,"16px",,,]), bind(pInt(e.target.value))(v => v)(() => mMZ23.bnd(v => v*v*v))(()=>3)(x => mMZ23.release(3)+x)(q => q*q/ar[1])(terminate).join(', ') );
      }
    });

    var doublePress$ = sources.DOM
        .select('#double').events('keypress');

    var doubleAction$ = doublePress$.map(e => {
      console.log('In doubleAction - - e is',e);
      var dRes = "";
      if (e.keyCode === 13) {
        bind(3)
        (cubeP)(addP(3))(c=>ar[1]
        .then(v => v - 75 + c*ar[0]))(terminate)
        .map(v => v.then ? v.then(s => 
        dRes = dRes + s + ', ') : dRes = dRes + v + ', ')  
      }
    });
    
    // ******************************************************************** <><><><><><> -> End Demos

      var fib2 = function fib2(v) {
          if (v[2] > 1) {
              mMfib.ret([v[1], v[0] + v[1], v[2] - 1]);
          }
          else {
              mM19.ret(v[0]);
          }
      };

      var fibPress$ = sources.DOM
          .select('input#code').events('keydown');

      var fibPressAction$ = fibPress$.map(function (e) { if (e.target.value === '') {
              return;
          }
          ;
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
        (() => idP(Bind.bind1[0]-Bind.bind1[1])) 
        (v=>addP(Bind.bind1[1])(v))
        };
      });


      // *******************************************n****************************** ENDOM iginal Fibonacci END

      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> START PRIME FIB

      const workerB$ = sources.WWB.map(m => {
        console.log('In workerB stream in the main thread. m, m[3] ', m, m.data[3] );
        if (m.data[3] === 'color') {
          fill1Monad.ret(m.data[0]);
          fill2Monad.ret(m.data[1]);
          fill3Monad.ret(m.data[2]);
          mMprimeBlurb.ret(m.data[5]);
          mMfibBlurb.ret(m.data[4]);
          mMprimeFibBlurb.ret(m.data[6]);
        }
        else {
          console.log('m.data[3] ********************', m.data[3] );
          mMelapsed.ret(elapsed(m.data[0][3]))
          .bnd(v =>  console.log(v));
          mMres.ret(m.data[0])
          window['primesMonad'] = new MonadState('primesMonad', m.data[1], primes_state);
        }
      });

      var fibKeyPress5$ = sources.DOM
          .select('input#fib92').events('keyup');

      var primeFib$ = fibKeyPress5$.map(e => {
        workerB.postMessage([primesMonad.s, e.target.value]);
      });

      var clearprimes$ = sources.DOM
        .select('#clearprimes').events('click')
        .map(() => mMres.ret([mMres.x[0], '', mMres.x[2], mMres.x[3]]));


    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  Begin Easy

      var factorsPress$ = sources.DOM
          .select('input#factors_1').events('keydown');

      var factorsAction$ = factorsPress$.map(function (e) {
      console.log('&&&&&>>> >>  factorsAction$. e is', e );
        var factors = [];
        mMfactors3.ret('');
        if (e.keyCode === 13) {
          var num = e.target.value;
          if (!num.match(/^[0-9]+$/)) {
            mMfactors3.ret('This works only if you enter a number. ' + num + ' is not a number');
          }
          else {
            var n = parseInt(num, 10);
            workerC.postMessage([primesMonad.s, [n]]);
            bind(n)(prm5)(split2)(pop)(largest)(terminate).map(x => m777.ret(x));
          }
        }
      });


    //******************************************************************* worker
      m42_RES = [];


    var clearClick$ = sources.DOM
        .select('button.clear_P').events('click')
        .map(e => {
          console.log('In clearClick$ - - - e is', e);
          m42_RESULT = [];
          m42_RESULT2 = [];
        })

    var factors2Press$ = sources.DOM
        .select('button.factors_P').events('click');

    var factors2Action$ = factors2Press$.map(function (e) {
      console.log('&&&&&>>> >> in factors2action$. e is', e );
      var factors = [];
      mMfactors3.ret('');
      bind(65)(cubeC)(it4)(it6)(it7);
    });

  workerG$ = sources.WWG.map(m => {
    m778_RESULT = result778(m.data);
    mMZ38.release(m.data);
    console.log('<><><><><><><><><><>< prime factors ><><><><><><><><><><><><><><><><>');
    console.log('<><><><><><><><><><><>< e.data><>< e.target.ar2 ><><><><><><><><><><><><>');
    if (m.data) {console.log('GOOD m.data')} else { return "cow" }
      if (m.target) {console.log('GOOD m.target')} else { return "shit" }
        if (m.data[1]) {console.log('GOOD m.data[1]')} else { return 'donkey'}
          if (m.target.ar2) {console.log('GOOD m.data.ar2')} else { return 'dung'}
    console.log('The prime factors of ' + m.data[1] + ' are ' + m.target.ar2.join(', '))
    console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><>');
    console.log('<><><><><><><><><><><><><><><><><><><><><><><><><><><>');

  });

function bind (x, ar=[]) {
  var ar = ar;
  if (ar.length === 0) ar = [x];
  if (x instanceof Promise) x.then(y => ar.push(y));
  else ar.push(x)
  return function debug8 (func) {
    if (func.name === "terminate") return ar;
    var p;
    if (x instanceof Promise) {
      p = x.then(v => func(v));
    }
    else p = func(x);
    return bind(p, ar);
  };
};

      var clearClick7$ = sources.DOM
          .select('button.clear_Q').events('click')
          .map((() => {
            m42_ = [];
          }))
  

      var factorsClick7$ = sources.DOM
        .select('button#factors_Q').events('click');

      var factorsAction7$ = factorsClick7$.map( e => {
        m42_ = [];
        console.log('In factorsAction7$ - - <W>W<>W<>W<><W>WWW<W><W>WW><><><><><>!!! e is',e); 

        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);

        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);

        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);

        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
        bind(130)(x=>x*x*x)(it4)(it6)(it7);
      });
    
      var callOrder = 0;
      var start77;

      workerH$ = sources.WWH.map(m => mMZ52.release(m));

      it7 = () => mMZ52.bnd(m => {
        callOrder = callOrder > 24 ? 1 : callOrder + 1;
        if (callOrder === 1) start77 = Date.now(); 
        m42_.push(callOrder + "  ");
        m42_.push(m.data[0])
        m42_.push(h('br'));
        if (callOrder === 25) m42_.push('Elapsed time: ' + (Date.now() - start77) + " ms");
        var w = m.data[1][m.data[1].length - 1];
        var primesState = [w, m.data[1], w, m.data[1]];
        if (m.data[1].length > primesMonad.s[3].length) {
          window['primesMonad'] = new MonadState('primesMonad', primesState );
        }
      });

      var factors3Press$ = sources.DOM
          .select('input#factors').events('keypress');

      var factors3Action$ = factors3Press$.map(function (e) {
          if (e.keyCode === 13) {
          bind(e.target.value)(it8);
        }
      });

      mMZ40.bnd(v => {
        console.log('In mMZ40.bnd -- v is', v)
        workerH.postMessage([primesMonad.s[3], v])
      });

    /*  workerH$ = sources.WWH.map(m => {
        console.log('<0><0><0><0><0><0><0><0><0><0><0><0><0><0><0><0><0><0> In workerH$ m is', m);
        mMZ40.release(m.data);
        // mMZ40.bnd(v => console.log(reduceMult(v), reducePlus));
      });

       if (m.data) {console.log('GOOD m.data')} else { return "cow" }
       if (m.target) {console.log('GOOD m.target')} else { return "shit" }
       if (m.data[1]) {console.log('GOOD m.data[1]')} else { return 'donkey'}
       if (m.target.ar2) {console.log('GOOD m.data.ar2')} else { return 'dung'} */

      const result778 = x => h('div', [
        m778_RESULT,
        h('br'),
        h('span', bigBlue, x[3] ),
        h('span', bigGreen, x[0] ),
        h('span', bigBlue, x[4] ),
        h('span', bigRed, x[5] ),
      ]);

      var m778_RESULT = h('div', '' );


        var mMZ33Func = x => mMZ33
          .bnd(x => {
            mMt32 = new Monad(x,'mMt32');
            mMt33.ret(x + ' cubed is ' + x*x*x)
            mMZ33Func(x+1);
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

var makeDisplay = a => b => c => h('div', [
  h('pre', a, ` ping        ---> `), 
  h('pre', b, `                 <---        pong `), 
  h('pre',  `          -- SCORE: ping: ` + c[0]  + ` pong: ` + c[1]  ),
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

var pingScore = [0,0];

pp4 = ()  => {
  console.log('In pp4 <4><7><4> ---> --> -> COW');
  var a = _A3;
  var b = _A2;
  var c = _A3;
  var d = [0,0];
  var random = 0;
  var turns = 0;
  var bool = true;
  var car;
  var ms = 300;
  return car = () => {
    bool = !bool;
    pingCompute(bool)(a)(b)(c)
    diffRender()
    if (random === 0) random = Math.floor(Math.random() * 11)+1;  // New serve flag "random === 0" detected.
    setTimeout( function () {
      if (pingScore[0] >= 11 || pingScore[1] >= 11) { 
        diffRender() 
        turns = 0;
        random = 0;
        pingScore = [0,0];
      };
        if (turns >= random && turns % 2 === 0) {
          pingScore[0]+=1; 
          turns = 0;
          random = 0;  // A signal to compute a new random number when the next message comes in.
          diffRender()
        }
        if (turns >= random && turns % 2 === 1) {
          pingScore[1]+=1; 
          turns = 0;
          random = 0;       
          diffRender()
        } 
        ms = (turns < random) ? 300 : 900;
        turns+=1;
        diffRender()
        console.log('In car - - - a.style, b.style, and c are',a.style, b.style, c[0],'to', c[1])
        car()
    },ms )          
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

pingScore = [0,0];
pingScore2 = [0,0];
pingScore3 = [0,0];
// ***************************** start message from workerI    

const otherP = bool => a => b => c =>  {  
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
  console.log( ' *** ALPHA *** pingScore', pingScore[0], pingScore[1] ); 
  console.log('***** ONE ***** m.data, ping43, ping44', m.data, ping43.style.display, ping44.style.display ); 

  if (m.data === "game over") return;
  otherP(m.data)('ping43')('ping44')('pingScore');
  otherP(m.data)('ping45')('ping46')('pingScore2');
  otherP(m.data)('ping47')('ping48')('pingScore3');
  workerI.postMessage(m.data);
  diffRender();
  
  console.log('***** TWO ***** m.data, ping43, ping44', m.data, ping43.style.display, ping44.style.display ); 
  console.log( ' *** BETA *** pingScore', pingScore[0], pingScore[1] ); 
}); 


// ***************************** end message from workerI    

var pinpon4$ = sources.DOM
    .select('button.pingpong4').events('click')

var pingpong4$ = pinpon4$.map(() => {
  console.log("You clicked pingpong4. How does it feel?");
 
  pp4('ping43')('ping44')('pingScr1');
 // pp4('ping45')('ping46')('pingScr2'); 
 // pp4('ping47')('ping48')('pingScr3');
});

// *********************************** pingpong ***************  FINISH

        const fred$ = sources.FD.map(e => {
          freday = e;
        })

        var frd$ = sources.DOM
            .select('div#fredB').events('click')

        var fredAction$ = frd$.map((e) => {
            freday = [];
            diffRender()
            console.log("Goodness gracious great balls of fire, freday, e", freday,e);
        });

        var fredGo$ = sources.DOM
            .select('button#fredB')
            .events('click')
            .map(() => {
              freday = [];
              funcP()
            });



      //******************************************* END pingpong END

      /*
      const redStyle = {style: {color: 'red', marginLeft: '20%', fontSize: '25px'}}
      const yellowStyle = {style: {color: 'yellow', marginLeft: '20%', fontSize:'25px'}}

        var pingpongRecursion = n => ar => bind(n,ar)(ppFna)(pause)(ppFnb)(() => {
          if (n < 15) pingpongRecursion(n+1,ar)
          bind(n+1,ar)(ppFna)(pause)(ppFnb)(terminate)
        });

        var ppFna = n => h('p', redStyle, 'ping' + n);
        var ppFnb = n => h('div', [h('br'),h('p', yellowStyle, 'PONG' + n)]);



          var pingpongAction$ = pingpong$.map(function (e) {  });

        */
          // **********************************************************************

  var bindBD$ = sources.BD.map(m => console.log("Happy and proud",m))

  const workerC$ = sources.WWC.map(m => {
    console.log('Back in the main thread. m is', m );
    mMfactors.ret(m.data[0]);
    mMfactors23.ret(m.data[1]);
    mMZ39.release(m.data[1]);
    window['primesMonad'] = new MonadState('primesMonad', m.data[2]);
  });

  function prom (n) {
    setTimeout(() => {workerC.postMessage([primesMonad.s, [n]])},20 );
    return new Promise ((resolve,reject) => {
      resolve ( sources.WWC.map(e => console.log(e.data[1])))
    });
  };

  var factorsP$ = sources.DOM
    .select('input#factors_5').events('keyup');

  var fA$ = factorsP$.map(function (e) {
    mMfactors7.ret('');
    var factors = [];
    if (e.keyCode === 13) {
      var ar = (e.target.value).split(',').map(v => parseInt(v,10));
      console.log('In fA$ ar is', ar );
      if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
        mMfactors7.ret('It works only if you enter two integers separated by a comma.');
        return;
      }
    else {
        //workerD.postMessage([primesMonad.s, ar, mMfactors6.x]);
        workerD.postMessage([primesMonad.s, ar, decompMonad.s, 'Happy, happy']);
      }
    }
  });

  const workerD$ = sources.WWD.map(m => {
    console.log('Back in the main thread. m is', m );
    mMfactors6.ret(m.data[0][3]);
    window['primesMonad'] = new MonadState('primesMonad', m.data[0], primes_state);
    mMfactors8.ret(m.data[1]);
  });


  // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^  End Easy
  const largestFactor = x => bind(1111111)(prm5)(split2)(largest)(terminate).pop()
  var factorsPress_b$ = sources.DOM
      .select('input#factors_1b').events('keydown');

  var factorsAction_b$ = factorsPress_b$.map(function (e) {
  console.log('Cordial greetings from factorsAction$_b$. e is', e );
    var factors = [];
    mMfactors3_b.ret('');
    if (e.keyCode === 13) {
      var num = e.target.value;
      if (!num.match(/^[0-9]+$/)) {
        mMfactors3_b.ret('This works only if you enter a number. ' + num + ' is not a number');
      }
      else {
        var n = parseInt(num, 10);
        workerE.postMessage([primesMonad.s, n, decompMonad.s]);
      }
    }
  });

  const workerE$ = sources.WWE.map(m => {
    // console.log('Back in the main thread. m is', m );
    mMfactors_b.ret(m.data[0]);
    window['primesMonad'] = new MonadState('primesMonad', m.data[1]);
    window['decompMonad'] = new MonadState('decompMonad', m.data[2]);
  });

  var factorsP_b$ = sources.DOM
    .select('input#factors_5b').events('keyup');

  var fA_b$ = factorsP_b$.map(function (e) {
    mMfactors7.ret('');
    var factors = [];
    if (e.keyCode === 13) {
      var ar = (e.target.value).split(',').map(v => parseInt(v,10));
      console.log('In fA$ ar is', ar );
      if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
        mMfactors7.ret('It works only if you enter two integers separated by a comma.');
        return;
      }
    else {
        workerF.postMessage([primesMonad.s, ar, decompMonad.s]);
      }
    }
  });

  const workerF$ = sources.WWF.map(m => {
    console.log('zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz -> Back in the main thread. m is', m );
    mMfactors6_b.ret(m.data[2][3]);
    window['primesMonad'] = new MonadState('primesMonad', m.data[0], primes_state);
    window['decompMonad'] = new MonadState('decompMonad', m.data[2], primes_state);
    mMfactors8_b.ret(m.data[1]);
  });

  var factorsP_c$ = sources.DOM
    .select('input#factors800').events('keyup');

  var fA_c$ = factorsP_c$.map(function (e) {
    console.log('In fa_c$ *************************************************************'),
    mMfactors800.ret('');
    var factors = [];
    var ar = (e.target.value).split(',').map(v => parseInt(v,10));
    if (e.keyCode === 13) {
      console.log('In fA_c$ ar is', ar );
      if (ar[0] !== ar[0] || ar[1] !== ar[1] || typeof ar[0] !== 'number' || typeof ar[1] !== 'number') {
        mMfactors7.ret('It works only if you enter two integers separated by a comma.');
        return;
      }
    else {
      console.log('In fA_c$ else block. ar is', ar );
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

              
  var solve = function solve () {
     mMZ3.bnd(a => {
     mMquad4.ret('');
     mMquad6.ret('');
     mMquad5.ret(a + " * x * x ")
     mMZ3.bnd(b => {
     mMquad6.ret(b + ' * x ')
     mMZ3.bnd(c => {
     mMtemp.ret([a,b,c])
    .bnd(gMap, qS4,'mMtemp2')
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
              " * " + x + " " + p(c).text + " = 0")
      mMquad6.ret(p(a).text + " * " + y + " * " + y + " + " + p(b).text +
              " * " + y + " " + p(c).text + " = 0")
      solve();   // Continuing the endless loop.
      }) }) }) })
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


  // ******************************************BEGIN TODO LIST

  var task2 = function task2(str) {
      socket.send(`TD#$42,${get(pMgroup)},${get(pMname)},@${str}`)
  };

  function comment2(str) {
      socket.send(`TD#$42,${get(pMgroup)},${get(pMname)},@${str}`)
  };


  // *****************************************END TODO LIST
  var captionClick$ = sources.DOM
     .select('#caption').events('click');

  var captionClickAction$ = captionClick$.map(function () {
      (get(mMcaptionDiv)  === 'none') ?
          mMcaptionDiv.ret('block') :
          mMcaptionDiv.ret('none')
  });

  var gameClick$ = sources.DOM
      .select('#game').events('click');

  var gameClickAction$ = gameClick$.map(function () {
      (get(mMgameDiv)  === 'none') ?
          mMgameDiv.ret('block') :
          mMgameDiv.ret('none')
  });

  var clearPicked$ = sources.DOM
      .select('#clear').events('click');

  var clearAction$ = clearPicked$.map( () => {
    gameMonad.clearPicked();
  });

  var elemB$ = sources.DOM.select('input#message2').events('keyup')
    .map(e => {
    mM10.ret(e.target.value);
    worker.postMessage([mM9.x, e.target.value]);
  });

  var pr$ = sources.DOM
      .select('#primeNumbers').events('keypress');

  var prAction$ = pr$.map(function (e) {
      if (e.keyCode === 13) {
        worker.postMessage(["CE#$42", primesMonad.s, e.target.value]);
      }
  });


  // Clicking the checkbox to indicate that a task has been finished.
  var box$ = sources.DOM.select('.box').events('click');

  var boxAction$ = box$.map(e => {
    console.log('+++++++ PROGRESS OF boxAction$ ++++++ .box was clicked');
    var index = parseInt(e.target.parentNode.id, 10);
    console.log(index);
    console.log(taskMonad.s[1].slice(index,index+1) );
    var task = taskMonad.s[1].slice(index,index+1)[0];
    console.log('task:',task);
    var old = task;
    var ar = task.split("<$>");
    ar = ar.filter(v => v !== "");
    ar[1] = ar[1] === "false" ? "true" : "false"
    var newTask = ar.join("<$>");
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ In boxAction$. newTask is',newTask);
    socket.send(`TE#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
  });

  var cbx2$ = sources.DOM.select('.cbx2').events('click');

  var cbx2Action$ = cbx2$.map(e => {
    console.log('+++++++ PROGRESS OF cbx2Action$ ++++++ .cbx2 was clicked');
    var index = parseInt(e.target.parentNode.id, 10);
    console.log(index);
    console.log(taskMonad.s[1].slice(index,index+1) );
    var task = taskMonad.s[1].slice(index,index+1)[0];
    console.log('task:',task);
    var old = task;
    var ar = task.split("<$>");
    ar = ar.filter(v => v !== "");
    ar[1] = ar[1] === "false" ? "true" : "false"
    var newTask = ar.join("<$>");
    console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ In cbx2Action$. newTask is',newTask);
    socket.send(`TE#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
  });


  // Clicking the DELETE button.


  var deleteClick$ = sources.DOM
      .select('#deleteTask').events('click');

  var deleteAction$ = deleteClick$.map(function (e) {
    var index = parseInt(e.target.parentNode.id, 10);
    var old = taskMonad.s[1].slice(index,index+1)[0];
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
      var old = taskMonad.s[1].slice(index,index+1)[0];
      var ar = old.split("<$>");
      var newAr = e.target.value.split(',');
      var newString = newAr.join("<<>>");
      console.log('()()()()()()()() In editAction$. ar is', ar);
      ar.shift();
      console.log('()()()()()()()() In editAction$. ar is', ar);
      ar.unshift(newString);
      console.log('()()()()()()()() In editAction$. ar is', ar);
      var newTask = ar.join("<$>");
      console.log('4.3.2.1. >> In editAction$.index, old and newTask are',index,old,newTask);
      socket.send(`TE#$42,${pMgroup.x},${pMname.x},${index},${old},${newTask}`);
    }
  });

  var newTask$ = sources.DOM
      .select('input.newTask').events('keydown');

  var newTaskAction$ = newTask$.map(function (e) {
    console.log("-------------ONE TWO THREE In newTaskAction$. e is",e);
    if (e.keyCode === 13) {
    var alert = '';
        var ar = e.target.value.split(',');
      if (ar.length < 2) {
        mMalert.ret('You should enter responsible party then a comma then a task');
        return;
      }
      else {
        var x = ar.shift();
        var y = ar.shift();
        var z = ar.join("<<>>")
        var result = z + '<$>' + 'false' +'<$>' + x + '<$>' + y
        socket.send(`TA#$42,${pMgroup.x},${pMname.x},${result}<@>`)
      }
    }
  });

  console.log('Just before calcStream@');

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
        if (diffRend < 50) {diffRend+=1}
        else diffRend = 0;
      });

   
  var diffRendChange$ = sources.DOM
      .select('input#change').events('onChange')
      .map(e => {
        console.log('diffRend changed <C><C>< Change ><C><C> --> --> e is', e );
      })

  var diffRendClick$ = sources.DOM
      .select('input#change').events('click')
      .map(e => {
        console.log('diffRend changed <C><C>< Click Click Click ><C><C> --> --> e is', e );
      })


  var res8$ = result_8$.map(() => {
    res8_Style = res8_HIDE;
    setTimeout(() => {res8_Style = res8_SHOW,4600;diffRender()},4200);
    RESULT_8 = [];
    bind(1)(addP(2))(cubeC)(addC(3))(multC(2))(multP(3))
    (addC(30))(multC(1/10))(terminate).slice(1,8).map(v => v.then(z => {
      ;RESULT_8.push(z.x+' ');console.log(RESULT_8);diffRender()}))
    });

  console.log('NOW WE ARE AT calcStream@');

  var test5Press$ = sources.DOM
    .select('input#test5').events('keypress');

  var test5Action$ = test5Press$.map(function (e) {
    console.log('In testAction$');
    if (e.keyCode === 13) {
      test5(e.target.value);
    };
  }); 




      var calcStream$ = xs.merge( pingpong$, test5Action$, diffRendChange$, diffRendClick$, demo2Action$, bindBD$, doubleAction$, itterAction$, fredGo$, fredAction$, diffR$, res8$, m80Action$, commentAction$, boxAction$, cbx2Action$, messagePressAction$, fA_c$, forwardAction$, backAction$, prAction$, factorsAction_b$, fA$, factorsP$, fA_b$, factorsP_b$, clearprimes$, workerB$, workerC$, workerD$, workerE$, workerF$, workerI$, clearClick$, clearClick7$, workerG$, workerH$, clearAction$, factorsAction$, factorsAction7$, factorsClick7$, factors2Action$, factors3Action$, primeFib$, fibPressAction$, quadAction$, editAction$, editBAction$, testWAction$, testZAction$, testQAction$, deleteAction$, deleteAction2$, newTaskAction$, chatClick$, gameClickAction$, todoClick$, captionClickAction$, groupPressAction$, rollClickAction$, registerPressAction$, messages$, numClickAction$, opClickAction$) 



      return { DOM: calcStream$.map(() => { 
        return h('div.main', [

      h('div.image_3', [
      h('img.image_2', {props: {src: "logo.svg" }}  ),
      h('span', ' ' ),
      h('a', { props: { href: "https://cycle.js.org/", target: "_blank" } }, 'A Cycle.js application')    ]),
      h('div', {style: {textAlign:"center", fontWeight: "bold"}}, [
      h('div', {style: {fontSize: "27px", color: "#FFD700"}}, 'FUNCTIONAL PROGRAMMING'),
      h('br'),
      h('div', {style: {fontSize: "22px", fontStyle: "italic", color: "#07f7f7"}},'WITH CYCLE.JS' ) ]),
      h('br'),
      h('br'),
      h('div.content', [
      h('span', styleFunc(["#d3ead5","3%","18px",,,]), ' Composing functions like this: '),
      h('br'),
      h('br'),
      h('div', styleFunc(["#FFD700",,"21px",,,"center"]), 'bind(x)(functiona1)(function2) ... (functionN)'),
      h('br'),

      h('span', styleFunc(["#d3ead5","3%","18px",,,]), 'where '),
      h('pre', styleFunc(["#ffff00",,"18px",,,]), `        x can be any value,

        there are no restrictions on the functions\' argument types, 

        there are no restrictions on the functions\' return value types,

        any function in the chain can be asynchronous,

        functions have built-in access to all prior functions\' return values,

        functions have built-in access to all prior promises\' resolution values. `),
      h('span', styleFunc(["#d3ead5","3%","18px",,,]), ' looks very flexible and expressive, but you might wonder if there is a function named "bind" that cam efficiently and reliably facilitates this. Well, here is thw ' ),      
      h('a', {props: {href: "#bind" }},  'definition of bind'),
      h('span', ' used in "Demonstration 1". It consists of fifteen short lines of straightforward code. Testing confirms that it is as robust as it is easy for experienced JavaScript programmers to understand, tweak, and use. All they need only to make it reactive in whatever platform they are using. I show, in the '),
    h('a', {props: {href: "#defs" }},  'appendix'),
      h('span', ', one way of doing this using features of Cycle.js. ' ), 
      h('br'),
      h('br'),  
      h('span.tao', ' "bind" can easily be expanded to intercept runtime errors, check types, etc. For example, the factory function "Bind" creates versions of bind with unique namespaces. "Demonstration 2" shows ten functions created by "Bind" executing in parallel. The '),

        
      h('a', {props: {href: "#bind2" }},  "definition of Bind" ),
      h('span', ' is presented in the appendix.'),
    h('p', 'Functions that take multiple arguments should be curried, or else their arguments should be contained in single arrays or objects. This is a consequence of the fact that functions can only return single values, which are the arguments provided to the functions to their right in composit procedures. This does not restrict what linked functions can do. ' ),
    h('span.tao', ' There are library functions, for example Lodash/fp\'s '),
    h('a', {props: {href: "https://lodash.com/docs/4.17.4#flow"}}, "  .flow" ),
    h('span', ' and Ramda\'s '),
    h('a', {props: {href: "http://ramdajs.com/docs/#compose"}}, 'R.compose' ),
    h('span', ', that facilitate simple function composition; i.e., each function\'s argument is the preceding function\'s return value. bind() does this while also giving every linked function along a pipeline access to the return values of every function that preceded it.  '),
    h('br'),
    h('p', 'CAUTION - THE COMMENTARTY AFTER THE DEMONSTRATIONS STILL LAGS BEHIND RECENT REFACTORING.'),
    h('br'),
    ]),



    h('div#content2', [
    h('div', {style: {width: '47%', fontSize: '15px', float: 'left'}}, [ // ((************ LEFT PANEL
    h('br'),
    h('h3', styleFunc(["#8ffc95","3%",,,,]), ' Demonstration 1 - WebSocket and worker messaging.'),
    h('span', ' The first demonstration consists of bind(130) followed by a math computation, a function that sends the computation result to the WebSocketr server, a function that sends the WebSocket response to a web worker, and a function that uses the worker response to update the browser display and the prime number cache. '), 
    h('span#defsReturn', ' it4() and it6 are asynchronous functions that use the more efficient (less featured) callback handler "MonadItter" rather than promises but, as Demonstration 2 illustrates, Ecmascript 2015 promises work nicely with bind and its clones. MonadItter is discussed in several places further down this page. The definitions of the functions involved in Example 1 are shown, with comments, in the order in which they are encountered in the '),
    h('a', {props: {href: "#defs" }},  'appendix'),
    h('span', '.' ),
    h('br'),
    h('p', ' After the first run, caching of prime numbers causes the elapsed times of subsequent runs to be substantially shortened. On my computer, subsequent runs take around one-third the time of the first.'),    
    h('h3', styleFunc(["#8ffc95","3%",,,,]), ' Demonstration 2 - accessing prior values and avoiding clashes.'),
    h('p', ' If you enter an argument x for test5(x) (right column), the code shown in the right column will run. The delays are caused by ES6 promises. '),  
    h('span.tao', 'bind() and variations on its theme are produced by a factory named "Bind". For example, bind1 is created with the code '),
    h('span', orange, `var bind1 = Bind("bind1")  `), 
    h('span', '.'), 
    h('p', ' bind1 is a function. Bind.bind1 is an array not of the promises returned by each function, but rather it is an array of the values that are produced as each promise resolves. "Bind.bind1" is a permanent fixture in the virtual DOM description returned by main(). You can watch it and similar arrays as they grows by entering an integer in the right column.'),
    h('p', ' Demonstration 2 also shows that Bind effectively insulates the nine sequences from one another. They can\'t corrupt data or other running functions and nothing can touch then. '),  
      
  h('span.tao', orange, `bind1(e.target.value)(cubeP)` ),
  h('span', ' cubes user inpup. The first element of the Bind.bindo array is the user input. It is encapsulated in a promise that resolves after 1200 ms. When it resolves, its cube becomes the resolution value of the next promise and when it resolves, it becomes the argument of the next promise\'s then method and so on. '),


h('p', '     '),

h('h3', styleFunc(["#8ffc95","3%",,,,]), ' Demonstration 3 '),
h('span', ' This demonstation uses a closure to define separate namespaces, which is what Bind() does in the previous demonstrations. '),
h('a', {props: {href: '#pingmaker'}}, 'Click' ),
h('br'),
]),


h('div', {style: {width: '47%', fontSize: '15px', float: 'right'}}, [  // ********* RIGHT PANEL



h('h3', 'Demonstration 1' ),
h('span', ' Click below to run bind(130)(x=>x\*x\*x)(it4)(it6)(it7) twenty-five times. The left column is the call order.'),
h('br'),
h('br'),
h('span', styleFunc(["rgb(7, 247, 247)","12%","20px",,,,,]), 'bind(130)(x=>x\*x\*x)(it4)(it6)(it7)'),
h('br'),
h('br'),
h('button#factors_Q', {style: {fontSize: '15px'}}, 'bind(130)(x=>x\*x\*x)(it4)(it6)(it7)'),
h('span', "~~"),
h('button.clear_Q', {style: {fontSize: '15px', marginLeft: "0"}},  'clear results'),
h('br'),
h('br'),
h('div', m42_ ),
h('br'),
h('br'),



h('h3', 'Demonstration 2' ),

h('pre', green, `bind1(n+0)(cubeP)(() => idP(Bind.bind1[0] -
Bind.bind1[1]))(v=>addP(Bind.bind1[1])(v));
bind2(n+1)(cubeP)(() => idP(Bind.bind2[0] -
Bind.bind2[1]))(v=>addP(Bind.bind2[1])(v)); 
  . . .
bind9(n+8)(cubeP)(() => idP(Bind.bind9j[0] -
Bind.bind9[1]))(v=>addP(Bind.bind9[1])(v)); `), 



h('div#zero', bigRed, Bind.bind1.join(', ') ),
h('span', ' value of n --> '),
h('input#test5', {style: {height: "15px" }}, ),
h('br'),
h('div#z1', bigGreen, Bind.bind1.join(', ') ),
h('div#z2', bigGreen, Bind.bind2.join(', ') ),
h('div#z3', bigGreen, Bind.bind3.join(', ') ),
h('div#z4', bigGreen, Bind.bind4.join(', ') ),
h('div#z5', bigGreen, Bind.bind5.join(', ') ),
h('div#z6', bigGreen, Bind.bind6.join(', ') ),
h('div#z7', bigGreen, Bind.bind7.join(', ') ),
h('div#z8', bigGreen, Bind.bind8.join(', ') ),
h('div#z9', bigGreen, Bind.bind9.join(', ') ),

h('br'),
h('br'),
h('h3', 'Demonstration 3' ),
h('br'),
h('button.pingpong', {style: {fontSize: '17px'}}, 'start pingpong'),
pingDisplay, 
h('br'),
h('br'),
h('br'),
h('br'),
  m67_RESULT,
h('br'),
  m68_RESULT,
h('br'),
  m69_RESULT,
h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
]),
h('br'),
h('br'),
]),
h('br'),
h('br'),
h('h1', '_____________________________________________________________________' ),
h('br'),
h('div.content', [

h('br'),
h('br'),
h('br'),

h('span.tao', 'This project was created by and is actively maintained by me, David Schalk. It is a work in progress. The code repository is at '),
h('a', { props: { href: "https://github.com/dschalk/monads-in-JavaScript", target: "_blank" } }, 'monads-in-JavaScript'),
h('span', '. Please leave a comment in the '),
h('a', {props: {href: "#comments"}}, 'comments'),
h('span', ' section near the end of this page. You can email me at pyschalk@gmail.com. '),
h('p', ' '),
h('p', ' The demonstrations below include persistent, shared todo lists, text messaging, and a simulated dice game with a traversable history. All group members see your score decrease or increase as you navigate backwards and forwards. ' ),
h('p', ' You are automatically logged in with randomly generated numbers as your user name and password. Your group is the non-group "solo". '),
h('p', ' You can select a persistent name and password. These will make it possible for you to return later to delete or edit comments that you might have saved. '),
h('p#gameIntro', ' The demonstration section also has a text box where you can create or join groups. Changing groups resets your game score and goal tally to zeros. ' ),
      h('span.tao', ' The game code is fairly concise and intuitive. A quick walk-through is presented at.' ),
h('a', { props: { href: '#gameCode' } }, 'here'),
h('span', '. To see monadic functionality at work, I suggest that you take a look at the section captioned ' ),
h('a', { props: { href: '#asyncExplanation' } }, 'Asynchronous Processes'),
h('br'),
h('p', ' But it might be best to first proceed down the page and see the examples of Monad instances manipulating data. If you are trying to wrap you head around the concept of functional programming, playing with bind() and the monads in the browser console might lift you into the comfort zone you seek. ' ),
h('h3', 'The Game'),
h('p', 'People who are in the same group, other than the default non-group named "solo", share the same todo list, chat messages, and simulated dice game. '),
h('p', ' Data for the traversable game history accumulates until a player scores three goals and wins. The data array is then emptied and the application is ready to start accumulating a new history. '),
h('p', ' Your user name for trying out the game, todo list, and chat demonstrations and for leaving comments is a thirteen digit random number. In the game section and in the comments section near the bottom of this page, you can chose your own persistent user name and password. As mentioned above, Knowing your password facilitates revising or removing comments.' ),


]),
h('h1', 'Game, Todo List, Text Messages' ),
h('div#gameDiv2', {style: { display: mMgameDiv2.x }}, [
h('div#leftPanel', {style: { display: mMgameDiv2.x }}, [
h('p', 'RULES: If clicking two numbers and an operator (in any order) results in 20 or 18, the score increases by 1 or 3, respectively. If the score becomes 0 or is evenly divisible by 5, 5 points are added. A score of 25 results in one goal. That can only be achieved by arriving at a score of 20, which jumps the score to 25. Directly computing 25 results in a score of 30, and no goal. Each time ROLL is clicked, one point is deducted. Three goals wins the game. The code is in an appendix.'),
h('p', {style: {color:'red', fontSize:  '20px'}}, mMgoals2.x ),
buttonNode,
h('br'),
h('button#4.op', 'add'),
h('button#5.op', 'subtract'),
h('button#6.op', 'mult'),
h('button#7.op', 'div'),
h('button#8.op', 'concat'),
h('br'),
h('br'),
h('div#dice', { style: { display: mMdice.x } }, [
h('button#roll.tao1', 'ROLL'),
h('button#back.tao100', 'BACK'),
h('button#ahead.tao1', 'FORWARD'),
h('div.tao', `Selected numbers: ${gameMonad.fetch3().join(', ')}` ),
h('div.tao', `Operator: ${gameMonad.fetch2()} ` ),
h('div.tao', 'Index: ' + gameMonad.s[1] ),
h('button#clear', 'Clear selected numbers' ),
h('p', ' When traversing the game history, any time there are two selected numbers and a selected operator, a computation will be performed. You can clear the selected numbers and substitute others, and if you don\'t want a selected operator you can select another one.'),
h('span', 'Change group: '),
h('input#group', 'test' ),
h('p', mMsoloAlert.x ),
h('p', ' You can change your name by entering a comma-separated name and password below. The combination will go into a persistent file. You can use this combination in the future to edit or delete your saved comments. ' ),
h('span.red', mMregister.x ),
h('label', {style: {display: mMshowRegister.x }}, 'Register or log in here:'),
h('input.register', {style: {display: mMshowRegister.x }},),
])]),
h('div#rightanel', { style: { display: 'block', float: 'right' } }, [
h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
h('br'),
h('button#todoButton.cow', 'TOGGLE TODO_LIST'),
h('br'),
h('br'),
h('button#chat2.cow', 'TOGGLE CHAT'),
h('br'),
h('br'),
h('br'),
h('div', {style: {fontSize: "14 px"}}, 'Name: ' + pMname.x ),
h('div', {style: {fontSize: "14 px"}}, 'Group: ' + pMgroup.x ),
h('br'),
h('div', {style: {fontSize: "14 px"}}, gameData),
h('br'),
h('div#a100', ' _____________________________________ ' ),
h('p.italic', ' Join group "t" if you want to see some previously created tasks. ' ),
h('div',  { style: { display: showTodoDiv } }, [
  h('div', taskMonad.html ),
  h('div', 'Enter author, responsible person, and task here: '),
  h('input.newTask') ]),
h('br'),
h('span#alert', mMalert.x ),
h('br'),
h('span#alert2'),

h('br'),
h('div#chatDiv', { style: { display: showChatDiv } }, [
  h('div#messages', [
    h('span', 'Message: '),
    h('input.inputMessage'),
    h('div', messages  ),
    h('br'),
  ])
])
])
]),
h('br'),
h('br'),
h('h1', '________________________________________________' ),
h('div.content', [
h('a#bind', {props: {href: '#top'}}, 'Back to the top'),

h('p', 'CAUTION - SOME OF THE COMMENTARTY AFTER THIS POINT STILL LAGS BEHIND RECENT REFACTORING.'),
h('p', ' Here are the definitions of bind and four other similar functions: '),
h('pre', {style: {color: "lightBlue"}}, `function bind (x, ar=[]) {
  var ar = ar;
  if (ar.length === 0) ar = [x];
  if (x instanceof Promise) x.then(y => ar.push(y));
  else ar.push(x)
  return function debug8 (func) {
    if (func.name === "terminate") return ar;
    var p;
    if (x instanceof Promise) {
      p = x.then(v => func(v));
    }
    else p = func(x);
    return bind(p, ar);
  };
}; ` ),
h('a', {props: {href: '#content2'}}, 'Back to the preview demos'),
h('p', italicYellow, ' Sequences beginning with bind() reveal exactly what is happening while sometimes hiding confusing conglomerations of nested promises intermingled with other types of functions. In other words, they provide a way out of "Callback Hell". '),
h('p#cycle'),
h('a', { props: { href: '#top' } }, 'Back To The Top'),
h('br'),
h('a', {props: {href: '#cyclet'}}, 'Async Procedures' ),
h('p', ' "h(\'div\', m42_RESULT)" is a permanent fixture in the Snabbdom virtual DOM that is returned by main() and updated by calcStream$. When it7() executes, Snabbdom performs its diff and render routine, updating the browser window. '),
h('p', ' The asynchronous functions in Demonstration 1 use monadItter instances mMZ40 and mMZ41 instead of Promises. Here\'s the definition of MonadItter: '),
h('pre', `  var MonadItter = function MonadItter() {
    this.p = function () {};
    this.release = function () {
      return this.p.apply(this, arguments);
    };
    this.bnd = function (func) {
      return this.p = func;
    };
  }; `),
h('p', ' When obtaining data from unreliable sources, one should add error checking functionality or use promises. '),
h('h3', 'Reactivity In Cycle.js' ),
h('span.tao', ' Reactivity occurs naturally in the Cycle.js framework. Many developers find that Cycle.js has an unusually steep learning curve. It isn\'t so bad if you start with Andrew Staltz\' '),
h('a', { props: { href: "https://egghead.io/courses/cycle-js-fundamentals", target: "_blank" } }, ' Overview of Cycle.js.'),
h('span', ' Its elegance might take your breath away. ' ),
h('br' ),
h('br' ),
h('a.tao', {props: {href: 'https://github.com/snabbdom/snabbdom'}}, ' Snabbdom', ),
h('span', ', ' ),
h('a', {props: {href: 'http://x-stream.github.io/'}}, ' xstream,' ),
h('span', ' and most of the monads and functions presented here are available in browser developer tools consoles and scratch pads. A production site would load these as modules, but this site is for experimentation and learning so many supporting files are included as scripts in the index.html page. ' ),
h('br' ),
h('br'),
h('a', {props: {href: '#top'}}, 'Back to the top'),
h('br'),
h('br'),
      code.async1,
  h('br'),
  h('span', mMfibBlurb.x ),
  h('span', [
    h('svg', {attrs: {width: 50, height: 50}}, [
      h('circle', {attrs: {cx: 25, cy: 25, r: 20, stroke: 'purple', 'stroke-width': 4, fill: fill1Monad.x }})
    ])
  ]),

  h('span', mMprimeBlurb.x  ),
  h('span', [
    h('svg', {attrs: {width: 50, height: 50}}, [
      h('circle', {attrs: {cx: 25, cy: 25, r: 20, stroke: 'purple', 'stroke-width': 4, fill: fill2Monad.x }})
    ])
  ]),

  h('span', mMprimeFibBlurb.x ),
  h('span', [
    h('svg', {attrs: {width: 50, height: 50}}, [
      h('circle', {attrs: {cx: 25, cy: 25, r: 20, stroke: 'purple', 'stroke-width': 4, fill: fill3Monad.x }})
    ])
  ]),
  h('br'),

  h('p.red',  'The elapsed time is ' + mMelapsed.x + ' milliseconds.' ),
  h('input#fib92'),
  h('br'),
  h('br'),
  h('span#PF_7.red6', 'Fibonacci Numbers'),
  h('br'),
  h('span#PF_9.turk', mMres.x[0]  ),
  h('br'),
  h('span#PF_8.red6', 'Prime Fibonacci Numbers'),
  h('br'),
  h('span#primeFibs.turk', mMres.x[2]  ),
  h('br'),
  h('span#PF_21.red6', 'The largest generated prime number.'),
  h('br'),
  h('span#PF_22.turk', mMres.x[1]  ),
  h('br'),
  h('h3', ' Promises are not needed ' ),
  h('p', ' Asynchronous code can be handled without reliance on Ecmascript 2015 promises either explicitly or implicitly (e.g. using async/await). Cycle.js drivers eliminate any need to explicitly use functions from reactive library, but Xstrean is an integral component of Cycle.js. ' ),

  h('p', ' The second demonstration in this series decomposes numbers into its their prime factors. Testing with sequences of 9\'s, the first substantial lag occurs at 9,999,999 - unless a large array of prime numbers has already been generated in the previous demonstration or elsewhere. Here it is:' ),
  h('input#factors_1'),
  h('br'),
  h('br'),
  h('span', mMfactors.x ),
  h('span.tao3', mMfactors23.x ),

  h('p', ' Next, two comma-separated numbers are decomposed into arrays of their prime factors, and those arrays are used to compute their lowest common multiple (lcm). For example, the lcm of 6 and 9 is 18 because 3\*6 and 2\*9 are both 18. The lcm of the denominators of two fractions is useful in fraction arithmetic; specifically, addition and subtraction. On my desktop computer, two seven digit numbers resulted in a lag of a few seconds when prime numbers had not been previously generated. ' ),

  h('input#factors_5'),
  h('br'),
  h('br'),
  h('div.tao3', mMfactors7.x ),
  h('span', `The least common multiple of  ${mMfactors8.x[0]} and ${mMfactors8.x[1]} is ` ),
  h('span.tao3', `${mMfactors8.x[2]}` ),
  h('br'),
  h('span', `The largest common factor of ${mMfactors8.x[0]} and ${mMfactors8.x[1]} is ` ),
  h('span.tao3', `${mMfactors8.x[3]}` ),
  h('br'),
  h('div', `TEST: ${mMfactors8.x[0]} * ${mMfactors8.x[1]} === ${mMfactors8.x[2]} * ${mMfactors8.x[3]} `  ),
  h('span', 'RESULT: ' ),
  h('span.tao3', `${ (mMfactors8.x[0]  *  mMfactors8.x[1])  ===  (mMfactors8.x[2]  *  mMfactors8.x[3]) }` ),
    h('h3', ' The Easy Way ' ),
    h('p', ' This has been a demonstration of MonadState and MonadState transformers. If you really want the least common multiple or the largest common factor of two positive integers, there is no need to generate prime numbers. The next and final demonstration in this section does not use a web worker. The computations block the main thread, but only for a few microseconds.' ),
    h('br' ),
    h('input#factors800'),
    h('br' ),
    h('span', `The least common multiple of  ${mMfactors800.x[0]} and ${mMfactors800.x[1]} is ` ),
    h('span.tao3', `${mMfactors800.x[2]}` ),
    h('br'),
    h('span', `The largest common factor of ${mMfactors800.x[0]} and ${mMfactors800.x[1]} is ` ),
    h('span.tao3', `${mMfactors800.x[3]}` ),
    h('br'),
    h('div', `TEST: ${mMfactors800.x[0]} * ${mMfactors800.x[1]} === ${mMfactors800.x[2]} * ${mMfactors800.x[3]} `  ),
    h('span', 'RESULT: ' ),
    h('span.tao3', `${ (mMfactors800.x[0]  *  mMfactors800.x[1])  ===  (mMfactors800.x[2]  *  mMfactors800.x[3]) }` ),
  h('p', ' The code for the previous demonstrations is available at the Github repository, and will soon be available here in an appendix. primesMonad and the functions primarily involved in its transformation are shown below: ' ),
    code.primes,
    h('p', ' primesMonad state updates are generated in workerB.js and stored in the main thread. Users set new upper bounds on the size of the largest Fibonacci number in the series to be considered by entering a number in a browser input box. Here is the relevant code: ' ),
    code.primes3,
  h('p', ' The user\'s selected number along with the current state of primesMonad (primesMonad.s) gets posted to workerB, which gets functionality beyond its prototype from workerB.js, which orchestrates preparation of the return message that will be posted back to the main thread. workerB.js delegates the job to functions in script2.js by calling: ' ),
      code.primes4,
  h('p', ' execF prepares the Fibonacci series and sends its state, along with the state of primesMonad that it received from workerB.js, to fpTransformer. execP is called with the current state and the largest Fibonacci number that had been recently produced by execF as arguments. The updated state is an array with four elements, [new upper bound, new series, largest prime produced in the current browser session, largest series]. If the new result is larger than any previous one, the first and second elements of the state array are identical to the third and fourth. Otherwise, they are smaller. As is apparent in the following code, primesMonad is re-created in the main thread using the state array that was posted by workerB. ' ),
      code.primes2,

h('h3', 'Type Checking' ),
h('p', ' Type checking is useful for avoiding runtime errors and for optimization of user interfaces. For example, if a user enters the wrong type of data it is helpful to display a message explaining why nothing is happening. Not allowing defective user input to be transmitted to a WebSocket server prevents sockets from disconnecting. Some developers like to superimpose strong typing over JavaScript or write code in a strongly typed language that compiles to JavaScript. Others like to retain all of JavaScript\'s possibilities, checking types in only a few functions.  '),
h('br'),
h('a', {props: {href: '#top'}}, 'Back to the top'),
h('h3', 'More Examples'),
h('p', ' The result of every computation in a chain of synchronous functions is available to every computation that comes after it. This can be seen in the next example: ' ),
h('pre', {style: {fontSize: "12px"}}, `  bind(1)(addC(2))(cubeC)(addC(3))
  (multC(this.ar[1]))(multC(this.ar[1]))
  (addC(30))(multC(1/(ar[3]*2)))(terminate)
   // [1, 3, 27, 30, 90, 270, 300, 5] `),
h('p', ' Or, equivalently: ' ),
h('pre', orange, `  bind(1)(v=>v+2)(v=>v*v*v)(v=>v+3)
  (v=>v*ar[1])(v=>v*ar[1])(v=>v+30)
  (v=>v*1/(ar[3]*2))(terminate)
   // [1, 3, 27, 30, 90, 270, 300, 5] `),
h('p#cycletime', ' Or if you want just the final result '),
h('pre', `  bind(1)(v=>v+2)(v=>v*v*v)(v=>v+3)
  (v=>v*ar[1])(v=>v*ar[1])(v=>v+30)
  (v=>v*1/(ar[3]*2))(terminate).pop()  // 5] `),
h('h2', 'Alternative Monad Functionality' ),
h('p', ' Instances of Monad can also link by means of the method "bnd()". It, along with the method "ret()", were made available as follows: ' ),
h('pre',  {style: {color: "rgb(236, 242, 186)"   }}, `  Monad.prototype.bnd = function (func, ...args) {
    var m = func(this.x, ...args)
    var ID;
    if (m instanceof Monad) {
      ID = testPrefix(args, this.id);
      window[ID] = new Monad(m.x, ID);
      return window[ID];
    }
    else return m;
  };

  Monad.prototype.ret = function (a) {
    return window[this.id] = new Monad(a, this.id);
  };

  function testPrefix (x,y) {
     var t = y;  // y is the id of the monad calling testPrefix
     if (Array.isArray(x)) {
      x.map(v => {
        if (typeof v == 'string' && v.charAt() == '$') {
           t = v.slice(1);  // Remove "$"
        }
      })
    }
    return t;
  }; ` ),
h('p', ' This is less functional than using bind() in that it doesn\'t pass functions down the chain but instead passes objects with exposed methods. But it has appealing features. Look how values move along the chain until, at the end they combine to yield 42. Explicitly passing values from function to function along a chain is impossible with bind(); but with bind(), all chained functions share an array of return values and the resolution values of returned promises. '),
h('br#itter'),
h('pre', `  ret(2).bnd(v => add(v,1)
  .bnd(cube).bnd(p => add(p,3)
  .bnd(() => ret(p/3).bnd(add,3)
  .bnd(z => v*z+p-v*p+z))))  //  9 ` ),
     // ************** OOOOOOOOOOOOOO ********    BEGIN ASYNC


  // h('asyncExplanation', ' Asynchronous Processes ' ),

  h('a', { props: { href: '#gameIntro' } }, 'Back to the first set of demonstrations.'),


  h('h2', 'MonadItter'),
  h('p', ' As shown in the "Monads" section (above), the definition of MonadItter is: ' ),
  code.monadIt,
  h('p', ' MonadItter instances don\'t link to one another. They exist to facilitate the work of instances of Monad, MonadState, etc. Here\'s how they work: '),
  h('p', 'For any instance of MonadItter, say "it", "it.bnd(func)" causes it.p === func. Calling the method "it.release(...args)" causes p(...args) to run, possibly with arguments supplied by the caller. '),
  h('p',' MonadItter instances control the routing of incoming WebSocket messages. In one of the demonstrations below, they behave much like ES2015 iterators.'),
  h('h3', ' A Basic Itterator '),
  h('p', 'The following example illustrates the use of release() with an argument. It also shows a lambda expressions being provided as an argument for the method mMZ1.bnd() (thereby becoming the value of mMZ1.p), and then mMZ1.release providing an arguments for the function mMZ1.p. The code is shown beneith the following two buttons. '),
  h('button#testZ', 'mMZ33.release(1)'),
  h('p', mMt33.x ),
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
  h('p#quad4.red2', mMquad4.x  ),
  h('p#quad5.red2', mMquad5.x  ),
  h('p#quad6.red2', mMquad6.x  ),
  h('p', 'Run mMZ3.release(v) three times for three numbers. The numbers are a, b, and c in ax*x + b*x + c = 0. Remember to press <ENTER> after each number. '),
  h('input#quad'),
  h('p', 'Here is the code:'),
  code.quad,
  h('p', ' fmap (above) facilitated using qS4 in a monadic sequence. qS4 returns an array, not an instance of Monad, but fmap lifts qS4 into the monadic sequence. '),
  h('p', ' The function solve() is recursive. It invokes itself after release() executes three times. The expression "solve()" resets solve to the top, where mMZ3.p becomes a function containing two nested occurrences of mMZ3.bnd. After mMZ3.release() executes, mMZ3.p becomes the function that is the argument to the next occurrence of mMZ3.bnd. That function contains yet another occurrence of mMZ3.bnd. MonadItter is syntactic sugar for nested callbacks. ' ),





    h('h2', ' MonadEr - An Error-Catching Monad ' ),
    h('p', ' Instances of MonadEr function much the same as instances of Monad, but when an instance of MonadEr encounters an error, it ceases to perform any further computations. Instead, it passes through every subsequent stage of a sequence of MonadEr expressions, reporting where it is and repeating the error message. It will continue to do this until it is re-instantiated or until its bnd() method runs on the function clean(). ' ),
    h('p', 'Functions used as arguments to the MonadEr bnd() method can be placed in quotation marks to prevent the browser engine from throwing reference errors. Arguments can be protected in the same manner. Using MonadEr can prevent the silent proliferation of NaN results in math computations, and can prevent browser crashes due to attempts to evaluate undefined variables. ' ),
    h('p.tao1b', ' The monad laws hold for MonadEr instances. The following relationships were verified in the Chrome console: ' ),
    h('pre', `    ret3(0,'t',[])  // t is now an instance of MonadEr with t.x = 0 and t.e = [].

      t.ret(3).bnd(cube3).x === cube(3).x
      ret3(3).bnd(cube3).x === cube3(3).x

      t.bnd(t.ret) === t
      t.bnd(ret) === t

      t.ret(0).bnd(add3, 3).bnd(cube3).x ===
      t.ret(0).bnd(v => add3(v,3).bnd(cube3)).x  ` ),

  h('h3', 'Feedback From the Error Monad' ),
  h('span#comments', ),
  h('img.image', {props: {src: "error2.png"}}  ),
  h('div#comment'),
    h('h2', {style: {color: "red" }}, 'Comments' ),

  h('a', {props: {href: '#top'}}, 'Back to the top'),
    h('div#com2',  { style: { display: abcde} }, ),
    h('p', ' When this page loads in the browser, a user name is automatically generated in order to establish a unique WebSocket connection. This makes it possible to exchange text messages with other group members, play the game, and work on a shared todo list. If you want to leave a comment, you need to log in with a user name and a password of your choice. Each can be a single character or you could use a hard-to-hack combination of alphabet letter, numbers, and special characters. The main requirement is that there be only one comma, and that it be placed between the name and the password. ' ),
    h('p', 'The server will keep your user name and password in a text file. If you use your saved user name and password sometime in the future, you will be able to edit or delete any comments you previously made. '),
    h('p', ' If you enter a user name that has not been recorded, you will be logged in as that user. The user name and password will be saved. This means that you do not need to first register and then log in. This is an all-in-one process. If you enter a recognized user name but the password does not match the password in the record, you will be asked to try again. ' ),
    h('br'),
    h('h3', 'Register' ),
    h('span.red', mMregister.x ),
    h('input.register', {style: {display: mMshowRegister.x }} ),
    h('br' ),
    h('br' ),
    h('h3', 'COMMENTS' ),
    h('textarea#comment', '' ),
    h('br' ),
    h('br' ),
    h('div', commentMonad.html ),
    h('p', ' When this website loads, it receives from the server a string containing all of the comments. The string is saved in commentMonad.s[0]. The string is transformed into an array of comments which is saved in commentMonad.s]1]. '),
    h('p', ' When a comment is created, modified, or deleted, a WebSocket message goes to the server which performs some of its own housekeeping and broadcasts a message to all online browsers. It is received in messages$ and forwarded comments.js. ' ),
  h('p', ' The functions in the comments.js file mutate commentsMonad. There is no reason to create fresh instances of commentMonad, other than out of devout devotion to the doctrine of non-mutation. How silly that would be! Nothing touches commentMonad outside of the comments.js file; there is no danger. ' ),
  h('p', ' commentMonad stands in stark contrast to the gameMonad, which is never mutated although it sees much action during game play. Here he entire Comments.js file: ' ),
  h('pre', `function showFunc (name, name2)
{return name == name2 ? 'inline-block' : 'none'}

var MonadState3 = function MonadState3(g, state) {
  this.id = g;
  this.s = state;
  this.bnd = (func, ...args) => func(this.s, ...args);
  this.ret = function (a) {
    return window[this.id] = new MonadState(this.id, a);
  };
}  bind2(n)(cubeP)(addP(3))(a=>a+ar[0]+ar[1]-18)(multP(1/3))
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
    console.log('In arr.map - - - - - - - a is ', a );
    var x = a.split("<o>");
    if (x.length != 2) x = ['malfunction', '8888']
    console.log('In arr.map o o o o o o o x is ', x );
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
} ` ),
h('div#curryDef'),
h('br'),
h('pre', `function curry(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

}

function curryReverse(func) {

  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args.reverse());
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };

} `),

h('a', {props: {href: '#top'}}, 'Back to the top'),
  h('p', ' *************************************************************************************** ' ),
  h('h3', 'Haskell Time'),
  h('p', ' This page is for front end developers, but in case anyone is interested, here are the server functions responsible for deleting or amending a comment: ' ),
  h('pre', `    removeOne _ []                 = []
  removeOne x (y:ys) | x == y    = ys
                     | otherwise = y : removeOne x ys

  changeOne :: Text -> Text -> [Text] -> [Text]
  changeOne _ _ []                 = []
  changeOne z x (y:ys) | x == y    = z : ys
                       | otherwise = y : changeOne z x ys ` ),

  h('a', ' Every message sent to the server is a comma separated string beginning with a prefix, then a group, and then a name. Comma separated items after that are named extra and extra2. ' ),
  h('p', ' The code belw is responsible for dealing with comments. As in the browser, WebSocket messages are dealt with according to their six character prefixes. extra and extra2 are the only pertinent data since comments go to all groups ' ),
  h('pre', `else if "GZ#$42" \`T.isPrefixOf\` msg
                  -- FETCH AND BROADCAST ALL COMMENTS ON BROWSER LOAD
   then
       do
           st <- atomically $ readTVar state
           broadcast ("GZ#$42," \`mappend\` group \`mappend\` ","
             \`mappend\` sender \`mappend\` "," \`mappend\` comments ) st

else if "GN#$42" \`T.isPrefixOf\` msg
                  -- RECEIVE A NEW COMMENT, UPDATE THE FILE AND THE TVAR,
                  --  AND BROADCAST THE NEW COMMENT
   then
       do
           old <- atomically $ readTVar comms
           lk <- atomically L.new
           let c = old \`mappend\` (T.replace (at \`mappend\` at) at extra)
           let new = T.replace (at \`mappend\` at) at c -- cleanup
           L.with lk $ TIO.writeFile xcomments new -- lock on writing
           atomically $ writeTVar comms new
           st <- atomically $ readTVar state
           broadcast ("GN#$42," \`mappend\` group \`mappend\` ","
               \`mappend\` sender \`mappend\` "," \`mappend\` extra) st

 else if "GD#$42" \`T.isPrefixOf\` msg      -- DELETE A COMMENT
    then
        do
            a <- TIO.readFile xcomments
            lk <- atomically L.new
            let b = T.splitOn at a
            let c = removeOne extra2 b
            let d = T.intercalate at c
            L.with lk $ TIO.writeFile xcomments d
            atomically $ writeTVar comms d
            st <- atomically $ readTVar state
            broadcast ("GD#$42," \`mappend\` group \`mappend\` ","
              \`mappend\` sender \`mappend\` "," \`mappend\` extra) st

 else if "GE#$42" \`T.isPrefixOf\` msg      -- EDIT A COMMENT
    then
        do
            a <- TIO.readFile xcomments
            lk <- atomically L.new
            let b = T.splitOn at a
            let c = changeOne extra3 extra2 b
            let txt = T.intercalate at c
            L.with lk $ TIO.writeFile xcomments txt
            atomically $ writeTVar comms txt
            st <- atomically $ readTVar state
            broadcast ("GE#$42," \`mappend\` group \`mappend\` com
              \`mappend\` sender \`mappend\` com \`mappend\` extra \`mappend\` com
                 \`mappend\` extra3) st   ` ),
  h('a', { props: { href: '#top' } }, 'Back To The Top'),
  h('br'),

  h('div#reactivity', ),
  h('br'),
  h('a', {props: {href: "#reactivity2"}}, 'Back to the pingpong demo' ),

  h('h3', 'Reactivity in Cycle.js'),

  h('p', ' The stream incF$ and the driver pingpongDriver() (both defined below) are essential components of the pingpong demonstration. '),

  h('pre', blue, `  var incF$ = n => xs.of(n);

    function pingpongDriver () {
      return xs.create({
        start: listener => {
          incF$ = k => listener.next(k)
        },
        stop: () => {}
      })
    };  `),
  h('p', ' Whenever the stream incF$() is called, the stream returned by pingpongDriver is augmented and that causes main() to return an object whose only element is a map from the stream calcStream$ to a virtual DOM node with many children. calcStream$ is produced by merging 48 streams together including ping$ resulting from ping(n) where "n" is the number supplied by pingpongDriver (a/k/a "sources.PP"). The first two lines of main()\'s return value are shown below. ' ),
  h('pre', `    return { DOM: calcStream$.map(() => {
      return h('div.main', [  ` ),


  h('p', ' merged into it. Each time main returns, Snabbdom\'s diff and render routine executes inside of run(sources,main). run(sources,main) calls main() and furnishes it with the listeners provided by the drivers. New events cause the cycle to repeat. ' ),
  h('p', ' ping(-5)([0,0]) is called when the pingpong button is clicked. Here\'s the relevant code:'),
  h('pre', `  var pingpong$ = sources.DOM
      .select(\'buttonr#ingpong\').events(\'click\').map(() => ping(0)([0,0]));

    var ppR = {style: {color: 'red',
      marginLeft: '5%', fontSize: "26"}};
    var ppY = {style: {color: 'yellow',
      marginLeft: '42%', fontSize: "26"}};
    var ppRY = {style: {color: 'yellow',
      marginLeft: '5%', fontSize: "26"}};
    var ppYR = {style: {color: 'red',
      marginLeft: '42%', fontSize: "26"}};

    var ppStyle = false;


    var ping = n => ar => {
      console.log("Piles of cow shit");
      console.log("Piles of cow shit");
      var k = Math.floor(Math.random() * 5)+1;
      if(ar[0] > 10 || ar[1] > 10) {
        diffRender();
        return;
      }
      setTimeout(() => {
        if (n <= k) {
          ppStyle = !ppStyle;
          incF$(n);
          ping(n+1)(ar);
        }
        else if (n % 2 === 0) {
          ar[0]+=1;
          m67_RESULT = h('pre', ppYR, \`     SCORE: ping  \${ar[0]} pong: \${ar[1]}  \` )W
          ping(0)(ar);
        }
        else {
          ar[1]+=1
          m67_RESULT = h('pre', ppY, \`     SCORE: ping  \${ar[0]} pong: \${ar[1]}  \` );
          ping(0)(ar);
        }
      }, 500 )
    }  ` ),
h('p', ' The function diffRender() forces Snabbdom to perform one last diff and render. It is defined as follows: ' ),
  h('pre', `  const diffRender = () => document.getElementById("testQ").click();`),
  h('p', ' The button "testQ" cubes the number 2 in the MonadItter demonstration. It was chosen because it does not significantly affect anything aside from forcing Snabbdom to update the DOM. '),

  h('p', ' The stream incF$ and the driver pingpongDrirun(main, sources) are the crucial Cycle.js application functions. sources contains the drivers. sources.PP = pingpongDriver is one of the drivers consumed by run() and made available in main() so information can be sent back to run. Round and round it goes. Here is the definition of ping$. ' ),

  h('span.tao', ' The monads do not depend on Cycle.js. They can be used in React, Node, and all other browser-based applications. I happen to prefer Cycle.js working in conjunction with a Haskell WebSocket server. ' ),
  h('br'),
  h('h2', 'Appendix A - The Game Code' ),
  h('pre', `function MonadState(g, state) {
  this.id = g;
  this.s = state;
};  ` ),
  h('a', {props: {href: '#gameIntro'}}, 'Back to the first group of demonstrations.'),
  h('p'),
  h('pre', `MonadState.prototype.run = function ([
  score = this.s[0][this.s[1]][0],
  goals = this.s[0][this.s[1]][1],
  operator = this.s[0][this.s[1]][2],
  picked = this.s[0][this.s[1]][3].slice(),
  display = this.s[0][this.s[1]][4].slice()
  playerName = this.s[0][this.s[1]][5] ? this.s[0][this.s[1]][5].slice() : "nobody",
  playerGroup = this.s[0][this.s[1]][6] ? this.s[0][this.s[1]][6].slice() : "solo",
]) {
  this.s[1] += 1;
  var newState = this.s.slice();
  newState[0].splice(this.s[1], 0, [score, goals, operator, picked, display,playerName,playerGroup])
   console.log("[score, goals, operator, picked, display]",
     [score, goals, operator, picked, display,playerName,playerGroup]);
  this.s = newState;
  buttonNode = bNode(display);
  return window['gameMonad'] = new MonadState('gameMonad', newState);
}

var gameMonad = new MonadState('gameMonad', [[[0,0,0,[],[1,2,3,4]],
      [0,0,0,[],[0,0,0,0]]],1 ]);  ` ),
  h('p', ' Here is the code that controls what happens when a player clicks a number or an operator: '),
  h('pre', `  var numClickAction$ = numClick$.map(e => {
    if (gameMonad.fetch3().length < 2)  {
      var a = gameMonad.fetch3();
      var b = gameMonad.fetch4();
      a.push(b.splice(e.target.id, 1)[0]);
      gameMonad.run([,,,a,b,,]);
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
    }
    else {
      gameMonad.run([,,e.target.innerHTML,,,,]);
    }
  });  `),
  h('p', ' Notice the empty spaces in the arguments to gameMonad.run(). gameMonad.run()\'s argument is an array to facilitate calling it with default values. In numClickAction$ we are not changing the score, goals, or operator. The default values of these parameters are their current values. In opClickAction$, we are changing only one thing, the operator. Everything else stays as it is. ' ),
  h('p', ' When two numbers and an operator have been selected, control passes to updateCalc(). Here\'s the code: ' ),


  h('pre', `function updateCalc(ar, op) {
  var result = calc(ar[0], op, ar[1]);ar
  if (result === 18 || result === 20) {
    score(result);
  }
  else {
    var a = gameMonad.fetch4().slice();
    a.push(result);
    gameMonad.run([,,0,[],a,,]);  // Display the result and
                                // reset the operator and selected values.
  }
};

function score(result) {
    var sc = parseInt(gameMonad.fetch0());
    var sco = result === 18 ? sc + 3 : sc + 1;
    var scor = sco % 5 === 0 ? sco + 5 : sco;
    var goals = gameMonad.fetch1();
    if (scor === 25 && gameMonad.fetch1() === "2") {  // The player wins.
        mMindex.ret(0);
        gameMonad = new MonadState('gameMonad',
           [[[0,0,0,[],[0,0,0,0]],[0,0,0,[][0,0,0,0]]],0]);
        socket.send(\`CE#$42,${pMgroup.x},${pMname.x}\`);
        // Ask the server to announce the winner to the entire group
        newRoll(0,0);
    }
    else if (scor === 25) {
      newRoll(0, parseInt(goals,10) + 1);
    }
    else newRoll(scor, goals);   // No increase in the number of goals.
};   ` ),
 h('span.tao', ' Additional code is available at' ),
 h('a', { props: { href: "https://github.com/dschalk/monads-in-JavaScript",
   target: "_blank" } }, 'monads-in-JavaScript.'),
  h('p', '.'),
  h('p'),

  h('h3', 'Appendix B - Curried Functions Used In Several Demonstrations'),

  h('pre#wait', ` function square (v) {
    return ret(v*v)
  };

  function cube (v, id) {
    return ret(v*v*v, id);
  };

  function add (a, b, id) {
    return ret((parseInt(a,10) + parseInt(b,10)),id);
  };

  const divCinverse = a => b => ret(e/b);
  const divC = a => b => ret(b/a);
  const addC = a => b => ret(a+b);
  const cubeC = v => ret(v*v*v);
  const multC = a => b => ret(a*b);
  const doubleC = a => ret(a+a);
  const squareC = a => ret(a*a);
  const sqrtC = a => ret(Math.sqrt(a));

function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
} h('a#it4', {props: {href: '#top'}}, 'Back to the top'),

async function cubeP (x) {
  await wait(2000)
  return ret(x*x*x);
} 

const addP = x => async y => {
  await wait(2000)
  return ret(x + y);
}

async function squareP (x) {
  await wait(2000)
  return ret(x*x);
}

const divPinverse = a => async b => {
  await wait (2000)
  return ret(a/b);
}

const divP = a => async b => {
  await wait (2000)
  return ret(b/a);
}

const sqrtP = async a => {
  await wait (2000)
  return ret(Math.sqrt(a));
}

const doubleP = async a => {
  await wait (2000)
  return ret(a+a);
}

const multP = x => async y => {
  await wait(2000)
  return ret(x * y);
}

    `),

h('p'),
h('h3', 'Appendix C - Further Reading ' ),
h('p', ' Here is a good resource: '),
h('a',   {props: {href: "https://github.com/getify/You-Dont-Know-JS", target: "_blank" }},  'You Don\'t Know Javascript by Kyle Simpson'),
h('span', ' You can support the open-source digital version of this book with Patreon at the above address or purchase hard copies from O\Reily, Amazon, etc. ' ),
h('a',   {props: {href: "https://github.com/getify/You-Dont-Know-JS", target: "_blank" }},  'You Don\'t Know JavaScript'),
h('span', ' is the thinking developer\'s answer to ' ),
h('a',   {props: {href: "http://shop.oreilly.com/product/9780596517748.do", target: "_blank" }},  ' "JavaScript: The Good Parts" by Douglas Crockford ' ),
h('p', ' That\'s not to say that Crockford isn\'t a thinking developer. He is a very bright guy. It\'s just that the so called "good parts" are a dummed down subset of JavaScript that help keep people out of trouble when they don\'t feel inclined understand the JavaScript programming language. ' ),
h('span#cyclet', ', which has long been revered as a "must read" JavaScript book. Kyle Simpson recommends learning to use potentially dangerous code intelligently while Douglas Crockford advocates never using it at all. I think the phrase "eval is evil" stems from Crockford\'s book. I find eval() to be very useful from time to time. Kyle Simpson teaches programmers how to safely tap the full potential of JavaScript. ' ),
h('p#defs'),
h('br'),
h('a', {props: {href: '#content2' }}, 'Return to Demonstration 1' ),

  
  
h('pre', h3Simulation, 'Asynchronous Processes - A deep dive into Demonstration 1' ),

h('p', ' The code below shows how information flows through the functions involved in Demonstration 1. Function definitions are shown when previously undefined functions are encountered. The process begins with the click of a button and ends with execution of it7(), but before showing "factorsClick7$", I want to repeat the definition of "bind". ' ),
h('pre', `function bind (x, ar=[]) {
  var ar = ar;
  if (ar.length === 0) ar = [x];
  if (x instanceof Promise) x.then(y => ar.push(y));
  else ar.push(x)
  return function debug8 (func) {
    if (func.name === "terminate") return ar;
    var p;
    if (x instanceof Promise) {
      p = x.then(v => func(v));
    }
    else p = func(x);
    return bind(p, ar);
  };
};

var factorsClick7$ = sources.DOM
  .select('button#factors_Q').events('click');

var factorsAction7$ = factorsClick7$.map( e => {
  m42_ = [];
  console.log('In factorsAction7$ - - <W>W<>W<>W<><W>WWW<W><W>WW><><><><><>!!! e is',e); 

  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);

  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);

  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);

  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
  bind(130)(x=>x*x*x)(it4)(it6)(it7);
}); ` ),
    
h('p', 'it4() sends the number 125,000 to the server which responds by sending back a pseudo-random number between 1 and 250,000. '),

h('pre', `var it4 = x => {
  if (socket.readyState === 1) socket
  .send(\`BC#$42,${pMgroup.x},${pMname.x},${x}\`);
} `),

h('p', 'WS is a driver defined as follows: ' ),

h('pre', `function createWebSocket(path) {
    var host = window.location.hostname;
    if (host === '')
        host = 'localhost';
    var uri = 'ws://' + host + ':3055' + path;
    var Socket = "MozWebSocket" in window ? MozWebSocket : WebSocket;

    return new Socket(uri);
}

var socket = createWebSocket('/');

function websocketsDriver() {
  return xs.create({
    start: listener => { socket.onmessage = msg => listener.next(msg)}, is augmented each time a promise resolves. 
    stop: () => { socket.close() }
  });
}; ` ),

h('p', ' The prefix "xs" designates the name space for the xstream library. ' ),

h('pre', `function main(sources) {
  const messages$ = sources.WS.map( e => {
    var v = e.data.split(',')  // The string arriving from the server is made into an array.
    ...
    ret(v[0]  // "ret" is defined below:
              // v[0] is the prefix of each message from the server.
    ...
    .bnd(next, 'BC#$42', mMZ28)  // Executes when a "BC$#42"-prefixed message arrives from the server

Instances of Monad2 encapsulate values. Here is the definition:

function Monad2(z = 0) {
  this.x = z;
};

Monad2.prototype.ret = a => new Monad2(a);

Monad2.prototype.bnd = function (func, ...args) {
  return func(this.x, ...args)
}

function ret (val = 0) {
  return new Monad2(val);
} ` ),

h('p', ' Back to messages$: ' ),

h('pre', `ret(v[0])
...
  .bnd(next, 'BC#$42', mMZ28)  
 ) ` ),

h('p', ' When anything prefixed by mMZ28 comes in from the server, mMZ28 isreleased, releasing mMZ40 with the random number. ' ),

h('pre', `mMZ28.bnd( () => {
  mMZ40.release(v[3]);
}); ` ),

h('p', ' The cached prime numbers and the random number obtained from the serverare then sent to workerH. ' ),

h('pre', `var it6 = x => {
  mMZ40.bnd(x => workerH.postMessage([primesMonad.s[3], x])); ` ),

h('p', 'Here\'s the definition of workerH.js: ' ),

h('pre', `*****************************************************
var g = prState => x => {
  var primes = execP(prState, x);

  var factors = pfactors(primes,x).x;
  var z;
  if (factors.length > 1) {
    z = "The prime factors of " + x + " are " + factors.join(', ')
  }
  else z = x + " is a prime number"
  return [z, primes[3]];
}
  
onmessage = function(m) {
  var max = m.data[0][m.data[0].length - 1];
  primesState = [max, m.data[0], max, m.data[0]];
  importScripts('script2.js');
  postMessage(g(primesState)(m.data[1] + 1));
}
*****************************************************

function pfactors (primeState, n) {
  var ar = [];
  while (n != 1) {
    primeState[3].map(p => {
      if (n/p === Math.floor(n/p)) {
        ar.push(p);
        n = n/p;
      };
    })
  }
  return ret(ar);
}

function ret(v, id = 'generic') {
  self[id] = new Monad(v, id);
  return self[id];
}

var mMfactors = new Monad('', 'mMfactors');

function MonadState(g, state) {
  this.id = g;
  this.s = state;
  this.bnd = (func, ...args) => func(this.s, ...args);  
};

function isPrime(n) {
   if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false;
   var m = Math.sqrt(n);
   for (var i=2;i<=m;i++) if (n%i==0) return false;
   return true;
}

function *gen(x) {
  var x = x
  while(true) {
    if(isPrime(x)) yield x;
    x++;
  }
}

var primesIt = gen(primesMonad.s[2]+1);

function execP (state, num) {
  var x = state[2];
  var primes = state[3].slice();
  if (x < num) {
    primesMonad = new MonadState('primesMonad', state);
    primesIt = gen(primesMonad.s[2]+1);
    while (x < num) {
      primes.push(primesIt.next().value);
      x = primes[primes.length - 1];
    }
    return [x, primes, x, primes]
  }
  else {
    var number = primes.indexOf(num) + 1;
    var newP = primes.slice(number);
    return [newP[newP.length - 1], newP, x, primes];
  } is augmented each time a promise resolves. 
}; ` ),

h('p', ' workerH$ intercepts the message from worderH.js as follows: ' ),

h('pre', ` workerH$ = sources.WWH.map(m => mMZ52.release(m)); ` ),

h('p', ' mMZ52.bnd is inside of it7. ' ),

h('pre', `it7 = () => mMZ52.bnd(m => {
  callOrder = callOrder > 24 ? 1 : callOrder + 1;
  if (callOrder === 1) start77 = Date.now(); 
  m42_.push(callOrder + "  ");
  m42_.push(m.data[0])
  m42_.push(h('br'));
  if (callOrder === 25) m42_.push('Elapsed time: ' + 
    (Date.now() - start77) + " ms");
  var w = m.data[1][m.data[1].length - 1];
  var primesState = [w, m.data[1], w, m.data[1]];
  if (m.data[1].length > primesMonad.s[3].length) {
    window['primesMonad'] = new MonadState('primesMonad', primesState );
  }
}); ` ),

h('p', ' "mMZ52.bnd(m => { ... " could have been placed anywhere. Putting it at the end of "bind(50)(x => x*x*x)(it4)(it6)(it7)"illustrates the flexibility of bind for the purposes of Example 1, but in production it would also make Demonstration 1 easier to understand by people responsible for maintaining the code. ' ),


h('h3', 'MonadItter'),
h('p', ' The MonadItter section of the page has a detailed discussion and live demonstrations. This is the definition: '),
h('pre', `  var MonadItter = function MonadItter() {
  this.p = function () {};
  this.release = function () {
    return this.p.apply(this, arguments);
  };
  this.bnd = function (func) {
    return this.p = func;
  };
}; `),
h('h3', 'Promises'),

h('p', ' As the definition of MonadItter shows, bnd() saves functions until release() causes them to execute. MonadItter instances are usually used on this webpage where promises, generators, and async/await could also do the job. '),
h('p', 'Here are the Promises-based functions prm4() and prm6() that can be substituted for it4() and it6() in the expression bind(130)(cubeC)(it4)(it6): '),
h('pre', `  const prm4 = x => {
  if (socket.readyState === 1) socket.send(\'BB#\$42,pMgroup,pMname,' + x);
  return new Promise( (resolve, reject) => {
     mMZ37.bnd((y) => resolve(ret(y)))
  })
}

const prm6 = x => {
  workerG.postMessage([primesMonad.s, [x]]);
  return "Done"
} `),

h('p', ' Error handling is easy when using MonadItter instances, and is entirely optional. '), 
h('p', ' After "bind(130)(cubeC)(it4)(it6)(it7) runs, the prime decomposition of the number it recieved arrives from workerG. The workerGDriver (sources.WWG) detects the message and adds it to the workerG$ stream. Here is the definition of workerGDriver:  ' ),
h('pre', `  function workerGDriver () {
  return xs.create({
    start: listener => { workerG.onmessage = msg => listener.next(msg)},
    stop: () => { workerG.terminate() }
  });
}; `),
h('p', ' Clicking the "decompose fifteen random numbers" button causes factorsRecursion(0) to execute. Here\'s the code: '),
h('pre', blue,  `  const factorsRecursion = n => bind(130)(cubeC)(it4)
  (it6)(() => { if (n < 15) factorsRecursion(n+1)}); `),
h('p', 'result778(m.data) is called each time a message from workerG arrives. The definition of result778 is:   ' ),
h('pre', blue, `var result778 = x => h('div', [
    m778_RESULT,
    h('br'),
    h('span', bigBlue, x[3] ),
    h('span', bigGreen, x[0] ),
    h('span', bigBlue, x[4] ),
    h('span', bigRed, x[5] ),
]); `),
h('p', ' The stream that listens for workerG messages adds to the vnode m778_RESULT as follows: '),
h('pre', `const workerG$ = sources.WWG.map(m => {
    m778_RESULT = result778(m.data);
    primesMonad = new MonadState('primesMonad', m.data[2]);
    }); `),
  h('pre', bigGreen, `const factorsRecursion = n => bind(130)(cubeC)(it4)
  (it6)(pause)(() => { if (n < 15) factorsRecursion(n+1)}); `),

h('pre', bigGold, `  var test5 = x => {
  var n = toInt(x);
  Bind.bind1 = []; 
  Bind.bind2 = []; 
  Bind.bind3 = []; 
  
  bind1(n+0)(cubeP)(() => idP(Bind.bind1[0] -
  Bind.bind1[1]))(v=>addP(Bind.bind1[1])(v));

  bind2(n+1)(cubeP)(() => idP(Bind.bind2[0] -
  Bind.bind2[1]))(v=>addP(Bind.bind2[1])(v)); 

  bind3(n+2)(cubeP)(() => idP(Bind.bind3[0] -
  Bind.bind3[1]))(v=>addP(Bind.bind3[1])(v));} `), 
h('p#bind2', ''),
h('a', {props: {href: '#top'}}, 'Back to the top'),

h('pre',  `function Bind (str) {
  Bind[str] = [];
  return function bindo ( x ) {
    if (x instanceof Promise) x.then(y => {
      Bind[str].push(y);
      diffRender();
      console.log(Bind[str]);
    })
    else {
      Bind[str].push(x)
      diffRender();
    }
    console.log(Bind[str]);
    return function debug8 (func) {
      var p;
      if (func.name === "terminate") return Bind[str];
      if (x instanceof Promise) {
        p = x.then(v => func(v));
      }
      else p = func(x);
      return bindo(p);
    };
  };
};

var bind$ = n => xs.of(n);

function bindDriver () {
  return xs.create({
    start: listener => { bind$ = a => listener.next(a) },
    stop: () => {}
  })
};

var bind1 = Bind("bind1");
var bind2 = Bind("bind2");
var bind3 = Bind("bind3");
var bind4 = Bind("bind4");
var bind5 = Bind("bind5");
var bind6 = Bind("bind6");
var bind7 = Bind("bind7");
var bind8 = Bind("bind8");
var bind9 = Bind("bind9"); ` ),







h('a', {props: {href: '#top'}}, 'Back to the top'),
('p', ' This is the code involved in the pingpong demonstration. PingpongMaker\'s argument creates a namespace. The demonstration features three such namespaces. It verifies that each game proceeds with its own state, oblivious of the states of the other two games in progress. Bind uses its closure to achieve a similar effect. ' ),
h('pre',  `var pingD = a => b => c => h('div', [
  h('pre', a, \` ping        ---> \`), 
  h('pre', b, \`                 <---        pong \`), 
  h('pre',  \`          -- SCORE: ping: \` + c[0]  + \` pong: \` + c[1]  ),
]);

var PingpongMaker = (name) => {
  var a = _A1;
  var b = _A3;
  var c = [0,0];
  var n = 0;
  var bool = true;
  var k = Math.floor(Math.random() * 7)+1;
  return function train () {
    if (c[0] > 10 || c[1] > 10) return;
    var ms = 400;
    console.log('a.style.color, b.style.color, c', a.style.display, b.style.display, c);
    if (a === _A3) {a = _A1; b = _A3}
    else if (a === _A1) {a = _A3; b = _A2};
    if (n <= k) {
      n+=1;
      window[name] = pingD(a)(b)(c);
      diffRender();
    }
    else if (n % 2 === 0) {
      ms = 1200
      n = 0
      c[0]+=1;
      window[name] = pingD(_A1)(_A3)(c);
      diffRender();
      k = Math.floor(Math.random() * 7)+1;
    }
    else if (n % 2 === 1) {
      ms = 1200;
      n = 0;
      c[1]+=1;
      window[name] = pingD(_A3)(_A2)(c);
      diffRender();
      k = Math.floor(Math.random() * 7)+1;
    }
    setTimeout( function () {
      train();
    },ms );
  }
}  

PingpongMaker('m67_RESULT')
PingpongMaker('m68_RESULT')
PingpongMaker('m69_RESULT')  `),

h('p', ' m67_RESULT, m68_RESULT, and m69_RESULT are permanent fixtures in the virtual DOM description returned by main()'),

  h('br'),
  h('br'),

  h('button#fredButton', fredButton ),
h('a', {props: {href: '#top'}}, 'Back to the top'),
  h('br'),
  h('input#change', diffRend ),
  h('div#changeDisplay', [diffRend] ),
  h('button#diffRender', 'diffRender()' ),
  h('br'),
  h('br'),
  h('br')
        ])
      ])
    })
  }
}

diffRender = () => document.getElementById('diffRender').click()

sources.DOM = makeDOMDriver('#main-container'),
sources.WS = websocketsDriver,

run(main, sources);



