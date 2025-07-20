## Next.js project setup

```
npx create-next-app@latest my-static-site --typescript

```

![1](https://github.com/pandyama/product-site/blob/main/HomePage.png)

## Git

```
git remote remove origin
git remote add origin https://<TOKEN>@github.com/<REPO-OWNER-USERNAME>/<REPO-NAME>
git push
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Styling
- In order to get sass modules types to work with nextjs, follow below steps
- [ 1 ] Install `typed-scss-modules` using `npm typed-scss-modules`
- [ 2 ] Add two scripts to `package.json`
      ```
       "scss-types": "typed-scss-modules src",
       "scss-types:watch": "typed-scss-modules src --watch"
      ```
- [ 3 ] Run `npm scss-types` which will generate a bunch of `xxx.module.scss.d.ts` & sass style classnames have to be `camelCase`






