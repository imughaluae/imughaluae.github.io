import React, { useState } from 'react';
import { 
  Fan, Moon, Sun, Milestone, Settings, Award, 
  Mail, Phone, MapPin, CheckCircle, GraduationCap,
  ChevronRight, ArrowRight, Gauge
} from 'lucide-react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState('DEBRIEF');

  const toggleTheme = () => setDarkMode(!darkMode);

  const stats = [
    { label: 'Service Years', value: '15+', icon: <Milestone className="w-5 h-5" /> },
    { label: 'Primary Platform', value: 'C-130', icon: <Settings className="w-5 h-5" /> },
    { label: 'Current Unit', value: 'SAMI', icon: <Award className="w-5 h-5" /> },
    { label: 'Specialized Courses', value: '08+', icon: <CheckCircle className="w-5 h-5" /> },
  ];

  const experience = [
    {
      period: '2024 — PRESENT',
      role: 'Senior Technician: Engine & Propeller',
      company: 'Saudi Arabian Military Industry (SAMI)',
      details: [
        'Organizational Level Maintenance, Repair, and Overhauling of Engines and Propellers.',
        'Depot Level Maintenance of 54H60-91/117 Propellers including disassembly, inspection, and functional testing.',
        'Troubleshooting I & O level defects and rectification of Propeller Assemblies.',
        'Propeller Assembly Servicing Rigging/Adjustment and operation of related test equipment.'
      ],
      current: true
    },
    {
      period: '2021 — 2024',
      role: 'General Maintenance Technician (V.I.P Medical Aircraft)',
      company: 'GDC Middle East Aerospace Engineering',
      details: [
        'Organizational & Shop Level Maintenance of C-130H Aircraft.',
        '1st & 2nd Line Maintenance operations.',
        'Removal and Installation of Propeller & Engine units.',
        'Specialized removal and installation of QEC Gear Box & turbine assemblies.'
      ]
    },
    {
      period: '2016 — 2021',
      role: 'A&P Mechanic (C-130)',
      company: 'Saudi Aerospace Engineering Industries (SAEI)',
      details: [
        'Organizational Level & Shop Level Maintenance Of C-130H Aircraft.',
        'Performed Programmed Depot Maintenance (PDM).',
        'Expertise in QEC Gear Box and turbine assembly replacement.',
        'Managed 1st & 2nd line flight line maintenance.'
      ]
    },
    {
      period: '2009 — 2016',
      role: 'Engine & Propeller Technician (AMOF)',
      company: 'Pakistan Aeronautical Complex (PAC) Kamra',
      details: [
        'Periodic (ISO) Inspection of Engines and Bore Scope Inspection of Hot Sections.',
        'Static and dynamic balancing of engine parts.',
        'Complete assembly of compressor, turbine, and RGB units.',
        'Documentation and updating of USAF Technical Orders.'
      ]
    }
  ];

  const skills = [
    { name: 'T-56-A-15/D22 Engine Overhaul', level: 100 },
    { name: '54H60 Propeller Systems', level: 98 },
    { name: 'Static & Dynamic Balancing', level: 95 },
    { name: 'Borescope Inspection', level: 90 },
    { name: 'QEC Gear Box Maintenance', level: 92 }
  ];

  return (
    <div className={`${darkMode ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-900'} min-h-screen transition-colors duration-500 font-sans`}>
      {/* HUD Navigation */}
      <nav className={`fixed top-0 w-full z-50 backdrop-blur-md border-b ${darkMode ? 'bg-slate-950/80 border-slate-800' : 'bg-white/80 border-slate-200'} px-6 py-4 flex justify-between items-center`}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white animate-[spin_4s_linear_infinite] shadow-lg shadow-sky-500/40">
            <Fan className="w-6 h-6" />
          </div>
          <span className="font-bold text-xl tracking-tighter uppercase hidden sm:block" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            Asim Yaqoob
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-8 text-xs font-bold tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            {['DEBRIEF', 'FLIGHT LOG', 'SYSTEMS', 'COMMS'].map(item => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '')}`}
                className="hover:text-sky-500 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <button 
            onClick={toggleTheme} 
            className={`p-2 rounded-full transition-colors ${darkMode ? 'hover:bg-slate-800 text-yellow-400' : 'hover:bg-slate-200 text-slate-600'}`}
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="debrief" className="relative h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Radar/Grid Effect Background */}
        <div className={`absolute inset-0 opacity-[0.03] pointer-events-none ${darkMode ? 'invert-0' : 'invert'}`}
             style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 0)', backgroundSize: '40px 40px' }}>
        </div>
        
        {/* Silhouette SVG */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <svg viewBox="0 0 800 400" className={`w-full max-w-5xl fill-current ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
            <path d="M50,200 L300,190 L380,50 L420,50 L500,190 L750,200 L500,210 L420,350 L380,350 L300,210 Z" />
          </svg>
        </div>

        <div className="container mx-auto px-6 z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-500 text-xs font-bold tracking-widest mb-6 animate-pulse" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            <div className="w-2 h-2 rounded-full bg-sky-500"></div>
            ACTIVE SERVICE: SAMI AEROSPACE
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight leading-none" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            MUHAMMAD<br /><span className="text-sky-500">ASIM YAQOOB</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-70 mb-10 font-light leading-relaxed">
            Expert Propeller & Engine Mechanic with 15+ years of meritorious service across Pakistan Air Force, SAEI, and SAMI. Master of the C-130 Hercules platform.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#comms" className="px-10 py-4 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-sm transition-all transform hover:-translate-y-1 shadow-xl shadow-sky-600/20" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              CONTACT CONTROL
            </a>
            <button onClick={() => window.print()} className="px-10 py-4 border-2 border-sky-600 text-sky-600 font-bold rounded-sm hover:bg-sky-600/10 transition-all" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              LOGBOOK PDF
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-current rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Quick Stats Grid */}
      <div className="container mx-auto px-6 -mt-16 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className={`p-6 rounded-xl border-b-4 border-sky-500 transition-all hover:scale-105 shadow-2xl ${darkMode ? 'bg-slate-900/80 border-slate-800' : 'bg-white border-slate-100'}`}>
              <div className="text-sky-500 mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold" style={{ fontFamily: 'Orbitron, sans-serif' }}>{stat.value}</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-50 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Flight Log (Experience) */}
      <main className="container mx-auto px-6 py-32">
        <section id="flightlog" className="mb-40">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>FLIGHT LOG</h2>
            <div className="h-[2px] flex-grow bg-sky-500/20"></div>
          </div>

          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-sky-500 before:to-transparent">
            {experience.map((job, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-sky-500 bg-slate-950 text-sky-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <Gauge className="w-5 h-5" />
                </div>
                {/* Content Card */}
                <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl border transition-all ${darkMode ? 'bg-slate-900/50 border-slate-800 hover:border-sky-500/50' : 'bg-white border-slate-200 hover:border-sky-500/50'} shadow-sm`}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <time className="text-xs font-bold text-sky-500 tracking-widest" style={{ fontFamily: 'Orbitron, sans-serif' }}>{job.period}</time>
                    {job.current && <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500 text-white font-bold">CURRENT MISSION</span>}
                  </div>
                  <h3 className="text-xl font-bold mb-1">{job.role}</h3>
                  <p className="text-sky-500 font-semibold mb-4 text-sm">{job.company}</p>
                  <ul className="space-y-2">
                    {job.details.map((detail, k) => (
                      <li key={k} className="text-sm opacity-70 flex gap-2">
                        <ChevronRight className="w-4 h-4 shrink-0 text-sky-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Systems */}
        <section id="systems" className="mb-40 grid lg:grid-cols-2 gap-20">
          <div>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>SYSTEMS MASTERY</h2>
              <div className="h-[2px] flex-grow bg-sky-500/20"></div>
            </div>
            <div className="space-y-8">
              {skills.map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-sm font-bold tracking-wider">{skill.name}</span>
                    <span className="text-xs text-sky-500 font-bold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-sky-500/10 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-sky-500 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-3xl font-bold tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>CERTIFICATIONS</h2>
              <div className="h-[2px] flex-grow bg-sky-500/20"></div>
            </div>
            <div className="grid gap-4">
              {[
                { title: 'SKF Bearing Technology', sub: 'Precision Industrial Standards' },
                { title: 'T-56-A-15/D22 Engine Overhaul', sub: 'Master Certification' },
                { title: '54H60-91/117 Propeller Overhaul', sub: 'Depot Level Mastery' },
                { title: 'Static and Dynamic Balancing', sub: 'Specialized Component Balancing' },
                { title: 'DAE Mechanical Technology', sub: '3-Year Technical Diploma' }
              ].map((cert, i) => (
                <div key={i} className={`p-4 rounded-lg flex items-center gap-4 border ${darkMode ? 'bg-slate-900/30 border-slate-800' : 'bg-white border-slate-100'}`}>
                  <div className="w-12 h-12 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-500">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-sm">{cert.title}</div>
                    <div className="text-xs opacity-50">{cert.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comms (Contact) */}
        <section id="comms" className={`rounded-3xl p-12 md:p-20 text-center relative overflow-hidden border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white border-slate-200'}`}>
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <Fan className="w-32 h-32 animate-[spin_10s_linear_infinite]" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            ESTABLISH <span className="text-sky-500">COMMS</span>
          </h2>
          <p className="max-w-xl mx-auto opacity-60 mb-16 text-lg">
            Ready for global deployment and high-stakes aerospace maintenance operations. Reach out via the channels below.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <a href="mailto:asimt56@gmail.com" className="group">
              <div className="w-16 h-16 rounded-2xl bg-sky-500 text-white flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110 shadow-lg shadow-sky-500/30">
                <Mail className="w-8 h-8" />
              </div>
              <div className="font-bold uppercase text-xs tracking-[0.2em] opacity-40 mb-1">Email Channel</div>
              <div className="text-lg font-bold">asimt56@gmail.com</div>
            </a>
            <a href="tel:+966550820339" className="group">
              <div className="w-16 h-16 rounded-2xl bg-sky-500 text-white flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110 shadow-lg shadow-sky-500/30">
                <Phone className="w-8 h-8" />
              </div>
              <div className="font-bold uppercase text-xs tracking-[0.2em] opacity-40 mb-1">Secure Line</div>
              <div className="text-lg font-bold">+966 550820339</div>
            </a>
            <div className="group">
              <div className="w-16 h-16 rounded-2xl bg-sky-500 text-white flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110 shadow-lg shadow-sky-500/30">
                <MapPin className="w-8 h-8" />
              </div>
              <div className="font-bold uppercase text-xs tracking-[0.2em] opacity-40 mb-1">Stationed At</div>
              <div className="text-lg font-bold">Jeddah, Saudi Arabia</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 py-8 border-t border-sky-500/10">
             {['ARABIC - FLUENT', 'ENGLISH - PROFICIENT', 'URDU - NATIVE'].map(lang => (
               <div key={lang} className="flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/5 text-sky-500 text-[10px] font-bold tracking-widest border border-sky-500/20" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                 <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse"></div>
                 {lang}
               </div>
             ))}
          </div>
        </section>
      </main>

      <footer className="pb-20 pt-10 text-center">
        <div className="opacity-30 text-[10px] font-bold tracking-[0.4em] uppercase" style={{ fontFamily: 'Orbitron, sans-serif' }}>
          &copy; {new Date().getFullYear()} MUHAMMAD ASIM YAQOOB | AEROSPACE PROPULSION LOG
        </div>
      </footer>
    </div>
  );
};

export default App;