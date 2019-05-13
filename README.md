# Cognito Viewer
 * Cognito Viewer is a support tool for development with amazon cognito and amplify.
   * Sample authenticator with Amplify.
   * Pretty viewer for idToken, accessToken, refreshToken and jwks.json.

## ScreenShot

![auth](./docs/auth.png)

![token](./docs/token.png)

## Setup

```shell
cp .env.sample .env
```

```
AUTH_IDENTITYPOOLID=ap-northeast-1:xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
AUTH_REGION=ap-northeast-1
AUTH_USERPOOLID=ap-northeast-1_xxxxxxxxx
AUTH_USERPOOLWEBCLIENTID=xxxxxxxxxxxxxxxxxxxxxxxxxx
```


```
npm install
npm run dev
```

