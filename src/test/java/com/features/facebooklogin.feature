Feature: Create Facebook Account
  As a user I want to be able to successfully create a facebook account

  Scenario: Validate first name field
    Given User is on the facebook login page
    When User enters the following in the corresponding fields
      | Fields                 | Values              |
      | First Name             | Tom                 |
      | Last Name              | JLONG               |
      | Email Address          | someone@someone.com |
      | Password               | Password1           |
    Then The user sees that his name is present in the username field

#  Scenario: Validate the existence of multiple fields
#    Given User is on the facebook login page
#    When user enters his first name
#    And user enters his last name
#    Then user's first name is present in the field
#    But the email field is blank