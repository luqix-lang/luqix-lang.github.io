
function app(ctx){
	$('#app').html(ctx);

	if(screen.width < 769)
		closeMenu();
}



function changeState(route){
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?${route}`;
    window.history.pushState({path:newurl},'',newurl);
}

$(document).ready(()=>{


    // first page render
    $('#app').html(indexPage());
    syntaxLight();

    $('.downloadPage').click(()=>{
    	app(downloadPage());
    })

    $('.indexPage').click(()=>{
    	app(indexPage());
        syntaxLight()
    })
})
