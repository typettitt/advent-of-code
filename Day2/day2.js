
  function validatePasswordsPart1(){
  var policiesArr = [];
  var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('payload.txt')
  });

  lineReader.on('line', function (line) {
    policiesArr.push(line);
  });

  lineReader.on('close', function (line) {
    var validPasswords = 0;
    for (var i = 0; i < policiesArr.length; i++) {
       var policyMin = parseInt(policiesArr[i].substring(0, policiesArr[i].indexOf('-')));
      var policyMax = parseInt(policiesArr[i].substring(policiesArr[i].indexOf('-')+1, policiesArr[i].indexOf(' ')));
      var policyCharacter = policiesArr[i].substring(policiesArr[i].indexOf(':')-1, policiesArr[i].indexOf(':'));
      var password = policiesArr[i].substring(policiesArr[i].indexOf(':')+1, policiesArr[i].length);
      var charCountInPassword = password.split(policyCharacter).length-1;
      if( charCountInPassword >= policyMin && charCountInPassword <= policyMax){
        validPasswords++;
        console.log(policiesArr[i], charCountInPassword, 'Valid');
      }else{
        console.log(policiesArr[i], charCountInPassword, 'Invalid');
      }
    }
    console.log('Total passwords: '+ policiesArr.length);
    console.log('Number of valid passwords: '+ validPasswords);
  });
}
function validatePasswordsPart2(){
  var policiesArr = [];
  var lineReader = require('readline').createInterface({
  input: require('fs').createReadStream('payload.txt')
  });

  lineReader.on('line', function (line) {
    policiesArr.push(line);
  });

  lineReader.on('close', function (line) {
    var validPasswords = 0;
    for (var i = 0; i < policiesArr.length; i++) {
      var policyMin = parseInt(policiesArr[i].substring(0, policiesArr[i].indexOf('-')));
      var policyMax = parseInt(policiesArr[i].substring(policiesArr[i].indexOf('-')+1, policiesArr[i].indexOf(' ')));
      var policyCharacter = policiesArr[i].substring(policiesArr[i].indexOf(':')-1, policiesArr[i].indexOf(':'));
      var password = policiesArr[i].substring(policiesArr[i].indexOf(':')+1, policiesArr[i].length);
      var passwordCharacterAtMin = password.substring(policyMin, policyMin+1);
      var passwordCharacterAtMax = password.substring(policyMax, policyMax+1);
      if(passwordCharacterAtMin == policyCharacter && passwordCharacterAtMax != policyCharacter){
        validPasswords++;
        console.log(policiesArr[i], 'Valid');
      }else if(passwordCharacterAtMin != policyCharacter && passwordCharacterAtMax == policyCharacter){
        validPasswords++;
        console.log(policiesArr[i], 'Valid');
      }else{
        console.log(policiesArr[i], 'Invalid');
      }
    }
    console.log('Total passwords: '+ policiesArr.length);
    console.log('Number of valid passwords: '+ validPasswords);
  });
}
  validatePasswordsPart1();
  validatePasswordsPart2();
