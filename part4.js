var hexpress = require('./lib/hexpress');
var app = hexpress();

// Simple route '/' should render the index.hbs file
// located in /hexpress/views. Should replace {{fname}}
// and {{lname}} with Bryan and Hoang respectively.
// Additionally it should list all artists listed in the
// favouriteArtists array
app.get('/', function(req, res) {
  res.render('./views/index.hbs', {
    fname: 'Bryan',
    lname: 'Hoang',
    favouriteArtists: ['Taylor Swift', 'Seafret', 'The Killers', 'Bon Iver', 'Bob Dylan', 'Young the Giant']
  });
});

app.listen(3000);
