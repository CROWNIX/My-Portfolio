import React, { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiSend, FiX } from 'react-icons/fi';
import { Bio, projects, skills } from '../../data/constants';
import { useMotion } from '../Motion';
import LanzMascot from './LanzMascot';
import './lanz-chat.css';

const prompts = [
  { label: 'Kenalan dulu', reply: Bio.description, link: '#about', action: 'Tentang Rahmat' },
  { label: 'Skill Rahmat', reply: skills.map(group => `${group.title}: ${group.skills.map(skill => skill.name).join(', ')}.`).join('\n\n'), link: '#skills', action: 'Jelajahi skills' },
  { label: 'Lihat projects', reply: `Yuk, jelajahi karya Rahmat: ${projects.map(project => project.title).join(', ')}.`, link: '#projects', action: 'Lihat semua projects' },
];

export default function LanzChat() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState('');
  const [messages, setMessages] = useState([]);
  const [typing, setTyping] = useState(false);
  const launcher = useRef(null);
  const closeButton = useRef(null);
  const conversation = useRef(null);
  const replyTimer = useRef(null);
  const pending = useRef(false);
  const { reducedMotion } = useMotion();

  useEffect(() => () => clearTimeout(replyTimer.current), []);
  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus({ preventScroll: true });
  }, [open]);
  useEffect(() => {
    if (!open || !conversation.current) return;
    conversation.current.scrollTo({ top: conversation.current.scrollHeight, behavior: reducedMotion ? 'instant' : 'smooth' });
  }, [messages, typing, open, reducedMotion]);

  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => launcher.current?.focus({ preventScroll: true }));
  };
  const send = (text = draft) => {
    const content = text.trim();
    if (!content || pending.current) return;
    const preset = prompts.find(prompt => prompt.label.toLowerCase() === content.toLowerCase());
    pending.current = true;
    setMessages(previous => [...previous, { role: 'user', text: content }]);
    setDraft('');
    setTyping(true);
    // Local UI preview only: no network request, model, or message storage.
    replyTimer.current = setTimeout(() => {
      setMessages(previous => [...previous, {
        role: 'assistant',
        text: preset?.reply ?? 'Ini contoh percakapan dengan Lanz. Jawaban AI belum aktif di mode demo. Sambil menunggu, pilih topik di bawah untuk mengenal portfolio Rahmat, ya!',
        link: preset?.link,
        action: preset?.action,
      }]);
      setTyping(false);
      pending.current = false;
    }, reducedMotion ? 0 : 850);
  };

  return (
    <aside className={`lanz-widget ${open ? 'is-open' : ''}`} aria-label="Chat Lanz">
      <section id="lanz-chat-panel" className="lanz-panel" role="dialog" aria-labelledby="lanz-title"
        aria-hidden={!open} inert={open ? undefined : ''}
        onKeyDown={event => {
          if (event.key === 'Escape') { event.stopPropagation(); close(); }
        }}>
        <header className="lanz-header">
          <div className="lanz-avatar"><LanzMascot thinking={typing} /></div>
          <div className="lanz-identity">
            <h2 id="lanz-title">Lanz <span className="lanz-demo-badge">DEMO</span></h2>
            <p>Teman jelajah portfolio</p>
          </div>
          <button ref={closeButton} type="button" className="lanz-icon-button" onClick={close} aria-label="Tutup chat Lanz"><FiX /></button>
        </header>

        <div ref={conversation} className="lanz-conversation">
          {messages.length === 0 ? (
            <div className="lanz-welcome">
              <div className="lanz-mascot-stage"><LanzMascot waving /></div>
              <span className="lanz-eyebrow">SAY HELLO TO YOUR GUIDE</span>
              <h3>Halo, aku <span>Lanz.</span></h3>
              <p>Kenalan dengan Rahmat, eksplorasi skill,<br />atau temukan project favoritmu.</p>
              <span className="lanz-welcome-divider" aria-hidden="true" />
            </div>
          ) : (
            <div className="lanz-greeting">Halo! Aku Lanz, teman jelajahmu di portfolio Rahmat. Mulai dari mana?</div>
          )}
          <div role="log" aria-live="polite" aria-relevant="additions" aria-label="Percakapan dengan Lanz" className="lanz-messages">
            {messages.map((message, index) => (
              <div key={index} className={`lanz-message lanz-message-${message.role}`}>
                <span className="lanz-message-author">{message.role === 'user' ? 'Kamu' : 'Lanz · contoh balasan'}</span>
                <p>{message.text}</p>
                {message.link && <a href={message.link} onClick={close}>{message.action}<FiArrowUpRight aria-hidden="true" /></a>}
              </div>
            ))}
          </div>
          {typing && <div className="lanz-typing" role="status"><span className="lanz-typing-dots" aria-hidden="true"><i /><i /><i /></span>Lanz sedang mengetik...</div>}
        </div>

        <div className="lanz-compose">
          <div className="lanz-prompts" aria-label="Topik percakapan">
            {prompts.map(prompt => <button type="button" key={prompt.label} disabled={typing} onClick={() => send(prompt.label)}>{prompt.label}<FiArrowUpRight aria-hidden="true" /></button>)}
          </div>
          <form className="lanz-input-box" onSubmit={event => { event.preventDefault(); send(); }}>
            <textarea aria-label="Pesan untuk Lanz" placeholder="Tulis pesan untuk Lanz..." rows={1} maxLength={1000} value={draft}
              onChange={event => setDraft(event.target.value)}
              onKeyDown={event => {
                if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
                  event.preventDefault(); send();
                }
              }} />
            <button type="submit" className="lanz-send" aria-label="Kirim pesan" disabled={!draft.trim() || typing}><FiSend /></button>
          </form>
          <p className="lanz-disclaimer">Pratinjau UI <span aria-hidden="true">·</span> Balasan contoh, bukan AI aktif</p>
        </div>
      </section>

      <button ref={launcher} type="button" className="lanz-launcher" aria-label={open ? 'Tutup chat Lanz' : 'Buka chat Lanz'}
        aria-expanded={open} aria-controls="lanz-chat-panel" onClick={() => open ? close() : setOpen(true)}>
        <span className="lanz-launcher-mascot"><LanzMascot waving /></span>
        <span className="lanz-launcher-copy"><strong>Chat with Lanz</strong><span>Kenali portfolio ini <FiArrowUpRight aria-hidden="true" /></span></span>
        {open && <FiX className="lanz-launcher-close" aria-hidden="true" />}
      </button>
    </aside>
  );
}
