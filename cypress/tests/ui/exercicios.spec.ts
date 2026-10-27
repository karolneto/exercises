
import loginpage from "../../pages/loginpage";
import registerpage from "../../pages/registerpage";
import transferpage from "../../pages/transferpage";


//CASO DE TESTE 1: LOGIN COM SUCESSO.
//DESCRIÇÃO: Verifique se é possível fazer login com um usuário válido, inserindo as informações corretas.
//PASSO A PASSO: 
// 1- Visite a página de login.
// 2- Preencha o campo "Username" com um usuário válido.
// 3- Preencha o campo "Password" com uma senha válida.
// 4- Clique no botão "Sign in" para fazer login.
// 5- Verifique se foi direcionado para a página inicial.

describe('Login com sucesso', () => {
  it('Deve fazer login com um usuário válido', () => {
    loginpage.acessLoginPage()
    loginpage.fillValidLogin()
})
})



//CASO DE TESTE 2: LOGIN COM CREDENCIAIS INVÁLIDAS.
//DESCRIÇÃO: Garanta que o sistema exiba uma mensagem de erro ao tentar fazer login com credenciais inválidas. (email ou senha incorretos.)
//PASSO A PASSO:
// 1- Visite a página de login.
// 2- Preencha o campo "Username" com um usuário válido.
// 3- Preencha o campo "Password" com uma senha inválida.
// 4- Verifique se é mostrada uma mensagem de erro por conter usuário ou senha inválidos.

describe('Tentar fazer login com credenciais inválidas', () => {
  it('Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    loginpage.acessLoginPage()
    loginpage.fillInvalidLogin()
})
})



//CASO DE TESTE 3: REGISTRO DE NOVO USUÁRIO COM SUCESSO.
//DESCRIÇÃO: Verifique se é possível registrar um novo usuário com informações válidas.
//PASSO A PASSO:
// 1- Visite a página de cadastro.
// 2- Preencha o primeiro nome.
// 3- Preencha o último nome.
// 4- Crie um usuário válido.
// 5- Crie uma senha válida.
// 6- Confirme a mesma senha criada.
// 7- Clique no botão "Sign up" para se registrar e verificar se foi aceito.

describe('Registro de novo usuário com sucesso', () => {
  it('Deve registrar um novo usuário com informações válidas', () => {
    registerpage.acessRegisterPage()
    registerpage.registerValidInformation()
  })
})



//CASO DE TESTE 4: TENTAR REGISTRAR UM NOVO USUÁRIO COM INFORMAÇÕES INCOMPLETAS.
//DESCRIÇÃO: Garanta que o sistema exiba mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias.
//PASSO A PASSO:
// 1- Visite a página de cadastro.
// 2- Preencha o primeiro nome.
// 3- Clique no campo do último nome mas o deixe em branco, sendo estas uma das informações obrigatórias.
// 4- Crie um usuário válido.
// 5- Crie uma senha válida.
// 6- Confirme a mesma senha criada.
// 7- Confirme se o sistema mostrou alguma mensagem de erro para o novo registro.

describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    registerpage.acessRegisterPage()
    registerpage.registerInvalidInformation()
  })
})



// CASO DE TESTE 5: ENVIAR DINHEIRO COM SALDO SUFICIENTE.
//DESCRIÇÃO: Verifique se é possível enviar dinheiro para um amigo quando o saldo da conta é suficiente.
//PASSO A PASSO: 
// 1- Fazer login em uma conta.
// 2- Carregar no botão de transferência.
// 3- Escolher um amigo.
// 4- Escolher um valor menor do que o saldo da conta.
// 5- Escrever uma nota.
// 6- Carregar no botão para enviar o dinheiro.
// 7- Esperar uma mensagem de sucesso na transação aparecer.

describe('Enviar dinheiro com saldo suficiente', () => {
  it('Deve enviar dinheiro com sucesso', () => {
    loginpage.acessLoginPage()
    loginpage.fillValidLogin()
    transferpage.sendMoneyWithBalance()
  });
});

//CASO DE TESTE 6: ENVIAR DINHEIRO COM SALDO INSUFICIENTE.
//DESCRIÇÃO: Garanta que o sistema exiba uma mensagem de erro ao tentar enviar dinheiro sem saldo suficiente.
//PASSO A PASSO:
// 1. Fazer login em uma conta.
// 2- Carregar no botão de transferência.
// 3- Escolher um amigo.
// 4- Escolher um valor maior do que o saldo da conta.
// 5- Escrever uma nota.
// 6- Carregar no botão para enviar o dinheiro.
// 7- Esperar uma mensagem de erro na transação aparecer.
//BUG ENCONTRADO! MESMO COM SALDO INSUFICIENTE, A TRANSAÇÃO É EFETUADA, MOSTRANDO UMA MENSAGEM DE SUCESSO.

describe('Enviar dinheiro com saldo insuficiente', () => {
  it('Deve exibir mensagem de erro ao enviar dinheiro sem saldo suficiente', () => {
    loginpage.acessLoginPage()
    loginpage.fillValidLogin()
    transferpage.sendMoneyWhitoutBalane()
  });
});


//CASO DE TESTE 7: Visualizar histórico de transações com sucesso.
//DESCRIÇÃO: Verifique se é possível visualizar o histórico de transações de um usuário com suas transações anteriores exibidas corretamente. 
//PASSO A PASSO:
// 1- Visite a página de login.
// 2- Preencha o campo "Username" com um usuário válido.
// 3- Preencha o campo "Password" com uma senha inválida.
// 4- Carregue no campo "Mine" para acessar as transações do usuário.
// 5- Confira se aparece corretamente as transações.


describe('Visualizar histórico de transações com sucesso', () => {
  it('Deve exibir o histórico de transações de um usuário corretamente', () => {
    loginpage.acessLoginPage()
    loginpage.fillValidLogin()
    transferpage.visualizeTransactions()
  });
});


//CASO DE TESTE 8: Tentar visualizar o histórico de transações de um usuário sem transações anteriores.
//DESCRIÇÃO: Garanta que o sistema exiba uma mensagem indicando que o usuário não possui transações anteriores caso tente visualizar o histórico sem transações registradas.
//PASSO A PASSO: 
// 1- Visite a página de login de um novo usuário.
// 2- Preencha o campo "Username" com um usuário válido.
// 3- Preencha o campo "Password" com uma senha inválida.
// 4- Carregue no campo "Mine" para acessar as transações do usuário.
// 5- Confira se aparece alguma mensagem que o usuário ainda não possui transações.



describe('Tentar visualizar o histórico de transações sem transações anteriores', () => {
  it('Deve exibir uma mensagem indicando que o usuário não possui transações anteriores', () => {
    loginpage.acessLoginPage()
    loginpage.newUserLogin()
    transferpage.visualizeEmptyTransactions()
  });
});