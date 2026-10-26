// Application Configuration
// This file is gitignored - do not commit sensitive credentials
// Copy .env.example to .env and fill in your values

const APP_CONFIG = {
    // Google OAuth Client ID
    // Get yours from: https://console.cloud.google.com/apis/credentials
    GOOGLE_CLIENT_ID: '625028716213-sbcoap3n6jfbc3lpq6gavh3ltrl5g3gq.apps.googleusercontent.com',
    
    // Application Info
    APP_NAME: 'P2P Mesh Chat',
    APP_VERSION: '1.0.0',
    
    // Owner Configuration
    OWNER_EMAIL: 'claytonfam125690@gmail.com'
};

// Make config available globally
window.APP_CONFIG = APP_CONFIG;
