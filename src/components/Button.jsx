export default function Button(props) {
  const { text, func } = props;
  return (
    <button
      onClick={func}
      className="px-8 py-4 mx-auto rounded-md border-[2px] border-violet-300 border-solid bg-slate-950 violetShadow duration-300 hover:drop-shadow-glow"
    >
      <p>{text}</p>
    </button>
  );
}
