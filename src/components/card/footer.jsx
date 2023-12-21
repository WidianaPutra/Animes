"use client";

export default function FooterList({ Page, SetPage }) {
  const scrollTop = () => {
    scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  function Min() {
    if (Page === 1) return;
    SetPage((e) => e - 1);
    scrollTop();
  }

  function Plus() {
    SetPage((e) => e + 1);
    scrollTop();
  }

  return (
    <div className="h-10 w-ful flex justify-center items-center gap-2">
      <p className="text-white hover:underline text-xl" onClick={Min}>
        Prev
      </p>
      <h1 className="text-white text-xl">{Page}</h1>
      <p className="text-white hover:underline text-xl" onClick={Plus}>
        Next
      </p>
    </div>
  );
}
