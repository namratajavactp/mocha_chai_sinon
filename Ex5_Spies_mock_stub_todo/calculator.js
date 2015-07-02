/**
 * Created by namratam on 28-05-2015.
 */
window.onload = function () {
    var calc = new Calculator('Output');
    calc.add(2, 2);
}

//calculator.js
//Similar to a class container
var Calculator = function (eq) {
    //private members


    return {
        //public
        add: function (x, y) {
            var val = x + y;
            return val;
          },
        sub:function(x,y){
            var val=x-y;
            return val;
        },
        mul:function(x,y){
            var val = x*y;
            return val;
        }

    };
};
