# App da Rede Humaniza SUS

![Rede Humaniza SUS](https://github.com/medialab-ufg/rhs-app/blob/master/www/assets/images/slide1.png =500x)

Aplicativo Android e iOS para a [Rede Humaniza SUS](http://redehumanizasus.net/) (RHS).
Desenvolvido em Ionic, integra dados através da WP-API do Wordpress.

[![PlayStore](https://raw.githubusercontent.com/steverichey/google-play-badge-svg/master/img/pt-br_get.svg?sanitize=true =250x)](https://play.google.com/store/apps/details?id=com.redehumanizasus.app)

---------------------------------------
## Configurações via docker:
A configuração do ambiente em sua máquina pode ser trabalhosa. Caso deseje utilizar o docker, temos uma imagem preparada com um script para ajustes de permissões de usuário:

[https://github.com/mateuswetah/docker-ionic](https://github.com/mateuswetah/docker-ionic)

_Obs.: A imagem funciona apenas para Android._

---------------------------------------
## Configurações do ambiente para o projeto:

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
## Build em Android

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

O build acontecerá novamente, mas desta vez o .apk gerado será transferido e instalado no seu aparelho.

---------------------------------------------------

## Build em iOS

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

### Depurando remotamente no Android

Um guia completo sobre como usar o Google Chrome para inspecionar elementos e acompanhar logs no console do app rodando no Android pode ser encontrado [aqui](https://developers.google.com/web/tools/chrome-devtools/remote-debugging/?hl=pt-br).


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