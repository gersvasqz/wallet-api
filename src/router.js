import { Router } from "express";
import controller from "./controller";

const router = Router();

router.post("/api/client", (req, res) =>
  controller(req.body, res, "RegisterClient", 201)
);

router.post("/api/recharge", (req, res) =>
  controller(req.body, res, "RechargeWallet", 200)
);

router.post("/api/payment", (req, res) => {
  res.cookie("auth-wallet", Math.round(Math.random() * 999999), {
    expire: new Date().setMinutes(new Date().getMinutes() + 10),
  });
  req.body.session = req.cookies["auth-wallet"];
  controller(req.body, res, "PayWithWallet", 200);
});

router.get("/api/confirm-token/:token", (req, res) => {
  req.params.session = req.cookies["auth-wallet"];
  controller(req.params, res, "ConfirmToken", 200);
});

router.post("/api/balance", (req, res) =>
  controller(req.body, res, "GetBalance", 200)
);
export default router;
