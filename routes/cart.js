const router = require('express').Router(),
    query = require('query');

router.post('/', (req, res) => {
    query.create_poster(req.body)
    .then(poster => {
        res.status(200).json(poster)
    })
    .catch(error => {
        console.error(error);
        res.status(500).json(error)
    })
});

router.get('/', (req, res) => {

});

router.patch('/', (req, res) => {

});

router.delete('/', (req, res) => {

});

module.exports = router;