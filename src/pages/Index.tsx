import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  const [selectedDates, setSelectedDates] = useState<Date[]>([]);
  const userName = 'Алексей Иванов';
  const houseNumber = '7';

  const mockStats = {
    totalInvestment: 2020000,
    currentValue: 3750000,
    monthlyIncome: 135000,
    yearlyIncome: 1620000,
    occupancyRate: 45,
    totalDividends: 405000,
    roiPercent: 85.6,
    daysBooked: 12
  };

  const mockNews = [
    { id: 1, date: '2024-12-01', title: 'Завершены работы по фундаменту срубов 1-5', category: 'Строительство', icon: 'Construction' },
    { id: 2, date: '2024-11-28', title: 'Получено разрешение на подключение электричества', category: 'Документы', icon: 'FileCheck' },
    { id: 3, date: '2024-11-25', title: 'Начата установка банного комплекса', category: 'Строительство', icon: 'Waves' },
    { id: 4, date: '2024-11-20', title: 'Проведено собрание пайщиков: утвержден дизайн интерьеров', category: 'События', icon: 'Users' }
  ];

  const mockForumPosts = [
    { id: 1, author: 'Мария Петрова', avatar: 'МП', topic: 'Предложение по благоустройству территории', replies: 12, time: '2 часа назад' },
    { id: 2, author: 'Дмитрий Соколов', avatar: 'ДС', topic: 'Вопрос по графику строительства', replies: 8, time: '5 часов назад' },
    { id: 3, author: 'Елена Волкова', avatar: 'ЕВ', topic: 'Идеи для мастер-классов гостям', replies: 15, time: '1 день назад' }
  ];

  const monthlyData = [
    { month: 'Июл', income: 98000, expenses: 45000 },
    { month: 'Авг', income: 125000, expenses: 52000 },
    { month: 'Сен', income: 142000, expenses: 48000 },
    { month: 'Окт', income: 135000, expenses: 51000 },
    { month: 'Ноя', income: 148000, expenses: 49000 },
    { month: 'Дек', income: 135000, expenses: 50000 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <aside className="fixed left-0 top-0 h-screen w-64 bg-sidebar text-sidebar-foreground p-6 flex flex-col gap-6 shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl gradient-purple flex items-center justify-center text-white text-xl font-bold">
            Ю
          </div>
          <div>
            <h1 className="text-lg font-bold">ЮМАХ ЕН</h1>
            <p className="text-xs text-sidebar-foreground/70">Кооператив</p>
          </div>
        </div>

        <Separator className="bg-sidebar-border" />

        <nav className="flex-1 flex flex-col gap-2">
          <Button variant="ghost" className="justify-start gap-3 text-sidebar-primary-foreground hover:bg-sidebar-accent">
            <Icon name="LayoutDashboard" size={20} />
            Дашборд
          </Button>
          <Button variant="ghost" className="justify-start gap-3 hover:bg-sidebar-accent">
            <Icon name="TrendingUp" size={20} />
            Доходы
          </Button>
          <Button variant="ghost" className="justify-start gap-3 hover:bg-sidebar-accent">
            <Icon name="Calendar" size={20} />
            Календарь
          </Button>
          <Button variant="ghost" className="justify-start gap-3 hover:bg-sidebar-accent">
            <Icon name="Newspaper" size={20} />
            Новости
          </Button>
          <Button variant="ghost" className="justify-start gap-3 hover:bg-sidebar-accent">
            <Icon name="MessageSquare" size={20} />
            Форум
          </Button>
          <Button variant="ghost" className="justify-start gap-3 hover:bg-sidebar-accent">
            <Icon name="User" size={20} />
            Профиль
          </Button>
        </nav>

        <div className="mt-auto">
          <Card className="bg-sidebar-accent border-sidebar-border">
            <CardContent className="p-4">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="gradient-purple text-white">АИ</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium truncate">{userName}</p>
                  <p className="text-xs text-muted-foreground">Дом #{houseNumber}</p>
                </div>
                <Icon name="LogOut" size={18} className="text-muted-foreground cursor-pointer hover:text-foreground" />
              </div>
            </CardContent>
          </Card>
        </div>
      </aside>

      <main className="ml-64 p-8">
        <div className="max-w-7xl mx-auto space-y-8 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold gradient-text">Добро пожаловать, {userName.split(' ')[0]}!</h1>
              <p className="text-muted-foreground mt-2">Ваш дом #{houseNumber} · Обновлено только что</p>
            </div>
            <Button className="gradient-purple text-white hover:opacity-90 transition-opacity">
              <Icon name="Download" size={18} className="mr-2" />
              Скачать отчет
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-scale-in">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Текущая стоимость</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold">{(mockStats.currentValue / 1000000).toFixed(2)} млн</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                        <Icon name="TrendingUp" size={12} className="mr-1" />
                        +{mockStats.roiPercent}%
                      </Badge>
                    </div>
                  </div>
                  <div className="w-12 h-12 rounded-full gradient-purple flex items-center justify-center">
                    <Icon name="Home" size={24} className="text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Доход за месяц</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold">{(mockStats.monthlyIncome / 1000).toFixed(0)} тыс</p>
                    <p className="text-sm text-muted-foreground mt-2">~{mockStats.occupancyRate}% загрузка</p>
                  </div>
                  <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center">
                    <Icon name="DollarSign" size={24} className="text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Годовой доход</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold">{(mockStats.yearlyIncome / 1000000).toFixed(2)} млн</p>
                    <p className="text-sm text-muted-foreground mt-2">Прогноз 2024</p>
                  </div>
                  <div className="w-12 h-12 rounded-full gradient-vivid flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} className="text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <CardHeader className="pb-3">
                <CardTitle className="text-sm font-medium text-muted-foreground">Забронировано дней</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-bold">{mockStats.daysBooked}/28</p>
                    <Progress value={(mockStats.daysBooked / 28) * 100} className="mt-3 h-2" />
                  </div>
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Icon name="Calendar" size={24} className="text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="analytics" className="space-y-6">
            <TabsList className="bg-white shadow-md">
              <TabsTrigger value="analytics" className="data-[state=active]:gradient-purple data-[state=active]:text-white">
                <Icon name="BarChart3" size={16} className="mr-2" />
                Аналитика
              </TabsTrigger>
              <TabsTrigger value="calendar" className="data-[state=active]:gradient-blue data-[state=active]:text-white">
                <Icon name="Calendar" size={16} className="mr-2" />
                Календарь
              </TabsTrigger>
              <TabsTrigger value="news" className="data-[state=active]:gradient-vivid data-[state=active]:text-white">
                <Icon name="Newspaper" size={16} className="mr-2" />
                Новости
              </TabsTrigger>
              <TabsTrigger value="forum" className="data-[state=active]:gradient-purple data-[state=active]:text-white">
                <Icon name="MessageSquare" size={16} className="mr-2" />
                Форум
              </TabsTrigger>
            </TabsList>

            <TabsContent value="analytics" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="TrendingUp" size={20} className="text-purple-600" />
                      Динамика дохода
                    </CardTitle>
                    <CardDescription>Доход и расходы за последние 6 месяцев</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {monthlyData.map((data, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="font-medium">{data.month}</span>
                            <span className="text-muted-foreground">
                              {((data.income - data.expenses) / 1000).toFixed(0)} тыс
                            </span>
                          </div>
                          <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                            <div
                              className="absolute h-full gradient-purple opacity-80"
                              style={{ width: `${(data.income / 150000) * 100}%` }}
                            />
                            <div
                              className="absolute h-full bg-red-200"
                              style={{ width: `${(data.expenses / 150000) * 100}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-6 text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full gradient-purple" />
                        <span>Доход</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-200" />
                        <span>Расходы</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="PiggyBank" size={20} className="text-blue-600" />
                      Прогноз окупаемости
                    </CardTitle>
                    <CardDescription>Аналитика инвестиций и возврата средств</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Инвестировано</span>
                        <span className="text-sm text-muted-foreground">{(mockStats.totalInvestment / 1000000).toFixed(2)} млн</span>
                      </div>
                      <Progress value={100} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Получено дивидендов</span>
                        <span className="text-sm text-muted-foreground">{(mockStats.totalDividends / 1000000).toFixed(2)} млн</span>
                      </div>
                      <Progress value={(mockStats.totalDividends / mockStats.totalInvestment) * 100} className="h-2" />
                    </div>
                    <Separator />
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100">
                        <p className="text-sm text-muted-foreground mb-1">ROI</p>
                        <p className="text-2xl font-bold text-purple-700">+{mockStats.roiPercent}%</p>
                      </div>
                      <div className="p-4 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100">
                        <p className="text-sm text-muted-foreground mb-1">Срок окупаемости</p>
                        <p className="text-2xl font-bold text-blue-700">3.2 года</p>
                      </div>
                    </div>
                    <div className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="CheckCircle2" size={18} className="text-green-600" />
                        <span className="font-medium text-green-900">Прогноз выполнен на 127%</span>
                      </div>
                      <p className="text-sm text-green-700">Доход превышает первоначальные ожидания</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="calendar" className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Calendar" size={20} className="text-purple-600" />
                    Бронирование личного проживания
                  </CardTitle>
                  <CardDescription>У вас есть право на 28 дней проживания в году. Осталось: {28 - mockStats.daysBooked} дней</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Calendar
                        mode="multiple"
                        selected={selectedDates}
                        onSelect={(dates) => setSelectedDates(dates || [])}
                        className="rounded-lg border shadow-sm"
                      />
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200">
                        <h3 className="font-semibold mb-2 flex items-center gap-2">
                          <Icon name="Info" size={16} className="text-purple-600" />
                          Правила бронирования
                        </h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="text-purple-600 mt-0.5" />
                            <span>Минимальный срок бронирования — 2 дня</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="text-purple-600 mt-0.5" />
                            <span>Бронирование за 7 дней до заезда</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="Check" size={16} className="text-purple-600 mt-0.5" />
                            <span>Высокий сезон: май-сентябрь</span>
                          </li>
                        </ul>
                      </div>
                      <div className="p-4 rounded-lg bg-white border">
                        <h3 className="font-semibold mb-3">Ваши брони</h3>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 rounded-lg bg-purple-50">
                            <div>
                              <p className="font-medium text-sm">15-19 декабря</p>
                              <p className="text-xs text-muted-foreground">5 дней · Дом #7</p>
                            </div>
                            <Badge className="bg-purple-100 text-purple-700">Активна</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50">
                            <div>
                              <p className="font-medium text-sm">24-30 декабря</p>
                              <p className="text-xs text-muted-foreground">7 дней · Дом #7</p>
                            </div>
                            <Badge className="bg-blue-100 text-blue-700">Подтверждена</Badge>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full gradient-purple text-white hover:opacity-90">
                        <Icon name="Plus" size={18} className="mr-2" />
                        Забронировать даты
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="news" className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Newspaper" size={20} className="text-purple-600" />
                    Новости проекта
                  </CardTitle>
                  <CardDescription>Актуальная информация о строительстве и событиях</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockNews.map((news) => (
                      <div
                        key={news.id}
                        className="p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer group"
                      >
                        <div className="flex gap-4">
                          <div className="w-12 h-12 rounded-lg gradient-purple flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <Icon name={news.icon as any} size={24} className="text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <h3 className="font-semibold group-hover:text-purple-600 transition-colors">{news.title}</h3>
                              <Badge variant="outline">{news.category}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{news.date}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="forum" className="space-y-6">
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="MessageSquare" size={20} className="text-purple-600" />
                    Форум пайщиков
                  </CardTitle>
                  <CardDescription>Обсуждения, вопросы и предложения</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-6 gradient-purple text-white hover:opacity-90">
                    <Icon name="Plus" size={18} className="mr-2" />
                    Создать новую тему
                  </Button>
                  <div className="space-y-4">
                    {mockForumPosts.map((post) => (
                      <div
                        key={post.id}
                        className="p-4 rounded-lg border hover:shadow-md transition-shadow cursor-pointer group"
                      >
                        <div className="flex gap-4">
                          <Avatar className="shrink-0">
                            <AvatarFallback className="gradient-blue text-white">{post.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold mb-1 group-hover:text-purple-600 transition-colors">
                              {post.topic}
                            </h3>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <span>{post.author}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Icon name="MessageCircle" size={14} />
                                {post.replies} ответов
                              </span>
                              <span>•</span>
                              <span>{post.time}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Index;
