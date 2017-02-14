import * as express from "express";

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
    //TODO: Get invitations
});

/**
 * @api {get} /api/users/:user/invites Get Team Invitation
 * @apiName GetTeamInvite
 * @apiGroup User
 * 
 * @apiParam {Number} user User's unique ID.
 */
router.get("/:user/invites/:invite", (req, res, next)=>{
    //TODO: Get the specific invitation
});

/**
 * @api {get} /api/users/:user/invites Get Team Invitation
 * @apiName AcceptTeamInvite
 * @apiGroup User
 * 
 * @apiParam {Number} user User's unique ID.
 * @apiParam {Number} invite Invite's unique ID. 
 */
router.put("/:user/invites/:invite", (req, res, next)=>{
    //TODO: Apply the user to the Team
    //TODO: Delete the invitation
});

/**
 * @api {get} /api/users/:user/invites Reject Team Invitation
 * @apiName RejectUserInvite
 * @apiGroup User
 * 
 * @apiParam {Number} user Users unique ID.
 * @apiParam {Number} invite Invite unique ID. 
 */
router.delete("/:user/invites/:invite", (req, res, next)=>{
    //TODO: Delete the invitation
});

export default router;