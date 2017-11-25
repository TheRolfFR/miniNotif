# miniNotif
[![Dependency jQuery](https://img.shields.io/badge/Dependency-jQuery-red.svg)](https://jquery.com/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)

Display custom notifications easily

## Usage

### 1. Import js and css

Import jQuery first :
```html
<script src='path/to/jquery.min.js'></script>
```
Then custoMenu :
```html
<script src="path/to/miniNotif.js"></script>
<link  href="path/to/miniNotif.css" rel="stylesheet" />
```
You can use rawgit links to keep updated your miniNotif :
```html
<script src="https://rawgit.com/TheRolfFR/miniNotif/master/miniNotif.js"></script>
<link  href="https://rawgit.com/TheRolfFR/miniNotif/master/miniNotif.css" rel="stylesheet" />
```

### 2. Initalize miniNotif

```javascript
miniNotif.init();
```

### 3. Diplay a new notification:

The addNotif function handles theses parameters :

|Rank|              | Required | Type    | Desc                                    |
| - | ------------- |:--------:|-------- | --------------------------------------- |
|0  | proccessOrNot | X        | Boolean | Hide immediatly the notif after if true |
|1  | text          | X        | String  | Text of the notification                |
|2  | icon          |          | String  | Icon of the notification                |
|3  | color         |          | String  | Text of the notification (hex/rgb/name) |
```javascript
miniNotif.addNotif(1, 'New notif !!!', '/!\\');
```

### 4. Enjoy !


License: <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY 4.0 International</a>
