import { journalPosts } from "../values/journal";

export interface JournalCategoryClientProps {
    category: keyof typeof journalPosts;
  }
  