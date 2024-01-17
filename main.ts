namespace SpriteKind {
    export const bullet = SpriteKind.create()
}
function Attack () {
    if (direction == 0) {
        animation.runImageAnimation(
        Emily,
        assets.animation`Shooting Left`,
        100,
        true
        )
    } else if (direction == 1) {
        animation.runImageAnimation(
        Emily,
        assets.animation`Shooting Right`,
        100,
        true
        )
    } else if (direction == 2) {
        animation.runImageAnimation(
        Emily,
        assets.animation`Walking Down2`,
        100,
        true
        )
    } else {
        animation.runImageAnimation(
        Emily,
        assets.animation`Walking Down1`,
        100,
        true
        )
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
    walkanim()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Attack()
    shoot()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 0
    walkanim()
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
    walkanim()
})
function walkanim () {
    if (direction == 0) {
        animation.runImageAnimation(
        Emily,
        assets.animation`Walking Left`,
        150,
        true
        )
    } else if (direction == 1) {
        animation.runImageAnimation(
        Emily,
        assets.animation`Walking Right`,
        150,
        true
        )
    } else if (direction == 2) {
        animation.runImageAnimation(
        Emily,
        assets.animation`Walking Down0`,
        150,
        true
        )
    } else {
        animation.runImageAnimation(
        Emily,
        assets.animation`Walking Down`,
        150,
        true
        )
    }
}
function shoot () {
    if (direction == 0) {
        projectile = sprites.createProjectileFromSprite(assets.image`Bullet`, Emily, -150, 0)
    } else if (direction == 1) {
        projectile = sprites.createProjectileFromSprite(assets.image`Bullet`, Emily, 150, 0)
    } else if (direction == 2) {
        projectile = sprites.createProjectileFromSprite(assets.image`Bullet`, Emily, 0, -150)
    } else {
        projectile = sprites.createProjectileFromSprite(assets.image`Bullet`, Emily, 0, 150)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 3
    walkanim()
})
let Moving = false
let projectile: Sprite = null
let direction = 0
let Emily: Sprite = null
tiles.setCurrentTilemap(tilemap`level`)
Emily = sprites.create(assets.image`Emily`, SpriteKind.Player)
scene.cameraFollowSprite(Emily)
controller.moveSprite(Emily, 100, 100)
/**
 * right-1
 * 
 * up-2
 * 
 * left-0
 * 
 * down-3
 */
game.onUpdate(function () {
    Moving = controller.up.isPressed() || (controller.down.isPressed() || (controller.left.isPressed() || (controller.right.isPressed() || controller.A.isPressed())))
    if (!(Moving)) {
        animation.stopAnimation(animation.AnimationTypes.All, Emily)
    }
})
