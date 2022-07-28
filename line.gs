function replyToLine(event, returnText) {

  //自動返信メッセージの内容
  let message = {
    "replyToken":event.replyToken,
    "messages":[
      {
        "type":"text",
        "text":returnText
      }
    ]
  };

  //メッセージに添えなければならない情報
  let options = {
    "method":"post",
    "headers":{
      "Content-Type":"application/json",
      "Authorization":"Bearer " + CHANNEL_TOKEN
    },
    "payload":JSON.stringify(message)
  };

  //自動返信メッセージを送信する
  UrlFetchApp.fetch(REPLY_URL, options);
}

function sendToLine(sendText) {

  //自動返信メッセージの内容
  let message = {
    "to":"***",
    "messages":[
      {
        "type":"text",
        "text":sendText
      }
    ]
  };

  //メッセージに添えなければならない情報
  let options = {
    "method":"post",
    "headers":{
      "Content-Type":"application/json",
      "Authorization":"Bearer " + CHANNEL_TOKEN
    },
    "payload":JSON.stringify(message)
  };

  //自動返信メッセージを送信する
  UrlFetchApp.fetch(SEND_URL, options);
}

function replyToLineAndSleep(event, returnText, sleepSecond) {

  replyToLine(event, returnText)
  Utilities.sleep(sleepSecond * 1000)
}

function sendToLineAndSleep(sendText, sleepSecond) {

  sendToLine(sendText)
  Utilities.sleep(sleepSecond * 1000)
}
