var ghpages = require('gh-pages');

ghpages.publish(
	'public', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/henrietteBaum/svelte-page',
		user: {
			name: 'henrietteBaum', // update to use your name
			email: 'henriette-baum@posteo.de' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);