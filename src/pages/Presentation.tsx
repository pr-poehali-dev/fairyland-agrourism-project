import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за интерес! Мы свяжемся с вами в ближайшее время.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center text-white font-bold">
              Ю
            </div>
            <div>
              <h1 className="font-bold text-lg">ЮМАХ ЕН</h1>
              <p className="text-xs text-muted-foreground">Агротуризм в Чувашии</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden md:block">
              Слайд {currentSlide + 1} из {slides.length}
            </span>
            <Button className="gradient-purple text-white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              Стать пайщиком
            </Button>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <Progress value={((currentSlide + 1) / slides.length) * 100} className="h-2" />
          </div>

          <div className="animate-fade-in">
            {currentSlideData.type === 'hero' && (
              <div className="text-center space-y-8 py-12">
                <div className="inline-block p-4 rounded-2xl gradient-purple mb-6">
                  <Icon name="Sparkles" size={48} className="text-white" />
                </div>
                <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
                  {currentSlideData.title}
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
                  {currentSlideData.subtitle}
                </p>
                <div className="max-w-3xl mx-auto space-y-4">
                  <p className="text-xl text-foreground">{currentSlideData.description}</p>
                  <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200">
                    <p className="text-lg font-semibold text-purple-900">{currentSlideData.highlight}</p>
                  </div>
                </div>
              </div>
            )}

            {currentSlideData.type === 'concept' && (
              <Card className="border-none shadow-2xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-4xl gradient-text mb-4">{currentSlideData.title}</CardTitle>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
                    <p className="text-xl font-semibold text-blue-900">НАША ЦЕЛЬ:</p>
                    <p className="text-lg text-blue-800 mt-2">{currentSlideData.goal}</p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-center">ВАША ВЫГОДА КАК ПАЙЩИКА:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {currentSlideData.benefits?.map((benefit, i) => (
                        <div key={i} className="p-6 rounded-xl border-2 border-purple-200 bg-white hover:shadow-lg transition-shadow">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center shrink-0">
                              <Icon name={benefit.icon as any} size={24} className="text-white" />
                            </div>
                            <div>
                              <p className="font-bold text-lg text-purple-700 mb-1">{benefit.title}</p>
                              <p className="text-muted-foreground">{benefit.text}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200">
                    <p className="text-lg font-semibold text-green-900">
                      <span className="font-bold">ФОРМАТ:</span> {currentSlideData.format}
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentSlideData.type === 'finances' && (
              <Card className="border-none shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-4xl gradient-text mb-2">{currentSlideData.title}</CardTitle>
                  <CardDescription className="text-xl">{currentSlideData.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {currentSlideData.finances?.map((item, i) => (
                      <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200">
                        <span className="font-medium text-lg">{item.label}</span>
                        <span className="font-bold text-2xl gradient-text">{item.value}</span>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300">
                    <div className="flex items-start gap-3">
                      <Icon name="Info" size={24} className="text-green-600 shrink-0 mt-1" />
                      <p className="text-lg text-green-900">{currentSlideData.note}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentSlideData.type === 'business' && (
              <Card className="border-none shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-4xl gradient-text">{currentSlideData.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-center">КАК ВАШ ДОМ БУДЕТ ЗАРАБАТЫВАТЬ:</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {currentSlideData.income?.map((item, i) => (
                        <div key={i} className="p-6 rounded-xl gradient-purple text-white text-center">
                          <Icon name={item.icon as any} size={32} className="mx-auto mb-3" />
                          <p className="text-sm opacity-90 mb-2">{item.label}</p>
                          <p className="text-2xl font-bold">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
                    <h3 className="text-xl font-bold mb-4 text-blue-900">
                      ЧТО ВХОДИТ В ПУТЕВКУ <span className="text-sm font-normal">(объяснение высокой цены)</span>:
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3">
                      {currentSlideData.includes?.map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Icon name="Check" size={20} className="text-green-600 shrink-0" />
                          <span className="text-blue-900">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200">
                    <p className="text-lg">
                      <span className="font-bold text-purple-900">УПРАВЛЕНИЕ:</span>{' '}
                      <span className="text-purple-800">{currentSlideData.management}</span>
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentSlideData.type === 'package' && (
              <Card className="border-none shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-4xl gradient-text">{currentSlideData.title}</CardTitle>
                  <CardDescription className="text-xl mt-4">ПАКЕТ ПАЙЩИКА ВКЛЮЧАЕТ:</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentSlideData.package?.map((item, i) => (
                      <div key={i} className="p-6 rounded-xl border-2 border-purple-200 bg-white hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg gradient-blue flex items-center justify-center shrink-0">
                            <Icon name={item.icon as any} size={24} className="text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-lg text-blue-700 mb-1">{item.title}</p>
                            <p className="text-muted-foreground">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300">
                    <div className="flex items-start gap-3">
                      <Icon name="ShieldCheck" size={32} className="text-green-600 shrink-0" />
                      <div>
                        <p className="font-bold text-xl text-green-900 mb-2">ГАРАНТИЯ:</p>
                        <p className="text-lg text-green-800">{currentSlideData.guarantee}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentSlideData.type === 'roadmap' && (
              <Card className="border-none shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-4xl gradient-text">{currentSlideData.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {currentSlideData.timeline?.map((item, i) => (
                      <div key={i} className="relative pl-8 pb-8 border-l-4 border-purple-300 last:pb-0">
                        <div className="absolute left-0 top-0 w-8 h-8 -ml-4 rounded-full gradient-purple flex items-center justify-center text-white font-bold">
                          {i + 1}
                        </div>
                        <div className="p-4 rounded-xl bg-white border-2 border-purple-200 hover:shadow-lg transition-shadow">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <Badge className="mb-2 gradient-purple text-white">{item.phase}</Badge>
                              <p className="font-bold text-xl text-purple-700">{item.time}</p>
                            </div>
                            {item.payment !== '—' && (
                              <div className="text-right">
                                <p className="text-sm text-muted-foreground">Взнос</p>
                                <p className="font-bold text-lg">{item.payment}</p>
                              </div>
                            )}
                          </div>
                          <p className="text-lg text-foreground">{item.action}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-yellow-50 to-orange-50 border-2 border-yellow-300">
                    <div className="flex items-center gap-3">
                      <Icon name="Zap" size={32} className="text-orange-600" />
                      <p className="text-xl font-bold text-orange-900">{currentSlideData.highlight}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {currentSlideData.type === 'trust' && (
              <Card className="border-none shadow-2xl">
                <CardHeader className="text-center">
                  <CardTitle className="text-4xl gradient-text">{currentSlideData.title}</CardTitle>
                  <CardDescription className="text-xl mt-4">ЗАЩИЩАЕМ ВАШИ ИНВЕСТИЦИИ:</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-4">
                    {currentSlideData.protection?.map((item, i) => (
                      <div key={i} className="p-6 rounded-xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-lg gradient-blue flex items-center justify-center shrink-0">
                            <Icon name={item.icon as any} size={24} className="text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-lg text-green-700 mb-1">{item.title}</p>
                            <p className="text-green-800">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-6 rounded-xl bg-white border-2 border-purple-200">
                    <h3 className="text-2xl font-bold mb-4 text-center text-purple-900">ДАЛЬНЕЙШИЕ ШАГИ:</h3>
                    <div className="space-y-3">
                      {currentSlideData.steps?.map((step, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                          <Badge className="gradient-purple text-white shrink-0">{i + 1}</Badge>
                          <p className="text-lg">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="p-8 rounded-2xl gradient-purple text-white text-center">
                    <Icon name="Heart" size={48} className="mx-auto mb-4" />
                    <p className="text-2xl font-bold">{currentSlideData.cta}</p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

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

      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Готовы стать пайщиком?</h2>
            <p className="text-xl text-purple-200">Оставьте заявку, и мы свяжемся с вами для детального обсуждения</p>
          </div>
          <Card className="border-none shadow-2xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Ваше имя *</label>
                    <Input
                      required
                      placeholder="Иван Петров"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон *</label>
                    <Input
                      required
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="h-12"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email *</label>
                  <Input
                    required
                    type="email"
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Сообщение</label>
                  <Textarea
                    placeholder="Расскажите, что вас интересует..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="min-h-32"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gradient-purple text-white text-lg h-14">
                  <Icon name="Send" size={20} className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

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
