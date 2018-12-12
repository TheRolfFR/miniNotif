# miniNotif 
![](https://img.shields.io/github/release/therolffr/miniNotif.svg?style=flat-square)
![Drop, enjoy](https://img.shields.io/badge/Drop,-Enjoy%20!-red.svg?style=flat-square)
[![Author](https://img.shields.io/badge/Author-TheRolfFR-%2331a589.svg?style=flat-square)](http://bit.ly/therolf-website)
![License: LGPL--3.0](https://img.shields.io/badge/license-LGPL--3.0-lightgrey.svg?style=flat-square) 
![Repo Size](https://img.shields.io/github/languages/code-size/TheRolfFR/miniNotif.svg?style=flat-square)
[![jsDelivr Hits](https://data.jsdelivr.com/v1/package/gh/TheRolfFR/miniNotif/badge?style=flat-square)](https://www.jsdelivr.com/package/gh/TheRolfFR/miniNotif)

Display custom notifications easily

## Usage

### 1. Import js and css
```html
<script src="path/to/miniNotif.js"></script>
<link href="path/to/miniNotif.css" rel="stylesheet" />
```
You can use jsDelivr links to keep updated your miniNotif : https://www.jsdelivr.com/package/gh/TheRolfFR/miniNotif 

### 2. Initalize miniNotif in your javascript

```javascript
miniNotif.init();
```

You can initialize with a parameter, the name of the selector where you want your notifications to pop in or the object himself :
```javascript
miniNotif.init('#element');
// or
miniNotif.init(document.getElementById('element'));
```

### 3. Diplay a new notification:

The addNotif function handles theses parameters in an object :

| Parameter name | Required | Default value | Type    | Description                              |
| -------------  |:--------:| ------------- | ------- | ---------------------------------------- |
| text           | X        |               | String  | Text of the notification                 |
| process        |          | true          | Boolean | Hide immediatly the notif after if true  |
| icon           |          |               | String  | Icon of the notification                 |
| color          |          |               | String  | Color of the notification (CSS property) |
| background     |          |               | String  | background of the notification (CSS property) |
| fadeinduration |          | 300ms         | Number  | Duration in milliseconds of the fade in effect |
| visibleduration   |          | 200ms         | Number  | Duration in milliseconds where it is visible |

Example : 
```javascript
miniNotif.addNotif({
    text: 'New notification !!!',
    icon: '(!)',
    color: 'white',
    background: 'linear-gradient(135deg, rgba(98,125,77,1) 0%, rgba(31,59,8,1) 100%);',
    fadeinduration: 250,
    visibleduration: 1000
});
```

### 4. Enjoy !