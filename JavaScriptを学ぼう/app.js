// var hello = "Hello World";


// var int1 = 1
// var int2 = -10
// var float1 = 3.14
// var str1 = "JavaScriptを覚えよう"

// var orange = 100;
// var apple = 120;

// if(orange < apple){
//   alert("みかんの値段がリンゴより高い");
// }else if(orange == apple){
//   alert("みかんとリンゴが同じ値段")
// }else{
//   alert("みかんの値段がリンゴより高い")
// }

// var alertString;
// alertString = addString("WebCamp");

// alert(alertString);

// function addString(strA){
//   var addStr = "Hello" + strA;
//   return addStr;
// }

// var promptStr = prompt("何か好きな文字を入力してください");
// alert(promptStr);

var user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
while ((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert("じゃんけんの手をグー、チョキ、パーから選んでください。");
  user_hand = prompt("じゃんけんの手をグー、チョキ、パーから選んでください。");
}

var js_hand = getJShand();
var judge = WinLose(user_hand, js_hand);

if (user_hand != null){
  alert("あなたの選んだ手は" + user_hand + "です。\nJavaScriptの選んだ手は" + js_hand + "です。\n結果は" + judge + "です。"
}else{
  alert("またチャレンジしてね")
}


function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3 );
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  }else if(js_hand_num == 1){
    hand_name = "チョキ";
  }else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function WinLose(user, js){
  var WinLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      WinLose = "あいこ";
    }else if(js == "チョキ"){
      WinLose = "勝ち";
    }else if(js == "パー"){
      WinLose = "負け"
    }
  }else if(user == "チョキ"){
    if(js == "グー"){
      WinLose = "負け";
    }else if(js == "チョキ"){
      WinLose = "あいこ";
    }else if(js == "パー"){
      WinLose = "勝ち"
    }
  }else if(user == "パー"){
    if(js == "グー"){
      WinLose = "勝ち";
    }else if(js == "チョキ"){
      WinLose = "負け";
    }else if(js == "パー"){
      WinLose = "あいこ"
    }
  }
  return WinLose;
}