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
flag = 0
while flag == 0:
    oque = random.choices(['suprimir','contatar','moldar'])
    oque = oque[0]
    quem = (random.choices(['s','e','o']))
    if quem[0] == 's':
        print('filha')
        quem = random.choices(['consort','agente de Derse','agente de Prospit','imp','sprite','efeito de um Denizen', 'efeito de um Horrorterror'])
    elif quem[0] == 'e':
        print('da')
        quem = random.choices(['mania','influência','conspiração','tempestade','invasão','efeito de Derse','efeito de Prospit',
                             'efeito de Heart',
                             'efeito de Mind',
                             'efeito de Blood',
                             'efeito de Breath',
                             'efeito de Light',
                             'efeito de Void',
                             'efeito de Doom',
                             'efeito de Life',
                             'efeito de Rage',
                             'efeito de Hope',
                             'efeito de Space',
                             'efeito de Time',])
    elif quem[0] == 'o':
        quem = random.choices(['relíquia','objeto amaldiçoado','acessório especial'])
    quem = quem[0]
    porque = random.choices(['autopreservação','interesse material','competição'])
    porque = porque[0]
    ondel = random.randrange(1,3)
    if ondel == 1:
        ondel = random.choices([
            'um estabelecimento comercial',
            'uma residência',
            'uma ponte',
            'um parque',
            'um circo',
            'um hospital',
            'uma escola',
            'um porto',
            'um museu',
            'um metro',
            'uma mansão',
            'um zoológico',
            'uma biblioteca',
            'um túnel subterrâneo',
            'uma prisão',
            'uma delegacia',
            'um castelo'
        ])
        
    else:
        ondel = random.choices([
            'uma fazenda',
            'uma chácara pequena',
            'um lago',
            'uma praia',
            'uma cachoeira',
            'um vão de duas montanhas',
            'um topo de uma montanha',
            'ruínas de uma construção',
            'uma caverna',
            'um oásis',
            'uma ilha',
            'uma floresta densa',
        ])
    ondel = ondel[0]
    ondeh = random.choices(['a madrugada','a manhã','a tarde','a noite'])
    ondeh = ondeh[0]
    como = ''
    t = ''
    for i in range(d):
        t = random.choices([
            'atletismo ,',
            'resistência, ',
            'acrobacia, ',
            'prestidigitação, ',
            'furtividade, ',
            'engenharia, ',
            'investigação, ',
            'ocultismo, ',
            'adestramento, ',
            'intuição, ',
            'medicina, ',
            'percepção, ',
            'sanidade, ',
            'sobrevivência, ',
            'enganação, ',
            'intimidação, ',
            'artes, ',
            'diplomacia, ',
        ])
        como += t[0]
    print('Sua missão é: %s tal %s por motivos de %s. A missão vai acontecer em %s, durante %s. Se espera que tenha muito de %s.'%(oque,quem,porque,ondel,ondeh,como))
    flag = int(input(f'Você está de acordo?\n0 - Não\n1 - Sim\n'))