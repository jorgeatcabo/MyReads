# MyReads: A Book Tracking App

## Description

This app allows you to select and categorize books you have read, are currently reading, or want to read. This app uses React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Table of Contents
  - [Description](#description "Description")
  - [Installation](#installation "Installation")
  - [Features](#features "Features")
  - [What You are Getting](#what-you-are-getting "What You are Getting")
  - [Backend Server](#backend-server "Backend Server")  
  - [Create React App](#create-react-app "Create React App")    

 

## Installation

- install all project dependencies with `npm install`
- start the development server with `npm start`

## Features

In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

- Currently Reading
- Want to Read
- Read

![Main Page](/assets/main-page-1.png)

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there. The default value for the control is the current shelf the book is in.

![Main Page](/assets/main-page-2.png)

The main page also has a link to /search, a search page that allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

![Search Page](/assets/search-page.png)

When a book is on a bookshelf, it has the same shelf on both the main application page and the search page.

The search page also has a link to / (the root URL), which leads back to the main page.

When you navigate back to the main page from the search page, you instantly see all of the selections you made on the search page in your library.

## What You Are Getting

```bash
├── CONTRIBUTING.md
├── README.md - This file.
with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├──components
       ├──BookShelf.js # Reusable component for showing different kind of book shelves.
       ├──BookShelfChanger.js # Reusable component for manage the book shelf selected.
       ├──MainPage.js # Component used for the root of the app and for / route.
       ├──SearchBook.js # Component for searching books and for /search route.                     
       ├──SearchBookResults.js # Component for showing the results from the SearchBook component. 
    ├──helpers       
       ├──addSmallThumbnail.js # Helper function for managing books without smallThumbnail property.    
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

## Backend Server

This app provides a backend server. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebook/create-react-app/blob/main/packages/cra-template/template/README.md).
