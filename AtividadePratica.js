for (let i=0;i<=9;i++){
    if (i==0){
        console.log('Não há alunos presentes!', i)
    }   else if (i==1){
        console.log ('O número de alunos presentes é ÍMPAR! Só tem', i,'aluno presente.')
    }   else if (i%2==0){
        console.log('O número de alunos presentes é PAR! Os alunos presentes são', i)
    }   else {
        console.log('O número de alunos presentes é ÍMPAR! Os alunos presentes são', i)
    }
}