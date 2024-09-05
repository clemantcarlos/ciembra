import { submitHandler } from "@/lib/scripts.ts";

export default function FooterForm({ children }:any) {
  return (
    <form
      onSubmit={submitHandler}
      className="w-1/2 hidden lg:flex flex-wrap justify-end gap-x-4"
    >
      <input
        type="hidden"
        name="access_key"
        value="ffdac8d9-72c9-4d38-886b-70f112b1b81e"
      />
      <div>
        <label htmlFor="nombre" className="block font-medium ">
          Nombre completo*
        </label>
        <input
          className="bg-secondary text-primary text-sm rounded-lg focus:ring-none block w-64 p-2.5"
          required
          type="text"
          name="nombre"
          id=""
        />
      </div>
      <div>
        <label htmlFor="cargo" className="block font-medium ">
          Cargo*
        </label>
        <select
          className="bg-secondary text-primary text-sm rounded-lg focus:ring-none block w-64 p-2.5"
          name="Cargos"
          required
        >
          <option
            value=""
            disabled={false}
            selected={false}
            hidden={false}
          ></option>
          <option value="Director(a) de Tecnologia – IT">
            Director de Tecnologia – IT
          </option>
          <option value="Coordinador(a) de Tecnologia – IT">
            Coordinador(a) de Tecnologia – TI
          </option>
          <option value="Analista de Tecnologia – TI">
            Analista de Tecnologia – TI
          </option>
          <option value="Director(a) Comercial">Director(a) Comercial</option>
          <option value="Coordinador(a) Comercial">
            Coordinador(a) Comercial
          </option>
          <option value="Analista Comercial">Analista Comercial</option>
          <option value="Director(a) de Marketing">
            Director(a) de Marketing
          </option>
          <option value="Coordinador(a) de Marketing">
            Coordinador(a) de Marketing
          </option>
          <option value="Analista de Marketing">Analista de Marketing</option>
          <option value="Director(a) de Operaciones">
            Director(a) de Operaciones
          </option>
          <option value="Coordinador(a) de Operaciones">
            Coordinador(a) de Operaciones
          </option>
          <option value="Técnico de Operaciones">Técnico de Operaciones</option>
          <option value="Director(a) de Compras">Director(a) de Compras</option>
          <option value="Coordinador(a) de Compras">
            Coordinador(a) de Compras
          </option>
          <option value="Analista de Compras">Analista de Compras</option>
          <option value="Director(a) de Innovacion">
            Director(a) de Innovacion
          </option>
          <option value="Coordinador(a) de Innovacion">
            Coordinador(a) de Innovacion
          </option>
          <option value="Analista de Negocios">Analista de Negocios</option>
          <option value="CEO/Fundador/Socio">CEO/Fundador/Socio</option>
          <option value="Estudiante/Becario(a)">Estudiante/Becario(a)</option>
          <option value="Otros Cargos">Otros Cargos</option>
        </select>
      </div>
      <div>
        <label htmlFor="nombreEmpresa" className="block font-medium ">
          Nombre de la empresa*
        </label>
        <input
          className="bg-secondary text-primary text-sm rounded-lg focus:ring-none block w-64 p-2.5"
          required
          type="text"
          name="nombreEmpresa"
          id=""
        />
      </div>
      <div>
        <label htmlFor="areaMercado" className="block font-medium ">
          Area de mercado*
        </label>
        <select
          className="bg-secondary text-primary text-sm rounded-lg focus:ring-none block w-64 p-2.5"
          name="mercado"
          required
        >
          <option
            value=""
            disabled={false}
            selected={false}
            hidden={false}
          ></option>
          <option value="Agropecuario">Agropecuario</option>
          <option value="Alimentos e Bebidas">Alimentos e Bebidas</option>
          <option value="Automotor">Automotor</option>
          <option value="Comercio mayorista y minorista">
            Comercio mayorista y minorista
          </option>
          <option value="Comercio Exterior">Comercio Exterior</option>
          <option value="Construccion civil e Imbobiliario">
            Construccion civil e Imbobiliario
          </option>
          <option value="Cooperativa de Produccion">
            Cooperativa de Produccion
          </option>
          <option value="Cuero y calzado">Cuero y calzado</option>
          <option value="Educacion">Educacion</option>
          <option value="Energia">Energia</option>
          <option value="Financiero">Financiero</option>
          <option value="Madera, papel y celulosa">
            Madera, papel y celulosa
          </option>
          <option value="Marketing y Comunicacion">
            Marketing y Comunicacion
          </option>
          <option value="Mecanica">Mecanica</option>
          <option value="Muebles">Muebles</option>
          <option value="Plastico y Caucho">Plastico y Caucho</option>
          <option value="Química e Petroquímica">Química e Petroquímica</option>
          <option value="Salud">Salud</option>
          <option value="Servicios">Servicios</option>
          <option value="Servicios Publicos">Servicios Publicos</option>
          <option value="Metalurgia y Mineria">Metalurgia y Mineria</option>
          <option value="Tecnologia de la Informacion">
            Tecnologia de la Informacion
          </option>
          <option value="Telecom">Telecom</option>
          <option value="Textil y confecciones">Textil y confecciones</option>
          <option value="Transporte y Logistica">Transporte y Logistica</option>
          <option value="Turismo">Turismo</option>
          <option value="Veterinario">Veterinario</option>
          <option value="Otro">Otro</option>
        </select>
      </div>
      <div>
        <label htmlFor="email" className="block font-medium ">
          E-mail*
        </label>
        <input
          className="bg-secondary text-primary text-sm rounded-lg focus:ring-none block w-64 p-2.5"
          required
          type="email"
          name="email"
          id=""
        />
      </div>
      <div>
        <label htmlFor="telefono" className="block font-medium ">
          Telefono*
        </label>
        <input
          className="bg-secondary text-primary text-sm rounded-lg focus:ring-none block w-64 p-2.5"
          required
          type="tel"
          name="telefono"
          id=""
        />
      </div>
      <div className="w-full pl-10 pt-4">
        <input required type="checkbox" name="privacidad" id="privacidad" />
        <label htmlFor="privacidad">
          Estoy deacuerdo con las
          <a href="politicasPrivacidad" className="font-bold text-emerald-300">
            Politicas de Privacidad
          </a>
        </label>
      </div>
      <div className="w-full pl-10 pt-4">
        {children}
      </div>
    </form>
  );
}
