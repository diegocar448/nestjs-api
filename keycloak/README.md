# Open ID Connect

# Oauth - Autorização | Autenticação

Requisição -> Nest -> Keycloak -> Controller -> Resposta

JWT -> assinatura RSA - chave publica(Quem ter a chave pública consegue saber se o token é valido) | chave privada(ficará no Keycloak, quem tiver ela pode emitir um novo token)

Quem tive a chave publica consegue validar o token sem precisar buscar no Keycloak