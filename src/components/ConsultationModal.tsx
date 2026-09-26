import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle, Sparkles, MessageSquare } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetData?: {
    service?: string;
    propertyType?: string;
    area?: number;
    estimatedCost?: number;
  } | null;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  presetData,
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('الرياض');
  const [service, setService] = useState(presetData?.service || 'تشطيب تسليم مفتاح فاخر');
  const [area, setArea] = useState(presetData?.area ? String(presetData.area) : '');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (presetData) {
      if (presetData.service) setService(presetData.service);
      if (presetData.area) setArea(String(presetData.area));
      if (presetData.propertyType) {
        setNotes(`النوع: ${presetData.propertyType} - التكلفة المقدرة: ${presetData.estimatedCost ? `${presetData.estimatedCost.toLocaleString('ar-SA')} ر.س` : ''}`);
      }
    }
  }, [presetData]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('يرجى إدخال اسم العميل');
      return;
    }
    if (!phone.trim() || phone.length < 9) {
      setErrorMsg('يرجى إدخال رقم جوال صحيح');
      return;
    }

    setErrorMsg('');
    const code = 'QIMMA-' + Math.floor(1000 + Math.random() * 9000);
    setTicketId(code);
    setSubmitted(true);
  };

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `السلام عليكم، حجزت استشارة هندسية لدى القمة للمقاولات والديكور:\n` +
      `- كود الطلب: ${ticketId}\n` +
      `- الاسم: ${name}\n` +
      `- الجوال: ${phone}\n` +
      `- المدينة: ${city}\n` +
      `- الخدمة: ${service}\n` +
      `- المساحة: ${area ? `${area} م²` : 'غير محددة'}`
    );
    window.open(`https://wa.me/966500000000?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-lg bg-stone-950 border border-stone-800 rounded-3xl p-6 sm:p-8 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 left-5 p-2 rounded-full text-stone-400 hover:text-white bg-stone-900 transition-colors"
          aria-label="إغلاق النافذة"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                تم حجز موعد الاستشارة الهندسية
              </h3>
              <p className="text-xs text-stone-300">
                رقم الاستشارة المرجعي: <span className="font-mono font-bold text-amber-400">{ticketId}</span>
              </p>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed">
              سيتواصل معك مهندس معتمد من شركة القمة لتأكيد موعد المعاينة الميدانية أو مناقشة المخططات المعمارية.
            </p>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleWhatsAppForward}
                className="w-full py-3 text-xs sm:text-sm font-bold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>إرسال الطلب عبر واتساب للتنسيق العاجل</span>
              </button>

              <button
                onClick={onClose}
                className="w-full py-2.5 text-xs text-stone-400 hover:text-white transition-colors"
              >
                إغلاق النافذة
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 mb-1">
              <Sparkles className="w-4 h-4" />
              <span>استشارة هندسية أولية مجانية</span>
            </div>

            <h3 className="text-xl font-black text-white mb-2">
              طلب دراسة مشروع ومعاينة
            </h3>

            <p className="text-xs text-stone-400 mb-6">
              يسعدنا التعاون معكم وتقديم رؤية هندسية متكاملة لمشروعكم السكني أو التجاري.
            </p>

            {errorMsg && (
              <div className="p-3 mb-4 bg-red-950/60 border border-red-800 rounded-lg text-xs text-red-300">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="الاسم الكريم"
                  className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 focus:border-amber-400 text-white text-sm focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    رقم الجوال *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="05XXXXXXXX"
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 focus:border-amber-400 text-white text-sm focus:outline-none dir-ltr text-right"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    المدينة
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-stone-900 border border-stone-800 focus:border-amber-400 text-white text-sm focus:outline-none"
                  >
                    <option value="الرياض">الرياض</option>
                    <option value="جدة">جدة</option>
                    <option value="الشرقية">الشرقية</option>
                    <option value="القصيم">القصيم</option>
                    <option value="أخرى">مدينة أخرى</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    الخدمة المطلوبة
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-stone-900 border border-stone-800 focus:border-amber-400 text-white text-xs focus:outline-none"
                  >
                    <option value="تشطيب تسليم مفتاح فاخر">تشطيب تسليم مفتاح</option>
                    <option value="التصميم الداخلي والمعماري 3D">تصميم داخلي 3D</option>
                    <option value="المقاولات العامة والإنشاءات">مقاولات وبناء عظم</option>
                    <option value="ديكورات وتكسيات جدارية">ديكورات وتكسيات</option>
                    <option value="واجهات ولاندسكيب">واجهات ولاندسكيب</option>
                    <option value="ترميم وتأهيل">ترميم وتأهيل</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                    المساحة (م²)
                  </label>
                  <input
                    type="number"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    placeholder="مثال: 400"
                    className="w-full px-4 py-2.5 rounded-xl bg-stone-900 border border-stone-800 focus:border-amber-400 text-white text-sm focus:outline-none font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-300 mb-1.5">
                  ملاحظات أو موقع المشروع
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="ملاحظات تفصيلية..."
                  className="w-full px-4 py-2 rounded-xl bg-stone-900 border border-stone-800 focus:border-amber-400 text-white text-xs focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs sm:text-sm font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 rounded-xl transition-all shadow-lg shadow-amber-500/10 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 rotate-180" />
                <span>تأكيد طلب الاستشارة والمعاينة</span>
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
