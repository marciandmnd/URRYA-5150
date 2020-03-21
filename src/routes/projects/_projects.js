// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const projects = [
	{
		title: "5150'd",
		slug: '5150d',
		html: `
		`,
		tracks: [
			{
				title: "5150d",
				objectUrl: "https://s3.us-east-2.amazonaws.com/5150d.mp3s/1)+Intro.mp3"
			},
			{
				title: "Hood Thangz",
				objectUrl: "https://s3.us-east-2.amazonaws.com/5150d.mp3s/2)+Hood+Thangz.mp3"
			},
			{
				title: "Involuntary Mental Patient",
				objectUrl: "https://s3.us-east-2.amazonaws.com/5150d.mp3s/3)+Involuntary+Mental+Patient.mp3"
			},
			{
				title: "Gift of Gutter Rap",
				objectUrl: "https://s3.us-east-2.amazonaws.com/5150d.mp3s/4)+Gift+of+Gutter+Rap.mp3"
			},
			{
				title: "Madman's Dream",
				objectUrl: "https://s3.us-east-2.amazonaws.com/5150d.mp3s/5)+Madman's+Dream.mp3"
			},
			{
				title: "Death to the Motherboard",
				objectUrl: "https://s3.us-east-2.amazonaws.com/5150d.mp3s/6)+Death+to+the+Motherboard.mp3"
			},
			{
				title: "One Way Up",
				objectUrl: "https://s3.us-east-2.amazonaws.com/5150d.mp3s/7)+One+Way+Up.mp3"
			},
			{
				title: "Rough Test",
				objectUrl: "https://s3.us-east-2.amazonaws.com/5150d.mp3s/8)+Rough+Test.mp3"
			},
			{
				title: "Bang Bang",
				objectUrl: "https://s3.us-east-2.amazonaws.com/5150d.mp3s/9)+Bang+Bang.mp3"
			}
		]
	},

	{
		title: "5250'd: Still Dangerous",
		slug: 'still-dangerous',
		html:
		`
			<h2>Still Dangerous</h2>
		`,
		tracks: [
			{title: "Ride Wit Me", dl: 1, price: 2, strm: 0,
				},
			{title: "5250d", dl: 1, price: 2, strm: 0,
				objectUrl: ""},
			{title: "Constantinople", dl: 1, price: 2, strm: 0.5,
				objectUrl: ""},
			{title: "48 Bars", dl: 1, price: 2, strm: 0.5,
				objectUrl: ""},
			{title: "850 Pistols in Frisco", dl: 1, price: 2, strm: 0.5,
				objectUrl: ""},
			{title: "808 Eyyday", dl: 1, price: 2, strm: 0.5,
				objectUrl: ""},
			{title: "Death on Van Ness", dl: 1, price: 2, strm: 0.5,
				objectUrl: ""},
			{title: "Ninja Code", dl: 1, price: 2, strm: 0.5,
				objectUrl: ""},
			{title: "Wolfmen Howlin", dl: 1, price: 2, strm: 0.5,
				objectUrl: ""},
			{title: "Pl4ce 1 5tay", dl: 1, price: 2, strm: 0.5,
				objectUrl: ""},
			{title: "Rubberband Man", dl: 1, price: 2, strm: 0.5,
				objectUrl: ""},
			{title: "Put Rap to Sleep", dl: 1, price: 2, strm: 0,
				objectUrl: ""},
			{title: "Been Insane", dl: 1, price: 2, strm: 0.5,
				objectUrl: ""},
			{title: "Get Ghost", dl: 1, price: 2, strm: 0, objectUrl: ""}
		],
		price: 5.25
	},

	{
		title: 'The Conservatorship: Gravely Disabled (hella underground)',
		slug: 'gravely-disabled',
		html: `
			<h2>Unable to Provide for Basic Needs</h2>
		`,
		tracks: [
			{title: "Gravely Disabled", dl: 1, price: 2, strm: 0.5},
			{title: "Microphone Messiahs", dl: 1, price: 2, strm: 0.5},
			{title: "Git Wit Me", dl: 1, price: 2, strm: 0.5},
			{title: "Do this fo'", dl: 1, price: 2, strm: 0.5},
			{title: "Married to the Game", dl: 1, price: 2, strm: 0.5},
			{title: "A Muhfuggah Like Me", dl: 1, price: 2, strm: 0.5},
			{title: "Out Here", dl: 1, price: 2, strm: 0.5},
			{title: "Laced Wit Hella Bass", dl: 1, price: 2, strm: 0.5},
			{title: "Dem Bay Boys", dl: 1, price: 2, strm: 0.5},
			{title: "Fuck Wut Ya Heard", dl: 1, price: 2, strm: 0.5},
			{title: "Rubberband Man", dl: 1, price: 2, strm: 0.5},
			{title: "Run the Game Tight", dl: 1, price: 2, strm: 0.5},
			{title: "Skateboard Thugs", dl: 1, price: 2, strm: 0.5},
			{title: "Whiteboy so Hood", dl: 1, price: 2, strm: 0.5}
		],
		price: 7
	},

	{
		title: 'Quittin Aint Easy',
		slug: 'quittin-aint-easy',
		html: `
			<h2>This is What Happens</h2>
		`,
		tracks: [
			{title: "Real Treal", dl: 1, price: 2, strm: 0},
			{title: "High Muhfuggah", dl: 1, price: 2, strm: 0.5},
			{title: "Street Disease", producer: "Simon Says", dl: 1, price: 2, strm: 0.5},
			{title: "We Can Talk Figures'", dl: 1, price: 2, strm: 0},
			{title: "Higher Than a Spaceship", dl: 1, price: 2, strm: 0.5},
			{title: "Necklace", dl: 1, price: 2, strm: 0},
			{title: "Aint a Game", dl: 1, price: 2, strm: 0.5},
			{title: "Only One King", dl: 1, price: 2, strm: 0.5},
			{title: "Still Keep it Lit", dl: 1, price: 2, strm: 0.5},
			{title: "Hunid Fiddy Kay", dl: 1, price: 2, strm: 0.5},
			{title: "Aint Witda Mayhem", dl: 1, price: 2, strm: 0.5}
		],
		price: 15
	}
];

projects.forEach(project => {
	project.html = project.html.replace(/^\t{3}/gm, '');
});

export default projects;
