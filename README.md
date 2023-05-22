# Zoraid
It is an http api that receives a query and searches in 4 different search engines using a headless browser.



### Before use it

You have to run:
`npm i && npm start`

### How to use it
Open a navigator or a http client and send a GET to:

`http://localhost:8082/search?q=your query here`

It will trigger the headless browser instance, access your query via bing, duckduckgo, google and yandex, take screenshots and response to you.

Than if you go to `/zoraid/img` you will be able to see the screenshots there.

### Why I built this
To demonstrate - NOT FOR COMERCIAL USE - Express, TypeScripts and Headless browser skills working all together.

