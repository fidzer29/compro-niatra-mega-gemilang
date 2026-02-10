import { RefObject } from "react";

export type ServiceCardItem = CardSimple | CardList;

export interface ServiceContent {
  ref?: RefObject<HTMLDivElement | null>;
  cardStyle?: string;
  cardItems: ServiceCardItem[];
}

type CardBase = {
  className?: string;
  titleStyle?: string;
  descStyle?: string;
};

export type CardSimple = CardBase & {
  type: "simple";
  title: string;
  description: string;
};

type CardListSection = {
  heading: string;
  items: string[];
};

export type CardList = CardBase & {
  type: "list";
  title?: string;
  sections: CardListSection[];
  sectionClassName?: string;
  listClassName?: string;
  headingClassName?: string;
  itemsClassName?: string;
};

export type ServiceCardProps = CardSimple | CardList;
