import axios from 'axios';

interface ICall {
  <RES>(call: string, data: any, opts?: { token?: string }): Promise<RES>;
}

const handleCall: ICall = async (call, data, opts) => {
  const tokenOverride = opts?.token;
  const tokenFromStorage =
    typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
  const tokenFromConfig = process.env.STARLEDGER_AUTH_TOKEN!;
  const token = tokenOverride
    ? tokenOverride
    : tokenFromStorage
    ? tokenFromStorage
    : tokenFromConfig;

  try {
    const request = await axios({
      method: 'POST',
      headers:
        opts?.token || token
          ? {
              Authorization: `Bearer ${token}`,
            }
          : undefined,
      url: `${process.env.STARLEDGER_API_URL}/${call}`,
      data,
    });

    return request.data;
  } catch (error) {
    if ((error as any)?.response?.data?.message) {
      throw new Error((error as any)?.response?.data?.message);
    }
    throw error;
  }
};

const createNewsArticle = (
  data?: {
    slug: string;
    image?: string;
    title: string;
    content?: string;
    overview?: string;
    publishedAt?: string;
    status?: 'draft' | 'published';
    categoryIds?: string[];
  },
  opts?: { token?: string },
) =>
  handleCall<{
    id: string;
    slug: string;
    image: string;
    title: string;
    content: string;
    overview: string;
    publishedAt: string;
    status: string;
    categoryIds: string[];
  }>('createNewsArticle', data, opts);

const createNewsCategory = (
  data?: { slug: string; title: string },
  opts?: { token?: string },
) =>
  handleCall<{
    id: string;
    slug: string;
    title: string;
    status: string;
    authorUserId: string;
  }>('createNewsCategory', data, opts);

const createErrorLog = (
  data?: { code: string; message: string; notes: string },
  opts?: { token?: string },
) => handleCall<{}>('createErrorLog', data, opts);

const deleteNewsArticle = (data?: { id: string }, opts?: { token?: string }) =>
  handleCall<{}>('deleteNewsArticle', data, opts);

const getArticle = (data?: { slug: string }, opts?: { token?: string }) =>
  handleCall<{
    id: string;
    slug: string;
    image: string;
    title: string;
    overview: string;
    content: string;
    publishedAt: string;
  }>('getArticle', data, opts);

const getDso = (data?: { identifier: string }, opts?: { token?: string }) =>
  handleCall<{
    id: string;
    identifier: string;
    hip: number;
    name: string;
    constellation: string;
    overview: string;
    rightAscension: string;
    declination: string;
    type: string;
    facts: string[];
  }>('getDso', data, opts);

const getNft = (data?: { hip: number }, opts?: { token?: string }) =>
  handleCall<{ tokenId: number }>('getNft', data, opts);

const getProfile = (data?: {}, opts?: { token?: string }) =>
  handleCall<{ email: string; discord: string; telegram: string }>(
    'getProfile',
    data,
    opts,
  );

const getSetting = (data?: { key: string }, opts?: { token?: string }) =>
  handleCall<{ key: string; value: string }>('getSetting', data, opts);

const listNewsArticles = (
  data?: { filter?: { categoryIds?: string[] } },
  opts?: { token?: string },
) =>
  handleCall<{
    results: {
      id: string;
      slug: string;
      image: string;
      title: string;
      overview: string;
      publishedAt: string;
    }[];
  }>('listNewsArticles', data, opts);

const listNewsCategories = (data?: {}, opts?: { token?: string }) =>
  handleCall<{
    results: {
      id: string;
      slug: string;
      title: string;
      status: string;
      authorUserId: string;
    }[];
  }>('listNewsCategories', data, opts);

const listNfts = (data?: {}, opts?: { token?: string }) =>
  handleCall<{
    results: {
      hip: number;
      constellation: string;
      coordinates: string;
      ranking: number;
      rarity: string;
      name: string;
      tokenId: number;
    }[];
  }>('listNfts', data, opts);

const listOwnedTokens = (data?: {}, opts?: { token?: string }) =>
  handleCall<{
    results: {
      hip: number;
      constellation: string;
      coordinates: string;
      ranking: number;
      rarity: string;
      name: string;
      tokenId: number;
    }[];
  }>('listOwnedTokens', data, opts);

const loginWithEmail = (
  data?: { email: string; password: string },
  opts?: { token?: string },
) =>
  handleCall<{ expiresIn: number; token: string }>(
    'loginWithEmail',
    data,
    opts,
  );

const loginWithWallet = (
  data?: { address: string; signature: string },
  opts?: { token?: string },
) =>
  handleCall<{ expiresIn: number; token: string }>(
    'loginWithWallet',
    data,
    opts,
  );

const registerWithEmail = (
  data?: { email: string; password: string },
  opts?: { token?: string },
) => handleCall<{ id: string }>('registerWithEmail', data, opts);

const search = (data?: { query: string }, opts?: { token?: string }) =>
  handleCall<{ results: { hip: number; name: string }[] }>(
    'search',
    data,
    opts,
  );

const updateArticle = (
  data?: {
    id: string;
    slug: string;
    image: string;
    title: string;
    content?: string;
    overview?: string;
    publishedAt?: string;
    status: 'draft' | 'published';
  },
  opts?: { token?: string },
) => handleCall<{}>('updateArticle', data, opts);

const updateDso = (
  data?: {
    identifier: string;
    overview: string;
    description: string;
    bvColor: string;
    stellarClassification: string;
  },
  opts?: { token?: string },
) => handleCall<{}>('updateDso', data, opts);

const updateProfile = (
  data?: { email: string; discord: string; telegram: string },
  opts?: { token?: string },
) => handleCall<{}>('updateProfile', data, opts);

export const client = {
  createNewsArticle,
  createNewsCategory,
  createErrorLog,
  deleteNewsArticle,
  getArticle,
  getDso,
  getNft,
  getProfile,
  getSetting,
  listNewsArticles,
  listNewsCategories,
  listNfts,
  listOwnedTokens,
  loginWithEmail,
  loginWithWallet,
  registerWithEmail,
  search,
  updateArticle,
  updateDso,
  updateProfile,
};
