scene.backgroundColor(0)
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . b b b b . . . . . .
    . . . . . . b 4 4 4 b . . . . .
    . . . . . . b b 4 4 4 b . . . .
    . . . . . b 4 b b b 4 4 b . . .
    . . . . b d 5 5 5 4 b 4 4 b . .
    . . . . b 3 2 3 5 5 4 e 4 4 b .
    . . . b d 2 2 2 5 7 5 4 e 4 4 e
    . . . b 5 3 2 3 5 5 5 5 e e e e
    . . b d 7 5 5 5 3 2 3 5 5 e e e
    . . b 5 5 5 5 5 2 2 2 5 5 d e e
    . b 3 2 3 5 7 5 3 2 3 5 d d e 4
    . b 2 2 2 5 5 5 5 5 5 d d e 4 .
    b d 3 2 d 5 5 5 d d d 4 4 . . .
    b 5 5 5 5 d d 4 4 4 4 . . . . .
    4 d d d 4 4 4 . . . . . . . . .
    4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Player)
Controller.moveSprite(mySprite)
let pizza:Sprite = null
pizza = let mySprite2 = let mysprite2 = sprites. create(img`
    ...........ccccc66666...........
    ........ccc4444444444666........
    ......cc444444444bb4444466......
    .....cb4444bb4444b5b444444b.....
    ....eb4444b5b44444b44444444b....
    ...ebb44444b4444444444b444446...
    ..eb6bb444444444bb444b5b444446..
    ..e6bb5b44444444b5b444b44bb44e..
    .e66b4b4444444444b4444444b5b44e.
    .e6bb444444444444444444444bb44e.
    eb66b44444bb444444444444444444be
    eb66bb444b5b44444444bb44444444be
    fb666b444bb444444444b5b4444444bf
    fcb666b44444444444444bb444444bcf
    .fbb6666b44444444444444444444bf.
    .efbb66666bb4444444444444444bfe.
    .86fcbb66666bbb44444444444bcc688
    8772effcbbbbbbbbbbbbbbbbcfc22778
    87722222cccccccccccccccc22226678
    f866622222222222222222222276686f
    fef866677766667777776667777fffef
    fbff877768f86777777666776fffffbf
    fbeffeefffeff7766688effeeeefeb6f
    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
    f66ddfffffeeeffeffeeeeeffeedb46e
    .c66ddd4effffffeeeeeffff4ddb46e.
    .fc6b4dddddddddddddddddddb444ee.
    ..ff6bb444444444444444444444ee..
    ....ffbbbb4444444444444444ee....
    ......ffebbbbbb44444444eee......
    .........fffffffcccccee.........
    ................................
` ,SpriteKind.Food)
mySprite.setFlag(SpriteFlag.StayInScreen)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function(sprite: Sprite, pizza: Sprite) {
info.changeScoreBy(1)  
 Pizza.setPosition(randint(0, 160) randint(0, 120)
 info.start(Countdown(10)
 ))