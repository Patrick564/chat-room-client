# Client Room Chat

This is the client for the [server room chat](https://github.com/Patrick564/chat-room-server).
Created with React and Express, server uploaded to Heroku and client to [Vercel](https://chat-room-client-psi.vercel.app/).

![image](https://user-images.githubusercontent.com/35877310/154310292-b3cc4704-2649-4e1f-b861-7540ac1160e7.png)

## How to install

First clone this and server repository.

```bash
mkdir chat-room
cd chat-room/
git clone https://github.com/Patrick564/chat-room-server
git clone https://github.com/Patrick564/chat-room-client
```

Go to server folder, create a .env file with ORIGIN variable and put your local client url, then run:

```bash
npm install
npm run start
```

Now in the client folder make a .env file and put REACT_APP_SOCKET_SERVER with your local server url and run:

```bash
npm install
npm run start
```

And go to the url and just enjoy!
