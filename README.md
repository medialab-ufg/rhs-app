# rsh-app

Aplicativo Android e iOS para a *Rede Humaniza SUS* (RHS).
Está sendo desenvolvido em Ionic e integra dados através da WP-API do Wordpress.

## Configurações do ambiente para o projeto:

**É preciso ter *node*, *npm*, *ionic* e *cordova* instalados para a execução do projeto.**

A última versão do **Node** pode ser encontrada [aqui](https://nodejs.org/en/). A versão atualmente utilizada no desenvolvimento é a **7.4.0**. 
Usuários _Ubuntu/Debian_ podem instalar via apt:

```
$ sudo apt-get update
$ sudo apt-get install nodejs
```
Geralmente o pacote Node já traz o **npm** junto, mas caso precise instalar, a versão utilizada para desenvolvimento é a **4.0.5**
Usuários Ubuntu/Debian podem instalar via apt:

```
$ sudo apt-get install npm
```

A instalação da **Ionic CLI** e do **Cordova** é feita via npm:

```
$ sudo npm install -g ionic cordova
```

Dependendo das configurações npm do seu sistema (em geral Mac e Linux) será necessário o *sudo* para o npm ter as permissões de instalação.

Mais informações sobre a instalação podem ser obtidas na [página da Ionic](https://ionicframework.com/docs/intro/installation/). A versão utilizada neste projeto é a **3.5.0**. Para verificar a versão atual, basta rodar:

```
$ ionic --version
```

## Instalação
Para que o npm possa baixar os módulos extras necessários para o projeto, navegue para a pasta do projeto e execute a instalação (note a ausência de *sudo*, desta vez, já que a instalação é referente ao projeto local e não ao sistema):
```
$ git clone git@github.com:medialab-ufg/rhs-app.git
$ cd rhs-app/
$ npm install
```
Os módulos necessários são informados no `package.json`, de onde `npm install` automaticamente resolve suas dependências. Possíveis erros na instalação costumam acontecer por incompatilidades nas versões dos módulos. Caso isso ocorra, verifique no console qual a versão do módulo necessária e instale via `npm install`.

## Executando em local server
Para obter um server de desenvolvimento rodando no navegador, execute:
```
$ ionic serve
``` 
Navegue para `http://localhost:8100/` ou ainda, `http://localhost:8100/ionic-lab`. O App vai automaticamente se atualizar após qualquer mudança feita nos arquivos fonte.


