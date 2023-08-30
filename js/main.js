let code = document.getElementsByClassName('code');

let lix = new Flare();

for(let i=0; i <code.length; i++)
    lix.light(code[i]);


let nav = document.getElementById('nav');

nav.innerHTML = `
<div class="col-8 col-10-md px-3-md flex-wrap flex justify-between align-items-center">
    <div class="flex align-items-center justify-between col-10-md">
        <a href="index.html"><p class="text-3xl py-2 pacific">Luqix</p></a>
        <p class="px-2 d-none-xxl d-block-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg></p>
    </div>
    <div class="flex flex-wrap align-items-center justify-center">
        <a href="docs/docs.html"><p class="px-4 fm">Documentation</p></a>
        <a href=""><p class="px-4 fm">Tutorials</p></a>
        <a href=""><p class="px-4 fm">Blog</p></a>
        <a href=""><p class="px-4 fm">Support</p></a>
        <a href=""><p class="px-4 fm">Forum</p></a>
    </div>
    <div class="">
        <a href="https://github.com/luqix-lang/luqix"><p class="bg-white my-2-md py-1 px-3 rounded-full text-black text-md">Download Now <i class="fab fa-github"></i></p></a>
    </div>
</div>`
