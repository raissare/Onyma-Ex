export type PartialRequireOne<
  T,
  K extends (string | number | symbol) & keyof T
> = Partial<Omit<T, K>> & Pick<T, K>;
