function handleMenu() {
    const navDialog = document.getElementById("nav-dialog");
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const closeIcon = document.getElementById("close-icon");
    // Toggle the visibility of the mobile menu
    if (navDialog.classList.contains("hidden")) {
      navDialog.classList.remove("hidden");
      hamburgerIcon.classList.add("hidden");
      closeIcon.classList.remove("hidden");
    } else {
      navDialog.classList.add("hidden");
      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
}

function genLogo() {
    let aStyle = 'flex items-center gap-1 md:scale-90 custom-font-reduce'

    let a = document.createElement('a')
    a.setAttribute('class', aStyle)
    a.setAttribute('href', '/')
    a.setAttribute('id', 'brand')

    let imgStyle = "h-10 md:h-12 w-auto object-contain hover:scale-110 custom-logo-reduce"
    let img = document.createElement('img')
    img.setAttribute('class', imgStyle)
    img.setAttribute('src', '../main/assets/logo.png')
    img.setAttribute('alt', 'logo')

    let spanStyle = "text-[8px] whitespace-nowrap md:text-[10px] lg:text-[14px] font-barlow font-bold text-blue-900 items-center custom-font-reduce mr-5"
    let span = document.createElement('span')
    span.setAttribute('class', spanStyle)
    span.innerHTML = 'OFFICE OF INDUSTRY AND INTERNATIONAL AFFAIRS'

    a.appendChild(img)
    a.appendChild(span)

    return a
}

function genHomeButton() {
    let a = document.createElement('a')
    a.setAttribute("href", '/diia')

    let div = document.createElement('div')
    div.setAttribute('class', "items-center hover:text-blue-800 custom-font-reduce")
    let i = document.createElement('i')
    i.setAttribute('class', 'fa-solid fa-house')
    div.appendChild(i)
    a.appendChild(div)

    return a
}

function genHomeButtonLARGE() {
    let div = document.createElement('div')
    div.setAttribute('class', "hidden lg:flex md:flex custom-font-reduce")

    let a = document.createElement('a')
    a.setAttribute('href', '/')
    let button = document.createElement('button')
    button.setAttribute('class', "border whitespace-nowrap rounded-lg hover:bg-blue-700 bg-gradient-to-r from-blue-900 to-blue-700 px-3 py-2 md:text-[10px] lg:test-[12px] font-bold shadow-sm text-white custom-font-reduce")
    button.innerHTML = 'Main Website'
    a.appendChild(button)
    div.appendChild(a)
    
    return div
}

function genDropdowns(edata) {
    let div = document.createElement('div')
    div.setAttribute('class', 'relative group px-2 custom-font-reduce')
    let a = document.createElement('a')
    a.setAttribute('class', "hover:text-blue-600 bg-white cursor-pointer group transition-all rounded-full text-black flex items-center custom-font-reduce")
    a.setAttribute('href', edata.link)
    a.innerHTML = edata.title+'<i class="fa p-1 fa-chevron-down"></i>'

    let div2 = document.createElement('div')
    div2.setAttribute('class', "absolute hidden w-auto bg-white flex-col gap-3 rounded-lg transition-all group-hover:flex shadow-slate-500 shadow-sm overflow-hidden border-2 hover:border-orange-500 pt-3 pb-5 custom-font-reduce")
    for(let x in edata.submenus) {
        let a2 = document.createElement('a')
        a2.setAttribute('href', edata.submenus[x].link)
        a2.setAttribute('class', "text-sm text-blue-700 hover:text-orange-500 hover:bg-orange-50 px-5 whitespace-nowrap custom-font-reduce")
        a2.innerHTML = edata.submenus[x].title
        div2.appendChild(a2)
    }

    div.appendChild(a)
    div.appendChild(div2)
    return div
}

function genMenuItem(name) {
    let div = document.createElement('div')
    div.setAttribute('class', "relative group text-black hover:text-blue-600 custom-font-reduce")
    let a = document.createElement('a')
    a.setAttribute('href', '#')
    a.setAttribute('class', "relative px-2 bg-white cursor-pointer group transition-all rounded-full custom-font-reduce")
    a.innerHTML = name
    let div2 = document.createElement('div')
    div2.setAttribute('class', "absolute top-5 bottom-0 left-0 w-full h-[4px] rounded-full bg-transparent group-hover:bg-blue-700 transition-all duration-300")
    a.appendChild(div2)
    div.appendChild(a)

    return div
}

function genMobileMenuToggle() {
    let div = document.createElement('div')
    div.setAttribute('class', "relative z-50 hover:bg-blue-700 bg-gradient-to-r from-blue-900 to-blue-700 rounded-lg lg:hidden md:hidden custom-font-reduce")
    
    let button1 = document.createElement('button')
    button1.setAttribute('id', 'hamburger-icon')
    button1.setAttribute('class', 'px-2 py-1')
    button1.setAttribute('onclick', 'handleMenu()')
    let i1 = document.createElement('i')
    i1.setAttribute('class', 'fa-solid fa-bars text-white text-sm')
    button1.appendChild(i1)
    div.appendChild(button1)

    let button2 = document.createElement('button')
    button2.setAttribute('id', 'close-icon')
    button2.setAttribute('class', 'px-2 py-1 hidden')
    button2.setAttribute('onclick', 'handleMenu()')
    let i2 = document.createElement('i')
    i2.setAttribute('class', 'fa-solid fa-xmark text-white text-sm')
    button2.appendChild(i2)
    div.appendChild(button2)

    return div
}

function genMobileMenu(items) {
    let div = document.createElement('div')
    div.setAttribute('id', 'nav-dialog')
    div.setAttribute('class', "fixed inset-x-0 left-28 top-16 p-3 bg-orange-50 text-black z-50 hidden lg:hidden md:hidden shadow-lg rounded-lg custom-font-reduce")
    let div11 = document.createElement('div')
    div11.setAttribute('class', 'flex justify-between items-center')
    let div12 = document.createElement('div')
    div12.setAttribute('class', 'mt-6')

    for(let x in items) {
        let a = document.createElement('a')
        a.setAttribute('href', '/')
        a.setAttribute('class', "block p-3 mt-3 font-medium border-2 border-orange-500 rounded-lg hover:text-blue-700 hover:bg-orange-100 custom-font-reduce")
        a.innerHTML = items[x]
        div12.appendChild(a)
    }

    div.appendChild(div11)
    div.appendChild(div12)

    return div
}
document.addEventListener('DOMContentLoaded',genNav)
async function genNav() {
    let nav = document.createElement('nav')
    console.log('running navbar')
    // let nav = document.getElementById('navbar')
    nav.setAttribute('class',"bg-white flex mx-auto px-4 md:px-3 py-3 left-0 right-0 top-0 justify-between items-center drop-shadow-2xl z-50 fixed shadow-black w-full custom-font-reduce")

    nav.appendChild(genLogo())

    let navbarDiv = document.createElement('div')
    navbarDiv.setAttribute('id', 'nav-bar')
    navbarDiv.setAttribute('class', "flex items-center hidden md:flex md:text-sm h-fit gap-3 md:gap-3 lg:gap-10 custom-font-reduce")
    navbarDiv.appendChild(genHomeButton())

    try{
        const response = await fetch('/api/diia/navbar', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(response.status==200) {
            const data = await response.json()
            if(data)
                for(let x in data) navbarDiv.appendChild(genDropdowns(data[x]))
        }
    } catch(e) {console.log(e)}

    // navbarDiv.appendChild(genMenuItem('Partnerships'))
    // navbarDiv.appendChild(genMenuItem('Events'))
    // navbarDiv.appendChild(genMenuItem('About Us'))
    navbarDiv.appendChild(genHomeButtonLARGE())
    navbarDiv.appendChild(genMobileMenuToggle())
    navbarDiv.appendChild(genMobileMenu(
        ['For Faculty', 'For Students', 'Partnerships', 'Events', 'About Us']
    ))

    nav.appendChild(navbarDiv)

    document.body.appendChild(nav)
}