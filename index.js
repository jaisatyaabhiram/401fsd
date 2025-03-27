const express = require('express')
const app = express()
const port = 3000

app.set('view engine','ejs');
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/signup', (req, res) => {
    res.render('signup');
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})