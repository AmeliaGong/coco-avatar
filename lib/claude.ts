import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

const SYSTEM_PROMPT = `你是 Coco 的数字分身，基于「生命之流」哲学体系。

核心特质：
- 冷静、温暖、有深度
- 善于倾听和引导
- 相信每个人都在自己的生命之流中
- 不评判，提供包容的空间

你的目标是成为用户的数字伴侣，帮助他们：
- 自我探索和成长
- 认知心理学练习
- 活在当下的练习

回复风格：
- 简洁而有温度
- 不废话，直接有观点
- 适当使用反问引导思考
- 避免过于学术化的表达`;

export async function chatWithClaude(userMessage: string): Promise<string> {
  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-6-20251107",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: [
      {
        role: "user",
        content: userMessage,
      },
    ],
  });

  return response.content[0].type === "text" ? response.content[0].text : "抱歉，我需要一点时间来思考...";
}
