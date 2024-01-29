export const getOrg = (orgCode: string) => {
  return (
    ORG_CODES[orgCode as keyof typeof ORG_CODES] ?? {
      faculty: "UNKNOWN",
      study_program: "UNKNOWN",
      educational_program: "UNKNOWN",
    }
  );
};

const ORG_CODES = {
  "04.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Pendidikan Dokter (Medical Science)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "05.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program:
      "Pendidikan Dokter Kelas Khusus Internasional (Medical Science)",
    educational_program:
      "S1 Kls Internasional (Intl. Class Undergraduate Program)",
  },
  "07.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Biomedik (Biomedical Sciences)",
    educational_program: "S2 (Graduate Program)",
  },
  "08.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Gizi (Nutrition)",
    educational_program: "S2 (Graduate Program)",
  },
  "09.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Kedokteran Kerja (Occupational Medicine)",
    educational_program: "S2 (Graduate Program)",
  },
  "40.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Pendidikan Kedokteran (Medical Education)",
    educational_program: "S2 (Graduate Program)",
  },
  "10.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Biomedik (Biomedical Sciences)",
    educational_program: "S3 (Doctoral Program)",
  },
  "11.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Gizi (Nutrition)",
    educational_program: "S3 (Doctoral Program)",
  },
  "12.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Kedokteran (Medical Science)",
    educational_program: "S3 (Doctoral Program)",
  },
  "01.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Perumahsakitan (Hospital Management)",
    educational_program: "D3 (Diploma III)",
  },
  "02.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Rehabilitasi Medik ()",
    educational_program: "D3 (Diploma III)",
  },
  "37.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Fisioterapi (Physiotherapy)",
    educational_program: "D3 (Diploma III)",
  },
  "38.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Okupasi Terapi (Occupational Therapy)",
    educational_program: "D3 (Diploma III)",
  },
  "06.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Profesi Dokter (Medical Doctor)",
    educational_program: "Profesi (Profession Program)",
  },
  "13.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Anestesiologi (Anesthesiology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "14.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Bedah (Surgery)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "15.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Penyakit Dalam (Internal Medicine)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "16.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Kesehatan Anak (Pediatrics)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "17.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Obstetri & Ginekologi (Obstetrics & Gynecology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "18.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Penyakit Saraf (Neurology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "19.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Kedokteran Jiwa (Psychiatry)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "20.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Kesehatan Mata (Ophthalmology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "21.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Kesehatan Kulit & Kelamin (Dermato & Venereology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "22.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program:
      "Ilmu Penyakit Telinga, Hidung & Tenggorok (Otorhinolaryngology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "23.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program:
      "Ilmu Penyakit Jantung & Pembuluh Darah (Cardiovascular Medicine)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "24.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Pulmonologi dan Ilmu Kedokteran Respirasi (Respiratory)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "25.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Radiologi (Radiology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "26.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Kedokteran Forensik (Forensic Medicine)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "27.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Patologi Anatomik (Anatomical Pathology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "28.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Patologi Klinik (Clinical Pathology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "29.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program:
      "Ilmu Orthopaedi dan Traumatologi (Orthopaedic and Traumatology Surgery)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "30.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Urologi (Urology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "31.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Bedah Syaraf (Neurosurgery)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "32.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Rehabilitasi Medik (Medical Rehabilitation)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "33.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Bedah Plastik (Plastic Surgery)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "34.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Kedokteran Olahraga (Sports Medicine)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "35.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Mikrobiologi Klinik (Clinical Microbiology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "36.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Farmakologi Klinik (Clinical Pharmacology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "39.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Kedokteran Okupasi (Occupational Medicine)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "41.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program:
      "Bedah Torak Kardiovaskular (Cardiovascular and Thoracic Surgery)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "43.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Onkologi Radiasi (Radiation Oncology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "44.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Kedokteran Penerbangan (Aviation Medicine)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "45.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Gizi Klinik (Clinical Nutrition)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "46.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Parasitologi Klinik (Clinical Parasitology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "47.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Akupuntur Medik (Acupuncture Medic)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "03.00.01.01": {
    faculty: "KEDOKTERAN",
    study_program: "Ilmu Gizi ()",
    educational_program: "D4 (Diploma IV)",
  },
  "01.00.02.01": {
    faculty: "KEDOKTERAN GIGI",
    study_program: "Pendidikan Dokter Gigi (Dental Education)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "03.00.02.01": {
    faculty: "KEDOKTERAN GIGI",
    study_program: "Ilmu Kedokteran Gigi Dasar (Basic Dental Science)",
    educational_program: "S2 (Graduate Program)",
  },
  "04.00.02.01": {
    faculty: "KEDOKTERAN GIGI",
    study_program: "Ilmu Kedokteran Gigi Komunitas (Community Dental Science)",
    educational_program: "S2 (Graduate Program)",
  },
  "05.00.02.01": {
    faculty: "KEDOKTERAN GIGI",
    study_program: "Ilmu Kedokteran Gigi (Dental Science)",
    educational_program: "S3 (Doctoral Program)",
  },
  "02.00.02.01": {
    faculty: "KEDOKTERAN GIGI",
    study_program: "Kedokteran Gigi (Dentistry)",
    educational_program: "Profesi (Profession Program)",
  },
  "06.00.02.01": {
    faculty: "KEDOKTERAN GIGI",
    study_program: "Ilmu Bedah Mulut (Oral & Maxillo Facial Surgery)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "07.00.02.01": {
    faculty: "KEDOKTERAN GIGI",
    study_program: "Ilmu Kesehatan Gigi Anak (Pediatric Dentistry)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "08.00.02.01": {
    faculty: "KEDOKTERAN GIGI",
    study_program: "Ilmu Konservasi Gigi (Conservative Dentistry)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "09.00.02.01": {
    faculty: "KEDOKTERAN GIGI",
    study_program: "Ilmu Penyakit Mulut (Oral Medicine)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "10.00.02.01": {
    faculty: "KEDOKTERAN GIGI",
    study_program: "Ortodonsia (Orthodontics)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "11.00.02.01": {
    faculty: "KEDOKTERAN GIGI",
    study_program: "Periodonsia (Periodontology)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "12.00.02.01": {
    faculty: "KEDOKTERAN GIGI",
    study_program: "Prostodonsia (Prosthetic Dentistry)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "01.01.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Matematika (Mathematics)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.04.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Biologi (Biology)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.06.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Geografi (Geography)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.02.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Fisika (Physics)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.03.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Kimia (Chemistry)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.01.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Matematika (Mathematics)",
    educational_program: "S2 (Graduate Program)",
  },
  "02.04.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Biologi (Biology)",
    educational_program: "S2 (Graduate Program)",
  },
  "02.06.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Ilmu Geografi (Geography Science)",
    educational_program: "S2 (Graduate Program)",
  },
  "03.04.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Ilmu Kelautan (Nautical Science)",
    educational_program: "S2 (Graduate Program)",
  },
  "03.06.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Ilmu Bahan-bahan (Material Science)",
    educational_program: "S2 (Graduate Program)",
  },
  "04.02.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Ilmu Fisika (Physics Science)",
    educational_program: "S2 (Graduate Program)",
  },
  "04.03.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Ilmu Kimia (Chemistry Science)",
    educational_program: "S2 (Graduate Program)",
  },
  "04.04.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Biologi (Biology)",
    educational_program: "S3 (Doctoral Program)",
  },
  "04.06.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Ilmu Bahan-bahan (Material Science)",
    educational_program: "S3 (Doctoral Program)",
  },
  "05.03.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Ilmu Kimia (Chemistry Science)",
    educational_program: "S3 (Doctoral Program)",
  },
  "03.01.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Matematika (Mathematics)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "05.02.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Fisika (Physics)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "05.04.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Biologi (Biology)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "05.06.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Geografi (Geography)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "06.03.03.01": {
    faculty: "MATEMATIKA & ILMU PENGETAHUAN ALAM",
    study_program: "Kimia (Chemistry)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "01.01.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Sipil (Civil Engineering)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.02.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Mesin (Mechanical Engineering)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.03.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Elektro (Electrical Engineering)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.04.04.01": {
    faculty: "TEKNIK",
    study_program:
      "Teknik Metalurgi & Material (Metalurgy & Material Engineering)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.05.04.01": {
    faculty: "TEKNIK",
    study_program: "Arsitektur (Architecture)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.06.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Kimia (Chemical Engineering)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.07.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Industri (Industrial Engineering)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.01.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Lingkungan (Environment Engineering)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.02.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Perkapalan (Naval Engineering)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.03.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Komputer (Computer Engineering)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "05.05.04.01": {
    faculty: "TEKNIK",
    study_program: "Arsitektur Interior (Interior Architechture)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "06.06.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknologi Bioproses (Bioprocess Technology)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.04.04.01": {
    faculty: "TEKNIK",
    study_program:
      "Teknik Metalurgi & Material - Ekstensi (Metalurgy & Material Engineering - Ext)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "02.05.04.01": {
    faculty: "TEKNIK",
    study_program: "Arsitektur - Ekstensi (Architecture - Ext)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "02.06.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Kimia - Ekstensi (Chemical Engineering - Ext)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "02.07.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Industri - Ekstensi (Industrial Engineering - Ext)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "03.01.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Sipil - Ekstensi (Civil Engineering - Ext)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "03.02.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Mesin - Ekstensi (Mechanical Engineering - Ext)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "03.03.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Elektro - Ekstensi (Electrical Engineering - Ext)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "03.04.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Metalurgi - Intl (Metalurgy Engineering - Intl)",
    educational_program:
      "S1 Kls Internasional (Intl. Class Undergraduate Program)",
  },
  "03.06.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Kimia - Intl (Chemical Engineering - Intl)",
    educational_program:
      "S1 Kls Internasional (Intl. Class Undergraduate Program)",
  },
  "04.01.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Sipil - Intl (Civil Engineering - Intl)",
    educational_program:
      "S1 Kls Internasional (Intl. Class Undergraduate Program)",
  },
  "04.02.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Mesin - Intl (Mechanical Engineering - Intl)",
    educational_program:
      "S1 Kls Internasional (Intl. Class Undergraduate Program)",
  },
  "04.03.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Elektro - Intl (Electrical Engineering - Intl)",
    educational_program:
      "S1 Kls Internasional (Intl. Class Undergraduate Program)",
  },
  "04.05.04.01": {
    faculty: "TEKNIK",
    study_program: "Arsitektur - Intl (Architecture - Intl)",
    educational_program:
      "S1 Kls Internasional (Intl. Class Undergraduate Program)",
  },
  "03.05.04.01": {
    faculty: "TEKNIK",
    study_program: "Arsitektur (Architecture)",
    educational_program: "S2 (Graduate Program)",
  },
  "03.07.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Industri (Industrial Engineering)",
    educational_program: "S2 (Graduate Program)",
  },
  "04.04.04.01": {
    faculty: "TEKNIK",
    study_program:
      "Teknik Metalurgi & Material (Metalurgy & Material Engineering)",
    educational_program: "S2 (Graduate Program)",
  },
  "04.06.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Kimia (Chemical Engineering)",
    educational_program: "S2 (Graduate Program)",
  },
  "05.01.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Sipil (Civil Engineering - Graduate)",
    educational_program: "S2 (Graduate Program)",
  },
  "05.02.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Mesin (Mechanical Engineering)",
    educational_program: "S2 (Graduate Program)",
  },
  "05.03.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Elektro (Electrical Engineering)",
    educational_program: "S2 (Graduate Program)",
  },
  "06.03.04.01": {
    faculty: "TEKNIK",
    study_program:
      "Opto Elektroteknika & Aplikasi Laser (Optoelectronics & Laser Application)",
    educational_program: "S2 (Graduate Program)",
  },
  "05.04.04.01": {
    faculty: "TEKNIK",
    study_program:
      "Teknik Metalurgi & Material (Metalurgy & Material Engineering)",
    educational_program: "S3 (Doctoral Program)",
  },
  "05.06.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Kimia (Chemical Engineering)",
    educational_program: "S3 (Doctoral Program)",
  },
  "06.01.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Sipil (Civil Engineering)",
    educational_program: "S3 (Doctoral Program)",
  },
  "06.02.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Mesin (Mechanical Engineering)",
    educational_program: "S3 (Doctoral Program)",
  },
  "06.05.04.01": {
    faculty: "TEKNIK",
    study_program: "Arsitektur (Architecture)",
    educational_program: "S3 (Doctoral Program)",
  },
  "07.03.04.01": {
    faculty: "TEKNIK",
    study_program:
      "Opto Elektroteknika & Aplikasi Laser (Optoelectronics & Laser Application)",
    educational_program: "S3 (Doctoral Program)",
  },
  "08.03.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Elektro (Electrical Engineering)",
    educational_program: "S3 (Doctoral Program)",
  },
  "07.05.04.01": {
    faculty: "TEKNIK",
    study_program: "Pendidikan Profesi Arsitek (Architect)",
    educational_program: "Profesi (Profession Program)",
  },
  "09.03.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Elektro - Intl (Electrical Engineering - Intl)",
    educational_program: "S2 Kls Internasional (Intl. Class Graduate Program)",
  },
  "04.07.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Industri (Industrial Engineering)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "06.04.04.01": {
    faculty: "TEKNIK",
    study_program:
      "Teknik Metalurgi & Material (Metalurgy & Material Engineering)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "07.01.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Sipil (Civil Engineering)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "07.02.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Mesin (Mechanical Engineering)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "07.06.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Kimia (Chemical Engineering)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "08.05.04.01": {
    faculty: "TEKNIK",
    study_program: "Arsitektur (Architecture)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "10.03.04.01": {
    faculty: "TEKNIK",
    study_program: "Teknik Elektro (Electrical Engineering)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "01.00.05.01": {
    faculty: "HUKUM",
    study_program: "Ilmu Hukum (Law)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.00.05.01": {
    faculty: "HUKUM",
    study_program: "Ilmu Hukum - Ekstensi (Law)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "07.00.05.01": {
    faculty: "HUKUM",
    study_program: "Ilmu Hukum (Law - Intl)",
    educational_program:
      "S1 Kls Internasional (Intl. Class Undergraduate Program)",
  },
  "03.00.05.01": {
    faculty: "HUKUM",
    study_program: "Ilmu Hukum (Law)",
    educational_program: "S2 (Graduate Program)",
  },
  "04.00.05.01": {
    faculty: "HUKUM",
    study_program: "Kenotariatan (Notary)",
    educational_program: "S2 (Graduate Program)",
  },
  "05.00.05.01": {
    faculty: "HUKUM",
    study_program: "Ilmu Hukum (Law)",
    educational_program: "S3 (Doctoral Program)",
  },
  "06.00.05.01": {
    faculty: "HUKUM",
    study_program: "Ilmu Hukum (Law)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "01.01.06.01": {
    faculty: "EKONOMI",
    study_program: "Ilmu Ekonomi (Economics)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.02.06.01": {
    faculty: "EKONOMI",
    study_program: "Manajemen (Management)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.03.06.01": {
    faculty: "EKONOMI",
    study_program: "Akuntansi (Accounting)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "07.01.06.01": {
    faculty: "EKONOMI",
    study_program: "Ilmu Ekonomi Islam (Islam Economic Science)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "08.01.06.01": {
    faculty: "EKONOMI",
    study_program: "Bisnis Islam (Islam Business)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "03.02.06.01": {
    faculty: "EKONOMI",
    study_program: "Manajemen - Ekstensi (Management)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "03.03.06.01": {
    faculty: "EKONOMI",
    study_program: "Akuntansi - Ekstensi (Accounting)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "02.01.06.01": {
    faculty: "EKONOMI",
    study_program: "Ilmu Ekonomi (Economics International)",
    educational_program:
      "S1 Kls Internasional (Intl. Class Undergraduate Program)",
  },
  "02.02.06.01": {
    faculty: "EKONOMI",
    study_program: "Manajemen (Management - Intl)",
    educational_program:
      "S1 Kls Internasional (Intl. Class Undergraduate Program)",
  },
  "04.03.06.01": {
    faculty: "EKONOMI",
    study_program: "Akuntansi (Accounting - Intl)",
    educational_program:
      "S1 Kls Internasional (Intl. Class Undergraduate Program)",
  },
  "03.01.06.01": {
    faculty: "EKONOMI",
    study_program: "Ilmu Ekonomi (Economics)",
    educational_program: "S2 (Graduate Program)",
  },
  "04.01.06.01": {
    faculty: "EKONOMI",
    study_program:
      "Perencanaan & Kebijakan Publik (MPKP) (Planning & Public Policy)",
    educational_program: "S2 (Graduate Program)",
  },
  "04.02.06.01": {
    faculty: "EKONOMI",
    study_program: "Ilmu Manajemen (Management)",
    educational_program: "S2 (Graduate Program)",
  },
  "05.02.06.01": {
    faculty: "EKONOMI",
    study_program: "Magister Manajemen (Master of Management)",
    educational_program: "S2 (Graduate Program)",
  },
  "06.03.06.01": {
    faculty: "EKONOMI",
    study_program: "Magister Akuntansi (Master Of Accounting Program)",
    educational_program: "S2 (Graduate Program)",
  },
  "07.02.06.01": {
    faculty: "EKONOMI",
    study_program: "Magister Manajemen (Master of Management)",
    educational_program: "S2 (Graduate Program)",
  },
  "07.03.06.01": {
    faculty: "EKONOMI",
    study_program: "Ilmu Akuntansi (Accounting)",
    educational_program: "S2 (Graduate Program)",
  },
  "09.03.06.01": {
    faculty: "EKONOMI",
    study_program: "Magister Akuntansi (Master of Accounting Program)",
    educational_program: "S2 (Graduate Program)",
  },
  "05.01.06.01": {
    faculty: "EKONOMI",
    study_program: "Ilmu Ekonomi (Economics)",
    educational_program: "S3 (Doctoral Program)",
  },
  "06.02.06.01": {
    faculty: "EKONOMI",
    study_program: "Ilmu Manajemen (Management)",
    educational_program: "S3 (Doctoral Program)",
  },
  "08.03.06.01": {
    faculty: "EKONOMI",
    study_program: "Ilmu Akuntansi (Accounting)",
    educational_program: "S3 (Doctoral Program)",
  },
  "01.03.06.01": {
    faculty: "EKONOMI",
    study_program: "Akuntansi (Accounting)",
    educational_program: "D3 (Diploma III)",
  },
  "05.03.06.01": {
    faculty: "EKONOMI",
    study_program:
      "Pendidikan Profesi Akuntansi (PPAk) (Accounting Profession Education)",
    educational_program: "Profesi (Profession Program)",
  },
  "06.01.06.01": {
    faculty: "EKONOMI",
    study_program: "Ilmu Ekonomi ()",
    educational_program: "S2 Kls Internasional (Intl. Class Graduate Program)",
  },
  "10.03.06.01": {
    faculty: "EKONOMI",
    study_program: "Akuntansi (Accounting)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "01.01.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Arkeologi (Archaeology)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.02.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Ilmu Filsafat (Philosophy)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.06.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Ilmu Sejarah (History)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.03.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Ilmu Perpustakaan (Library Science)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "08.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Arab (Arabic)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "09.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Indonesia (Indonesian)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "10.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Daerah untuk Sastra Jawa (Javanese)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "11.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Cina (Chinese)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "12.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Jepang (Japanese)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "13.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Inggris (English)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "14.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Perancis (French)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "15.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Jerman (German)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "16.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Rusia (Russian)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "17.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Belanda (Dutch)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "18.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Bahasa dan Kebudayaan Korea (Korean)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.05.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Ilmu Susastra (Sastra) (Literature)",
    educational_program: "S2 (Graduate Program)",
  },
  "02.01.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Arkeologi (Archaeology)",
    educational_program: "S2 (Graduate Program)",
  },
  "02.02.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Ilmu Filsafat (Philosophy)",
    educational_program: "S2 (Graduate Program)",
  },
  "02.06.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Ilmu Sejarah (History Science - Graduate)",
    educational_program: "S2 (Graduate Program)",
  },
  "03.03.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Ilmu Perpustakaan (Library Science)",
    educational_program: "S2 (Graduate Program)",
  },
  "04.04.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Ilmu Linguistik (Linguistics)",
    educational_program: "S2 (Graduate Program)",
  },
  "28.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Asia Tenggara (Southeast Asia)",
    educational_program: "S2 (Graduate Program)",
  },
  "02.05.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Ilmu Susastra (Sastra) (Literature)",
    educational_program: "S3 (Doctoral Program)",
  },
  "03.01.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Arkeologi (Archaeology)",
    educational_program: "S3 (Doctoral Program)",
  },
  "03.02.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Ilmu Filsafat (Philosophy)",
    educational_program: "S3 (Doctoral Program)",
  },
  "03.06.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Ilmu Sejarah (History)",
    educational_program: "S3 (Doctoral Program)",
  },
  "05.04.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Ilmu Linguistik (Linguistics)",
    educational_program: "S3 (Doctoral Program)",
  },
  "01.04.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Penerjemahan Bahasa Arab (Arabic Translation)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "02.04.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Penerjemahan Bahasa Inggris (English Translation)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "03.04.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Penerjemahan Bahasa Perancis (French Translation)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "05.03.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Ilmu Perpustakaan (Library Science)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "19.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Cina (Chinese)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "20.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Arab (Arabic)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "21.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Jepang (Japanese)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "22.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Inggris (English)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "23.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Perancis (French)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "24.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Jerman (German)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "26.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Sastra Belanda (Dutch)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "27.00.07.01": {
    faculty: "ILMU PENGETAHUAN BUDAYA",
    study_program: "Bahasa dan Kebudayaan Korea (Korean)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "01.00.08.01": {
    faculty: "PSIKOLOGI",
    study_program: "Psikologi (Psychology)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.00.08.01": {
    faculty: "PSIKOLOGI",
    study_program: "Psikologi (Psychology)",
    educational_program:
      "S1 Kls Internasional (Intl. Class Undergraduate Program)",
  },
  "04.00.08.01": {
    faculty: "PSIKOLOGI",
    study_program: "Ilmu Psikologi (Psychology)",
    educational_program: "S2 (Graduate Program)",
  },
  "06.00.08.01": {
    faculty: "PSIKOLOGI",
    study_program: "Psikologi Profesi (Psychology)",
    educational_program: "S2 (Graduate Program)",
  },
  "05.00.08.01": {
    faculty: "PSIKOLOGI",
    study_program: "Psikologi (Psychology)",
    educational_program: "S3 (Doctoral Program)",
  },
  "07.00.08.01": {
    faculty: "PSIKOLOGI",
    study_program: "Psikologi (Psychology)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "01.02.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Politik (Political Science)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.04.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Sosiologi (Sociology)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.05.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Kriminologi (Criminology)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.06.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Kesejahteraan Sosial (Social Welfare)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.08.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Hubungan Internasional (International Relations)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.01.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Komunikasi (Communication)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.07.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Antropologi Sosial (Social Anthropology)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "05.03.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Administrasi Fiskal (Fiscal Administration)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "06.03.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Administrasi Negara (Public Administration)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "07.03.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Administrasi Niaga (Business Administration)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.02.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Politik - Ekstensi (Political Science - Ext)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "02.05.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Kriminologi - Ekstensi (Criminology - Ext)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "08.03.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program:
      "Ilmu Administrasi Fiskal - Ekstensi (Fiscal Administration - Ext)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "09.03.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program:
      "Ilmu Administrasi Negara - Ekstensi (Public Administration - Ext)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "10.03.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program:
      "Ilmu Administrasi Niaga - Ekstensi (Business Administration - Ext)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "07.01.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Komunikasi (Communication - Intl)",
    educational_program:
      "S1 Kls Internasional (Intl. Class Undergraduate Program)",
  },
  "02.04.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Sosiologi (Sociology)",
    educational_program: "S2 (Graduate Program)",
  },
  "02.06.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Kesejahteraan Sosial (Social Welfare)",
    educational_program: "S2 (Graduate Program)",
  },
  "02.08.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Hub Internasional (International Relations)",
    educational_program: "S2 (Graduate Program)",
  },
  "03.02.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Politik (Political Science)",
    educational_program: "S2 (Graduate Program)",
  },
  "03.05.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Kriminologi (Criminology)",
    educational_program: "S2 (Graduate Program)",
  },
  "03.07.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Antropologi (Anthropology)",
    educational_program: "S2 (Graduate Program)",
  },
  "03.08.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Kajian Terorisme dalam Keamanan Internasional ()",
    educational_program: "S2 (Graduate Program)",
  },
  "04.01.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Komunikasi (Communication)",
    educational_program: "S2 (Graduate Program)",
  },
  "11.03.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Administrasi (Administration)",
    educational_program: "S2 (Graduate Program)",
  },
  "03.04.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Sosiologi (Sociology)",
    educational_program: "S3 (Doctoral Program)",
  },
  "03.06.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Kesejahteraan Sosial (Social Welfare)",
    educational_program: "S3 (Doctoral Program)",
  },
  "04.02.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Politik (Political Science)",
    educational_program: "S3 (Doctoral Program)",
  },
  "04.05.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Kriminologi (Criminology)",
    educational_program: "S3 (Doctoral Program)",
  },
  "04.07.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Antropologi (Anthropology)",
    educational_program: "S3 (Doctoral Program)",
  },
  "05.01.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Komunikasi (Communication)",
    educational_program: "S3 (Doctoral Program)",
  },
  "12.03.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Administrasi (Administration)",
    educational_program: "S3 (Doctoral Program)",
  },
  "05.02.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Politik (Political Science)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "05.05.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Kriminologi (Criminology)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "06.01.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Komunikasi (Communication)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "13.03.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Administrasi Fiskal (Fiscal Administration)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "14.03.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Administrasi Negara (Public Administration)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "15.03.09.01": {
    faculty: "ILMU SOSIAL & ILMU POLITIK",
    study_program: "Ilmu Administrasi Niaga (Business Administration)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "01.00.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program: "Kesehatan Masyarakat (Public Health)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "01.04.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program: "Studi Gizi (Nutrition)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "06.00.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program: "Kesehatan Lingkungan (Kesehatan Lingkungan)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "xx.00.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program:
      "Keselamatan dan Kesehatan Kerja (Keselamatan dan Kesehatan Kerja)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.00.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program: "Kesehatan Masyarakat - Ekstensi (Public Health)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "01.03.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program: "Epidemiologi (Epidemiology)",
    educational_program: "S2 (Graduate Program)",
  },
  "02.06.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program:
      "Keselamatan & Kesehatan Kerja (Occupational Health & Safety)",
    educational_program: "S2 (Graduate Program)",
  },
  "03.00.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program: "Ilmu Kesehatan Masyarakat (Public Health Science)",
    educational_program: "S2 (Graduate Program)",
  },
  "04.01.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program: "Administrasi Rumah Sakit (Hospital Administration)",
    educational_program: "S2 (Graduate Program)",
  },
  "02.03.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program: "Epidemiologi (Epidemiology)",
    educational_program: "S3 (Doctoral Program)",
  },
  "05.00.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program: "Ilmu Kesehatan Masyarakat (Public Health Science)",
    educational_program: "S3 (Doctoral Program)",
  },
  "01.01.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program: "Asuransi Kesehatan (Health Insurance)",
    educational_program: "D3 (Diploma III)",
  },
  "01.06.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program:
      "Keselamatan & Kesehatan Kerja (Occupational Health & Safety)",
    educational_program: "D3 (Diploma III)",
  },
  "01.07.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program:
      "Kehumasan Pelayanan Kesehatan (Public Relation in Health Care)",
    educational_program: "D3 (Diploma III)",
  },
  "02.01.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program:
      "Manajemen Informasi Kesehatan & Rekam Medis (Health Information Management & Medical Record)",
    educational_program: "D3 (Diploma III)",
  },
  "02.07.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program:
      "Promosi & Pendidikan Kesehatan (Health Education & Promotion)",
    educational_program: "D3 (Diploma III)",
  },
  "03.01.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program:
      "Manajemen Pelayanan Rumah Sakit (Hospital Services Management)",
    educational_program: "D3 (Diploma III)",
  },
  "04.00.10.01": {
    faculty: "KESEHATAN MASYARAKAT",
    study_program: "Ilmu Kesehatan Masyarakat (Public Health Science)",
    educational_program: "S2 Kls Internasional (Intl. Class Graduate Program)",
  },
  "01.00.12.01": {
    faculty: "ILMU KOMPUTER",
    study_program: "Ilmu Komputer (Computer Science)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "06.00.12.01": {
    faculty: "ILMU KOMPUTER",
    study_program: "Sistem Informasi (Information System)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "07.00.12.01": {
    faculty: "ILMU KOMPUTER",
    study_program: "Sistem Informasi - Ekstensi (Information Systems - Ext)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "02.00.12.01": {
    faculty: "ILMU KOMPUTER",
    study_program: "Ilmu Komputer (Computer Science - Intl)",
    educational_program:
      "S1 Kls Internasional (Intl. Class Undergraduate Program)",
  },
  "03.00.12.01": {
    faculty: "ILMU KOMPUTER",
    study_program: "Ilmu Komputer (Computer Science)",
    educational_program: "S2 (Graduate Program)",
  },
  "04.00.12.01": {
    faculty: "ILMU KOMPUTER",
    study_program: "Teknologi Informasi (Information Technology)",
    educational_program: "S2 (Graduate Program)",
  },
  "05.00.12.01": {
    faculty: "ILMU KOMPUTER",
    study_program: "Ilmu Komputer (Computer Science)",
    educational_program: "S3 (Doctoral Program)",
  },
  "08.00.12.01": {
    faculty: "ILMU KOMPUTER",
    study_program: "Sistem Informasi (Information System)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "09.00.12.01": {
    faculty: "ILMU KOMPUTER",
    study_program: "Ilmu Komputer (Computer Science)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
  "01.00.13.01": {
    faculty: "ILMU KEPERAWATAN",
    study_program: "Ilmu Keperawatan (Nursing Science)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.00.13.01": {
    faculty: "ILMU KEPERAWATAN",
    study_program: "Ilmu Keperawatan - Ekstensi (Nursing Science - Ext)",
    educational_program: "S1 Ekstensi (Extended Undergraduate Program)",
  },
  "04.00.13.01": {
    faculty: "ILMU KEPERAWATAN",
    study_program: "Ilmu Keperawatan (Nursing)",
    educational_program: "S2 (Graduate Program)",
  },
  "09.00.13.01": {
    faculty: "ILMU KEPERAWATAN",
    study_program: "Ilmu Keperawatan (Nursing)",
    educational_program: "S3 (Doctoral Program)",
  },
  "03.00.13.01": {
    faculty: "ILMU KEPERAWATAN",
    study_program: "Profesi Keperawatan (Bachelor of Nursing)",
    educational_program: "Profesi (Profession Program)",
  },
  "05.00.13.01": {
    faculty: "ILMU KEPERAWATAN",
    study_program:
      "Ners Spesialis Keperawatan Komunitas (Community Nursing Spesialist)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "06.00.13.01": {
    faculty: "ILMU KEPERAWATAN",
    study_program:
      "Ners Spesialis Keperawatan Maternitas (Maternity Nursing Spesialist)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "07.00.13.01": {
    faculty: "ILMU KEPERAWATAN",
    study_program:
      "Ners Spesialis Keperawatan Medikal Bedah (Surgery Medical Nursing Spesialist)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "08.00.13.01": {
    faculty: "ILMU KEPERAWATAN",
    study_program:
      "Ners Spesialis Keperawatan Jiwa (Mental Care Nursing Spesialist)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "10.00.13.01": {
    faculty: "ILMU KEPERAWATAN",
    study_program: "Ners Spesialis Keperawatan Anak (Child Nursing Specialist)",
    educational_program: "Spesialis I (Specialist Program)",
  },
  "01.00.14.01": {
    faculty: "PASCASARJANA",
    study_program: "Kajian Ilmu Kepolisian (Police Studies)",
    educational_program: "S2 (Graduate Program)",
  },
  "02.00.14.01": {
    faculty: "PASCASARJANA",
    study_program: "Kajian Ilmu Lingkungan (Environmental Studies)",
    educational_program: "S2 (Graduate Program)",
  },
  "03.00.14.01": {
    faculty: "PASCASARJANA",
    study_program:
      "Kajian Kependudukan & Ketenagaan Kerja (Population & Manpower Studies)",
    educational_program: "S2 (Graduate Program)",
  },
  "04.00.14.01": {
    faculty: "PASCASARJANA",
    study_program: "Kajian Ketahanan Nasional (National Resilience)",
    educational_program: "S2 (Graduate Program)",
  },
  "05.00.14.01": {
    faculty: "PASCASARJANA",
    study_program: "Kajian Pengembangan Perkotaan (Urban Studies)",
    educational_program: "S2 (Graduate Program)",
  },
  "06.00.14.01": {
    faculty: "PASCASARJANA",
    study_program: "Kajian Gender (Gender Studies)",
    educational_program: "S2 (Graduate Program)",
  },
  "07.00.14.01": {
    faculty: "PASCASARJANA",
    study_program: "Kajian Wilayah Amerika (American Studies)",
    educational_program: "S2 (Graduate Program)",
  },
  "08.00.14.01": {
    faculty: "PASCASARJANA",
    study_program: "Kajian Wilayah Eropa (European Studies)",
    educational_program: "S2 (Graduate Program)",
  },
  "09.00.14.01": {
    faculty: "PASCASARJANA",
    study_program: "Kajian Wilayah Jepang (Japanese Studies)",
    educational_program: "S2 (Graduate Program)",
  },
  "10.00.14.01": {
    faculty: "PASCASARJANA",
    study_program:
      "Kajian Wilayah Timur Tengah Islam (Islamics & Middle Eastern Studies)",
    educational_program: "S2 (Graduate Program)",
  },
  "12.00.14.01": {
    faculty: "PASCASARJANA",
    study_program: "Teknologi Biomedis (Biomedical Engineering)",
    educational_program: "S2 (Graduate Program)",
  },
  "11.00.14.01": {
    faculty: "PASCASARJANA",
    study_program: "Ilmu Lingkungan (Environmental Studies)",
    educational_program: "S3 (Doctoral Program)",
  },
  "01.00.15.01": {
    faculty: "VOKASI",
    study_program: "Perumahsakitan (Hospital Management)",
    educational_program: "D3 (Diploma III)",
  },
  "02.00.15.01": {
    faculty: "VOKASI",
    study_program: "Fisioterapi (Physiotherapy)",
    educational_program: "D3 (Diploma III)",
  },
  "03.00.15.01": {
    faculty: "VOKASI",
    study_program: "Okupasi Terapi (Occupational Therapy)",
    educational_program: "D3 (Diploma III)",
  },
  "04.00.15.01": {
    faculty: "VOKASI",
    study_program: "Akuntansi (Accounting)",
    educational_program: "D3 (Diploma III)",
  },
  "05.00.15.01": {
    faculty: "VOKASI",
    study_program:
      "Manajemen Informasi & Dokumen (Management of Information & Document)",
    educational_program: "D3 (Diploma III)",
  },
  "06.00.15.01": {
    faculty: "VOKASI",
    study_program: "Komunikasi (Communication)",
    educational_program: "D3 (Diploma III)",
  },
  "07.00.15.01": {
    faculty: "VOKASI",
    study_program:
      "Administrasi Asuransi & Aktuaria (Insurance & Actuarial Program)",
    educational_program: "D3 (Diploma III)",
  },
  "08.00.15.01": {
    faculty: "VOKASI",
    study_program:
      "Administrasi Keuangan & Perbankan (Finance & Banking Program)",
    educational_program: "D3 (Diploma III)",
  },
  "09.00.15.01": {
    faculty: "VOKASI",
    study_program:
      "Administrasi Perkantoran & Sekretari (Office & Secretarial Program)",
    educational_program: "D3 (Diploma III)",
  },
  "10.00.15.01": {
    faculty: "VOKASI",
    study_program: "Administrasi Perpajakan (Taxation Program)",
    educational_program: "D3 (Diploma III)",
  },
  "11.00.15.01": {
    faculty: "VOKASI",
    study_program: "Pariwisata (Cultural Tourism)",
    educational_program: "D3 (Diploma III)",
  },
  "01.00.16.01": {
    faculty: "PEROLEHAN KREDIT",
    study_program: "Pertukaran Mahasiswa (Student Exchange)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "02.00.16.01": {
    faculty: "PEROLEHAN KREDIT",
    study_program: "Pertukaran Mahasiswa (Student Exchange)",
    educational_program: "S2 (Graduate Program)",
  },
  "03.00.16.01": {
    faculty: "PEROLEHAN KREDIT",
    study_program: "Pertukaran Mahasiswa (Student Exchange)",
    educational_program: "S3 (Doctoral Program)",
  },
  "03.HC.16.01": {
    faculty: "PEROLEHAN KREDIT",
    study_program: "Honoris Causa (Honoris Causa)",
    educational_program: "S3 (Doctoral Program)",
  },
  "01.00.17.01": {
    faculty: "FARMASI",
    study_program: "Farmasi (Pharmacy)",
    educational_program: "S1 Reguler (Undergraduate Program)",
  },
  "04.00.17.01": {
    faculty: "FARMASI",
    study_program: "Ilmu Kefarmasian (Pharmaceutical Science)",
    educational_program: "S2 (Graduate Program)",
  },
  "05.00.17.01": {
    faculty: "FARMASI",
    study_program: "Herbal (Herbal)",
    educational_program: "S2 (Graduate Program)",
  },
  "06.00.17.01": {
    faculty: "FARMASI",
    study_program: "Farmasi (Pharmacy)",
    educational_program: "S3 (Doctoral Program)",
  },
  "03.00.17.01": {
    faculty: "FARMASI",
    study_program: "Apoteker (Apothecary)",
    educational_program: "Profesi (Profession Program)",
  },
  "02.00.17.01": {
    faculty: "FARMASI",
    study_program: "Farmasi (Pharmacy)",
    educational_program: "S1 Paralel (S1 Paralel)",
  },
};
