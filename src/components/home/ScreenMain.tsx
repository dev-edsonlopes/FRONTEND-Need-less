import { useState, useEffect } from "react";

import Cards from "./Cards";
import profile from "../../assets/cards-image/profile_users.svg"
import mechanic from "../../assets/cards-image/mechanic.svg";
import location from "../../assets/cards-image/location.svg";
import look_for_professional from "../../assets/cards-image/look _for_Professional.svg";
import evaluate_services from "../../assets/cards-image/evaluate_services.svg";
import payment from "../../assets/cards-image/payment.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/swiper-bundle.css";
import "swiper/modules";

interface CardData {
  imageUrl: string;
  altText: string;
  description: string;
  route: string;
}

export default function Main() {
  const [slidesPerView, setslidesPerView] = useState(4);

  const dataCards: CardData[] = [
    {
      imageUrl: profile,
      altText: "profile-user",
      description: "O usuário que necessita de um profissional",
      route: "#",
    },
    {
      imageUrl: mechanic,
      altText: "mechanic-male",
      description: "O profissional disposto a atender o usuário",
      route: "#",
    },
    {
      imageUrl: location,
      altText: "location",
      description: "Encontre um profissional próximo de você",
      route: "#",
    },
    {
      imageUrl: look_for_professional,
      altText: "look-professional",
      description: "Veja quais os serviços que o prestador oferece",
      route: "#",
    },
    {
      imageUrl: payment,
      altText: "payment",
      description: "negocie o valor do serviço",
      route: "#",
    },
    {
      imageUrl: evaluate_services,
      altText: "evaluate-services",
      description: "Avalie o trabalho e ajude outros usuários",
      route: "#",
    }
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 560) {
        setslidesPerView(0.9);
      } else if (window.innerWidth < 767) {
        setslidesPerView(1.5);
      } else if (window.innerWidth < 991) {
        setslidesPerView(2);
      } else if (window.innerWidth < 1280) {
        setslidesPerView(2.5);
      } else if (window.innerWidth < 1440) {
        setslidesPerView(3);
      } else if (window.innerWidth < 1880) {
        setslidesPerView(4);
      } else {
        setslidesPerView(5);
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main className="flex w-full flex-col items-center">

      <h1 className="my-24 font-bungee-shade text-7xl drop-shadow-none text-primary-950">
        CONHEÇA O <span className="font-bungee-inline">NEED LESS</span>
      </h1>

      <Swiper
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        spaceBetween={10}
        modules={[Pagination]}
        className="w-full pl-11"
      >
        {dataCards.map((card, index) => (
          <SwiperSlide key={index}>
            <Cards
              image_url={card.imageUrl}
              alt_text={card.altText}
              href={card.route}
            >
              {card.description}
            </Cards>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          .swiper-pagination {
            position: relative;
            bottom: 10px;
            display: flex;
            justify-content: center;
            margin-top: 50px;
          }

          .swiper-pagination-bullet {
            background-color: #D9D9D9;
          }


          .swiper-pagination-bullet-active {
            background-color: #000;
          }
        `}
      </style>
    </main>
  );
}
