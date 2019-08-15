import Gallery from './Gallery';

const gallery = new Gallery({
    limit: 10,
    page: 4,
    gallery_id: '#gallery',
    nav_id: '#navigation',
});

gallery.renderList();