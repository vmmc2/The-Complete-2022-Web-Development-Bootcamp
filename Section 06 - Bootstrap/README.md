# Section 06 - Bootstrap

## Wireframing
* Trata-se de uma prática de produzir esboços de __baixa fidelidade__ de uma ou mais páginas de um website. Deve ser a primeira coisa a ser feita quando estamos elaborando o front-end de um página web.
* Por ser um esboço de baixa fidelidade, recomenda-se que não se gaste muito tempo produzindo-o.
* Em contrapartida, temos o que chamamos de "mock-up", que é um modelo/esboço de __alta fidelidade.__

## Navbar com Bootstrap
* Segue abaixo um exemplo de código de um modelo simples de um "navbar" feita com Bootstrap:
```html
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" href="#"> Tindog</a>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#"> Contact </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> Pricing </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#"> Download </a>
      </li>
    </ul>
  </div>
</nav>
```
* Para esse código acima funcionar é necessário fazer os imports de links para CSS do Bootstrap no ```head``` do "index.html" bem como fazer os imports dos scripts de JS do Bootstrap no final ```body``` do "index.html".

## GridModel com Bootstrap
* Em Bootstrap 4 e nas versões seguintes, podemos organizar as informações na tela por meio de um grid (tabela). Isso nada mais é do que um conjunto de rows (linhas), que podem ser preenchidas com columns (colunas).
* Observe o primeiro exemplo abaixo: __Grid com colunas que tomam todo o espaço disponível na linha (Não é responsivo).__
```html
<div class="row">
  <div class="column" style="background-color: red; border: 1px solid;">
    col
  </div>
  <div class="column" style="background-color: blue; border: 1px solid;">
    col
  </div>
</div>
```
* Observe o segundo exemplo abaixo: __Grid com colunas que tomam um espaço definido pelo programador referente ao tamanho da linha (Não é responsivo).__
* Esse espaço é definido da seguinte forma: Uma linha (row) completa tem um tamanho de 12 unidades. Nós, como programadores, podemos fazer com que as colunas tenham um tamanho que vai de 1, 2, 3, 4, ..., 9, 10, 11, 12.
```html
<div class="row">
  <div class="col-6" style="background-color: green; border: 1px solid;">
    col-6
  </div>
  <div class="col-3" style="background-color: green; border: 1px solid;">
    col-3
  </div>
  <div class="col-2" style="background-color: green; border: 1px solid;">
    col-2
  </div>
  <div class="col-1" style="background-color: green; border: 1px solid;">
    col-1
  </div>
</div>
```
* Por fim, observe o último exemplo: __Grid com colunas que tomam um espaço definido pelo programador referente ao tamanho da linha (É responsivo).__
* Funciona da mesma maneira que o exemplo descrito acima:
```html
<div class="row">
  <div class="col-md-6" style="background-color: green; border: 1px solid;">
    col-md-6
  </div>
  <div class="col-md-6" style="background-color: yellow; border: 1px solid;">
    col-md-6
  </div>
</div>
```
