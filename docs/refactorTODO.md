## refactoring the ToDo-App after the reviwe with Sarah

### CORS Error
If the json-server was not online there was this error: 
`Quellübergreifende (Cross-Origin) Anfrage blockiert: Die Gleiche-Quelle-Regel verbietet das Lesen der externen Ressource auf http://localhost:48329/todos. (Grund: CORS-Anfrage schlug fehl). Statuscode: (null).`

To add `no-cors` as a fetch option:
```js
const response = await fetch(API, {
  mode: 'no-cors',
});
```
solves the problem only in the GET request.   
I found no solution for that...



