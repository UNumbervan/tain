# casino-api-facade
This is a test assignment for Tain frontend js candidates. 
Your goal is to implement simple html5 site which interacts with a 
backend. 

Your web site should meet these requirements:
- custom dom elements should be populated based on info from backend
- web site should have responsive design
- logo and background should be taken from the server based on config 
you get from backend

Api contract:
/config - get web site config
Sample response:
```json
{
    "brandName": "tain",
    "lobbyCategories": [
        {
            "id": "slots",
            "displayName": "Slots"
        },
        {
            "id": "video_poker",
            "displayName": "Video Poker"
        },
        {
            "id": "table_games",
            "displayName": "Table Games"
        }
    ],
    "gameLaunchUrlTemplate": "https://casinotesteur.tain.com/lobby/cwl/igame?gameId=$gameId"
}
```

Logo url template:
https://cdn.tain.com/shared/content/backoffice/logo/{config.brandName}_logo.png

Where {config.brandName} should be substituted with a value you get from config response
(in example above it should be substituted with "tain")