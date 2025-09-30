export interface Movie {
    id: number;
    poster_path: string;      // Частина URL для постера (для карточки)
    backdrop_path: string;    // Частина URL для фонового зображення (для модалки)
    title: string;            // Назва фільму
    overview: string;         // Короткий опис фільму
    release_date: string;     // Дата виходу
    vote_average: number;     // Рейтинг
}