let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = '';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);

        //when 'x' button is pressed, '*' is shown on calculator screen
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }

        /*when 'Sq.' button is pressed, the square of the number present on screen
        is displayed in the place of the original number*/
        else if (buttonText == 'Sq.') {
            buttonText = Math.pow(screenValue, 2);
            screenValue = buttonText;
            screen.value = screenValue;
        }

        /*when 'Cu.' button is pressed, the cube of the number present on screen
        is displayed in the place of the original number*/
        else if (buttonText == 'Cu.') {
            buttonText = Math.pow(screenValue, 3);
            screenValue = buttonText;
            screen.value = screenValue;
        }

        /*when 'sqrt' button is pressed, the square root of the number present on screen
        is displayed in the place of the original number*/
        else if (buttonText == 'sqrt') {
            buttonText = Math.sqrt(screenValue);
            screenValue = buttonText;
            screen.value = screenValue;
        }

        /*when 'cbrt' button is pressed, the cube root of the number present on screen
        is displayed in the place of the original number*/
        else if (buttonText == 'cbrt') {
            buttonText = Math.cbrt(screenValue);
            screenValue = buttonText;
            screen.value = screenValue;
        }

        //when 'AC' button is pressed, the calculator screen is cleared completely
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
        }

        /*when '=' button is pressed, the equation on the calculator screen is
        evaluated and the result is displayed in its place*/
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }

        /*when any other button is pressed, the value on the pressed button is displayed
        next to the existing equation on the calculator screen*/
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
