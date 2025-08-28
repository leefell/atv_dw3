CREATE TABLE salasdeaula (
    salasdeaulaid SERIAL PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL,
    localizacao VARCHAR(255) NOT NULL,
    capacidade INTEGER NOT NULL,
    removido BOOLEAN DEFAULT FALSE
);
