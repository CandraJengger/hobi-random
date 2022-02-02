<img src="https://img.shields.io/codecov/c/github/CandraJengger/hobi-random"> <img src="https://img.shields.io/github/repo-size/CandraJengger/hobi-random">

# hobi-random

Pustaka kecil yang dapat membantu kamu untuk mendapatkan hobi acak untuk data gadungan atau data _dummy_ yang dapat digunakan untuk aplikasi dan database


## instalasi

### Menggunakan npm

```
npm install hobi-random
```

### Menggunakan CDN

```
<script src="https://unpkg.com/hobi-random@1.0.0/dist/bundle.js" type="module"></script>
```

## Cara menggunakan

### Node.js

```javascript
const { random } = require('hobi-random')

const name = random()
console.log(name)
```

### Browser

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contoh Penggunaan Hobi Random</title>
</head>
<body>
  
  <script src="https://unpkg.com/hobi-random@1.0.0/dist/bundle.js" type="module"></script>
  <script type="module">
    import { random } from '../dist/bundle.js'
    console.log(random())
  </script>

</body>
</html>
```

## Cara berkontribusi

* Fork repositori ini
* clone repositori
* Lakukan perubahan atau perbaikan
* Buat test case
* Push dan buat Pull request