import{_ as a,c as s,o,b as t}from"./chunks/framework.CJnA3SgD.js";const e=JSON.parse('{"title":"Buscando QRCode Gerado","description":"","frontmatter":{},"headers":[{"level":2,"title":"Utilizando método GET","slug":"utilizando-metodo-get","link":"#utilizando-metodo-get","children":[]},{"level":2,"title":"Utilizando método POST","slug":"utilizando-metodo-post","link":"#utilizando-metodo-post","children":[]},{"level":2,"title":"Resposta da solicitação","slug":"resposta-da-solicitacao","link":"#resposta-da-solicitacao","children":[{"level":3,"title":"descrição dos itens da resposta","slug":"descricao-dos-itens-da-resposta","link":"#descricao-dos-itens-da-resposta","children":[]}]}],"relativePath":"v1/search-qrcode.md","filePath":"v1/search-qrcode.md"}'),n={name:"v1/search-qrcode.md"},l=[t('<h1 id="buscando-qrcode-gerado" tabindex="-1">Buscando QRCode Gerado <a class="header-anchor" href="#buscando-qrcode-gerado" aria-label="Permalink to &quot;Buscando QRCode Gerado&quot;">​</a></h1><p>Caso precise recuperar informações sobre um QrCode gerado anteriormente, você pode fazer uma <code>busca direta</code>. A busca trás todas as informações do QrCode como informação de pagamento e dados do pagador. Existem duas maneiras de efetuar a busca através do mesmo endpoint.</p><h2 id="utilizando-metodo-get" tabindex="-1">Utilizando método GET <a class="header-anchor" href="#utilizando-metodo-get" aria-label="Permalink to &quot;Utilizando método GET&quot;">​</a></h2><p>Para efeturar uma busca de QrCode basta enviar uma requisição do tipo <code>GET</code> para o endpoint <code>/search-qrcode</code> passando os seguintes parâmetros no corpo da requisição:</p><table tabindex="0"><thead><tr><th>parâmetro</th><th>Obrigatório</th><th>tipo</th><th>descrição</th></tr></thead><tbody><tr><td>search</td><td>Sim</td><td><code>strig</code></td><td>QrCode a ser buscado ( id / referece / uuid / pixkey )</td></tr></tbody></table><p>Exemplo:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#79B8FF;"> -X</span><span style="color:#9ECBFF;"> GET</span><span style="color:#9ECBFF;"> https://sttarpay.com/api/v1/search-qrcode</span><span style="color:#79B8FF;"> \\</span></span>\n<span class="line"><span style="color:#E1E4E8;">-H </span><span style="color:#9ECBFF;">&quot;api-key: SEU_API_KEY&quot;</span><span style="color:#79B8FF;"> \\</span></span>\n<span class="line"><span style="color:#E1E4E8;">-H </span><span style="color:#9ECBFF;">&quot;Content-Type: application/json&quot;</span><span style="color:#79B8FF;"> \\</span></span>\n<span class="line"><span style="color:#E1E4E8;">-d </span><span style="color:#9ECBFF;">&#39;{&quot;search&quot;: &quot;106190a8-9ac0-....&quot;}&#39;</span></span></code></pre></div><h2 id="utilizando-metodo-post" tabindex="-1">Utilizando método POST <a class="header-anchor" href="#utilizando-metodo-post" aria-label="Permalink to &quot;Utilizando método POST&quot;">​</a></h2><p>Para efeturar uma busca de QrCode basta enviar uma requisição do tipo <code>POST</code> para o endpoint <code>/search-qrcode</code> passando os seguintes parâmetros no corpo da requisição:</p><table tabindex="0"><thead><tr><th>parâmetro</th><th>Obrigatório</th><th>tipo</th><th>descrição</th></tr></thead><tbody><tr><td>search</td><td>Sim</td><td><code>strig</code></td><td>QrCode a ser buscado ( id / referece / uuid / pixkey )</td></tr></tbody></table><p>Exemplo:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#B392F0;">curl</span><span style="color:#79B8FF;"> -X</span><span style="color:#9ECBFF;"> POST</span><span style="color:#9ECBFF;"> https://sttarpay.com/api/v1/search-qrcode</span><span style="color:#79B8FF;"> \\</span></span>\n<span class="line"><span style="color:#E1E4E8;">-H </span><span style="color:#9ECBFF;">&quot;api-key: SEU_API_KEY&quot;</span><span style="color:#79B8FF;"> \\</span></span>\n<span class="line"><span style="color:#E1E4E8;">-H </span><span style="color:#9ECBFF;">&quot;Content-Type: application/json&quot;</span><span style="color:#79B8FF;"> \\</span></span>\n<span class="line"><span style="color:#E1E4E8;">-d </span><span style="color:#9ECBFF;">&#39;{&quot;search&quot;: &quot;106190a8-9ac0-....&quot;}&#39;</span></span></code></pre></div><h2 id="resposta-da-solicitacao" tabindex="-1">Resposta da solicitação <a class="header-anchor" href="#resposta-da-solicitacao" aria-label="Permalink to &quot;Resposta da solicitação&quot;">​</a></h2><p>Ambos os metos (GET e POST) possuem o mesmo resultado em seu corpo. A resposta é em formato <code>json</code> como no exemplo abaixo:</p><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code" tabindex="0"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;payment_method&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;pix&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;reference_code&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;9479dcb26...&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;external_reference&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;value_cents&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">239998</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;content&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;00020126920014br.gov.bcb....&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;status&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;awaiting_payment&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;generator_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;generator_document&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;payer_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;payer_document&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;payer_bank_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;payer_agency&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;payer_account&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;payer_account_type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;registration_date&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2024-08-02T13:07:26.000-03:00&quot;</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;payment_date&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span><span style="color:#E1E4E8;">,</span></span>\n<span class="line"><span style="color:#79B8FF;">    &quot;end_to_end&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">null</span></span>\n<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre></div><h3 id="descricao-dos-itens-da-resposta" tabindex="-1">descrição dos itens da resposta <a class="header-anchor" href="#descricao-dos-itens-da-resposta" aria-label="Permalink to &quot;descrição dos itens da resposta&quot;">​</a></h3><table tabindex="0"><thead><tr><th>Item</th><th>tipo</th><th>descrição</th></tr></thead><tbody><tr><td>payment_method</td><td><code>string</code></td><td>Tipo do pagamento (pix/credit_card/billet)</td></tr><tr><td>value_cents</td><td><code>string</code></td><td>Valor (total em centavos) da entrada</td></tr><tr><td>reference_code</td><td><code>string</code></td><td>Código de referência unico gerado pelo gateway</td></tr><tr><td>external_reference</td><td><code>string, null</code></td><td>Referencia externa do pagamento (auto-preenchido pelo gateway)</td></tr><tr><td>content</td><td><code>string</code></td><td>Chave pix temporaria referente ao pagamento</td></tr><tr><td>status</td><td><code>string</code></td><td>Status da entrada (paid, canceled, error, awaiting_payment)</td></tr><tr><td>end_to_end</td><td><code>string</code></td><td>Codigo de ponta-a-ponta da transação (Gerado pelo Bacen)</td></tr><tr><td>payer_name</td><td><code>string</code></td><td>Nome da pessoa que pagou o QRCode / Checkout</td></tr><tr><td>payer_document</td><td><code>string</code></td><td>Numero do CPF ou CNPJ do pagador do QRCode / Checkout</td></tr><tr><td>registration_date</td><td><code>string</code></td><td>Data do registro da entrada no Bacen</td></tr><tr><td>payment_date</td><td><code>string</code></td><td>Data de registro da entrada gateway</td></tr></tbody></table>',17)];const p=a(n,[["render",function(a,t,e,n,p,r){return o(),s("div",null,l)}]]);export{e as __pageData,p as default};
