import { useLocation } from 'react-router-dom'
import './thankyou.css'

function ThankYou() {
  const location = useLocation()
  const name = location.state?.name

  return (
    <div className="thankyou-wrapper">
      <div className="thankyou-card text-center">

        <h3 className="fade-in">
          شكرًا ليك{ name ? ` يا ${name}` : '' } 🤍
        </h3>

        <p className="fade-in-delay fs-5">
          كلامك فرّحنا اوى, ونتمنى تتبسط معانا النهارده  
          وجودك نوّر يومنا 🌸
        </p>

        <p className="small-text fade-in-delay fs-5">
          دعواتكم لينا بالتيسير ❤️
        </p>

      </div>
    </div>
  )
}

export default ThankYou
