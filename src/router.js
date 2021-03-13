import { Router } from "express";
import controller from "./controller";

const router = Router();

router.post("/api/client", (req, res) => {
  controller(req.body, res, "register", 201);
});

router.post("/api/recharge", (req, res) => {
  controller(req.body, res, "recharge", 200);
});

router.post("/api/payment", (req, res) => {
  controller(req.body, res, "payment", 200);
});

router.get("/api/confirm-token/:token", (req, res) => {
  controller(req.params, res, "confirm", 200);
});

router.post("/api/balance", (req, res) => {
  controller(req.params, res, "balance", 200);
});

module.exports = router;
