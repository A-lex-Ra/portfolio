export type Language = 'en' | 'ru';

export type TranslationKey =
    | 'name'
    | 'role'
    | 'about'
    | 'projects'
    | 'contact'
    | 'viewProject'
    | 'loading';

export const translations: Record<Language, Record<TranslationKey, string>> = {
    en: {
        name: 'Alex Ra', // Placeholder, user can update
        role: 'Full Stack Developer',
        about: 'Passionate about building scalable web applications and intuitive user experiences.',
        projects: 'Projects',
        contact: 'Contact',
        viewProject: 'View Project',
        loading: 'Loading...',
    },
    ru: {
        name: 'Alex Ra', // Placeholder
        role: 'Full Stack Разработчик',
        about: 'Увлечен созданием масштабируемых веб-приложений и интуитивно понятных интерфейсов.',
        projects: 'Проекты',
        contact: 'Контакты',
        viewProject: 'Подробнее',
        loading: 'Загрузка...',
    },
};
