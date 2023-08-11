import Accordion from "./Accordion";

const Question = () => {
  return (
    <div className="section">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-16">
          <h1 className="text-center text-primary2 text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight uppercase">
            Got Question?
          </h1>
          <div className="mx-auto">
            <img
              src="/question.png"
              className="object-cover w-[300px]"
            />
          </div>
        </div>
        <div>
          <Accordion />
        </div>
      </div>
    </div>
  );
};

export default Question;
