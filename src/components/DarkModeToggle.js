export default function DarkModeToggle() {
  return (
    <button onClick={() => document.body.classList.toggle("dark")}>
      🌙
    </button>
  );
}