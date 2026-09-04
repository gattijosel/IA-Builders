export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

export type ApiResponse<T> = {
  data: T;
  error?: string;
};
