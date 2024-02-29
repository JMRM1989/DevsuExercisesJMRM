Import Libraries:

Import the necessary classes from Selenium and TestNG.
Import the BaseScript class.

Define Test Class:

Declare a class called E2ETest that extends BaseScript.

Define Test Method:

Define a test method named e2eOption1() with the @Test annotation.
Handle I/O exceptions.

Navigate to Base Page:

Use driver.get(baseURL) to open the base URL.

Add Items to Cart:

Find the first item and click on it.
Find the "Add to Cart" button and click on it.
Wait for a moment (pause()).
Accept the alert.
Navigate back to the main page.

Repeat the Process for the Second Item:

Find the second item and click on it.
Find the "Add to Cart" button and click on it.
Wait for a moment (pause()).
Accept the alert.

Verify the Cart:

Click on the cart icon.
Wait for a moment (pause()).

Verify the Cart Total:

Find the element displaying the cart total.
Verify that the total is "1180" using Assert.assertEquals().

Process the Order:

Click on the "Place Order" button.

Fill out the Form:

Find the form fields (name, address, city, credit card, month, and year).
Fill each field with the corresponding information.

Complete the Purchase:

Click on the "Complete" button.
Verify that the message "Thank you for your purchase!" is displayed.
Click on the "OK" button to close the message.

These are the actions performed by the provided code. Each step executes a series of interactions with the web page using Selenium WebDriver and TestNG to perform end-to-end testing.
