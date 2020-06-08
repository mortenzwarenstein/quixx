# Scorecard

Contains the scoresheet for a Qwixx game. Also the main container for the game: This is where a player can see and control the current state of his/her game.

## Methods

<!-- @vuese:Scorecard:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|failedThrow|This method adds a failed throw to the store.|-|

<!-- @vuese:Scorecard:methods:end -->


## Computed

<!-- @vuese:Scorecard:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|rows|`Array`|Gets rowdata from the store|Yes|
|finished|`Boolean`|This property gets the state of the game: Finished or not finished|Yes|
|score|`Number`|This property gets the total scores of all rows added up|Yes|

<!-- @vuese:Scorecard:computed:end -->


