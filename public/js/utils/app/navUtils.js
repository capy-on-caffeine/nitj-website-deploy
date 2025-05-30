export default function navbarUtil() {
  const insti_name_cont = document.getElementById('instituteNameContainer')
  const institute_name = document.getElementsByClassName('institute_name')
  const full_navbar = document.getElementsByTagName('header')
  const logo = document.getElementById('logo_250')
  const topbar = document.getElementById('top_bar')
  const diff_lang = document.getElementsByClassName('mySlides')
  
  if (window.scrollY > 100) {
    insti_name_cont.classList.remove('sm:h-20', 'sm:max-h-20')
    insti_name_cont.classList.add('sm:h-10', 'sm:max-h-10')

    if (window.innerWidth <= 640) { // Small screen
      insti_name_cont.style.transform = 'translateY(-5px)' // Reduced movement for small screens
    } else {
      insti_name_cont.style.transform = 'translateY(-10px)' // Normal movement for larger screens
    }
    
    // Add transform to push institute name upward
    insti_name_cont.style.transform = 'translateY(-10px)'
    
    topbar.style.transform = 'translateY(-50px)'
    
    for (let i = 0; i < diff_lang.length; i++) {
      diff_lang[i].classList.remove('mt-7')
    }
    
    for (let i = 0; i < institute_name.length; i++) {
      if (window.innerWidth > 620) {
        logo.style.width = '90px'
        logo.style.height = '90px'
      }
      logo.classList.remove('top-9')
      logo.classList.add('top-0', 'py-4')
      logo.classList.remove('sm:translate-y-0')
      
      if (institute_name[i].classList.contains('sm:text-xl')) {
        institute_name[i].classList.remove('sm:text-xl')
        institute_name[i].classList.add('sm:text-lg')
        institute_name[i].classList.add('tracking-widest')
      } else if (institute_name[i].classList.contains('sm:text-lg')) {
        institute_name[i].classList.remove('sm:text-lg')
        institute_name[i].classList.add('sm:text-sm')
        institute_name[i].classList.remove('tracking-widest')
      }
    }
  } else {
    insti_name_cont.classList.remove('sm:h-10', 'sm:max-h-10')
    insti_name_cont.classList.add('sm:h-20', 'sm:max-h-20')
    
    // Reset transform when scrolling back up
    insti_name_cont.style.transform = 'translateY(0)'
    
    logo.style.width = '120px'
    logo.style.height = '120px'
    topbar.style.transform = 'translateY(0)'
    
    for (let i = 0; i < diff_lang.length; i++) {
      diff_lang[i].classList.add('mt-7')
    }
    
    logo.classList.add('sm:translate-y-0')
    logo.classList.add('top-9')
    logo.classList.remove('top-0', 'py-4')
    
    for (let i = 0; i < institute_name.length; i++) {
      if (institute_name[i].classList.contains('sm:text-lg')) {
        institute_name[i].classList.remove('sm:text-lg')
        institute_name[i].classList.add('sm:text-xl')
        institute_name[i].classList.remove('tracking-widest')
      } else if (institute_name[i].classList.contains('sm:text-sm')) {
        institute_name[i].classList.remove('sm:text-sm')
        institute_name[i].classList.add('sm:text-lg')
        institute_name[i].classList.remove('tracking-widest')
      }
    }
  }
}