const express = require('express')
const router = express.Router();
const videoJSON = require("../data/videos.json");
const { v4: uuidv4 } = require('uuid');


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
        image:"http://localhost:8080/images/image0.jpeg"
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
    res.json(newVideo);
});

module.exports = router;