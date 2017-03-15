import * as express from "express";

import * as teams from "../teams";

const router: express.Router = express.Router();

// Get Teams
/**
 * @api {get} /api/teams/ Request Multiple Teams Information
 * @apiName GetTeams
 * @apiGroup Teams
 *
 * @apiSuccess (200) {Object[]} User Info
 * @apiError (404) Teams Not Found
 */
router.get("/", (req, res, next)=>{

});

/**
 * @api {post} /api/teams/ Create Team
 * @apiName CreateTeams
 * @apiGroup Teams
 *
 * @apiSuccess (201) User Created
 * @apiError (404) Error
 */
router.post("/", (req, res, next)=>{
    
});

/**
 * @api {get} /api/teams/:team Get Team Info
 * @apiName GetTeamInfo
 * @apiGroup Teams
 *
 * @apiParam {Number} id Team's unique id
 *
 * @apiSuccess (200) {Object[]} team Team Info
 * @apiError (404) Team Not Found
 */
router.get("/:id", (req, res, next)=>{
    const id: number = req.params.id;
    teams.getTeam(id)
    .then((team: teams.Team)=>{
        res.send(team);
    })
    .catch(next);

    
});

/**
 * @api {put} /api/teams/:team Update Team
 * @apiName UpdateTeam
 * @apiGroup Teams
 *
 * @apiParam {Number} id Teams unique id
 * 
 * @apiSuccess (200) Information Updated
 * @apiError (404) Team Not Found
 */
router.put("/:id", (req, res, next)=>{
    
});

/**
 * @api {delete} /api/teams/:team Delete Team
 * @apiName DeleteTeam
 * @apiGroup Teams
 *
 * @apiParam {Number} id Team's unique id
 * 
 * @apiSuccess (200) Deleted User
 * @apiError (404) Team Not Found
 */
router.delete("/:id", (req, res, next)=>{
    
});

/**
 * @api {get} /api/teams/:team/members Get Team Members
 * @apiName GetTeamMembers
 * @apiGroup Teams
 *
 * @apiParam {Number} id Team's unique id
 *
 * @apiSuccess (200) {Objects[]} users Team Users Info
 * @apiError (404) Team Not Found
 */
router.get("/:id/members", (req, res, next)=>{

});

export default router;