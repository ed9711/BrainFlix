const express = require('express')
const router = express.Router();
const videoJSON = require("../data/videos.json");
const { v4: uuidv4 } = require('uuid');


router.get("/", (req, res) => {
    console.log(req.params);
    res.status(200);
    res.json(videoJSON[0]);
});

router.get("/:videoId", (req, res) => {
    console.log(req.params);
    res.status(200);
    res.json(videoJSON[1].find(video => video.id === req.params.videoId));
});

router.post("/", (req, res) => {
    console.log(req.body);
    res.json();
});

module.exports = router;