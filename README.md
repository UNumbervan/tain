# casino-api-facade
This is a test assignment for Tain frontend js candidates. 
Your goal is to implement simple html5 site which interacts with a 
backend. 

Your web site should meet these requirements:
- custom dom elements should be populated based on info from backend
- web site should have responsive design
- logo and background should be taken from the server based on config 
you get from backend

## Layouts
Layout markdown could be found [here](https://github.com/arturashyrov/casino-api-facade/blob/master/src/main/resources/static/layout.html)

Visually layouts should look like this.

Desktop layout should be:
[!desktop-layout](https://github.com/arturashyrov/casino-api-facade/blob/master/src/main/resources/static/desktop-layout.png)

Mobile layout should be:
[!desktop-layout](https://github.com/arturashyrov/casino-api-facade/blob/master/src/main/resources/static/mobile-layout.png)

Please note that these layouts are very abstract. We won't mind any minor changes to layout

## Api contract:
### /api/config - get web site config

You should use this call in order to render <logo/> element.

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
    "gameLaunchUrlTemplate": "https://blablabla?gameId={game.id}",
    "gameIconsUrlTemplate": "https://blablabla/id_{game.id}.png",
    "logoUrlTemplate": "https://blablabla/tain_logo.png"
}
```

Logo url template is config.logoUrlTemplate

Where {config.brandName} should be substituted with a value you get from config response(config.brandName)
(in example above it should be substituted with "tain")

{config.lobbyCategories} should be used to render <categories-menu/> element. 
Semantically it's an alias for nav html element.
On desktop devices this container should stretch in order to show all categories. If it stretches - it should also
automatically stretch games section. Min-width should be considered
On mobile devices it should render as sandwich menu button(in this case games section dimention will not depend on this element).

### /api/player/info - get player info

You should use this call in order to render <player-info/> element.

Sample response:

```json
{
    "displayName": "Billie Jean",
    "balance": {
        "cash": 300.56,
        "bonus": 150.28
    }
}
```
You should render this tag as 3 blocks which are aligned vertically and prepended with:
name: {displayName}
cash: {balance.cash}
bonuses: {balance.bonus}

### /api/lobby/games/{device}/{category} - query games for target category and device
You should use this call in order to render <games/> element.

Sample response:

```json
[
    {
        "id": 56,
        "lobbyName": "Hunting Season",
        "devices": [
            "mobile",
            "desktop"
        ],
        "categories": [
            "slots"
        ]
    }
]
```

Icon for game could be obtained using url template you got via config.gameIconUrlTemplate:

Possible {device} values are: mobile|desktop
Use it depending on device.

When game icon is clicked - player should be navigated to a game url.
Game url template is what you got from config.gameLaunchUrlTemplate.