// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level2":return tiles.createTilemap(hex`0a0007000404040a050a040a050b09040d020e0e0e110d040504130d050303140d0c09100e0e0e0e0e0f05040414030d030d0d0d0d0c09120e0e140e0e0e010c07060606060606060608`, img`
2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . 2 2 
2 2 2 2 2 2 2 . 2 2 
2 . . . . . . . 2 2 
2 . 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile8,myTiles.tile9,myTiles.tile10,sprites.skillmap.islandTile7,sprites.skillmap.islandTile6,sprites.skillmap.islandTile8,sprites.skillmap.islandTile3,sprites.skillmap.islandTile1,sprites.skillmap.islandTile2,sprites.skillmap.islandTile5,sprites.skillmap.islandTile4,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn4,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn3,myTiles.tile11,myTiles.tile3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "startTile":
            case "tile1":return tile1;
            case "goalTile":
            case "tile2":return tile2;
            case "coinTile":
            case "tile3":return tile3;
            case "floorTile":
            case "tile4":return tile4;
            case "wallTile":
            case "tile5":return tile5;
            case "rock1":
            case "tile8":return tile8;
            case "myTile1":
            case "tile9":return tile9;
            case "myTile2":
            case "tile10":return tile10;
            case "myTile3":
            case "tile11":return tile11;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
