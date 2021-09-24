package com.ufpb.remais.model;

public enum Category {
    COMPUTACAO_DESPLUGADA("Computação Desplugada"),
    HARDWARES_E_SOFTWARES("Hardwares e Softwares"),
    REDES_DE_COMPUTADORES("Redes de Computadores"),
    SOFTWARES_EDUCACIONAIS("Softwares Educacionais"),
    SISTEMAS_OPERACIONAIS("Sistemas Operacionais"),
    DISCIPLINAS_REGULARES("Disciplinas Regulares"),
    LOGICA_DE_PROGRAMACAO("Lógica de Programação"),
    OUTROS("Outros");

    private String description;

    Category(String description){
        this.description = description;
    }

    public String getDescription() {
        return description;
    }
}
