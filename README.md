# Docker Node


## Arquivos 

- `docker-compose.yml`: Define 3 serviços: `db`, `node` e `nginx`, além das redes `db-network` e `app-network` para conexão entre serviços. 

- `nginx/nginx.conf`: Arquivo de configuração do nginx, contendo configuração de proxy reverso para a aplicação node

- `node/Dockerfile`: Arquivo de build do container da aplicação. Durante a execução do container, a aplicação usa o [wait-for](https://raw.githubusercontent.com/eficode/wait-for/v2.2.3/wait-for) para esperar o banco estar completamente funcional antes de iniciar a aplicação.

## Rodando:

```
docker-compose up -d
```

## Removendo os containers e volumes:

```
docker-compose down -v
```
