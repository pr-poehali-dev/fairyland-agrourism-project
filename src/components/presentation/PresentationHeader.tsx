import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface PresentationHeaderProps {
  currentSlide: number;
  totalSlides: number;
}

const PresentationHeader = ({ currentSlide, totalSlides }: PresentationHeaderProps) => {
  return (
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
            Слайд {currentSlide + 1} из {totalSlides}
          </span>
          <Button className="gradient-purple text-white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Стать пайщиком
          </Button>
        </div>
      </div>
    </header>
  );
};

export default PresentationHeader;
