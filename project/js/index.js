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
		name: 'Miley Cyrus',
		img: 'images/miley-cyrus.webp',
		profession: 'Actress',
		age: 50,
		profile: 'Award-winning actress'
	},
	{
		name: 'Robert Downey Jr.',
		img: 'images/robert-downey-jr.webp',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Ben Affleck',
		img: 	'images/ben-affleck.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Alan Ritchson',
		img: 'images/alan-ritchson.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Blake Shelton',
		img: 'images/blake-shelton.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Chris Hemsworth',
		img: 'images/chris-hemsworth.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Henry Cavill',
		img: 'images/henry-cavill.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Demi Moore',
		img: 'images/demi-moore.jpg',
		profession: 'Actress',
		age: 50,
		profile: 'Award-winning actress'
	},
	{
		name: 'Luke Combs',
		img: 'images/luke-combs.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'James Brolin',
		img: 'images/james-brolin.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Quavo',
		img: 'images/quavo.jpg',
		profession: 'Musician',
		age: 50,
		profile: 'Award-winning musician'
	},
	{
		name: 'Scarlett Johansson',
		img: 'images/scarlett-johansson.jpg',
		profession: 'Actress',
		age: 50,
		profile: 'Award-winning actress'
	},
	{
		name: 'Tim McGraw',
		img: 'images/tim-mcgraw.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Tom Burke',
		img: 'images/tom-burke.webp',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Zack Snyder',
		img: 'images/zack-snyder.webp',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Luke Bryan',
		img: 'images/luke-bryan.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Mark Buffalo',
		img: 'images/mark-buffalo.webp',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Theo James',
		img: 'images/theo-james.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Ron Perlman',
		img: 'images/ron-perlman.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Tom Hiddleston',
		img: 'images/tom-hiddleston.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Ryan Reynolds',
		img: 'images/ryan-reynolds.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Woddy Harrelson',
		img: 'images/woddy-harrelson.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Will Parfitt',
		img: 'images/will-parfitt.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'David Corenswet',
		img: 'images/david-corenswet.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Lenny Kravitz',
		img: 'images/lenny-kravitz.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Tom Hardy',
		img: 'images/tom-hardy.png',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Keith Urban',
		img: 'images/keith-urban.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Chris Young',
		img: 'images/chris-young.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Liam Hemsworth',
		img: 'images/liam-hemsworth.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Hugh Jackman',
		img: 'images/hugh-jackman.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Jeremy Renner',
		img: 'images/jeremy-renner.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Jesse Eisenberg',
		img: 'images/jesse-eisenberg.jpg',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
	{
		name: 'Chris Pratt',
		img: 'images/chris-pratt.webp',
		profession: 'Actor',
		age: 50,
		profile: 'Award-winning actor'
	},
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
		imgElement.style.height = '11rem';
		imgElement.style.objectFit = 'center';
		imgElement.style.outline = '2px solid #e2e8f0'
		imgElement.style.borderRadius = '0.375rem';
		imgElement.className = 'w-full hover:opacity-80 transition-opacity';

		const nameElement = document.createElement('p');
		nameElement.textContent = celeb.name;
		nameElement.className = 'text-blue-700 font-semibold mt-2';

		const professionElement = document.createElement('p');
		professionElement.textContent = celeb.profession;
		professionElement.className = 'text-gray-600 text-sm';

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
		window.location.href = '#search-bar'
	}
});

nextBtn?.addEventListener('click', () => {
	if ((currentPage * imagesPerPage) < celebs.length) {
		currentPage++;
		displayImages();
		window.location.href = '#search-bar'
	}
});

if (gallery) displayImages();

const searchInput = document.querySelector('input[type="text"]');
const searchResults = document.getElementById('search-results');

// Handle search input
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase();
  searchResults.innerHTML = ''; // Clear previous results
  
  if (query === '') {
    searchResults.classList.add('hidden');
    return;
  }

  const filteredCelebs = celebs
    .map((celeb, index) => ({ ...celeb, index }))
    .filter(celeb => celeb.name.toLowerCase().includes(query));

  if (filteredCelebs.length > 0) {
    filteredCelebs.forEach(celeb => {
      const resultItem = document.createElement('div');
      resultItem.className = 'flex items-center p-2 hover:bg-gray-100 cursor-pointer w-full';

			const img = document.createElement('img');
			img.src = celeb.img;
			img.alt = celeb.name;
			img.style.height = '2.5rem';
			img.style.width = '2.5rem';
			img.className = 'object-cover block mr-2 rounded-lg border border-gray-200';
			
			const text = document.createElement('div');
			text.innerHTML = `
				<p class="font-medium text-blue-600 text-sm">${celeb.name}</p>
				<p class="text-sm text-gray-500">${celeb.profession}</p>
			`;

			resultItem.append(img);
			resultItem.append(text);
						
      resultItem.addEventListener('click', () => {
        window.location.href = `profile.html?id=${celeb.index}`;
      });

      searchResults.appendChild(resultItem);
    });

    searchResults.classList.remove('hidden');
  } else {
    searchResults.innerHTML = `<p class="p-2 text-gray-500 text-center">No results found</p>`;
    searchResults.classList.remove('hidden');
  }
});
