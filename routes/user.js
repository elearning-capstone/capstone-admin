const express = require("express");
const axios = require("axios");
const router = express.Router();

const user_ip = "http://ip-172-31-33-253.ap-southeast-1.compute.internal:3000";

router.get("/", async (req, res) => {
    try {
        const response = await axios.get(user_ip + "/user");
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

router.put("/role", async (req, res) => {
    try {
        const response = await axios.put(user_ip + "/user/role", req.body);
        return res.json(response.data);
    } catch (err) {
        return res.status(err.response.status || 404).json(err.response.data || { message: "not found" });
    }
});

module.exports = router;