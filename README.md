# P2P Mesh Chat

A decentralized, peer-to-peer mesh group chat application with Google authentication.

## Features

- **Peer-to-Peer Messaging**: Direct WebRTC connections via PeerJS
- **Google Authentication**: Secure sign-in with Google OAuth
- **Guest Access**: Join public rooms without authentication
- **Room Creation**: Authenticated users can create private rooms
- **Chat History**: Local storage with management UI
- **Badge System**: Visual indicators for roles and authentication status
- **File Attachments**: Send images and files in chat
- **Cross-Room Notifications**: Friend requests and invites work across rooms

## Setup

### 1. Google OAuth Configuration

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable **Google Identity Services**
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
5. Set application type to **Web application**
6. Add your domain to **Authorized JavaScript origins**:
   - For local testing: `http://localhost`
   - For GitHub Pages: `https://yourusername.github.io`
7. Copy the **Client ID**

### 2. Configure the App

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `config.js` and replace the placeholder values:
   ```javascript
   const APP_CONFIG = {
       GOOGLE_CLIENT_ID: 'your_actual_client_id.apps.googleusercontent.com',
       APP_NAME: 'P2P Mesh Chat',
       APP_VERSION: '1.0.0',
       OWNER_EMAIL: 'your_owner_email@gmail.com'
   };
   ```

3. **Important**: The `config.js` file is gitignored and should NEVER be committed to version control.

### 3. Deploy

#### Option A: GitHub Pages
1. Push to your GitHub repository
2. Go to Settings → Pages
3. Select `main` branch and save
4. Your app will be available at `https://yourusername.github.io/repo-name/`

#### Option B: Local Testing
Simply open `index.html` in your browser. For Google Sign-In to work, you'll need to serve it over HTTP:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Security Notes

- **NEVER commit `config.js` or `.env` files** - they contain your credentials
- The `.gitignore` file is configured to exclude these files
- Google Client ID is safe to expose in client-side code (it's not a secret)
- All chat messages are encrypted end-to-end
- No server-side storage - everything is peer-to-peer

## Usage

### Authentication
- **Sign in with Google**: Full access, can create rooms, badge shows email
- **Continue as Guest**: Can join public rooms and invite links, cannot create rooms

### Room Types
- **Public Lounge**: Open to everyone, no password required
- **Secret Duo**: Private 1-on-1 room with auto-generated passphrase
- **Standard Mesh**: Multi-peer room with optional password

### Badge Format
- **Owner**: 👑️ Name (email)
- **Host**: ⭐🛡️ Name (email)
- **Member**: 🛡️ Name (email)
- **Guest**: 🕵️ Name

## Tech Stack

- **PeerJS**: WebRTC peer-to-peer connections
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icon library
- **Google Identity Services**: OAuth authentication
- **Web Crypto API**: Password hashing (SHA-256)
- **localStorage**: Local data persistence

## License

MIT
