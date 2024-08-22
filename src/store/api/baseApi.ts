import { emptyApi as api } from './emptyApi';
export const addTagTypes = ['user'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      login: build.mutation<LoginApiResponse, LoginApiArg>({
        query: (queryArg) => ({
          url: `/login`,
          method: 'POST',
          body: queryArg.loginRequestDto,
        }),
        invalidatesTags: ['user'],
      }),
      signup: build.mutation<SignupApiResponse, SignupApiArg>({
        query: (queryArg) => ({
          url: `/signup`,
          method: 'POST',
          body: queryArg.signupRequestDto,
        }),
        invalidatesTags: ['user'],
      }),
      getMe: build.query<GetMeApiResponse, GetMeApiArg>({
        query: () => ({ url: `/me` }),
        providesTags: ['user'],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as baseApi };
export type LoginApiResponse =
  /** status 200 successful operation */ LoginResponseDto;
export type LoginApiArg = {
  loginRequestDto: LoginRequestDto;
};
export type SignupApiResponse =
  /** status 200 successful operation */ SignupResponseDto;
export type SignupApiArg = {
  signupRequestDto: SignupRequestDto;
};
export type GetMeApiResponse = /** status 200 successful operation */ UserDto;
export type GetMeApiArg = void;
export type UserDto = {
  id: string;
  email: string;
};
export type LoginResponseDto = {
  user: UserDto;
  accessToken: string;
};
export type ApiErrorDto = {
  code: string;
  message: string;
};
export type LoginRequestDto = {
  email: string;
  password: string;
};
export type SignupResponseDto = {
  user: UserDto;
  accessToken: string;
};
export type SignupRequestDto = {
  email: string;
  password: string;
};
export const { useLoginMutation, useSignupMutation, useGetMeQuery } =
  injectedRtkApi;
