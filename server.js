const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Redirect root to home.page.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.page.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});