# ESQUINANEVE

## Modo online

O jogo usa o Cloud Firestore para salas e classificações em tempo real. Não é preciso criar conta nem fazer login; cada navegador recebe um identificador local aleatório.

1. No Firebase Console do projeto `projetosfeciba`, crie um banco do **Cloud Firestore** e publique as regras de `firestore.rules`.
2. Sirva os arquivos do jogo por HTTP ou HTTPS. As salas não funcionam ao abrir `index.html` diretamente pelo `file://`.
3. No menu, informe um nome para criar uma sala e compartilhe o código de seis caracteres. Outras pessoas podem entrar com esse código.

Durante a descida, a posição e a distância dos jogadores são sincronizadas para que apareçam juntos na pista. Cada sala também mantém a melhor distância de cada navegador. Como não há login, os resultados são enviados pelo navegador e não têm proteção contra falsificação.
