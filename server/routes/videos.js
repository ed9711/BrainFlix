const express = require('express')
const router = express.Router();
const videoJSON = require("../data/videos.json");
const { v4: uuidv4 } = require('uuid');


router.get("/", (req, res) => {
    console.log(req.params);
    res.status(200);
    res.json(videoJSON[0]);
});

router.get("/:videoId", (req, res, next) => {
    console.log(req.params);
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
    console.log(req.body);
    const newId = uuidv4();
    const newVideo = {
        id: newId,
        title: req.body.title,
        channel: req.body.channel,
        image:"https://i.imgur.com/l2Xfgpl.jpg"
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
    console.log(newVideoDetail.timestamp);
    videoJSON[0].push(newVideo);
    videoJSON[1].push(newVideoDetail);
    res.json(newVideo);
});

module.exports = router;