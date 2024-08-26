document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("newMobileMenu");
  const dropdownToggle = document.querySelector(
    ".new-mobile-navigation .new-dropdown a"
  );
  const dropdownContent = document.getElementById("newDropdownMenu");

  function toggleNewMenu() {
    menu.classList.toggle("open");
  }

  function closeNewMenu() {
    menu.classList.remove("open");
    dropdownContent.classList.remove("open"); // Ensure dropdown closes too
  }

  function toggleNewDropdown(event) {
    dropdownContent.classList.toggle("open");
    event.stopPropagation(); // Prevent the event from bubbling up
  }

  document.addEventListener("click", function (event) {
    const isMenuClick = menu.contains(event.target);
    const isDropdownClick =
      dropdownContent.contains(event.target) ||
      dropdownToggle.contains(event.target);

    // Close menu if clicking outside menu and dropdown
    if (
      !isMenuClick &&
      !isDropdownClick &&
      !event.target.classList.contains("mobile-menu-toggle")
    ) {
      closeNewMenu();
    }
  });

  // Toggle the menu on mobile button click
  document
    .querySelector(".mobile-menu-toggle")
    .addEventListener("click", function (event) {
      event.stopPropagation(); // Prevent event from triggering document click listener
      toggleNewMenu();
    });

  // Toggle the dropdown when clicking on dropdown link
  dropdownToggle.addEventListener("click", function (event) {
    toggleNewDropdown(event);
  });
});
