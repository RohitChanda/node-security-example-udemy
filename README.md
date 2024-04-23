## Generate a Private Key
openssl genrsa -out key.pem

## Create a CSR (Certificate Signing Request)
openssl req -new -key key.pem -out csr.pem

## Generate the SSL Certificate
openssl x509 -req -days 365 -in csr.pem -signkey key.pem -out cert.pem
Note