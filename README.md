# NotionDB-outputプロジェクト

このプロジェクトはNext.jsを使用して構築されたWebアプリケーションです。

下記の NotionDB テンプレートの利用を前提としています。

[テンプレート](https://honored-motion-55e.notion.site/129eaa80727680f19b06d02621f24066?v=129eaa807276819899ee000c30bb0f5b&pvs=4)

NotionDBのPublishedテーブルのフラグが有効になっているものを公開します。

## はじめに

このプロジェクトを始めるには、以下の手順に従ってください

1. **リポジトリをクローンする:**

```sh
git clone https://github.com/yourusername/errorda2_flag_checker.git
cd errorda2_flag_checker.git
```

2. **.env.localファイルの作成:**

```sh
# ルートディレクトリ直下に作成
NOTION_TOKEN=NotionTokenKeyを記載
NOTION_DATABASE_ID=NotionDATABASEIDを記載
```

3. **Dockerで環境構築・起動:**

```sh
cd docker
# backgroundで起動
docker-compose up -d
or
# foregroundで起動
docker-compose up
```

4. **Lint系のチェックコマンド:**

```sh
# コンテナに入って実行
docker exec -it errorda2-app /bin/sh
yarn lint
```

5. **lint系のエラー修正コマンド:**

```sh
# コンテナに入って実行
docker exec -it errorda2-app /bin/sh
yarn fix
```

6. **停止コマンド:**

```sh
cd docker
# background
docker-compose stop
or
# foreground
control + c
```

## Dockerを利用せずローカルでの開発環境構築

 前提準備
 - Node.jsのインストール（使用バージョン:14.2.12）
 - yarnのインストール（使用バージョン:v1.22.19）

1. **リポジトリをクローンする:**

```sh
git clone https://github.com/yourusername/errorda2_flag_checker.git
cd errorda2_flag_checker.git
```

2. **.env.localファイルの作成:**

```sh
# ルートディレクトリ直下に作成
NOTION_TOKEN=NotionTokenKeyを記載
NOTION_DATABASE_ID=NotionDATABASEIDを記載
```

3. **依存関係をインストールする:**

```sh
yarn install
```

4. **開発サーバーを起動する:**

```sh
yarn dev
```

5. **Lint系のチェックコマンド:**

```sh
yarn lint
```

6. **lint系のエラー修正コマンド:**

```sh
yarn fix
```

## Vercelへのデプロイ

Next.jsアプリをデプロイする最も簡単な方法は、Next.jsの開発者が提供する[Vercelプラットフォーム](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)を使用することです。

詳細については、[Next.jsのデプロイメントドキュメント](https://nextjs.org/docs/deployment)を参照してください。

## ライセンス

このプロジェクトは [MIT ライセンス](./LICENSE) の下でライセンスされています。

### 使用しているライブラリのライセンス
- **@notionhq/client**: [MIT License](https://github.com/makenotion/notion-sdk-js/blob/main/LICENSE)
- **@secretlint/secretlint-rule-preset-recommend**: [MIT License](https://github.com/secretlint/secretlint/blob/main/packages/%40secretlint/secretlint-rule-preset-recommend/LICENSE)
- **@types/node**: [MIT License](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE)
- **@types/react**: [MIT License](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE)
- **@types/react-dom**: [MIT License](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE)
- **@types/react-syntax-highlighter**: [MIT License](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/LICENSE)
- **@typescript-eslint/eslint-plugin**: [MIT License](https://github.com/typescript-eslint/typescript-eslint/blob/main/LICENSE)
- **@typescript-eslint/parser**: [MIT License](https://github.com/typescript-eslint/typescript-eslint/blob/main/LICENSE)
- **eslint**: [MIT License](https://github.com/eslint/eslint/blob/main/LICENSE)
- **eslint-config-next**: [MIT License](https://github.com/vercel/next.js/blob/canary/license.md)
- **eslint-config-prettier**: [MIT License](https://github.com/prettier/eslint-config-prettier/blob/main/LICENSE)
- **eslint-plugin-redos**: [MIT License](https://github.com/ljharb/eslint-plugin-redos/blob/main/LICENSE)
- **eslint-plugin-simple-import-sort**: [MIT License](https://github.com/lydell/eslint-plugin-simple-import-sort/blob/main/LICENSE)
- **next**: [MIT License](https://github.com/vercel/next.js/blob/canary/license.md)
- **notion-to-md**: [MIT License](https://github.com/souvikinator/notion-to-md/blob/main/LICENSE)
- **npm-run-all2**: [MIT License](https://github.com/mysticatea/npm-run-all/blob/master/LICENSE)
- **npx**: [MIT License](https://github.com/npm/npx/blob/latest/LICENSE)
- **postcss**: [MIT License](https://github.com/postcss/postcss/blob/main/LICENSE)
- **prettier**: [MIT License](https://github.com/prettier/prettier/blob/main/LICENSE)
- **react**: [MIT License](https://github.com/facebook/react/blob/main/LICENSE)
- **react-dom**: [MIT License](https://github.com/facebook/react/blob/main/LICENSE)
- **react-markdown**: [MIT License](https://github.com/remarkjs/react-markdown/blob/main/license)
- **react-syntax-highlighter**: [MIT License](https://github.com/react-syntax-highlighter/react-syntax-highlighter/blob/master/LICENSE)
- **secretlint**: [MIT License](https://github.com/secretlint/secretlint/blob/main/LICENSE)
- **tailwindcss**: [MIT License](https://github.com/tailwindlabs/tailwindcss/blob/master/LICENSE)
- **typescript**: [Apache License 2.0](https://github.com/microsoft/TypeScript/blob/main/LICENSE.txt)