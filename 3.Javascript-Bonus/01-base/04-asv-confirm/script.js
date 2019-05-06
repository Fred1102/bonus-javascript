/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    // your code here

    window.addEventListener("load", ask); 

    function ask() {
        var age = prompt("What's your age?"); 
        var gender = prompt("Give me your gender?"); 
        var place = prompt("What's your adress?");
        var result = confirm("You are " + age + "Your gender " + gender + "your adress is " + place + "." + " Is this correct?");

        if (result == false) {
            ask();
        } else {
            return; 
        }
}
