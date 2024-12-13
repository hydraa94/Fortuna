import type { FromSchema } from 'json-schema-to-ts';
import * as schemas from './schemas';
export type CreateChatCompletionV1ChatCompletionsPostBodyParam = FromSchema<typeof schemas.CreateChatCompletionV1ChatCompletionsPost.body>;
export type CreateChatCompletionV1ChatCompletionsPostResponse200 = FromSchema<typeof schemas.CreateChatCompletionV1ChatCompletionsPost.response['200']>;
export type CreateChatCompletionV1ChatCompletionsPostResponse402 = FromSchema<typeof schemas.CreateChatCompletionV1ChatCompletionsPost.response['402']>;
export type CreateChatCompletionV1ChatCompletionsPostResponse422 = FromSchema<typeof schemas.CreateChatCompletionV1ChatCompletionsPost.response['422']>;
