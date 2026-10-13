import { readFileSync } from "node:fs";

const entrada = JSON.parse(readFileSync(0, "utf8"));
const ruta = entrada.tool_input.file_path ?? "";
const archivo = ruta.split(/[\\/]/).pop().toLowerCase();

if (archivo.startsWith(".env")) {
  console.error(
    `Bloqueado por calidad-ts: ${archivo} guarda claves y configuración ` +
      "privada. Ese archivo lo editas tú, no Claude."
  );
  process.exit(2);
}

process.exit(0);