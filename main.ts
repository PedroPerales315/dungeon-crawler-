namespace SpriteKind {
    export const Timer = SpriteKind.create()
    export const Sword = SpriteKind.create()
    export const bullet = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    lastDirection = 0
    walk()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    attack()
    shoot()
})
// 0 - up
// 
// 1 - right
// 
// 2 - down
// 
// 3 - left
function walk () {
    if (lastDirection == 0) {
        animation.runImageAnimation(
        Emily,
        assets.animation`Walking Down0`,
        200,
        true
        )
    } else if (lastDirection == 1) {
        animation.runImageAnimation(
        Emily,
        assets.animation`Walking Down`,
        200,
        true
        )
    } else if (lastDirection == 2) {
        animation.runImageAnimation(
        Emily,
        assets.animation`Walking Left`,
        200,
        true
        )
    } else {
        animation.runImageAnimation(
        Emily,
        assets.animation`Walking Right`,
        200,
        true
        )
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    lastDirection = 2
    walk()
})
// 0 - up
// 
// 1 - right
// 
// 2 - down
// 
// 3 - left
function attack () {
    if (lastDirection == 0) {
        animation.runImageAnimation(
        Emily,
        assets.animation`Walking Down3`,
        200,
        false
        )
    } else if (lastDirection == 1) {
        animation.runImageAnimation(
        Emily,
        assets.animation`Walking Down4`,
        100,
        false
        )
    } else if (lastDirection == 2) {
        animation.runImageAnimation(
        Emily,
        assets.animation`Walking Right1`,
        200,
        false
        )
    } else {
        animation.runImageAnimation(
        Emily,
        assets.animation`Walking Right0`,
        200,
        false
        )
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    lastDirection = 3
    walk()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile50`, function (sprite, location) {
    if (Dungeon_Rap == 1) {
        tiles.setCurrentTilemap(tilemap`level`)
    }
})
function shoot () {
    if (lastDirection == 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 4 2 2 5 4 4 4 . . . . . 
            . . . 4 2 2 5 . . 2 4 . . . . . 
            . . . 5 2 5 . . 5 4 2 . . . . . 
            . . . . 2 4 5 5 4 2 5 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 2 5 . . 5 5 2 . . . . . 
            . . . . 2 2 . . . 5 2 . . . . . 
            . . . . . 5 . . . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Emily, 0, -150)
    } else if (lastDirection == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . . . 5 . . . . . . 
            . . . . 2 5 . . . 2 2 . . . . . 
            . . . . 2 5 5 . . 5 2 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 5 2 4 5 5 4 2 . . . . . 
            . . . . 2 4 5 . . 5 2 5 . . . . 
            . . . . 4 2 . . 5 2 2 4 . . . . 
            . . . . 4 4 4 5 2 2 4 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Emily, 0, 150)
    } else if (lastDirection == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 4 5 . . . . . . . . . 
            . . . . 4 2 2 2 . . 2 2 . . . . 
            . . . . 2 2 5 4 . . 5 2 5 . . . 
            . . . . 2 5 . 5 . . . . . . . . 
            . . . . 5 . . 5 . . . . . 5 5 . 
            . . . . 4 . 5 4 . . 5 . . . . . 
            . . . . 4 2 4 2 . . 5 5 . . . . 
            . . . . 4 4 2 5 . . 2 2 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Emily, -150, 0)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 5 4 . . . . . 
            . . . . 2 2 . . 2 2 2 4 . . . . 
            . . . 5 2 5 . . 4 5 2 2 . . . . 
            . . . . . . . . 5 . 5 2 . . . . 
            . 5 5 . . . . . 5 . . 5 . . . . 
            . . . . . 5 . . 4 5 . 4 . . . . 
            . . . . 5 5 . . 2 4 2 4 . . . . 
            . . . . 2 2 . . 5 2 4 4 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Emily, 150, 0)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    lastDirection = 1
    walk()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Dungeon_Rap = Dungeon_Rap + 1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
})
let moving = false
let projectile: Sprite = null
let Dungeon_Rap = 0
let lastDirection = 0
let Emily: Sprite = null
tiles.setCurrentTilemap(tilemap`level6`)
Emily = sprites.create(assets.image`Emily`, SpriteKind.Player)
controller.moveSprite(Emily, 100, 100)
let Key = sprites.create(assets.image`myImage`, SpriteKind.Food)
scene.cameraFollowSprite(Emily)
Key.setPosition(randint(10, 140), randint(10, 100))
game.onUpdate(function () {
    moving = controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || (controller.down.isPressed() || controller.A.isPressed())))
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, Emily)
    }
})
