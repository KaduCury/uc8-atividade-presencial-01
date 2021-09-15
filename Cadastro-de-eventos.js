let ListaDeParticipantes= [ 'Joe', 'Johnny', 'Junior']
let ListaDePalestrantes= [ 'Prof. X', 'Mr. Y', 'Doc. Z']
let DataDoEvento= Date(2021-08-30)
let DataAtual= Date(2021-09-14)
let Idade= 18
let Nome= 'Jonas Jr'
let PodeCadastrar= true
let Dados= 'RG, CPF e Endereço'
let TodosDados= [Nome, Idade, Dados]
/*   let DataDeNascimento= Date('2003-09-01')   */


if (DataDoEvento<DataAtual){
    console.log('Data inválida! A data informada é anterior a data atual.')
    PodeCadastrar= false
}

if (Idade<18){                                         /*DataAtual-DataDeNascimento>=18 anos*/ 
    console.log('Evento exclusivo para maiores de 18 anos')
    PodeCadastrar= false
}

if (ListaDeParticipantes.length>100){
    console.log('Este evento já excedeu o limite de participantes!')
    PodeCadastrar= false
}

/* if (TodosDados=false){                                                 Validar TodosDados
    console.log('Os dados informados são inválidos!')
    PodeCadastrar= false         
}                                                                                         */

if (PodeCadastrar){
    ListaDeParticipantes.push(Nome)
    console.log('Participação Confirmada!')
}   else{
    console.log('Houve um problema com seu cadastro!')
    }

console.log('Listando Participantes: ')
for (let i=0;i<ListaDeParticipantes.length;i++){
    console.log(ListaDeParticipantes[i])
}console.log('Lista de Palestrantes: ', ListaDePalestrantes)
