# :movie_camera: Safetycine - Evaristo / Leandro
Empresa com foco em treinamentos no assunto de segurança do trabalho com plataforma de videos. </br>
https://safetycine.com.br/

## Orçamentos Possíveis
### 1.	Wordpress + Toroflix(catálogo) + Vimeo(opcional) + Gerando link(Api existente).
**Valor**: R$ 5.000,00 </br>
**Data de Entrega**: 7 dias após adquirir o Toroflix
  *	Fluxo Cliente/Prospect.
    * Cliente/Prospect acessa catálogo no toroflix.
    * Direcionado para página login/compra.
      * **Opcional**: Criação de uma nóva página login/compra.
    * Após autenticado pela plataforma existente.
    * Seleciona videos e Gera Links.
  * Fluxo Usuário Final.
    * Usuário acessa link.
    * Exibir página com vídeo (Plataforma existente)
  * Fluxo Admin (sem integrar com vímeo - opcional)
    * Fazer upload do vídeo no vimeo
    * Criar item referente ao vídeo no Toroflix
      * **Observação**: Considerando que a plataforma atual tenha uma integração com o vimeo.

### 2. SafetyCine(plataforma videos) + Toroflix(Layout) + Vimeo + gerando link(Nova Api)
**Valor**: R$ 15.000,00 </br>
**Data de Entrega**: 30/08/2020
  * Fluxo Cliente/Prospect
    * Cliente/Prospect acessa catálogo no toroflix
    * Direcionado para página login/compra - nova página de login/compra dentro do wordpress
      * Loga como Cliente
        * Cai na tela de catálogo (com permissão de gerar links)
        * Área do cliente (Com links gerados, estatísticas, data de vencimento do plano, etc)
      * Redirecionado para contato no whatsapp
  * Fluxo Usuário Final
    * Usuário acessa link
    * Exibir página com vídeo com token de expiração - Plataforma wordpress (mesma página Toroflix)
    * Vídeo não encontrado - Plataforma wordpress
  * Fluxo Admin
    * Fazer upload do vídeo no vimeo
    * Criar item referente ao vídeo
    * Criar Acesso do cliente na plataforma Toroflix
    * Dashboard de estatísticas do cliente

## Pontos necessários
1.	Ter função de gerar links para cada vídeo, sendo possível expirar este link quando necessário (Regra de negócio).
2.	Analisar a quantidade de visualizações por vídeo/cliente.
3.	Ter uma página “INTEGRAÇÃO”, onde só terá acesso quem for liberado pela safetycine, conforme o plano.
4.	Permissão para teste período de 14 dias. Após estes 14 dias, informar que necessita entrar em contato com os consultores da Safetycine para aquisição de algum plano.

## Características / Requerimentos
 * Visualização dos vídeos</br>
 * Escolha de quais videos poderam ser visualizados pela equipe</br>
 * Geração de links, com opçes de invalidar o link gerado</br>
 * Criação de playlists, favoritos</br>
 * Geração de vídeos avançados/integrações com um plano premium

## Must-Have
 * Cada empresa teria sua área administrativa particular</br>
 * Gerar estatística por empresa</br>
 * Distribuição, geração de link (controle para não ser divulgado a lote gratuitamente)</br>
 * Criação de tipos de perfis/planos para usuários e categorias de vídeos</br>

## Observações
Existirão vários tipos de planos, para tipos de vídeos</br>
Gerar um MVP o quanto antes, com baixo valor</br>
Cara bonitinha mais simples e rápida possível</br>

# Useful Links
https://torothemes.com/themes/toroflix/


