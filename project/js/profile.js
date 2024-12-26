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

const profileImg = document.getElementById('profile-img');
const profileName = document.getElementById('profile-name');
const profileProfession = document.getElementById('profile-profession');
const profileAge = document.getElementById('profile-age');
const profileDescription = document.getElementById('profile-description');
const profilePageTitle = document.getElementById('profile-page-title')

// Display Profile Details
function loadProfile() {
	const urlParams = new URLSearchParams(window.location.search);
	const profileId = urlParams.get('id');

	if (profileId !== null && celebs[profileId]) {
		const celeb = celebs[profileId];
		profilePageTitle.textContent = `Profile - ${celeb.name}`;
		profileImg.src = celeb.img;
		profileName.textContent = celeb.name;
		profileProfession.textContent = celeb.profession;
		profileAge.textContent = `Age: ${celeb.age}`;
		profileDescription.textContent = celeb.profile;
	}
}

if (profileImg) loadProfile();