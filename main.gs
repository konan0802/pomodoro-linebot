// **デプロイした際には下記のURLのWebhook URLを更新する**
// https://developers.line.biz/console/channel/1657335407/messaging-api

// LINEからのイベントがdoPostにとんでくる
function doPost(e) {

  const json = e.postData.contents
  const events = JSON.parse(json).events;

  events.forEach(function(event) {

    if(event.type == "message") {
      if(event.message.type == "text"){

        let returnText = "";

        if(event.message.text == "仕事"){

          setState(STATE_WORK);
          setRateLimit(END_WORK_DATE_TIME);
          replyToLine(event, MES_START_WORK);

        }
        else if(event.message.text == "5"){

          setState(STSTE_5BRK);
          setRateLimit(END_5BRK_DATE_TIME);
          replyToLine(event, MES_START_5BRK);

        }
        else if(event.message.text == "10"){

          setState(STSTE_10BRK);
          setRateLimit(END_10BRK_DATE_TIME);
          replyToLine(event, MES_START_10BRK);

        }
        else if(event.message.text == "MTG" || event.message.text == "mtg" || event.message.text == "Mtg"){

          setState(STATE_MTG);
          setRateLimit(ALERT_MTG_DATE_TIME);
          replyToLine(event, MES_START_MTG);

        }
        else if(event.message.text == "お疲れ"){

          setState(STATE_REST);
          setRateLimit(TOMORROW_DATE_TIME);
          replyToLine(event, MES_START_REST);

        }
        else if(event.message.text == "やる気"){

          replyToLineAndSleep(event, MES_REFRESH1, 5);
          sendToLine(MES_REFRESH2);
          sendToLineAndSleep(MES_REFRESH3, 60);
          sendToLineAndSleep(MES_REFRESH4, 2);
          sendToLineAndSleep(MES_REFRESH5, 2);
          sendToLineAndSleep(MES_REFRESH6, 2);
          sendToLineAndSleep(MES_REFRESH7, 2);

        }
        else {
          replyToLine(event, "仕事 | 5 | 10 | MTG | お疲れ | やる気");
        }
      }
    }
  });
}

// cronのハンドリングを行う
function cronHandler() {

  // ”状態”と”切り替え時刻”を取得
  const state = getState();
  const rateLimit = getRateLimit();

  if (rateLimit < ND){

    if (state == STATE_WORK) {

      sendToLine(MES_FIN_WORK);
      setState(STATE_PENDING);
      setRateLimit(ALERT_PEND_DATE_TIME);

    }
    else if (state == STSTE_5BRK) {
      
      sendToLine(MES_FIN_5BRK);
      setState(STATE_PENDING);
      setRateLimit(ALERT_PEND_DATE_TIME);
    
    }
    else if (state == STSTE_10BRK) {
    
      sendToLine(MES_FIN_10BRK);  
      setState(STATE_PENDING);
      setRateLimit(ALERT_PEND_DATE_TIME);
    
    }
    else if (state == STATE_PENDING) {
    
      sendToLine(MES_PEND);  
      setRateLimit(ALERT_PEND_DATE_TIME);
    
    }
    else if (state == STATE_MTG) {
    
      sendToLine(MES_ALERT_MTG);  
      setRateLimit(ALERT_MTG_DATE_TIME);
    
    }
    else if (state == STATE_REST) {
    
      sendToLine(MES_FIN_REST);  
      setRateLimit(ALERT_PEND_DATE_TIME);
    
    }
  }
  else if (rateLimit == ND_2M){
    sendToLine(REMAINING_2M);
  }

}
