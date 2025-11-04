export const ColoredBorder = () => {
  return (
    <div>
      <section className="flex h-3">
        <div className="bg-[#149ECC] flex-1"></div>
        <div className="bg-[#4FB29E] flex-1"></div>
        <div className="bg-[#C7D886] flex-1"></div>
        <div className="bg-[#003683] flex-1"></div>
      </section>
    </div>
  );
}

type BlueColoredBorderProps = {
  pst: string;
};

export const BlueColoredBorder = ({pst}:BlueColoredBorderProps) => {
  return (
    <div>
      <section className={`flex h-3 sm:h-4 z-50 ${pst}`}>
        <div className="bg-[#003683] flex-1"></div>
      </section>
    </div>
  );
}
