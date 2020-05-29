package com.stepdefs;
import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

public class LoginStepDef {

    ChromeDriver driver;
    String firstName, lastName, email, password;

    @Before
    public void setUp(){
        driver = new ChromeDriver();
    }

    @Given("^User is on the facebook login page$")
    public void user_is_on_the_facebook_login_page(){
        driver.get("https://www.facebook.com");
    }
    @When("^User enters the following in the corresponding fields$")
    public void user_enters_the_following_in_the_corresponding_fields(DataTable table) {
        List<List<String>> data = table.raw();
        firstName = data.get(1).get(1);
        lastName = data.get(2).get(1);
        email = data.get(3).get(1);
        password = data.get(4).get(1);

        driver.findElement(By.name("firstname")).sendKeys(firstName);
        driver.findElement(By.name("lastname")).sendKeys(lastName);
        driver.findElement(By.name("reg_email__")).sendKeys(email);
        driver.findElement(By.name("reg_passwd__")).sendKeys(password);
    }

    @Then("^The user sees that his name is present in the username field$")
    public void the_user_sees_that_his_name_is_present_in_the_username_field() {
        String user_name = driver.findElement(By.name("firstname")).getAttribute("value");
        Assert.assertEquals(firstName, user_name);
        String last_name = driver.findElement(By.name("lastname")).getAttribute("value");
        Assert.assertEquals(lastName, last_name);
        String user_email = driver.findElement(By.name("reg_email__")).getAttribute("value");
        Assert.assertEquals(email, user_email);
        String user_password = driver.findElement(By.name("reg_passwd__")).getAttribute("value");
        Assert.assertEquals(password, user_password);
    }

    @After
    public void cleanUp(){
        driver.quit();
        driver = null;
    }
}
