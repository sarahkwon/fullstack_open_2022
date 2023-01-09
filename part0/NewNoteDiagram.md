browser-->server: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
server-->browser: HTTP status code 302

note for above: server is signalling the browser to do a new HTTP GET request

browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
server-->browser: notes

browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
server-->browser: main.css

browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
server-->browser: main.js

note for above: browser executes js code that requests JSON data from server

browser-->server: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
server-->browser: [...,...,{"content":"Hi from California!","date":"2023-01-09T09:57:32.064Z"}]]

note for above: browser renders notes to display through event handler
