import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle, 
  ArrowLeft,
  Sparkles
} from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('الرياض');
  const [service, setService] = useState(initialService || 'تشطيب تسليم مفتاح فاخر');
  const [area, setArea] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('يرجى إدخال اسم العميل');
      return;
    }
    if (!phone.trim() || phone.trim().length < 9) {
      setErrorMsg('يرجى إدخال رقم جوال صحيح للتواصل');
      return;
    }

    setErrorMsg('');
    const randomCode = 'QIMMA-' + Math.floor(1000 + Math.random() * 9000);
    setRefNumber(randomCode);
    setSubmitted(true);
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(
      `السلام عليكم، أرغب في طلب استشارة وعرض سعر من شركة القمة للمقاولات والديكور:\n` +
      `- الاسم: ${name}\n` +
      `- الجوال: ${phone}\n` +
      `- المدينة: ${city}\n` +
      `- نوع الخدمة: ${service}\n` +
      `- المساحة: ${area ? `${area} م²` : 'غير محددة'}\n` +
      `- ملاحظات: ${notes || 'أرغب في زيارة ومعاينة ميدانية للموقع'}`
    );
    window.open(`https://wa.me/966500000000?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setArea('');
    setNotes('');
    setSubmitted(false);
  };

  return (
    <section id="contact" className="py-24 bg-stone-900/40 border-t border-stone-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="text-xs sm:text-sm font-semibold text-amber-400 tracking-wider uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4" />
            <span>نحن في انتظار بدء مشروعك القادم</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight [text-wrap:balance] mb-4">
            تواصل معنا بسهولة واحصل على استشارة هندسية مجانية
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-normal">
            فريقنا الهندسي في شركة القمة جاهز للرد على استفساراتكم وترتيب زيارة معاينة لموقعكم خلال ساعات العمل.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Direct Channels & Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Action Box */}
            <div className="bg-gradient-to-br from-emerald-950/60 to-stone-900 border border-emerald-800/50 p-6 rounded-2xl relative overflow-hidden shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-emerald-500/20 text-emerald-400 rounded-xl">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    المحادثة المباشرة عبر واتساب
                  </h3>
                  <p className="text-xs text-stone-300 leading-relaxed mb-4">
                    تواصل فوراً مع أحد مهندسينا لإرسال المخططات أو الاستفسار السريع.
                  </p>
                  <a
                    href="https://wa.me/966500000000?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%D9%8A%D9%83%D9%85%20%D9%88%D8%B1%D8%AD%D9%85%D8%A9%20%D8%A7%D9%84%D9%84%D9%87%D8%8C%20%D8%A3%D9%88%D8%AF%20%D8%A7%D9%84%D8%A7%D8%B3%D8%AA%D9%81%D8%B3%D8%A7%D8%B1%20%D8%B9%D9%86%20%D8%AE%D8%AF%D9%85%D8%A7%D8%AA%20%D8%A7%D9%84%D9%82%D9%85%D8%A9%20%D9%84%D9%84%D9%85%D9%82%D8%A7%D9%88%D9%84%D8%A7%D8%AA%20%D9%88%D8%A7%D9%84%D8%AF%D9%8A%D9%83%D9%88%D8%B1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all"
                  >
                    <span>فتح محادثة واتساب الآن</span>
                    <ArrowLeft className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Phone Call Card */}
            <div className="bg-stone-950 border border-stone-800 p-6 rounded-2xl">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-amber-400/10 text-amber-400 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs text-stone-400">الرقم الموحد المباشر</div>
                  <a
                    href="tel:+966500000000"
                    className="text-lg font-black text-white hover:text-amber-400 transition-colors font-mono tabular-nums dir-ltr block text-right"
                  >
                    +966 50 000 0000
                  </a>
                  <div className="text-xs text-stone-400 mt-0.5">
                    الخط الساخن لقسم المشاريع والتعاقدات
                  </div>
                </div>
              </div>
            </div>

            {/* Office Location & Working Hours */}
            <div className="bg-stone-950 border border-stone-800 p-6 rounded-2xl space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-stone-900 text-stone-400 rounded-xl">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-stone-400">المقر الرئيسي</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    المملكة العربية السعودية، الرياض
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5 leading-relaxed">
                    طريق الملك فهد - تقاطع أنس بن مالك - برج القمة التنفيذي، الدور الرابع
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-stone-900 flex items-start gap-4">
                <div className="p-3 bg-stone-900 text-stone-400 rounded-xl">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-xs text-stone-400">ساعات العمل الرسمية</div>
                  <div className="text-sm font-bold text-white mt-0.5">
                    السبت – الخميس: 8:00 ص – 8:00 م
                  </div>
                  <div className="text-xs text-stone-400 mt-0.5">
                    فريق الدعم الفني والميداني متاح على مدار الساعة للحالات الطارئة
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Interactive Request Form (7 Cols) */}
          <div className="lg:col-span-7 bg-stone-950 border border-stone-800 p-6 sm:p-10 rounded-2xl shadow-2xl relative">
            
            {submitted ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-white mb-2">
                    تم استلام طلبكم بنجاح!
                  </h3>
                  <p className="text-sm text-stone-300 max-w-md mx-auto leading-relaxed">
                    شكراً لتواصلكم مع شركة القمة للمقاولات والديكور. رقم طلبك المرجعي هو:
                  </p>
                  <div className="mt-3 inline-block px-5 py-2 rounded-lg bg-stone-900 border border-amber-500/40 font-mono font-bold text-lg text-amber-400">
                    {refNumber}
                  </div>
                </div>

                <p className="text-xs text-stone-400 max-w-sm mx-auto">
                  سيقوم أحد مهندسينا المختصين بالتواصل معكم هاتفياً أو عبر الواتساب في غضون ساعتين خلال أوقات العمل لترتيب المعاينة.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                  <button
                    onClick={handleSendViaWhatsApp}
                    className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-bold text-stone-950 bg-emerald-400 hover:bg-emerald-300 rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>متابعة الطلب عبر الواتساب فوراً</span>
                  </button>

                  <button
                    onClick={handleReset}
                    className="w-full sm:w-auto px-6 py-3 text-xs sm:text-sm font-semibold text-stone-300 hover:text-white bg-stone-900 border border-stone-800 rounded-lg transition-all"
                  >
                    تقديم طلب مشروع آخر
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    طلب عرض سعر ومعاينة هندسية
                  </h3>
                  <p className="text-xs text-stone-400 mb-6">
                    املأ البيانات وسيقوم مستشارنا الهندسي بدراسة المشروع وتقديم عرض تفصيلي مجاني.
                  </p>
                </div>

                {errorMsg && (
                  <div className="p-3 bg-red-950/60 border border-red-800/80 rounded-lg text-xs text-red-300">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-2">
                      الاسم الكريم *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="مثال: صالح العبدالله"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900/90 border border-stone-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-2">
                      رقم الجوال *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="05XXXXXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900/90 border border-stone-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors dir-ltr text-right"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-2">
                      المدينة / المنطقة
                    </label>
                    <select
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-stone-900/90 border border-stone-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                    >
                      <option value="الرياض">الرياض</option>
                      <option value="جدة ومكة">جدة ومكة المكرمة</option>
                      <option value="المنطقة الشرقية (الدمام/الخبر)">المنطقة الشرقية (الدمام / الخبر)</option>
                      <option value="القصيم">القصيم</option>
                      <option value="المدينة المنورة">المدينة المنورة</option>
                      <option value="مدينة أخرى">مدينة أخرى بالمملكة</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-300 mb-2">
                      المساحة التقريبية (م²)
                    </label>
                    <input
                      type="number"
                      value={area}
                      onChange={(e) => setArea(e.target.value)}
                      placeholder="مثال: 450"
                      className="w-full px-4 py-3 rounded-xl bg-stone-900/90 border border-stone-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-2">
                    نوع الخدمة المطلوبة
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl bg-stone-900/90 border border-stone-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors"
                  >
                    <option value="تشطيب تسليم مفتاح فاخر">تشطيبات فاخرة وتسليم مفتاح (Turnkey)</option>
                    <option value="التصميم الداخلي والمعماري 3D">التصميم الداخلي والمعماري 3D والـ BOQ</option>
                    <option value="المقاولات العامة والإنشاءات (عظم)">المقاولات العامة والإنشاءات والهيكل العظم</option>
                    <option value="ديكورات وتكسيات جدارية وأسقف">ديكورات وتكسيات جدارية ورخام وأسقف جبس</option>
                    <option value="واجهات خارجية ولاندسكيب ومسابح">واجهات خارجية حجر/ترافرتين ولاندسكيب</option>
                    <option value="ترميم وتأهيل شامل للمبنى">ترميم وتأهيل وتحديث شامل للفيلا أو المبنى</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-300 mb-2">
                    تفاصيل أو متطلبات خاصة (اختياري)
                  </label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="اكتب نبذة عن موقع العقار، حالة المبنى الحالية، أو الموعد المرغوب لبدء الأعمال..."
                    className="w-full px-4 py-3 rounded-xl bg-stone-900/90 border border-stone-800 focus:border-amber-400 focus:outline-none text-white text-sm transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 text-sm font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-xl shadow-amber-500/10 hover:shadow-amber-500/25 transition-all duration-200 active:scale-98 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 rotate-180" />
                    <span>إرسال طلب العرض والاستشارة مجاناً</span>
                  </button>
                  <p className="text-center text-[11px] text-stone-500 mt-3">
                    بياناتك محمية تماماً ولن يتم مشاركتها مع أي طرف ثالث.
                  </p>
                </div>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
