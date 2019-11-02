export default window.onscroll = () => {
  let currentTab = window.location.href;
  let navbar = document.getElementById('custom-navbar');
  //console.log(navbar);
  let about = document.getElementById('about');
  //console.log(about);
  let aboutTop = about.getBoundingClientRect().top;
  //console.log(aboutTop);
  let navbarHeight = navbar.getBoundingClientRect().height;
  //console.log(navbarHeight);
  if(aboutTop < navbarHeight) {
    navbar.className = 'custom-navbar fixed';
    //console.log(navbar.className);
  }
  else {
    navbar.className = 'custom-navbar';
  }
}
