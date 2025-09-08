x = int(input("Adicione um numero: "))
try:
    if x < 0:
        raise Exception("Sem números abaixo de 0.")
    else:
        print("Uso correto.")
except:
    print('Encerrando programa.')