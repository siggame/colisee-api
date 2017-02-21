import * as express from "express";

const router: express.Router = express.Router();

/**
 * @api {get} /api/invites/ Request Invite information
 * @apiName GetInvite
 * @apiGroup Invite
 */
router.get("/{id}", (req, res, next)=>{
    //TODO: Get the invite from the database
    //TODO: Transform the invite 
});

/**
 * @api {post} /api/invites/ Create Invite
 * @apiName CreateInvite
 * @apiGroup Invite
 */
router.post("/", (req, res, next)=>{
    //TODO: Verify a team id was given
    //TODO: Verify a sender id was given
    //TODO: Verify a reciever id was given

    //TODO: Create a new invitation in the database
});

/**
 * @api {get} /api/invites/ Accept Invite
 * @apiName AcceptInvite
 * @apiGroup Invite
 */
router.put("/{id}", (req, res, next)=>{
    //TODO: Apply the user to the team
    //TODO: Delete the invitation from the database
});

/**
 * @api {get} /api/invites/ Decline Invite
 * @apiName DeclineInvite
 * @apiGroup Invite
 */
router.delete("/{id}", (req, res, next)=>{
    //TODO: Delete the invitation from the database
});

export default router;