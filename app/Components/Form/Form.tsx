import React from "react";
import ContactForm from "./ContactForm";
import Image from "next/image";

type FormPropsType = {
  lang: any;
};

const Form = ({ lang }: FormPropsType) => {
  return (
    <section
      className="py-8 lg:py-16 "
      id="form"
      style={{
        backgroundColor: "white",
      }}
    >
      <div className="m-auto w-full lg:w-8/12 flex flex-col lg:flex-row justify-between lg:items-center gap-6  basis-1/2">
        <div className="basis-full lg:basis-1/2">
          <div className="flex justify-center items-center">
            <Image
              src={"https://i.imgur.com/z2TvdgM.png"}
              alt="Logo"
              width={400}
              height={200}
              className="rounded-full shadow-xl"
            />
          </div>

          <h2 className="text-center my-8 text-4xl lg:text-6xl uppercase font-semibold text-custom">
            {lang.home.form.title}
          </h2>
          <p className="text-center text-2xl lg:text-4xl font-medium text-custom">
          {lang.home.form.desc}

          </p>
        </div>
        <div className="basis-full lg:basis-1/2 flex justify-center">
          <ContactForm lang={lang} />
        </div>
      </div>
    </section>
  );
};

export default Form;
