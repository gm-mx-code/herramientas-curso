---
name: revisar
description: Revisa si el proyecto está listo para entregar corriendo
  el typecheck y las pruebas, y da un semáforo. Úsala cuando se
  pregunte si el proyecto está listo o si algo se rompió.
allowed-tools: PowerShell(npm run typecheck) PowerShell(npm test) Bash(npm run typecheck) Bash(npm test)
---

# Revisar el proyecto

1. Lee package.json y confirma si existen los scripts "typecheck" y
   "test".
2. Si existe "typecheck", ejecuta npm run typecheck.
3. Si existe "test", ejecuta npm test.
4. Da un semáforo:
   - Verde: los dos scripts existen y pasan
   - Amarillo: todo lo que existe pasa, pero falta alguno de los dos
   - Rojo: el typecheck o alguna prueba falla
5. Explica el color en una línea y, si no es verde, qué haría falta.
6. No cambies ningún archivo ni intentes corregir nada: solo revisa e
   informa.