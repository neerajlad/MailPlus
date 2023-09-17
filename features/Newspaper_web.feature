Feature: Newspaper Web Functionality

  Scenario: Interaction with Video Player
    Given I open the website and maximize the window
    And I click on "Got It" if displayed
    When I click on video Link
    And I click on big play button
    Then I verify the advertisement label if Displayed
    When I click on pause video
    And I click on forward play
    And I click on volume button
    And I click on mute volume button
    Then I verify the advertisement label again if Displayed and wait for complete
    When I click on previous play
    And I click on full size

  Scenario: Get the Position and Points for a given team
    Given I navigate to Daily Mail Video Page and accept cookies
    When I click on the Sport menu
    Then I scroll down to the Premier League table
    Then I click on View all tables
    Then I retrieve the Pos and PTS for the team
