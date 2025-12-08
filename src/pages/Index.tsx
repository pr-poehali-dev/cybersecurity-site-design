import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Shield',
      title: 'Защита периметра',
      description: 'Комплексная защита сетевой инфраструктуры от внешних угроз'
    },
    {
      icon: 'Lock',
      title: 'Управление доступом',
      description: 'Контроль и аудит прав доступа к критичным системам'
    },
    {
      icon: 'Eye',
      title: 'Мониторинг угроз',
      description: 'Круглосуточное отслеживание и анализ инцидентов безопасности'
    },
    {
      icon: 'FileCheck',
      title: 'Аудит безопасности',
      description: 'Оценка защищённости и соответствие стандартам'
    }
  ];

  const solutions = [
    {
      icon: 'Database',
      title: 'Защита данных',
      features: ['Шифрование', 'DLP-системы', 'Резервное копирование']
    },
    {
      icon: 'Network',
      title: 'Сетевая безопасность',
      features: ['Firewall', 'IDS/IPS', 'VPN-решения']
    },
    {
      icon: 'Smartphone',
      title: 'Мобильная безопасность',
      features: ['MDM', 'Контейнеризация', 'Защита приложений']
    }
  ];

  const stats = [
    { value: '99.9%', label: 'Предотвращённых атак' },
    { value: '24/7', label: 'Мониторинг' },
    { value: '500+', label: 'Защищённых систем' },
    { value: '<5 мин', label: 'Время реакции' }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#2d1359]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#2d1359]/95 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#519d3c] flex items-center justify-center">
                <Icon name="Shield" className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold font-heading text-white">CyberShield</span>
            </div>
            
            <div className="hidden md:flex items-center gap-10">
              {['Услуги', 'Решения', 'Преимущества', 'Контакты'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>

            <Button className="bg-[#519d3c] hover:bg-[#6bb450] text-white font-medium">
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <div className="w-2 h-2 rounded-full bg-[#519d3c] animate-pulse"></div>
              <span className="text-sm text-white/70">Защищено более 500 систем</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold font-heading mb-6 leading-tight text-white">
              Надёжная защита
              <br />
              <span className="text-gradient">вашего бизнеса</span>
            </h1>
            
            <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
              Комплексные решения по кибербезопасности для компаний любого масштаба
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <Button size="lg" className="bg-[#519d3c] hover:bg-[#6bb450] text-white text-lg px-10 py-7">
                Получить аудит
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-white/20 text-white hover:bg-white/5">
                Подробнее
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-slide-up">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur">
                  <div className="text-4xl font-bold text-[#519d3c] mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="услуги" className="py-24 px-6 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-heading mb-4 text-white">
              Наши <span className="text-gradient">услуги</span>
            </h2>
            <p className="text-white/60 text-lg">Полный спектр решений для вашей безопасности</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-white/5 backdrop-blur border-white/10 hover:border-[#519d3c] transition-all duration-500 group hover:scale-[1.02]"
              >
                <div className="w-14 h-14 rounded-xl bg-[#519d3c]/20 flex items-center justify-center mb-6 group-hover:bg-[#519d3c] transition-all duration-300">
                  <Icon name={service.icon} className="w-7 h-7 text-[#519d3c] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-3 text-white">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="решения" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-heading mb-4 text-white">
              Готовые <span className="text-gradient">решения</span>
            </h2>
            <p className="text-white/60 text-lg">Технологии защиты для различных областей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="p-8 bg-white/5 backdrop-blur border-white/10 hover:border-[#519d3c] transition-all duration-300"
              >
                <Icon name={solution.icon} className="w-12 h-12 text-[#519d3c] mb-6" />
                <h3 className="text-2xl font-bold font-heading mb-6 text-white">{solution.title}</h3>
                <ul className="space-y-3">
                  {solution.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-white/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#519d3c]"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="преимущества" className="py-24 px-6 bg-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold font-heading mb-4 text-white">
              Почему выбирают <span className="text-gradient">нас</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: 'Zap',
                title: 'Быстрая реакция',
                description: 'Среднее время реагирования на инцидент — менее 5 минут'
              },
              {
                icon: 'Award',
                title: 'Сертификация',
                description: 'Аккредитованы ФСТЭК, сертифицированы по ISO 27001'
              },
              {
                icon: 'Users',
                title: 'Экспертная команда',
                description: 'Более 50 специалистов с опытом работы в кибербезопасности'
              },
              {
                icon: 'TrendingUp',
                title: 'Проактивность',
                description: 'Предотвращение угроз до момента возникновения инцидента'
              }
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex gap-6 p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#519d3c] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#519d3c]/20 flex items-center justify-center flex-shrink-0">
                  <Icon name={benefit.icon} className="w-6 h-6 text-[#519d3c]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-heading mb-2 text-white">{benefit.title}</h3>
                  <p className="text-white/60">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="контакты" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 md:p-16 bg-white/5 backdrop-blur border-white/10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-[#519d3c] flex items-center justify-center mx-auto mb-8">
              <Icon name="MessageSquare" className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6 text-white">
              Готовы обсудить защиту?
            </h2>
            
            <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto">
              Получите бесплатную консультацию специалиста и аудит текущего уровня безопасности
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="bg-[#519d3c] hover:bg-[#6bb450] text-white text-lg px-10 py-7">
                Заказать звонок
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-10 py-7 border-white/20 text-white hover:bg-white/5">
                Написать в чат
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
              <div>
                <Icon name="Mail" className="w-6 h-6 text-[#519d3c] mx-auto mb-3" />
                <div className="text-sm text-white/60">security@cybershield.ru</div>
              </div>
              <div>
                <Icon name="Phone" className="w-6 h-6 text-[#519d3c] mx-auto mb-3" />
                <div className="text-sm text-white/60">+7 (495) 000-00-00</div>
              </div>
              <div>
                <Icon name="MapPin" className="w-6 h-6 text-[#519d3c] mx-auto mb-3" />
                <div className="text-sm text-white/60">Москва, Тверская, 10</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-white/10">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#519d3c] flex items-center justify-center">
                  <Icon name="Shield" className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold font-heading text-white">CyberShield</span>
              </div>
              <p className="text-sm text-white/50">
                Надёжная защита вашего бизнеса
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Услуги</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li>Защита периметра</li>
                <li>Управление доступом</li>
                <li>Мониторинг угроз</li>
                <li>Аудит безопасности</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Компания</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li>О нас</li>
                <li>Сертификаты</li>
                <li>Кейсы</li>
                <li>Карьера</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-white">Контакты</h4>
              <ul className="space-y-2 text-sm text-white/50">
                <li>+7 (495) 000-00-00</li>
                <li>security@cybershield.ru</li>
                <li>Москва, Тверская, 10</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
            <div>© 2024 CyberShield. Все права защищены</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
