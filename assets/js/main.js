//immediatly invoked function expression(IIFE)

(function() {

    //define variable
    const colorBtn = document.querySelectorAll('.common_class');
    const showCode = document.querySelector('#hexCode');
    const value = document.querySelector('.section-color-change');
    const hexCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    colorBtn.forEach(clickBtn);


    //Get background color
    function getColor(color) {
        var colorHexCode = [];
        if (color == 'rendom') {
            let hex = '#';
            for (let i = 0; i < 6; i++) {
                const index = Math.floor(Math.random() * hexCode.length);
                hex += hexCode[index];
            }
            colorHexCode.push(hex);
        } else {
            if (color == 'red') {
                colorHexCode.push('#FF0000');
            } else if (color == 'blue') {
                colorHexCode.push('#0000FF');
            } else if (color == 'green') {
                colorHexCode.push('#046307');
            }
        }
        changeBg(colorHexCode);
    }
    //function for background color change
    function changeBg(hex_code) {
        showCode.textContent = hex_code[0];
        value.style.backgroundColor = hex_code[0];
    }

    //click event add all button by foreach loop
    function clickBtn(button) {
        button.addEventListener('click', function() {
            var color = this.classList[1];
            getColor(color);
        })
    }

    clickBtn();


})();