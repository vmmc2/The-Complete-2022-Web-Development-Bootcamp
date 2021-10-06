# Section 21 - Git, GitHub and Version Control

### ```git init```
* Esse comando serve para criar um repositorio local.
* Use esse comando no terminal para criar um repositorio local dentro de um diretorio/pasta desejada.

### ```git status```
* Esse comando serve para verificar o status do repositorio Git local.

### ```git add nome_arquivo```
* Esse comando serve para adicionar um arquivo para a chamada "tracking area" do repositorio local Git.
* Quando a gente cria um arquivo dentro de um diretorio, o repositorio local do Git nao vai saber de imediato da existencia dele. Alem disso, nao vai ser capaz de "trackear" mudancas que tenha acontecido no arquivo. Para isso, devemos adicionar o arquivo a "tracking area" por meio do comando visto acima.
* Quando um arquivo vai para a "tracking area" ele ta pronto para ser commitado.

### ```git commit```
* Comando que serve para dar commit em um arquivo que ta presente dentro de um repositorio Git local e tambem dentro da "tracking area".
* Pode ser usado da seguinte forma: ```git commit -m "messagem_explicando_o_commit"```.
* Sempre escreva no present tense (boa pratica).

### ```git log```
* Esse comando serve para verificar quais foram os commits executados em um repositorio especifico.
* Para commit possui: uma hash (que o identifica), um campo identificando o autor do commit e um campo identificando a data na qual o commit foi efetuado.
