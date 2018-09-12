# App da Rede Humaniza SUS

  ![Logo da RHS](https://raw.githubusercontent.com/medialab-ufg/rhs-app/master/src/assets/logo-rhs.svg?sanitize=true)

Aplicativo Android e iOS para a [Rede Humaniza SUS](http://redehumanizasus.net/) (RHS), desenvolvido em Ionic, e integrando dados através da WP-API do Wordpress.

Baixe a versão Android: [https://play.google.com/store/apps/details?id=com.redehumanizasus.app](https://play.google.com/store/apps/details?id=com.redehumanizasus.app).

E a versão iOS:[https://itunes.apple.com/us/app/rede-humaniza-sus-m%C3%B3vel/id1342800271?mt=8](https://itunes.apple.com/us/app/rede-humaniza-sus-m%C3%B3vel/id1342800271?mt=8).


-----------------------------------
## Como contribuir com este App:

1. [Configurações via Docker](https://github.com/medialab-ufg/rhs-app#configura%C3%A7%C3%B5es-via-docker)
2. [Configurações em máquina local](https://github.com/medialab-ufg/rhs-app#configura%C3%A7%C3%B5es-em-m%C3%A1quina-local)
3. [Instalação](https://github.com/medialab-ufg/rhs-app#instala%C3%A7%C3%A3o)
4. [Local Sever](https://github.com/medialab-ufg/rhs-app#executando-em-local-server)
5. [Android](https://github.com/medialab-ufg/rhs-app#android)
    1. [Instalar Java JDK, Android Studio e dependências](https://github.com/medialab-ufg/rhs-app#instalar-java-jdk-android-studio-para-utilizar-a-android-sdk-e-depend%C3%AAncias)
    2. [Compilando o projeto para Android](https://github.com/medialab-ufg/rhs-app#compilando-o-projeto-para-android)
    3. [Rodando o projeto em Android](https://github.com/medialab-ufg/rhs-app#rodando-o-aplicativo-no-android)
    4. [Deploy para a PlayStore](https://github.com/medialab-ufg/rhs-app#deploy-para-a-play-store)
    5. [Depurando remotamente no Android](https://github.com/medialab-ufg/rhs-app#depurando-remotamente-no-android)
6. [iOS (iPhone)](https://github.com/medialab-ufg/rhs-app#ios-iphone)
    1. [Instalar xCode e Cocoapods](https://github.com/medialab-ufg/rhs-app#instalar-xcode-e-cocoapods)
    2. [Compilando o projeto para iOS](https://github.com/medialab-ufg/rhs-app#compilando-o-projeto-para-ios)
    3. [Rodando o projeto para iOS](https://github.com/medialab-ufg/rhs-app#rodando-o-aplicativo-no-ios)
7. [Possíveis problemas encontrados](https://github.com/medialab-ufg/rhs-app#poss%C3%ADveis-problemas-encontrados)
8. [Estrutura das Pastas](https://github.com/medialab-ufg/rhs-app#estrutura-de-pastas)

---------------------------------------
## Configurações via docker:
A configuração do ambiente em sua máquina local pode ser trabalhosa. Caso deseje utilizar o docker, temos uma imagem preparada com um script para ajustes de permissões de usuário:

[https://github.com/mateuswetah/docker-ionic](https://github.com/mateuswetah/docker-ionic)

_Obs.: A imagem funciona apenas para Android._

---------------------------------------
## Configurações em máquina local:

**É preciso ter *node*, *npm*, *ionic* e *cordova* instalados para a execução do projeto.**

A última versão do **Node** pode ser encontrada [aqui](https://nodejs.org/en/). A versão atualmente utilizada no desenvolvimento é a **7.4.0**. 
Usuários _Ubuntu/Debian_ podem instalar via apt:

```
$ sudo apt-get update
$ sudo apt-get install nodejs
```
Versões inferiores ao Ubuntu 17.10 podem estar com o nodejs desatualizado nos seus repositórios. Caso a versão instalada for interior à 7, siga as instruções do [site oficial](https://nodejs.org/en/download/current/). Geralmente o pacote Node já traz o **npm** junto, mas caso precise instalar, a versão utilizada para desenvolvimento é a **4.0.5**. 
Usuários Ubuntu/Debian podem instalar via apt:

```
$ sudo apt-get install npm
```

A instalação da **Ionic CLI** e do **Cordova** é feita via npm:

```
$ sudo npm install -g ionic cordova
```

Dependendo das configurações npm do seu sistema (em geral Mac e Linux) será necessário o *sudo* para o npm ter as permissões de instalação.

Mais informações sobre a instalação podem ser obtidas na [página da Ionic](https://ionicframework.com/docs/intro/installation/). 

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
Navegue para [http://localhost:8100/](http://localhost:8100/) ou ainda, [http://localhost:8100/ionic-lab](http://localhost:8100/ionic-lab). O App vai automaticamente se atualizar após qualquer mudança feita nos arquivos fonte.

-----------------------------------------------------
## Android

### Instalar Java JDK, Android Studio (para utilizar a Android SDK) e dependências: 
 - **Java JDK**: baixando pelo [Site oficial](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp), ou para Ubuntu: 

 ```
 $ sudo apt-get install openjdk-8-jdk openjdk-8-jre
 ```

 - **Android Studio**: [Site oficial](https://developer.android.com/studio/install.html) (instalador e dependências) ou, para Ubuntu, via ubuntu-make:

 ```
 $ sudo add-apt-repository ppa:ubuntu-desktop/ubuntu-make
 $ sudo apt-get update
 $ sudo apt-get install ubuntu-make
 $ umake android
 ```

- **Dependências** via SDK Manager: Execute sua instalação do Android Studio e vá no menu *Tools -> Android -> SDK Manager*. Na lista para instalar, marque:
  - Android SDK Tools;
  - Android SDK Platform-tools;
  - Android SDK Build-tools;
  - Android x.x.x (API XX);  
  Onde x.x.x corresponde a versão do Android para o qual você for fazer deploy. A Ionic oferece suporte somente para versões superioes à 4.1.

- **Gradle e ADB** via repositório padrão do Ubuntu:

```
$ sudo apt-get install gradle adb
```

### Compilando o projeto para Android:

É necessário ter o plugin cordova para a CLI do Ionic, caso ainda não tenha sido instalado:

```
$ npm install --save-dev --save-exact ionic/cli-plugin-cordova@latest
$ ionic cordova platform add android
$ ionic cordova build android
```

Os últimos dois comandos adicionam os arquivos de build do android ao seu projeto e compilam o mesmo. Essa etapa costuma gerar alguns erros, veja abaixo [algumas dicas](https://github.com/medialab-ufg/rhs-app#poss%C3%ADveis-problemas-encontrados).

### Rodando o aplicativo no Android:

É preciso ter o cabo USB conectado no celular, além de modo desenvolvedor habilitado. Ao conectar, deve surgir uma notificação relativa ao modo de uso do USB (comumente carregamento). Clique nesta notificação para trocar para modo PTP, ou, em alguns celulares, MTP (varia de hardware para hardware). Se A etapa de `build` ocorreu sem problemas, execute:

```
$ ionic cordova run android
```

O build acontecerá novamente, mas desta vez o android_debug.apk gerado será transferido e instalado no seu aparelho.

### Deploy para a Play Store

Para realizar uma atualização do App na Play Store, lembre-se de atualizar o valor da versão do App no arquivo _config.xml_:
```
<widget id="com.redehumanizasus.app" version="1.0.X" ...
```

Então compile e execute a versão de produção:
```
$ ionic cordova run android --release --prod --aot
```

Certifique-se de que tudo ocorreu sem erros no console, e que foi gerado o arquivo _/platforms/android/build/outputs/apk/android-release-unsigned.apk_. Copie o arquivo para a raiz do projeto, substituindo a versão atual. Certifique-se de que o apk está na mesma pasta que o arquivo _my-release-key.keystore_. Hora de assinar o app:
```
$ /PATH_TO_ANDROID_SDK_/sdk/build-tools/VERSION/jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore android-release-unsigned.apk alias_name
```
Aqui será pedida a senha da assinatura da Play Store. Por fim, para otimizar o apk, utilizamos o zipalign:
```
$ zipalign -v 4 android-release-unsigned.apk rhs-app.apk
```
O comando `zipalign` vai estar na pasta _build-tools_, dentro de onde está instalado sua SDK do Android. Concluído, ele terá gerado o arquivo rhs-app.apk, que deve ser submetido na [Google Play Console](https://play.google.com/apps/publish/?hl=pt-BR&account=8887034465822485556#ManageReleasesPlace:p=com.redehumanizasus.app).

-------

### Depurando remotamente no Android

Um guia completo sobre como usar o Google Chrome para inspecionar elementos e acompanhar logs no console do app rodando no Android pode ser encontrado [aqui](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?hl=pt-br).


---------------------------------------------------

## iOS (iPhone)

### Instalar xCode e Cocoapods:

Como em qualquer desenvolvimento para iOS, é preciso ter o Xcode instalado. Para tal é necessário criar um [Apple ID](https://appleid.apple.com/pt_br/), e fazer login na Mac App Store, onde você pode [baixar o Xcode](https://itunes.apple.com/br/app/xcode/id497799835?mt=12).

Também é necessário ter o [CocoaPods](https://guides.cocoapods.org/using/getting-started.html), que por ser um pacote ruby pode ser instalado através do `gem`:

```
$ sudo gem install cocoapods
``` 

### Compilando o projeto para iOS:

É necessário ter o plugin cordova para a CLI do Ionic, caso ainda não tenha sido instalado:

```
$ npm install --save-dev --save-exact ionic/cli-plugin-cordova@latest
$ ionic cordova platform add ios
$ ionic cordova build ios
```

Os últimos dois comandos adicionam os arquivos de build do ios ao seu projeto e compilam o mesmo.

### Rodando o aplicativo no iOS:

Após a etapa de build, um arquivo *.xcworkspace* será gerado em seu projeto, dentro da pasta `/platforms/ios/`. Abra este projeto com o Xcode. Pode ser necessário que você configure o 'team' associado ao projeto na aba General -> Signing -> Team, com seus dados de desenvolvedor.

Tendo o projeto selecionado, aperte o botão de rodar para executar o simulador iOS.


-------
## Possíveis Problemas encontrados:

- *Dependências incompatíveis do plugin do Google Service*: Ao executar `build` pela primeira vez com o projeto vindo do git, é bem provável que seja retornado o seguinte erro:

```
A problem occurred evaluating root project 'android'.
> Failed to apply plugin [class 'com.google.gms.googleservices.GoogleServicesPlugin']
   > For input string: "+"
```

A solução está em editar o arquivo _/platforms/android/project.properties_, e substituir:

```
cordova.system.library.3=com.google.android.gms:play-services-analytics:+
```
por:
```
cordova.system.library.3=com.google.android.gms:play-services-analytics:11.0.+
```

Este erro acontece com mais de um plugin do cordova ou phonegap relacionado aos serviços do Google e foi discutido extensamente [aqui](https://github.com/phonegap/phonegap-plugin-push/issues/1718#issuecomment-339965121) e em outras issues. Como a pasta _/platforms_ só é gerada após o build e está fora desse git (não deve ser enviado mesmo para o repositório, pois faz parte do build), esta mudança precisa ser feita manualmente. Infelizmente esse valor é gerado ao se inserir o plugin e quem o determina é o criador do mesmo. Não há um consenso entre diferentes desenvolvedores de plugins de qual versão manter, por isso precisamos adotar um padrão para o projeto. 

- *$ ANDROID_HOME not found*: Caso, ao tentar executar o `build`, a CLI informe que não consegue encontrar sua instalação Android, configure o path manualmente através dos seguintes comandos:

```
$ export ANDROID_HOME="/<path_to_android>/Android/Sdk"
$ export PATH=${PATH}:/<path_to_android>/Android/Sdk/tools
$ export PATH=${PATH}:/<path_to_android>/Android/Sdk/platform-tools
```

Substituindo <path_to_android> pelas caminho da sua instalação. Uma maneira de descobrir onde está sua instalação é através do comando `whereis`:

```
$ whereis android
```

- *Emulador AVD não encontrado*: Se, ao tentar executar `run` retornar uma mensagem de erro relacionada ao "Emulador Android AVD não encontrado", sendo que sua intenção era executar no celular, isso significa que o não foi possível comunicar com o seu Android via USB. Para esses casos, execute:

```
adb kill-server
adb devices
```

Isto re-iniciará o server do _adb_ e deve listar os dispositivos android plugados. Na primeira vez que executado, você deve fornecer autorização para o computador depurar através de um diálogo de confirmação que surgirá no celular. 

-----------------------------------
## Estrutura de Pastas

Uma visão geral com comentários da estrutura do app é dada a seguir (algumas pastas e arquivos foram desconsideradas por terem pouca relevância):
```
resources/              ---> Ícones e Tela de Splash, gerados pelo ionic cordova resources.
www/                    ---> Para onde o build gerado para o web server é realizado. Não se trabalha nesta pasta.
src/                    ---> Pasta de trabalho.
  |app/                 ----> Componente pai do app.
    |app.html           -----> Aqui está a estrutura do Menu Lateral e a raiz da navegação.
    |app.module.ts      -----> Imports de módulos necessários globalmente, incluindo os plugins do cordova.
    |app.component.ts   -----> Trata de todas as operações de inicialização, como gerar e registrar IDs, checar usuário, localstorage, ações para push notifications, endereço do Analytics... 
    |app.scss           -----> Estética do menu lateral, animações de página e alguns spinners.
    |main.ts            -----> Entry point. Não se trabalha neste arquivo.
  |assets/              ----> Arquivos de imagem a serem referenciados pelo app.
  |components/          ----> Componentes reaproveitados em mais de uma página.
    |information/       -----> Usado para gerar informações do tipo "Você não tem acesso à essa página", com a logo da RHS acima.
    |post-card/         -----> O Card de Post.
  |directives/          ----> Diretivas que mudam o comportamento de componentes.
    |shrink-header/     -----> Utilizado na página de Post para esconder o cabeçalho de acordo com o scroll.
  |pages/               ----> Onde estão todas as páginas do aplicativo
    |comment/           -----> Página de resposta a um Comentário.
    |following/         -----> Página que lista Usuários que estão sendo seguidos (acessível via menu lateral).
    |intro/             -----> Slide de Introdução do app, com as imagens criadas pela equipe de Design.
    |login/             -----> Página com os botões de logar e registrar. Aqui é feita a rotina de login. 
    |notifications/     -----> Página que lista as notificações do Usuário. 
    |post/              -----> Página de um Post. Segue a descrição genérica dos componentes de uma página.
      |post.html        ------> Arquivo onde fica a estrutura da página.
      |post.module.ts   ------> Arquivo onde são carregados os módulos necessários e exportado o componente (lazy loading).
      |post.scss        ------> Arquivo onde pode ser alterada a estética da página.
      |post.ts          ------> Arquivo onde está a lógica de funcionamento do componente.
    |posts/             -----> Página Inicial, onde estão listados os posts.
    |profile/           -----> Página do Usuário Logado, acessível via menu lateral.
    |search/            -----> Página de Busca. Pode ser acessada também pelas tags e categorias em posts.
    |settings/          -----> Página de Configurações, acessível via menu lateral. Aqui é feita a rotina de logout.
    |user/              -----> Página de outros Usuários que não sejam o atual.
  |pipes/               ----> Filtros aplicados sob a renderização do html recebido da API.
    |inner-html-image/  -----> Trata dos casos em que a imagem de usuário vem com a tag img ao invés de somente o src.
    |inner-html-post/   -----> Trata de sanitizar o conteúdo do post e de ajustar imagens que estejam com caminho relativo dentro do post.
    |inner-html-notification/> Trata de remover links do conteúdo recebido das notificações.
  |providers/           ----> Serviços acessados por diversas páginas do App.
    |api/               -----> Onde são feitas todas as requisições de conteúdo à API do Wordpress.
    |authentication/    -----> Onde são feitas as operações relacionadas a autenticação Auth0.
    |settings/          -----> Onde estão as informações de configurações do App, incluindo IDs, Tokens, URLs da API, preferêcias...
    |update/            -----> Onde é gerenciado o reload automático de posts após 5 minutos sem atividade na página de Posts.
  |theme/               ----> Onde estão (e onde podem ser sobrescritas) variáveis globais do CSS.
  |index.html           ----> Referência de arquivo raiz que será copiado para a www no build. Não se trabalha aqui.
config.xml              ---> Configurações do Cordova para exibir o app em uma webview. Metadados como a versão e o nome do App.
package.json            ---> Configurações de dependências e build do App. Plugins adicionados são listados aqui.
```



