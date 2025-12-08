import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: 'Code',
      title: 'Софт',
      description: 'Разработка и внедрение программных решений для автоматизации бизнеса',
      color: 'from-purple-500 to-blue-500'
    },
    {
      icon: 'Wrench',
      title: 'Услуги',
      description: 'Консалтинг, техподдержка и сопровождение IT-инфраструктуры',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Server',
      title: 'Железо',
      description: 'Поставка и настройка серверного оборудования, сетевых решений',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const cases = [
    {
      title: 'Автоматизация торговой сети',
      client: 'Федеральный ритейлер',
      result: '30% рост эффективности',
      tags: ['ERP', '1С', 'Интеграция']
    },
    {
      title: 'Облачная инфраструктура',
      client: 'Финтех компания',
      result: '99.9% uptime',
      tags: ['Cloud', 'DevOps', 'Мониторинг']
    },
    {
      title: 'ЦОД под ключ',
      client: 'Производственное предприятие',
      result: '200+ серверов',
      tags: ['Железо', 'Сеть', 'Безопасность']
    }
  ];

  const news = [
    {
      date: '15 ноября 2024',
      title: 'Запуск нового дата-центра в Москве',
      category: 'Инфраструктура'
    },
    {
      date: '10 ноября 2024',
      title: 'Партнерство с Cisco: новые решения',
      category: 'Партнерства'
    },
    {
      date: '5 ноября 2024',
      title: 'Победа в конкурсе IT-интеграторов',
      category: 'Достижения'
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f2c] via-[#1e2433] to-[#1a1f2c]">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-heading">
              <span className="text-gradient">TechIntegra</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Главная', 'Софт', 'Услуги', 'Железо', 'Новости', 'Кейсы', 'О нас'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            <Button className="gradient-primary text-white font-medium">
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="главная" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold font-heading mb-6 leading-tight">
              Системная интеграция
              <br />
              <span className="text-gradient">нового поколения</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Комплексные IT-решения: от поставки оборудования до внедрения корпоративных систем
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-white text-lg px-8 py-6">
                Обсудить проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                Наши кейсы
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-24 animate-slide-up">
            <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-gradient mb-2">250+</div>
              <div className="text-muted-foreground">Реализованных проектов</div>
            </Card>
            <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-gradient mb-2">15+</div>
              <div className="text-muted-foreground">Лет на рынке</div>
            </Card>
            <Card className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-bold text-gradient mb-2">98%</div>
              <div className="text-muted-foreground">Довольных клиентов</div>
            </Card>
          </div>
        </div>
      </section>

      <section id="софт" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-500 group hover:scale-105"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={service.icon} className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="услуги" className="py-20 px-6 bg-card/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Полный спектр <span className="text-gradient">услуг</span>
            </h2>
            <p className="text-muted-foreground text-lg">Решим любую задачу в области IT</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: 'Shield', title: 'Информационная безопасность' },
              { icon: 'Cloud', title: 'Облачные решения' },
              { icon: 'Database', title: 'Управление данными' },
              { icon: 'Network', title: 'Сетевая инфраструктура' },
              { icon: 'Smartphone', title: 'Мобильная разработка' },
              { icon: 'BarChart3', title: 'Аналитика и BI' },
              { icon: 'Lock', title: 'Резервное копирование' },
              { icon: 'Zap', title: 'Автоматизация процессов' }
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-secondary transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <Icon name={item.icon} className="w-10 h-10 text-secondary mb-4" />
                <h4 className="font-semibold">{item.title}</h4>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="железо" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Поставка <span className="text-gradient">оборудования</span>
            </h2>
            <p className="text-muted-foreground text-lg">Официальный партнер ведущих производителей</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'HardDrive',
                title: 'Серверы',
                items: ['Dell PowerEdge', 'HPE ProLiant', 'Lenovo ThinkSystem']
              },
              {
                icon: 'Cpu',
                title: 'Сетевое оборудование',
                items: ['Cisco', 'Huawei', 'Mikrotik']
              },
              {
                icon: 'HardDrive',
                title: 'СХД',
                items: ['NetApp', 'Dell EMC', 'Pure Storage']
              }
            ].map((category, index) => (
              <Card key={index} className="p-8 bg-card/50 backdrop-blur border-border">
                <Icon name={category.icon} className="w-12 h-12 text-accent mb-6" />
                <h3 className="text-2xl font-bold font-heading mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Check" className="w-5 h-5 text-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="новости" className="py-20 px-6 bg-card/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Последние <span className="text-gradient">новости</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="text-sm text-muted-foreground mb-2">{item.date}</div>
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                  {item.category}
                </div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="кейсы" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              Наши <span className="text-gradient">кейсы</span>
            </h2>
            <p className="text-muted-foreground text-lg">Примеры успешных проектов</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {cases.map((caseItem, index) => (
              <Card
                key={index}
                className="p-8 bg-card/50 backdrop-blur border-border hover:border-secondary transition-all duration-500 group hover:scale-105"
              >
                <h3 className="text-2xl font-bold font-heading mb-3">{caseItem.title}</h3>
                <div className="text-muted-foreground mb-2">{caseItem.client}</div>
                <div className="text-secondary font-semibold text-xl mb-6">{caseItem.result}</div>
                <div className="flex flex-wrap gap-2">
                  {caseItem.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="о нас" className="py-20 px-6 bg-card/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
              О <span className="text-gradient">компании</span>
            </h2>
          </div>

          <Card className="p-12 bg-card/50 backdrop-blur border-border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              TechIntegra — ведущий системный интегратор с 15-летним опытом работы на рынке IT-решений.
              Мы специализируемся на комплексных проектах: от поставки оборудования до внедрения
              корпоративных систем управления.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Наша команда из 100+ сертифицированных специалистов реализовала более 250 проектов для
              компаний из различных отраслей: ритейл, финансы, производство, телеком.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon name="Award" className="w-12 h-12 text-primary mx-auto mb-3" />
                <div className="font-semibold">Сертифицированы</div>
                <div className="text-sm text-muted-foreground">Cisco, Microsoft, VMware</div>
              </div>
              <div className="text-center">
                <Icon name="Users" className="w-12 h-12 text-secondary mx-auto mb-3" />
                <div className="font-semibold">100+ специалистов</div>
                <div className="text-sm text-muted-foreground">В штате компании</div>
              </div>
              <div className="text-center">
                <Icon name="Clock" className="w-12 h-12 text-accent mx-auto mb-3" />
                <div className="font-semibold">24/7 поддержка</div>
                <div className="text-sm text-muted-foreground">Круглосуточно для клиентов</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold font-heading mb-4">
                <span className="text-gradient">TechIntegra</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Системная интеграция и поставка IT-решений
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Системная интеграция</li>
                <li>Поставка оборудования</li>
                <li>Разработка ПО</li>
                <li>Техподдержка</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Кейсы</li>
                <li>Новости</li>
                <li>Контакты</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (495) 123-45-67</li>
                <li>info@techintegra.ru</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 TechIntegra. Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
