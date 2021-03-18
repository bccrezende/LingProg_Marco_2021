var clientes = [
    [nome = "Bruno",
    código = "123", 
    senha = "123", 
    saldo = 100], 
    [nome = "Joaozinho",
    código = "456", 
    senha = "456", 
    saldo = 10],
]

/** @function procura_cliente */
// the above is the same as:
/** @function
 * @author Barbara <barbara@example.com>
 * @name procura_cliente 
 * * Returns 
 * @param {object} cliente
 * @returns {object}
 * */



function procura_cliente(cliente){
    return cliente[1] == codigo_cliente && cliente[2] == senha_cliente
}

function atualiza_saldo(codigo_cliente, operacao, valor_operacao){
    return clientes.map(cliente => {
      if(cliente[1] == codigo_cliente){
        if (operacao == 1){
          if(valor_operacao <= cliente[3]){
            cliente[3] = cliente[3] - valor_operacao
            alert ("O seu novo saldo é: R$" + cliente_localizado[3])
          }
          else{
            alert('Saldo indisponivel')
            cliente[3] = cliente[3]
          }
        }
        else if (operacao == 2 || operacao == 3){
          cliente[3] = cliente[3] + valor_operacao
        }
        else{
          alert("Erro: Operação não identificada")
        }
      }
    })
}

nova_operacao = true

while(nova_operacao){
    var codigo_cliente = window.prompt("Digite o seu código:")
    var senha_cliente = window.prompt("Digite sua senha:")

    var cliente_localizado = (clientes.find(procura_cliente))

    if(cliente_localizado != null){
    
    var operacao = Number(window.prompt("Qual operação você gostaria de fazer? 1-Saque, 2-Deposito, 3-Transferencia"))
    var valor_operacao = Number(window.prompt("Qual valor da operação?"))
    
    if (valor_operacao > 0){
        if (operacao == 1){
        atualiza_saldo(codigo_cliente, operacao, valor_operacao)
        }

        else if(operacao == 2 || operacao == 3){
        var codigo_cliente_destino = Number(window.prompt("Qual o código da conta destino?"))
        atualiza_saldo(codigo_cliente_destino, operacao, valor_operacao)
        if (codigo_cliente_destino == codigo_cliente){
            alert ("Seu saldo é R$: " + cliente_localizado[3])
        }
        else{
            alert ("Operação realizada com sucesso")
        }
        }

        else{
        alert ("Operação desconhecida")
        }
    }
    else{
        alert ("O valor da operação é inválido")
    }  
    }

    else{
    alert("Cliente não localizado")
    }

    nova_operacao = window.confirm("Você deseja fazer outra operação?")
}

