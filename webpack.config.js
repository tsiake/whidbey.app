var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'client/build');
var APP_DIR = path.resolve(__dirname, 'client/');

var config = {
	module: {
		rules: [{
			test: /\.jsx?$/,
			include: APP_DIR,
			loader: 'babel-loader',
			query: {compact: false}
/*            query:
            {
                presets:['es2015', 'react']
            }
*/
		},
		{
			test: /\.css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						url: false
					}
				}
			]
		}],
	},
};

var topLevelFolderConfig = Object.assign({}, config, {
	entry: {
		App: APP_DIR + '/App.jsx',
		AppContainer: APP_DIR + '/AppContainer.jsx',
		Root: APP_DIR + '/Root.jsx',
		index: APP_DIR + '/index.jsx',
		configureStore: APP_DIR + '/configureStore.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var miscLevelFolderConfig = Object.assign({}, config, {
	entry: {
		404: APP_DIR + '/components/misc/404.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var navLevelFolderConfig = Object.assign({}, config, {
	entry: {
		Navbar: APP_DIR + '/components/nav/Navbar.jsx',
		NavbarContainer: APP_DIR + '/components/nav/NavbarContainer.jsx',
		Footer: APP_DIR + '/components/nav/Footer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});


var accountLevelFolderConfig = Object.assign({}, config, {
	entry: {
		RegisterPage: APP_DIR + '/components/account/RegisterPage.jsx',
		RegisterContainer: APP_DIR + '/components/account/RegisterContainer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var homeLevelFolderConfig = Object.assign({}, config, {
	entry: {
		LP: APP_DIR + '/components/home/LP.jsx',
		HomeContainer: APP_DIR + '/components/home/HomeContainer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var patchLevelFolderConfig = Object.assign({}, config, {
	entry: {
		Patch: APP_DIR + '/components/patch/Patch.jsx',
		PatchContainer: APP_DIR + '/components/patch/PatchContainer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var newsLevelFolderConfig = Object.assign({}, config, {
	entry: {
		News: APP_DIR + '/components/news/News.jsx',
		NewsContainer: APP_DIR + '/components/news/NewsContainer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var aboutLevelFolderConfig = Object.assign({}, config, {
	entry: {
		About: APP_DIR + '/components/about/About.jsx',
		AboutContainer: APP_DIR + '/components/about/AboutContainer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

var subComponentsLevelFolderConfig = Object.assign({}, config, {
	entry: {
	    WhidbeyTextInput: APP_DIR + '/components/subcomponents/inputs/WhidbeyTextInput.jsx',
		WhidbeyTextInputContainer: APP_DIR + '/components/subcomponents/inputs/WhidbeyTextInputContainer.jsx',
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	}
});

module.exports = [
	topLevelFolderConfig, miscLevelFolderConfig, homeLevelFolderConfig, navLevelFolderConfig, accountLevelFolderConfig, patchLevelFolderConfig, newsLevelFolderConfig, aboutLevelFolderConfig, subComponentsLevelFolderConfig
];
