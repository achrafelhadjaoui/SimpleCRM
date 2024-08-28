-- CreateTable
CREATE TABLE `client` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `numeroTelephone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `commandefournisseur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fournisseurId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `statut` VARCHAR(191) NOT NULL,

    INDEX `CommandeFournisseur_fournisseurId_fkey`(`fournisseurId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `entreprise` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `siegeSocial` VARCHAR(191) NOT NULL,
    `dateCreation` DATETIME(3) NOT NULL,
    `identifiantFiscal` VARCHAR(191) NOT NULL,
    `capital` DOUBLE NOT NULL,
    `nombreEmployes` INTEGER NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `responsable` VARCHAR(191) NOT NULL,
    `numeroTelephone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `facture` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `clientId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `montantTotal` DOUBLE NOT NULL,

    INDEX `Facture_clientId_fkey`(`clientId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fournisseur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `adresse` VARCHAR(191) NOT NULL,
    `ville` VARCHAR(191) NOT NULL,
    `numeroTelephone` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lignefacture` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `factureId` INTEGER NOT NULL,
    `produitId` INTEGER NOT NULL,
    `quantite` INTEGER NOT NULL,
    `prixUnitaire` DOUBLE NOT NULL,
    `sousTotal` DOUBLE NOT NULL,

    INDEX `LigneFacture_factureId_fkey`(`factureId`),
    INDEX `LigneFacture_produitId_fkey`(`produitId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `produit` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prixAchat` DOUBLE NOT NULL,
    `prixVente` DOUBLE NOT NULL,
    `tauxMarge` DOUBLE NOT NULL,
    `dimension` VARCHAR(191) NOT NULL,
    `taille` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `commandefournisseur` ADD CONSTRAINT `CommandeFournisseur_fournisseurId_fkey` FOREIGN KEY (`fournisseurId`) REFERENCES `fournisseur`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `facture` ADD CONSTRAINT `Facture_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `client`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lignefacture` ADD CONSTRAINT `LigneFacture_factureId_fkey` FOREIGN KEY (`factureId`) REFERENCES `facture`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lignefacture` ADD CONSTRAINT `LigneFacture_produitId_fkey` FOREIGN KEY (`produitId`) REFERENCES `produit`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
