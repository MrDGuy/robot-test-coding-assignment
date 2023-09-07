m# Robot Exam Coding Assignment

## Make code which reaches the goal @unplugged

This coding assignment is worth 5 points:
1. 1 Point Earned if Code Runs without Errors
2. 1 Point Earned if Robot Reaches the Goal and Collects all the Coins.
3. 2 Points for using 2 of the following: While, Function, For Loop or If statement
4. 1 Point Earned if you use only 1 while loop to complete the entire tilemap.


## Make code which reaches the goal

This coding assignment is worth 5 points:
1. 1 Point Earned if Code Runs without Errors
2. 1 Point Earned if Robot Reaches the Goal and Collects all the Coins.
3. 2 Points for using 2 of the following: While, Function, For Loop or If statement
4. 1 Point Earned if you use only 1 while loop to complete the entire tilemap.
   
Use the commands and conditions in the robot category.
```python
    robot.begin_screen()
    robot.move_forward()
    robot.turn_right()
    robot.turn_left()
    robot.place_coin()
    robot.collect_coin()
    robot.detect_coin()
    robot.can_move("")
    robot.goal_reached()
```

## Functions, Loops and If Statements

2 Points are Earned For for using 2 of the following: Function, For Loop or If statement

```python
  def do_something():
    pass

  while robot.detect_coin():
    pass

  for i in range(4):
    pass

  if robot.detect_coin():
    pass

  if robot.can_move("forward"):
    pass
  else:
    pass
```

## Share your work to Google Classroom  

Be sure to share your code by clicking the share icon and sharing the link to Google Classroom.
![Share Icon](https://github.com/MrDGuy/robot-quiz-code-assignment-1/blob/24c88c502ccd146fc1be1352949c18ee918a8f30/share-icon.png "Share Icon" )



```customts
tiles.loadMap(tiles.createMap(tilemap`level1`))
robot.beginScreen()
game.onUpdate(function () {
    if (robot.goalReached()) {
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        game.splash("You reached the goal!")
        game.reset()
    }
})
```
