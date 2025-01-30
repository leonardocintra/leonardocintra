import Link from "next/link";

export default function Terms() {
  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Termos e Condições</h1>
      <p className="mb-4">
        Última atualização: <strong>30/01/2025</strong>
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">1. Termos</h2>
        <p>
          Ao acessar ao site Leonardo Cintra, concorda em cumprir estes termos
          de uso, todas as leis e regulamentos aplicáveis ​​e concorda que é
          responsável pelo cumprimento de todas as leis locais aplicáveis. Se
          você não concordar com algum desses termos, está proibido de usar ou
          acessar este site. Os materiais contidos neste site são protegidos
          pelas leis de direitos autorais e marcas comerciais aplicáveis.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">2. Uso de Licença</h2>
        <p>
          É concedida permissão para baixar temporariamente uma cópia dos
          materiais (informações ou software) no site Leonardo Cintra , apenas
          para visualização transitória pessoal e não comercial.{" "}
          <Link href={"privacicy"} className="underline">
            Politicas e privacidade
          </Link>{" "}
          Esta é a concessão de uma licença, não uma transferência de título e,
          sob esta licença, você não pode:
        </p>
        <ul className="list-disc list-inside">
          <li>modificar ou copiar os materiais;</li>
          <li>
            usar os materiais para qualquer finalidade comercial ou para
            exibição pública (comercial ou não comercial);
          </li>
          <li>
            tentar descompilar ou fazer engenharia reversa de qualquer software
            contido no site Leonardo Cintra;
          </li>
          <li>
            remover quaisquer direitos autorais ou outras notações de
            propriedade dos materiais; ou
          </li>
          <li>
            transferir os materiais para outra pessoa ou 'espelhe' os materiais
            em qualquer outro servidor.
          </li>
        </ul>
        <p>
          Esta licença será automaticamente rescindida se você violar alguma
          dessas restrições e poderá ser rescindida por Leonardo Cintra a
          qualquer momento. Ao encerrar a visualização desses materiais ou após
          o término desta licença, você deve apagar todos os materiais baixados
          em sua posse, seja em formato eletrónico ou impresso.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          3. Isenção de responsabilidade
        </h2>
        <ul className="list-disc list-inside">
          <li>
            Os materiais no site da Leonardo Cintra são fornecidos 'como estão'.
            Leonardo Cintra não oferece garantias, expressas ou implícitas, e,
            por este meio, isenta e nega todas as outras garantias, incluindo,
            sem limitação, garantias implícitas ou condições de comercialização,
            adequação a um fim específico ou não violação de propriedade
            intelectual ou outra violação de direitos.
          </li>
          <li>
            Além disso, o Leonardo Cintra não garante ou faz qualquer
            representação relativa à precisão, aos resultados prováveis ​​ou à
            confiabilidade do uso dos materiais em seu site ou de outra forma
            relacionado a esses materiais ou em sites vinculados a este site.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4. Limitações</h2>
        <p>
          Em nenhum caso o Leonardo Cintra ou seus fornecedores serão
          responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos
          por perda de dados ou lucro ou devido a interrupção dos negócios)
          decorrentes do uso ou da incapacidade de usar os materiais em Leonardo
          Cintra, mesmo que Leonardo Cintra ou um representante autorizado da
          Leonardo Cintra tenha sido notificado oralmente ou por escrito da
          possibilidade de tais danos. Como algumas jurisdições não permitem
          limitações em garantias implícitas, ou limitações de responsabilidade
          por danos conseqüentes ou incidentais, essas limitações podem não se
          aplicar a você.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">
          5. Precisão dos materiais
        </h2>
        <p>
          Os materiais exibidos no site da Leonardo Cintra podem incluir erros
          técnicos, tipográficos ou fotográficos. Leonardo Cintra não garante
          que qualquer material em seu site seja preciso, completo ou atual.
          Leonardo Cintra pode fazer alterações nos materiais contidos em seu
          site a qualquer momento, sem aviso prévio. No entanto, Leonardo Cintra
          não se compromete a atualizar os materiais.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Links</h2>
        <p>
          O Leonardo Cintra não analisou todos os sites vinculados ao seu site e
          não é responsável pelo conteúdo de nenhum site vinculado. A inclusão
          de qualquer link não implica endosso por Leonardo Cintra do site. O
          uso de qualquer site vinculado é por conta e risco do usuário.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Modificações</h2>
        <p>
          O Leonardo Cintra pode revisar estes termos de serviço do site a
          qualquer momento, sem aviso prévio. Ao usar este site, você concorda
          em ficar vinculado à versão atual desses termos de serviço
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Lei aplicável</h2>
        <p>
          Estes termos e condições são regidos e interpretados de acordo com as
          leis do Leonardo Cintra e você se submete irrevogavelmente à
          jurisdição exclusiva dos tribunais naquele estado ou localidade.
        </p>
      </section>

      <p>
        Se você tiver dúvidas ou preocupações sobre termos e condições, entre em contato pelos canais indicados abaixo.
      </p>
    </div>
  );
}
