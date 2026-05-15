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

function Divider() {
  return (
    <div className="flex items-center gap-4 my-12">
      <span className="rule-red" />
    </div>
  );
}

function CtaButton({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block font-ui text-sm tracking-widest uppercase px-8 py-4 transition-colors"
      style={{ background: "var(--ink)", color: "var(--cream)" }}
    >
      {label}
    </a>
  );
}

export default function LandingPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">

      {/* Hero */}
      <section className="mb-16">
        <p className="font-ui text-xs tracking-widest uppercase mb-4" style={{ color: "var(--red)" }}>
          Lokait — автоматизация для автобизнеса
        </p>
        <h1
          className="font-display font-black italic leading-tight mb-6"
          style={{ fontSize: "clamp(32px, 5vw, 52px)", color: "var(--ink)", letterSpacing: "-0.02em" }}
        >
          Твоя команда перестанет гонять бумажки — начнёт работать
        </h1>
        <p className="font-editorial text-xl italic mb-8" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
          Telegram-боты для автосервиса берут на себя приёмку, заявки и переписки.
          Сотрудники делают то, за что им платят, а не то, что давно надоело.
        </p>
        <CtaButton label="Забрать рутину у команды" href="https://t.me/lokaitmanager" />
      </section>

      <Divider />

      {/* Push */}
      <section className="mb-16">
        <h2 className="font-display font-black italic mb-6" style={{ fontSize: 28, color: "var(--ink)" }}>
          Знакомо?
        </h2>
        <div className="font-editorial text-lg italic space-y-4" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          <p>
            Утро начинается нормально. Но к обеду выясняется: мастер-приёмщик снова забыл
            зафиксировать царапину — теперь спор с клиентом.
          </p>
          <p>
            Менеджер полчаса копировал сообщения из Авито в таблицу. Заявка на запчасти
            потерялась в чате — никто не виноват, но запчасти так и не приехали.
          </p>
          <p>
            Ты сам сидишь вечером и листаешь переписки, чтобы понять что вообще сделали за день.
          </p>
        </div>
        <p className="font-ui mt-6 text-sm" style={{ color: "var(--ink)" }}>
          Это не разгильдяйство. Это процессы, которые никто не настроил.
        </p>
      </section>

      <Divider />

      {/* Pull */}
      <section className="mb-16">
        <h2 className="font-display font-black italic mb-6" style={{ fontSize: 28, color: "var(--ink)" }}>
          Как это выглядит, когда работает
        </h2>
        <div className="space-y-6">
          {[
            {
              title: "Приёмка за 10 минут вместо 40",
              text: "Мастер открывает бота и проходит по шагам осмотра — каждое повреждение с фото. Отчёт уходит клиенту и в архив автоматически.",
            },
            {
              title: "Авито — без входа в Авито",
              text: "Новая заявка приходит менеджеру в Telegram. Он отвечает там же, клиент получает ответ за минуту.",
            },
            {
              title: "Утренняя сводка без звонков",
              text: "Ты открываешь телефон и видишь: сколько заявок обработано, что в работе, что ждёт. Без вечернего разгребания.",
            },
          ].map(({ title, text }) => (
            <div key={title} className="p-6 card-shadow" style={{ background: "var(--card-bg)" }}>
              <p className="font-ui text-xs tracking-widest uppercase mb-2" style={{ color: "var(--red)" }}>
                {title}
              </p>
              <p className="font-editorial italic text-lg" style={{ color: "var(--muted)", lineHeight: 1.6 }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Solution */}
      <section className="mb-16">
        <h2 className="font-display font-black italic mb-6" style={{ fontSize: 28, color: "var(--ink)" }}>
          Как это устроено
        </h2>
        <p className="font-editorial italic text-lg mb-4" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          Мы разбираем один процесс — тот, что отнимает больше всего времени — и делаем
          под него Telegram-бота. Только этот процесс, без надстроек.
        </p>
        <p className="font-editorial italic text-lg mb-4" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          Сотрудники работают в Telegram, где уже сидят. Никакого нового приложения,
          новых логинов, инструкций на 50 страниц.
        </p>
        <p className="font-editorial italic text-lg" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          Бот ведёт человека по шагам, собирает данные, отправляет куда надо:
          в CRM, Google Sheets, Bitrix24 или в канал руководителя.
        </p>
      </section>

      <Divider />

      {/* Proof */}
      <section className="mb-16">
        <h2 className="font-display font-black italic mb-6" style={{ fontSize: 28, color: "var(--ink)" }}>
          Кейсы
        </h2>
        <ul className="space-y-4">
          {[
            "Бот-приёмщик: пошаговый осмотр с фотофиксацией → Excel-отчёт без участия сотрудника. Приёмка: 10 минут вместо 40.",
            "Авито-бот: менеджеры отвечают клиентам из Telegram, не заходя в Авито.",
            "Рекламации → Bitrix24: сотрудник заполняет с телефона прямо с парковки, сделка создаётся автоматически.",
            "Снабжение сети салонов: заявка → согласование → склад → Google Sheets. Ни одна строчка не теряется.",
          ].map((text) => (
            <li key={text} className="flex gap-3 items-start">
              <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{ background: "var(--red)" }} />
              <span className="font-ui text-sm" style={{ color: "var(--ink)", lineHeight: 1.7 }}>
                {text}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <Divider />

      {/* Anxiety */}
      <section className="mb-16">
        <h2 className="font-display font-black italic mb-6" style={{ fontSize: 28, color: "var(--ink)" }}>
          «А вдруг это сложно внедрить?»
        </h2>
        <p className="font-editorial italic text-lg mb-4" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          Ты, скорее всего, видел IT-проекты которые внедряли полгода и так и не запустили.
          Это другое.
        </p>
        <p className="font-editorial italic text-lg mb-4" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          Начинаем с одного процесса — самого болезненного. Сотрудники получают
          инструкцию на одну страницу.
        </p>
        <p className="font-editorial italic text-lg" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
          Если через неделю что-то работает не так — исправляем.
        </p>
      </section>

      <Divider />

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="font-display font-black italic mb-8" style={{ fontSize: 28, color: "var(--ink)" }}>
          Частые вопросы
        </h2>
        <div className="space-y-6">
          {[
            {
              q: "У нас уже есть CRM — зачем нам бот?",
              a: "Бот не заменяет CRM — он в неё пишет. Заявки, данные, статусы попадают в Bitrix24, amoCRM или Google Sheets сами. Сотрудникам не нужно заходить в CRM руками.",
            },
            {
              q: "Наши сотрудники не технари — не разберутся.",
              a: "Бот работает в Telegram. Нажать кнопку и ответить на вопрос умеет каждый. Никаких новых приложений, никаких логинов.",
            },
            {
              q: "У нас особенный процесс — под шаблон не подойдёт.",
              a: "Мы не делаем шаблоны. Перед разработкой разбираем именно ваш процесс: как работает сейчас, где теряется время, кто что делает. Бот собирается под вас.",
            },
            {
              q: "Что будет если бот сломается?",
              a: "После запуска остаёмся на связи. Пишешь в Telegram — чиним.",
            },
          ].map(({ q, a }) => (
            <div key={q} style={{ borderTop: "1px solid var(--border)", paddingTop: 20 }}>
              <p className="font-ui text-sm font-medium mb-2" style={{ color: "var(--ink)" }}>
                {q}
              </p>
              <p className="font-editorial italic" style={{ color: "var(--muted)", lineHeight: 1.7 }}>
                {a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Final CTA */}
      <section className="text-center py-8">
        <p className="font-editorial italic text-xl mb-2" style={{ color: "var(--muted)" }}>
          Покажи нам один процесс, который раздражает больше всего.
        </p>
        <p className="font-editorial italic text-xl mb-8" style={{ color: "var(--muted)" }}>
          Разберём его и скажем, сколько времени он съедает и что с этим делать.
        </p>
        <CtaButton label="Разобрать мой процесс бесплатно" href="https://t.me/lokaitmanager" />
        <p className="font-ui text-xs mt-4" style={{ color: "var(--border)" }}>
          @lokaitmanager в Telegram
        </p>
      </section>

    </main>
  );
}
