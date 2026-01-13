# Async State Management with Redux Thunk & RTK Query
## Project Overview

This project demonstrates async state management in React using Redux Toolkit, combining both:

- Redux Thunk → for custom async logic and side effects

- RTK Query → for efficient data fetching, caching, and automatic state management

The app fetches GitHub user profile data using the GitHub REST API and displays user details like avatar, name, and bio.

## Live Demo
Check it out here: [🌐 Live Project](https://githprof.netlify.app)

## Objectives

- Learn how to manage async state using Redux Thunk

- Understand RTK Query for API calls and caching

- Integrate both Thunk and RTK Query in a single Redux store

- Handle loading, error, and empty input states properly

## Tech Stack

- React

- Redux Toolkit

- Redux Thunk

- RTK Query

- Axios

- GitHub REST API

## (Optional but Recommended) GitHub API Token

- GitHub limits unauthenticated requests to 60/hour.

- Create a .env file in the root directory:

- REACT_APP_GITHUB_TOKEN=your_personal_access_token

## How Async State Management Works
### Redux Thunk

- Handles manual async logic

- Useful for:

- Logging

- Pre-processing data

- Custom error handling

- Uses createAsyncThunk

### Example:

- dispatch(fetchUserWithLog(username));

### RTK Query

- Handles API fetching + caching automatically

- Reduces boilerplate

- Prevents unnecessary refetching

### Example:

const { data, isLoading } = useGetUserQuery(username, {
  skip: !username
});

## Combined Flow (Important)

- User enters a GitHub username

### On Search:

- Redux Thunk fetches user data (custom async logic)

- RTK Query fetches and caches user data

### UI updates based on:

- loading

- error

- data

No API call is made if input is empty

## Key Features

-  Uses Redux Thunk + RTK Query together
-  Prevents API calls on empty input
-  Handles loading & error states
-  GitHub API integration
-  Clean and modular structure
