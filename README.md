# delegua-json

Biblioteca para manipulação de JSON. Não deve ser usada em aplicações Web, por exigir um sistema de arquivos. 

Em [Delégua Web](https://designliquido.github.io/delegua-web), apenas dois métodos estão disponíveis:

- `textoParaJson`, que recebe um texto expressado em notação JSON e o converte para dicionário em Delégua;
- `objetoParaTextoJson`, que recebe um dicionário ou objeto em Delégua e o converte para um texto em notação JSON.

Se esta biblioteca executa em um ambiente Node.js, Bun, ou similares, há mais dois métodos disponíveis:

- `importarArquivoJson`, importa um arquivo JSON pelo seu caminho, seja absoluto ou relativo, e o transforma em um dicionário de Delégua se for um arquivo JSON válido;
- `exportarObjetoParaArquivoJson`, exporta um objeto ou dicionário de Delégua para um arquivo passado como parâmetro.

Para importar em ambos os ambientes, basta usar:

```js
var json = importar('json')
```

# Modo de uso

Usando [a solução Delégua com todas as bibliotecas](https://github.com/DesignLiquido/delegua-completo), ou ainda usando [Delégua Web](https://designliquido.github.io/delegua-web?codigo=dmFyIGpzb24gPSBpbXBvcnRhcignanNvbicpCnZhciB0ZXh0b0pzb24gPSAneyJmdW5jaW9uYXJpb3MiOlt7ImlkIjowLCJub21lIjoiTWFyY2VsbyIsInNvYnJlbm9tZSI6IlNpbHZhIiwic2FsYXJpbyI6MzIwMCwiYXJlYSI6IlNNIn0seyJpZCI6MSwibm9tZSI6Ildhc2hpbmd0b24iLCJzb2JyZW5vbWUiOiJSYW1vcyIsInNhbGFyaW8iOjI3MDAsImFyZWEiOiJVRCJ9LHsiaWQiOjIsIm5vbWUiOiJTZXJnaW8iLCJzb2JyZW5vbWUiOiJQaW5oZWlybyIsInNhbGFyaW8iOjI0NTAsImFyZWEiOiJTRCJ9LHsiaWQiOjMsIm5vbWUiOiJCZXJuYXJkbyIsInNvYnJlbm9tZSI6IkNvc3RhIiwic2FsYXJpbyI6MzcwMCwiYXJlYSI6IlNNIn0seyJpZCI6NCwibm9tZSI6IkNsZXZlcnRvbiIsInNvYnJlbm9tZSI6IkZhcmlhcyIsInNhbGFyaW8iOjI3NTAsImFyZWEiOiJTRCJ9LHsiaWQiOjUsIm5vbWUiOiJBYnJhw6NvIiwic29icmVub21lIjoiQ2FtcG9zIiwic2FsYXJpbyI6MjU1MCwiYXJlYSI6IlNEIn0seyJpZCI6Niwibm9tZSI6IkxldMOtY2lhIiwic29icmVub21lIjoiRmFyaWFzIiwic2FsYXJpbyI6MjQ1MCwiYXJlYSI6IlVEIn0seyJpZCI6Nywibm9tZSI6IkZlcm5hbmRvIiwic29icmVub21lIjoiUmFtb3MiLCJzYWxhcmlvIjoyNDUwLCJhcmVhIjoiU0QifSx7ImlkIjo4LCJub21lIjoiTWFyY2VsbyIsInNvYnJlbm9tZSI6IkZhcmlhcyIsInNhbGFyaW8iOjI1NTAsImFyZWEiOiJVRCJ9LHsiaWQiOjksIm5vbWUiOiJGYWJpbyIsInNvYnJlbm9tZSI6IlNvdXphIiwic2FsYXJpbyI6Mjc1MCwiYXJlYSI6IlNEIn0seyJpZCI6MTAsIm5vbWUiOiJDbGVkZXJzb24iLCJzb2JyZW5vbWUiOiJPbGl2ZWlyYSIsInNhbGFyaW8iOjI1MDAsImFyZWEiOiJTRCJ9XSwiYXJlYXMiOlt7ImNvZGlnbyI6IlNEIiwibm9tZSI6IkRlc2Vudm9sdmltZW50byBkZSBTb2Z0d2FyZSJ9LHsiY29kaWdvIjoiU00iLCJub21lIjoiR2VyZW5jaWFtZW50byBkZSBTb2Z0d2FyZSJ9LHsiY29kaWdvIjoiVUQiLCJub21lIjoiRGVzaWduZXIgZGUgVUkvVVgifV19JzsKdmFyIGRpY2lvbmFyaW9Kc29uID0ganNvbi50ZXh0b1BhcmFKc29uKHRleHRvSnNvbikKZXNjcmV2YShkaWNpb25hcmlvSnNvbi5mdW5jaW9uYXJpb3MpIC8vIE91IGVzY3JldmEoZGljaW9uYXJpb0pzb25bImZ1bmNpb25hcmlvcyJdKQ==), importe a biblioteca e use-a da seguinte forma:

```js
var json = importar('json')
var textoJson = '{"funcionarios":[{"id":0,"nome":"Marcelo","sobrenome":"Silva","salario":3200,"area":"SM"},{"id":1,"nome":"Washington","sobrenome":"Ramos","salario":2700,"area":"UD"},{"id":2,"nome":"Sergio","sobrenome":"Pinheiro","salario":2450,"area":"SD"},{"id":3,"nome":"Bernardo","sobrenome":"Costa","salario":3700,"area":"SM"},{"id":4,"nome":"Cleverton","sobrenome":"Farias","salario":2750,"area":"SD"},{"id":5,"nome":"Abraão","sobrenome":"Campos","salario":2550,"area":"SD"},{"id":6,"nome":"Letícia","sobrenome":"Farias","salario":2450,"area":"UD"},{"id":7,"nome":"Fernando","sobrenome":"Ramos","salario":2450,"area":"SD"},{"id":8,"nome":"Marcelo","sobrenome":"Farias","salario":2550,"area":"UD"},{"id":9,"nome":"Fabio","sobrenome":"Souza","salario":2750,"area":"SD"},{"id":10,"nome":"Clederson","sobrenome":"Oliveira","salario":2500,"area":"SD"}],"areas":[{"codigo":"SD","nome":"Desenvolvimento de Software"},{"codigo":"SM","nome":"Gerenciamento de Software"},{"codigo":"UD","nome":"Designer de UI/UX"}]}';
var dicionarioJson = json.textoParaJson(textoJson)
escreva(dicionarioJson.funcionarios) // Ou escreva(dicionarioJson["funcionarios"])
```