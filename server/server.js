// app.use(express.static(path.join(__dirname, 'build')));

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
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
const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('build'));
    app.get('*', (req, res) => {
        res.sendFile(path.join('build', 'index.html'));
    });
}
app.listen(process.env.PORT || 3000);

// Take Six:
// const path = require('path');
// const express = require('express');
// const app = express();
// const publicPath = path.join(__dirname, '..', 'public');

// app.use(express.static(publicPath));
// app.get('*', (req, res) => {
//     res.sendFile(path.join(publicPath, 'index.html'));
// });
// app.listen(process.env.PORT || 3000);

// Take Seven:
// const path = require('path');
// const express = require('express');
// const app = express();

// if (process.env.NODE_ENV === 'production') {
// app.use(express.static('build'));
// app.get('*', (req, res) => {
//     res.sendFile(path.join('build', 'index.html'));
// });
// }
// app.listen(process.env.PORT || 3000);

// Take Eight:
// const path = require('path');
// const express = require('express');
// const app = express();

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('client/build'));
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
//     });
// }
// app.listen(process.env.PORT || 3000);