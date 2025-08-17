import Image from 'next/image';

export default function AboutPageTemplate() {
  return (
    <section className="flex flex-col items-center w-full max-w-4xl p-6 mx-auto bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 rounded-2xl shadow-lg">
      <h2 className="text-center text-3xl font-bold mt-6 text-gray-800 drop-shadow-sm">
        O que é a TamanduAI?
      </h2>

      <div className="mt-8 w-full">
        <p className="bg-slate-100 p-6 rounded-2xl text-justify text-gray-700 leading-relaxed shadow-sm">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam repellendus perferendis
          illum ea fuga minus cumque eaque ad hic blanditiis sit eum magni ut dignissimos rerum
          amet, ducimus voluptates vero id deleniti at assumenda? Ut amet a error alias rem. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Doloribus libero corporis, eius
          consequatur laboriosam facilis sapiente eum delectus quidem nostrum? Vel magni ipsam nobis
          veritatis a dolores esse aspernatur quaerat.
        </p>
      </div>

      <div className="mt-8 w-full flex justify-center">
        <Image
          src={'/homer_f.gif'}
          height={400}
          width={400}
          alt="imagem"
          className="rounded-2xl shadow-xl transition-transform duration-300 hover:scale-105"
        />
      </div>

      <div className="mt-8 w-full bg-slate-100 p-6 rounded-2xl shadow-sm">
        <p className="text-justify text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto beatae, vero sapiente
          suscipit magnam blanditiis consequuntur quisquam aliquid voluptate labore et, laboriosam
          expedita dolorum quos. Officia exercitationem eum mollitia reprehenderit iusto, amet nihil
          eaque, ipsa tenetur iure molestias. Ipsam nulla.
        </p>

        <ul className="mt-6 list-disc list-inside space-y-4 text-gray-700">
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque deleniti minima.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque deleniti minima.
          </li>
          <li>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque deleniti minima.
          </li>
        </ul>
      </div>
    </section>
  );
}
