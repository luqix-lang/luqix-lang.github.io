let screen1 = document.getElementById('app');
let screen2 = document.getElementById('docs');


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

    $('#app2').html(ctx);
    syntaxLight();
}

function docsPage() {
    app2(_docsPage);
}

