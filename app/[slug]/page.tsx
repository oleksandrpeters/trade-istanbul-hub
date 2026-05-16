export default function Page() {
  return (
    <main style={{
      background: '#0A0A0A',
      color: '#C9A84C',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      gap: 16,
      fontFamily: 'Georgia,serif'
    }}>
      <h1 style={{fontSize: 32, fontWeight: 300}}>Coming Soon</h1>
      <a href="/" style={{fontSize: 11, color: '#C9A84C', letterSpacing: 3}}>← Back to Home</a>
    </main>
  )
}