# Customer Management App

This is a simple React Native application built using Expo and Redux. The app allows users to add customers based on regions and view all customers.

## Features

* Select region (East, West, North, South)
* Add customer details (Name, Email, Phone)
* View all customers
* Data is managed using Redux

## Technologies Used

* React Native
* Expo
* Redux
* React Navigation

## How to Run

1. Install dependencies

```bash
npm install
```

2. Start the project

```bash
npx expo start
```

3. Run on device/emulator using Expo Go or Android Studio

## Project Structure

* App.js – Main entry point
* Navigation.js – Handles navigation
* src/screens – Contains all screens

  * Regions.js
  * Customer.js
  * AllCustomers.js
* src/store – Redux setup

## How It Works

* User selects a region from the home screen
* Then enters customer details and saves
* Data is stored in Redux store
* All customers can be viewed in a separate screen

## Notes

* All fields are required while adding a customer
* Each customer has a unique ID generated using Date.now()

## Author

Your Name
