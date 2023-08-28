let code = document.getElementsByClassName('code');

let lix = new Flare();

for(let i=0; i <code.length; i++)
    lix.light(code[i]);



let footer = document.getElementById('foot');

footer.innerHTML = `
<footer class="py-20-xxl py-10-lg py-5-sm flex doc justify-center">
            <div class="grid-container grid-5 col-10-lg grid-3-lg grid-2-sm px-2-lg col-7-xxl">
                <div class="col">
                    <p class="f5">Variable code<br>with genuine software</p>
                </div>
                <div class="col">
                    <p class="f5 mt-3-md">Learn</p>
                    <a href=""><p class="py-1 mt-2">Documentation</p></a>
                    <a href=""><p class="py-1">Watch Tutorial</p></a>
                </div>
                <div class="col">
                    <p class="f5 mt-3-md">Contact Us</p>
                    <a href=""><p class="py-1 mt-2">Twitter</p></a>
                    <a href=""><p class="py-1">Facebook</p></a>
                    <a href=""><p class="py-1">Youtube</p></a>
                </div>
                <div class="col">
                    <p class="f5 mt-3-md">On Website</p>
                    <a href="index.html"><p class="py-1 mt-2">Home</p></a>
                    <a href="summary.html"><p class="py-1 mt-2">Documentation</p></a>
                    <a href="download.html"><p class="py-1">Download</p></a>
                    <a href="blog.html"><p class="py-1">Blog</p></a>
                </div>
                <div class="col">
                    <p class="mt-3-md">copyright @luqix</p>
                    <p class="py-2">GNU license</p>
                    <div class="flex">
                        <p class="px-2"><i class="bi bi-github text-lg"></i></p>
                        <p class="px-2"><i class="bi bi-twitter text-lg"></i></p>
                        <p class="px-2"><i class="bi bi-youtube text-lg"></i></p>
                    </div>
                </div>
                <p class="px-2 text-center col-10 mt-10 opacity-80">Updated 29 August 2023</p>
            </div>
        </footer>
`

let nav = document.getElementById('nav');

nav.innerHTML=`
<nav class="flex px-20-xxl px-5-lg px-2-sm py-3 align-items-center justify-between">
    <div>
        <a href="index.html"><p class="text-xl-3 text-xl-sm f9">Luqix</p></a>
    </div>
    <div class="flex align-items-center justify-end">
        <a href="download.html"><p class="px-3 px-2 text-md-sm py-2">Download</p></a>
        <a href="summary.html"><p class="px-3 px-2 text-md-sm py-2">Docs</p></a>
        <a href="blog.html"><p class="px-3 px-2 text-md-sm py-2">Blog</p></a>
    </div>
</nav>
`