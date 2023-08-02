# PicPocket

This is a small React application written in TypeScript that utilizes a REST API to fetch a collection of images and their meta-information in JSON format.

## Features

1. View Photo Albums: The application displays photo albums grouped by `userId` in an overview. The user can see a list of available photo albums.

2. View Album Photos: By selecting a specific photo album from the list, the user can view the collection of photos in that album.

3. Favorite Photos: The user has the option to favorite individual photos. Favorited photos can be viewed in a separate view.

## REST API

The application uses the following REST API endpoints to fetch data:

- Fetch all albums: `GET https://jsonplaceholder.typicode.com/albums`
- Fetch a specific album: `GET https://jsonplaceholder.typicode.com/albums/{id}`
- Fetch photos in a specific album: `GET https://jsonplaceholder.typicode.com/photos?albumId={id}`

Note: The application does not save any data in the backend or a database; it operates as a client-only application (localStorage).

## Installation

1. Clone the repository:

```bash
git clone git@github.com:tonyfarha/picpocket.git
```

2. Navigate to the project directory:

```bash
cd your-project
```

3. Install dependencies:

```bash
npm install
```

## Usage

To start the development server and run the application, use the following command:

```bash
npm run dev
```