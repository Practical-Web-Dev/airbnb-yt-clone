//DOM Elements 
const bars = document.querySelector('.fa-bars');
const wrapper = document.querySelector('.mobile-menu-fixed');     
const menu = document.querySelector('.mobile-menu-container');     

// Guard clause: if any of these are missing, stop
if (!bars || !wrapper || !menu) {
  // elements not found; stop script
} else {

  function openMenu() {
    wrapper.classList.add('is-open');
  }

  function closeMenu() {
    wrapper.classList.remove('is-open');
  }

  function toggleMenu() {
    if (wrapper.classList.contains('is-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Toggle on bars click
  bars.addEventListener('click', function (e) {
    e.stopPropagation();               // prevent outside-click handler from firing
    toggleMenu();
  });

  // Close when a link inside the menu is clicked
  menu.addEventListener('click', function (e) {
    const link = e.target.closest('.mobile-menu-link');
    if (link) {
      closeMenu();
    }
  });

  // Close when clicking outside the menu (anywhere in the document)
  document.addEventListener('click', function (e) {
    const clickedInsideMenu = menu.contains(e.target);
    const clickedBars = bars.contains(e.target);
    if (!clickedInsideMenu && !clickedBars) {
      closeMenu();
    }
  });


}