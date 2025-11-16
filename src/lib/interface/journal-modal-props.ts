import { JournalPost } from "./journal-post-props";

export interface JournalModalProps {
    open: boolean;
    posts: JournalPost[];
    currentIndex: number;
    onClose: () => void;
}