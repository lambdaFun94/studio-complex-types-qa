export interface BigButtonProps {
  title?: string;
  myComplex?: ComplexProp
}

export interface ComplexProp {
  field1: string;
  field2: string;
}

export const initialProps: BigButtonProps = {
  title: "Button Title",
  myComplex: {
    field1: "field1",
    field2: "field2"
  }
}



const BigButton = ({ title, myComplex }: BigButtonProps) => {
  return (
    <div className="mt-10">
      <button className="flex w-full items-center justify-center rounded-md border border-transparent bg-sky-200 py-3 px-8 text-base font-medium text-white">
        {title} {myComplex?.field1} {myComplex?.field2}
      </button>
    </div>
  );
};

export default BigButton;
