# Kata FizzBuzz
## Règles
* Si l'entrée est un multiple de trois retourne Fizz.
* Si l'entrée est un mulitple de cing retourne Buzz.
* Si l'entrée est un multiple de trois et cinq retourne FizzBuzz.
* Autrement retourne l'entrée.
## Utilisation
Installer node.js en allant par là -> https://nodejs.org/en/

Faire `npm install`

Pour lancer les tests, se placer dans le dossier et `npm test` ou `npm run watch` pour un lancement à chaque enregistrement des fichiers.

Pour tester une string il faut utiliser `expect(fizzbuzz(3)).toMatch('Fizz')`