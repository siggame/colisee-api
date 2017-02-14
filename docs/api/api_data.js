define({ "api": [
  {
    "type": "get",
    "url": "/api/users/:user/invites",
    "title": "Get Team Invitation",
    "name": "AcceptTeamInvite",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>User's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "invite",
            "description": "<p>Invite's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/users.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:user/invites",
    "title": "Get Team Invitation",
    "name": "AcceptTeamInvite",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>User's unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "invite",
            "description": "<p>Invite's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/",
    "title": "Create User",
    "name": "CreateUsers",
    "group": "User",
    "version": "0.0.0",
    "filename": "src/routers/users.ts",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/api/users/",
    "title": "Create User",
    "name": "CreateUsers",
    "group": "User",
    "version": "0.0.0",
    "filename": "src/routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/users/:user",
    "title": "Delete User",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/users.ts",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/api/users/:user",
    "title": "Delete User",
    "name": "DeleteUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:user/invites",
    "title": "Get Team Invitation",
    "name": "GetTeamInvite",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>User's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/users.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:user/invites",
    "title": "Get Team Invitation",
    "name": "GetTeamInvite",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>User's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:user/invites",
    "title": "Get Team Invitations",
    "name": "GetTeamInvites",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>User's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:user/invites",
    "title": "Get Team Invitations",
    "name": "GetTeamInvites",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>User's unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/users.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:user",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:user",
    "title": "Request User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/users.ts",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/users/:user",
    "title": "Update User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/users.ts",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/api/users/:user",
    "title": "Update User information",
    "name": "GetUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>Users unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/",
    "title": "Request Multiple User information",
    "name": "GetUsers",
    "group": "User",
    "version": "0.0.0",
    "filename": "src/routers/users.ts",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/",
    "title": "Request Multiple User information",
    "name": "GetUsers",
    "group": "User",
    "version": "0.0.0",
    "filename": "src/routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:user/invites",
    "title": "Reject Team Invitation",
    "name": "RejectUserInvite",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "invite",
            "description": "<p>Invite unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/users.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/api/users/:user/invites",
    "title": "Reject Team Invitation",
    "name": "RejectUserInvite",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "user",
            "description": "<p>Users unique ID.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "invite",
            "description": "<p>Invite unique ID.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routers/users.ts",
    "groupTitle": "User"
  }
] });
