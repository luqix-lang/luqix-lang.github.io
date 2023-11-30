
let nav = document.getElementById('nav');

nav.innerHTML = `<div class="nav py-1 blue flex sticky-to justify-center pl-2 overflow-x-scroll-s">
		<nav class="col-10-xxl col-10-md flex justify-between overflow-x-scroll-sm">
			<div class="flex align-items-center justify-start justify-between col-10-sm">
				<a href="index.html" class="cursor-pointer"><p class="title py-2">Luqix Language</p></a>

				<div class="flex align-items-center justify-start ml-4">
					<p class="py-2 px-2 cursor-pointer"><a href="download.html" class="b6">Download</a></p>
					<p class="py-2 px-2 cursor-pointer"><a href="docs/docs.html" class="b6">Docs</a></p>
					<p class="py-2 px-2 cursor-pointer"><a class="b6">Blog</a></p>
					<p class="py-2 px-2 cursor-pointer"><a href="https://github.com/luqix-lang/luqix"><i class="fab fa-github icon"></i></a></p>
				</div>
			</div>
			<div class="align-items-center justify-end search flex">
				<p class="px-2"><i class="fas fa-search"></i></p>
				<input type="" placeholder="Search docs" name="" class="pr-2">
			</div>
		</nav>
	</div>`


let bod = document.getElementsByTagName('body')[0];


bod.innerHTML += `
	<div class="pb-10 pt-10 flex flex-wrap justify-center blue">
 			<p class="text-center text-xl-5 col-10 mb-4">Thank you</p>
 			<div class="col-7 bt-1 flex flex-wrap pt-5 col-8-lg col-10-md px-3-md" style="border-color: #ffffff50;">
 				<div class="col-2 col-10-md mb-5-md">
 					<p class="segoe"><span class="b6 text-xl-2">Luqix</span><span class="b3 text-xl-2">Language</span></p>
 					<p class="mt-2 mb-5 text-md">Made and maintained by <span class="b5">Variable<span class="b3">Code</span></span></p>

 					<p class="segoe"><span class="text-xl">Variable</span><span class="b3 text-xl">Code</span></p>
 					<p class="mb-3 mt-2 text-md">@ 2023 Nov</p>
 				</div>
 				<div class="col-4 col-10-md mb-5-md flex flex-wrap">
 					<p class="mb-4 b5 text-xl-1 col-10">Using luqix</p>

 					<div class="col-4">
 						<a href="docs/docs.html"><p class="mb-3 text-md b5 underlined">Author docs</p></a>
	 					<a href=""><p class="mb-3 text-md b5 underlined">Soon book</p></a>
	 					<a href=""><p class="mb-3 text-md b5 underlined">Tutorials</p></a>
	 					<a href=""><p class="mb-3 text-md b5 underlined">Channels</p></a>
 					</div>
 					<div class="col-4">
 						<a href="download.html"><p class="mb-3 text-md b5 underlined">Download</p></a>
	 					<a href="https://github.com/luqix-lang/luqix"><p class="mb-3 text-md b5 underlined">Source code</p></a>
	 					<a href=""><p class="mb-3 text-md b5 underlined">Online soon</p></a>
 					</div>
 				</div>
 				<div class="col-4 col-10-md flex flex-wrap">
 					<p class="mb-4 b5 text-xl-1 col-10">Community</p>

 					<div class="col-4">
 						<a href=""><p class="mb-3 text-md b5 underlined"><i class="fab fa-whatsapp"></i> Whatsapp</p></a>
 						<a href=""><p class="mb-3 text-md b5 underlined"><i class="fab fa-stack-overflow"></i> Stack Overflow</p></a>
 						<a href=""><p class="mb-3 text-md b5 underlined"><i class="fab fa-twitter"></i> LuqixLang</p></a>
 					</div>
 					<div class="col-4">
 						<a href="https://github.com/luqix-lang/luqix"><p class="mb-3 text-md b5 underlined"><i class="fab fa-github"></i> Github</p></a>
 					</div>
 				</div>
 			</div>
 		</div>
`


let hd = document.getElementsByClassName('code');
let syn = new Flare();

for(let i=0; i < hd.length; i++){
	syn.light(hd[i]);
}