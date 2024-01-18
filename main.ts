namespace SpriteKind {
    export const Timer = SpriteKind.create()
    export const Sword = SpriteKind.create()
    export const bullet = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setBounceOnWall(true)
    sprite.setPosition(randint(10, 160), randint(10, 200))
    sprite.setVelocity(randint(-100, 100), randint(-100, 100))
})
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
info.onCountdownEnd(function () {
    game.splash("Super Shot Ready!")
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
        tiles.setCurrentTilemap(tilemap`level0`)
        pause(100)
        for (let index = 0; index < 4; index++) {
            Enemy_1 = sprites.create(assets.image`Jazz guy1`, SpriteKind.Enemy)
            Enemy_2 = sprites.create(assets.image`Jazz guy0`, SpriteKind.Enemy)
        }
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
            `, Emily, 0, -250)
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
            `, Emily, 0, 250)
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
            `, Emily, -250, 0)
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
            `, Emily, 250, 0)
    }
}
controller.combos.attachCombo("bb", function () {
    Super()
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    lastDirection = 1
    walk()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    Dungeon_Rap = Dungeon_Rap + 1
})
function Super () {
    if (lastDirection == 0) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 9 8 8 1 9 9 . . . . . . 
            . . . 9 8 8 1 . . 8 9 . . . . . 
            . . . 1 8 1 . . 1 9 8 . . . . . 
            . . . . 8 9 1 1 9 8 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 8 1 . . 1 1 8 . . . . . 
            . . . . 8 8 . . . 1 8 . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Emily, 0, -250)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . 9 8 8 1 9 9 . . . . . . 
            . . . 9 8 8 1 . . 8 9 . . . . . 
            . . . 1 8 1 . . 1 9 8 . . . . . 
            . . . . 8 9 1 1 9 8 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 8 1 . . 1 1 8 . . . . . 
            . . . . 8 8 . . . 1 8 . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . 4 d d 5 4 4 . . . . 
            . . . . . 4 d d 5 . . d 4 . . . 
            . . . . . 5 d 5 . . 5 4 d . . . 
            . . . . . . d 4 5 5 4 d . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . d 5 . . 5 5 d . . . 
            . . . . . . d d . . . 5 d . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . . . . 5 . . . . . . 
            . . . . . . . . . 5 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 7 6 6 9 7 7 . . . . . . 
            . . . 7 6 6 9 . . 6 7 . . . . . 
            . . . 9 6 9 . . 9 7 6 . . . . . 
            . . . . 6 7 9 9 7 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 9 . . 9 9 6 . . . . . 
            . . . . 6 6 . . . 9 6 . . . . . 
            . . . . . 9 . . . . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . b f f c b b . . . . 
            . . . . . b f f c . . f b . . . 
            . . . . . c f c . . c b f . . . 
            . . . . . . f b c c b f . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f c . . c c f . . . 
            . . . . . . f f . . . c f . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . . . . c . . . . . . 
            . . . . . . . . . c . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        true
        )
    } else if (lastDirection == 1) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . . . 1 . . . . . . 
            . . . . 8 1 . . . 8 8 . . . . . 
            . . . . 8 1 1 . . 1 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 8 9 1 1 9 8 . . . . . 
            . . . . 8 9 1 . . 1 8 1 . . . . 
            . . . . 9 8 . . 1 8 8 9 . . . . 
            . . . . . 9 9 1 8 8 9 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Emily, 0, 250)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . . . 1 . . . . . . . . 
            . . . . . 1 . . . . . . . . . . 
            . . . . 8 8 . . . 1 8 . . . . . 
            . . . . 8 1 . . 1 1 8 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 8 9 1 1 9 8 . . . . . . 
            . . . 1 8 1 . . 1 9 8 . . . . . 
            . . . 9 8 8 1 . . 8 9 . . . . . 
            . . . . 9 8 8 1 9 9 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 5 . . . . . . 
            . . . . . . . . . 5 . . . . . . 
            . . . . . . . 5 . . . . . . . . 
            . . . . . . d d . . . 5 d . . . 
            . . . . . . d 5 . . 5 5 d . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . d 4 5 5 4 d . . . . 
            . . . . . 5 d 5 . . 5 4 d . . . 
            . . . . . 4 d d 5 . . d 4 . . . 
            . . . . . . 4 d d 5 4 4 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            . . . . . . . 9 . . . . . . . . 
            . . . . . 9 . . . . . . . . . . 
            . . . . 6 6 . . . 9 6 . . . . . 
            . . . . 6 9 . . 9 9 6 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 6 7 9 9 7 6 . . . . . . 
            . . . 9 6 9 . . 9 7 6 . . . . . 
            . . . 7 6 6 9 . . 6 7 . . . . . 
            . . . . 7 6 6 9 7 7 . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . c . . . . . . 
            . . . . . . . . . c . . . . . . 
            . . . . . . . c . . . . . . . . 
            . . . . . . f f . . . c f . . . 
            . . . . . . f c . . c c f . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . f b c c b f . . . . 
            . . . . . c f c . . c b f . . . 
            . . . . . b f f c . . f b . . . 
            . . . . . . b f f c b b . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        true
        )
    } else if (lastDirection == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . 9 1 . . . . . . . . . 
            . . . . 9 8 8 8 . . 8 8 . . . . 
            . . . . 8 8 1 9 . . 1 8 1 . . . 
            . . . . 8 1 . 1 . . . . . . . . 
            . . . . 1 . . 1 . . . . . 1 1 . 
            . . . . 9 . 1 9 . . 1 . . . . . 
            . . . . 9 8 9 8 . . 1 1 . . . . 
            . . . . . 9 8 . . . 8 8 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Emily, -250, 0)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 9 1 . . . . . . . . . . . . 
            . 9 8 8 8 . . 8 8 . . . . . . . 
            . 8 8 1 9 . . 1 8 1 . . . . . . 
            . 8 1 . 1 . . . . . . . . . . . 
            . 1 . . 1 . . . . . 1 1 . . . . 
            . 9 . 1 9 . . 1 . . . . . . . . 
            . 9 8 9 8 . . 1 1 . . . . . . . 
            . . 9 8 . . . 8 8 . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 4 5 . . . . . . . . . . 
            . . . 4 d d d . . d d . . . . . 
            . . . d d 5 4 . . 5 d 5 . . . . 
            . . . d 5 . 5 . . . . . . . . . 
            . . . 5 . . 5 . . . . . 5 5 . . 
            . . . 4 . 5 4 . . 5 . . . . . . 
            . . . 4 d 4 d . . 5 5 . . . . . 
            . . . . 4 d . . . d d . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 7 9 . . . . . . . . . . 
            . . . 7 6 6 6 . . 6 6 . . . . . 
            . . . 6 6 9 7 . . 9 6 9 . . . . 
            . . . 6 9 . 9 . . . . . . . . . 
            . . . 9 . . 9 . . . . . 9 9 . . 
            . . . 7 . 9 7 . . 9 . . . . . . 
            . . . 7 6 7 6 . . 9 9 . . . . . 
            . . . . 7 6 . . . 6 6 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . b c . . . . . . . . . . . 
            . . b f f f . . f f . . . . . . 
            . . f f c b . . c f c . . . . . 
            . . f c . c . . . . . . . . . . 
            . . c . . c . . . . . c c . . . 
            . . b . c b . . c . . . . . . . 
            . . b f b f . . c c . . . . . . 
            . . . b f . . . f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        true
        )
    } else {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 1 9 . . . . . 
            . . . . 8 8 . . 8 8 8 9 . . . . 
            . . . 1 8 1 . . 9 1 8 8 . . . . 
            . . . . . . . . 1 . 1 8 . . . . 
            . 1 1 . . . . . 1 . . 1 . . . . 
            . . . . . 1 . . 9 1 . 9 . . . . 
            . . . . 1 1 . . 8 9 8 9 . . . . 
            . . . . 8 8 . . . 8 9 . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, Emily, 250, 0)
        animation.runImageAnimation(
        projectile,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . 1 9 . . 
            . . . . . . . 8 8 . . 8 8 8 9 . 
            . . . . . . 1 8 1 . . 9 1 8 8 . 
            . . . . . . . . . . . 1 . 1 8 . 
            . . . . 1 1 . . . . . 1 . . 1 . 
            . . . . . . . . 1 . . 9 1 . 9 . 
            . . . . . . . 1 1 . . 8 9 8 9 . 
            . . . . . . . 8 8 . . . 8 9 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 5 4 . . . . 
            . . . . . d d . . d d d 4 . . . 
            . . . . 5 d 5 . . 4 5 d d . . . 
            . . . . . . . . . 5 . 5 d . . . 
            . . 5 5 . . . . . 5 . . 5 . . . 
            . . . . . . 5 . . 4 5 . 4 . . . 
            . . . . . 5 5 . . d 4 d 4 . . . 
            . . . . . d d . . . d 4 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . 9 7 . . . . 
            . . . . . 6 6 . . 6 6 6 7 . . . 
            . . . . 9 6 9 . . 7 9 6 6 . . . 
            . . . . . . . . . 9 . 9 6 . . . 
            . . 9 9 . . . . . 9 . . 9 . . . 
            . . . . . . 9 . . 7 9 . 7 . . . 
            . . . . . 9 9 . . 6 7 6 7 . . . 
            . . . . . 6 6 . . . 6 7 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . c b . . . 
            . . . . . . f f . . f f f b . . 
            . . . . . c f c . . b c f f . . 
            . . . . . . . . . . c . c f . . 
            . . . c c . . . . . c . . c . . 
            . . . . . . . c . . b c . b . . 
            . . . . . . c c . . f b f b . . 
            . . . . . . f f . . . f b . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        50,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.warmRadial, 100)
    sprites.destroy(otherSprite, effects.ashes, 200)
    info.changeScoreBy(100)
})
let moving = false
let projectile: Sprite = null
let Enemy_2: Sprite = null
let Enemy_1: Sprite = null
let Dungeon_Rap = 0
let lastDirection = 0
let Emily: Sprite = null
tiles.setCurrentTilemap(tilemap`level6`)
info.setLife(3)
Emily = sprites.create(assets.image`Emily`, SpriteKind.Player)
controller.moveSprite(Emily, 100, 100)
let Key = sprites.create(assets.image`myImage`, SpriteKind.Food)
scene.cameraFollowSprite(Emily)
Key.setPosition(randint(20, 140), randint(20, 100))
info.setScore(0)
game.onUpdate(function () {
    moving = controller.left.isPressed() || (controller.right.isPressed() || (controller.up.isPressed() || (controller.down.isPressed() || controller.A.isPressed())))
    if (!(moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, Emily)
    }
})
