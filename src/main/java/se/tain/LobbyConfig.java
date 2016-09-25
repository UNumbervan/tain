package se.tain;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import se.tain.web.data.GameCategoryData;

import java.util.List;

@Configuration
@ConfigurationProperties(prefix = "lobby")
public class LobbyConfig {
    private String brandName;
    private String gameLaunchUrlTemplate;
    private String gameIconsUrlTemplate;
    private String logoUrlTemplate;
    private List<GameCategoryData> lobbyCategories;

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
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

    public String getLogoUrlTemplate() {
        return logoUrlTemplate;
    }

    public void setLogoUrlTemplate(String logoUrlTemplate) {
        this.logoUrlTemplate = logoUrlTemplate;
    }

    public List<GameCategoryData> getLobbyCategories() {
        return lobbyCategories;
    }

    public void setLobbyCategories(List<GameCategoryData> lobbyCategories) {
        this.lobbyCategories = lobbyCategories;
    }
}
