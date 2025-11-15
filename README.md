# Aora - Video Sharing Mobile App

Aora is a modern mobile video sharing application built with React Native and Expo. It allows users to discover, share, and explore creative video content with a sleek, user-friendly interface.

## Features

- **User Authentication**: Secure sign-up and sign-in functionality with email/password
- **Video Feed**: Browse through a curated feed of videos from the community
- **Trending Section**: Discover the most popular and trending videos
- **Search**: Find videos by keywords and content
- **Bookmarks**: Save your favorite videos for later viewing
- **Profile Management**: Manage your account and view your uploaded content
- **Video Upload**: Share your own creative videos with the community
- **Pull to Refresh**: Easily refresh content with a swipe
- **Responsive Design**: Beautiful UI that adapts to different screen sizes

## Tech Stack

- **React Native** (0.74.2) - Cross-platform mobile framework
- **Expo** (~51.0.11) - Development platform and tooling
- **Expo Router** (~3.5.15) - File-based routing for React Native
- **NativeWind** (^2.0.11) - Tailwind CSS for React Native
- **Appwrite** (^0.4.0) - Backend-as-a-Service for authentication, database, and storage
- **React Native Reanimated** (~3.10.1) - Smooth animations
- **React Native Gesture Handler** (~2.16.1) - Native gesture handling

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- iOS Simulator (for macOS) or Android Emulator

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd Aora-app
```

2. Install dependencies:

```bash
npm install
```

## Configuration

### Appwrite Setup

This app uses Appwrite as its backend. You'll need to:

1. Create an [Appwrite](https://appwrite.io/) account and project
2. Set up the following in your Appwrite console:
   - Database with collections for videos and users
   - Storage bucket for video files
   - Authentication with email/password provider

3. Update the configuration in `lib/appwrite.js` with your Appwrite credentials:

```javascript
const APPWRITE_URL = "your-appwrite-endpoint";
const APPWRITE_PROJECT_ID = "your-project-id";
const APPWRITE_DATABASE_ID = "your-database-id";
const PPWRITE_STORAGE_ID = "your-storage-id";
const PPWRITE_VIDOE_COL = "your-video-collection-id";
const PPWRITE_USERS_COL = "your-users-collection-id";
```

## Running the App

Start the Expo development server:

```bash
npm start
```

Or use specific platform commands:

```bash
# Run on Android
npm run android

# Run on iOS
npm run ios

# Run on web
npm run web
```

In the output, you'll find options to open the app in:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go) app

## Project Structure

```
Aora-app/
├── app/                    # Application screens and routing
│   ├── (auth)/            # Authentication screens
│   │   ├── sign-in.jsx
│   │   └── sign-up.jsx
│   ├── (tabs)/            # Main app tabs
│   │   ├── home.jsx
│   │   ├── create.jsx
│   │   ├── profile.jsx
│   │   └── bookmark.jsx
│   ├── search/            # Search functionality
│   └── index.jsx          # Landing page
├── components/            # Reusable components
│   ├── CustomButton.jsx
│   ├── FormField.jsx
│   ├── VideoCard.jsx
│   ├── Trending.jsx
│   ├── SearchInput.jsx
│   └── EmptyState.jsx
├── lib/                   # Utilities and services
│   ├── appwrite.js       # Appwrite configuration and API
│   └── useAppwrite.js    # Custom hook for Appwrite
├── context/              # React Context providers
│   └── GlobalProvider.js
├── constants/            # App constants and assets
│   ├── images.js
│   └── icons.js
└── assets/               # Static assets
```

## Available Scripts

- `npm start` - Start the Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser
- `npm test` - Run Jest tests
- `npm run lint` - Run ESLint
- `npm run reset-project` - Reset to a fresh project

## Building for Production

### Android

```bash
expo build:android
```

### iOS

```bash
expo build:ios
```

For more information on building and deploying, see the [Expo documentation](https://docs.expo.dev/distribution/introduction/).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Expo](https://expo.dev) - For the amazing development platform
- [Appwrite](https://appwrite.io) - For the backend services
- [NativeWind](https://www.nativewind.dev/) - For bringing Tailwind CSS to React Native

## Support

For support, please open an issue in the GitHub repository.
