export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Address = {
  __typename?: 'Address';
  house_no: Scalars['String'];
  street?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  postal_code: Scalars['Int'];
};

export type AddressInput = {
  house_no: Scalars['String'];
  street?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  postal_code: Scalars['Int'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Category = {
  __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  groceries: Array<Grocery>;
};

export type Grocery = {
  __typename?: 'Grocery';
  name: Scalars['String'];
  cost: Scalars['Float'];
  unit: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};

export type Item = {
  __typename?: 'Item';
  grocery: Grocery;
  quantity: Scalars['Int'];
};

export type ItemInput = {
  grocery_id: Scalars['Int'];
  quantity: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  logout?: Maybe<Scalars['String']>;
  updateCart: Order;
  placeOrder: Order;
  emptyCart: Scalars['String'];
};


export type MutationUpdateCartArgs = {
  cart: OrderInput;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['Int'];
  status: Scalars['String'];
  items?: Maybe<Array<Item>>;
  address?: Maybe<Address>;
};

export type OrderInput = {
  status: Scalars['String'];
  items?: Maybe<Array<ItemInput>>;
};

export type Query = {
  __typename?: 'Query';
  user: User;
  users?: Maybe<Array<User>>;
  userById?: Maybe<User>;
  grocery?: Maybe<Grocery>;
  groceries?: Maybe<Array<Grocery>>;
  groceryById?: Maybe<Grocery>;
  orders?: Maybe<Array<Order>>;
  orderById?: Maybe<Order>;
  categories?: Maybe<Array<Category>>;
  categoryById: Category;
};


export type QueryUserByIdArgs = {
  id: Scalars['Int'];
};


export type QueryGroceryArgs = {
  name: Scalars['String'];
};


export type QueryGroceryByIdArgs = {
  id: Scalars['Int'];
};


export type QueryOrderByIdArgs = {
  id: Scalars['Int'];
};


export type QueryCategoryByIdArgs = {
  id: Scalars['Int'];
};


export type User = {
  __typename?: 'User';
  id: Scalars['String'];
  username: Scalars['String'];
  email_id: Scalars['String'];
  orders?: Maybe<Array<Order>>;
  cart?: Maybe<Order>;
};
