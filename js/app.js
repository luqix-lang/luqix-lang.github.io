let screen1 = document.getElementById('app');
let screen2 = document.getElementById('docs');

let docs_content = document.getElementById('app2');


function app(ctx){
    pageOn();
    screen1.innerHTML = ctx();

    syntaxLight();
}

function pageOn(){
    screen2.style.display = 'none'
    screen1.style.display = 'block'
}

function pageOff(){
    screen1.style.display = 'none'
    screen2.style.display = 'block'
}


function changeState(route){
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?${route}`;
    window.history.pushState({path:newurl},'',newurl);
}

function toggleMenu(){ $('#sidebar').toggle(); }

app(_indexPage);


function indexPage(){ app(_indexPage); }
function downloadPage(){ app(_downloadPage); }


function app2(ctx){
    pageOff();

    docs_content.innerHTML = ctx();
    console.log('noooooo')
    syntaxLight();
}

function docsPage() { app2(_docsPage); }
function docs_basicsPage() { app2(_docs_basicsPage); }


modules = ["base64", "bytes", "locals", "dict", "dtypes", "file", "json", "list", "math", "number", "os", "parallelism", "path", "process", "random", "reg", "socket", "string", "sys", "sqlite3", "thread", "time", "url", "websocket"]
modules.sort()

let mod = document.getElementById('modules-nav')

for(let i = 0; i < modules.length; i++){
    mod.innerHTML += `<p class="side-nav px-4">${modules[i]}</p>`
}
