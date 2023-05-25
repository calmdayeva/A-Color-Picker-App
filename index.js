// for (let i = 0; i <= 5; i++) {
//     console.log(i)
// }

// const Names = ['Bright','Luke', 'Jude', 'Love', 'Wike','Henry', 'Amaka', 'Ewka']
// for (let k = 0; k < Names.length; k++){
//     console.log(Names[k] + ' Emeka')
// }

const hexBtn = document.getElementById('copy-btn');
const generateBtn = document.getElementById('generate-btn');
const rgbBtn = document.getElementById('copy-rgb');
const reset = document.getElementById('resetBtn');
const colorBox = document.getElementById('color-box')
const colorCode = document.getElementById('colorCode')


generateBtn.addEventListener('click', generate);
rgbBtn.addEventListener('click', copyRgb );
hexBtn.addEventListener('click', hexBtn );

//to generate
function generate() {
    const hexChars = '0123456789ABCDEF';
    let hexColor = '#'

    for(i = 0;i < 6;i++){
        hexColor += hexChars[Math.floor(Math.random() * 16)];
    }

    console.log(hexColor);

    colorBox.style.backgroundColor = hexColor
    colorCode.innerHTML = hexColor


}

//for copy to rgb 
function copyRgb() {
    const colorText = colorBox.style.backgroundColor;
    const templeInput = document.createElement('input');
    document.body.appendChild(templeInput);
    templeInput.value = colorText
    templeInput.select();
    document.execCommand('copy');
    document.body.removeChild(templeInput)

    console.log(colorText)
    alert('colour copied' + colorText);
}

//copy to Hex
function copyColor(){
    const colorText = colorBox.style.backgroundColor;
    const hexCode = rgbToHex(colorText)
    const templeInput = document.createElement('input');
    document.body.appendChild(templeInput);
    templeInput.value = colorText
    templeInput.select();
    document.execCommand('copy');
    document.body.removeChild(templeInput)

    console.log(colorText)
    alert('Color copied to Clipboard' + colorText);
};

//Rgb to Hex
function rgbToHex (rgbColor) {
    const regex = /rgb\((\d+), (\d+), (\d+)\)/;
    const matches = regex.exec(rgbColor);
    const r = parseInt(matches[1]);
    const g = parseInt(matches[2]);
    const b = parseInt(matches[3]);
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? '0' + hex : hex;
}

