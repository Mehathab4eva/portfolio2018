
const projects = [ 
								{
												name: "iCalculate",
												link: "https://razprojects.github.io/iCalculate/",
												imgURL: "./images/i-caluculate.PNG",
												about: `"A simple calculator app with not so simple parentheses application."`
								},

								{
								 				name: "designSite",
								 				link: "https://stormy-spire-60820.herokuapp.com/",
								 				imgURL: "./images/designSite.PNG",
								 				about: `"A simple React app generates CSS linear gradient background code."`
								 },

					  			 {
					  							name: "to-do Lister",
					  							link: "https://mehathab4eva.github.io/to-do-lister/",
					  							imgURL: "./images/to-do-lister.png",
					  							about: `"A simple to-do list maker."`
					  			},

					   			 {
					   							name: "FairyTail",
					   							link: "https://mehathab4eva.github.io/fairytail/",
					   							imgURL: "./images/fairy-tail-logo.png",
					   							about: `"A simple turn based RPG. Characters are from FairyTail(anime)."`
				   			}
				];


const social = [
					{
						name: "GitHub",
						link: "https://github.com/Mehathab4eva",
						imgURL: "./images/github.png"
					},

					{
						name: "Linkedin",
						link: "https://www.linkedin.com/in/mehathab/",
						imgURL: "./images/linkedin.png"
					},

					// {
					// 	name: "Facebook",
					// 	link: "https://www.facebook.com/shaik.mehathab",
					// 	imgURL
					// }
				];

const education = [
					{
						course 		: 'Coding Bootcamp',
						institution : 'University of Utah',
						duration	: "Sept 2017 – Apr 2018",
						imgURL		: './images/u-logo.png' 
					},
					{
						course 		: 'MS Information Systems',
						institution : 'Stevens Henager College',
						duration	: "Sept 2015 – Nov 2016",
						imgURL		: './images/shc-logo.jpg'
					},
					{
						course 		: 'BSc Math Phy Comp',
						institution : 'Andhra University',
						duration	: "June 2006 – Apr 2009",
						imgURL		: './images/a-logo.jpg'
					}

					];

const work = [
				{
					workplace: 'Care Medical LLC',
					position: 'Full Stack MERN Web Developer',
					duration: 'Sept 2015 - Jul 2018',
					workLocation: 'SLC, UT',
					imgURL: "./images/cm-logo.png"
				},
				{
					workplace: 'Data Care LLC',
					position: 'Jr Web Developer',
					duration: 'Apr 2013 - Aug 2015',
					workLocation: 'AP, India',
					imgURL: "./images/dc-logo.png"
				}
				]

 
const data = {
	summary	: `"Full Stack Web Developer.
				5 years of experience developing custom, interactive,
				and responsive web applications while completing the U of U Coding Bootcamp. Currently seeking a role as a
				Web Developer in a collaborative, cohesive, innovative environment where I can apply and extend my
				technical and web application development skills."`,

	technologies: ['HTML', "CSS", "JavaScript", "jQuery", "Bootstrap", "React", "Redux", "Node.js", "Express", "MVC Architecture", "RESTful APIs", "Handlebars.js", "MySQL", "MongoDB", "Webpack", "AJAX", "Git", "Mocha", "Chai", "Heroku"],

	projects: [],

	social : [],

	education : [],

	work: []

}

dataUpdate(projects, data.projects);
dataUpdate(social, data.social);
dataUpdate(education, data.education);
dataUpdate(work, data.work);





function dataUpdate(arr, prop) {
	for( let s of arr)
	{
		prop.push(s);
	}
};


 // console.log(data.projects);

module.exports = {data};