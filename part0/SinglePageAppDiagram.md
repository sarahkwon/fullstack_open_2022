rowser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
server-->browser: spa

browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css

browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: spa.js

note for above: browser executes js code that requests JSON data from server

browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [{"content":"asddd","date":"2023-01-09T00:01:20.481Z"}, ...]

note for above: browser renders notes to display through event handler