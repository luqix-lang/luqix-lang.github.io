let nav = document.getElementById('nav');

nav.innerHTML = `
<div class="col-8 col-10-md px-3-md flex-wrap flex justify-between align-items-center z-10">
    <div class="flex py-3 align-items-center justify-between col-10-md">
        <a href="../index.html"><p class="text-xl f5 logo">Luqix</p></a>
        <p id="bar" class="px-2 d-none-xxl d-block-md"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg></p>
    </div>
    <div class="flex-xxl d-none-md flex-wrap align-items-center justify-center">
        <a href="docs.html"><p class="px-4 fm flex flex-nowrap align-item-center nav-on">Documentation &nbsp; 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" width="21px" height="21px">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
        </p></a>
        <a href=""><p class="px-4 fm flex flex-nowrap align-items-center">Tutorials &nbsp; 
            <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="21px" height="21px">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"></path>
            </svg>
        </p></a>
        <a href="../blog.html"><p class="px-4 fm flex align-items-center flex-nowrap">Blog &nbsp;
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
        <div class="">
          <input type="search" class="outline-0 py-2 px-3 rounded-md w-100 placeholder:text-gray-300" d="searcher" placeholder="Search docs" />
        </div>
    </div>
    <div class="d-none-md menu d-none-xxl justify-center align-items-center" id="menu">
        <div class="flex relative align-item-center justify-center bg-white col-9 h-90 rounded-md">
            <p id="close-menu" class="text-right absolute top-1 right-0 text-3xl px-3 txt fm"><i class="bi bi-x txt"></i></p>
            <div class="col-10">
                <a href="index.html"><p class="txt text-xl f5 py-3 px-2 mx-3">Luqix</p></a>
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
<div class="page sidebar border-l md:border-l-0 md:mt-5 rounded-lg sm:shadow-lg relative z-40 sm:shadow-none " >
     <a href="docs.html"><p class="mt-1 py-1">Intro</p></a>
     <a href="install.html"><p class="py-1">Installation</p></a>
     <a href="changelog.html"><p class="py-1">Changelog</p></a>

     <p class="mt-4 cat">1. Learn basics</p>
     <div class="ml-2">
         <a href="run.html"><p class="py-1">Get Started</p></a>
         <a href="keywords.html"><p class="py-1">Keywords</p></a>
         <a href="variables.html"><p class="py-1">Variables</p></a>
         <a href="functions.html"><p class="py-1">Functions</p></a>
         <a href="for.html"><p class="py-1">For loop</p></a>
         <a href="while.html"><p class="py-1">While loop</p></a>
         <a href="if.html"><p class="py-1">If statement</p></a>
         <a href="try.html"><p class="py-1">Try Except statement</p></a>
         <a href="import.html"><p class="py-1">Import statement</p></a>
         <a href="switch.html"><p class="py-1">Switch statement</p></a>
     </div>

     <p class="mt-4 cat">2. Builtin modules</p>
     <div class="ml-2">
         <p class=" mt-3  cat">Interpreter APIs</p>
         <a href="locals.html"><p class="py-1">Locals</p></a>
         <a href="sys.html"><p class="py-1">Sys</p></a>

         <p class="mt-3 cat">a. Math logic</p>
         <a href="math.html"><p class="py-1">Math</p></a>
         <a href="random.html"><p class="py-1">Random</p></a>

         <p class=" mt-3  cat">b. System APIs</p>
         <a href="os.html"><p class="py-1">Os</p></a>
         <a href="time.html"><p class="py-1">Time</p></a>
         <a href=""><p class="py-1">Threads</p></a>
         <a href=""><p class="py-1">Parallelism</p></a>
         <a href=""><p class="py-1">Process</p></a>

         <p class=" mt-3  cat">c. Data manuplators</p>
         <a href=""><p class="py-1">Dict</p></a>
         <a href=""><p class="py-1">List</p></a>
         <a href=""><p class="py-1">String</p></a>
         <a href=""><p class="py-1">Bytes</p></a>

         <p class=" mt-3  cat">d. File handling</p>
         <a href=""><p class="py-1">file</p></a>
         <a href=""><p class="py-1">Path</p></a>
         <a href=""><p class="py-1">Reg</p></a>
         <a href="sqlite3.html"><p class="py-1">Sqlite3</p></a>


         <p class=" mt-3  cat">e. Encoding</p>
         <a href="base64.html"><p class="py-1">Base64</p></a>
         <a href="json.html"><p class="py-1">Json</p></a>
         

         <p class=" mt-3  cat">f. Networking</p>
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
<div class="flex justify-between align-items-center px-4 z-90 color">
     <a href="../index.html"><p class="logo">Luqix <span class="font-normal italic">.0.1</span></p></a>
     <p class="text-md">${ID.innerText.toUpperCase()}</p>
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
