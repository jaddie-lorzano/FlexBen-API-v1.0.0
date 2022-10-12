import {} from 'dotenv/config'
import app from './app.js'

// Create server to listen on port 5000
const PORT = process.env.PORT || 5000;

let server = app.listen(PORT, () => {
    console.log(`Node server is running on http://localhost:${PORT}`)
});