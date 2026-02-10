import clsx from "clsx";
import { ServiceCardProps } from "@/types/service";

export default function ServiceCard(props: ServiceCardProps) {
  const { title, titleStyle, descStyle, className } = props;

  return (
    <div
      className={clsx(
        "flex flex-col rounded-[20px] bg-black/20 p-7.5 text-white backdrop-blur-2xl",
        className
      )}
    >
      {title && <h3 className={clsx("font-semibold", titleStyle)}>{title}</h3>}

      {/* CARD TYPE HANDLER */}
      {props.type === "simple" && <p className={descStyle}>{props.description}</p>}

      {props.type === "list" && (
        <div className={props.sectionClassName}>
          {props.sections.map((section, idx) => (
            <div key={idx} className={props.listClassName}>
              <p className={clsx("mb-2 font-medium", props.headingClassName)}>{section.heading}</p>
              <ul className="list-disc space-y-1 pl-5 text-sm">
                {section.items.map((item, i) => (
                  <li key={i} className={clsx(props.itemsClassName)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
