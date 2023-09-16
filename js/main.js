let code = document.getElementsByClassName('code');

let lix = new Flare();

for(let i=0; i <code.length; i++)
    lix.light(code[i]);


let nav = document.getElementById('nav');
    foot = document.getElementById('footer');

nav.innerHTML = `
<div class="col-8 col-10-md px-3-md flex-wrap flex justify-between align-items-center z-10">
    <div class="flex align-items-center justify-start col-10-md">
        <p id="bar" class="px-2 mr-2 d-none-xxl d-block-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg></p>
        <a href="index.html"><p class="text-xl f5 py-3  ">Luqix</p></a>
    </div>
    <div class="flex-xxl d-none-md flex-wrap align-items-center justify-center">
        <a href="docs/docs.html"><p class="px-4 fm">Documentation</p></a>
        <a href=""><p class="px-4 fm">Tutorials</p></a>
        <a href="blog.html"><p class="px-4 fm">Blog</p></a>
        <a href=""><p class="px-4 fm">Support</p></a>
        <a href=""><p class="px-4 fm">Forum</p></a>
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
                <a href="index.html"><p class="txt text-xl py-3 bold px-2 mx-3 ">Luqix</p></a>
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
<footer class="flex flex-wrap col-8 col-8-lg col-9-md col-10-sm px-2-sm justify-around">
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
            <div class="mb-2"><a href="https://github.com/luqix-lang/luqix"><img src="/home/rogers/Downloads/nc-socials/nc-socials/colored/svgs/social-color-1_logo-github.svg" class="img imger" /></a></div>
            <div class="mb-2"><a href=""><img src="/home/rogers/Downloads/nc-socials/nc-socials/colored/svgs/social-color-1_logo-twitter.svg" class="img imger" /></a></div>
            <div class="mb-2"><a href=""><img src="/home/rogers/Downloads/nc-socials/nc-socials/colored/svgs/social-color-1_logo-youtube.svg" class="img imger" /></a></div>
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

