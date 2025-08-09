import { en } from './en'
export const ru = {
  navigation: {
    home: 'Главная',
    about: 'О нас',
    contact: 'Контакты',
    sale: 'Недвижимость на продажу',
    rent: 'Недвижимость в аренду',
    apartment: 'Квартира',
    villa: 'Вилла',
    house: 'Дом',
    land: 'Земля',
    office: 'Офис',
    commercial: 'Коммерческая'
  },
  home: {
    hero: {
      title: 'Найдите недвижимость мечты в Дананге',
      subtitle: 'Откройте для себя роскошные виллы, современные квартиры и лучшие коммерческие помещения',
      search: {
        title: 'Поиск недвижимости',
        propertyType: 'Тип недвижимости',
        location: 'Район',
        button: 'Найти',
        placeholder: 'Искать по району или типу'
      }
    },
    featured: {
      title: 'Избранные объекты',
      subtitle: 'Подборка премиальной недвижимости',
      viewAll: 'Смотреть все'
    },
    categories: {
      title: 'Выбор по типу недвижимости',
      subtitle: 'Изучите наш каталог, чтобы найти идеальный вариант',
      apartment: { title: 'Квартира', description: 'Современные пространства с видом', count: '234 объекта' },
      villa: { title: 'Вилла', description: 'Роскошные дома с бассейном', count: '234 объекта' },
      house: { title: 'Дом', description: 'Идеально для семьи', count: '234 объекта' },
      office: { title: 'Офис', description: 'Профессиональные рабочие места', count: '234 объекта' },
      commercial: { title: 'Коммерческая', description: 'Топ‑локации для бизнеса', count: '234 объекта' }
    },
    howWeHelp: {
      title: 'Как мы помогаем',
      subtitle: 'Ваш надежный партнер на рынке недвижимости',
      steps: {
        search: { title: 'Поиск объектов', description: 'Просматривайте отобранные предложения' },
        tour: { title: 'Записаться на показ', description: 'Посетите объекты с нашим агентом' },
        purchase: { title: 'Покупка', description: 'Поддержка на всех этапах сделки' }
      }
    }
  },
  sale: {
    title: 'Недвижимость на продажу',
    subtitle: 'Найдите недвижимость мечты в Дананге',
    filters: {
      title: 'Фильтры',
      propertyType: 'Тип недвижимости',
      location: 'Район',
      allProperties: 'Все объекты',
      allLocations: 'Все районы'
    },
    noResults: 'По вашему запросу ничего не найдено.',
    propertyDetails: {
      bedrooms: 'Спальни',
      bathrooms: 'Санузлы',
      area: 'м²',
      viewDetails: 'Подробнее',
      addToFavorites: 'В избранное',
      removeFromFavorites: 'Убрать из избранного'
    }
  },
  rent: {
    title: 'Недвижимость в аренду',
    subtitle: 'Подберите идеальное жилье в Дананге',
    filters: {
      title: 'Фильтры',
      propertyType: 'Тип недвижимости',
      location: 'Район',
      allProperties: 'Все объекты',
      allLocations: 'Все районы'
    },
    noResults: 'По вашему запросу ничего не найдено.',
    propertyDetails: {
      bedrooms: 'Спальни',
      bathrooms: 'Санузлы',
      area: 'м²',
      viewDetails: 'Подробнее',
      addToFavorites: 'В избранное',
      removeFromFavorites: 'Убрать из избранного',
      pricePerMonth: 'в месяц'
    }
  },
  about: {
    title: 'О нас',
    subtitle: 'Ваш надежный партнер по недвижимости в Дананге',
    intro: {
      title: 'Кто мы',
      description: 'Мы ведущее агентство недвижимости в Дананге. Специализируемся на премиальной жилой и коммерческой недвижимости и помогаем клиентам находить идеальные объекты.'
    },
    mission: { title: 'Наша миссия', description: 'Оказывать первоклассные услуги с честностью, профессионализмом и заботой о клиентах.' },
    values: {
      title: 'Наши ценности',
      items: [
        { title: 'Честность', description: 'Мы действуем по высоким этическим стандартам' },
        { title: 'Стремление к качеству', description: 'Совершенствуемся в каждом аспекте работы' },
        { title: 'Ориентация на клиента', description: 'Ваши цели — наш приоритет' },
        { title: 'Инновации', description: 'Используем современные технологии и подходы' }
      ]
    },
    team: { title: 'Наша команда', subtitle: 'Познакомьтесь с нашими экспертами', description: 'Команда профессионалов, готовая помочь вам.' }
  },
  contact: {
    title: 'Связаться с нами',
    subtitle: 'Задайте вопросы о наших объектах и услугах',
    info: {
      title: 'Контакты',
      address: { label: 'Адрес', value: '123 Nguyen Van Linh, Da Nang, Vietnam' },
      phone: { label: 'Телефон', value: '+84 123 456 789' },
      email: { label: 'Email', value: 'info@dananghome.com' },
      hours: {
        label: 'Часы работы',
        weekdays: 'Пн–Пт: 9:00–18:00',
        saturday: 'Сб: 9:00–13:00',
        sunday: 'Вс: выходной'
      }
    },
    form: {
      title: 'Отправить сообщение',
      name: { label: 'Ваше имя', placeholder: 'Введите имя' },
      email: { label: 'Email', placeholder: 'Введите email' },
      phone: { label: 'Телефон', placeholder: 'Введите номер телефона', optional: 'необязательно' },
      message: { label: 'Сообщение', placeholder: 'Напишите ваше сообщение...' },
      submit: 'Отправить',
      sending: 'Отправка...',
      success: 'Сообщение отправлено! Мы скоро свяжемся с вами.',
      error: 'Не удалось отправить. Попробуйте еще раз.'
    }
  },
  categories: {
    title: 'Выбор по типу недвижимости',
    subtitle: 'Найдите идеальный вариант среди разных типов',
    apartment: { title: 'Квартира', count: '234 объекта' },
    villa: { title: 'Вилла', count: '234 объекта' },
    studio: { title: 'Студия', count: '234 объекта' },
    office: { title: 'Офис', count: '234 объекта' },
    townhouse: { title: 'Таунхаус', count: '234 объекта' },
    commercial: { title: 'Коммерческая', count: '234 объекта' }
  },
  properties: {
    title: 'Избранные объекты',
    subtitle: 'Подборка премиальной недвижимости в Дананге',
    viewDetails: 'Подробнее',
    beds: 'спальни',
    baths: 'санузлы',
    area: 'м²'
  },
  detail: {
    common: {
      descriptionTitle: 'Описание объекта',
      amenitiesTitle: 'Удобства и особенности',
      similarTitle: 'Похожие объекты',
      contactAgent: 'Связаться с агентом',
      beds: 'Спальни',
      baths: 'Санузлы',
      area: 'м²',
      garage: 'Гараж',
      built: 'Год постройки',
      pricePerMonth: 'в месяц'
    }
  },
  footer: {
    about: {
      title: 'О нас',
      description: 'Ваш надежный партнер в поиске идеальной недвижимости в Дананге. Виллы, квартиры и коммерческие объекты — продажа и аренда.'
    },
    contact: {
      title: 'Контакты',
      address: { label: 'Адрес', value: '123 Nguyen Van Linh, Da Nang, Vietnam' },
      phone: { label: 'Телефон', value: '+84 123 456 789' },
      email: { label: 'Email', value: 'info@dananghome.com' },
      hours: { label: 'Часы работы', weekdays: 'Пн–Пт: 9:00–18:00', saturday: 'Сб: 9:00–13:00', sunday: 'Вс: выходной' }
    },
    quickLinks: {
      title: 'Быстрые ссылки',
      links: [
        { name: 'О нас', href: '/about' },
        { name: 'Продажа', href: '/sale' },
        { name: 'Аренда', href: '/rent' },
        { name: 'Контакты', href: '/contact' }
      ]
    },
    newsletter: {
      title: 'Рассылка',
      description: 'Подписывайтесь на обновления рынка недвижимости.',
      placeholder: 'Ваш email',
      button: 'Подписаться',
      success: 'Спасибо за подписку!',
      error: 'Не удалось подписаться. Попробуйте еще раз.'
    },
    social: { title: 'Мы в соцсетях', facebook: 'Мы на Facebook', instagram: 'Мы в Instagram', linkedin: 'Мы в LinkedIn', youtube: 'Мы на YouTube' },
    copyright: '© {year} Da Nang Home. Все права защищены.'
  },
  advancedFilter: {
    title: 'Расширенный поиск',
    priceFrom: 'Цена от',
    to: 'до',
    sizeFrom: 'Площадь от',
    location: 'Район',
    bedsAny: 'Спальни: Любые',
    bathsAny: 'Ванные: Любые',
    rooms: 'Комнаты',
    amenities: 'Удобства',
    cancel: 'Отмена',
    apply: 'Применить фильтры',
    ariaMin: 'Минимум',
    ariaMax: 'Максимум'
  },
}
