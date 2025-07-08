# !!! IMPORTANTE
Não esqueça de colocar o `.ts` no final dos nomes do arquivos na hora de fazer o `import` , sem o .ts erros podem acontecer.

# Novidades do NODE
Aparentemente desde o node 20 o typescrit é aceito nativamente pelo, por isso não é mais necessário compilar o código feito em typescript para ser convertido em JS.

## OBSERVAÇÕES 
Ao executar `npm run dev` o --experimental-strip-types remove os tipos do typescritp para a execução, mas nem sempre a JS vai saber que se trata de um tipo, então é importante informar isso ao JS, como é feito no arquivo server.ts, colocanto o `type` dentro do importe.

O `--watch` observa as modificações.
O ` --env-file .env` carrega as variáveis de ambiente. 

# DATABASE
Será usado o orm drizzle. Para ter a criação das tabelas etc, é preciso configurar o arquivo `drizzle.config.ts`.

Ao executar `npx drizzle-kit generate` ele vai criar o sql das tabelas na pasta migrations (que foi configurada).

Depois de ele transformas os schemas (conteudo da pasta schema) em sql (na pasta migrations), podemos executar `npx drizzle-kit migrate` para de fato executar as migrations.

Se quiser verificar se de fato foi criados as tabelas, use `npx drizzle-kit studio` para ver as tabelas pela web.

Depois de configurar as migrations podemos configurar as seeds.



