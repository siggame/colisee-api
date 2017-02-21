import * as express from "express";
import * as _ from "lodash";
import * as types from "../types";
import * as request from "requests";
import * as db from "../db";

const router: express.Router = express.Router();

///////////////////////////////////////////////////////////////////////////////
// Users
///////////////////////////////////////////////////////////////////////////////
/**
 * @api {get} /api/users/ Request Multiple User information
 * @apiName GetUsers
 * @apiGroup User
 */
router.get("/", (req, res, next)=>{

});

/**
 * @api {post} /api/users/ Create User
 * @apiName CreateUsers
 * @apiGroup User
 */
router.post("/", (req, res, next)=>{
    
});

/**
 * @api {get} /api/users/:user Request User information
 * @apiName GetUser
 * @apiGroup User
 * 
 * @apiParam {Number} user Users unique ID.
 */
router.get("/:user", (req, res, next)=>{
    
});

/**
 * @api {put} /api/users/:user Update User information
 * @apiName GetUser
 * @apiGroup User
 * 
 * @apiParam {Number} user Users unique ID.
 */
router.put("/:user", (req, res, next)=>{
    
});

/**
 * @api {delete} /api/users/:user Delete User
 * @apiName DeleteUser
 * @apiGroup User
 * 
 * @apiParam {Number} user Users unique ID.
 */
router.delete("/:user", (req, res, next)=>{
    
});

///////////////////////////////////////////////////////////////////////////////
// Team Invitations
///////////////////////////////////////////////////////////////////////////////

/**
 * @api {get} /api/users/:user/invites Get Team Invitations
 * @apiName GetTeamInvites
 * @apiGroup User
 * 
 * @apiParam {Number} user User's unique ID.
 */
router.get("/:user/invites", (req, res, next)=>{
    const user_id: number = req.params.user;

    db.query("team_invitation").where("reciever", user_id)
        .then(rows=>)
});


export default router;