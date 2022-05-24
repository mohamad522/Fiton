# Fiton
Workout website
fiton.project.pii@gmail.com


--Description--:

This website offers a variety of functions and features that helps you success your workout plan (it contains
plans like bodybuilding, fat loss, cardio training and much more!).
In the home page you can explore some exciting content you never thinked about...
In addition, you will find a collection of healthy meals recipes either for training reinforcement or weight loss.
A distraction section is a webpage containing sports news (maybe you can read them during the rep time of every workout).
There is another webpage for contact us purpose...
And for the best part, the website contains a webpage where you can create, update and delete tasks.
PS: the sign in is optional, and every user can save his favorite workouts.


--Technologies--:

The front-end is made with React: a JavaScript library for building user interfaces, using html and xml for
content display, CSS for design(with a little bit of bootstrap), and of course JavaScript allowing the connection between them
and responsible of all website functionalities. Our data(users and passwords, workouts, saved workouts) is stored on 
Firestore database, the user authentication is built in functions from firebase libraries, the interaction with the database
is made with JavaScript. The messages from contact us page are sent to our email using EmailJS service.



--How To Run The Code--:
1) Download the zip folder on the home page of the repository
2) Extract files to a desired folder
3) Open the folder in your vscode editor
4) Open your terminal at the directory '.../client' and type 'npm install node-modules emailjs uuid'(you are supposed to have node.js installed on your machine)
5) type 'npm start' and this will run the website automatically(if the you don't see the website go type 'localhost:3000' in your browser address bar)
