declare const CreateChatCompletionV1ChatCompletionsPost: {
    readonly body: {
        readonly properties: {
            readonly model: {
                readonly type: "string";
                readonly title: "Model";
                readonly default: "nvidia/llama-3.1-nemotron-70b-instruct";
            };
            readonly max_tokens: {
                readonly type: "integer";
                readonly minimum: 1;
                readonly title: "Max Tokens";
                readonly description: "The maximum number of tokens to generate in any given call. Note that the model is not aware of this value, and generation will simply stop at the number of tokens specified.";
                readonly default: 1024;
            };
            readonly stream: {
                readonly type: "boolean";
                readonly title: "Stream";
                readonly description: "If set, partial message deltas will be sent. Tokens will be sent as data-only server-sent events (SSE) as they become available (JSON responses are prefixed by `data: `), with the stream terminated by a `data: [DONE]` message.";
                readonly default: false;
            };
            readonly temperature: {
                readonly type: "number";
                readonly maximum: 1;
                readonly minimum: 0;
                readonly title: "Temperature";
                readonly description: "The sampling temperature to use for text generation. The higher the temperature value is, the less deterministic the output text will be. It is not recommended to modify both temperature and top_p in the same call.";
                readonly default: 0.5;
            };
            readonly top_p: {
                readonly type: "number";
                readonly maximum: 1;
                readonly exclusiveMinimum: 0;
                readonly title: "Top P";
                readonly description: "The top-p sampling mass used for text generation. The top-p value determines the probability mass that is sampled at sampling time. For example, if top_p = 0.2, only the most likely tokens (summing to 0.2 cumulative probability) will be sampled. It is not recommended to modify both temperature and top_p in the same call.";
                readonly default: 1;
            };
            readonly stop: {
                readonly anyOf: readonly [{
                    readonly items: {
                        readonly type: "string";
                    };
                    readonly type: "array";
                }, {
                    readonly type: "string";
                }, {
                    readonly type: "null";
                }];
                readonly title: "Stop";
                readonly description: "A string or a list of strings where the API will stop generating further tokens. The returned text will not contain the stop sequence.";
            };
            readonly frequency_penalty: {
                readonly type: "number";
                readonly maximum: 2;
                readonly minimum: -2;
                readonly default: 0;
                readonly title: "Frequency Penalty";
                readonly description: "Indicates how much to penalize new tokens based on their existing frequency in the text so far, decreasing model likelihood to repeat the same line verbatim.";
            };
            readonly presence_penalty: {
                readonly type: "number";
                readonly maximum: 2;
                readonly minimum: -2;
                readonly default: 0;
                readonly title: "Presence Penalty";
                readonly description: "Positive values penalize new tokens based on whether they appear in the text so far, increasing model likelihood to talk about new topics.";
            };
            readonly seed: {
                readonly type: "integer";
                readonly maximum: 18446744073709552000;
                readonly minimum: 0;
                readonly title: "Seed";
                readonly description: "The model generates random results. Changing the input seed alone will produce a different response with similar characteristics. It is possible to reproduce results by fixing the input seed (assuming all other hyperparameters are also fixed).";
                readonly default: 0;
            };
            readonly messages: {
                readonly anyOf: readonly [{
                    readonly items: {
                        readonly additionalProperties: {
                            readonly type: "string";
                        };
                        readonly type: "object";
                    };
                    readonly type: "array";
                }];
                readonly title: "Messages";
                readonly description: "A list of messages comprising the conversation so far.";
            };
        };
        readonly additionalProperties: false;
        readonly type: "object";
        readonly required: readonly ["messages"];
        readonly title: "ChatCompletionRequest";
        readonly description: "OpenAI ChatCompletionRequest";
        readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly title: "Id";
                    readonly description: "A unique identifier for the completion.";
                };
                readonly object: {
                    readonly type: "string";
                    readonly title: "Object";
                    readonly default: "chat.completion";
                };
                readonly created: {
                    readonly type: "integer";
                    readonly title: "Created";
                };
                readonly model: {
                    readonly type: "string";
                    readonly title: "Model";
                    readonly examples: readonly ["nvidia/llama-3.1-nemotron-70b-instruct"];
                };
                readonly choices: {
                    readonly items: {
                        readonly properties: {
                            readonly index: {
                                readonly type: "integer";
                                readonly title: "Index";
                                readonly description: "The index of the choice in the list of choices (always 0).";
                            };
                            readonly message: {
                                readonly description: "A chat completion message generated by the model.";
                                readonly properties: {
                                    readonly role: {
                                        readonly type: "string";
                                        readonly title: "Role";
                                        readonly description: "The role of the message author.";
                                    };
                                    readonly content: {
                                        readonly type: "string";
                                        readonly title: "Content";
                                        readonly description: "The contents of the message.";
                                    };
                                };
                                readonly type: "object";
                                readonly required: readonly ["role", "content"];
                                readonly title: "ChatMessage";
                            };
                            readonly finish_reason: {
                                readonly anyOf: readonly [{
                                    readonly type: "string";
                                    readonly enum: readonly ["stop", "length"];
                                    readonly description: "`stop` `length`";
                                }, {
                                    readonly type: "null";
                                }];
                                readonly title: "Finish Reason";
                                readonly description: "The reason the model stopped generating tokens. This will be `stop` if the model hit a natural stop point or a provided stop sequence, or `length` if the maximum number of tokens specified in the request was reached. Will be `null` if the model has not finished";
                            };
                        };
                        readonly type: "object";
                        readonly required: readonly ["index", "message"];
                        readonly title: "ChatCompletionResponseChoice";
                    };
                    readonly type: "array";
                    readonly title: "Choices";
                    readonly description: "The list of completion choices the model generated for the input prompt.";
                };
                readonly usage: {
                    readonly description: "Usage statistics for the completion request.";
                    readonly properties: {
                        readonly prompt_tokens: {
                            readonly type: "integer";
                            readonly title: "Prompt Tokens";
                            readonly description: "Number of tokens in the prompt.";
                            readonly default: 0;
                        };
                        readonly total_tokens: {
                            readonly type: "integer";
                            readonly title: "Total Tokens";
                            readonly description: "Total number of tokens used in the request (prompt + completion).";
                            readonly default: 0;
                        };
                        readonly completion_tokens: {
                            readonly anyOf: readonly [{
                                readonly type: "integer";
                            }, {
                                readonly type: "null";
                            }];
                            readonly title: "Completion Tokens";
                            readonly description: "Number of tokens in the generated completion.";
                            readonly default: 0;
                        };
                    };
                    readonly type: "object";
                    readonly title: "UsageInfo";
                };
            };
            readonly type: "object";
            readonly required: readonly ["model", "choices", "usage"];
            readonly title: "ChatCompletionResponse";
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "402": {
            readonly properties: {
                readonly detail: {
                    readonly type: "string";
                    readonly description: "Contains specific information related to the error and why it occurred.";
                    readonly examples: readonly ["You have reached your limit of credits."];
                };
            };
            readonly type: "object";
            readonly title: "PaymentRequiredError";
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
        readonly "422": {
            readonly properties: {
                readonly detail: {
                    readonly items: {
                        readonly properties: {
                            readonly loc: {
                                readonly items: {
                                    readonly anyOf: readonly [{
                                        readonly type: "string";
                                    }, {
                                        readonly type: "integer";
                                    }];
                                };
                                readonly type: "array";
                                readonly title: "Location";
                            };
                            readonly msg: {
                                readonly type: "string";
                                readonly title: "Message";
                                readonly description: "The error message.";
                            };
                            readonly type: {
                                readonly type: "string";
                                readonly title: "Error Type";
                                readonly description: "Error type";
                            };
                        };
                        readonly type: "object";
                        readonly required: readonly ["loc", "msg", "type"];
                        readonly title: "ValidationError";
                    };
                    readonly type: "array";
                    readonly title: "Detail";
                    readonly description: "Detailed information about the error.";
                };
            };
            readonly type: "object";
            readonly title: "HTTPValidationError";
            readonly $schema: "https://json-schema.org/draft/2020-12/schema#";
        };
    };
};
export { CreateChatCompletionV1ChatCompletionsPost };
