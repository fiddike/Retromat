<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20170920170407 extends AbstractMigration
{
    /**
     * @throws \Doctrine\DBAL\Exception
     */
    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf('mysql' !== $this->connection->getDatabasePlatform()->getName(), 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('DROP TABLE activity');
    }

    /**
     * @throws \Doctrine\DBAL\Exception
     */
    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf('mysql' !== $this->connection->getDatabasePlatform()->getName(), 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('CREATE TABLE activity (doctrine_id INT AUTO_INCREMENT NOT NULL, retromat_id SMALLINT NOT NULL, language VARCHAR(2) NOT NULL COLLATE utf8_unicode_ci, phase SMALLINT NOT NULL, name VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, summary VARCHAR(255) NOT NULL COLLATE utf8_unicode_ci, `desc` LONGTEXT NOT NULL COLLATE utf8_unicode_ci, duration VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci, source LONGTEXT DEFAULT NULL COLLATE utf8_unicode_ci, more LONGTEXT DEFAULT NULL COLLATE utf8_unicode_ci, suitable VARCHAR(255) DEFAULT NULL COLLATE utf8_unicode_ci, UNIQUE INDEX UNIQ_AC74095AA9A6C442 (retromat_id), INDEX retromatId_index (retromat_id), INDEX phase_index (phase), PRIMARY KEY(doctrine_id)) DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci ENGINE = InnoDB');
    }
}
