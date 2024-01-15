document.getElementsByTagName('title')[0].innerText = 'Luqix - A facile coding tool that archives all paradigms in their easiest forms and its efficient, interpreted, and cross-plaform.'

let nav = document.getElementById('nav');

nav.innerHTML = `
<div class="nav py-1 px-2 px-0-sm">
		<nav class="flex justify-between align-items-center overflow-x-scroll-sm">
			<div class="flex justify-start align-items-center">
				<p class="logo-case pt-2 pb-1"><a href="../index.html" class="logo text-xl-3 text-xl-md px-2">LUQIX</a></p>
			</div>
			<div class="flex justify-center align-items-center"></div>
			<div class="flex pr-2 justify-end align-items-center">
				<p class="py-2 px-2"><a href="docs.html">Docs</a></p>
				<p class="py-2 px-2"><a href="../download.html">Install</a></p>
				<p class="py-2 px-2"><a href="../changelog.html">Changelog</a></p>
				<p class="py-2 px-2"><a href="../blog.html">Blog</a></p>

				<p class="pt-3 pb-1 px-2"><a href="https://github.com/luqix-lang/luqix">
					<svg xmlns="http://www.w3.org/2000/svg" width="17" fill="currentColor" height="17" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
					
				</a></p>
				<div class="switch">
					<p id="darkmode" class="py-2 mt-1 pl-1 switch-btn">
						<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 22" stroke-width="1.5" stroke="currentColor" width = '17px' height = '17px'>
						  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
						</svg>
					</p>
				</div>

			</div>
		</nav>
	</div>
`

let bod = document.getElementById('app2');


bod.innerHTML += `
	<footer class="flex justify-center flex-wrap pb-5 pt-5">
		<div class="flex justify-between flex-wrap col-8 col-10-md px-4-md">
			<div class="col-2 col-5-sm col-3-md mb-3">
				<p class="text-xl b7">Luqix</p>
			</div>
			<div class="col-2 col-5-sm col-3-md mb-3">
				<p class="b5 mb-1">Links</p>
				<p class="mb-1"><a href="../index.html" class="text-md">Home</a></p>
				<p class="mb-1"><a href="../docs.html" class="text-md">Docs</a></p>
				<p class="mb-1"><a href="../download.html" class="text-md">Install</a></p>
				<p class="mb-1"><a href="../changelog.html" class="text-md">Changelog</a></p>
				<p class="mb-1"><a href="../blog.html" class="text-md">Blog</a></p>
			</div>
			<div class="col-2 col-5-sm col-3-md mb-3">
				<p class="b5 mb-1">Starter</p>
				<p class="mb-1"><a href="basic.html" class="text-md">Basics</a></p>
				<p class="mb-1"><a href="" class="text-md">Examples</a></p>
				<p class="mb-1"><a href="" class="text-md">FAQ</a></p>
				<p class="mb-1"><a href="" class="text-md">Topics</a></p>
			</div>
			<div class="col-2 col-5-sm col-3-md mb-3">
				<p class="b5 mb-1">Contribute</p>
				<p class="mb-1"><a href="" class="text-md">Share code</a></p>
				<p class="mb-1"><a href="" class="text-md">Write documentation</a></p>
				<p class="mb-1"><a href="" class="text-md">Write library</a></p>
				<p class="mb-1"><a href="" class="text-md">More</a></p>
			</div>
			<div class="col-2 col-5-sm col-3-md mb-3">
				<p class="b5 mb-1">Join us</p>
				<p class="mb-1"><a href="" class="text-md">Youtube</a></p>
				<p class="mb-1"><a href="" class="text-md">Twitter</a></p>
				<p class="mb-1"><a href="" class="text-md">Telegram</a></p>
				<p class="mb-1"><a href="" class="text-md">Whatsapp channels</a></p>
			</div>
		</div>
		<p class="col-10 text-center px-4 text-md mt-2 opacity-80">© 2024 <a href="">Variable code</a>, &nbsp; Author <a href="" class="b6 text-md">Contact</a></p>
	</footer>
`

if (true) {
    modules = ["base64", "locals", "file", "json", "math", "number", "os", "path", "process", "random", "regex", "socket", "sys", "thread", "time", "websocket"]
    modules.sort()

    let mod = document.getElementById('modules-nav')

    for(let i = 0; i < modules.length; i++){
        mod.innerHTML += `<a href="${modules[i]}.html"><p class="side-nav px-3">${modules[i]}</p></a>`
    }
    
    mod.innerHTML += `<p class="side-nav px-3 b6 mb-5">Thank you</p>`
}

if (true) {
	let hd = document.getElementsByClassName('code');
	let syn = new Flare();

	for(let i=0; i < hd.length; i++){
		syn.light(hd[i]);
	}
}


function toggleMenu(){
	$('#sidebar').toggle();
}

$(document).ready(() => {
	$('.menu-call').html(`
			<p class="px-2" onclick="toggleMenu()"><i class="fas fa-bars"></i></p>
  		<p class="px-2 bl-1"><a href="#"><i class="fas fa-arrow-up"></i></a></p>
		`)
})

let fns = document.getElementsByClassName("fn");

for(let i =0; i < fns.length; i++){
	f = fns[i];
	f.innerHTML = `<span class="b4 opacity-70">#</span> ${f.innerHTML}`
}

let sideDec = document.getElementsByClassName('side-dec')[0];

if (true){
	sideDec.innerHTML += `
	<p class="side-link flex align-items-center justify-between px-3"><span>Blocks</span> <span class="caret-right"></span></p>

	<div class="side-dec" id="modules-nav">	
		<a href="keywords.html"><p class="side-nav px-3">Keywords</p></a>
		<a href="datatypes.html"><p class="side-nav px-3">Datatypes</p></a>
		<a href="objects.html"><p class="side-nav px-3">Objects and Types</p></a>
		<a href="objects.html"><p class="side-nav px-3">Operators</p></a>
	</div>

	<p class="side-link flex align-items-center justify-between px-3"><span>Tools</span> <span class="caret-right"></span></p>

	<div class="side-dec" id="modules-nav">	
		<a href="console.html"><p class="side-nav px-3">Console</p></a>
		<a href="gabbage.html"><p class="side-nav px-3">Gabbage collection</p></a>
  	</div>

`
}

if(true) {
	let lk = document.createElement('link');
	lk.rel = "stylesheet";
	lk.type="text/css";
	lk.href="../css/dark.css";

	document.getElementsByTagName('head')[0].appendChild(lk);
}

(() => {
  'use strict'

	function totheme(ch=1){
		if(ch)
			realTimeTheme();

		$('body, .bg-white, .contents').toggleClass('dark-bg');
		$('#darkmode').toggleClass('dark-switch');
		$('.switch').toggleClass('dark-switch-case');
		$('.styled-table, .paint, .smoky, .key, .sidebar').toggleClass('dark-smoky');
		$('*, .contents *, .side-link span').toggleClass('dark-all');
		$('.side-nav').toggleClass('dark-side-nav');
		$('.key, .nav *, .fn, .args, .tb').toggleClass('dark-hi1');
		$('.nav').toggleClass('dark-nav');
		$('.code, .code2').toggleClass('dark-code');
		$('.alert').toggleClass('dark-alert');
		$('.styled-table').toggleClass('dark-table');
		$('.tablez *').toggleClass('dark-purple');
		$('.f16 a').toggleClass('dark-a');
		$('.alert-warning').toggleClass('dark-warning');
		$('footer a').toggleClass('dark-footer');
		$('footer').toggleClass('dark-footer-bg');
		$('.brand').toggleClass('dark-brand');
		$('.btn').toggleClass('btn-dark');
		$('.btn-theme').toggleClass('btn-dark-theme');
		$('.page').toggleClass('dark-page');

	}

	const getStoredTheme = () => localStorage.getItem('theme')
	const setStoredTheme = (theme) => localStorage.setItem('theme', theme)

	const getPreferredTheme = () => {
		const storedTheme = getStoredTheme()

		if (storedTheme) {
	  		return storedTheme
		}

		return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
	}

	const theme = getPreferredTheme();
	const darkmodes = document.getElementById('darkmode');

	function realTimeTheme(){
		if (getPreferredTheme() == 'light'){
			setStoredTheme('dark');
		} else {
			setStoredTheme('light')
		}
	}


	darkmodes.addEventListener('click', totheme);

	if (theme != "light") {
		totheme(0);
	}
})();


caret = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" width="15px" height='15px'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

`

$('.caret-right').html(caret);
$('.caret-right').addClass('rota-stable');


console.log(localStorage.getItem('open-tabs'));

const open_tabs = function() {
	return localStorage.getItem('open_tabs');
}

const set_open_tabs = function(tabs){
	localStorage.setItem('open_tabs', tabs);
}

const get_open_tabs = function(){
	const open_tab = open_tabs();

	if (open_tab) {
		return JSON.parse(open_tab);
	}

	set_open_tabs([]);
	return [];
}


sideTabBtn = document.getElementsByClassName('side-link');
sideTab = document.getElementsByClassName('side-dec');
caretPos = document.getElementsByClassName('caret-right');

for(let i=1; i < sideTabBtn.length; i++) {
	sideTabBtn[i].addEventListener('click', () => {
		$(sideTab[i]).slideToggle(100);
		caretPos[i].classList.toggle('rota-stable');
		caretPos[i].classList.toggle('rota');

		let open_tab = get_open_tabs();

		if (!open_tab.includes(i)){
			open_tab.push(i)
		
		} else {
			let lit = []

			for(let u = 0; u < open_tab.length; u++)
				if (open_tab[u] != i)
					lit.push(open_tab[u])
			
			open_tab = lit
		}

		set_open_tabs(JSON.stringify(open_tab));
	})	
}

for(let i=1; i < sideTabBtn.length; i++){
	sideTab[i].classList.toggle('d-none');
}

if (true) {
	let open_openned_tabs = get_open_tabs();

	for(let i = 0; i < open_openned_tabs.length; i++){
		id = open_openned_tabs[i];
		$(sideTab[id]).toggle();
		caretPos[id].classList.toggle('rota-stable');
		caretPos[id].classList.toggle('rota');
	}
}

