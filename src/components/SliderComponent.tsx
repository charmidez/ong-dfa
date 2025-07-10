import { ButtonLink } from "./Buttons"

type SliderProps = {
    imgSrc: string,
    titre: string,
    description: string,
    linkToAction: string,
    textButton: string
}

export function SliderHomeComponent( { imgSrc, titre, description, linkToAction, textButton } : SliderProps ) {
    return (
        <>
              <div
                className=" bg-cover bg-center justify-center pt-20 lg:pt-30 lg:px-8 px-4 transition-all duration-700 ease-in-out"
                style={{
                  backgroundImage: `url('${imgSrc}')`,
                }}
              >
                <div className="flex flex-col items-start justify-center lg:pb-90 pb-44 pt-10">
                  <div className="text-white lg:w-96 bg-green-transparent-light lg:p-4 p-2 rounded-lg backdrop-blur-xs">
                    <h1 className="text-titre-page font-bold text-start">
                      {titre}
                    </h1>
                    <p className="text-texte-normal font-light text-start mt-2">
                      {description}
                    </p>
                    <div className="w-fit mt-4">
                      <ButtonLink texte={textButton} href={linkToAction} />
                    </div>
                  </div>
                </div>
              </div>
        </>
    )
}