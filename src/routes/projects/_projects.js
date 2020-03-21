// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const projects = [
	{
		title: "5150'D",
		slug: '5150d',
		date: '1.2010',
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
		title: "5250'D: STILL DANGEROUS",
		slug: 'still-dangerous',
		date: '7.2011',
		html:
		`
		`,
		tracks: [
			{title: "Ride Wit Me"},
			{title: "5250d"},
			{title: "Constantinople"},
			{title: "48 Bars"},
			{title: "850 Pistols in Frisco"},
			{title: "808 Eyyday"},
			{title: "Death on Van Ness"},
			{title: "Ninja Code"},
			{title: "Wolfmen Howlin"},
			{title: "Pl4ce 1 5tay"},
			{title: "Rubberband Man"},
			{title: "Put Rap to Sleep"},
			{title: "Been Insane"},
			{ title: "Get Ghost"}
		]
	},

	{
		title: 'GRAVELY DISABLED',
		slug: 'gravely-disabled',
		date: '9.13',
		html: `
		`,
		tracks: [
			{title: "Gravely Disabled"},
			{title: "Microphone Messiahs"},
			{title: "Git Wit Me"},
			{title: "Do this fo'"},
			{title: "Married to the Game"},
			{title: "A Muhfuggah Like Me"},
			{title: "Out Here"},
			{title: "Laced Wit Hella Bass"},
			{title: "Dem Bay Boys"},
			{title: "Fuck Wut Ya Heard"},
			{title: "Rubberband Man"},
			{title: "Run the Game Tight"},
			{title: "Skateboard Thugs"},
			{title: "Whiteboy so Hood"}
		]
	},
	{
		title: 'QUITTIN AINT EASY',
		slug: 'quittin-aint-easy',
		html: `
		`,
		tracks: [
			{title: "Real Treal"},
			{title: "High Muhfuggah"},
			{title: "Street Disease", producer: "Simon Says"},
			{title: "We Can Talk Figures'"},
			{title: "Higher Than a Spaceship"},
			{title: "Necklace"},
			{title: "Aint a Game"},
			{title: "Only One King"},
			{title: "Still Keep it Lit"},
			{title: "Hunid Fiddy Kay"},
			{title: "Aint Witda Mayhem"}
		]
	}
];

projects.forEach(project => {
	project.html = project.html.replace(/^\t{3}/gm, '');
});

export default projects;
