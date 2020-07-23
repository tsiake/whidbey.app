## server-side routes
******
```
These are the server-side routes that will contain a server-side response.

apis are served through apiRouter.js - sub routes split into api folder

user accounts get verified through confLinkRouter.js - updates with verified: true in db once the account confirmation link is clicked

downloads go through downloadsRouter.js - (receipts, pdfs, etc) - to be implemented

the initial webpage gets sent through homeRouter.js, react-router handles the other page links

```
