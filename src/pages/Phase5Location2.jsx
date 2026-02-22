import { MapPin } from 'lucide-react'

export default function Phase5Location2() {
    return (
        <div className="container" style={{ maxWidth: '700px', margin: '0 auto', padding: '60px 20px' }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                <MapPin size={50} style={{ color: '#FFD700', marginBottom: '15px' }} />
                <h1 style={{ fontFamily: 'Orbitron, monospace', fontSize: '1.6rem', marginBottom: '10px' }}>
                    Find the Location
                </h1>
                <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
                    Solve the riddle below to discover where to go next.
                </p>
            </div>

            <div
                className="card"
                style={{
                    padding: '35px 40px',
                    background: 'rgba(139, 92, 246, 0.08)',
                    border: '2px solid rgba(139, 92, 246, 0.35)',
                    borderRadius: '16px',
                    lineHeight: '2',
                    fontSize: '1.05rem',
                    color: '#e2e8f0',
                    fontStyle: 'italic',
                }}
            >
                {/* Verse 1 */}
                <p style={{ margin: '0 0 28px 0' }}>
                    I am the mind behind your mission,<br />
                    &nbsp;Not a person, yet I lead.<br />
                    &nbsp;I{' '}
                    <span style={{ textDecoration: 'underline', fontWeight: 700, fontStyle: 'normal' }}>stand tall</span>
                    , I wear the{' '}
                    <span style={{ textDecoration: 'underline', fontWeight: 700, fontStyle: 'normal' }}>organizing team's mark</span>
                    ,<br />
                    &nbsp;Where ideas meet their seed.
                </p>

                {/* Verse 2 */}
                <p style={{ margin: 0 }}>
                    Find me where the{' '}
                    <span style={{ textDecoration: 'underline', fontWeight: 700, fontStyle: 'normal' }}>second rise</span>{' '}
                    begins,<br />
                    &nbsp;On the{' '}
                    <span style={{ textDecoration: 'underline', fontWeight: 700, fontStyle: 'normal' }}>floor that touches ground</span>
                    .<br />
                    &nbsp;Capture proof that you were here —<br />
                    &nbsp;And your victory is found.
                </p>
            </div>

            <p style={{
                textAlign: 'center',
                marginTop: '30px',
                color: '#FFD700',
                fontSize: '1rem',
                fontStyle: 'italic'
            }}>
                Find the location, capture proof, and claim your victory!
            </p>
        </div>
    )
}
