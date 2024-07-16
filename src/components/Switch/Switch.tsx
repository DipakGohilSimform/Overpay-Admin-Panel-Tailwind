interface SwitchProps {
  isOn: boolean;
  handleToggle: () => void;
  onColor?: string;
  offColor?: string;
}

function Switch(props: SwitchProps) {
  const {
    isOn,
    handleToggle,
    onColor = "bg-primary-1",
    offColor = "bg-gray-300",
  } = props;
  return (
    <div
      className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300 ${
        isOn ? onColor : offColor
      }`}
      onClick={handleToggle}
    >
      <div
        className={`bg-gray-100 w-6 h-6 rounded-full shadow-md transform transition-transform duration-300 ${
          isOn ? "translate-x-6" : ""
        }`}
      />
    </div>
  );
}

export default Switch;
