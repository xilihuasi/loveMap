function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function formatPm25(num) {
  num -=0;
  let txt = '';
  switch (true) {
    case num <= 50:
      txt = '优';
      break;
    case num <= 100:
      txt = '良';
      break;
    case num <= 200:
      txt = '轻度污染';
      break;
    case num <= 300:
      txt = '中度污染';
      break;
    case num > 300:
      txt = '重度污染';
      break;
    default:
      break;
  }
  return txt;
}

function getNumBetweenDays(start, end) {
  const startTime = new Date(start).getTime() || null;
  const endTime = new Date(end).getTime() || new Date().getTime();
  let num = 0;
  if (startTime) {
    num = Math.floor(Math.abs(startTime - endTime) / (1000 * 60 * 60 * 24));
  }
  return num;
}
module.exports = {
  formatTime: formatTime,
  formatPm25: formatPm25,
  getNumBetweenDays: getNumBetweenDays
}
