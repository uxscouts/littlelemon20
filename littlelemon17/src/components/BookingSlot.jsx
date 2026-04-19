// BookingSlot.jsx
export const BookingSlot = ({ id, time, isAvailable, onSelect, isSelected }) => {
  const baseClasses = "p-3 border rounded-md text-center transition-all cursor-pointer";
  
  // Dynamic styles based on status
  const statusClasses = !isAvailable 
    ? "bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200" 
    : isSelected 
      ? "bg-blue-600 text-white border-blue-600 shadow-md" 
      : "bg-white text-gray-700 border-gray-300 hover:border-blue-500 hover:bg-blue-50";

  return (
    <button 
      disabled={!isAvailable}
      onClick={() => onSelect(id)}
      className={`${baseClasses} ${statusClasses}`}
    >
      <span className="font-medium">{time}</span>
      <p className="text-xs mt-1">{isAvailable ? 'Available' : 'Booked'}</p>
    </button>
  );
};
