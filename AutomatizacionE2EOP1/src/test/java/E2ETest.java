
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.annotations.Test;
import sl.BaseScript;

import java.io.IOException;

public class E2ETest extends BaseScript {

    @Test
    public void e2eOption1() throws IOException {

        driver.get(baseURL);
        // Add 2 items to cart
        WebElement phone1 = driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div/div[1]/div/div/h4/a"));
        phone1.click();
        WebElement addCart = driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[2]/div/a"));
        addCart.click();

        pause();
        driver.switchTo().alert().accept();

        WebElement home = driver.findElement(By.xpath("/html/body/nav/div/div/ul/li[1]/a"));
        home.click();
        pause();

        WebElement phone2 = driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div/div[2]/div/div/h4/a"));

        phone2.click();
        WebElement addCart2 = driver.findElement(By.xpath("/html/body/div[5]/div/div[2]/div[2]/div/a"));

        addCart2.click();

        pause();
        driver.switchTo().alert().accept();

        // Check Cart
        WebElement cart = driver.findElement(By.id("cartur"));
        cart.click();
        pause();

        WebElement total = driver.findElement(By.id("totalp"));
        Assert.assertEquals(total.getText(), "1180");

        WebElement placeOrder = driver.findElement(By.xpath("/html/body/div[6]/div/div[2]/button"));
        placeOrder.click();

        //Fill form
        WebElement name = driver.findElement(By.id("name"));
        name.sendKeys("Juan Perez");
        WebElement country = driver.findElement(By.id("country"));
        country.sendKeys("Argentina");
        WebElement city = driver.findElement(By.id("city"));
        city.sendKeys("Buenos Ares");
        WebElement credit = driver.findElement(By.id("card"));
        credit.sendKeys("1111 2222 3333 4444");
        WebElement month = driver.findElement(By.id("month"));
        month.sendKeys("02");
        WebElement year = driver.findElement(By.id("year"));
        year.sendKeys("26");

        pause();

        // End Purchase
        WebElement end = driver.findElement(By.xpath("/html/body/div[3]/div/div/div[3]/button[2]"));
        end.click();
        WebElement thanks = driver.findElement(By.xpath("/html/body/div[10]/h2"));
        Assert.assertEquals(thanks.getText(),"Thank you for your purchase!");

        WebElement okButton = driver.findElement(By.xpath("/html/body/div[10]/div[7]/div/button"));
        okButton.click();

    }
}
