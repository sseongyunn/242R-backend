//code 3.3
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.send('GET /'));
router.post('/', (req, res) => res.send('POST /'));
//어떤 경로로 들어오는 경우에 어떻게 반환하는지에 대한 코드인데 이 경로인 '/'가 뭔지 궁금!
//insomnia로 했을 때, get은 제대로 나오는데 post가 제대로 안 나옴..!! -> 저장만 하고 실행을 안 해서 그런 거 였음..

module.exports = router;