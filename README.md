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
    "rootDir": "/XXX/hallo-clasp",
    "parentId": [
        "XXX"
    ]
}
```

## Clone

既存プロジェクトが存在する場合

```sh
$ npx clasp clone [scriptId]
```
