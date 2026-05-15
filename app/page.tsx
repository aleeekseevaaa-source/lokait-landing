import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Твоя команда перестанет гонять бумажки — начнёт работать | Lokait",
  description:
    "Сотрудники автосервиса тратят часы на рутину вместо клиентов. Telegram-бот для автосервиса берёт приёмку, заявки и переписки на себя — без обучения, без новых систем.",
  openGraph: {
    title: "Lokait — автоматизация для автосервиса в Telegram",
    description:
      "Сотрудники автосервиса тратят часы на рутину вместо клиентов. Telegram-бот берёт приёмку, заявки и переписки на себя — без обучения, без новых систем.",
  },
};

/* ── Logo mark (SVG, цвета из лого) ── */
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
      <span className="font-bold text-xl tracking-tight" style={{ color: "var(--dark)" }}>
        lokait
      </span>
    </div>
  );
}

function CtaButton({ label, href, variant = "primary" }: { label: string; href: string; variant?: "primary" | "ghost" }) {
  if (variant === "ghost") {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer"
        className="font-medium text-sm"
        style={{ color: "var(--teal-dark)" }}>
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
    title: "Приёмка за 10 минут вместо 40",
    text: "Мастер проходит по шагам осмотра в боте — каждое повреждение с фото. Отчёт уходит клиенту и в архив автоматически.",
  },
  {
    icon: "💬",
    title: "Авито — без входа в Авито",
    text: "Новая заявка приходит менеджеру в Telegram. Он отвечает там же, клиент получает ответ за минуту.",
  },
  {
    icon: "📋",
    title: "Рекламации без бумаг",
    text: "Сотрудник заполняет с телефона прямо с парковки — сделка в Bitrix24 создаётся автоматически.",
  },
  {
    icon: "📦",
    title: "Снабжение без потерь",
    text: "Заявка → согласование → склад → Google Sheets. Ни одна строчка не теряется.",
  },
];

const painPoints = [
  { icon: "😤", text: "Мастер забыл зафиксировать царапину — теперь спор с клиентом" },
  { icon: "⏳", text: "Менеджер полчаса копирует сообщения из Авито в таблицу вручную" },
  { icon: "📭", text: "Заявка на запчасти потерялась в чате — никто не виноват, но не приехали" },
  { icon: "🌙", text: "Ты сам сидишь вечером и листаешь переписки, чтобы понять что сделали за день" },
];

const faq = [
  {
    q: "У нас уже есть CRM — зачем нам бот?",
    a: "Бот не заменяет CRM — он в неё пишет. Заявки, данные, статусы попадают в Bitrix24, amoCRM или Google Sheets сами.",
  },
  {
    q: "Наши сотрудники не технари — не разберутся.",
    a: "Бот работает в Telegram. Нажать кнопку и ответить на вопрос умеет каждый. Никаких новых приложений и логинов.",
  },
  {
    q: "У нас особенный процесс — под шаблон не подойдёт.",
    a: "Мы не делаем шаблоны. Перед разработкой разбираем именно ваш процесс и собираем бота под вас.",
  },
  {
    q: "Что будет если бот сломается?",
    a: "После запуска остаёмся на связи. Пишешь в Telegram — чиним.",
  },
];

export default function LandingPage() {
  return (
    <div style={{ backgroundColor: "var(--bg)" }}>

      {/* Nav */}
      <header style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Logo />
          <CtaButton label="Написать в Telegram" href="https://t.me/lokaitmanager" />
        </div>
      </header>

      {/* Hero */}
      <section style={{ backgroundColor: "var(--white)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="max-w-2xl">
            <TealBadge label="Автоматизация для автобизнеса" />
            <h1 className="font-extrabold leading-tight mb-6"
              style={{ fontSize: "clamp(28px, 4vw, 48px)", color: "var(--dark)", letterSpacing: "-0.02em" }}>
              Твоя команда перестанет<br />гонять бумажки — начнёт работать
            </h1>
            <p className="text-lg mb-8" style={{ color: "var(--ink-muted)", lineHeight: 1.7, maxWidth: 520 }}>
              Telegram-боты берут на себя приёмку, заявки и переписки.
              Сотрудники делают то, за что им платят, а не то, что давно надоело.
            </p>
            <div className="flex items-center gap-5 flex-wrap">
              <CtaButton label="Забрать рутину у команды" href="https://t.me/lokaitmanager" />
              <CtaButton label="Смотреть кейсы" href="https://t.me/lokaitbots" variant="ghost" />
            </div>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <TealBadge label="Звучит знакомо?" />
        <h2 className="font-bold mb-8" style={{ fontSize: 26, color: "var(--dark)" }}>
          Каждый день одно и то же
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {painPoints.map(({ icon, text }) => (
            <div key={text} className="flex gap-4 p-5 rounded-xl card-shadow"
              style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border)" }}>
              <span className="text-2xl flex-shrink-0">{icon}</span>
              <p className="text-sm" style={{ color: "var(--ink-muted)", lineHeight: 1.6 }}>{text}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm font-medium" style={{ color: "var(--dark)" }}>
          Это не разгильдяйство. Это процессы, которые никто не настроил.
        </p>
      </section>

      {/* Cases */}
      <section style={{ backgroundColor: "var(--white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-5xl mx-auto px-6 py-16">
          <TealBadge label="Как это устроено" />
          <h2 className="font-bold mb-4" style={{ fontSize: 26, color: "var(--dark)" }}>
            Один процесс — один бот
          </h2>
          <p className="text-base mb-10" style={{ color: "var(--ink-muted)", maxWidth: 520, lineHeight: 1.7 }}>
            Разбираем самый болезненный процесс и делаем под него Telegram-бота.
            Сотрудники работают в Telegram — где уже сидят.
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

      {/* Anxiety */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-2xl p-8 flex flex-col sm:flex-row gap-8 items-start"
          style={{ backgroundColor: "var(--teal-light)", border: "1px solid #b2deda" }}>
          <div className="flex-1">
            <TealBadge label="Насчёт внедрения" />
            <h2 className="font-bold mb-4" style={{ fontSize: 22, color: "var(--dark)" }}>
              «А вдруг это сложно и долго?»
            </h2>
            <p className="text-sm mb-3" style={{ color: "var(--ink-muted)", lineHeight: 1.7 }}>
              Ты, скорее всего, видел IT-проекты которые внедряли полгода и так и не запустили. Это другое.
            </p>
            <p className="text-sm mb-3" style={{ color: "var(--ink-muted)", lineHeight: 1.7 }}>
              Начинаем с одного процесса — самого болезненного. Сотрудники получают инструкцию на одну страницу.
            </p>
            <p className="text-sm" style={{ color: "var(--ink-muted)", lineHeight: 1.7 }}>
              Если через неделю что-то работает не так — исправляем.
            </p>
          </div>
          <div className="flex-shrink-0 pt-1">
            <CtaButton label="Обсудить мой процесс" href="https://t.me/lokaitmanager" />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "var(--white)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="font-bold mb-10 text-center" style={{ fontSize: 26, color: "var(--dark)" }}>
            Частые вопросы
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
        {/* Teal accent line */}
        <div className="mx-auto mb-8 rounded-full" style={{ width: 48, height: 4, background: "var(--teal)" }} />
        <h2 className="font-bold mb-4" style={{ fontSize: 28, color: "var(--dark)" }}>
          Покажи один процесс, который раздражает больше всего
        </h2>
        <p className="text-base mb-8 mx-auto" style={{ color: "var(--ink-muted)", maxWidth: 480, lineHeight: 1.7 }}>
          Разберём его и скажем, сколько времени он съедает и что с этим делать.
        </p>
        <CtaButton label="Разобрать мой процесс бесплатно" href="https://t.me/lokaitmanager" />
        <p className="text-xs mt-4" style={{ color: "var(--ink-light)" }}>@lokaitmanager в Telegram</p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--white)" }}>
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between flex-wrap gap-4">
          <Logo />
          <span className="text-xs" style={{ color: "var(--ink-light)" }}>
            Автоматизация для автобизнеса · @lokaitbots
          </span>
        </div>
      </footer>

    </div>
  );
}
