const Histories = ({ histories, moveTo, CurrentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {histories.map((_, index) => (
          <li key={index}>
            <button
              type="button"
              className={`btn-move ${CurrentMove === index ? 'active' : ''}`}
              onClick={() => moveTo(index)}
            >
              {index === 0 ? 'New Game' : `Go to move #${index}`}{' '}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Histories;
