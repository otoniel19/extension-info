# extension-nfo

- usage

```js
  const extensionInfo = require("extension-info")
  extensionInfo.get(".js") => { name: 'JavaScript' , extension: ".js" }

	//get list
	extensionInfo.list // {}
```

- cli
- install

```sh
 #using npm
 $ npm install -g extension-info --no-bin-links
 #using yarn
 $ yarn global add extension-info
```

- cli usage

```sh
 extension .ts => TypeScript
```
