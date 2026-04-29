export default function Home() {
  return (
    <main style={{
      background:"#0A0A0A",
      minHeight:"100vh",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      fontFamily:"Georgia,serif"
    }}>
      <div style={{textAlign:"center",padding:"40px 20px"}}>
        <div style={{
          width:160,height:160,borderRadius:"50%",
          border:"2px solid #C9A84C",
          display:"flex",alignItems:"center",justifyContent:"center",
          margin:"0 auto 40px",
          background:"rgba(201,168,76,0.05)"
        }}>
          <span style={{fontSize:60}}>🌉</span>
        </div>
        <div style={{fontSize:11,letterSpacing:6,color:"#C9A84C",textTransform:"uppercase",marginBottom:16}}>
          Istanbul · Turkey · Florida USA
        </div>
        <h1 style={{
          fontSize:"clamp(36px,6vw,80px)",
          fontWeight:300,
          color:"#F5F3EE",
          lineHeight:1.1,
          marginBottom:16
        }}>
          Trade Istanbul<br/>
          <span style={{color:"#C9A84C",fontStyle:"italic"}}>Group</span>
        </h1>
        <div style={{fontSize:12,letterSpacing:4,color:"#888",textTransform:"uppercase",marginBottom:48}}>
          Premium B2B Export & Wholesale Distribution
        </div>
        <div style={{display:"flex",gap:16,justifyContent:"center",flexWrap:"wrap",marginBottom:64}}>
          {[["21","Categories"],["150+","Manufacturers"],["40+","Countries"]].map(([n,l])=>(
            <div key={l} style={{textAlign:"center",padding:"20px 32px",border:"1px solid rgba(201,168,76,0.2)"}}>
              <div style={{fontSize:32,color:"#C9A84C",fontWeight:300}}>{n}</div>
              <div style={{fontSize:9,letterSpacing:2,color:"#888",textTransform:"uppercase",marginTop:4}}>{l}</div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:12,justifyContent:"center",flexWrap:"wrap"}}>
          <button style={{padding:"14px 32px",background:"#C9A84C",color:"#0A0A0A",fontSize:11,letterSpacing:2,textTransform:"uppercase",border:"none",cursor:"pointer",fontWeight:700}}>
            Request Price List
          </button>
          <button style={{padding:"14px 32px",background:"none",border:"1px solid #C9A84C",color:"#C9A84C",fontSize:11,letterSpacing:2,textTransform:"uppercase",cursor:"pointer"}}>
            Explore Catalog
          </button>
        </div>
      </div>
    </main>
  )
}