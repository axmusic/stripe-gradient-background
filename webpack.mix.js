const mix = require('laravel-mix');

mix.setPublicPath('./dist');
mix.js('src/Gradient.js', 'stripe-gradient.js');
mix.minify('dist/stripe-gradient.js');
