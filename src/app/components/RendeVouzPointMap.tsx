'use client';

export default function RendeVouzPointMap() {
  return (
    <div className="w-1/2 h-48 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.8711387259397!2d-58.52186529999999!3d-34.61202530000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb70066c990c7%3A0x6187d38d720dfdae!2sPlazoleta%20Gracia%20y%20Libertad!5e0!3m2!1ses-419!2sar!4v1721052869770!5m2!1ses-419!2sar"
        className="w-full h-full"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
