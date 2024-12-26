//Sidebar
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');
const menuOpenIcon = document.getElementById('menu-open');
const menuCloseIcon = document.getElementById('menu-close');

menuToggle.addEventListener('click', () => {
	sidebar.classList.toggle('-translate-x-full');
	menuOpenIcon.classList.toggle("hidden");
	menuCloseIcon.classList.toggle("hidden");
});

const celebs = [
	{
		name: 'Brad Pitt',
		img: 'images/brad-pitt.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Channing Tatum',
		img: 'images/channing-tatum.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Tessa Thompson',
		img: 'images/tessa-thompson.jpg',
		profession: 'Actress',
		age: 50,
		profile: 'Award-winning actress'
	},
	{
		name: 'Chris Evans',
		img: 'images/chris-evans.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Jason Mamoa',
		img: 'images/jason-mamoa.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Gal Gadot',
		img: 'images/gal-gadot.jpg',
		profession: 'Actress',
		age: 50,
		profile: 'Award-winning actress'
	},
	{
		name: 'Wesley Snipes',
		img: 'images/wesley-snipes.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Brad Pitt',
		img: 'images/brad-pitt.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Brad Pitt',
		img: 'images/brad-pitt.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Brad Pitt',
		img: 'images/brad-pitt.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Brad Pitt',
		img: 'images/brad-pitt.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Brad Pitt',
		img: 'images/brad-pitt.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Brad Pitt',
		img: 'images/brad-pitt.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Brad Pitt',
		img: 'images/brad-pitt.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},

	'images/miley-cyrus.webp',
	'images/robert-downey-jr.webp',
	'images/ben-affleck.jpg',
	'images/alan-ritchson.jpg',
	'images/blake-shelton.jpg',
	'images/chris-hemsworth.jpg',
	'images/henry-cavill.jpg',
	'images/luke-combs.jpg',
	'images/quavo.jpg',
	'images/scarlett-johansson.jpg',
	'images/tim-mcgraw.jpg',
	'images/tom-burke.webp',
	'images/zack-snyder.webp',
	'images/luke-bryan.jpg',
	'images/mark-buffalo.webp',
	'images/ron-perlman.jpg',
	'images/tom-hiddleston.jpg',
	'images/ryan-reynolds.jpg',
	'images/woddy-harrelson.jpg',
	'images/will-parfitt.jpg',
	'images/david-corenswet.jpg',
	'images/lenny-kravitz.jpg',
	'images/tom-hardy.png',
	'images/liam-hemsworth.jpg',
	'images/keith-urban.jpg',
	'images/chris-young.jpg',
	'images/hugh-jackman.webp',
	'images/jeremy-renner.jpg',
	'images/jesse-eisenberg.jpg',
	'images/chris-pratt.webp',
];

const imagesPerPage = 10;
let currentPage = 1;

const gallery = document.getElementById('image-gallery');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const pageInfo = document.getElementById('page-info');

// Display Gallery on Home Page
function displayImages() {
	if (!gallery) return;

	gallery.innerHTML = ''; // Clear previous images
	const startIndex = (currentPage - 1) * imagesPerPage;
	const endIndex = startIndex + imagesPerPage;
	const currentImages = celebs.slice(startIndex, endIndex);

	currentImages.forEach((celeb, index) => {
		const profileId = startIndex + index;

		const linkElement = document.createElement('a');
		linkElement.href = `profile.html?id=${profileId}`;
		linkElement.className = 'block text-center';

		const imgElement = document.createElement('img');
		imgElement.src = celeb.img;
		imgElement.alt = celeb.name;
		imgElement.style.height = '10rem';
		imgElement.style.objectFit = 'center';
		imgElement.style.outline = '2px solid #e2e8f0'
		imgElement.style.borderRadius = '0.375rem';
		imgElement.className = 'w-full h-40 object-cover rounded-md hover:opacity-80 transition-opacity';

		const nameElement = document.createElement('p');
		nameElement.textContent = celeb.name;
		nameElement.className = 'text-blue-700 font-semibold mt-2';

		const professionElement = document.createElement('p');
		professionElement.textContent = celeb.profession;
		professionElement.className = 'text-gray-500 text-sm';

		linkElement.appendChild(imgElement);
		linkElement.appendChild(nameElement);
		linkElement.appendChild(professionElement);
		gallery.appendChild(linkElement);
	});

	// Update Pagination Controls
	prevBtn.disabled = currentPage === 1;
	nextBtn.disabled = endIndex >= celebs.length;
	pageInfo.textContent = `Page ${currentPage}`;
}

// Handle Pagination
prevBtn?.addEventListener('click', () => {
	if (currentPage > 1) {
		currentPage--;
		displayImages();
	}
});

nextBtn?.addEventListener('click', () => {
	if ((currentPage * imagesPerPage) < celebs.length) {
		currentPage++;
		displayImages();
	}
});

if (gallery) displayImages();