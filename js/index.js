
function getStartedPage(){
	return `
<h1>Luqix Programming Language</h1>
<p cds-text="section" class="mt-5">A coding language built on research</p>
<p cds-text="subsection" class="mt-4">Luqix is a dynamically typed interpreted higher level programming language. It ships with amazing concepts and ideas from very many exisiting programming languages out there like python and javascript.</p>

<button class="btn btn-primary mt-8">Get Started Using luqix</button>

<div class="mt-7 ban vh-40"></div>

<p cds-text="section" class="mt-7">Version Beta 0.7 availiable</p>
<p>Still in beta development</p>
<ul cds-text="body" cds-layout="m-t:md m-t:md m-l:xxl" class="list">
	<li>No stable publish is availiable but please bear with what we are providing as we work on stabilizing the software.</li>
		<li ><a class="underlined developingPage mit-link">Install now</a></li>

</ul>

<div class="pt-4" id="index-programming">
	<h2 cds-text="headline medium" cds-layout="m-t:xxl">Programming</h2>
	<p cds-text="subsection medium" cds-layout="m-t:lg"> Luqix code is meant to be easy to read and understand so that you can follow up your code even after a long time without reviewing it. Easy to memorise and direct function names are provided in the interpreter, these do what they are meant to do with very minimal obstruction just for the dynamicness and interpreting.</p>

	<div cds-layout="m-t:lg"><a  href="/pages/developing" class="underlined">Get started with a tutorial</a><br><a class="underlined" href="https://github.com/vmware-clarity" target="_blank" rel="noopener">Install an explore</a></div>
</div>

<div class="pt-4" id="index-support">
	<h2 cds-text="headline medium" cds-layout="m-t:xxl">Support</h2>
	<p cds-text="subsection medium" cds-layout="m-t:lg"> Sharing ideas is a very great way to comeup with something super since those days. The code is provided on github, for personal building since the developing house lacks some machinery. Well any ideas are welcome on any of our platforms and they will be put into consideration.</p>

	<div cds-layout="m-t:lg"><a  href="https://github.com/luqix-lang/luqix" class="underlined">Source code on Github</a></div>
</div>
	`
}


function developingPage(){
	return `
<h2 cds-text="headline medium" class="mt-4">Install Luqix</h2>



`
}
