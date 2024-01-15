tiles.setCurrentTilemap(tilemap`level3`)
let Emily = sprites.create(assets.image`Emily`, SpriteKind.Player)
controller.moveSprite(Emily, 100, 100)
scene.cameraFollowSprite(Emily)
