import './App.css'
import React,{useState}from'react'

export default function App() {
   const[valorTela,setValorTela]=useState("")
const[resultado,setResultado]=useState(0)
const[acumulador,setAcumulador]=useState(0)
const[operado,setOperado]=useState(false)

function Digito(d){
 if((d=='+'||d=='-'||d=='/'||d=='*')&& operado){
    setOperado(false)
   setValorTela(resultado+d)
    return
   }
   if(operado){
  setValorTela(d)
  setOperado(false)

    return
 }
  const vDT=valorTela+d
    setValorTela(vDT)
  } 
  function LM(){
    setOperado(false) 
    setValorTela('')
    setResultado(0)
    setAcumulador(0)
     return 
  }
    function Op(oper){
      if(oper=='bs'){
     let vTela=valorTela
     vTela=vTela.substring(0,(vTela.length-1))
    setValorTela(vTela)
    setOperado(false)
    return 
}
  try{
    const r=eval(valorTela)
    setAcumulador(r)
    setResultado(r)
    setOperado(true)
  }catch{
    setResultado('Erro')
  }
   }

  
return(
  <header style={cont}>
  <div>
    
   <div style={display}>
   <span>
{valorTela}
   </span>
   <span>
{resultado}
   </span>
   </div> 
  <div style={div}>
   <div style={btn}>
   <button
    onClick={()=>LM()}
    
    >
    AC
   </button>
   <button
    onClick={()=>Digito('(')}
     >
     (
   </button>
   <button
    onClick={()=>Digito(')')}
     >
     )
   </button>
   <button
  onClick={()=>Digito('/')}  
   >
    /
   </button>
   </div>

   <div style={btn}>
   <button
    onClick={()=>Digito('7')}   
     >
     7
   </button>
   <button
    onClick={()=>Digito('8')}   
     >
     8
   </button>
   <button
   onClick={()=>Digito('9')}    
     >  

      9
   </button>
   <button
    onClick={()=>Digito('*')}   
     >
     X
   </button>
   </div>

    <div style={btn}>
   <button
    onClick={()=>Digito('4')}   
     >
     4
   </button>
   <button
    onClick={()=>Digito('5')}   
     >
     5
   </button>
   <button
    onClick={()=>Digito('6')}  
     >
     6
   </button>
   <button
    onClick={()=>Digito('-')}  
     >
     -
   </button>
   </div>

    <div style={btn}>
   <button
    onClick={()=>Digito('1')}  
     >
     1
   </button>
   <button
    onClick={()=>Digito('2')}  
   >
     2
   </button>
   <button
    onClick={()=>Digito('3')}  
     >
     3
   </button>
   <button
    onClick={()=>Digito('+')}  
     >
     +
   </button>
   </div>

    <div style={btn}>
   <button
    onClick={()=>Digito('0')}  
     >
     0
   </button>
   <button
    onClick={()=>Digito('.')}  
   >
    .
   </button>
   <button
    onClick={()=>Op('bs')}
     >
     BK
   </button>
   <button
    onClick={()=>Op('=')} 
     >
    =
   </button>
   </div>
  </div>
  </div>
  </header>
);
  }
const cont={
 display:'flex',
 justifyContent:'center',
 alignItems:'center',
}
const div={
  background:'black',
  width:200,
  height:250,
}
const btn={
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  marginTop:20,
  
}
const display={
  display:'flex',
  flexDirection:'column',
  justifyContent:'flex-end',
  backgroundColor:'#FFD3D3D3',
}