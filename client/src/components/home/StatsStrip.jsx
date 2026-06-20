import { STATS } from '../../utils/constants';

export default function StatsStrip() {
  return (
    <div style={{
      background: 'var(--charcoal)',
      padding: '2rem 5%',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '1.5rem',
    }}>
      {STATS.map((stat, index) => (
        <div key={index} style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '2.4rem',
            color: 'var(--dusty-rose)',
            fontWeight: 300,
          }}>
            {stat.value}
          </div>
          <div style={{
            fontSize: '0.78rem',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            marginTop: '0.2rem',
          }}>
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}
