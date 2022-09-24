# Feed LinkLei

Uma demo de um Feed, utilizando Laravel e React.js

## Instalação

Clone o reósitório localmente:

```sh
git clone https://github.com/NicollyKasuga/feed-laravel.git
cd feed-laravel
```

Instale as dependências do PHP:

```sh
composer install
```

Instale as dependências do NPM:

```sh
npm install
```

Faça a construção com o NPM:

```sh
npm run dev
```

Configure o .env:

```sh
cp .env.example .env
```

Gere a chave da aplicação:

```sh
php artisan key:generate
```

Crie um Banco para settar no .env.

Rode as migrations:

```sh
php artisan migrate
```

Rode o database seeder:

```sh
php artisan migrate --seed
```

E por fim rode o server:

```sh
php artisan serve
```
