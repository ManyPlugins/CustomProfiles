# CustomProfiles (Vencord Edition)

This one is a little weird.. Hang tight!

Run ```git clone https://github.com/Vendicated/Vencord.git```

Navigate to where it was made.

Head to src/main/csp/index.ts

Replace  ```export const CspPolicies: PolicyMap = {``` stuff. with the replacement.ts

# Creating the UserScript

## This part is pretty easy i'd say.

Head to /src/ and make a folder called userplugins, Then run ```git clone https://github.com/ManyPlugins/CustomProfiles.git``` in the userplugins folder.
Make sure the folder is NOT nested. Make sure the folder contains all contents at the root.

Navigate into the folder of CustomProfiles and run

```npm install -g pnpm``` 
Required. (Unless you have it.)

## Setting it up with pnpm

Simply run these 3 commands in order.

- pnpm install
- pnpm build
- pnpm inject

On pnpm inject choose the build you want to inject Vencord into.

Open Discord or CTRL + R, It should be installed. Enjoy!
