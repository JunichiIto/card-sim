# card-sim
Card collection simulator

https://card-sim.jnito.com/

## Compile

```
RUBYOPT="-ropal-jquery" be opal -Ilib --compile src/simulator.rb > dist/simulator.js
open dist/index.html
```

## Deploy

```
# Setup
firebase login
firebase init hosting

# Deploy
firebase deploy
```
