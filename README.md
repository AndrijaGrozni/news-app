# News Mobile App

-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Running App](#running-app)

The project is created using **React Native CLI** & react-native init following
[official guide](https://reactnative.dev/docs/getting-started).

## Prerequisites

### Platform: iOS

-   Install [Xcode](https://apps.apple.com/us/app/xcode/id497799835?mt=12)
-   Install CocoaPods

```
$ sudo gem install cocoapods
```

### Platform: Android

-   Install [Android Studio](https://developer.android.com/studio/index.html)
-   Follow official [guide](https://reactnative.dev/docs/getting-started) for
    Android

## Installation

```
$ git clone https://github.com/AndrijaGrozni/news-app.git
```

```
$ npm install
```

For iOS, installation has to be done also in ios folder:

```
$ cd ios
$ pod install

```

## Running App

### Platform: iOS

```
$ npm run ios
```

### Platform: Android

Test:

```
$ npm run android
```

### API

endpoint: [https://newsapi.org/v2/top-headlines](https://newsapi.org/v2/top-headlines)

free and API key - limited to 100 daily requests


### Tech Stack

-   React 16.9.0
-   React Native 0.61.5
-   React Navigation
-   React Query
-   React Intl
-   Styled Components
-   ESLint
-   Prettier
-   Husky
