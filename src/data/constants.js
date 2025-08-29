import Html5 from '../images/skills/html5.svg';
import Css3 from '../images/skills/css3.svg';
import Php from '../images/skills/php.svg';
import JavaScript from '../images/skills/javascript.svg';
import Python from '../images/skills/python.svg';
import Golang from '../images/skills/golang.svg';
import Typescript from '../images/skills/typescript.svg';
import Bootstrap from '../images/skills/bootstrap.svg';
import Tailwind from '../images/skills/tailwindcss.svg';
import Laravel from '../images/skills/laravel.svg';
import Express from '../images/skills/express.svg';
import React from '../images/skills/react.svg';
import Codeigniter from '../images/skills/codeigniter.svg';
import Postgresql from '../images/skills/postgresql.svg';
import Xampp from '../images/skills/xampp.svg';
import Kafka from '../images/skills/kafka.svg';
import Aerotrans from '../images/experiences/aerotrans.jpg';
import Scm from '../images/experiences/scm.png';
import Elearning from '../images/projects/e-learning.png';
import Jasanya from '../images/projects/jasanya.png';
import Mahesa from '../images/projects/mahesa.png';
import Nphlan from '../images/projects/nphlan.png';
import Nutri from '../images/projects/nutri.png';
import Outlet from '../images/projects/outlet.png';
import Wastra from '../images/projects/wastra.png';
import DueIt from '../images/projects/due-it.png';

export const Bio = {
    name: 'Rahmat Fauzi',
    roles: ['Full Stack Developer', 'Freelancer'],
    description:'Saya adalah lulusan Program Studi Sistem Informasi dari Universitas Bina Sarana Informatika yang memiliki minat dan keahlian di bidang programming, khususnya dalam pengembangan web. Saya memiliki pengalaman magang sebagai Backend Developer di PT Surya Citra Media selama 5 bulan serta pengalaman freelance sebagai Fullstack Web Developer di Jasanya.tech selama 3 tahun. Saya terbiasa bekerja dengan tim maupun secara mandiri, dan terus berusaha mengembangkan kemampuan teknis serta soft skill dalam dunia teknologi informasi.',
    github: 'https://github.com/CROWNIX',
    resume: 'https://drive.google.com/file/d/158kqn0mn6i3gIj6gIbZwScQmleJO1eZ3/view?usp=sharing',
    linkedin: 'https://www.linkedin.com/in/rahmat-fauzi-widianto/',
    insta: 'https://www.instagram.com/rahmatfauzi.w/',
};

export const skills = [
    {
        title: 'Language',
        skills: [
            {
                name: 'HTML',
                image: Html5,
            },
            {
                name: 'CSS',
                image: Css3,
            },
            {
                name: 'Javscript',
                image: JavaScript,
            },
            {
                name: 'PHP',
                image: Php,
            },
            {
                name: 'Python',
                image: Python,
            },
            {
                name: 'Golang',
                image: Golang,
            },
            {
                name: 'Typescript',
                image: Typescript,
            },
        ],
    },
    {
        title: 'Framework',
        skills: [
            {
                name: 'Bootstrap',
                image: Bootstrap,
            },
            {
                name: 'Tailwind',
                image: Tailwind,
            },
            {
                name: 'Laravel',
                image: Laravel,
            },
            {
                name: 'Express',
                image: Express,
            },
            {
                name: 'React',
                image: React,
            },
            {
                name: 'Codeigniter',
                image: Codeigniter,
            },
        ],
    },
    {
        title: 'Tools',
        skills: [
            {
                name: 'Postgresql',
                image: Postgresql,
            },
            {
                name: 'Xampp',
                image: Xampp,
            },
            {
                name: 'Kafka',
                image: Kafka,
            },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        img: Aerotrans,
        role: 'It Support Intern',
        company: 'PT. Aerotrans Services Indonesia',
        date: 'February 2019 - April 2019',
        skills: ['Mengatasi Troubleshoot User'],
    },
    {
        id: 1,
        img: Scm,
        role: 'Backend Developer Intern',
        company: 'PT. Surya Citra Media, Tbk',
        date: 'August 2023 - December 2023',
        skills: [
            'Menangani pengembangan dan pemeliharaan 3 website internal: e-career, e-patroll, dan hrspace.',
            'Memperbaiki bug dan masalah yang diidentifikasi oleh tim QA.',
            'Mengembangkan fitur baru dan melakukan penyesuaian pada modul yang sudah ada.',
            'Meningkatkan performa website serta menerapkan prinsip Clean Architecture untuk kode yang lebih terstruktur.',
            'Bekerja dengan Laravel dan Vue.js, menggunakan REST API maupun pendekatan tanpa API sesuai kebutuhan sistem.',
            'Mengelola basis data menggunakan MySQL dan PostgreSQL.'
        ],
    },
];

export const education = [
    {
        id: 0,
        img: 'https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/Kiit.jpeg?alt=media&token=3839d520-c59d-4341-ad8f-0980c98de4dd',
        school: 'Kalinga Institute of Industrial Technology, Bhubaneswar',
        date: 'Sep 2020 - Sep 2024',
        grade: '3.90/4.00',
        desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Kalinga Institute of Industrial Technology, Bhubaneswar. I have completed 4 semesters and have a CGPA of 8.71. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a member of the Google Developers Student Club (GDSC) at KIIT, where I am learning and working on exciting projects with a team of talented developers.",
        degree: 'Bachelor of Technology - BTech, Computer Science and Engineering',
    },
];

export const projects = [
    {
        id: 0,
        title: 'Nutri COunter',
        description: "Website responsive untuk menghitung kebutuhan nutrisi harian berdasarkan input user (usia, berat badan, aktivitas). Dikerjakan sebagai freelance project untuk client internasional (Korea)",
        image: Nutri,
        tags: ['Laravel', 'Mysql'],
        category: 'web app',
        github: 'https://github.com/jasanya-tech/Nutri-Counter',
        webapp: 'https://nutricounter.site/',
    },
    {
        id: 1,
        title: 'Wastra',
        description: "Website manajemen bisnis untuk perusahaan Wastra yang bergerak di bidang penyediaan dan pemasangan interior (curtain, vitrage, rail). Sistem ini membantu perusahaan dalam mengelola proses bisnis mulai dari penawaran harga, pemesanan barang, hingga instalasi ke client.",
        image: Wastra,
        tags: ['Laravel', 'Mysql'],
        category: 'web app',
        github: 'https://github.com/jasanya-tech/Wastra-Project',
        webapp: 'https://wastratech.com/',
    },
    {
        id: 2,
        title: 'DueIt - Jasanya Aturuang',
        description: "Aplikasi manajemen keuangan berbasis web yang dikembangkan oleh tim sebagai project pembelajaran dengan pendekatan microservice. Sistem ini digunakan untuk mengelola pengeluaran harian dan bulanan, kategori pengeluaran, serta menyajikan laporan anggaran.",
        image: DueIt,
        tags: ['Golang', 'Kafka', 'PostgreSQL', 'Redis', 'Microservice Architecture'],
        category: 'web app',
        github: 'https://github.com/DueIt-Jasanya-Aturuang',
        webapp: 'https://github.com/DueIt-Jasanya-Aturuang',
    },
    {
        id: 3,
        title: 'Event Organizer',
        description: "website company profile portofolio perusahaan PT. Kreasindo Jaya Mahesa. Sebuah perusahaan yang bergerak dibidang jasa penyedia layanan acara atau disebut event organizer",
        image: Mahesa,
        tags: ['Laravel', 'Mysql'],
        category: 'web app',
        github: 'https://github.com/jasanya-tech/web-eventorganizer',
        webapp: 'http://mahesacreative.com/',
    },
    {
        id: 4,
        title: 'NPHLAN',
        description: "website company profile portofolio perusahaan PT. Kreasindo Jaya Mahesa. Sebuah perusahaan yang bergerak dibidang jasa penyedia layanan acara atau disebut event organizer",
        image: Nphlan,
        tags: ['Laravel', 'Mysql'],
        category: 'web app',
        github: 'https://github.com/jasanya-tech/web-eventorganizer',
        webapp: 'http://mahesacreative.com/',
    },
    {
        id: 5,
        title: 'Jasanya Tech',
        description: "Website company profile sekaligus platform freelance untuk mempertemukan freelancer dengan client, mencakup layanan desain dan pengembangan aplikasi.",
        image: Jasanya,
        tags: ['Laravel', 'Mysql'],
        category: 'web app',
        github: 'https://github.com/jasanya-tech/web-eventorganizer',
        webapp: 'https://jasanyatech.id/',
    },
    {
        id: 6,
        title: 'E-learning',
        description: "Sistem informasi e-learning berbasis web untuk mengelola materi, tugas, absensi, penilaian, dan generate raport siswa.",
        image: Elearning,
        tags: ['Laravel', 'Mysql'],
        category: 'web app',
        github: 'https://github.com/jasanya-tech/web-eventorganizer',
        webapp: 'https://jasanyatech.id/',
    },
    {
        id: 7,
        title: 'Outlet Pintar',
        description: "Website pemesanan makanan dan minuman untuk café berbasis QR Code. User dapat memindai QR Code yang tersedia di meja untuk menampilkan menu digital, melakukan pemesanan, hingga pembayaran online melalui integrasi Midtrans. Sistem ini juga dilengkapi dengan dashboard admin untuk mengelola menu, transaksi, dan laporan penjualan",
        image: Outlet,
        tags: ['Golang', 'Laravel Filament', 'Vue JS', 'Mysql', 'Midtrans'],
        category: 'web app',
        github: 'https://github.com/jasanya-tech/web-eventorganizer',
        webapp: 'https://jasanyatech.id/',
    },
];

export const TimeLineData = [
    { year: 2017, text: 'Started my journey' },
    { year: 2018, text: 'Worked as a freelance developer' },
    { year: 2019, text: 'Founded JavaScript Mastery' },
    { year: 2020, text: 'Shared my projects with the world' },
    { year: 2021, text: 'Started my own platform' },
];
