const express = require("express");
const axios = require("axios");
const router = express.Router();

const live_ip = "http://ip-172-31-38-32.ap-southeast-1.compute.internal:3000";

router.put("/", async (req, res) => {
    try {
        const response = await axios.put(live_ip + "/live", req.body, { params: req.query });
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

module.exports = router;