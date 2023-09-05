let nav = document.getElementById('nav');

nav.innerHTML = `
<div class="col-8 col-10-md px-3-md flex-wrap flex justify-between align-items-center z-10">
    <div class="flex align-items-center justify-between col-10-md">
        <a href="../index.html"><p class="text-3xl py-2 pacific">Luqix</p></a>
        <p id="bar" class="px-2 d-none-xxl d-block-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg></p>
    </div>
    <div class="flex-xxl d-none-md flex-wrap align-items-center justify-center">
        <a href="docs.html"><p class="px-4 fm">Documentation</p></a>
        <a href=""><p class="px-4 fm">Tutorials</p></a>
        <a href="../blog.html"><p class="px-4 fm">Blog</p></a>
        <a href=""><p class="px-4 fm">Support</p></a>
        <a href=""><p class="px-4 fm">Forum</p></a>
    </div>
    <div class="d-block-xxl d-none-md">
        <a href="https://github.com/luqix-lang/luqix"><p class="bg-white my-2-md py-1 px-3 rounded-full text-black text-md">Install Now&nbsp; <i class="bi bi-github txt"></i></p></a>
    </div>
    <div class="d-none-md menu d-none-xxl justify-center align-items-center" id="menu">
        <div class="flex relative align-item-center justify-center bg-white col-9 h-90 rounded-md">
            <p id="close-menu" class="text-right absolute top-1 right-0 text-3xl px-3 txt fm"><i class="bi bi-x txt"></i></p>
            <div class="col-10">
                <a href="index.html"><p class="txt text-xl py-3 px-2 mx-3 pacific">Luqix</p></a>
                <a href="docs/docs.html"><p class="txt sm:text-lg py-2 px-2 mx-3">Document</p></a>
                <a href="docs/docs.html"><p class="txt sm:text-lg py-2 px-2 mx-3">Tutorials</p></a>
                <a href="blog.html"><p class="txt sm:text-lg py-2 px-2 mx-3">Blog</p></a>
                <a href="docs/docs.html"><p class="txt sm:text-lg py-2 px-2 mx-3">Support</p></a>
                <a href="docs/docs.html"><p class="txt sm:text-lg py-2 px-2 mx-3">Forum</p></a>
                <a href="https://github.com/luqix-lang/luqix"><p class="txt text-xl px-2 py-3 border-t mx-3"><i class="bi bi-github"></i></p></a>
            </div>
        </div>
    </div>
</div>`

let code = document.getElementsByClassName('code');

let side = document.getElementById('sidebar');

AOS.init();

let lix = new Flare();

for(let i=0; i <code.length; i++)
    lix.light(code[i]);


side.innerHTML = `
<div class="page sidebar sm:shadow-lg border-r-2 border-r-blue-500 sm:border-r-0 shadow-cyan-400 relative z-40 sm:shadow-none " >
     <a href="docs.html"><p class="mt-1 py-1">Intro</p></a>
     <a href="install.html"><p class="py-1">Installation</p></a>
     <a href="changelog.html"><p class="py-1">Changelog</p></a>

     <p class="mt-4 font-bold">1. Learn basics</p>
     <div class="ml-2">
         <a href="variables.html"><p class="py-1">Variables</p></a>
         <a href="functions.html"><p class="py-1">Functions</p></a>
         <a href="for.html"><p class="py-1">For loop</p></a>
         <a href="while.html"><p class="py-1">While loop</p></a>
         <a href="if.html"><p class="py-1">If statement</p></a>
         <a href="try.html"><p class="py-1">Try Except statement</p></a>
         <a href="import.html"><p class="py-1">Import statement</p></a>
         <a href="switch.html"><p class="py-1">Switch statement</p></a>
     </div>

     <p class="mt-4 font-bold">2. Builtin modules</p>
     <div class="ml-2">
         <p class=" mt-3  font-bold">Interpreter APIs</p>
         <a href="locals.html"><p class="py-1">Locals</p></a>
         <a href="sys.html"><p class="py-1">Sys</p></a>

         <p class="mt-3 font-bold">a. Math logic</p>
         <a href="math.html"><p class="py-1">Math</p></a>
         <a href="random.html"><p class="py-1">Random</p></a>

         <p class=" mt-3  font-bold">b. System APIs</p>
         <a href="system.html"><p class="py-1">System</p></a>
         <a href=""><p class="py-1">Time</p></a>
         <a href=""><p class="py-1">Threads</p></a>
         <a href=""><p class="py-1">Parallelism</p></a>
         <a href=""><p class="py-1">Process</p></a>

         <p class=" mt-3  font-bold">c. Data manuplators</p>
         <a href=""><p class="py-1">Dict</p></a>
         <a href=""><p class="py-1">List</p></a>
         <a href=""><p class="py-1">String</p></a>
         <a href=""><p class="py-1">Bytes</p></a>

         <p class=" mt-3  font-bold">d. File handling</p>
         <a href=""><p class="py-1">file</p></a>
         <a href=""><p class="py-1">Path</p></a>
         <a href=""><p class="py-1">Reg</p></a>

         <p class=" mt-3  font-bold">e. Encoding</p>
         <a href=""><p class="py-1">Base64</p></a>
         <a href=""><p class="py-1">Json</p></a>
         

         <p class=" mt-3  font-bold">f. Networking</p>
         <a href=""><p class="py-1">Socket</p></a>
         <a href="websocket.html"><p class="py-1">Websocket</p></a>
         <a href=""><p class="py-1">Url</p></a>
     </div>

     <a href=""><p class="py-1 mt-3">Support</p></a>
     <a href=""><p class="py-1">Term and conditions</p></a>

 </div>
`

let navd = document.getElementById('nav-doc');
    ID = document.getElementById('ID');

navd.innerHTML = `
<div class="flex justify-between align-items-center px-4 py-1 z-90">
     <a href="../index.html"><p class="pacific font-light text-2xl">Luqix-v1.00.1</p></a>
     <p class="">${ID.innerText.toUpperCase()}</p>
     <p class="px-2" id="barz">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
     </p>
 </div>
`

barz.addEventListener('click', ()=>{
    if(side.classList.contains('d-none-sm')){
        side.classList.remove('d-none-sm');
        side.classList.add('show-side');
    } else {
        side.classList.remove('show-side');
        side.classList.add('d-none-sm');
    }
})
