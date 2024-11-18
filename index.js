function convertTimeToWords(time) {
  const PAST = "past";
  const TO = "to";
  const OCLOCK = "o'clock";

  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') {
    return 'midday';
  }

  const jsonMap = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'half',
    45: 'quarter'
  }



  const timeComponents = time.split(":");
  const hours = parseInt(timeComponents[0]);
  const minutes = parseInt(timeComponents[1]);

  if (minutes == 0) {
    return jsonMap[hours] + " " + OCLOCK;
  } else if (minutes <= 30) {
    return jsonMap[minutes] + " " + PAST + " " + jsonMap[hours]
  } else {
    const nextHour = hours + 1;
    const toMinutes = 60 - minutes; 
    return jsonMap[toMinutes] + " " + TO + " " + jsonMap[nextHour];
  }
}

module.exports = { convertTimeToWords };