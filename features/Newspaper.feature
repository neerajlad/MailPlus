Feature: Newspaper App Functionality

  Scenario: Verify the Newspaper edition is downloadable
    Given I launch the app
    When I scroll down to the Recent issues on the Newspaper tab
    And I scroll right to view more recent issues
    And I tap on the See more button
    And I go to the Archive tab
    And I tap to download the June 27 edition
    And I sign in with the provided credentials on the paywall carousel
    Then I wait for the edition to complete downloading

  Scenario: Verify the Images on Gallery section
    Given I am on the downloaded June 27 edition
    When I navigate to Page 3 on PDF view displaying Phoebe, the chainmail story
    And I tap on the Gallery icon
    Then Image Gallery is displayed on top of the ALB page
    And I tap on the camera icon to open full screen
    Then I close the image by clicking on the Close button
