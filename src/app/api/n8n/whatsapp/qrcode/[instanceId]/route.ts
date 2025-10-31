import { NextRequest, NextResponse } from "next/server";

interface PairingCodeResponse {
  pairingCode: string;
  base64: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ instanceId: string }> }
) {
  try {
    const { instanceId } = await params;

    if (!instanceId) {
      return NextResponse.json(
        { error: "Instance ID is required" },
        { status: 400 }
      );
    }

    const webhookUrl = `${process.env.N8N_API_URL}/pairing-code/${instanceId}`;

    const response = await fetch(webhookUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: `N8N API error: ${response.status} ${response.statusText}` },
        { status: response.status }
      );
    }

    const data: PairingCodeResponse = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching pairing code:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
