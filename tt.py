import random
tl = []
d = int(input("Defina a dificuldade da missão desejada, de 1 a 4: "))
p = int(input("Defina a quantidade de jogadores: "))
for i in range(p):
    tt = int(input("Adicione a Tier do jogador %i: "%(i+1)))
    tl.append(float(tt))
t = float(sum(tl)//p)
tv = float(t)
for i in range(p-1):
    if tl[i+1] > t:
        tv = tv + (t*.5 + (tl[i+1])-t)
    elif tl[i+1] == t:
        tv = tv + t*.25
tv = tv//1
cr = tv + (d*p)
print('É uma missão de Tier %i com CR %i.'%(t,cr))
oque = random.randrange(1,3)
quem = random.randrange(1,3)
porque = random.randrange(1,3)
onde = [random.randrange(1,2), random.randrange(1,5), random.randrange(1,3)]
como = random.randrange(1,18)