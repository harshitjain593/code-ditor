//taking input of html, css and js.
//Updating the code on every step and showing in output section.
const htmlInput = document.getElementById("html_input");
const cssInput = document.getElementById("css_input");
const jsInput = document.getElementById("js_input");

function updateOutput() {
  const htmlCode = htmlInput.value;
  const cssCode = `<style>${cssInput.value}</style>`;
  const jsCode = jsInput.value;
  const fullCode = `${htmlCode}${cssCode}<script>${jsCode}<\/script>`;

  document.getElementById("output").innerHTML = fullCode;
  eval(jsCode);
}

htmlInput.addEventListener("input", updateOutput);

cssInput.addEventListener("input", updateOutput);

jsInput.addEventListener("input", updateOutput);

updateOutput();

//COPY Button js
var copied = document.getElementById("buttons1");
copied.addEventListener("click", function (e) {
  copy(e);
});
var copied = document.getElementById("buttons2");
copied.addEventListener("click", function (e) {
  copy(e);
});
var copied = document.getElementById("buttons3");
copied.addEventListener("click", function (e) {
  copy(e);
});
function copy(event) {
  var dataId = event.target.getAttribute("data-id");
  alert("Copied to clipboard!");
  var texttocopy = document.getElementById(dataId);
  texttocopy.select();
  document.execCommand("copy");
}

//LOCK/UNLOCK Button js
var count = 0;
var lock = document.getElementById("button2");
lock.addEventListener("click",lockunlock);
function lockunlock(){

    let a  = document.getElementById("html_input");
    let a1 = document.getElementById("css_input");
    let a2 = document.getElementById("js_input");
    let b = document.getElementById("button2");
    if(count == 0){
        a.style.pointerEvents = "none";
        a1.style.pointerEvents = "none";
        a2.style.pointerEvents = "none";
        b.style.backgroundColor = "red";
        alert("Disabled")
        count = 1;

    }else{
   
        
        a.style.pointerEvents = "visible";
        a1.style.pointerEvents = "visible";
        a2.style.pointerEvents = "visible";
        b.style.backgroundColor = "white";
        alert("Enabled");
        count = 0;
    }
}

//SAVE Button js

var save = document.getElementById("button1");
save.addEventListener("click",saving);
function saving(){
    var html_inputs = document.getElementById("html_input").value;
    var css_inputs = document.getElementById("css_input").value;
    var js_inputs = document.getElementById("js_input").value;
    console.log(html_inputs);
    console.log(css_inputs);
    console.log(js_inputs);
    localStorage.setItem("html_inputs",html_inputs);
    localStorage.setItem("css_inputs",css_inputs);
    localStorage.setItem("js_inputs",js_inputs);
    alert("Saved");
}
//retrieving the code and output on load.
function retrieve(){
    var html = localStorage.getItem("html_inputs");
    var css = localStorage.getItem("css_inputs");
    var js = localStorage.getItem("js_inputs");
    document.getElementById("html_input").value = html;
    document.getElementById("css_input").value = css;
    document.getElementById("js_input").value = js;
}
retrieve();
updateOutput();