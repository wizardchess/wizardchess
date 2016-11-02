# Wizard Chess
> Move chess pieces with your voice, beat the computer, and battle friends online!

### Team
- Joann Im
- Jay Arella

## Table of Contents
1. [Usage](#usage)
1. [Stack](#stack)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
1. [Contributing](#contributing)
1. [Architecture](#architecture)
1. [API](#api)
1. [Deployment](#deployment)
1. [Testing](#testing)

## Usage

Then, from within the root directory
```sh
$ npm start
```

Then navigate to [localhost:3000](https://localhost:3000/) to run.

## Stack
- React
- Redux
- Axios
- PIXI.js
- Stockfish.js
- Node 6.3.1
- Express
- Postgresql 9.5
  - Sequelize ORM

## Development
### Installing Dependencies

Install [PostgreSQL](https://www.postgresql.org/download/).

From within the root directory:
```sh
$ npm install
```

## Contributing + Github Workflow
See [github.md](github.md) for contribution and github workflow guidelines.

## Architecture
### High Level Architecture
TBD
### Database Schema
Database in Postgres, using Sequelize ORM
![](http://i.imgur.com/in8ZdTW.png)

## API
##### Public End Points
|Request|URL|Response|Privacy|
|---|---|---|---|
|get users by keyword|/api/users?keywords=:keywords|list of relevant users|public|
|get user's profile|/api/users&username=:username|user profile|public|
|get user's games|/api/games&username=:username|list of games a specific user played|public|
|get user's achievements|/api/achievements&username=:username|list of a specific user's achievements|public|
|get game comments|/api/comments&game=:game_id|list of a specific game's comments|public|
|post game comment|/api/comments&game=:game_id|posted comment for a specific game|public|
|get game summary|/api/games&game=:game_id|summary of a specific game|public|
|get duel's games|/api/games&username1=:username&username2=:username|list of games a specific user played|public|
|get messages|/api/messages&friendship=:friendship_id|list of messages between two friends|private|
|post message|/api/messages&friendship=:friendship_id|posted message between two friends |private|

## Deployment
This will be deployed onto AWS using Docker containers.

## Testing
From within the root directory:
```sh
$ npm test
```
