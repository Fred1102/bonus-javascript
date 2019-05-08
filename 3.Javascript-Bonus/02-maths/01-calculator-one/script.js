/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    // to get the value of an input: document.getElementById("element-id").value
    var field1 = document.getElementById("op-one") 
    var field2 = document.getElementById("op-two")


        // perform an addition
      
    document.getElementById("addition").addEventListener("click", function() {
        var field1ToInteger = parseFloat(field1.value)
        var field2ToInteger = parseFloat(field2.value)

        alert(field1ToInteger + field2ToInteger);
    });

    document.getElementById("substraction").addEventListener("click", function() {
            var field1ToInteger = parseFloat(field1.value)
            var field2ToInteger = parseFloat(field2.value)
    
            alert(field1ToInteger - field2ToInteger);
    });

     document.getElementById("multiplication").addEventListener("click", function() {
                var field1ToInteger = parseFloat(field1.value)
                var field2ToInteger = parseFloat(field2.value)
        
                alert(field1ToInteger * field2ToInteger);
            });

     document.getElementById("division").addEventListener("click", function() {
                    var field1ToInteger = parseFloat(field1.value)
                    var field2ToInteger = parseFloat(field2.value)
            
                    alert(field1ToInteger / field2ToInteger);
            });