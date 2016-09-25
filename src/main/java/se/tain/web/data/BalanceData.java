package se.tain.web.data;

import java.math.BigDecimal;

public class BalanceData {
    private BigDecimal cash;
    private BigDecimal bonus;

    public BalanceData() {
    }

    public BalanceData(Double cash, Double bonus) {
        this.cash = BigDecimal.valueOf(cash);
        this.bonus = BigDecimal.valueOf(bonus);
    }

    public BigDecimal getCash() {
        return cash;
    }

    public void setCash(BigDecimal cash) {
        this.cash = cash;
    }

    public BigDecimal getBonus() {
        return bonus;
    }

    public void setBonus(BigDecimal bonus) {
        this.bonus = bonus;
    }
}
