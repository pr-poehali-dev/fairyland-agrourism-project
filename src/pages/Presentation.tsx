import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import PresentationHeader from '@/components/presentation/PresentationHeader';
import SlideContent from '@/components/presentation/SlideContent';
import ContactForm from '@/components/presentation/ContactForm';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'ЮМАХ ЕН. СКАЗОЧНЫЙ КРАЙ',
      subtitle: 'Владение сказкой, которая приносит доход',
      description: 'Совместное создание агротуристического кластера из настоящих срубов',
      highlight: 'Для тех, кто ценит аутентичность, природу и разумные инвестиции',
      type: 'hero'
    },
    {
      title: 'Суть проекта — что мы создаем?',
      goal: 'Создать уникальное место силы в Чувашии — поселение из 10 аутентичных срубов на берегу озера для премиального агротуризма',
      benefits: [
        { icon: 'Home', title: 'АКТИВ', text: 'Вы становитесь совладельцем земли и конкретного дома-сруба' },
        { icon: 'TrendingUp', title: 'ДОХОД', text: 'Ваш дом приносит вам пассивный доход от сдачи внаем' },
        { icon: 'Palmtree', title: 'ОТДЫХ', text: 'У вас есть 4 недели в году для личного проживания в сказке' },
        { icon: 'Users', title: 'СООБЩЕСТВО', text: 'Вы входите в круг единомышленников' }
      ],
      format: 'Сельскохозяйственный потребительский кооператив (СПК)',
      type: 'concept'
    },
    {
      title: 'Финансы — прозрачно и понятно',
      subtitle: 'Инвестиции с прицелом на актив',
      finances: [
        { label: 'Общая стоимость проекта', value: '20,17 млн руб.' },
        { label: 'Ваш паевой взнос (при 10 участниках)', value: '2,02 млн руб.' },
        { label: 'Рыночная стоимость вашего актива после стройки', value: '~3,5–4,0 млн руб.' },
        { label: 'Ваша «мгновенная» выгода на балансе', value: '+1,5–2,0 млн руб.' }
      ],
      note: 'Проект реализуется на 100% за наши взносы. Гранты — это бонус для ускорения окупаемости.',
      type: 'finances'
    },
    {
      title: 'Откуда доход? Бизнес-модель',
      income: [
        { label: 'Средний чек', value: '8 500 руб./сутки', icon: 'Coins' },
        { label: 'Загрузка', value: '45%', icon: 'Percent' },
        { label: 'Годовой доход с 10 домов', value: '~16,2 млн руб.', icon: 'TrendingUp' }
      ],
      includes: [
        'Проживание в историческом срубе',
        '2 мастер-класса (хлеб, сыр, рыбалка)',
        'Экскурсия-легенда по территории',
        'Завтрак из местных продуктов'
      ],
      management: 'Наем профессиональной команды (управляющий, обслуживающий персонал)',
      type: 'business'
    },
    {
      title: 'Что вы получаете за 2,02 млн руб.?',
      package: [
        { icon: 'MapPin', title: 'Земельный участок', text: '5-6 соток в живописнейшем месте с видом на воду' },
        { icon: 'Home', title: 'Дом-сруб 6×9м', text: 'Новый или реконструированный под ключ' },
        { icon: 'Building', title: 'Общая инфраструктура', text: 'Баня, кафитерий, дороги, свет, вода, охрана' },
        { icon: 'Calendar', title: '28 дней проживания', text: 'Право на личное проживание в году' },
        { icon: 'DollarSign', title: 'Доля в прибыли', text: 'Регулярные дивиденды от сдачи в аренду' }
      ],
      guarantee: 'Право в любой момент выйти из кооператива, получив свой участок с домом в натуре',
      type: 'package'
    },
    {
      title: 'Дорожная карта — как мы это построим?',
      timeline: [
        { phase: 'ЭТАП 1', time: '1-3 мес.', payment: '30% (605 тыс. руб.)', action: 'Сбор группы, регистрация, покупка земли' },
        { phase: 'ЭТАП 2', time: '4-6 мес.', payment: '40% (807 тыс. руб.)', action: 'Начало стройки, закупка срубов' },
        { phase: 'ЭТАП 3', time: '7-10 мес.', payment: '30% (605 тыс. руб.)', action: 'Отделка, благоустройство' },
        { phase: 'ЭТАП 4', time: '11-12 мес.', payment: '—', action: 'Запуск, прием первых гостей' },
        { phase: 'ЭТАП 5', time: '13+ мес.', payment: '—', action: 'Получение первой прибыли и дивидендов' }
      ],
      highlight: 'Первый доход от сдачи — уже через 10-11 месяцев!',
      type: 'roadmap'
    },
    {
      title: 'Почему это надежно?',
      protection: [
        { icon: 'Shield', title: 'Актив в собственности', text: 'Земля и дом оформляются в собственность кооператива с правом выдела' },
        { icon: 'FileCheck', title: 'Правовая прозрачность', text: 'Детальный Устав, регулирующий все вопросы' },
        { icon: 'Layers', title: 'Поэтапное финансирование', text: 'Вы платите по факту выполнения этапов работ' },
        { icon: 'Eye', title: 'Личный контроль', text: 'Вы — член правления или ревизионной комиссии' }
      ],
      steps: [
        'Знакомство: Встреча инициативной группы (онлайн/оффлайн)',
        'Выезд на землю: Осмотр предполагаемых участков',
        'Изучение документов: Устав, предварительные договоры',
        'Принятие решения и старт'
      ],
      cta: 'Создадим сказку вместе — для себя, для семьи, для будущего',
      type: 'trust'
    }
  ];

  const currentSlideData = slides[currentSlide];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <PresentationHeader currentSlide={currentSlide} totalSlides={slides.length} />

      <main className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Progress value={((currentSlide + 1) / slides.length) * 100} className="h-2" />
          </div>

          <SlideContent slideData={currentSlideData} />

          <div className="flex items-center justify-between mt-12">
            <Button
              onClick={handlePrev}
              disabled={currentSlide === 0}
              variant="outline"
              size="lg"
              className="gap-2"
            >
              <Icon name="ChevronLeft" size={20} />
              Назад
            </Button>
            <div className="flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentSlide ? 'gradient-purple w-8' : 'bg-purple-200'
                  }`}
                />
              ))}
            </div>
            <Button
              onClick={handleNext}
              disabled={currentSlide === slides.length - 1}
              size="lg"
              className="gradient-purple text-white gap-2"
            >
              Далее
              <Icon name="ChevronRight" size={20} />
            </Button>
          </div>
        </div>
      </main>

      <ContactForm />

      <footer className="bg-sidebar text-sidebar-foreground py-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center text-white font-bold">
              Ю
            </div>
            <span className="text-lg font-bold">ЮМАХ ЕН</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 Сельскохозяйственный потребительский кооператив «ЮМАХ ЕН»
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Presentation;
