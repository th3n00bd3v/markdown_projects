document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const groups = document.querySelectorAll('.group');

    let currentFilter = 'all';

    // Search functionality
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        filterProjects(searchTerm, currentFilter);
    });

    // Filter functionality
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update current filter and apply
            currentFilter = button.getAttribute('data-filter');
            filterProjects(searchInput.value.toLowerCase(), currentFilter);
        });
    });

    function filterProjects(searchTerm, filterType) {
        // Convert wildcard pattern to regex
        const searchPattern = searchTerm
            .replace(/\*/g, '.*')  // Convert * to .*
            .replace(/\?/g, '.')   // Convert ? to .
            .replace(/\s+/g, '\\s+'); // Handle whitespace
        
        const searchRegex = new RegExp(searchPattern, 'i');  // case insensitive

        projectItems.forEach(item => {
            const title = item.querySelector('a').textContent;
            const description = item.querySelector('.desc').textContent;
            const badge = item.querySelector('.badge').textContent.toLowerCase();
            
            const matchesSearch = searchRegex.test(title) || 
                                searchRegex.test(description);
            const matchesFilter = filterType === 'all' || 
                                badge.includes(filterType.toLowerCase());

            if (matchesSearch && matchesFilter) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });

        // Hide empty groups
        groups.forEach(group => {
            const visibleItems = group.querySelectorAll('.project-item:not(.hidden)');
            if (visibleItems.length === 0) {
                group.classList.add('hidden');
            } else {
                group.classList.remove('hidden');
            }
        });
    }
});

function toggle(el) {
  const nextUl = el.nextElementSibling;
  if (nextUl && nextUl.tagName === 'UL') {
    nextUl.style.display = nextUl.style.display === 'block' ? 'none' : 'block';
  }
}
