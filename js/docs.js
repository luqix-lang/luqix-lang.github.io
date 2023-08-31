let code = document.getElementsByClassName('code');

let side = document.getElementById('sidebar');

AOS.init();

let lix = new Flare();

for(let i=0; i <code.length; i++)
    lix.light(code[i]);


side.innerHTML = `
<div class="page sidebar" >
     <a href="../index.html"><p class="text-2xl text-white pacific">Luqix</p></a>
     <a href="docs.html"><p class="mt-1 py-1">Intro</p></a>
     <a href="install.html"><p class="py-1">Installation</p></a>
     <a href="changelog.html"><p class="py-1">Changelog</p></a>

     <div class="mt-4">
         <p class="text-sm text-white fm">LEARN BASICS</p>
         <a href=""><p class="py-1">Variables</p></a>
         <a href=""><p class="py-1">Functions</p></a>
         <a href=""><p class="py-1">For loop</p></a>
         <a href=""><p class="py-1">While loop</p></a>
         <a href=""><p class="py-1">If statement</p></a>
         <a href=""><p class="py-1">Try Except statement</p></a>
         <a href=""><p class="py-1">Switch statement</p></a>
         <a href=""><p class="py-1">Import statement</p></a>
     </div>

     <div class="mt-4">
         <p class="text-sm text-white fm">BUILTIN MODULES</p>
         
         <p class="text-sm mt-3 text-white fm">INTERPRETER APIs</p>
         <a href=""><p class="py-1">Locals</p></a>
         <a href=""><p class="py-1">Sys</p></a>

         <p class="text-sm mt-3 text-white fm">MATH LOGIC</p>
         <a href=""><p class="py-1">Math</p></a>
         <a href=""><p class="py-1">Random</p></a>

         <p class="text-sm mt-3 text-white fm">SYSTEM APIs</p>
         <a href=""><p class="py-1">System</p></a>
         <a href=""><p class="py-1">Time</p></a>
         <a href=""><p class="py-1">Threads</p></a>
         <a href=""><p class="py-1">Parallelism</p></a>
         <a href=""><p class="py-1">Process</p></a>

         <p class="text-sm mt-3 text-white fm">DATA MANUPLATORS</p>
         <a href=""><p class="py-1">Dict</p></a>
         <a href=""><p class="py-1">List</p></a>
         <a href=""><p class="py-1">String</p></a>
         <a href=""><p class="py-1">Bytes</p></a>

         <p class="text-sm mt-3 text-white fm">FILE HANDLING</p>
         <a href=""><p class="py-1">file</p></a>
         <a href=""><p class="py-1">Path</p></a>
         <a href=""><p class="py-1">Reg</p></a>

         <p class="text-sm mt-3 text-white fm">ENCODING</p>
         <a href=""><p class="py-1">Base64</p></a>
         <a href=""><p class="py-1">Json</p></a>
         

         <p class="text-sm mt-3 text-white fm">NETWORKING</p>
         <a href=""><p class="py-1">Socket</p></a>
         <a href=""><p class="py-1">Websocket</p></a>
         <a href=""><p class="py-1">Url</p></a>
     </div>

     <a href=""><p class="py-1 mt-3">Support</p></a>
     <a href=""><p class="py-1">Term and conditions</p></a>

 </div>
`

let navd = document.getElementById('nav-doc');
    ID = document.getElementById('ID');

navd.innerHTML = `
<div class="flex justify-between align-items-center px-4">
     <a href="../index.html"><p class="pacific font-light text-2xl">Luqix</p></a>
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
