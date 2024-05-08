function filterItems(category) {
    const items = document.querySelectorAll('.itemBox');
    const ukensTilbud = document.getElementById('ukensTilbud');
    if (category === 'all') {
        ukensTilbud.style.display = 'flex';
        items.forEach(item => {
            item.style.display = 'block';
        });
    } else {
        ukensTilbud.style.display = 'none';
        items.forEach(item => {
            if (item.getAttribute('data-category') === category) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
}