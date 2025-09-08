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

def lista_random(dif,f1,f2,f3,f4,f5,mdchnc):
    result = ''

    oque = random.choices([
        'Supress',
        'Contact',
        'Mold'
    ])
    result = "===> " + result + oque[0]

    quem = random.choices([
        's',
        'e',
        'o'
    ])

    if f1 == True:
        chance = random.randrange(1,101)

        if chance <= mdchnc:
            if quem[0] == 's':
                qmod = random.choices(['crazed',
                                    'sick',
                                    'persecuted',
                                    'enraged',
                                    'confused',
                                    'framed'
                                    ])
            elif quem[0] == 'e':
                qmod = random.choices(['brief',
                                    'huge',
                                    'enigmatic',
                                    'sudden'])
            elif quem[0] == 'o':
                qmod = random.choices(['cursed',
                                    'Juju',
                                    'stolen',
                                    'magical',
                                    'lost'])
            qmod = qmod[0]

            if qmod[0] in ['a','e','i','o','u']:
                result = result + ' an ' + qmod
            else:
                result = result + ' a ' + qmod
    
    if quem[0] == 's':
        quem = random.choices(['consort',
                               'Derse agent',
                               'Prospit agent',
                               'imp',
                               'sprite',
                               'amphibian',
                               'reptile',
                               'bird',
                               'fungus',
                               'fish',
                               'crustacian',
                               'lusus',
                               'android',
                               'crustacian',
                               'feline',
                               'insect',
                            ])
    elif quem[0] == 'e':
        quem = random.choices(['mania',
                               'influence',
                               'conspiracy',
                               'storm',
                               'invasion',
                               "'s doing",
                               ])
    elif quem[0] == 'o':
        quem = random.choices(['eletronics',
                               'fruit',
                               'tool',
                               'weapon',
                               'key',
                               'egg',
                               'potion',
                               'gem',
                               'wand',
                               'book',
                               'painting',
                               'sphere',
                               'clothing',
                               'dool',
                               'toy',
                               'video game',
                               'musical instrument',
                               'liquid',
                               ])
        
    if quem[0] == "'s doing":
        quem = random.choices(['Derse',
                               'Prospit',
                               'Horrorterror',
                               'Denizen'
                               'Skaia',
                               'Heart',
                               'Mind'
                               'Space',
                               'Time'
                               'Breath',
                               'Blood',
                               'Doom'
                               'Life',
                               'Void',
                               'Light',
                               'Rage',
                               'Hope'])
        quem = quem[0] + "'s doing"
    quem = quem[0]

    if f1 == False or chance > mdchnc:
        if quem[0] in ['a','e','i','o','u']:
            result = result + ' an ' + quem
        else:
            result = result + ' a ' + quem
    else:
        result = result + ' ' + quem

    if f2 == True:
        porque = random.choices(['self preservation',
                                'material interest',
                                'a competition'])
        result = result + ' for ' + porque[0]

    if f3 == True:
        ondel = random.randrange(1,3)
        if ondel == 1:
            ondel = random.choices([
                'shop',
                'house',
                'bridge',
                'park',
                'circus',
                'hospital',
                'school',
                'harbor',
                'museum',
                'metro station',
                'mansion',
                'zoo',
                'library',
                'underground tunnel',
                'prison',
                'police station',
                'castle'
            ])
            
        else:
            ondel = random.choices([
                'farm',
                'abandoned house',
                'lake',
                'beach',
                'waterfall',
                'mountain',
                'ruins',
                'cave',
                'desert',
                'island',
                'dense forest',
            ])
        ondel = ondel[0]
        if ondel[0] in ['a','e','i','o','u']:
            result = result + ' in an ' + ondel
        else:
            result = result + ' in a ' + ondel
            
    

    if f4 == True:
        ondeh = random.choices(['dawn',
                                'morning',
                                'afternoon',
                                'night'])
        result = result + ' during the ' + ondeh[0] + '.'
    
    if result[len(result)-1] != '.':
        result = result + '.'

    if f5 == True:

        i = 0
        como = ''
        t = ''
        meta = int((dif*1.5)//1)
        while i < meta:
            t = random.choices([
                'athletics',
                'endurance',
                'acrobatics',
                'sleight of hand',
                'sleath',
                'engineering',
                'investigation',
                'occult',
                'animal handling',
                'insight',
                'medicine',
                'perception',
                'sanity',
                'survival',
                'deception',
                'intimidation',
                'performance',
                'persuasion',
            ])
            if t[0] not in como:
                if i < meta-1:
                    como += t[0] + ', '
                else:
                    if i < 2:
                        como += t[0]
                    else:
                        como += 'and ' + t[0]
                i = i+1
        result = result + '\nOne should expect use of ' + como + '.'
    
    return result

tl = []
d = int(input("Define the difficulty of your mission, from 1 to 5: "))
p = int(input("Define the player quantity: "))
for i in range(p):
    tt = int(input("Define the %i's player tier: "%(i+1)))
    tl.append(float(tt))    
t = float(sum(tl)//p)
cr = pegar_cr(d,p,t)
print("It's a Tier %i mission with CR %i.\n"%(t,cr))

flag1 = 0
f = [True, True, True, True, True]
modchnc = 33
print('You have this players: ')
for i in range(p):
    print(f'The {i+1}s player is tier {int(tl[i])}.')
print('\n',lista_random(d,f[0],f[1],f[2],f[3],f[4],modchnc),'\n')

while flag1 == 0:   
    opc = int(input(f'What do you wish to do?\n1 - Try again\n2 - Manage parameters\n3 - Turn off\n=> '))
    if opc == 1:
        print('\n',lista_random(d,f[0],f[1],f[2],f[3],f[4],modchnc),'\n')
    if opc == 2:
        flag2 = 1
        while flag2 == 1:
                print(f'''Choose an option to manage:
                      
1 - [Who?] modifier ({f[0]} at the moment)
2 - [Why?] ({f[1]} at the moment)
3 - [Where?] ({f[2]} at the moment)
4 - [When?] ({f[3]} at the moment)
5 - [How?] ({f[4]}% at the moment)
6 - Change [Who?] modifier percentage ({modchnc} at the moment)
7 - Cancel''')
                n = int(input("\n=> ")) 
                if n < len(f)+1:
                    f[n-1] = not f[n-1]
                    break
                elif n == 6:
                    modchnc = int(input(f'''Add the percentage you wish to use.
=> '''))
                    break
                elif n == 7:
                    break
                else:
                    print ('%i is not an available option.'%(n))
                    break
    if opc == 3:
        print('Ending program.')
        break
