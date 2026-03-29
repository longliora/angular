
## Cài Node.js và Angular cho Linux

### 1. Cài NVM
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
````

Reload shell:

```bash
source ~/.bashrc
```

---

### 2. Cài Node.js (LTS)

```bash
nvm install --lts
nvm use --lts
```

---

### 3. Cài Angular CLI

```bash
npm install -g @angular/cli
```

Kiểm tra:

```bash
ng version
```
