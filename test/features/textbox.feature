Feature: Textbox section

  Background:
    Given User visits the textbox page

  @Tag1 
  Scenario: As a user, I can fill out and submit textbox form

    When  User fills out 'Bohdan' in username field
    And  User fills out 'bogdan_kudria@gmail.com' in email field
    And  User fills out 'Current address' in current address field
    And  User fills out 'Permanent address' in permanent address field
    When  User clicks on submit button 
    Then Text data should be displayed in output area 'Bohdan,bogdan_kudria@gmail.com,Current address,Permanent address'

  @Tag2
  Scenario: As a user, I can't submit text box form w/o filling email adress

    When  User fills out 'Bohdan' in username field
    And  User fills out 'Current address' in current address field
    And  User fills out 'Permanent address' in permanent address field
    When  User clicks on submit button 
    Then Text data should be displayed in output area 'Bohdan,Current address,Permanent address'

