# Is Git

Schreib ein Programm, das anzeigt, ob ein Ordner eine GIT-Repository ist.

### 1. Vervollständige die Funktion

In der Datei `is-git.js` wird eine Funktion exportiert. Schreib in dieser Funktion Code, der prüft, ob ein angegebener Pfad einen `.git`-Ordner enthält. Dafür kannst du die Bibliothek [`directory-exists`](https://www.npmjs.com/package/directory-exists) benutzen.

#### Anforderungen (Aufgabe 1)

* Die Funktion soll einen String zurückgeben, in dem Steht ob der übergebene Pfag eine GIT-Repository ist oder nicht.
* Der Funktion soll ein **_relativer_** Pfad übergeben werden. Der String, der zurückgegeben wird, soll aber einen **_absoluten_** Pfad enthalten (Siehe Beispiele unten)
* Wenn der angegebene Ordner nicht existiert, soll das Programm sich beenden und Eine Meldung für den Nutzer ausgeben.

#### Beispiele (Aufgabe 1)

| Fall | Eingabe | Ausgabe |
|------|-------|--------|
| Eingabe ist kein existierender Ordner | `'../hello'` | `Sorry, but I couldn't find a directory at /home/itamar/hello` |
| Eingabe ist ein GIT-Repository | `'./blockly-vue'` | `/home/itamar/blockly-vue is a git repository` |
| Eingabe ist keine GIT-Repository | `'./blockly-vue/src'` | `/home/itamar/blockly-vue/src is **not** a git repository` |

### 2. Mach daraus ein Terminal-Programm

In der Datei `index.js` soll mindestens ein Terminal-Argument vom Benutzer angenommen werden. Importiere hier die Funktion von `is-git.js` um zu prüfen, ob der angegebene Pfad eine GIT-Repository ist.

#### Anforderungen (Aufgabe 2)

* Wenn der angegebene Ordner nicht existiert, soll das Programm sich beenden und Eine Meldung für den Nutzer ausgeben (Siehe Beispiele unten)
* Füg die Möglichkeit hinzu, mehrere Pfade in mehreren Argumenten anzugeben

#### Beispiele (Aufgabe 2)

##### Ordner ist eine GIT-Repository

```bash
$ node index.js ../blockly-vue
> "/home/itamar/blockly-vue is a git repository"
```

##### Ordner ist keine GIT-Repository

```bash
$ node index.js ../blockly-vue/src
> "/home/itamar/blockly-vue/src is **not** a git repository"
```

##### Ordner existiert nicht

```bash
$ node index.js ../hello
> "Sorry, but I couldn't find a directory at /home/itamar/hello"
```

##### Keine Argumente angegeben

```bash
$ node index.js
> "Please pass in at least one directory path to check for git repositories"
```

##### Mehrere Argumente

```bash
$ node index.js ../blockly-vue ../blockly-vue/src
> "/home/itamar/blockly-vue is a git repository"
> "/home/itamar/blockly-vue/src is **not** a git repository"
```

### Bonus Aufgaben

* Nutze die extrerne Bibliothek [`chalk`](https://www.npmjs.com/package/chalk) um Textfarben zur Ausgabe hinzuzufügen.
* Mach einen globalen Link für dein npm package so dass das Programm überall im Terminal benutzt werden kann, in dem man `is-git <directory>` aufruft.
* Veröffentliche das Programm als npm Paket unter deinem Nutzer-Namespace
