const router = express.Router();

router.get('/', (req, res) => {
    res.send('you have reached the knstorage api')
})

module.exports = router;