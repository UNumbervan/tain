package se.tain;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import se.tain.web.data.BalanceData;

@Configuration
@ConfigurationProperties(prefix = "player")
public class PlayerConfig {
    private String name;
    private BalanceData balance;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public BalanceData getBalance() {
        return balance;
    }

    public void setBalance(BalanceData balance) {
        this.balance = balance;
    }
}
