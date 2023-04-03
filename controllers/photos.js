const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET /photos/index')
})

module.exports = router
