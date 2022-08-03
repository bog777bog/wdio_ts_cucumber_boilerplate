Feature: Textbox section

  Scenario Outline: As a user, I can fill out and submit textbox page

    Given User visits the textbox page
    When  User fills out 'Bohdan' in username field
    When  User fills out 'bogdan_kudria@gmail.com' in email field
    When  User fills out 'Current address' in current address field
    When  User fills out 'Permanent address' in permanent address field
    When  User clicks on submit button 
    Then Text data should be displayed in output area "Bohdan,bogdan_kudria@gmail.com,Current address,Permanent address"
