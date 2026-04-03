// Sidebar dropdown logic for PharmaCo

document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    const sidebar = document.querySelector('.sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar a');

    // Ensure all dropdowns are closed on load
    dropdownBtns.forEach(btn => {
        btn.classList.remove('active');
        const parent = btn.parentElement;
        if (parent) parent.classList.remove('open');
    });

    // Dropdown toggle
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function(this: HTMLElement, e) {
            e.preventDefault();
            const parent = this.parentElement;
            if (parent) {
                parent.classList.toggle('open');
                btn.classList.toggle('active');
            }
        });
    });

    // Close sidebar and dropdowns on link click (mobile)
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 700 && sidebar) {
                sidebar.classList.remove('open');
                // Close all dropdowns
                dropdownBtns.forEach(btn => {
                    btn.classList.remove('active');
                    const parent = btn.parentElement;
                    if (parent) parent.classList.remove('open');
                });
            }
        });
    });

    // Close sidebar when clicking outside (mobile)
    document.addEventListener('click', (e) => {
        if (window.innerWidth > 700 || !sidebar) return;
        const target = e.target as HTMLElement;
        if (!sidebar.contains(target) && target.id !== 'sidebar-toggle') {
            sidebar.classList.remove('open');
            dropdownBtns.forEach(btn => {
                btn.classList.remove('active');
                const parent = btn.parentElement;
                if (parent) parent.classList.remove('open');
            });
        }
    });
});