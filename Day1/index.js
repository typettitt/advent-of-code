var expense_report_array = [];

function expense_report_calculation(){
  var line_reader = require('readline').createInterface({
    input: require('fs').createReadStream('payload.txt')
  });

  line_reader.on('line', function (line) {
    expense_report_array.push(line);
  });

  line_reader.on('close', function (line) {
      part_1();
      part_2();


  });
}

function part_1(){
  var report_length = expense_report_array.length;
  loop1:
      for(var i = 0; i < report_length; i++){
        loop2:
          for(var j = 1; j < report_length; j++){
            var expense1 = parseInt(expense_report_array[i]);
            var expense2 = parseInt(expense_report_array[j]);
            var sum = expense1 + expense2;
            if(sum == 2020){
              console.log(expense1 * expense2);
              break loop1;
            }
          }
        }
}
function part_2(){
  var report_length = expense_report_array.length;
  loop1:
      for(var i = 0; i < report_length; i++){
        loop2:
          for(var j = 1; j < report_length; j++){
            loop3:
              for(var k = 2; k < report_length; k++){
                var expense1 = parseInt(expense_report_array[i]);
                var expense2 = parseInt(expense_report_array[j]);
                var expense3 = parseInt(expense_report_array[k]);
                var sum = expense1 + expense2 + expense3;
                if(sum == 2020){
                  console.log(expense1 * expense2 * expense3);
                  break loop1;
                }
            }
          }
        }
}

expense_report_calculation();
