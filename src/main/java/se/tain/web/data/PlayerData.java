package se.tain.web.data;

public class PlayerData {
    private String displayName;
    private BalanceData balance;

    public PlayerData(String displayName, BalanceData balance) {
        this.displayName = displayName;
        this.balance = balance;
    }

    public String getDisplayName() {
        return displayName;
    }

    public void setDisplayName(String displayName) {
        this.displayName = displayName;
    }

    public BalanceData getBalance() {
        return balance;
    }

    public void setBalance(BalanceData balance) {
        this.balance = balance;
    }
}
