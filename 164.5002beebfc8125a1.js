"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[164],{70164:(e,t,$)=>{function a(e){return RegExp("^(("+e.join(")|(")+"))\\b","i")}$.r(t),$.d(t,{mumps:()=>s});var o=RegExp("^[\\+\\-\\*/&#!_?\\\\<>=\\'\\[\\]]"),n=RegExp("^(('=)|(<=)|(>=)|('>)|('<)|([[)|(]])|(^$))"),r=RegExp("^[\\.,:]"),c=/[()]/,m=RegExp("^[%A-Za-z][A-Za-z0-9]*"),l=a(["\\$ascii","\\$char","\\$data","\\$ecode","\\$estack","\\$etrap","\\$extract","\\$find","\\$fnumber","\\$get","\\$horolog","\\$io","\\$increment","\\$job","\\$justify","\\$length","\\$name","\\$next","\\$order","\\$piece","\\$qlength","\\$qsubscript","\\$query","\\$quit","\\$random","\\$reverse","\\$select","\\$stack","\\$test","\\$text","\\$translate","\\$view","\\$x","\\$y","\\$a","\\$c","\\$d","\\$e","\\$ec","\\$es","\\$et","\\$f","\\$fn","\\$g","\\$h","\\$i","\\$j","\\$l","\\$n","\\$na","\\$o","\\$p","\\$q","\\$ql","\\$qs","\\$r","\\$re","\\$s","\\$st","\\$t","\\$tr","\\$v","\\$z"]),d=a(["break","close","do","else","for","goto","halt","hang","if","job","kill","lock","merge","new","open","quit","read","set","tcommit","trollback","tstart","use","view","write","xecute","b","c","d","e","f","g","h","i","j","k","l","m","n","o","q","r","s","tc","tro","ts","u","v","w","x"]);let s={name:"mumps",startState:function(){return{label:!1,commandMode:0}},token:function(e,t){var $,a=(e.sol()&&(t.label=!0,t.commandMode=0)," "==($=e.peek())||"	"==$?(t.label=!1,0==t.commandMode?t.commandMode=1:(t.commandMode<0||2==t.commandMode)&&(t.commandMode=0)):"."!=$&&t.commandMode>0&&(":"==$?t.commandMode=-1:t.commandMode=2),("("===$||"	"===$)&&(t.label=!1),";"===$?(e.skipToEnd(),"comment"):e.match(/^[-+]?\d+(\.\d+)?([eE][-+]?\d+)?/)?"number":'"'==$?e.skipTo('"')?(e.next(),"string"):(e.skipToEnd(),"error"):e.match(n)||e.match(o)?"operator":e.match(r)?null:c.test($)?(e.next(),"bracket"):t.commandMode>0&&e.match(d)?"controlKeyword":e.match(l)?"builtin":e.match(m)?"variable":"$"===$||"^"===$?(e.next(),"builtin"):"@"===$?(e.next(),"string.special"):/[\w%]/.test($)?(e.eatWhile(/[\w%]/),"variable"):(e.next(),"error"));return t.label?"tag":a}}}}]);