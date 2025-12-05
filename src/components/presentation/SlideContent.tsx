import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface SlideData {
  title: string;
  subtitle?: string;
  description?: string;
  highlight?: string;
  type: string;
  goal?: string;
  benefits?: Array<{ icon: string; title: string; text: string }>;
  format?: string;
  finances?: Array<{ label: string; value: string }>;
  note?: string;
  income?: Array<{ label: string; value: string; icon: string }>;
  includes?: string[];
  management?: string;
  package?: Array<{ icon: string; title: string; text: string }>;
  guarantee?: string;
  timeline?: Array<{ phase: string; time: string; payment: string; action: string }>;
  protection?: Array<{ icon: string; title: string; text: string }>;
  steps?: string[];
  cta?: string;
}

interface SlideContentProps {
  slideData: SlideData;
}

const SlideContent = ({ slideData }: SlideContentProps) => {
  return (
    <div className="animate-fade-in">
      {slideData.type === 'hero' && (
        <div className="text-center space-y-8 py-12">
          <div className="inline-block p-4 rounded-2xl gradient-purple mb-6">
            <Icon name="Sparkles" size={48} className="text-white" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
            {slideData.title}
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground font-medium">
            {slideData.subtitle}
          </p>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-xl text-foreground">{slideData.description}</p>
            <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 border-2 border-purple-200">
              <p className="text-lg font-semibold text-purple-900">{slideData.highlight}</p>
            </div>
          </div>
        </div>
      )}

      {slideData.type === 'concept' && (
        <Card className="border-none shadow-2xl">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-4xl gradient-text mb-4">{slideData.title}</CardTitle>
            <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
              <p className="text-xl font-semibold text-blue-900">НАША ЦЕЛЬ:</p>
              <p className="text-lg text-blue-800 mt-2">{slideData.goal}</p>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">ВАША ВЫГОДА КАК ПАЙЩИКА:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {slideData.benefits?.map((benefit, i) => (
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
                <span className="font-bold">ФОРМАТ:</span> {slideData.format}
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {slideData.type === 'finances' && (
        <Card className="border-none shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl gradient-text mb-2">{slideData.title}</CardTitle>
            <CardDescription className="text-xl">{slideData.subtitle}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {slideData.finances?.map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200">
                  <span className="font-medium text-lg">{item.label}</span>
                  <span className="font-bold text-2xl gradient-text">{item.value}</span>
                </div>
              ))}
            </div>
            <div className="p-6 rounded-xl bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300">
              <div className="flex items-start gap-3">
                <Icon name="Info" size={24} className="text-green-600 shrink-0 mt-1" />
                <p className="text-lg text-green-900">{slideData.note}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {slideData.type === 'business' && (
        <Card className="border-none shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl gradient-text">{slideData.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-center">КАК ВАШ ДОМ БУДЕТ ЗАРАБАТЫВАТЬ:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                {slideData.income?.map((item, i) => (
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
                {slideData.includes?.map((item, i) => (
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
                <span className="text-purple-800">{slideData.management}</span>
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {slideData.type === 'package' && (
        <Card className="border-none shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl gradient-text">{slideData.title}</CardTitle>
            <CardDescription className="text-xl mt-4">ПАКЕТ ПАЙЩИКА ВКЛЮЧАЕТ:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              {slideData.package?.map((item, i) => (
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
                  <p className="text-lg text-green-800">{slideData.guarantee}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {slideData.type === 'roadmap' && (
        <Card className="border-none shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl gradient-text">{slideData.title}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              {slideData.timeline?.map((item, i) => (
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
                <p className="text-xl font-bold text-orange-900">{slideData.highlight}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {slideData.type === 'trust' && (
        <Card className="border-none shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-4xl gradient-text">{slideData.title}</CardTitle>
            <CardDescription className="text-xl mt-4">ЗАЩИЩАЕМ ВАШИ ИНВЕСТИЦИИ:</CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid md:grid-cols-2 gap-4">
              {slideData.protection?.map((item, i) => (
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
                {slideData.steps?.map((step, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors">
                    <Badge className="gradient-purple text-white shrink-0">{i + 1}</Badge>
                    <p className="text-lg">{step}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8 rounded-2xl gradient-purple text-white text-center">
              <Icon name="Heart" size={48} className="mx-auto mb-4" />
              <p className="text-2xl font-bold">{slideData.cta}</p>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SlideContent;
