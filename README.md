# Console log for devices
Ability to see the website console log via hand gadgets like smartphones and tabs.

Just include the script "only-for-develope" in your ```<head>``` tag and that's it! 

No jQuery required.

## How it works

1. First You will see the fixed block with violet background and white text inside "init done", that means everything works fine.
2. Every console.log or console.error message will be displayed in that block
3. Click on that block will clear it (remove all previous messages)
4. To change block styles just rewrite css rules to ```#develope-mode```
5. Block has ```max-height: 150px```, so You will be able to scroll content inside with height more then 150px

## Usage

1. Insert the script **first** in ```<head>``` tag: 
``` <script src="only-for-develope.js"></script>```
2. Console.log something in your (main?).js file
```
console.log('Hello world!');
console.error('Oops...');
```
