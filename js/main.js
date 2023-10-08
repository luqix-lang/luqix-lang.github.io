let code = document.getElementsByClassName('code');

let lix = new Flare();

for(let i=0; i <code.length; i++)
    lix.light(code[i]);


let nav = document.getElementById('nav');
    foot = document.getElementById('footer');

nav.innerHTML = `
<div class="col-8 col-10-md px-3-md flex-wrap flex justify-between align-items-center z-10">
    <div class="flex py-3 align-items-center justify-start col-10-md">
        <p id="bar" class="px-2 mr-2 d-none-xxl d-block-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg></p>
        <a href="index.html"><p class="text-xl f5 logo">Luqix</p></a>
    </div>
    <div class="flex-xxl d-none-md flex-wrap align-items-center justify-center">
        <a href="docs/docs.html"><p class="px-4 fm flex flex-nowrap align-item-center nav-on">Documentation &nbsp; 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="21px" height="21px">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
        </p></a>
        <a href=""><p class="px-4 fm flex flex-nowrap align-items-center">Tutorials &nbsp; 
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="21px" height="21px">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path>
            </svg>
        </p></a>
        <a href="blog.html"><p class="px-4 fm flex align-items-center flex-nowrap">Blog &nbsp;
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="21px" height="21px">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
            </svg>
        </p></a>
        <a href=""><p class="px-4 fm flex align-items-center flex-nowrap">Support &nbsp; 
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="21px" height="21px">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"></path>
            </svg>
        </p></a>
        <a href=""><p class="px-4 fm flex flex-nowrap align-items-center">Forum &nbsp; 
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="21px" height="21px">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"></path>
                </svg>
        </p></a>
    </div>
    <div class="d-block-xxl d-none-md">
        <div class="flex align-items-center px-2 rounded-md input">
          <p class=""><i class="bi text-black bi-search"></i></p>
          <input class="outline-0 py-2 px-3 txt w-100 placeholder:text-gray-700" d="searcher" placeholder="Search docs" />
        </div>
    </div>
    <div class="d-none-md menu d-none-xxl justify-start align-items-center" id="menu">
        <div class="back" id="close-menu"></div>
        <div class="flex relative justify-start bg-white col-8 h-100">
            <div class="col-10 pt-2">
                <a href="index.html"><p class="txt text-xl py-3 bold px-2 mx-3 logo">Luqix</p></a>
                <a href="docs/docs.html"><p class="py-2 px-2 mx-3">Document</p></a>
                <a href="docs/docs.html"><p class="py-2 px-2 mx-3">Tutorials</p></a>
                <a href="blog.html"><p class="py-2 px-2 mx-3">Blog</p></a>
                <a href="docs/docs.html"><p class="py-2 px-2 mx-3">Support</p></a>
                <a href="docs/docs.html"><p class="py-2 px-2 mx-3">Forum</p></a>
                <a href="https://github.com/luqix-lang/luqix"><p class=" text-xl px-2 pb-2 pt-3 border-t mx-3"><i class="bi bi-github"></i> <span class="ml-2">github</span></p></a>
                <a href="https://github.com/luqix-lang/luqix"><p class=" text-xl px-2 py-2 mx-3"><i class="bi bi-twitter"></i> <span class="ml-2">Twitter</span></p></a>
                <a href="https://github.com/luqix-lang/luqix"><p class=" text-xl px-2 py-2 mx-3"><i class="fab fa-stack-overflow"></i> <span class="ml-2">Stack Overflow</span></p></a>
            </div>
        </div>
    </div>
</div>`

footer.innerHTML = `
<footer class="flex flex-wrap col-8 col-8-lg col-9-md col-10-sm px-3-sm justify-around">
    <div class="col-2-xxl col-5-md py-10-xxl py-5-md">
        <p class="pacific text-xl">Variable Code</p>
        <p class="arvo">With genuine software</p>
    </div>
    <div class="col-2-xxl col-5-md py-10-xxl py-5-md">
        <p class="font-bold mb-1">On Website</p>
        <a href="docs/docs.html"><p class="py-1">Documentation</p></a>
        <a href=""><p class="py-1">Tutorials</p></a>
        <a href="blog.html"><p class="py-1">Blog</p></a>
        <a href=""><p class="py-1">Support</p></a>
        <a href="docs/install.html"><p class="py-1">Install</p></a>
    </div>
    <div class="col-2-xxl col-5-md py-10-xxl py-5-md">
        <p class="font-bold mb-1">Learn</p>
        <a href="docs/docs.html"><p class="py-1">Documentation</p></a>
        <a href=""><p class="py-1">Tutorials</p></a>
        <a href=""><p class="py-1">Twitter</p></a>
        <a href=""><p class="py-1">Stackoverflow</p></a>
        <a href="https://github.com/luqix-lang/luqix"><p class="py-1">Github</p></a>
    </div>
    <div class="col-2-xxl col-5-md py-10-xxl py-5-md">
        <p class="font-bold mb-1">Details</p>
        <a href=""><p class="py-1">GNU License</p></a>
        <div class="mt-1t">
            <div class="mb-2"><a href="https://github.com/luqix-lang/luqix"><img src="img/social-16px_logo-github.svg" class="img imger" /></a></div>
            <div class="mb-2"><a href=""><img src="img/social-16px_logo-twitter.svg" class="img imger" /></a></div>
            <div class="mb-2"><a href=""><img src="img/social-16px_logo-youtube.svg" class="img imger" /></a></div>
        </div>
    </div>

</footer>
<p class="text-center col-10 opacity-80">@copyright Sept 2023</p>
`


let bar = document.getElementById('bar')
let menu = document.getElementById('menu');
let close_menu = document.getElementById('close-menu');


bar.addEventListener('click', ()=>{
    menu.classList.remove('d-none-md');
    menu.classList.remove('d-none-xxl');
    menu.classList.add('d-flex-md');
})

close_menu.addEventListener('click', ()=>{
    menu.classList.remove('d-flex-md');
    menu.classList.add('d-none-md');
    menu.classList.add('d-none-xxl');
})

