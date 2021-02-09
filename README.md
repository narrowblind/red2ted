# red2ted
Chrome extension for redirecting reddit.com to teddit.net

### Teddit
https://codeberg.org/teddit/teddit
teddit.net
A free and open source alternative Reddit front-end focused on privacy.
* No JavaScript or ads
* All requests go through the backend, client never talks to Reddit
* Prevents Reddit from tracking your IP or JavaScript fingerprint
* [Unofficial API](https://codeberg.org/teddit/teddit/wiki#teddit-api) (RSS & JSON support, no rate limits or Reddit account required)
* Lightweight (teddit frontpage: ~30 HTTP requests with ~270 KB of data downloaded vs. Reddit frontpage: ~190 requests with ~24 MB)
* Self-hostable. Anyone can setup an instance. An instance can either use Reddit's API with or without OAuth (so Reddit API key is not necessarily needed).

### Running
1. Clone this repo to your desired directory
2. Open Chrome Developer `chrome://extensions/` in your browser
3. Turn on Developer mode in the top right corner
4. Click "Load unpacked" extension
5. Select the directory you cloned to
6. This extension should appear in your list extensions, make sure it's on
