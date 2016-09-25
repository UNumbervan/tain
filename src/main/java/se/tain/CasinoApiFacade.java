package se.tain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.tain.web.data.GameData;
import se.tain.web.data.LobbyConfigData;
import se.tain.web.data.PlayerData;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class CasinoApiFacade {
    @Autowired
    private PlayerConfig playerConfig;
    @Autowired
    private LobbyConfig lobbyConfig;
    @Autowired
    private Dictionary dictionary;

    @GetMapping(value = "player/info")
    public PlayerData playerInfo() {
        PlayerData playerData = new PlayerData();
        playerData.setDisplayName(playerConfig.getName());
        playerData.setBalance(playerConfig.getBalance());
        return playerData;
    }

    @RequestMapping("config")
    public LobbyConfigData config() {
        LobbyConfigData configData = new LobbyConfigData();
        configData.setBrandName(lobbyConfig.getBrandName());
        configData.setGameLaunchUrlTemplate(lobbyConfig.getGameLaunchUrlTemplate());
        configData.setLobbyCategories(lobbyConfig.getLobbyCategories());
        configData.setGameIconsUrlTemplate(lobbyConfig.getGameIconsUrlTemplate());
        configData.setLogoUrlTemplate(lobbyConfig.getLogoUrlTemplate());
        return configData;
    }

    @RequestMapping("lobby/games/{device}/{category}")
    public List<GameData> getGames(@PathVariable(value = "device") String device, @PathVariable(value = "category") String category) {
        return dictionary.getGames().stream()
                .filter(gameData -> gameData.getDevices().contains(device))
                .filter(gameData -> gameData.getCategories().contains(category))
                .collect(Collectors.toList());
    }

}
