import { nanoid } from "nanoid";
import { useCallback, useState } from "react";

export type NestedItemType = {
  id: string;
  isExpend: boolean;
  title: string;
  children: NestedItemType[];
};

const defaultData: NestedItemType[] = [
  {
    id: "nested-ID1",
    title: "Football",
    isExpend: true,
    children: [
      {
        id: "nested-ID1_1",
        title: "Premiere League",
        isExpend: false,
        children: [
          {
            id: "nested-ID_1-1_1",
            title: "Arsenal",
            isExpend: true,
            children: [],
          },
          {
            id: "nested-ID_1-1_2",
            title: "Manchester United",
            isExpend: true,
            children: [],
          },
        ],
      },
      {
        id: "nested-ID1_2",
        title: "Spain League",
        isExpend: true,
        children: [],
      },
    ],
  },
  {
    id: "nested-ID2",
    title: "Foods",
    isExpend: false,
    children: [
      {
        id: "nested-ID1-Foods",
        title: "Ei Kyar Kwayy",
        isExpend: true,
        children: [],
      },
    ],
  },
];

const makeNewContent = (mes: string, isExpend: boolean = false) => {
  return {
    id: nanoid(),
    title: mes,
    isExpend: isExpend,
    children: [],
  };
};

const recursiveToggle = (
  items: NestedItemType[],
  id: string
): NestedItemType[] => {
  return items.reduce((cur, item) => {
    // Start your code here

    return [...cur, item];
  }, [] as NestedItemType[]);
};

const recursiveNewContent = (
  items: NestedItemType[],
  id: string,
  newContent: string
): NestedItemType[] => {
  return items.reduce((cur, item) => {
    // Start your code here

    return [...cur, item];
  }, [] as NestedItemType[]);
};

const resursiveRemove = (
  items: NestedItemType[],
  id: string
): NestedItemType[] => {
  return items.reduce((cur, item) => {
    // Start your code here

    return [...cur, item];
  }, [] as NestedItemType[]);
};

const useNested = () => {
  const [data, setData] = useState<NestedItemType[]>(defaultData);

  // Fix this hook to ensure proper functionality.
  
  const onToggleExpend = useCallback((item: NestedItemType) => {
    setData((prev) => {
      return recursiveToggle(prev, item.id);
    });
  }, []);

  const onCreateNewChild = useCallback(
    (item: NestedItemType, content: string) => {
      setData((prev) => {
        return recursiveNewContent(prev, item.id, content);
      });
    },
    []
  );

  const onRemoveChild = useCallback((item: NestedItemType) => {
    setData((prev) => {
      return resursiveRemove(prev, item.id);
    });
  }, []);

  return {
    data,
    onToggleExpend,
    onCreateNewChild,
    onRemoveChild,
  };
};

export default useNested;
