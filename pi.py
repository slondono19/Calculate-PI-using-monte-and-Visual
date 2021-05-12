import random

def pi(puntos):
    fuera = 0
    dentro = 0
    for i in range(puntos):
        fuera += 1

        x = random.random()
        y = random.random()
        if (x**2+y**2)<=1:
            dentro += 1

        
    return dentro*4/fuera
    

print(pi(100))