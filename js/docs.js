caret = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" height='18px' width='18px'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
</svg>
`

$('.caret-right').html(caret);

function _docsPage(){
	return `<div class="flex flex-wrap py-10 py-5-md f16">
  					<div class="col-8 col-7-md col-10-sm pl-10 pl-7-lg pl-0-md px-3-md mb-3">
  						<p class="text-xl-8 segoe mb-3 text-xl-7-lg">Documentation</p>
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

function _docs_basicsPage(){
	return `<div class="flex flex-wrap-sm py-10 py-5-md f16">
  					<div class="col-8 col-7-md col-10-sm pl-10 pl-7-lg pl-0-md px-3-md mb-3">
  						<p class="text-xl-9 segoe mb-3 text-xl-7-lg">Basics and syntax</p>
  						<p class="lh1">Luqix code is written in the C way or indentive way, thats to say you can use alot of whiespaces in your code or non at all. The indentive code may not be very safe now as bugs may not be visible to the parser but if you write it properly you are on a safe side or why not rely on the <a href="">C way</a>.</p>

  						

			 			<div id="basic-variables" class="py-3 px-5 px-3-md card bg-white mt-7">
			 				<p class="mt-3 text-xl segoe b6 mb-3">Variables</p>
			 				
			 				<p class="mb-3 lh1">Luqix does have things like <a href="">immutable</a> and <a href="">constant</a> variables since one's code implementation is enough to have these in the code, never the less if a super need come who knows.</p>

			 				<p class="mb-3 lh1">The exists no global variables but using <a href="">lists trick</a> can achieve that, the options are endless.</p>

			 				<div class="code mt-5 mb-3">name = 'Luqix language'

version = '0.7.1'</div>

							<p class="mt-2 mb-3 lh1">Variables don't have types, they can handle any a datatype which changes throughtout the execution.</p>

			 				<p class="mb-3 lh1">Scoped variables like in functions are not available outside their scope.</p>

			 				<div class="code mt-5 mb-3">fn scope_fn(){
    a = 'abcdef'
}

//error 'a' is not defined in this scope.
print(a)</div>
						</div>


			 			<div id="basic-functions" class="py-3 px-5 px-3-md card bg-white mt-5">
							<p class="mt-6 text-xl segoe b6 mb-3">Functions</p>
			 				
			 				<p class="mb-3 lh1">As usual, luqix functions are blocks of reusable and organised code that usually perform a single, related action. They are <b>arguments</b> if assigned parameters and <b>have a name</b> that is used to circulate it throughout the code.</p>
			 				<p class="mb-3 lh1">Functions return data after performing some task when assigned to by the <b>return</b> keyword or it defaults to none.</p>

			 				<div class="code mt-5 mb-3">fn fn_name(a, b, c){
    print(a, b, c)
    return a + b
}</div>
			 				<p class="mb-3 lh1">Calling a function is easy but remember to supply it with its right arguments or else an <a href="">error</a> with araise.</p>

			 				<div class="code mt-5 mb-3">fn_name(3, 7, 0)
// 370</div>
			 				<p class="mb-3 lh1">Functions can have <b>default</b> parameters that are over written if you want.</p>

			 				<div class="code mt-5 mb-3">fn hello(name='Anonymous'){
    print(f'hello {name}')
}

// both are okay
hello('Alice') // hello Alice
hello() // hello Ano
</div>
							<p class="mt-2 mb-3 lh1">Default function parameters are not safe to use.</p>

			 			</div>


			 			<div id="basic-if" class="py-3 px-5 px-3-md card bg-white mt-5">
							<p class="mt-6 text-xl segoe b6 mb-3">If <span class="text-lg">statement</span></p>
			 				
			 				<p class="mb-3 lh1">If statements are very similar to the ones you know taking company with the <b>elif</b> and <b>else</b>. The <b>if</b> and <b>elif</b> keywords are followed by a condition statement then their scoped code while <b>else</b> just has its scoped code.</p>
			 				<p class="mb-3 lh1">This statement is not scoped and any variables defined in the statement are still present out side their parent scope no matter their <a href="">nesting</a>.</p>

			 				<div class="code mt-5 mb-3">if true
    print('hello world')
</div>

							<div class="code mt-5 mb-3">password='01234'
pwd = prompt(': ')

if (pwd == password)
    print('logged in')
elif (pwd == '43210')
    print('temp log in')
else
    print('Wrong password')
</div>

			 				<p class="lh1">If one executes the others won't bother and the execution starts from top to bottom.</p>
			 				<p class="mb-3 lh1">Calling <b>break</b> and <b>return</b> from here is very okay since there is no new scope formed.</p>

			 			</div>

			 			<div id="basic-while" class="py-3 px-5 px-3-md card bg-white mt-5">
							<p class="mt-6 text-xl segoe b6 mb-3">While <span class="text-lg">loop</span></p>
			 				
			 				<p class="mb-3 lh1">Similar to the <b>if statement</b>, no new scope is formed for loops. This while loop runs as long as the supplied <b>condition</b> statement is <a href="">true</a> or if the <b>break</b> is called.</p>
			 				<p class="mb-3 lh1">Variables formed here are found in the parent scope too and we recommend not implementing any scoped state just to keep a safe habit.</p>

			 				<div class="code mt-5 mb-3">// will never stop
while (true){
    print('hello world!')
}
</div>

							<div class="code mt-5 mb-3">count = 10000

while count {
    print(count)
    count = count-1
}

print('done')
</div>

			 				<p class="lh1">The <b>break</b> keyword is very useful with its sister <b>continue</b> that is not implimented yet in the build, that will be fine soon.</p>
							
							<div class="code mt-5 mb-3">count = 100

// ends at 77
while count {
    print(count)

    if(count == 77)
        break

    count = count-1
}

</div>

			 			</div>

			 			<div id="basic-for" class="py-3 px-5 px-3-md card bg-white mt-5">
							<p class="mt-6 text-xl segoe b6 mb-3">For <span class="text-lg">loop</span></p>
			 				
			 				<p class="mb-3 lh1">This is like the while loop just with a fixed <a href="">incrementing</a> or <a href="">decrementing</a> statement. Its fit for counts, any loop involving numbers.</p>
			 				<p class="mb-3 lh1">And also here <b>break</b> works very fine.</p>


							<div class="code mt-5 mb-3">fruits = ['apple', 'banana', 'pear', 'cherry']

for(let i=0; i < len(fruits); i++)
    print(fruits[i])
</div>

							<p class="mt-4 pt-2 mb-2 lh1 b6 segoe">How it works ?</p>
			 				<p class="mb-3 lh1">First you <b>let</b> a random variable lets say i. Follow with an inequality statement involving <b>i</b>. The use <a href="">++</a> to increment or <a href="">--</a> to decrement. <b>i</b> in the start i can be assigned to an <b>interger</b> as its starting value that defaults to 0.</p>

			 			</div>

			 			<div id="basic-classes" class="py-3 px-5 px-3-md card bg-white mt-5">
							<p class="mt-6 text-xl segoe b6 mb-3">Classes</p>
			 				
			 				<p class="mb-3 lh1">This is a special case as luqix classes are used to create your own <a href="">datatypes</a> call them objects. They are a cool building block.</p>
			 				<p class="mb-3 lh1">You give them a name then functions and variables in there scope all become there attributes, this includes the <b>__init__</b> function <b>self</b> variables.</p>

			 				<div class="code mt-5 mb-3">class Student{
    fn __init__(name, age){
        self.name = name
        self.age = age
    }

    fn hey(){
        print(f'My name is {self.name} and am {self.age} years old')
    }
}</div>
			 				<p class="lh1">We have created a class or type Student thats kept in our scope for object duplication. So we call the type like a function to create an <a href="">instant</a> of the type. You supply arguments which will be for the <b>__init__</b> function if present.</p>

							<div class="code mt-5 mb-3">stream = [Student('Alice', 18), Student('Joan', 17)]

stand = Student('Lin', 20)
print(stand.age, stand.age) // Lin 20
</div>

			 				<p class="lh1">You can create as many of these as possible, thats what makes luqix object oriented.</p>

			 			</div>

			 			<div id="basic-from" class="py-3 px-5 px-3-md card bg-white mt-5">
							<p class="mt-6 text-xl segoe b6 mb-3">Import and from</p>
			 				
			 				<p class="mb-3 lh1">These two are used to utilize code thats broken into different file. This is very handy in terms of gigantic projects or distributing code <a href="">coming soon</a>.</p>

			 				<p class="mb-3 lh1"><b>import</b> is followed by filenames without the extension <b>.lqs</b>.</p>

			 				<div class="code mt-5 mb-3">import calculations
import trigonometry as trig

//     folder/file
import maths.statistics as stat</div>
			 				<p class="lh1">All these files must be in paths in the <a href="">sys.path</a> list, which you can update like append to from any where in your code.</p>

							<div class="code mt-5 mb-3">sys = require('sys')

print(sys.path)</div>

			 				<p class="lh1">Atleast the current working directory is already there</p>

			 				<p class="mb-3 lh1 mt-4"><b>from</b> is followed by a string (file or folder name) from scope then an attribute import statement.</p>

			 				<div class="code mt-5 mb-3">from 'maths' import statistics

check = 'maths'
from check import trig</div>
			 				<p class="lh1">Creating modules deserves a tutorial so just wait for it since the process could get complex at first.</p>

			 			</div>


  					</div>
  					<div class="col-2-xxl col-3-md col-10-sm navigator">
  						<div class="pt-4">
  							<p class="b6 segoe mb-2 text-lg">On this page</p>
  							<p class="mb-1"><a href="#basic-variables" class="px-1">Variables</a></p>
  							<p class="mb-1"><a href="#basic-functions" class="px-1">Functions</a></p>
  							<p class="mb-1"><a href="#basic-if" class="px-1">If statement</a></p>
  							<p class="mb-1"><a href="#basic-while" class="px-1">While loop</a></p>
  							<p class="mb-1"><a href="#basic-for" class="px-1">For loop</a></p>
  							<p class="mb-1"><a href="#basic-classes" class="px-1">Classes</a></p>
  							<p class="mb-1"><a href="#basic-from" class="px-1">from and import</a></p>
  						</div>
  					</div>
  				</div>


	${footer}
`

}