import Button from "./Button";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-9 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <p>WELCOME! IT'S TIME TO</p>
      <div className="flex flex-col gap-4">
        <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          DESIGN <span className="text-violet-500 drop-shadow-glow">YOUR</span>{" "}
          WORKOUT
        </h1>
      </div>
      <p className="text=sm md:text-base font-light">
        Use the following menus to choose{" "}
        <span className="text-violet-400 font-medium">your own</span> workout
        style. Choose the{" "}
        <span className="text-violet-400 font-medium">muscle groups</span> you
        want to hit, and the{" "}
        <span className="text-violet-400 font-medium">
          goals you want to achieve
        </span>{" "}
        and we'll do the rest!
      </p>
      <Button
        func={() => {
          window.location.href = "#generate";
        }}
        text={"Accept & Begin"}
      />
    </div>
  );
}
