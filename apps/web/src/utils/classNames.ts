import clsx from "clsx";
import type { ClassValue } from "clsx";

const getClassNameFromSource = (
  className: string,
  styles?: Readonly<Record<string, string>>
): string => {
  const classes = [];
  const classNames = className.split(" ");

  for (const currentClassName of classNames) {
    const sourceClassName = styles?.[currentClassName];

    if (sourceClassName) {
      classes.push(sourceClassName);
    } else {
      classes.push(currentClassName);
    }
  }

  return classes.join(" ");
};

const mapStylesToClassNames = (
  classProps: Readonly<Record<string, string>>
) => {
  const resolveClassName = (className: ClassValue): string => {
    if (typeof className === "string") {
      return getClassNameFromSource(className, classProps);
    } else if (Array.isArray(className)) {
      return className.map(resolveClassName).filter(Boolean).join(" ");
    } else if (typeof className === "object" && className !== null) {
      const resolvedClassNames: Array<string> = [];

      for (const key in className) {
        if (className[key]) {
          const resolvedKey = getClassNameFromSource(key, classProps);

          resolvedClassNames.push(resolvedKey);
        }
      }

      return resolvedClassNames.join(" ");
    }

    throw new Error(
      "Invalid type for className; expected string, array, or object."
    );
  };

  return (...classNames: Array<ClassValue>) => {
    const resolvedClasses: Array<string> = [];

    const filteredClassNames = classNames.filter(Boolean);

    if (filteredClassNames.length > 0) {
      if (Array.isArray(filteredClassNames)) {
        resolvedClasses.push(
          ...filteredClassNames.map(resolveClassName).flat()
        );
      } else {
        resolvedClasses.push(resolveClassName(filteredClassNames));
      }
    }

    return clsx(...resolvedClasses);
  };
};

export const classNames = mapStylesToClassNames;
