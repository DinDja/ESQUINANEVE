# ESQUINANEVE

## Modo online

O jogo usa o Cloud Firestore para salas e classificações em tempo real. Não é preciso criar conta nem fazer login; cada navegador recebe um identificador local aleatório.

1. No Firebase Console do projeto `projetosfeciba`, crie um banco do **Cloud Firestore** e publique as regras de `firestore.rules`.
2. Sirva os arquivos do jogo por HTTP ou HTTPS. As salas não funcionam ao abrir `index.html` diretamente pelo `file://`.
3. No menu, informe um nome para criar uma sala e compartilhe o código de seis caracteres. Outras pessoas podem entrar com esse código.

Na sala, somente o host inicia a corrida. Todos recebem a mesma contagem regressiva de cinco segundos antes da largada. Cada volta tem 1 km; vence quem completar as três voltas primeiro. Depois do resultado, o host pode repetir a corrida na mesma sala. Durante a prova, as posições, as voltas e a chegada são sincronizadas pelo Firestore. Colisões reduzem a velocidade no modo online.

Não há cadastro nem login. Os resultados e o controle de sala são enviados pelo navegador e não têm proteção contra falsificação.
