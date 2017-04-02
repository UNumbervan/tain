package se.tain;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import se.tain.web.data.*;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

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
        PlayerData playerData = new PlayerData("John Wick", new BalanceData(100.0, 200.0));
        return playerData;
    }

    @RequestMapping("config")
    public LobbyConfigData config() {
        LobbyConfigData configData = new LobbyConfigData();
        configData.setBrandName("tain");
        configData.setGameLaunchUrlTemplate("https://casinotesteur.tain.com/lobby/cwl/igame?gameId={game.id}");
        List<GameCategoryData> lobbyCategories = new ArrayList<>();
        lobbyCategories.add(new GameCategoryData("slots", "Slots"));
        lobbyCategories.add(new GameCategoryData("video_pokers", "Video Pokers"));
        lobbyCategories.add(new GameCategoryData("table_games", "Table games"));

        configData.setLobbyCategories(lobbyCategories);
        configData.setGameIconsUrlTemplate("https://cdn.tain.com/casino/v3/content/flash/online_lobby/tain/icons/id_{game.id}.jpg");
        configData.setLogoUrlTemplate("https://cdn.tain.com/shared/content/backoffice/logo/{config.brandName}_logo.png");
        return configData;
    }

    @RequestMapping("lobby/games/{device}/{category}")
    public List<GameData> getGames(@PathVariable(value = "device") String device, @PathVariable(value = "category") String category) {
        List<GameData> gamesData = new ArrayList<>();

        List<String> mobile = new ArrayList<>();
        mobile.add("mobile");

        List<String> desktop = new ArrayList<>();
        desktop.add("desktop");

        List<String> both = new ArrayList<>();
        both.add("desktop");
        both.add("mobile");

        List<String> table_games = new ArrayList<>();
        table_games.add("table_games");

        List<String> slots = new ArrayList<>();
        slots.add("slots");

        List<String> video_pokers = new ArrayList<>();
        video_pokers.add("video_pokers");

        gamesData.add(new GameData(1, "Aaaaaa bbb", mobile, table_games));
        gamesData.add(new GameData(2, "Asdfasdf", mobile, table_games));
        gamesData.add(new GameData(3, "Basdfadsf", mobile, table_games));
        gamesData.add(new GameData(4, "Pasdfaef", mobile, table_games));
        gamesData.add(new GameData(5, "DTERQWE", mobile, slots));
        gamesData.add(new GameData(6, "ASDFAGAS", mobile, slots));
        gamesData.add(new GameData(7, "ASDGAF", mobile, slots));
        gamesData.add(new GameData(8, "ASDGAsdf", desktop, table_games));
        gamesData.add(new GameData(9, "ASDGAHF", desktop, table_games));
        gamesData.add(new GameData(10, "OUOIU", desktop, slots));
        gamesData.add(new GameData(101, "1OUOIU", desktop, slots));
        gamesData.add(new GameData(102, "2OUOIU", desktop, slots));
        gamesData.add(new GameData(103, "3OUOIU", desktop, slots));
        gamesData.add(new GameData(104, "4OUOIU", desktop, slots));
        gamesData.add(new GameData(105, "5OUOIU", desktop, slots));
        gamesData.add(new GameData(106, "6OUOIU", desktop, slots));
        gamesData.add(new GameData(107, "7OUOIU", desktop, slots));
        gamesData.add(new GameData(108, "8OUOIU", desktop, slots));
        gamesData.add(new GameData(11, "LKGF", desktop, video_pokers));
        gamesData.add(new GameData(12, "Dfasd", both, video_pokers));
        gamesData.add(new GameData(13, "LKJFLD", both, video_pokers));
        gamesData.add(new GameData(14, "ADSGdf", both, slots));
        gamesData.add(new GameData(15, "DFAsd", both, table_games));

        return gamesData.stream()
                .filter(gameData -> gameData.getDevices().contains(device))
                .filter(gameData -> gameData.getCategories().contains(category))
                .collect(Collectors.toList());
    }

}
