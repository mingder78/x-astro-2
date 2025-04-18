export async function GET() {
  const items = {
    items: [
      { id: 1, name: "Item 1", description: "Description 1" },
      { id: 2, name: "Item 2", description: "Description 2" },
      { id: 3, name: "Item 3", description: "Description 3" },
    ],
  };

  return new Response(JSON.stringify(items), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
