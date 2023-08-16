
export interface BookCreateProps {
    onBookCreate: (newBook: { name: string; imageUrl: string; id: number }) => void;
}


export interface Book {
    name: string;
    id: number;
    imageUrl: string
}