# Section 21 - Git, GitHub and Version Control

## Comandos Iniciais

### ```git init```
* Esse comando serve para criar um repositorio local.
* Use esse comando no terminal para criar um repositorio local dentro de um diretorio/pasta desejada.

### ```git status```
* Esse comando serve para verificar o status do repositorio Git local.

### ```git add nome_arquivo```
* Esse comando serve para adicionar um arquivo para a chamada "tracking area" do repositorio local Git.
* Quando a gente cria um arquivo dentro de um diretorio, o repositorio local do Git nao vai saber de imediato da existencia dele. Alem disso, nao vai ser capaz de "trackear" mudancas que tenham acontecido no arquivo. Para isso, devemos adicionar o arquivo a "tracking area" por meio do comando visto acima.
* Quando um arquivo vai para a "tracking area" ele ta pronto para ser commitado.
* Eh possivel adicionar todos os arquivos do working directory para a "tracking area" usando o comando ```git add .```.

### ```git commit```
* Comando que serve para dar commit em um arquivo que ta presente dentro de um repositorio Git local e tambem dentro da "tracking area".
* Pode ser usado da seguinte forma: ```git commit -m "messagem_explicando_o_commit"```.
* Sempre escreva no present tense (boa pratica).

### ```git log```
* Esse comando serve para verificar quais foram os commits executados em um repositorio especifico.
* Cada commit possui: uma hash (que o identifica), um campo identificando o autor do commit e um campo identificando a data na qual o commit foi efetuado.

### ```git diff "nome_arquivo"```
* Esse comando serve para verificar as diferencas entre a versao atual de um arquivo e a ultima versao de safepoint desse mesmo arquivo (no repositorio local Git).
* Pelo que eu entendi, o Git consegue pegar as diferencas em um arquivo desde que ele esteja na "tracking area". Ou seja, desde que eu tenha dado "git add" no arquivo.

### ```git checkout "nome_arquivo"```
* Esse comando serve para fazer com que um arquivo volte para a sua ultima versao que foi commitada no repositorio local do Git em questao.

### ```git rm --cached -r .```
* Esse comando server para retirar todos os arquivos que atualmente estejam presentes na tracking area do meu repositorio local.

## Linkando Repositorio Local e Repositorio Remoto (Repositorio no GitHub)
* Caso a gente queira passar arquivos do nosso repositorio local para um repositorio remoto (GitHub), podemos usar a seguinte sequencia de comandos (lembrando que devemos estar na pasta em que o repositorio local se encontra
```
git remote add origin link_do_repositorio_GitHub
git push -u origin master
```

## .gitignore
* Usar um arquivo chamado ".gitignore" eh uma boa pratica para indicar quais arquivos nao devem ser commitados para o repositorio local (e possivelmente para o repositorio remoto).
* Util para ocultar arquivos que contenham senhas, API keys, arquivos com configuracoes, etc...
* Para usa-lo, entre na pasta/diretorio em que os arquivos se encontram. Crie (__atraves da linha de comando__) um arquivo chamado ".gitignore".
* Feito isso, abra esse arquivo atraves da linha de comando (lembre-se que este eh um arquivo oculto).
* Com o arquivo ".gitignore" aberto, basta colocar em cada uma das linhas dele os nomes dos arquivo que devem ser ignorados quando um commit for executado. (Eh uma boa pratica ignorar o arquivo ".DS_Store".

## Cloning
* Cloning nada mais eh do que copiar um repositorio do GitHub para a sua propria maquina local.
* Para isso, abra a linha de comando. Em seguida, entre no diretorio/pasta desejada e execute o comando: ```git clone link_do_repositorio_no_GitHub```.
* O comando acima vai criar uma copia do repositorio GitHub em questao como se ele fosse um diretorio qualquer.
