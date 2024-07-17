
import Link from "next/link";
import Image from 'next/image';
import CloudG from "/images/svg/CloudGraphic.svg";


export default function Page() {
  return (
    <>
    <div className="row m-0 p-4 BannerImage">
      <div className="col-12 col-md-6 col-lg-6 col-xl-6 BannerCaption">
        <h1>Somos soluciones digitales enfocados en el crecimiento de su empresa.</h1>
        <Link href="#">Agenda una cita</Link>
      </div>
      <div className="col-12 col-md-6 col-lg-6 col-xl-6 pb-0 BanneImageHolder">
        <div>
          <Image
              src={CloudG}
              alt="Cloud-Graphic"
              layout="responsive"
              objectFit="cover"
              width={564}
              height={500}
            />
        </div>
      </div>
    </div>
    <section className="row m-0 p-4 mb-3 PreviewItems-wrapper">
      <div className="col-12">
        <div className="rounded border p-3">
          <h3 className="text-xl font-bold">Planes destacados</h3>
        </div>
      </div>
    </section>
    <section className="row m-0 p-4 mb-3 PreviewProducts-wrapper">
      <div className="col-12">
        <div className="rounded border p-3">
          <h3 className="text-xl font-bold">Enlaces de inter&eacute;s</h3>
        </div>
      </div>
    </section>
    </>
  );
}
