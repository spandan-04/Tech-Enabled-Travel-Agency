const express = require('express');
const app = express();
const port = 5000; // Choose any port number you prefer
const authRouter = require('../routes/auth');
const path = require('path');

// Set up a static directory to serve your HTML files from the 'views' directory
app.use(express.static(path.join(__dirname, '..', 'views')));

// Route for the 'index.html' file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

// Route for the 'search result.html' file
app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'search result.html'));
});



// Define a route to handle the root URL
// app.set("view engine","html")
// app.get('/', (req, res) => {
//   res.render('index');
// });
// app.get('/', (req, res) => {
//   res.send('Hello, world!'); // You can customize the response here
//   res.render("index");
// });

// app.get('/', (req, res) => {
//   // Send the HTML file as a response
//   res.sendFile(path.join(__dirname, 'index.html'));
// });






app.use('/api/auth', authRouter);
// app.use("views","/")


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

});


