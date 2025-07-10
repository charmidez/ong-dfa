"use client";

//import { ButtonLink } from "@/components/Buttons";
import { CardDomaine, Cardinfo } from "@/components/Card";
import { SliderHomeComponent } from "@/components/SliderComponent";
import { TitreSection } from "@/components/Titre";
import { domaines, motDeBienvenue, sliderData } from "@/data/acceuilData";
import { actualitesData } from "@/data/actualiteData";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from "lucide-react"; // icônes (si tu utilises lucide)

//import React, { useState, useEffect } from 'react';
//import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % sliderData.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  };

  const goToSlide = (index : number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Variants pour les animations - sans opacity pour éviter le blanc
  const slideVariants = {
    enter: (direction : number) => ({
      x: direction > 0 ? 1000 : -1000,
    }),
    center: {
      zIndex: 1,
      x: 0,
    },
    exit: (direction : number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
    })
  };

  return (
    <div className="relative w-full h-[400px] lg:h-[900px] md:h-[600px] overflow-hidden">
      {/* Slides avec AnimatePresence - mode sync pour chevauchement */}
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            duration: 0.6
          }}
          className="absolute inset-0 w-full h-full"
        >
          <SliderHomeComponent
            titre={sliderData[currentIndex].titre}
            description={sliderData[currentIndex].description}
            imgSrc={sliderData[currentIndex].imgSrc}
            linkToAction={sliderData[currentIndex].linkToAction}
            textButton={sliderData[currentIndex].textButton}
          />
        </motion.div>
      </AnimatePresence>

      {/* Flèches */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft size={24} />
      </motion.button>

      <motion.button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full"
        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.7)" }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight size={24} />
      </motion.button>

      {/* Points de pagination */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex space-x-2">
        {sliderData.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            animate={{ 
              scale: index === currentIndex ? 1.25 : 1,
              backgroundColor: index === currentIndex ? "#ffffff" : "rgba(255,255,255,0.5)"
            }}
            transition={{ duration: 0.2 }}
          />
        ))}
      </div>
    </div>
  );
}

/*
export function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === sliderData.length - 1 ? 0 : prev + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {sliderData.map((slide, index) => (
        <SliderHomeComponent
          key={index}
          titre={slide.titre}
          description={slide.description}
          imgSrc={slide.imgSrc}
          linkToAction={slide.linkToAction}
          textButton={slide.textButton}
        />
      ))}
    </>
  );
}

*/

export function Actualites() {
  {
    /* Actualité */
  }
  return (
    <div className="flex flex-col py-16 px-4 lg:px-8 bg-gray-100">
      <TitreSection titre="Actualités" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Données et liste à récupérer depuis la base de données avec le composant carte*/}
        {[...actualitesData]
          .sort(
            (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
          )
          .map((article) => (
            <Cardinfo
              key={article.slug}
              titreCard={article.titre}
              descCard={article.resume}
              image={article.image}
              linkInfo={`/actualites/${article.slug}`}
            />
          ))}
      </div>
    </div>
  );
}

export function MotDuPresident() {
  {
    /* Mot Du Président */
  }
  return (
    <section className="bg-vert-clair py-16 px-4 lg:px-8">
      <TitreSection titre={motDeBienvenue.titre} className="text-white" />

      <div className=" rounded-lg p-6 lg:p-10 flex flex-col lg:flex-row gap-6 lg:gap-12 items-start bg-white">
        <div className="flex-shrink-0">
          <Image
            src="/images/portrait.webp"
            alt="Le dirigeant de DFA ONG"
            width={300}
            height={400}
            className="rounded-lg object-cover"
          />
        </div>

        <div className="text-gray-800 space-y-4">
          <p>
            <strong>{motDeBienvenue.titreText}</strong>
          </p>
          {motDeBienvenue.description.map((paragraph, index) => (
            <p key={index} className="text-justify">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DomainesIntervention() {
  {
    /* Domaines d'intervention */
  }
  return (
    <section className="py-16 px-4 lg:px-8">
      <TitreSection titre="Nos Domaines d'intervention" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {domaines.map((domaine, index) => (
          <CardDomaine
            key={index}
            titre={domaine.titre}
            bgColor={domaine.bgColor}
            icon={domaine.icon}
          />
        ))}
      </div>
    </section>
  );
}
