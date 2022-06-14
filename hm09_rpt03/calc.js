var expression = "";

      function add(character) {
        expression = expression + character;
        document.getElementById("display").value = expression;
      }

      function del() {
        expression = expression.substring(0, expression.length - 1);
        document.getElementById("display").value = expression;
      }

      function compute() {
        var expression_num = parseFloat(eval(expression));
        if (isInteger(expression_num) == true) {
          expression = expression_num;
        } else {
          expression = expression_num.toFixed(2);
        }
        document.getElementById("display").value = expression;
      }

      function clearDisplay() {
        expression = "";
        document.getElementById("display").value = "0";
      }

      function isInteger(x) {
        return Math.floor(x) === x;
      }
      let num = parseInt(document.getElementById('num').value);

      function jinsu2(){
        var i2 = document.getElementById("display").value;
        document.calculator.result.value = parseInt(i2).toString(2);
 
      }
      function jinsu8(){
        var i8 = document.getElementById("display").value;
        document.calculator.result.value = parseInt(i8).toString(8);
 
      }

      function jinsu16(){
        var i16 = document.getElementById("display").value;
        document.calculator.result.value = parseInt(i16).toString(16);
 
      }