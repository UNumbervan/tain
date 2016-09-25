package se.tain.web.data;

import java.util.List;

public class LobbyConfigData {
    String brandName;
    List<GameCategoryData> lobbyCategories;
    String gameLaunchUrlTemplate;
    String gameIconsUrlTemplate;

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public List<GameCategoryData> getLobbyCategories() {
        return lobbyCategories;
    }

    public void setLobbyCategories(List<GameCategoryData> lobbyCategories) {
        this.lobbyCategories = lobbyCategories;
    }

    public String getGameLaunchUrlTemplate() {
        return gameLaunchUrlTemplate;
    }

    public void setGameLaunchUrlTemplate(String gameLaunchUrlTemplate) {
        this.gameLaunchUrlTemplate = gameLaunchUrlTemplate;
    }

    public String getGameIconsUrlTemplate() {
        return gameIconsUrlTemplate;
    }

    public void setGameIconsUrlTemplate(String gameIconsUrlTemplate) {
        this.gameIconsUrlTemplate = gameIconsUrlTemplate;
    }
}
