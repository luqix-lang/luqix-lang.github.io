
function app(ctx){
	$('#app').html(ctx);

	if(screen.width < 769)
		closeMenu();
}

function closeMenu(){
	$('.sidebar').hide();
    $('#close-menu').hide();
}

function changeState(route){
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?${route}`;
    window.history.pushState({path:newurl},'',newurl);
}

$(document).ready(()=>{

	$('#close-menu').click(() => {
	   closeMenu();
    });

    $('#open-menu').click(() => {
          $('.sidebar').show();
          $('#close-menu').show();
    });

    // first page render
    $('#app').html(introductionPage());

    $('.installPage').click(()=>{
    	app(installPage());
    })

    $('.introductionPage').click(()=>{
    	app(introductionPage());
    })
})
