

let x = `<div class="container">
<p class="title">
    To-Do
</p>
<div class="div">

    <input type="text"  id="name" placeholder="name">
    <button onclick="myFunction()" class="btn">Click me</button>
    <button onclick="deleteDone()" class="btn">Delete Done</button>
    
</div>

</div>`;



document.body.innerHTML = x;

let y = localStorage.getItem("todo");
let storedEle = JSON.parse(y);

let vDom = document.createElement("div");

let arr = [];

if (storedEle != null && storedEle.length != 0) {
console.log("Stored Ele: " + storedEle.length);
arr = storedEle;
setStyles();
}
console.log(arr);


arr.forEach(element => {
setElement(element);
});

document.body.appendChild(vDom)

function deleteDone() {
vDom.innerHTML = "";
let temp = []
arr.forEach(element => {
if (element.iscompleted == false) {
setElement(element);
temp.push(element);
}
});
delElement(temp);


}

function myFunction() {
let x = document.getElementById("name").value.trim();

if (x == "") {
console.log("return");
return;
}

let y = {
"title": x,
"iscompleted": false,
"created": Date.now()
};

arr.push(y);
if (arr.length == 1) {
console.log("asdf");
setStyles();
}
setElement(y);

localStorage.setItem("todo", JSON.stringify(arr))

document.getElementById("name").value = "";
}


function setStyles() {
vDom.style.border = "3px solid black"
vDom.style.borderStyle = 'radius: 15px';
vDom.style.width = '500px'
vDom.style.margin = 'auto'
vDom.style.boxShadow = '1px 0 17px 1px'
vDom.classList = `bookmark`;
}


function setElement(y) {
let chk = document.createElement("div");
chk.style.padding = "20px"
chk.style.textAlign = "center"
chk.style.fontSize = "20px"
chk.style.boxSizing = "boder-box"
chk.style.borderStyle = 'radius: 15px';
chk.style.justifyContent = 'center'

let ele = document.createElement("h1")
ele.innerText = y.title;
ele.style.color = "brown";
ele.style.fontSize = "30px"

let cls = document.createElement("input")
cls.type = "checkbox"
cls.checked = y.iscompleted
cls.style.padding = '30px'
cls.id = y.created;

cls.onchange = function () {
y.iscompleted = !y.iscompleted;
localStorage.setItem("todo", JSON.stringify(arr))
}
let div1 = document.createElement("div1")
div1.appendChild(ele);

let img = document.createElement("img");
img.src = "./bin.png";
img.style.width = "50px"
img.style.padding = "7px"

img.onclick = function () {
vDom.innerHTML = "";
let temp = []
arr.forEach(element => {
if (element.created != y.created) {
    setElement(element);
    temp.push(element);
}
});
delElement(temp);

}
let lab = document.createElement("label")
lab.setAttribute("for", y.created)
lab.innerText = 'iscompleted'
lab.style.fontSize = '30px'
chk.appendChild(ele);
div1.appendChild(lab);
div1.appendChild(cls);
div1.appendChild(img);
chk.appendChild(div1);
vDom.appendChild(chk);


}
function delElement(y) {
console.log(y);
if (y.length == 0) {
vDom.removeAttribute('style');
vDom.removeAttribute('class');
}
arr = y;
localStorage.setItem("todo", JSON.stringify(y))

}