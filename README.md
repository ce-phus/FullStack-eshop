<p align="center">
  <p align="center">
    <a href="https://justdjango.com/?utm_source=github&utm_medium=logo" target="_blank">
      <!-- <img src="https://assets.justdjango.com/static/branding/logo.svg" alt="JustDjango" height="72"> -->
    </a>
  </p>
  <p align="center">
    The Definitive Django Learning Platform.
  </p>
</p>

# Django Nextjs 13 Ecommerce

<p align="center">
  <a href="https://youtu.be/RG_Y7lIDXPM"><img src="https://github.com/justdjango/django-react-ecommerce/blob/master/thumbnail.png" width="290"></a>
</p>

This repository contains a Django and Next js ecommerce project. Among other functionality, users can create their account, add items to their cart and purchase those items using Daraja API.
In the application you can run the application with one port `localhost:8080`, which uses NGINX a reverse proxy config that connnects the frontend to the backend docker containers 

## Backend development workflow

```json
cd backend
virtualenv venv
source env/bin/activate
pip install -r requirements.txt
python manage.py runserver
```

## Frontend development workflow

```json
cd client
npm i
npm run dev
```

## For deploying

```json
npm run build
```

---

## Run with Docker

```json
install docker
make collectstatic - to collect static files
Run make build 
navigate to port localhost:8080 in browser
```

### Mpesa Sandbox Config (Daraja API)

```
Open browser, navigate to daraja mpesa and create account
Create and app api sandbox
create env file fill in the 
consumer_secret
consumer_key
shortcode
pass_key
access_token_url
checkout_url
test_c2b_shortcode
```
