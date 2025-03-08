export default function Header()
{
    return(
        <>
        <div style={{height:'auto',width:'full',border:'2px black solid',backgroundColor:'pink'}}>
            <ul style={{display:'flex',gap:'30px',listStyle:'none',justifyContent:'center', 
                textDecoration:'none'}}>
                <li><a style={{textDecoration:'none',color:'black',}} href="#">Home</a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="#">About</a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="#">visit</a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="#">Contect</a></li>
                <li><a style={{textDecoration:'none',color:'black'}} href="#">Gallery</a></li>
            </ul>
        </div>
        </>
    )
}