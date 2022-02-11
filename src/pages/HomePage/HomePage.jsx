import Girl from '../../components/Video/lofi-lofigirl.mp4';
import './HomePage.css'

export default function HomePage() {
    
  
    return (
        <main>
            <video autoPlay loop muted
            style={{
                position: 'absolute',
                width: '100%',
                left: '50%',
                top: '50%',
                height: '100%',
                objectFit: 'cover',
                transform: 'translate(-50%, -50%)',
                zIndex: '-1'
            }}
            >
                <source src={Girl} type='video/mp4' />
            </video>
            <div className='Home'>Study</div>
            <div className='Home'>Vibes</div>
        </main>
    );
}
