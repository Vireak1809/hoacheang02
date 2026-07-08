// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    {
      icon: 'plumbing',
      title: 'ជាងទឹក',
      desc: 'ចាប់ពីការជួសជុលទុយោដែលលេច រហូតដល់ការដំឡើងប្រព័ន្ធទឹកស្អាត',
      price: 'ចាប់ពី $15.00',
      link: '/service/plumber',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKx4NROYSVO4uXWwTZHUD6w0MN1v5vs5AESVRw6I1WTZ5ReiVH4a0fTJnFttRbSV1QxFhbW-9O3jYfmQpp_rov5KK05EUurxhgyTAq3TBecbOBJzFhwycdS9CGNIYKYRWh1Z-ngLQgPtl5RKYSZZBg5Ty_V-14yL48PXiHzDDMmt9KKJnUJoYzNq5htUpxVVj0CJQ4DDw1ocmQYkha5wc4EGgXqIB0tmKBOavt76n2YoSZbvmvRy78ddG4ZrXglLEAwi_Gil9fqko'
    },
    {
      icon: 'electrical_services',
      title: 'ជាងភ្លើង',
      desc: 'ជួសជុលដាច់ចរន្តអគ្គិសនី ដំឡើងអំពូលភ្លើង និងត្រួតពិនិត្យសុវត្ថិភាព',
      price: 'ចាប់ពី $20.00',
      link: '/service/electrician',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCkdpQhoIed7IJMUpTCZAVPznpxaGLZzPgUEaZOodb4aniG1tTPtzMGygzxib6ymjSVlcG3meQyZJg--qhuX8cYc12vjgPMqd9Yo-4VcCKSf30ppvfdGsk1How538fpni312Q9P_iAQ2GPOfi-6V5Hk-aAA3PDVwLWe_6ocQV7Mc0sSLxhVRhydcK4y7K-wW0S1OWqaDC33xk7Fi8rTX_CNOcZN0BWJJRr877Uf7DpOf-cLnnJRWGwSZ2i3jEbT6945EUowHok9loM'
    },
    {
      icon: 'ac_unit',
      title: 'ម៉ាស៊ីនត្រជាក់',
      desc: 'លាងសម្អាត ជួសជុល បញ្ចូលហ្គាស និងដំឡើងម៉ាស៊ីនត្រជាក់',
      price: 'ចាប់ពី $10.00',
      link: '/service/ac',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD96AgreBo-hrHa1y71sOTY-tf4pRhlA7p-q4DBZZsBcUcW5ni5NFIve8zgktzV5_7N9iAhxvyv8VHTptvm60nT-Ez8uLR4UEX07_RY0nLdwSD9pP3KmDjYpVwfePkSMqeZIPNdQN27zpVM4kfkm9mafJzC0QJE5w_1YIa8Zfxz1BOv4MOJatIOjZQC4RQvHPl8ELV4mB0ib_gb0OO9pzjPKdduB84l6Cscur-1KIAVbp4sM4hQwIVNUv9WFf8lD257j1fMIpiJXuc'
    }
  ];

  return (
    <div className="animate-enter">
      {/* Hero */}
      <section className="relative w-full min-h-[500px] md:min-h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: 'url(https://lh3.googleusercontent.com/aida-public/AB6AXuC5EPZhnWxYaQc1dEEV-v3z9yN9-87s2psdyTRcyEV1bEjPF42-jTV9Xk6VdfshoIZVdF5DmcstWjD8ahUGiB81CtKQ6EQKWitBYWviAZlscbWNWw-VWerlo9oI6HEdcRa2Jnlf9M1WHGE6kK9ghuwDpo6BbRVWfY6uZWVpYP7plOWsSfKvO27Yc18hgkWdpYpr4fb2oEnH0uC2cPaVqHGlQnEpfSGw298KKEbXsO3JWH52TYGRkgaxrwR3TebOGypOySlJwiHP6v8)'
        }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent"></div>
        <div className="relative container-custom h-full flex flex-col justify-center py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-2xl leading-tight mb-4">
            ហៅជាងជំនាញ បានយ៉ាងងាយ និងរហ័ស
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl mb-6">
            Platform សម្រាប់ផ្គូផ្គងម្ចាស់ផ្ទះជាមួយជាងជំនាញដែលមានទំនុកចិត្តខ្ពស់។
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/register" className="btn-secondary text-lg px-8 py-4">
              ចាប់ផ្ដើមប្រើប្រាស់
            </Link>
            <Link to="/services" className="glass-card text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition">
              មើលសេវាកម្ម
            </Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 md:py-16 bg-surface-container-low">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-3">សេវាកម្មពេញនិយម</h2>
          <p className="text-center text-on-surface-variant mb-8">យើងមានជាងជំនាញជាច្រើនកំពុងរង់ចាំបម្រើលោកអ្នក</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((svc, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-md border border-outline-variant/30 card-hover cursor-pointer"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={svc.image}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {svc.title}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-primary mb-1">{svc.title}</h3>
                  <p className="text-sm text-on-surface-variant mb-3 line-clamp-2">{svc.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-bold">{svc.price}</span>
                    <Link
                      to={svc.link}
                      className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition"
                    >
                      មើលលម្អិត
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8">របៀបដំណើរការ</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6">
            {[
              { num: '១', label: 'ចូលកម្មវិធី', sub: 'បើកកម្មវិធី Hao Chang' },
              { num: '២', label: 'ជ្រើសសេវា', sub: 'ជ្រើសរើសប្រភេទការងារ' },
              { num: '៣', label: 'ហៅជាង', sub: 'ជ្រើសរើសជាងដែលចូលចិត្ត' },
              { num: '៤', label: 'ជួសជុល', sub: 'ជាងធ្វើការងារយ៉ាងជំនាញ' },
              { num: '៥', label: 'ទូទាត់', sub: 'ទទួល E-Invoice & វាយតម្លៃ' }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="step-number mb-3">{step.num}</div>
                <h4 className="text-sm md:text-base font-bold text-primary">{step.label}</h4>
                <p className="text-xs text-on-surface-variant mt-1 hidden sm:block">{step.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-8 md:py-12">
        <div className="container-custom">
          <div className="bg-secondary rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="text-white text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">ត្រូវការជាងបន្ទាន់?</h2>
              <p className="text-white/90 max-w-lg">
                យើងមានសេវាកម្មជួសជុលបន្ទាន់ ២៤/៧។
              </p>
            </div>
            <Link to="/login" className="bg-white text-secondary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-secondary-fixed transition shadow-lg">
              <span className="material-symbols-outlined">bolt</span>
              ចូលប្រើប្រាស់ ដើម្បីហៅជាង
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">ត្រៀមរកជាងហើយឬនៅ?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-6">
            ចូលរួមជាមួយគ្រួសារជាងរាប់ពាន់នាក់ និងម្ចាស់ផ្ទះរាប់ម៉ឺននាក់ក្នុងប្រទេសកម្ពុជា។
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/register" className="bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:scale-105 transition shadow-lg">
              បង្កើតគណនី
            </Link>
            <Link to="/login" className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition">
              ចូលប្រើប្រាស់
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;