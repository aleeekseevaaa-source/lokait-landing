import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lokait — автоматизация процессов для автосервиса",
  description:
    "Telegram-боты для автосервисов и автосалонов. Приёмка, заявки, снабжение, рекламации — без ручного труда и потерянных данных.",
  openGraph: {
    title: "Lokait — автоматизация для автосервиса в Telegram",
    description:
      "Telegram-боты для автосервисов и автосалонов. Приёмка, заявки, снабжение, рекламации — без ручного труда и потерянных данных.",
  },
};

function LogoMark({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <polygon points="10,15 55,50 10,85" fill="#1c2028" />
      <polygon points="38,15 83,50 38,85" fill="#6bbfb5" opacity="0.85" />
    </svg>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <LogoMark size={26} />
      <span className="font-bold text-xl tracking-tight" style={{ color: "var(--dark)" }}>lokait</span>
    </div>
  );
}

function CtaButton({ label, href, variant = "primary" }: { label: string; href: string; variant?: "primary" | "ghost" }) {
  if (variant === "ghost") {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="font-medium text-sm" style={{ color: "var(--teal-dark)" }}>
        {label} →
      </a>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
      className="inline-block text-sm font-semibold px-6 py-3 rounded-lg transition-opacity hover:opacity-90"
      style={{ background: "var(--dark)", color: "#fff" }}>
      {label}
    </a>
  );
}

function TealBadge({ label }: { label: string }) {
  return (
    <span className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
      style={{ backgroundColor: "var(--teal-light)", color: "var(--teal-dark)" }}>
      {label}
    </span>
  );
}

const cases = [
  {
    icon: "🔧",
    title: "Приёмка — 10 минут вместо 40",
    text: "Бот ведёт мастера по шагам осмотра, фиксирует повреждения с фото. Готовый отчёт уходит клиенту и в архив автоматически.",
  },
  {
    icon: "💬",
    title: "Обработка заявок с Авито",
    text: "Менеджеры отвечают клиентам из Telegram — без входа в Авито, без потерянных диалогов, с историей переписки.",
  },
  {
    icon: "📋",
    title: "Рекламации в Bitrix24",
    text: "Сотрудник заполняет заявку с телефона на месте. Сделка в CRM создаётся автоматически, вложения прикрепляются.",
  },
  {
    icon: "📦",
    title: "Снабжение сети",
    text: "Заявка → многоуровневое согласование → склад → Google Sheets. Статус каждой позиции виден в реальном времени.",
  },
];

const problems = [
  "Данные приёмки фиксируются вручную и теряются или оспариваются",
  "Заявки от клиентов распределены по нескольким каналам и теряются",
  "Руководитель тратит время на мониторинг чатов вместо управления",
  "Интеграция с CRM требует ручного ввода данных сотрудниками",
];

const faq = [
  {
    q: "У нас уже есть CRM. Зачем нам бот?",
    a: "Бот не заменяет CRM — он в неё пишет. Заявки, данные, статусы попадают в Bitrix24, amoCRM или Google Sheets автоматически, без ручного ввода.",
  },
  {
    q: "Сотрудники не разберутся с новым инструментом.",
    a: "Бот работает в Telegram — приложении, которое сотрудники уже используют. Обучение занимает 15 минут.",
  },
  {
    q: "Наши процессы специфичны. Подойдёт ли типовое решение?",
    a: "Типовых решений мы не предлагаем. Перед разработкой проводим разбор вашего процесса и собираем бота под конкретные задачи.",
  },
  {
    q: "Что происходит после запуска?",
    a: "Остаёмся на связи. При необходимости дорабатываем под изменения в процессах.",
  },
];

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: "var(--bg)" }}>

      {/* Nav */}
      <header style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <CtaButton label="Связаться с нами" href="https://t.me/lokaitmanager" />
        </div>
      </header>

      {/* Hero */}
      <section style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <TealBadge label="Автоматизация для автобизнеса" />
            <h1 className="font-extrabold leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 46px)", color: "var(--dark)", letterSpacing: "-0.02em" }}>
              Рутинные процессы — ботам.<br />Ваша команда — клиентам.
            </h1>
            <p className="text-lg mb-8" style={{ color: "var(--ink-muted)", lineHeight: 1.7, maxWidth: 520 }}>
              Разрабатываем Telegram-ботов для автосервисов и автосалонов.
              Приёмка, заявки, снабжение, рекламации — без ручного труда и потерянных данных.
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <CtaButton label="Обсудить задачу" href="https://t.me/lokaitmanager" />
              <CtaButton label="Смотреть кейсы" href="https://t.me/lokaitbots" variant="ghost" />
            </div>
          </div>
        </div>
      </section>

      {/* Problems */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <TealBadge label="Типичные задачи" />
        <h2 className="font-bold mb-8" style={{ fontSize: 24, color: "var(--dark)" }}>
          С чем обращаются владельцы автосервисов
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {problems.map((text) => (
            <div key={text} className="flex gap-3 p-5 rounded-xl card-shadow"
              style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)" }}>
              <span className="flex-shrink-0 mt-1 w-2 h-2 rounded-full"
                style={{ background: "var(--teal)", minWidth: 8, minHeight: 8, marginTop: 6 }} />
              <p className="text-sm" style={{ color: "var(--ink-muted)", lineHeight: 1.6 }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section style={{ backgroundColor: "var(--white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <TealBadge label="Реализованные решения" />
          <h2 className="font-bold mb-4" style={{ fontSize: 24, color: "var(--dark)" }}>
            Примеры из практики
          </h2>
          <p className="text-base mb-10" style={{ color: "var(--ink-muted)", maxWidth: 520, lineHeight: 1.7 }}>
            Каждое решение разрабатывается под конкретный процесс.
            Интеграция с существующими системами — по запросу.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cases.map(({ icon, title, text }) => (
              <div key={title} className="p-6 rounded-xl card-shadow-md"
                style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)" }}>
                <span className="text-3xl block mb-4">{icon}</span>
                <p className="font-semibold text-sm mb-2" style={{ color: "var(--dark)" }}>{title}</p>
                <p className="text-sm" style={{ color: "var(--ink-muted)", lineHeight: 1.6 }}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-2xl p-8 flex flex-col sm:flex-row gap-8 items-start"
          style={{ backgroundColor: "var(--teal-light)", border: "1px solid #b2deda" }}>
          <div className="flex-1">
            <TealBadge label="Как мы работаем" />
            <h2 className="font-bold mb-4" style={{ fontSize: 22, color: "var(--dark)" }}>
              Начинаем с одного процесса
            </h2>
            <div className="space-y-3">
              {[
                "Разбираем процесс, который требует наибольших затрат времени",
                "Разрабатываем бота под вашу инфраструктуру и команду",
                "Запускаем, обучаем сотрудников, остаёмся на связи",
              ].map((step, i) => (
                <div key={step} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center"
                    style={{ background: "var(--teal)", color: "#fff", minWidth: 24 }}>
                    {i + 1}
                  </span>
                  <p className="text-sm" style={{ color: "var(--ink-muted)", lineHeight: 1.6 }}>{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-shrink-0 pt-1">
            <CtaButton label="Обсудить задачу" href="https://t.me/lokaitmanager" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="font-bold mb-10 text-center" style={{ fontSize: 24, color: "var(--dark)" }}>
            Вопросы
          </h2>
          <div>
            {faq.map(({ q, a }) => (
              <div key={q} className="py-5" style={{ borderBottom: "1px solid var(--border)" }}>
                <p className="font-semibold text-sm mb-2" style={{ color: "var(--dark)" }}>{q}</p>
                <p className="text-sm" style={{ color: "var(--ink-muted)", lineHeight: 1.7 }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <div className="mx-auto mb-8 rounded-full" style={{ width: 48, height: 4, background: "var(--teal)" }} />
        <h2 className="font-bold mb-4" style={{ fontSize: 26, color: "var(--dark)" }}>
          Расскажите о задаче — предложим решение
        </h2>
        <p className="text-base mb-8 mx-auto"
          style={{ color: "var(--ink-muted)", maxWidth: 460, lineHeight: 1.7 }}>
          Опишите процесс, который хотите автоматизировать.
          Разберём его и предложим конкретный вариант.
        </p>
        <CtaButton label="Написать в Telegram" href="https://t.me/lokaitmanager" />
        <p className="text-xs mt-4" style={{ color: "var(--ink-light)" }}>@lokaitmanager</p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--white)" }}>
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between flex-wrap gap-4">
          <Logo />
          <span className="text-xs" style={{ color: "var(--ink-light)" }}>
            Автоматизация процессов для автобизнеса · @lokaitbots
          </span>
        </div>
      </footer>

    </div>
  );
}
