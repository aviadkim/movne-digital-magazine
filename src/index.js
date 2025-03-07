const express = require('express');
const cors = require('cors');
const { initialize } = require('./services/recording');

const app = express();
app.use(cors());
app.use(express.json());

// Initialize services
const server = initialize(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));