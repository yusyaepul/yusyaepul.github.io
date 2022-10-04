import { MDXRemoteSerializeResult } from 'next-mdx-remote';
export enum Form {
  Initial,
  Loading,
  Success,
  Error
}

export type FormState = {
  state: Form;
  message?: string;
};
