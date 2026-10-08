# ESQUINANEVE

## Modo online

O jogo usa o Cloud Firestore para salas e classificações em tempo real. Não é preciso criar conta nem fazer login; cada navegador recebe um identificador local aleatório.

1. No Firebase Console do projeto `projetosfeciba`, crie um banco do **Cloud Firestore** e publique as regras de `firestore.rules`.
2. Sirva os arquivos do jogo por HTTP ou HTTPS. As salas não funcionam ao abrir `index.html` diretamente pelo `file://`.
3. No menu, informe um nome para criar uma sala e compartilhe o código de seis caracteres. Outras pessoas podem entrar com esse código.

Na sala, todos os esquiadores conectados precisam marcar “Estou pronto para correr”. A largada acontece em conjunto. A pista tem curvas e a corrida termina após três voltas; vence quem cruzar a chegada primeiro. Durante a corrida, as posições, as voltas e a chegada são sincronizadas pelo Firestore. Colisões reduzem a velocidade no modo online. Cada sala comporta uma corrida; crie outra sala para uma nova prova.

Como não há login, os resultados são enviados pelo navegador e não têm proteção contra falsificação.
