import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const NAV = [
  { id: 'about', label: 'О компании' },
  { id: 'services', label: 'Услуги' },
  { id: 'portfolio', label: 'Портфолио' },
  { id: 'process', label: 'Процесс' },
  { id: 'reviews', label: 'Отзывы' },
  { id: 'faq', label: 'Вопросы' },
  { id: 'contacts', label: 'Контакты' },
];

const SERVICES = [
  {
    icon: 'Building2',
    title: 'Строительство домов',
    text: 'Возведение частных домов и коттеджей под ключ — от фундамента до кровли с премиальными материалами.',
  },
  {
    icon: 'Layers',
    title: 'Фасадные работы',
    text: 'Утепление, штукатурка, облицовка и декоративная отделка фасадов любой сложности. Наша главная специализация.',
  },
  {
    icon: 'PaintRoller',
    title: 'Отделка квартир',
    text: 'Капитальный и дизайнерский ремонт квартир любого метража с авторским контролем качества.',
  },
  {
    icon: 'Home',
    title: 'Отделка домов и коттеджей',
    text: 'Внутренняя отделка частных домов и коттеджей под индивидуальные требования владельца.',
  },
  {
    icon: 'Hammer',
    title: 'Капитальный ремонт',
    text: 'Полное обновление помещений с заменой коммуникаций, перепланировкой и инженерией.',
  },
  {
    icon: 'Gem',
    title: 'Премиум-отделка',
    text: 'Эксклюзивные решения с натуральным камнем, ценными породами дерева и авторским декором.',
  },
];

const PORTFOLIO = [
  {
    img: 'https://cdn.poehali.dev/projects/38c2492a-47b5-4065-be12-7033d814e184/files/b405c1af-60a4-48f3-851a-7bffc576b04e.jpg',
    title: 'Фасад загородного дома',
    cat: 'Фасадные работы',
  },
  {
    img: 'https://cdn.poehali.dev/projects/38c2492a-47b5-4065-be12-7033d814e184/files/271ccf2f-2cb6-4bb2-8b3f-1a8ff95235b5.jpg',
    title: 'Отделка квартиры премиум-класса',
    cat: 'Интерьер',
  },
  {
    img: 'https://cdn.poehali.dev/projects/38c2492a-47b5-4065-be12-7033d814e184/files/5d1a2c62-7ac3-40c4-bf64-99db339a6168.jpg',
    title: 'Реконструкция коттеджа',
    cat: 'Строительство',
  },
];

const PROCESS = [
  { n: '01', title: 'Заявка и консультация', text: 'Обсуждаем задачу, выезжаем на объект, фиксируем все пожелания.' },
  { n: '02', title: 'Смета и договор', text: 'Прозрачная смета без скрытых платежей и официальный договор.' },
  { n: '03', title: 'Производство работ', text: 'Выполняем работы по графику под контролем прораба и технадзора.' },
  { n: '04', title: 'Сдача с гарантией', text: 'Принимаете готовый объект. Гарантия на все виды работ.' },
];

const REVIEWS = [
  {
    name: 'Алексей М.',
    role: 'Владелец коттеджа',
    text: 'Делали фасад дома — результат превзошёл ожидания. Аккуратно, в срок, материалы премиальные. Рекомендую.',
  },
  {
    name: 'Ирина С.',
    role: 'Квартира 120 м²',
    text: 'Отделка квартиры на высшем уровне. Внимание к деталям и честность в работе. Спасибо команде ГК Ремонт!',
  },
  {
    name: 'Дмитрий В.',
    role: 'Частный дом',
    text: 'Работают как настоящие профессионалы. Десять лет опыта чувствуются в каждой мелочи. Качество и гарантия — не пустые слова.',
  },
];

const FAQ = [
  { q: 'Сколько лет вы на рынке?', a: 'Более 10 лет занимаемся фасадными работами и отделкой квартир, частных домов и коттеджей.' },
  { q: 'Даёте ли вы гарантию?', a: 'Да, мы предоставляем официальную гарантию на все виды выполненных работ, зафиксированную в договоре.' },
  { q: 'Работаете ли вы по договору?', a: 'Конечно. Все работы выполняются по официальному договору с прозрачной сметой без скрытых платежей.' },
  { q: 'Можно ли заказать работу под ключ?', a: 'Да, мы выполняем полный цикл — от проекта и сметы до финальной сдачи объекта с гарантией.' },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container flex items-center justify-between h-20">
          <button onClick={() => scrollTo('hero')} className="flex items-center gap-3">
            <div className="w-10 h-10 rotate-45 gold-border flex items-center justify-center">
              <span className="-rotate-45 font-display text-gold text-lg font-semibold">GK</span>
            </div>
            <div className="text-left leading-tight">
              <div className="font-display text-xl tracking-wide gold-gradient-text">GK remont</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">строительство · отделка</div>
            </div>
          </button>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className="text-sm text-muted-foreground hover:text-gold transition-colors"
              >
                {n.label}
              </button>
            ))}
          </nav>

          <Button
            onClick={() => scrollTo('contacts')}
            className="hidden md:inline-flex bg-gold text-primary-foreground hover:bg-gold/90 rounded-none px-6"
          >
            Оставить заявку
          </Button>

          <button className="lg:hidden text-gold" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? 'X' : 'Menu'} size={28} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-fade-up">
            <div className="container py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  onClick={() => scrollTo(n.id)}
                  className="py-3 text-left text-muted-foreground hover:text-gold border-b border-border/50"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/projects/38c2492a-47b5-4065-be12-7033d814e184/files/b405c1af-60a4-48f3-851a-7bffc576b04e.jpg"
            alt="Премиум строительство"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-px gold-line" />
              <span className="text-xs uppercase tracking-[0.3em] text-gold">более 10 лет на рынке</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Премиальное<br />
              <span className="gold-gradient-text">строительство</span> и отделка
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              Фасадные работы, отделка квартир, домов и коттеджей высокого класса.
              Безупречное качество и официальная гарантия на каждый проект.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Button
                onClick={() => scrollTo('contacts')}
                className="bg-gold text-primary-foreground hover:bg-gold/90 rounded-none px-8 h-12 text-base"
              >
                Обсудить проект
              </Button>
              <Button
                onClick={() => scrollTo('portfolio')}
                variant="outline"
                className="gold-border bg-transparent text-foreground hover:bg-gold/10 rounded-none px-8 h-12 text-base"
              >
                Наши работы
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-16 max-w-lg animate-fade-up" style={{ animationDelay: '0.5s' }}>
              {[
                { v: '10+', l: 'лет опыта' },
                { v: '250+', l: 'объектов' },
                { v: '100%', l: 'гарантия' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-4xl gold-gradient-text">{s.v}</div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 border-t border-border">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel>О компании</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              ГК Ремонт — <span className="gold-gradient-text">репутация, проверенная временем</span>
            </h2>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              Более десяти лет мы специализируемся на фасадных работах и отделке квартир,
              частных домов и коттеджей. За это время мы реализовали сотни проектов
              премиум-сегмента и заслужили доверие требовательных клиентов.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Наш принцип прост: безупречное качество, честные сроки и официальная гарантия.
              Мы работаем с лучшими материалами и контролируем каждый этап.
            </p>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                { icon: 'Award', t: 'Качество', d: 'Премиальные материалы и стандарты' },
                { icon: 'ShieldCheck', t: 'Гарантия', d: 'Официальная гарантия по договору' },
                { icon: 'Clock', t: 'Сроки', d: 'Соблюдаем график без задержек' },
                { icon: 'Users', t: 'Команда', d: 'Опытные мастера и технадзор' },
              ].map((f) => (
                <div key={f.t} className="flex gap-4">
                  <div className="shrink-0 w-11 h-11 gold-border flex items-center justify-center">
                    <Icon name={f.icon} size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="font-medium">{f.t}</div>
                    <div className="text-sm text-muted-foreground">{f.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden gold-border">
              <img
                src="https://cdn.poehali.dev/projects/38c2492a-47b5-4065-be12-7033d814e184/files/271ccf2f-2cb6-4bb2-8b3f-1a8ff95235b5.jpg"
                alt="Работы ГК Ремонт"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card gold-border p-6 hidden md:block">
              <div className="font-display text-5xl gold-gradient-text">10+</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">лет безупречной работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 bg-card/40 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <SectionLabel center>Услуги</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl">
              Полный спектр <span className="gold-gradient-text">работ под ключ</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-background p-9 group hover:bg-card transition-colors">
                <div className="w-14 h-14 gold-border flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <Icon name={s.icon} size={26} className="text-gold" />
                </div>
                <h3 className="font-display text-2xl mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-28 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <SectionLabel center>Портфолио</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl">
              Избранные <span className="gold-gradient-text">проекты</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {PORTFOLIO.map((p) => (
              <div key={p.title} className="group relative overflow-hidden gold-border">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <div className="text-xs uppercase tracking-[0.2em] text-gold mb-1">{p.cat}</div>
                  <div className="font-display text-2xl">{p.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-28 bg-card/40 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <SectionLabel center>Процесс работы</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl">
              Как мы <span className="gold-gradient-text">работаем</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS.map((p) => (
              <div key={p.n} className="relative">
                <div className="font-display text-6xl text-gold/20 mb-4">{p.n}</div>
                <div className="w-10 h-px gold-line mb-4" />
                <h3 className="font-display text-2xl mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-28 border-t border-border">
        <div className="container">
          <div className="text-center mb-16">
            <SectionLabel center>Отзывы клиентов</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl">
              Нам <span className="gold-gradient-text">доверяют</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-card gold-border p-8 flex flex-col">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-gold fill-gold" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-6 flex-1">«{r.text}»</p>
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-sm text-gold">{r.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 bg-card/40 border-t border-border">
        <div className="container max-w-3xl">
          <div className="text-center mb-16">
            <SectionLabel center>Вопросы и ответы</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl">
              Часто <span className="gold-gradient-text">спрашивают</span>
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="gold-border bg-background px-6">
                <AccordionTrigger className="font-display text-xl hover:text-gold hover:no-underline text-left">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contacts */}
      <section id="contacts" className="py-28 border-t border-border">
        <div className="container grid lg:grid-cols-2 gap-16">
          <div>
            <SectionLabel>Контакты</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Обсудим ваш <span className="gold-gradient-text">проект</span>
            </h2>
            <p className="text-muted-foreground mb-10 leading-relaxed max-w-md">
              Оставьте заявку — мы свяжемся с вами, проконсультируем и подготовим
              индивидуальное предложение для вашего объекта.
            </p>
            <div className="space-y-6">
              {[
                { icon: 'Phone', t: 'Телефон', d: '+7 (900) 000-00-00' },
                { icon: 'Mail', t: 'Почта', d: 'info@gk-remont.ru' },
                { icon: 'MapPin', t: 'Работаем', d: 'Город и область' },
                { icon: 'Clock', t: 'Часы работы', d: 'Ежедневно 9:00 — 20:00' },
              ].map((c) => (
                <div key={c.t} className="flex gap-4 items-center">
                  <div className="w-12 h-12 gold-border flex items-center justify-center shrink-0">
                    <Icon name={c.icon} size={20} className="text-gold" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-muted-foreground">{c.t}</div>
                    <div className="font-display text-xl">{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-card gold-border p-8 md:p-10 space-y-5"
          >
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Ваше имя</label>
              <Input className="bg-background border-border rounded-none h-12" placeholder="Как к вам обращаться" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Телефон</label>
              <Input className="bg-background border-border rounded-none h-12" placeholder="+7 (___) ___-__-__" />
            </div>
            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Опишите задачу</label>
              <Textarea className="bg-background border-border rounded-none min-h-28" placeholder="Например: отделка квартиры 90 м²" />
            </div>
            <Button type="submit" className="w-full bg-gold text-primary-foreground hover:bg-gold/90 rounded-none h-12 text-base">
              Отправить заявку
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rotate-45 gold-border flex items-center justify-center">
              <span className="-rotate-45 font-display text-gold text-sm font-semibold">GK</span>
            </div>
            <div className="font-display text-lg gold-gradient-text">GK remont</div>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ГК Ремонт. Строительно-отделочная компания.
          </p>
          <div className="flex gap-4">
            {['Phone', 'Mail', 'Send'].map((ic) => (
              <button key={ic} className="w-10 h-10 gold-border flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
                <Icon name={ic} size={18} />
              </button>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

function SectionLabel({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={`flex items-center gap-3 mb-4 ${center ? 'justify-center' : ''}`}>
      <div className="w-10 h-px gold-line" />
      <span className="text-xs uppercase tracking-[0.3em] text-gold">{children}</span>
      {center && <div className="w-10 h-px gold-line" />}
    </div>
  );
}
