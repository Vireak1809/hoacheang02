// pages/Messages.jsx
import React, { useState } from 'react';

const Messages = () => {
  const [activeChat, setActiveChat] = useState(1);

  const conversations = [
    {
      id: 1,
      name: 'លោក វិសាល',
      role: 'ជាងភ្លើង',
      lastMsg: 'ខ្ញុំកំពុងធ្វើដំណើរទៅទីតាំងរបស់អ្នក',
      time: '10:20 AM',
      unread: true,
      online: true,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_aarNXw9_9bHIeWmo8lTDMPxfde_qZIHsSPHpIc0hvGnfqmSgbJO22x9YLESRxxLRVl3pqDi-TZqlFOxgmU2jh39aqqUHRi8hiClpQsjVyIJTbJVsFq_CQESMH4NT3hXIttT82WDlAHQ08UHDO6rLIjOsNMWE6MHjct7hB8yLPjQc1dk_fr_VcljC3HBDX5w1VAxZFm-RSXx2ohVY8eoSRo_rAlrrJLazRh9U9F5BElCRKkeVlBItxvl7o9_c5xtVMNqpKOHtoIQ'
    },
    {
      id: 2,
      name: 'លោក សុវណ្ណ',
      role: 'ជាងទឹក',
      lastMsg: 'ការងារបានបញ្ចប់រួចរាល់',
      time: 'ម្សិលមិញ',
      unread: false,
      online: false,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZHmFEgzVoL-6D0sY5AMC0QXca5antiNxFn0T1cen4egioe416P3FdCFY3vQ0ayp6V3-VUeMoJvMm3t1Egkpuc8f4gYKcTdRetcfAOMFMU8XOJKj1mEKa9GTxFe7P-1SNJ3JHwLznLb2tLypW7chMmnVNJCYtRm1PfIbYWZse0yEtR5vvYXH8oCu2iYYFSVZUCOvLv-oW_GVV7oBnzBtAhdDh2tbyNyJ69HR5sC2MfgkQkXPuaWlhMhzf4S2ZG8qCPu2ShaAsquVE'
    },
    {
      id: 3,
      name: 'Hao Chang Support',
      role: 'Support Team',
      lastMsg: 'តើយើងអាចជួយអ្វីបានខ្លះ?',
      time: '2 ថ្ងៃមុន',
      unread: false,
      online: true,
      image: null
    }
  ];

  const messages = [
    { id: 1, sender: 'me', text: 'សួស្តីលោកវិសាល តើលោកអាចមកដល់ម៉ោងប៉ុន្មានដែរ?', time: '09:50 AM' },
    { id: 2, sender: 'them', text: 'បាទសួស្តី! ខ្ញុំកំពុងរៀបចំសម្ភារៈ នឹងចេញទៅឥឡូវនេះហើយ។', time: '09:55 AM' },
    { id: 3, sender: 'me', text: 'អូខេ បើមកដល់ជិតផ្ទះខ្ញុំហើយ ជួយខលប្រាប់ផងណា។', time: '10:05 AM' },
    { id: 4, sender: 'them', text: 'បាទបង! ខ្ញុំកំពុងធ្វើដំណើរទៅទីតាំងរបស់អ្នក ប្រហែល ១៥នាទីទៀតដល់ហើយ។', time: '10:20 AM' }
  ];

  const activeConvo = conversations.find(c => c.id === activeChat);

  return (
    <div className="container-custom py-6 md:py-10 animate-enter">
      <div className="mb-6">
        <h1 className="text-3xl md:text-4xl font-bold text-primary">សារ</h1>
        <p className="text-base text-on-surface-variant">មើល និងទាក់ទងជាង ឬក្រុម Support</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 h-[calc(100vh-280px)] min-h-[500px]">
        {/* Conversation List */}
        <aside className="w-full md:w-1/3 lg:w-1/4 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col">
          <div className="p-4 border-b border-outline-variant">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input
                className="w-full bg-surface-container-low border-none rounded-lg pl-10 pr-4 py-2.5 focus:ring-2 focus:ring-primary/20 outline-none text-base"
                placeholder="ស្វែងរកសារ"
                type="text"
              />
            </div>
          </div>
          <div className="flex-grow overflow-y-auto custom-scrollbar">
            {conversations.map((conv) => (
              <div
                key={conv.id}
                onClick={() => setActiveChat(conv.id)}
                className={`flex items-center gap-4 p-4 cursor-pointer transition border-l-4 ${
                  activeChat === conv.id
                    ? 'bg-surface-container-highest/50 border-primary'
                    : 'border-transparent hover:bg-surface-container'
                }`}
              >
                <div className="relative shrink-0">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant">
                    {conv.image ? (
                      <img src={conv.image} alt={conv.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-primary-container flex items-center justify-center text-on-primary-container">
                        <span className="material-symbols-outlined text-2xl">support_agent</span>
                      </div>
                    )}
                  </div>
                  {conv.online && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                  )}
                </div>
                <div className="flex-grow min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className={`font-bold truncate text-sm ${activeChat === conv.id ? 'text-primary' : 'text-on-surface'}`}>
                      {conv.name}
                    </h3>
                    <span className="text-xs text-on-surface-variant">{conv.time}</span>
                  </div>
                  <p className="text-xs font-bold text-primary truncate">{conv.role}</p>
                  <p className="text-xs text-on-surface-variant truncate">{conv.lastMsg}</p>
                </div>
                {conv.unread && (
                  <div className="shrink-0 w-2.5 h-2.5 bg-secondary rounded-full"></div>
                )}
              </div>
            ))}
          </div>
        </aside>

        {/* Chat Window */}
        <section className="flex-1 flex flex-col bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant overflow-hidden">
          {/* Chat Header */}
          <div className="p-4 border-b border-outline-variant flex flex-wrap justify-between items-center bg-white">
            <div className="flex items-center gap-4">
              <div className="relative shrink-0">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-outline-variant">
                  {activeConvo?.image ? (
                    <img src={activeConvo.image} alt={activeConvo.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-primary-container flex items-center justify-center text-on-primary-container">
                      <span className="material-symbols-outlined text-2xl">support_agent</span>
                    </div>
                  )}
                </div>
                {activeConvo?.online && (
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-primary">{activeConvo?.name}</h2>
                  <span className="px-2 py-0.5 bg-surface-container-high text-primary-fixed-dim text-[10px] rounded uppercase font-bold">
                    {activeConvo?.role}
                  </span>
                </div>
                <p className="text-xs text-green-600 font-medium">កំពុង Online</p>
              </div>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <button className="flex items-center gap-1 px-3 py-2 border border-outline-variant rounded-lg text-primary hover:bg-surface-container-low transition text-sm">
                <span className="material-symbols-outlined text-sm">call</span> ទូរស័ព្ទ
              </button>
              <button className="flex items-center gap-1 px-3 py-2 bg-secondary text-white rounded-lg hover:shadow-md transition text-sm">
                <span className="material-symbols-outlined text-sm">event_note</span> មើលការកក់
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-grow p-4 overflow-y-auto bg-surface custom-scrollbar flex flex-col gap-3">
            <div className="flex justify-center my-2">
              <span className="px-3 py-1 bg-surface-container text-on-surface-variant text-xs rounded-full">ថ្ងៃនេះ</span>
            </div>
            {messages.map((msg) => (
              <div key={msg.id} className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'} gap-1 max-w-[80%] ${msg.sender === 'me' ? 'ml-auto' : ''}`}>
                {msg.sender === 'them' && (
                  <div className="shrink-0 w-8 h-8 rounded-full overflow-hidden border border-outline-variant">
                    <img src={activeConvo?.image} alt="" className="w-full h-full object-cover" />
                  </div>
                )}
                <div className={`px-4 py-3 shadow-sm ${
                  msg.sender === 'me'
                    ? 'bg-primary-container text-white rounded-2xl rounded-tr-none'
                    : 'bg-white border border-outline-variant text-on-surface rounded-2xl rounded-tl-none'
                }`}>
                  <p className="text-sm">{msg.text}</p>
                </div>
                <span className="text-[10px] text-on-surface-variant">{msg.time}</span>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-outline-variant bg-white">
            <div className="flex items-center gap-3">
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition">
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <button className="p-2 text-on-surface-variant hover:bg-surface-container-low rounded-full transition">
                <span className="material-symbols-outlined">image</span>
              </button>
              <div className="flex-grow relative">
                <input
                  className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition text-base"
                  placeholder="សរសេរសារ..."
                  type="text"
                />
              </div>
              <button className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-xl shadow-md hover:scale-105 transition">
                <span className="material-symbols-outlined">send</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Messages;