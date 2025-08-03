import Image from 'next/image';

export default function AboutPageTemplate() {
  return (
    <section className="flex flex-col items-center w-full max-w-3xl p-2 mx-auto bg-white rounded-lg">
      <h2 className="text-center text-2xl mt-6">O que é a TamanduAI?</h2>
        <div className="mt-6">
          {/* aumente a distancia das linhas */}
          <p className="bg-white p-2 rounded-xl text-justify">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam repellendus
            perferendis illum ea fuga minus cumque eaque ad hic blanditiis sit eum magni ut
            dignissimos rerum amet, ducimus voluptates vero id deleniti at assumenda? Ut amet a
            error alias rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            libero corporis, eius consequatur laboriosam facilis sapiente eum delectus quidem
            nostrum? Vel magni ipsam nobis veritatis a dolores esse aspernatur quaerat.
          </p>
        </div>
        <div className="mt-6">
          <Image src={'/homer_f.gif'} height={400} alt="imagem" width={400} className='rounded-xl'/>
        </div>
        <div className="mt-6 bg-white p-2 rounded-xl ">
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae, vero sapiente
            suscipit magnam blanditiis consequuntur quisquam aliquid voluptate labore et, laboriosam
            expedita dolorum quos. Officia exercitationem eum mollitia reprehenderit iusto, amet
            nihil eaque, ipsa tenetur iure molestias. Ipsam nulla.
          </p>
          <ul className="text-base m-4 list-disc p-4 space-y-6">
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque deleniti
                minima.
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque deleniti
                minima.
              </p>
            </li>
            <li>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque deleniti
                minima.
              </p>
            </li>
          </ul>
        </div>
    </section>
  );
}
