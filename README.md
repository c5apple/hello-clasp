# hello-clasp

## @google/clasp Version

```sh
$ npx clasp --version
2.4.2
```

## Login

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
