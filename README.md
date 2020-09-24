# :zap: Quizer

Building a QUIZ web application (in progress)


## :arrow_right: Technologies Used:

:one: Node

:two: Express

:three: React + Redux

:four: MongoDB


## :arrow_right: Get Started

Clone the repository

`git clone https://github.com/sureshmangs/Quizer.git`

In the project directory(Quizer)

`npm install`

In the client directory

`npm install`

In the root directory, inside the server/.env file, set the following fields
```
module.exports = {
JWT_SECRET='xxxxxxxxxxxxxxxxxx'
CLIENT_ID='xxxxxxxxxxxxxxxxxxx Google OAuth Client ID xxxxxxxxxxxxxxxxxxxxxx'
CLIENT_SECRET='xxxxxxxxxxxxxxxxxx Google OAuth Secret Id xxxxxxxxxxxxx'
MONGODB_URI='xxxxxxxxxxxxxxxxxx MongoDB Atlas ID xxxxxxxxxxxxxxxxxxxxxxx;
}
```

In the client directory, inside the ./src/config/keys.js file, set the following fields
```
module.exports = {
    CLIENT_ID: 'xxxxxxxxxxxxxxxxxxx Google OAuth Client ID xxxxxxxxxxxxxxxxxxxxxx'
}
```


To run the application, in the root dirctory

`npm run start-dev`



## :arrow_right: License

MIT
