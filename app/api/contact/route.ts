// app/api/contact/route.ts  (stub temporal)
export async function POST(req: Request) {
  return new Response(JSON.stringify({ ok: true, message: "Contacto recibido (modo prueba)." }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}

export async function GET(req: Request) {
  return new Response(JSON.stringify({ ok: true, message: "API de contacto (modo prueba)." }), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}