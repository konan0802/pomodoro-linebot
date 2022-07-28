// 現在時刻
const ND = new Date();
const ND_2M = new Date(
  ND.getFullYear(),
  ND.getMonth(),
  ND.getDate(),
  ND.getHours(),
  ND.getMinutes() + 2
);

// LINE Messaging API関連
const CHANNEL_TOKEN = "***";

// 返信用のURL
const REPLY_URL = "https://api.line.me/v2/bot/message/reply";

// 送信用のURL
const SEND_URL = "https://api.line.me/v2/bot/message/push";

// AppManagerシート
const APP_MANAGER_SHEET = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('AppManager');

// ポモドーロの状態のセルの位置
const STATE_ROW = 2;
const STATE_COL = 3;

// 残り時間のセルの位置
const RATE_LIMIT_ROW = 3;
const RATE_LIMIT_COL = 3;

// ポモドーロの状態管理
const STATE_WORK = "WORK";
const STSTE_5BRK = "5BRK";
const STSTE_10BRK = "10BRK";
const STATE_PENDING = "PEND";
const STATE_MTG = "MTG";
const STATE_REST = "REST";

// メッセージ
const MES_START_WORK = "さぁ仕事開始!!";
const MES_START_5BRK = "5分休憩〜";
const MES_START_10BRK = "10分休憩〜〜";
const MES_START_MTG = "MTG開始ですね";
const MES_START_REST = "本日もお疲れ様でした〜";

const MES_FIN_WORK = "1Pomo終了です!!";
const MES_FIN_5BRK = "5分休憩終了です!!";
const MES_FIN_10BRK = "10分休憩終了です!!";
const MES_FIN_REST = "そろそろ始動っすかね？？";

const MES_PEND = "中断したままですよ!!";

const MES_ALERT_MTG = "まだMTG中ですか？？";

const REMAINING_2M = "残り2分です";

const MES_REFRESH1 = "よし、一旦、リラックスしようか";
const MES_REFRESH2 = "1分間、目を瞑って、深呼吸して〜";
const MES_REFRESH3 = "落ち着いたら、少し体も動かそう！";
const MES_REFRESH4 = "大丈夫！お前はできるから！";
const MES_REFRESH5 = "この目の前のことを乗り切ると確実に1歩成長できる！";
const MES_REFRESH6 = "落ち着いたらで良いから、また再開だ！";
const MES_REFRESH7 = "よし！テンション上げてこ！";

// 時刻設定
const END_WORK_DATE_TIME = new Date(
  ND.getFullYear(),
  ND.getMonth(),
  ND.getDate(),
  ND.getHours(),
  ND.getMinutes() + 25
);

const END_5BRK_DATE_TIME = new Date(
  ND.getFullYear(),
  ND.getMonth(),
  ND.getDate(),
  ND.getHours(),
  ND.getMinutes() + 5
);

const END_10BRK_DATE_TIME = new Date(
  ND.getFullYear(),
  ND.getMonth(),
  ND.getDate(),
  ND.getHours(),
  ND.getMinutes() + 10
);

const ALERT_PEND_DATE_TIME = new Date(
  ND.getFullYear(),
  ND.getMonth(),
  ND.getDate(),
  ND.getHours(),
  ND.getMinutes() + 3
);

const ALERT_MTG_DATE_TIME = new Date(
  ND.getFullYear(),
  ND.getMonth(),
  ND.getDate(),
  ND.getHours(),
  ND.getMinutes() + 30
);

const TOMORROW_DATE_TIME = new Date(
  ND.getFullYear(),
  ND.getMonth(),
  ND.getDate() + 1,
  8
);
