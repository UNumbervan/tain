package se.tain.web.data;

import java.util.LinkedList;
import java.util.List;

public class GameData {
    private Integer id;
    private String lobbyName;
    private List<String> devices;
    private List<String> categories;

    public GameData(Integer id, String lobbyName, List<String> devices, List<String> categories) {
        this.id = id;
        this.lobbyName = lobbyName;
        this.devices = devices;
        this.categories = categories;
    }


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLobbyName() {
        return lobbyName;
    }

    public void setLobbyName(String lobbyName) {
        this.lobbyName = lobbyName;
    }

    public List<String> getDevices() {
        return devices;
    }

    public void setDevices(List<String> devices) {
        this.devices = devices;
    }

    public List<String> getCategories() {
        return categories;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }
}
