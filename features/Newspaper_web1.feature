Feature: Video Player Functionality1

  Scenario: Get the Position and Points for a given team
    Given I navigate to Daily Mail Video Page and accept cookies
    When I click on the Sport menu
    Then I scroll down to the Premier League table
    Then I click on View all tables
    Then I retrieve the Pos and PTS for the team
