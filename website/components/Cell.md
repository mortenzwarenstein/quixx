# Cell

Cell containing a single number representing a field on the Qwixx scoresheet. A cell is part of a row.

## Props

<!-- @vuese:Cell:props:start -->
|Name|Description|Type|Required|Default|
|---|---|---|---|---|
|cell|The cell from the store. Looped over by the parent-row, the cell gains its properties through the "cell"-prop.|`Object`|`true`|-|
|crossable|A boolean representing the crossability of the cell. Determined by three factors: Is the cell within range (higher than the lowest, lowest than the highest), is the row not already closed by a player, and is the game not yet finished.|`Boolean`|`false`|-|
|rowIndex|store.|`Number`|`true`|-|

<!-- @vuese:Cell:props:end -->


## Methods

<!-- @vuese:Cell:methods:start -->
|Method|Description|Parameters|
|---|---|---|
|cross|Crosses a cell by changing it in the store and adding a move (for the undo functionality)|-|

<!-- @vuese:Cell:methods:end -->


## Computed

<!-- @vuese:Cell:computed:start -->
|Computed|Type|Description|From Store|
|---|---|---|---|
|cellStyle|`{{backgroundColor:([string\|null])}}`|Returns a cellstyle depending on whether the cell is crossable or not. Returns a styleobject containing the lightened backgroundcolor|No|

<!-- @vuese:Cell:computed:end -->


