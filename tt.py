import random

def pegar_cr(dif,player,tier):
    tv = float(tier)
    for i in range(player-1):
        if tl[i+1] > tier:
            tv = tv + (tier*.5 + (tl[i+1])-tier)
        elif tl[i+1] == tier:
            tv = tv + tier*.25
    tv = tv//1
    return tv + (dif*player)

def lista_random(dif):
    oque = random.choices([
        'suprimir',
        'contatar',
        'moldar'
    ])
    oque = oque[0]
    quem = random.choices([
        's',
        'e',
        'o'
    ])
    quem = quem[0]

    qmod = random.randrange(1,4)

    if qmod < 3:
        qmod = ''
    else:
        if quem == 's':
            qmod = random.choices(['sozinho','nervoso',])
        elif quem == 'e':
            qmod = random.choices(['grande','pequeno','repentino','devastador'])
        elif quem == 'o':
            qmod = random.choices(['antigo','místico','poderoso','quebrado'])
        qmod = qmod[0] + ' '
    
    if quem == 's':
        quem = random.choices(['consort',
                               'agente de Derse',
                               'agente de Prospit',
                               'imp',
                               'sprite',
                               'efeito de um Denizen',
                               'efeito de um Horrorterror'])
    elif quem == 'e':
        quem = random.choices(['mania',
                               'influência',
                               'conspiração',
                               'tempestade',
                               'invasão',
                               'efeito de Derse',
                               'efeito de Prospit',
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
    elif quem == 'o':
        quem = random.choices(['relíquia',
                               'objeto amaldiçoado',
                               'acessório especial'])
    quem = quem[0]

    porque = random.choices(['autopreservação',
                             'interesse material',
                             'competição'])
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

    ondeh = random.choices(['a madrugada',
                            'a manhã',
                            'a tarde',
                            'a noite'])
    ondeh = ondeh[0]
    i = 0
    como = ''
    t = ''
    meta = int((dif*1.5)//1)
    while i < meta:
        t = random.choices([
            'atletismo',
            'resistência',
            'acrobacia',
            'prestidigitação',
            'furtividade',
            'engenharia',
            'investigação',
            'ocultismo',
            'adestramento',
            'intuição',
            'medicina',
            'percepção',
            'sanidade',
            'sobrevivência',
            'enganação',
            'intimidação',
            'artes',
            'diplomacia',
        ])
        if t[0] in como != ValueError:
            pass
        else:
            if i < meta-1:
                como += t[0] + ', '
            else:
                if i < 2:
                    como += t[0] + '.'
                else:
                    como += 'e ' + t[0] + '.'
            i = i+1

    return [oque,quem,qmod,porque,ondel,ondeh,como]

tl = []
d = int(input("Defina a dificuldade da missão desejada, de 1 a 4: "))
p = int(input("Defina a quantidade de jogadores: "))
for i in range(p):
    tt = int(input("Adicione a Tier do jogador %i: "%(i+1)))
    tl.append(float(tt))    
t = float(sum(tl)//p)
cr = pegar_cr(d,p,t)
print('É uma missão de Tier %i com CR %i.'%(t,cr))

flag = 0
while flag == 0:
    rndm = lista_random(d)
    print('Sua missão é: %s tal %s %spor motivos de %s. A missão vai acontecer em %s, durante %s.\n'
    'Se espera que tenha muito de %s'%(rndm[0],rndm[1],rndm[2],rndm[3],rndm[4],rndm[5],rndm[6]))
    flag = int(input(f'Você está de acordo?\n0 - Não\n1 - Sim\n'))