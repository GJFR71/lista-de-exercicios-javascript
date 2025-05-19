/*
===========================================================
Arquivo: exercicios_javascript.js
Autor: Glaucio Jorge Ferreira Rosa
Descrição: Resolução dos exercícios propostos em JavaScript
Data: [coloque a data da entrega]

Instruções para execução:
-----------------------------------------------------------
1. Certifique-se de que o Node.js está instalado.
   Você pode baixar em: https://nodejs.org

2. Para executar este arquivo, abra o terminal na pasta
   onde ele se encontra e digite:

       node lista_de_exercicios1.js

3. Os exercícios estão comentados e numerados separadamente.

===========================================================
*/
// Permitindo a leitura de entradas digitadas pelo usuário antes de executar o programa:
 const prompt = require('prompt-sync')()

//======================================================
//1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou 
// ímpar utilizando uma estrutura de controle if. 
//=======================================================
 
 // Entrada de dados pelo usuário:
let numero = Number(prompt('Digite o número: '))

// Realizando a verificação:
if(numero % 2 == 0){
   console.log("O número é par.")
} else {
   console.log("O número é ímpar.")
}

//==========================================================================
//2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso)
// com base no valor fornecido, utilizando uma estrutura de controle if-else. 
//==========================================================================

// Entrada de dados pelo usuário:
let idade = Number(prompt("Digite sua idade (em anos): "))

// Avaliando a categoria:
if(idade > 65){
   console.log("Categoria: idoso.")
} else if(18< idade && idade <= 65){
   console.log("Categoria: adulto.")
} else if(12 < idade && idade <= 18){
   console.log("Categoria: adolescente.")
} else if(0 <= idade && idade <=12){
   console.log("Categoria: criança.")
}

//======================================================================================
//3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" 
// utilizando if-else if.
//======================================================================================

// Digitando a note desejada:
let nota = Number(prompt("Digite a nota: "))

// Verificando a situação do aluno:
if(nota >= 7){
   console.log("Parabéns, você foi aprovado!")
} else if (nota < 7 && nota >= 5){
   console.log("Você está de recuperação.")
} else {
   console. log("Infelizmente, você está reprovado.")
}

//======================================================================================
//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//  Utilize switch-case para implementar a lógica de cada opção selecionada.
//======================================================================================

// Selecionando as opções:
let bebida = Number(prompt("Digite a opção da bebida desejada: (1- cerveja; 2- refrigerante, 3- água)"))

// Fazendo a análise da opção:
switch(bebida){
   case 1:
      console.log("A cerveja custa R$ 12,00")
      break
   
   case 2:
      console.log("O refigerante custa R$ 8,00")
      break
   
   case 3:
      console.log("A água custa R$ 5,00")
      break
   
   default:
      console.log("Opção inválida! Tente novamente.")
   
}


//====================================================================================================
//5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa
// e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else. 
//====================================================================================================

// Inserindo os dados:
let peso = Number(prompt("digite o peso (em kg):"))
let altura = Number(prompt("Digite a altura (em metros)"))

// Calculando o IMC:
let indice = peso / altura ** 2
let IMC = indice.toFixed(2)

// Estabelecendo a categoria:
if (IMC > 30){
   console.log(IMC, " é indicativo de obesidade.")
} else if (IMC > 25 && IMC <= 30){
   console.log(IMC, " é indicativo de sobrepeso.")
} else if (IMC > 18.5 && IMC <= 25){
   console.log(IMC, " é indicativo de peso normal.")
} else if (IMC > 0 && IMC <= 18.5){
   console.log(IMC, " é indicativo de baixo peso.")
}


//======================================================================================
//6. Ler três valores para os lados de um triângulo: A, B e C. 
//Verificar se os lados fornecidos formam realmente um triângulo. 
//Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero. 
//Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B 
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C) 
//Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C) 
//Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
//===========================================================================================


// Inserindo os tamanhos dos segmentos:
let A = Number(prompt('Digite o tamanho do segmento A:'))
let B = Number(prompt('Digite o tamanho do segmento B:'))
let C = Number(prompt('Digite o tamanho do segmento C:'))

// Verificando se os segmentos formam um triangulo:
let triangulo

if (A < B + C && B < A + C && C < A + B){
   triangulo = true
} else{
   triangulo = false
} 

// Clasificando o tipo de triangulo formado:

if (triangulo){
   if (A == B && B == C){
     console.log("O triângulo é equilátero")   
   } else if (A == B || A == C || B == C){
      console.log("O triângulo é isósceles") 
   } else if (A != B && B != C){
      console.log("O triângulo é escaleno")
   }
} else{
    console.log("Os segmentos não formam um triângulo")
}


//======================================================================================
//7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, 
// e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, 
// calcule e escreva o valor total da compra. 
//=======================================================================================

// Declarando as variaveis:
let quantidade = Number(prompt("Digite a quantidade de maçãs a comprar:"))
let custo

// Estabelecendo o preço da maçã:
if (quantidade < 12){
   custo = 0.3
} else {
   custo = 0.25
}
// Determinando o valor total da compra:
let total = (quantidade * custo).toFixed(2)
console.log("O total da compra será R$", total)



//=========================================================================
//8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) 
// e escreve-los em ordem crescente. 
//=========================================================================

// Escolhendo os valores:
let valor1 = Number(prompt("Digite o primeiro valor:"))
let valor2 = Number(prompt("Digite o segundo valor:"))
// Criando o array:
let lista = [valor1, valor2]

// Colocando o array em ordem crescente:
lista = lista.sort((a,b)=> a-b)

console.log(lista)



//=========================================================================================================
//9. Implemente um programa que exibe uma contagem regressiva de 10 até 1 no console utilizando um loop for. 
//=========================================================================================================

for(let i=10; i >= 1; i--)
    console.log(i)


//===================================================================================
//10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
//===================================================================================

// Declarando o número:
let num = Number(prompt(" Digite o número: ")) 

for (let i = 10; i >=1; i--){
   console.log(num)
}

//==================================================================================================
//11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
//==================================================================================================
 
// Escolhendo os números:

 let num1 = Number(prompt(" Digite um número: "))
 let num2 = Number(prompt(" Digite outro número: "))
 let num3 = Number(prompt(" Digite outro número: "))
 let num4 = Number(prompt(" Digite outro número: "))
 let num5 = Number(prompt(" Digite outro número: "))
 let numeros = [num1,num2, num3, num4, num5]

 // calculando a soma:
 let soma = 0

 for ( let i = 0; i < numeros.length; i++){
   soma += numeros[i]
 }
console.log(" A soma total dos números digitados é:",soma)



//=================================================================================================
//12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
//=================================================================================================

// Escolhendo o número
let x = Number(prompt(" Digite o número desejado:"))

// Estabelecendo a tabuada:

for (let i = 1; i <= 10; i++){
   console.log(x,'*',i, '=', (x*i))
}




//======================================================================================
//13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
//=======================================================================================

let Num = Number(prompt("Digite um número (0 para sair): "))
let n = 0
let sum = 0

while (Num != 0){
   n += 1
   sum += Num
   Num = Number(prompt("Digite um número (0 para sair): "))
}
let media = (sum / n).toFixed(2)
console.log("A média dos números selecionados foi ", media)



//=============================================================================================
//14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while. 
//=============================================================================================

let num_fatorial = Number(prompt("Digite um número: "))
let fat = 1
for (let i = num_fatorial; i >= 1; i--){
   fat = fat * i   
}
    console.log("O fatorial do número é: ", fat)

//=============================================================================================
//15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
//=============================================================================================

// Determinando o tamanho da sequencia de Fibonacci desejado:
let tamanho_sequencia = Number(prompt('Digite o tamanho da sequencia desejada:'))

// Declarando os valores iniciais da sequencia
let a = 0
let b = 1
let fibo = []

// estabelecendo a sequencia desejada:
for(let i = 0; i < tamanho_sequencia; i++){
   fibo.push(a)
   let proximo = a + b
   a = b
   b = proximo
}
console.log("A sequência de Fibonacci desejada é:")
console.log(fibo)