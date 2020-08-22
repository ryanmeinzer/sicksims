// const path = require('path');
// const express = require('express');
// const app = express();
// const publicPath = path.join(__dirname, '..', 'public');
// const port = process.env.PORT || 3000;
// app.use(express.static(publicPath));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
// });
// app.listen(port, () => {
//     console.log('Server is up!');
// });


// Take Two (works but only without react routes):
// const path = require('path');
// const express = require('express');
// const app = express();

// app.use(express.static(__dirname + '/'));
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('build'));
//     app.get('*', (req, res) => {
//         res.sendFile(path.join('build', 'index.html'));
//     });
// }
// app.listen(process.env.PORT || 3000);


// Take Three:
// const path = require('path');
// const express = require('express');
// const app = express();

// app.use(express.static(__dirname + '/'));
// app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'index.html'));
// });
// app.listen(process.env.PORT || 3000);


// Take Four:
// const path = require('path');
// const express = require('express');
// const app = express();

// app.use(express.static('client/build'));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
// });
// app.listen(process.env.PORT || 3000);


// Take Five:
// const path = require('path');
// const express = require('express');
// const app = express();

// app.use(express.static('build'));
// app.get('*', (req, res) => {
//     res.sendFile(path.join('build', 'index.html'));
// });

// app.listen(process.env.PORT || 3000);

// Take Six:
const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(process.env.PORT || 3000);