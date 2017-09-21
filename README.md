[![Build Status](https://travis-ci.org/artemisxen/sqrl.svg?branch=master)](https://travis-ci.org/artemisxen/sqrl)

[Our Approach](#our_approach) | [Getting Started](#getting_started) | [User Stories](#user_stories) | [Technologies](#technologies) | [Screenshots](#screenshots) | [Contributors](#contributors)


# Sqrl

Are you forever forgetting about recommendations other people have given you? Have you ever realised that you were just around the corner from  place you've been meaning to check out...after you'd already gotten home? This is where Sqrl steps in. With Sqrl, users can bookmark places of interest and receive a timely, location-based reminder when they are in the vicinity. Never miss out on that bakery, book shop or restaurant again.

<a name="our_apprach"></a>
## Our Approach

### The problem at hand

Our aim was address a key problem, missing out on things. We are continuously innundated with recommendations of places to go and a) have no central place to track these, and b) forget about recommendations we have received.

### Our solution

Our key aim was to give users a single, easily accessible place where their locations could be stared and remind them about their recommendations at the most appropriate time.

We decided that the most appropriate reminder would be a location-based reminder, letting users know about recommendations when they were within walking distance of the place in question.

<a name="getting_started"></a>
## Getting Started

```
# Clone the repository
$ git clone https://github.com/artemisxen/sqrl.git
```
```
# Go into the repository
$ cd sqrl
```

### Installing dependencies

#### Javascript

```
# Install node if you do not have it already
$ brew install node
```
```
# Install the Javascript dependencies
$ npm install
```
```
# Link the Javascript dependencies
$ react-native link
```

#### CocoaPods

```
# Install CocoaPods if you do not have it already
$ gem install cocoapods
```
```
# Go into the ios directory install the CocoaPod dependencies
$ cd ios && pod init
```

### Running the application

#### ios

Download [Xcode](https://itunes.apple.com/gb/app/xcode/id497799835?mt=12)

```
# Run the application
$ react-native run-ios
```

#### Android

Download [Android Studio](https://developer.android.com/studio/index.html) and start the emulator

```
# Run the application
$ react-native run-android
```

<a name="user_stories"></a>
## User Stories

### Primary requirements

```
As a user,
so that I can use the app,
I would like to be able to sign up with my email.
```
```
As a user,
so that I can revisit my places,
I would like to be able to log in to the app.
```
```
As a user,
so that I can find a place of interest,
I would like to be able to search for a location.
```
```
As a user,
so that I can record a place of interest,
I would like to be able to save a location.
```
```
As a user,
so that I can review place of interest,
I would like to be able to view places I have saved.
```
```
As a forgetful user,
so that I don't miss out on places of interest,
I would like to be reminded when I am nearby.
```
```
As a user with a poor sense of direction,
so that I can find my place of interest,
I would like to be able to see directions.
```
```
As a user,
so that I can can be reminded why I saved a place,
I would like to be be able to view more details about it.
```
```
As a user,
so that I can be entertained,
I would like to be able to view a snazzy interface.
```

### Desired additional features

```
As a social media savvy user,
so I can use the app,
I would like to be able to sign up with Facebook
```

<a name="technologies"></a>
## Technologies

* ReactNative
* Firebase
* Google Places API
* Tested with Cavy and Jest

<a name="screenshots"></a>
## Screenshots


<a name="collaborators"></a>
## Collaborators

* [Annalaise Gibbons](https://github.com/annalaise)
* [Sapphire Mason-Brown](https://github.com/SaphMB)
* [Nandini Narasimhan](https://github.com/Nandhini31)
* [Artemis Xenaki](https://github.com/artemisxen)
