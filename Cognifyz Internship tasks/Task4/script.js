const colorButton = document.getElementById('colorButton');
function changeBackgroundColor() {
        
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);

    document.body.style.backgroundColor = randomColor;
}
colorButton.addEventListener('click', changeBackgroundColor);