# Backend list github repos

This backend is used to connect with github api (https://docs.github.com/)

## Requisites to install

- With yarn installed, run the following commands in the root path:

### `yarn install`
### `yarn dev:start`

## Endpoints

- '/users/{username} -> GET endpoint that list all public repos from a username
- '/starred/{username}/{repo}' -> PUT endpoint for star a repo (requires authentication on the body of the request)

**Express is used for routing the app**

