package se.tain;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import se.tain.web.data.GameData;

import java.util.List;

@Configuration
@ConfigurationProperties(prefix = "dictionary")
public class Dictionary {
    private List<GameData> games;

    public List<GameData> getGames() {
        return games;
    }

    public void setGames(List<GameData> games) {
        this.games = games;
    }
}
