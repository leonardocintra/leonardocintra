

const url_base = "https://api.leonardocintra.com.br/portao";

export async function POST(req: Request) {
  const { action } = await req.json();
  let url;
  if (action === "abrir") {
    url = `${url_base}/abrir`;
  } else if (action === "fechar") {
    url = `${url_base}/fechar`;
  } else {
    return Response.json({ message: "Ação inválida" }, { status: 400 });
  }

  const res = await fetch(url, {
    method: "POST",
  });

  const resData = await res.json();

  if (res.status === 201) {
    return Response.json(resData.data, {
      status: 201,
    });
  } else {
    return Response.json(
      {
        message: resData.message[0],
      },
      {
        status: res.status,
      }
    );
  }
}

export async function GET() {
  const url = `${url_base}/status`;
  const res = await fetch(url);
  if (!res.ok) {
    return Response.json({ message: "Erro ao buscar status" }, { status: res.status });
  }
  const resData = await res.json();
  return Response.json(resData);
}
