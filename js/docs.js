caret = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height='18px' width='18px'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
`

$('.caret-right').html(caret)

function _docsPage(){
	return `<div class="flex flex-wrap py-10 py-5-md f16">
  					<div class="col-8 col-7-md col-10-sm pl-10 pl-7-lg pl-0-md px-3-md mb-3">
  						<p class="big-1 segoe mb-3 text-xl-7-lg">Documentation</p>
  						<p class="lh1">The Luqix programming language is built on weak standards atleast for now thats to say there is alot of unoptimized code running in there. But that indicates signs of greater improvements from whats provided.</p>

  						<div class="col-5 col-7-md col-9-sm mt-7 ban">
			 				<p class="ban-off"></p>
			 				<div class="ban-on flex align-items-center">
			 					<img src="img/warning.png" class="img mr-3">
			 					<p class="text-md-sm">Remember the language is very unstable with lots of unspotted bugs running so use at your own risk.</p>
			 				</div>
			 			</div>

			 			<div class="py-3 px-5 px-3-md card bg-white mt-7">
			 				<p class="mt-3 text-xl segoe b6 mb-3">What is luqix ?</p>
			 				
			 				<p class="mb-3 lh1">Luqix (pronounced /loo-kee-shː/) is a high level programming language that brings the real easy to coding. It isn't backended by any module otherwise its low level write to bring the real power to the process. Its simply an <b>interpreter</b> similar to many other languages and provides functionality in almost the same way i guess.</p>
			 				
			 				<p class="lh1">Luqix code is meant to be very readable and enforcing <span class="b6">write less, do more</span> the <a href="https://jquery.com/">jquery</a> style.</p>
			 				<p class="lh1 mb-1 b5">An example</p>

			 				<div class="code mt-5 mb-3">fn hello(name){
  return f'Hello {name}'
}

user = prompt('Name: ')
print(hello(prompt(user)))</div>

							<p class="mt-2 mb-4 lh1">Thats some short code to act as a complete software</p>


							<p class="mt-6 text-xl segoe b6 mb-3">Luqix features</p>
			 				
			 				<p class="mb-3 lh1">A summary list of features to expect in luqix. Alot are inspired by existing ones from other languages and we have a dream to build our own if needed.</p>
			 				
							<ul class="pl-4">
								<li class="lh1">Object oriented</li>
								<li class="lh1">Functional programming</li>
								<li class="lh1">Multitasking and concurrency</li>
								<li class="lh1">File handling</li>
								<li class="lh1">Networking</li>
								<li class="lh1">System calls</li>
								<li class="lh1">Data encoding</li>
							</ul>			 				

							<p class="mt-2 mb-4 lh1">More is to appear most after assist from the comunity. The likes of <b>Graphical User Interface</b> libraries or <b>Web frameworks</b>, much as <b>sockets</b> are present, I think we can build on that.</p>

			 			</div>

  					</div>
  					<div class="col-2 col-3-md col-10-sm"></div>
  				</div>

  				${footer}
  				`

}

