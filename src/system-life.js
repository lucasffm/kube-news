const express = require('express');
const router = express.Router();
const os = require('os');

let isHealth = true;
let readTime = new Date(Date.now());
const isRead = () => {
  return readTime < new Date(Date.now());
};

router.get('/ready', (req, res) => {
  if (isRead()) {
    res.statusCode = 200;
    return res.send('Ok');
  } else {
    res.statusCode = 500;
    return res.send('');
  }
});

router.get('/health', (req, res) => {
  res.json({
    state: 'up',
    machine: os.hostname(),
  });
});

router.put('/unhealth', (req, res) => {
  isHealth = false;
  res.send('OK');
});

router.put('/unreadyfor/:seconds', (req, res) => {
  const dado = new Date(
      new Date(Date.now()).getTime() + (1000 * req.params.seconds),
  );

  readTime = dado;
  res.send('OK');
});

const healthMid = function(req, res, next) {
  if (isHealth) {
    next();
  } else {
    res.statusCode = 500;
    return res.send('');
  }
};

exports.routers = router;
exports.middlewares = {healthMid};
