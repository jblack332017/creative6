#-----------------------------------------------------
# Python 'Evolution of Text' Program
# More programs at: usingpython.com/programs
#-----------------------------------------------------

import string
import random
import time

possibleCharacters = string.ascii_lowercase + string.digits + string.ascii_uppercase + ' .,!?;:'

target = "You beat the challenge! Congrats man. Was it worth it?"
attemptThis = ''.join(random.choice(possibleCharacters) for i in range(len(target)))
attemptNext = ''

completed = False

generation = 0

while completed == False:
    print(attemptThis)
    attemptNext = ''
    completed = True
    for i in range(len(target)):
        if attemptThis[i] != target[i]:
            completed = False
            attemptNext += random.choice(possibleCharacters)
        else:
            attemptNext += target[i]
    generation += 1
    attemptThis = attemptNext
    time.sleep(0.1)

print("Target matched! That took " + str(generation) + " generation(s)")