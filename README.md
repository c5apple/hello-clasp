# hello-clasp

## @google/clasp Version

```sh
$ npx clasp --version
2.4.2
```

## Login

Google Apps Script APIを有効にしておく

![GASをオンにする](docs/images/README/gas_on.png)

```sh
$ npx clasp login
```

許可を求めてくるので、必要なものにチェックを入れる

![Googleにログイン](docs/images/README/login.png)

![Googleにログイン成功(コンソール)](docs/images/README/login_successful_console.png)

![Googleにログイン成功(ブラウザ)](docs/images/README/login_successful_browser.png)

成功すると、トークンが保存された `.clasprc.json` が作成される

```sh
$ ls ~/.clasprc.json
```

## Create

```sh
$ npx clasp create sample
```

![プロジェクト作成](docs/images/README/create_console.png)

成功すると、`.clasp.json` と `appsscript.json` が出来上がる。

![プロジェクト作成(ブラウザ)](docs/images/README/create_browser.png)

### .clasp.json

```json
{
    "scriptId": "XXX",
    "rootDir": "src",
    "parentId": [
        "XXX"
    ]
}
```

`rootDir` は同期対象のフォルダ。  
相対パスで `src/` などを指定しておくといいだろう。

同期対象ファイルを確認する場合

```sh
$ npx clasp status
```


## Clone

既存プロジェクトが存在する場合

```sh
$ npx clasp clone [scriptId]
```

## .claspignore

除外したいファイルがあれば、`.claspignore` に書く。  
デフォルトがあるので普通にする分には不要の気がする。

```
# ignore all files…
**/**

# except the extensions…
!appsscript.json
!**/*.gs
!**/*.js
!**/*.ts
!**/*.html

# ignore even valid files if in…
.git/**
node_modules/**
```
