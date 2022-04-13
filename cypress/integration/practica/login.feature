Feature: : Login Page


    Feature Login page will work depending on the user credentials
    Background:         
    Given A user enters to the login page


    Scenario Outline: Success Login
        When A user enters the username <username>
        And A user enters the password <password>
        And A user clicks on the login button
        Then A user will be logged in

        Examples:
            | username | password | 
            | "standard_user"  | "secret_sauce" |



    Scenario Outline: Locked out Login
        When A user enters the username <username>
        And A user enters the password <password>
        And A user clicks on the login button
        Then The error message "Epic sadface: Sorry, this user has been locked out." is displayed

        Examples:
            | username | password | 
            | "locked_out_user"  | "secret_sauce" |



   Scenario: Incorrect Username Login
        When A user provides incorrect credentials
        |username       |password       |
        |testName       |secret_sauce   |
        And A user clicks on the login button
        Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed


    Scenario: Incorrect Password Login
            When A user provides incorrect credentials
            |username       |password       |
            |standard_user  |testPassword   |
            And A user clicks on the login button
            Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed   

         
    Scenario Outline: Username null
            When A user enters the password <password>
            And A user no enters the username <username>
            And A user clicks on the login button
            Then The error message "Epic sadface: Username is required" is displayed

            Examples:
                | password | username | 
                | "secret_sauce"  | "" |

    Scenario Outline: Password null
                When A user enters the username <username>
                And A user no enters the password <password>
                And A user clicks on the login button
                Then The error message "Epic sadface: Password is required" is displayed

                Examples:
                    | username | password | 
                    | "standard_user"  | "" |



