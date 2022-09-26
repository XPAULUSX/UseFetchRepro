# Simple useFetch "error" repo.

Small Nuxt3 app for demonstrating multiple useFetch causing "Nuxt instance is not available error".

# Reproduction Steps

Simply run the app with npm run dev, index.vue is using the useCategories.js composable which in turn calls the useWhitelabels.js composable, both of these make a request to server/api using useFetch which produces the error outlined above.

# How to fix?

To get round this for now I have replaced second useFetch call within useWhitelabel.js with $fetch instead, if you make these changes you can see the index page will then begin to work as expected.
