import * as express from "express";
import * as _ from "lodash";
import * as rp from "request-promise";
import * as types from "../types";
import * as users from "../users";

const router: express.Router = express.Router();

///////////////////////////////////////////////////////////////////////////////
// Users
///////////////////////////////////////////////////////////////////////////////

/**
 * @api {get} /api/users/ Request Multiple User information
 * @apiName GetUsers
 * @apiGroup User
 *
 * @apiSuccess (200) {Object[]} User Info
 * @apiError (404) Users Not Found
 */
router.get("/", (req, res, next)=>{

});

/**
 * @api {post} /api/users/ Create User
 * @apiName CreateUsers
 * @apiGroup User
 *
 * @apiSuccess (201) User Created
 * @apiError (400) BadRequest
 */
router.post("/", (req, res, next)=>{
    const dbData = {};
    db.query("user").insert(dbData, "*");

    rp.
});

/**
 * @api {get} /api/users/:user Request User information
 * @apiName GetUserInfo
 * @apiGroup User
 * 
 * @apiParam {Number} user Users unique ID.
 *
 * @apiSuccess (200) {Object[]} user User Info
 * @apiError (404) User Not Found
 */
router.get("/:user", (req, res, next)=>{

    db.query("user")
});

/**
 * @api {put} /api/users/:user Update User information
 * @apiName UpdateUser
 * @apiGroup User
 * 
 * @apiParam {Number} user Users unique ID.
 *
 * @apiSuccess (200) Information Updated
 * @apiError (404) User Not Found
 */
router.put("/:user", (req, res, next)=>{
    
});

/**
 * @api {delete} /api/users/:user Delete User
 * @apiName DeleteUser
 * @apiGroup User
 * 
 * @apiParam {Number} user Users unique ID.
 *
 * @apiSuccess (200) Deleted User
 * @apiError (404) User Not Found
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
 *
 * @apiSuccess (200) {Objects[]} teams Returns the teams for which the user has invitations
 * @apiError (404) User Not Found
 */
router.get("/:user/invites", (req, res, next)=>{
    const user_id: number = req.params.user;

    db.query("team_invitation").where("reciever", user_id)
        .then(rows=>)
});

///////////////////////////////////////////////////////////////////////////////
// Teams
///////////////////////////////////////////////////////////////////////////////

/**
  * @api {get} /api/users/:user/team Get User Teams
  * @apiName GetUserTeams
  * @apiGroup User
  *
  * @apiParam {Number} user User's unique ID
  *
  * @apiSuccess (200) {Object[]} teams Information for the teams which the user is on
  * @apiError (404) User Not Found
  */
router.get("/:user/teams" (req, res, next)=>{

});


export default router;