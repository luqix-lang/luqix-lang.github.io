

footer = `<div class="pb-10 pt-10 flex flex-wrap justify-center blue">
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
 						<a href=""><p class="mb-3 text-md b5 underlined">Author docs</p></a>
	 					<a href=""><p class="mb-3 text-md b5 underlined">Soon book</p></a>
	 					<a href=""><p class="mb-3 text-md b5 underlined">Tutorials</p></a>
	 					<a href=""><p class="mb-3 text-md b5 underlined">Channels</p></a>
 					</div>
 					<div class="col-4">
 						<a href=""><p class="mb-3 text-md b5 underlined">Download</p></a>
	 					<a href=""><p class="mb-3 text-md b5 underlined">Source code</p></a>
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
 						<a href=""><p class="mb-3 text-md b5 underlined"><i class="fab fa-github"></i> Github</p></a>
 					</div>
 				</div>
 			</div>
 		</div>`


function _indexPage(){
	return `
		<div class="flex flex-wrap blue justify-center py-10">
 			<div class="col-7 col-8-lg col-10-md px-3-md flex flex-wrap">
 				<div class="col-5-xxl col-10-sm">
 					<p class="big-1 text-xl-10-lg text-xl-8-md b6 mt-3 mt-0-sm segoe">Luqix <span class="big-1 b3 text-xl-10-lg text-xl-8-md">Programming</span> <span class="text-xl-10-lg text-xl-8-md big-1 b4">Language</span>.</p>
 					<p class="mt-5 lh1">A language built on research and all our personal preferences.<br>Luqix is an interpreted programming language built by a small team with an aim to simpify coding just like AI is doing. Done by providing greater power in easy weak looks.</p>

 					<div class="flex flex-wrap mt-7 cursor-default">
 						<a class="mb-3-lg" onclick="downloadPage()"><p class="btn-dark btn"><span class="text-white b5">Download Luqix</span><br><span class="col-7-sm mb-3-sm text-white text-md mt-2">latest v0.07.0</span></p></a>

 						<a href="" class="ml-2 cursor-default"><p class="btn-dark-outline btn"><span class="b5">Read Docs</span><br><span class="mt-2 text-md">Less Docs</span></p></a>
 					</div>

 					<p class="mt-5 text-sm">Better to built from source code on <a href="" class="text-black  underlined text-sm">github <i class="fab fa-github"></i></a></p>
 				</div>
 				<div class="col-5-xxl col-10-sm"></div>
 			</div>

 			<div class="col-4 col-5-lg col-7-md col-9-sm mt-10 ban">
 				<p class="ban-off"></p>
 				<div class="ban-on flex align-items-center">
 					<img src="img/warning.png" class="img mr-3">
 					<p class="text-md-sm">Luqix language is in early development so its not suit to build any production project although its turing complete.</p>
 				</div>
 			</div>
 		</div>

 		<div class="py-15 py-10-sm flex justify-center">
 			<div class="col-7 col-8-lg col-10-md px-3-md flex flex-wrap">
 				<p class="text-xl-8 text-xl-5-md mb-3 text-center col-10">What is in Luqix lang?</p>

 				<div class="flex flex-wrap justify-around mt-7">
 					<div class="col-3-xxl col-4-md col-10-sm mb-7-sm">
 						<p class="text-xl-1 text-right text-left-md bold-sm">Light weight and less</p>
 						<p class="mt-4 lh1">Luqix is light weight starting from setup and needs to run a program almost similar to <a href="" class="bold text-black">Lua</a>. By less thats for the <b class="text-black">less code written</b> to do dynamic tasks.</p>
 					</div>
 					<div class="col-3-xxl col-4-md col-10-sm mb-7-sm">
 						<p class="text-xl-1 text-right text-left-md bold-sm">Dynamic and weak typing</p>
 						<p class="mt-4 lh1">Weak typing is not a feature to boost by when needed you can release why it exists. I think <b>interpreters</b> are always dynamic.</p>
 					</div>
 					<div class="col-3-xxl col-4-md col-10-sm">
 						<p class="text-xl-1 text-right text-left-md bold-sm">With all concepts</p>
 						<p class="mt-3 lh1">Luqix aims to provide all concepts that make the work easy in one base. Both <b>existing and new</b> ones. The likes of objects.</p>
 					</div>
 				</div>
 			</div>
 		</div>

 		<div class="py-20 py-10-md flex justify-center smoky">
 			<div class="col-7 col-8-lg col-10-md px-3-md">
 				<p class="text-xl-7 b5 text-center">Get started</p>

 				<div class="flex flex-wrap justify-around mt-7">
 					<div class="col-3-xxl col-4-md col-10-sm mb-6-md">
 						<div class="book b-1 bg-white p-4 b-solid mx-3">
 							<div class="flex book justify-center d-none-sm"><div class="book-mask"></div><img src="img/book.png" class="img col-7"></div>
 							<div class="flex align-items-center justify-evenly justify-between-sm px-2-sm">
 								<div class="mt-5 mt-0-sm">
 									<p class="text-xl b5">Read docs</p>
 									<p class="text-md mt-1">Author docs</p>
 								</div>
 								<p class=""><i class="fas fa-arrow-right"></i></p>
 							</div>
 							
 						</div>
 					</div>
 					<div class="col-3-xxl col-4-md col-10-sm mb-6-md">
 						<div class="book b-1 bg-white p-4 b-solid mx-3">
 							<div class="flex book justify-center d-none-sm"><div class="book-mask"></div><img src="img/example.png" class="img col-7"></div>
 							<div class="flex align-items-center justify-evenly justify-between-sm px-2-sm">
 								<div class="mt-5 mt-0-sm">
 									<p class="text-xl b5">Navigate examples</p>
 									<p class="text-md mt-1">Author samples</p>
 								</div>
 								<p class=""><i class="fas fa-arrow-right"></i></p>
 							</div>
 							
 						</div>
 					</div>
 					<div class="col-3-xxl col-4-md col-10-sm">
 						<div class="book b-1 bg-white p-4 b-solid mx-3">
 							<div class="flex book justify-center d-none-sm downloadPage"><div class="book-mask"></div><img src="img/linux.png" class="img col-7"></div>
 							<div class="flex align-items-center justify-evenly justify-between-sm px-2-sm">
 								<div class="mt-5 mt-0-sm">
 									<p class="text-xl b5">Download</p>
 									<p class="text-md mt-1">Platform dependant</p>
 								</div>
 								<p class=""><i class="fas fa-arrow-right"></i></p>
 							</div>
 							
 						</div>
 					</div>
 				</div>
 			</div>
 		</div>

 		<div class="py-20 py-10-md flex justify-center">
 			<div class="col-7 col-8-lg col-10-md">

 				<div class="flex flex-wrap justify-around mt-7">
 					<div class="col-3-xxl col-4-md col-10-sm mb-5-md px-3-md">
 						<p class="lh1 mb-3 text-xl-2">Luqix code overview</p>
 						<p class="lh1">Luqix code is meant to be as <b>readable</b> as possible.</p>
 						<p class="lh1 mt-3">Code <b>demacation</b> is archived in very many ways, take your prefered one.</p>
 						<p class="lh1 mt-3">I had a dream of having <b>jquery outside the browser.</b></p>
 					</div>
 					<div class="col-3-xxl col-4-md col-10-sm mb-5-md px-2-md">
 						<div class="code code-hl text-xl-sm">let str = require('string')

fn greeting(name) {
	name = str.capitalize(name)
	return f'How are you {name}'
}

get_name = prompt('Name: ')
print(greeting(get_name))</div>
 					</div>
 					<div class="col-3-xxl col-4-md col-10-sm px-2-md">
 						<div class="code code-hl text-xl-sm">let list = require('list')

fruits = ['apple', 'melon', 'orange']
print(fruits)

print(dir(list))
list.pop(fruits)

list.extend(fruits, ['pear', 'carrot'])
</div>
 					</div>
 				</div>

 			</div>
 		</div>


 		${footer}	`
}


function _downloadPage(){
	return `<div class="flex justify-center smoky f16">
 			<div class="col-7 col-8-lg col-10-md py-4 px-3-md">
 				<div class="p-4 bg-white mb-3 card">
 					<p class="text-xl-6 b6 mb-3">Download Luqix Language</p>
 					<p class="mb-3 lh1">Luqix due to its unstability, we provide two methods for its installation, one using binaries and the other is downloading and compiling source code.</p>
 					<p class=" lh1 mb-2">Reasons for compiling with source code so that you can have a build for your own platform if the developer team doesn't support it for now.</p>
 				</div>

 				<div class="p-4 bg-white mb-3 card">
 					<p class="text-xl-2 mb-3">Compiling source code</p>
 					<p class="mb-3 lh1">The luqix language source code is hosted on github and it is free to use compile and redistribute. Updates to the source code by individuals may not be put in consideration but you knows what the future awaits.</p>
 					
 					<div class="flex flex-wrap mt-4">
 						<div class="col-5 col-10-sm">
 							<div class="px-2 px-1-md px-0-sm br-1 b-none-md bd">
 								<p class="lh1 mb-4 pt-2">First you should know that luqix is written in <a href="dlang.org">dlang</a> a low level compiled programming language with so many features thats power up luqix.</p>
 								<p class="mb-3 lh1">So that means the dlang compiler <a href="">dmd</a> should be installed on the compiling platform, there exists many dlang compilers but we have tested <a href="">dmd</a> and recommend mostly it for now.</p>

 								<p class="code2">install dmd</p>
 								<p><a href="https://dlang.org/download.html"><i class="fas fa-arrow-right pr-3"></i> dmd official website</a></p>

 								<p class="code2 mt-5">clone and unzip luqix lang source code</p>
 								<p><a href="https://github.com/luqix-lang/luqix"><i class="fab fa-github pr-3"></i> github.com</a></p>

 								<p class="code2 mt-5">enter luqix folder and run <span class="b6">make</span> command</p>
 								<p>make</p>

 								<p class="mb-3 lh1 mt-5">I don't expect any errors during compiling atleast for windows and linux but if any <b>please report on any of our platform</b> for immediate repair.</p>
 							</div>
 						</div>


 						<div class="col-5 col-10-sm">
 							<div class="px-2 px-1-md px-0-sm">
 								<p class="lh1 mb-4 pt-2">Thats it, no other method is safer that building from source code, so build and distribute to a friend and don't forget to make regular build.</p>
 								<p class="mb-3 lh1">Since the language is in early development and fluent development,  addition of functionality plus fixing bug.</p>

 								<a href="" class="">Privacy policy and terms</a>

 								<p class="mt-5 mb-3">Just to be on a safer side, we are not concerned with changes made to your build. Thank you.</p>

 								<p class="mb-3"><a href="" class="">License</a></p>
 							</div>
 						</div>
 					</div>
 				</div>

 				<div class="flex justify-center p-3 mb-3 card bg-white py-5">
 					<div class="col-5 col-5-lg col-7-md col-10-sm ban">
		 				<p class="ban-off"></p>
		 				<div class="ban-on ban-blue flex align-items-center">
		 					<img src="img/info.png" class="img mr-3">
		 					<p class="text-md-sm">Mac builds are so much welcome to the developer team and so if willing you can distribute a package to this download page.</p>
		 				</div>
		 			</div>
 				</div>

 				<div class="p-3 mb-3 card bg-white">
 					<p class="text-xl-2 mb-3">Downloading binaries</p>
 					<p class="mb-3 lh1">These are compiled already as a single file, fix for embedding and packaging but i would prefer you to build your own from the previous information above since we tested our builds on less platforms.</p>
 					<p class="lh1 mb-3">And know that the mac build is not provided due to a reason you may know or ask individually.</p>

 					<div class="flex flex-wrap justify-start-md justify-around">
 						<div class="col-3-xxl col-4-md col-10-sm py-2 px-2 br-1 bd">
 							<p class="b6 mb-3">Linux</p>
 							<p class="mb-2"><a href="" class="text-md ">Luqix 0.7.1 Nov 29, 2023</a></p>
 						</div>
 						<div class="col-3-xxl col-4-md col-10-sm py-2 px-2 br-1 bd">
 							<p class="b6 mb-3">Windows</p>
 							<p class="mb-2"><a href="" class="text-md ">Luqix 0.7.1 Nov 29, 2023</a></p>
 						</div>
 						<div class="col-3-xxl col-4-md col-10-sm py-2 px-2">
 							<p class="b6 mb-3">Mac</p>
 							<p class="mb-2 opacity-50 user-none">Luqix 0.7.1 Nov 29, 2023</p>
 						</div>
 					</div>
 				</div>

 				<div class="card bg-white p-3">
 					<div class="flex justify-center">
			 			<div class="px-3-md px-0-sm">
			 				<div class="flex flex-wrap justify-around mt-7">
			 					<div class="col-3-xxl col-4-md col-10-sm mb-6-md">
			 						<div class="book b-1 bg-white p-4 b-solid mx-3">
			 							<div class="flex book justify-center d-none-sm"><div class="book-mask"></div><img src="img/book.png" class="img col-7"></div>
			 							<div class="flex align-items-center justify-evenly justify-between-sm px-2-sm">
			 								<div class="mt-5 mt-0-sm">
			 									<p class="text-xl b5">Read docs</p>
			 									<p class="text-md mt-1">Author docs</p>
			 								</div>
			 								<p class=""><i class="fas fa-arrow-right"></i></p>
			 							</div>
			 							
			 						</div>
			 					</div>
			 					<div class="col-3-xxl col-4-md col-10-sm mb-6-md">
			 						<div class="book b-1 bg-white p-4 b-solid mx-3">
			 							<div class="flex book justify-center d-none-sm"><div class="book-mask"></div><img src="img/example.png" class="img col-7"></div>
			 							<div class="flex align-items-center justify-evenly justify-between-sm px-2-sm">
			 								<div class="mt-5 mt-0-sm">
			 									<p class="text-xl b5">Navigate examples</p>
			 									<p class="text-md mt-1">Author samples</p>
			 								</div>
			 								<p class=""><i class="fas fa-arrow-right"></i></p>
			 							</div>
			 							
			 						</div>
			 					</div>
			 					<div class="col-3-xxl col-4-md col-10-sm">
			 						<div class="book b-1 bg-white p-4 b-solid mx-3 downloadPage">
			 							<div class="flex book justify-center d-none-sm"><div class="book-mask"></div><img src="img/linux.png" class="img col-7"></div>
			 							<div class="flex align-items-center justify-evenly justify-between-sm px-2-sm">
			 								<div class="mt-5 mt-0-sm">
			 									<p class="text-xl b5">Download</p>
			 									<p class="text-md mt-1">Platform dependant</p>
			 								</div>
			 								<p class=""><i class="fas fa-arrow-right"></i></p>
			 							</div>
			 							
			 						</div>
			 					</div>
			 				</div>
			 			</div>
			 		</div>
 				</div>

 			</div>
 		</div>

		${footer}
	`
}
