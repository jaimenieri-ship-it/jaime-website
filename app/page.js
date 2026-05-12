export default function Home() {
  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      textAlign: "center",
      gap: "20px"
    }}>
      <h1>Mi página</h1>

      <img
        src="/jaime.png"
        alt="Jaime"
        style={{
          width: "300px",
          borderRadius: "12px"
        }}
      />
    </main>
  );
}