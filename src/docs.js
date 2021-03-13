/**
 * @api {post} /api/client create a new client
 * @apiVersion 1.0.0
 * @apiname createNewClient
 * @apiGroup Wallet
 *
 * @apiParam {String} dni document of client
 * @apiParam {String} name name of client
 * @apiParam {Number} phone phone of client
 * @apiParam {String} email email of client
 *
 * @apiParamExample {Object} Request example
 * {
 *  "name": "Gerson",
 *  "dni": "V123456789",
 *  "phone": 4147989260,
 *  "email": "gdvr1991@gmail.com"
 * }
 */

/**
 * @api {post} /api/recharge recharge a client's wallet
 * @apiVersion 1.0.0
 * @apiName rechargeWallet
 * @apiGroup Wallet
 *
 * @apiParam {String} dni document of client
 * @apiParam {Number} phone phone of client
 * @apiParam {Number} value mount to recharge
 *
 * @apiParamExample {Object}
 * {
 *  "dni": "V123456789",
 *  "phone": 4147989260,
 *  "value": 34.2
 * }
 */

/**
 * @api {post} /api/payment pay from the client's wallet
 * @apiVersion 1.0.0
 * @apiName payment
 * @apiGroup Wallet
 *
 * @apiParam {String} dni document of client
 * @apiParam {Number} phone phone of client
 * @apiParam {Number} value mount to payment
 *
 * @apiParamExample {Object}
 * {
 *  "dni": "V123456789",
 *  "phone": 4147989260,
 *  "value": 34.2
 * }
 */

/**
 * @api {get} /api/confirm-token/:token confirm token to process payment
 * @apiVersion 1.0.0
 * @apiName confirmPayment
 * @apiGroup Wallet
 *
 * @apiParam (Path Params) {String} token token of payment
 */

/**
 * @api {post} /api/balance balance of client's wallet
 * @apiVersion 1.0.0
 * @apiName balanceWallet
 * @apiGroup Wallet
 *
 * @apiParam {String} dni document of client
 * @apiParam {Number} phone phone of client
 *
 * @apiParamExample {Object}
 * {
 *  "dni": "V123456789",
 *  "phone": 4147989260,
 * }
 */
