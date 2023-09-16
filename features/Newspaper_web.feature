Feature: Video Player Functionality

  Scenario: Verify the video player functionality
    Given I navigate to Daily Mail Video Page and accept cookies
    When I click on Video in page to begin playback
    Then The video should start playing
    When I click the video again
    Then The video should pause
    When I click on the forward arrow
    Then I should navigate to the next video
    When I click on the back arrow
    Then I should navigate to the previous video
    When I click on the speaker icon to mute the video
    Then The video should be muted
    When I click on the speaker icon again
    Then The video should be unmuted
    And When the video finishes playing
    Then The next video should autoplay
