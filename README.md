# Getting Started with Create React App

we're creating a netflix GPT it's like  a clone of netflix with some extra functionality like Suppose you're in a mood to watch something related to Dating so you can search for dating and this app recommends you a movies related to Dating, we're also going to integrate authentiaction in this one. I'm excited
first of all we started with by creating a bolierpalte code with npx-create-react-app projectname

then we configure tailwind CSS as we're using Tailwind.

#features for the project 
SignIn/login page How to use a same form as Sign Up or Sign In , Form validators, useref hook 
- created a redux store with userSlice
- As soon as my user signIn I want to update that user profile
- logOut
Browse Page(after authentiaction login)
we have a header
main movie conatiner
we have a background movie or trailer 
title and Description 
we have a play button  
- movie suggestions
- movie lists (vertically scrollable)
- netfilx Gpt
 - searchBar
 - tailored movie Recommendation

 React make two API calls coz there is one thing called ReactStrictMode which checks the application twice in local only SO it's good thing , React is checking if there is inconsistency if we remove that from index.js only one API call would be there .

- Registerd TMDB app and used API from there
- Get the latest movies from TMDB

