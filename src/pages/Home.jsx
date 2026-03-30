import hugImage from '../assets/couple2.png'
import './home.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../supabaseClient'


function Home() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
const [message, setMessage] = useState('')
const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/thank-you', { state: { name } })
  }

  return (
    <div className="home-wrapper">
      <div className="container text-center">
        
        <h3 className="title fs-1 fade-in">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</h3>
        <p className="subtitle fw-bold fs-4 fade-in-delay">

​"حُبٌّ بَدَأ.. وَبِالحَلَالِ اسْتَمَر.. دَعَوْنَاكُمْ لِتَشْهَدُوا عَلَى مِيثَاقٍ غَلِيظٍ، سَعِيدٍ مُبَارَكٍ، مَحْفُوفٍ بِالمَوَدَّةِ وَالرَّحْمَةِ."

​"اجْعَلُوا لَنَا نَصِيباً مِنْ دُعَائِكُمْ، لَعَلَّ دَعْوَةً مِنْ قُلُوبِكُمْ تَفْتَحُ لَنَا أَبْوَابَ الْخَيْرِ."🤍</p>
        <h2 className='fade-in'> محمد <span style={{color:'red'}}>&</span>  ندى</h2>
        <h3 className='fade-in'>❤️ 6/4/2026 ❤️</h3>

        <img
          src={hugImage}
          alt="Couple Hug"
          className="couple-img zoom-in"
        />

        

        <input
  type="text"
  className="form-control mb-3 border-4"
  placeholder="اسمك (اختياري)"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>


       <textarea
  className="form-control mb-4 border-4"
  rows="4"
  placeholder="اكتب كلمتك… 🤍"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
/>


        <button
  className="btn w-100 pulse"
  disabled={loading || !message}
  onClick={async () => {
    setLoading(true)

    const { data, error } = await supabase.from('memories').insert([
      { name: name || null, message }
    ])

    if (error) {
      console.error('Error inserting memory:', error)
      alert('حدث خطأ: ' + error.message)
      setLoading(false)
      return
    }

    console.log('Memory saved successfully:', data)
    setLoading(false)
    navigate('/thank-you', { state: { name } })
  }}
>
  {loading ? 'جاري الحفظ…' : '💌 سيبلنا ذكرى'}
</button>



      </div>
    </div>
  )
}

export default Home
