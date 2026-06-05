import React, { useState, useEffect, useRef } from 'react';
import api from '../utils/api';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: 'Xin chào! Mình là trợ lý AI ảo của MobileStore. Mình có thể giúp gì cho bạn? (Ví dụ: "Điện thoại iPhone giá bao nhiêu?")', sender: 'ai', timestamp: new Date() }
  ]);
  const [inputText, setInputText] = useState('');
  const [products, setProducts] = useState<any[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load products so AI can answer questions about them
  useEffect(() => {
    api.get('/products').then(r => r.data && setProducts(r.data)).catch(() => {});
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMsg: Message = { id: Date.now(), text: inputText.trim(), sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMsg]);
    setInputText('');

    // Simulate AI thinking and reply
    setTimeout(() => {
      const aiReply = generateAIReply(userMsg.text.toLowerCase());
      setMessages(prev => [...prev, { id: Date.now() + 1, text: aiReply, sender: 'ai', timestamp: new Date() }]);
    }, 800 + Math.random() * 1000); // 0.8 - 1.8 seconds
  };

  const generateAIReply = (query: string): string => {
    if (query.includes('khuyến mãi') || query.includes('giảm giá') || query.includes('voucher') || query.includes('code')) {
      return 'Hiện tại cửa hàng đang có mã giảm giá GIAM10 giảm 10% (tối đa 500k) cho đơn từ 1.000.000đ và WELCOME20 giảm 20% cho người mới! Bạn có thể nhập ở trang thanh toán nhé.';
    }

    if (query.includes('chào') || query.includes('hi ') || query.includes('hello')) {
      return 'Chào bạn! Bạn đang tìm điện thoại nào ạ? Cửa hàng mình đang có rất nhiều mã giảm giá hấp dẫn.';
    }

    if (query.includes('iphone') || query.includes('apple')) {
      const iphones = products.filter(p => (p.product_name || '').toLowerCase().includes('iphone') || (p.brand_name || '').toLowerCase().includes('apple'));
      if (iphones.length > 0) {
        return `Bên mình đang có ${iphones.length} mẫu iPhone. Nổi bật nhất là ${iphones[0].product_name} với giá chỉ ${new Intl.NumberFormat('vi-VN').format(iphones[0].price)}đ.`;
      }
      return 'Hiện tại MobileStore đang tạm hết các mẫu iPhone. Bạn có muốn tham khảo Samsung không?';
    }

    if (query.includes('sản phẩm mới') || query.includes('điện thoại mới') || query.includes('mới nhất')) {
      if (products.length > 0) {
        return `Sản phẩm mới nhất của MobileStore là ${products[0].product_name}. Đang được bán với mức giá hấp dẫn ${new Intl.NumberFormat('vi-VN').format(products[0].price)}đ. Đừng quên dùng voucher GIAM10 nhé!`;
      }
    }

    if (query.includes('giá rẻ') || query.includes('dưới')) {
      return 'Cửa hàng có rất nhiều mẫu điện thoại giá tốt! Bạn hãy vào mục Sản phẩm và sắp xếp theo Giá từ thấp đến cao để xem nhé.';
    }

    if (query.includes('admin') || query.includes('nhân viên') || query.includes('liên hệ')) {
      return 'Bạn có thể gọi hotline 1800 1234 để gặp trực tiếp tổng đài viên hoặc để lại lời nhắn nhé.';
    }

    return 'Dạ mình chưa hiểu rõ ý của bạn lắm. Bạn có thể hỏi về các dòng điện thoại hoặc mã giảm giá hiện có không ạ?';
  };

  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 9999 }}>
      {/* Chat Window */}
      {isOpen && (
        <div style={{
          width: 350, height: 480, background: '#1e293b', borderRadius: 16,
          boxShadow: '0 10px 40px rgba(0,0,0,0.5)', display: 'flex', flexDirection: 'column',
          overflow: 'hidden', border: '1px solid #334155', marginBottom: 16,
          animation: 'chatFadeIn 0.3s ease-out'
        }}>
          {/* Header */}
          <div style={{ background: '#4f46e5', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#fff' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
               <div style={{ width: 32, height: 32, background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🤖</div>
               <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>AI Hỗ trợ Khách hàng</div>
                  <div style={{ fontSize: 11, color: '#c7d2fe', display: 'flex', alignItems: 'center', gap: 4 }}>
                    <span style={{ width: 6, height: 6, background: '#34d399', borderRadius: '50%', display: 'inline-block' }}></span> Trực tuyến
                  </div>
               </div>
             </div>
             <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', fontSize: 20, cursor: 'pointer', padding: '0 4px' }}>✕</button>
          </div>

          {/* Messages */}
          <div style={{ flex: 1, padding: 16, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 12, background: '#0f172a' }}>
            {messages.map(m => (
              <div key={m.id} style={{ display: 'flex', alignItems: 'flex-end', gap: 8, alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start', maxWidth: '85%' }}>
                {m.sender === 'ai' && <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, flexShrink: 0 }}>🤖</div>}
                <div style={{
                  background: m.sender === 'user' ? '#4f46e5' : '#1e293b',
                  color: '#fff', padding: '10px 14px', borderRadius: 16,
                  borderBottomRightRadius: m.sender === 'user' ? 4 : 16,
                  borderBottomLeftRadius: m.sender === 'ai' ? 4 : 16,
                  fontSize: 14, lineHeight: 1.4, border: m.sender === 'ai' ? '1px solid #334155' : 'none'
                }}>
                  {m.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{ padding: 12, borderTop: '1px solid #334155', background: '#1e293b', display: 'flex', gap: 8 }}>
            <input
              type="text"
              placeholder="Nhập câu hỏi tại đây..."
              value={inputText}
              onChange={e => setInputText(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSend()}
              style={{
                flex: 1, background: '#0f172a', border: '1px solid #334155', borderRadius: 20,
                padding: '8px 16px', color: '#fff', outline: 'none', fontSize: 14
              }}
            />
            <button onClick={handleSend} style={{ width: 36, height: 36, background: '#4f46e5', border: 'none', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          style={{
            width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, #4f46e5, #8b5cf6)',
            border: 'none', boxShadow: '0 8px 24px rgba(79, 70, 229, 0.4)', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
            transition: 'transform 0.2s', zIndex: 9999
          }}
          onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
          onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          🤖
        </button>
      )}

      <style>
        {`
          @keyframes chatFadeIn {
            from { opacity: 0; transform: translateY(20px) scale(0.95); }
            to { opacity: 1; transform: translateY(0) scale(1); }
          }
        `}
      </style>
    </div>
  );
}
