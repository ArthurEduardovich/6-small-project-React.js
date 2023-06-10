export default function CardColor({color}) {
  const cardStyle = { backgroundColor: color };

  return (
    <div>
      <div style={cardStyle} className="card"></div>
      <div>
        <h6>{color}</h6>
      </div>
    </div>
  );
}
