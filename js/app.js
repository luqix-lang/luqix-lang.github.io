
function app(ctx){
	$('#app').html(ctx);

	if(screen.width < 769)
		closeMenu();
}

function closeMenu(){
	$('.sidebar').hide();
    $('#close-menu').hide();
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
    $('#app').html(getStartedPage());

    $('.developingPage').click(()=>{
    	app(developingPage());
    })

    $('.getStartedPage').click(()=>{
    	app(getStartedPage());
    })
})
