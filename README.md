# wagmicn.web3hacker.world

We translate the [wagmi Docs](https://github.com/wagmi-dev/wagmi/tree/main/docs/pages/core) into Chinese here.

It will auto sync the docs to the `content/en` folder, then we make manual translate into the `content/zh` folder.

## Setup

```bash [init projects]
git clone git@github.com:Web3Hacker-World/wagmicn.web3hacker.world.git
take _github && git clone --depth=1 git@github.com:wagmi-dev/wagmi.git 
cd ../wagmicn.web3hacker.world
pnpm i --shamefully-hoist
```

```bash [sync docs]
pnpm sync
```

```bash [run the docs site local]
pnpm dev
```
