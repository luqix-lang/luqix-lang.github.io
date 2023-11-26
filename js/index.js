footer = `<footer class="pt-10 pt-4-sm col-10 pb-14 pb-5-md px-20 px-15-lg px-5-md px-0-sm mt-15 mt-5-sm mt-10-md alice">
		<div class="flex justify-between">
			<div class="mb-5 mb-0-md px-3-md col-10-md">
				<p class=" text-md-sm"><span class="bold">Quick remainder</span>, the project is full of bugs so its not fit at all for production.</p>
			</div>
			<div class="mb-5 mb-0-md px-3-md col-10-md">
				<p class="bold text-md-sm">Powered by ...</p>
			</div>
		</div>
	</footer>`


function introductionPage(){
	pack = `<svg fill="#6B9BD2" stroke-width="2" width="40px" height="40px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path stroke-width="2" d="M31.89,8.75a.85.85,0,0,0-.17-.25l0,0a1.28,1.28,0,0,0-.22-.17L16.48.12a1,1,0,0,0-1,0L.57,8.28s0,.05-.08.06a1.3,1.3,0,0,0-.23.18,1.25,1.25,0,0,0-.08.12,1,1,0,0,0-.12.23s0,0,0,.06a.92.92,0,0,0,0,.16s0,.06,0,.09V22.81A.86.86,0,0,0,0,23l0,.14a1,1,0,0,0,.48.59l15,8.18.06,0,.08,0A1,1,0,0,0,16,32a1.09,1.09,0,0,0,.35-.07l.07,0,.06,0,15-8.18a1,1,0,0,0,.52-.88V9.18a1,1,0,0,0-.07-.34A.36.36,0,0,0,31.89,8.75ZM15,29.32,2,22.22V10.87L15,18Zm1-13.1-12.91-7L16,2.14l12.91,7Zm14,6-13,7.1V18l13-7.09Z"/>
</svg>`

	code = `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20" stroke="#6B9BD2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

	more = `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="24" height="24" fill="white"/>
<circle cx="12" cy="7" r="0.5" transform="rotate(90 12 7)" stroke="#6B9BD2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="12" r="0.5" transform="rotate(90 12 12)" stroke="#6B9BD2" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="12" cy="17" r="0.5" transform="rotate(90 12 17)" stroke="#6B9BD2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`

	update = `<svg fill="#6B9BD2" width="40px" height="40px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="update-alt" class="icon glyph"><path d="M12,3A9,9,0,0,0,6,5.32V3A1,1,0,0,0,4,3V8a1,1,0,0,0,.92,1H10a1,1,0,0,0,0-2H7.11A7,7,0,0,1,19,12a1,1,0,0,0,2,0A9,9,0,0,0,12,3Z"></path><path d="M19.08,15H14a1,1,0,0,0,0,2h2.89A7,7,0,0,1,5,12a1,1,0,0,0-2,0,9,9,0,0,0,15,6.68V21a1,1,0,0,0,2,0V16A1,1,0,0,0,19.08,15Z"></path></svg>`

	community = `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#6B9BD2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>`
	
	small = `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.25 4.5C5.2835 4.5 4.5 5.2835 4.5 6.25V7.75C4.5 8.16421 4.16421 8.5 3.75 8.5C3.33579 8.5 3 8.16421 3 7.75V6.25C3 4.45507 4.45507 3 6.25 3H7.75C8.16421 3 8.5 3.33579 8.5 3.75C8.5 4.16421 8.16421 4.5 7.75 4.5H6.25Z" fill="#6B9BD2" stroke-width="2" />
<path d="M7.95001 10.25C7.95001 9.00736 8.95737 8 10.2 8H13.7C14.9427 8 15.95 9.00736 15.95 10.25V13.75C15.95 14.9926 14.9427 16 13.7 16H10.2C8.95737 16 7.95001 14.9926 7.95001 13.75V10.25ZM10.2 9.5C9.7858 9.5 9.45001 9.83579 9.45001 10.25V13.75C9.45001 14.1642 9.7858 14.5 10.2 14.5H13.7C14.1142 14.5 14.45 14.1642 14.45 13.75V10.25C14.45 9.83579 14.1142 9.5 13.7 9.5H10.2Z" fill="#6B9BD2" stroke-width="2" />
<path d="M17.75 4.5C18.7165 4.5 19.5 5.2835 19.5 6.25V7.75C19.5 8.16421 19.8358 8.5 20.25 8.5C20.6642 8.5 21 8.16421 21 7.75V6.25C21 4.45507 19.5449 3 17.75 3H16.25C15.8358 3 15.5 3.33579 15.5 3.75C15.5 4.16421 15.8358 4.5 16.25 4.5L17.75 4.5Z" fill="#6B9BD2" stroke-width="2" />
<path d="M17.75 19.5C18.7165 19.5 19.5 18.7165 19.5 17.75V16.25C19.5 15.8358 19.8358 15.5 20.25 15.5C20.6642 15.5 21 15.8358 21 16.25V17.75C21 19.5449 19.5449 21 17.75 21H16.25C15.8358 21 15.5 20.6642 15.5 20.25C15.5 19.8358 15.8358 19.5 16.25 19.5H17.75Z" fill="#6B9BD2" stroke-width="2" />
<path d="M6.25 19.5C5.2835 19.5 4.5 18.7165 4.5 17.75L4.5 16.25C4.5 15.8358 4.16421 15.5 3.75 15.5C3.33579 15.5 3 15.8358 3 16.25V17.75C3 19.5449 4.45507 21 6.25 21H7.75C8.16421 21 8.5 20.6642 8.5 20.25C8.5 19.8358 8.16421 19.5 7.75 19.5H6.25Z" fill="#6B9BD2" stroke-width="2" />
</svg>`

	return `

<p class="text-xl-10 hl mt-4">LPL</p>
<p class="mt-2">A programming language built on research, Luqix is a dynamically typed interpreted high level programming language that ships with alot of amazing concepts and ideas from the very many exisiting programming languages like python and javascript.</p>

<div class="flex flex-wrap justify-between mt-10">
	<div class="col-3-xxl col-5-md px-2-md col-10-sm px-0-sm mb-3">
		<p>${code}</p>
		<p class="bl mt-4">Weaking dynamic typing</p>
		<p class="mt-2">Not something to brag about if used wrongly but its time saving if done in the right way</p>
	</div>

	<div class="col-3-xxl col-5-md px-2-md col-10-sm px-0-sm mb-3">
		<p>${small}</p>
		<p class="bl mt-4">Less code</p>
		<p class="mt-2">Very common to interpreted languages and so this one, modules can be made to pronounce it more.</p>
	</div>

	<div class="col-3-xxl col-5-md px-2-md col-10-sm px-0-sm mb-3 mb-0-sm">
		<p>${pack}</p>
		<p class="bl mt-4">Modulization and packaging</p>
		<p class="mt-2">As easy as handling a big project in chuncks. This too is made possible in luqix code.</p>
	</div>
</div>

<div class="flex flex-wrap justify-between mt-10">
	<div class="col-3-xxl col-5-md px-2-md col-10-sm px-0-sm mb-3">
		<p>${community}</p>
		<p class="bl mt-4">Our Community</p>
		<p class="mt-2">You better join and make up the community, well we are raising on many platforms where possible.</p>
	</div>

	<div class="col-3-xxl col-5-md px-2-md col-10-sm px-0-sm mb-3">
		<p>${update}</p>
		<p class="bl mt-4">Updates and blogs</p>
		<p class="mt-2">Thanks to whatsapp channels, we nolonger even need a blog page, find everything there.</p>
	</div>

	<div class="col-3-xxl col-5-md px-2-md col-10-sm px-0-sm mb-3">
		<p>${more}</p>
		<p class="bl mt-4">More info</p>
		<p class="mt-2">Luqix is so far from stable i guess but we can test it out, its a normal project from scratch.</p>
	</div>
</div>




	`
}


function installPage(){
	return `
<p class="text-xl-7 hl  mt-6">Installation</p>
<p class="mt-2">A programming language built on research, Luqix is a dynamically typed interpreted high level programming language that ships with alot of amazing concepts and ideas from the very many exisiting programming languages like python and javascript.</p>

<div class="flex flex-wrap justify-between mt-10">
	<div class="col-3-xxl col-5-md px-2-md col-10-sm px-0-sm mb-3">
		<p>${code}</p>
		<p class="bl mt-4">Weaking dynamic typing</p>
		<p class="mt-2">Not something to brag about if used wrongly but its time saving if done in the right way</p>
	</div>

	<div class="col-3-xxl col-5-md px-2-md col-10-sm px-0-sm mb-3">
		<p>${small}</p>
		<p class="bl mt-4">Less code</p>
		<p class="mt-2">Very common to interpreted languages and so this one, modules can be made to pronounce it more.</p>
	</div>

	<div class="col-3-xxl col-5-md px-2-md col-10-sm px-0-sm mb-3 mb-0-sm">
		<p>${pack}</p>
		<p class="bl mt-4">Modulization and packaging</p>
		<p class="mt-2">As easy as handling a big project in chuncks. This too is made possible in luqix code.</p>
	</div>
</div>

<div class="flex flex-wrap justify-between mt-10">
	<div class="col-3-xxl col-5-md px-2-md col-10-sm px-0-sm mb-3">
		<p>${community}</p>
		<p class="bl mt-4">Our Community</p>
		<p class="mt-2">You better join and make up the community, well we are raising on many platforms where possible.</p>
	</div>

	<div class="col-3-xxl col-5-md px-2-md col-10-sm px-0-sm mb-3">
		<p>${update}</p>
		<p class="bl mt-4">Updates and blogs</p>
		<p class="mt-2">Thanks to whatsapp channels, we nolonger even need a blog page, find everything there.</p>
	</div>

	<div class="col-3-xxl col-5-md px-2-md col-10-sm px-0-sm mb-3">
		<p>${more}</p>
		<p class="bl mt-4">More info</p>
		<p class="mt-2">Luqix is so far from stable i guess but we can test it out, its a normal project from scratch.</p>
	</div>
</div>


${footer}

	`
}
