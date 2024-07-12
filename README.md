#TrailerStream

-TrailerStream is a cutting-edge application that allows you to watch or stream any movie trailer without interruptions from ads. Leveraging advanced AI technology, TrailerStream offers enhanced search functionalities, enabling users to find trailers that match their mood or specific descriptions. This project aims to provide an unparalleled user experience in discovering and enjoying movie trailers.

Features
- Ad-Free Streaming: Enjoy uninterrupted movie trailers without any advertisements.
- AI-Powered Search: Describe your mood or preferences, and our AI will recommend trailers that suit your taste.
- User-Friendly Interface: Intuitive and easy-to-navigate interface for a seamless user experience.
- Extensive Trailer Library: Access a vast collection of movie trailers from various genres and eras.

#Getting Started
Follow these instructions to set up the project on your local machine for development and testing purposes.

Prerequisites
Ensure you have the following installed on your system:

Node.js (v14 or later)
npm (v6 or later)
Installation
Clone the repository
do npm install
and then npm start 

Steps I have used to amke this react application 
I am creating a trailer GPT it's like  a clone of netflix with some extra functionality like Suppose you're in a mood to watch something related to Dating so you can search for dating and this app recommends you a movies related to Dating, we're also going to integrate authentiaction in this one. I'm excited
first of all I started with by creating a bolierpalte code with npx-create-react-app projectname

then we configure tailwind CSS as I am using Tailwind.
features for the project 
-SignIn/login page How to use a same form as Sign Up or Sign In,
- Form Validators
- Error Handling
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
- language accesibilty Hindi/English
- working On responsiveness
-You can watch trailer by clicking on any movie Card or Play Button
- Animated Loader in tailwind CSS
- firebase Deploy 
- mute/unmute home button
- making my trailer page more advance (next upgrade)

And This is how it's looking for reference 
SignIn Page
![sign-In page](https://github.com/user-attachments/assets/3018c7db-f84b-4962-863e-ef33bdb586e8)
Search page
![search-page](https://github.com/user-attachments/assets/2c47ad72-2fdf-49f4-a6dc-7951c4e61dc1)
Home Page 
![Home-page](https://github.com/user-attachments/assets/a62d57bc-5505-470e-a979-70ce956cb943)
Home Page Slider
![Home-page-slider](https://github.com/user-attachments/assets/267defaa-e454-411e-99be-6fc31dee905a)



