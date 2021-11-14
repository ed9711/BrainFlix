const express = require('express')
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')

const videoJSON = JSON.parse(fs.readFileSync("./data/videos.json"));

router.get("/", (req, res) => {
    res.status(200);
    res.json(videoJSON[0]);
});

router.get("/:videoId", (req, res, next) => {
    const video = videoJSON[1].find(video => video.id === req.params.videoId);
    if (video) {
        res.status(200);
        res.json(video);
    } else {
        res.status(404);
        next();
    }
});

router.post("/", (req, res) => {
    const newId = uuidv4();
    const newVideo = {
        id: newId,
        title: req.body.title,
        channel: req.body.channel,
        image: req.body.image
    };
    const newVideoDetail = {
        id: newId,
        title: newVideo.title,
        channel: newVideo.channel,
        image: newVideo.image,
        description: req.body.description,
        views: 0,
        likes: 0,
        duration: "4:01",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: new Date().getTime(),
        comments: []
      };

    videoJSON[0].push(newVideo);
    videoJSON[1].push(newVideoDetail);
    fs.writeFileSync("./data/videos.json", JSON.stringify(videoJSON));
    res.json(newVideo);
});

module.exports = router;