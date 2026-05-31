# CustomProfiles (Vencord Edition)

CustomProfiles for Vencord requires a small CSP modification before installation.

## Prerequisites

* Git
* Node.js
* pnpm (or install it later during setup)

---

## Step 1: Clone Vencord

Clone the Vencord repository:

```bash
git clone https://github.com/Vendicated/Vencord.git
```

Navigate into the newly created Vencord directory.

---

## Step 2: Patch the CSP

Open:

```text
src/main/csp/index.ts
```

Locate:

```ts
export const CspPolicies: PolicyMap = {
```

Replace the existing CSP policy contents with the contents from `replacement.ts`.

Save the file.

---

# Why is Step 2 required?

While attempting to build a version of **CustomProfiles** with **Vencord** i noticed a few issues, CSP blocking everything.

---
## Step 3: Install CustomProfiles

Inside the Vencord source directory, navigate to:

```text
src/
```

Create a folder named:

```text
userplugins
```

Enter the folder and clone CustomProfiles:

```bash
git clone https://github.com/ManyPlugins/CustomProfiles.git
```

### Important

Your directory structure should look like this:

```text
src/
└── userplugins/
    └── CustomProfiles/
        ├── package.json
        ├── src/
        ├── README.md
        └── ...
```

Do **not** nest the repository inside another folder.

---

## Step 4: Install pnpm

If you don't already have pnpm installed:

```bash
npm install -g pnpm
```

---

## Step 5: Build & Inject

Run the following commands inside the `CustomProfiles` directory:

```bash
pnpm install
pnpm build
pnpm inject
```

When prompted, select the Discord installation you want to inject Vencord into.

---

## Step 6: Launch Discord

Restart Discord, or press:

```text
Ctrl + R
```

If everything was installed correctly, CustomProfiles should now be loaded and ready to use.

Enjoy 🎉
