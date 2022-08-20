var btn = document.getElementById("changeButtonColor");

function changeButtonColor(){
    btn.style.background = "orange"
}

btn.addEventListener('click', changeButtonColor)
btn.addEventListener('click', changeColor)
// lấy được hàm của script trước