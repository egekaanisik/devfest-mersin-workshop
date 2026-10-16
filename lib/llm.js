import { GENERAL, DEVFEST, WEB_AI, MERSIN } from "@/lib/prompts";

export async function initLlm() {
  return {
    async generate(prompt) {
      return GENERAL + "\n\n" + prompt;
    },
  };
}
