const dropdowns = document.querySelectorAll('.nav-menu-dropdown');

dropdowns.forEach((dropdown) => {
    const button = dropdown.querySelector('.nav-menu-dropdown-button');
    const dropdownList = dropdown.querySelector('.nav-dropdown-list');

    button.addEventListener('click', () => {
        const isActive = dropdownList.classList.contains('active');
        document.querySelectorAll('.nav-dropdown-list.active').forEach((activeDropdown) => {
            activeDropdown.classList.remove('active');
        });
        if (!isActive) {
            dropdownList.classList.add('active');
        }
    });
});

document.addEventListener('click', (event) => {
    if (!event.target.closest('.nav-menu-dropdown')) {
        document.querySelectorAll('.nav-dropdown-list.active').forEach((dropdownList) => {
            dropdownList.classList.remove('active');
        });
    }
});
