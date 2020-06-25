<?php

namespace tests\AppBundle\Importer\Activity;

use AppBundle\Entity\Activity2;
use AppBundle\Importer\Activity\ActivityImporter;
use AppBundle\Importer\Activity\Exception\InvalidActivityException;
use Liip\FunctionalTestBundle\Test\WebTestCase;
use AppBundle\Importer\Activity\ActivityReader;
use AppBundle\Importer\ArrayToObjectMapper;
use Symfony\Component\Validator\Validator\ValidatorInterface;
use Doctrine\Common\Persistence\ObjectManager;

class ActivityImporterIntegrationTest extends WebTestCase
{
    public function testImportOnEmptyDbEn()
    {
        $this->loadFixtures([]);
        $reader = new ActivityReader(null, ['en' => __DIR__.'/TestData/activities_en.js']);

        $mapper = new ArrayToObjectMapper();
        /** @var ValidatorInterface $validator */
        $validator = $this->getContainer()->get('validator');
        /** @var ObjectManager $entityManager */
        $entityManager = $this->getContainer()->get('doctrine.orm.entity_manager');
        $activityImporter = new ActivityImporter($entityManager, $reader, $mapper, $validator);

        $activityImporter->import();
        $entityManager->clear();

        $this->assertCount(129, $entityManager->getRepository('AppBundle:Activity2')->findAll());
        $this->assertEquals(
            'Discuss the 12 agile principles and pick one to work on',
            $entityManager->getRepository('AppBundle:Activity2')->findOneBy(['retromatId' => 123])->translate(
                'en'
            )->getSummary()
        );
        $this->assertEquals(
            'Discuss the 12 agile principles and pick one to work on',
            $entityManager->getRepository('AppBundle:Activity2')->findOneBy(['retromatId' => 123])->getSummary()
        );
    }

    public function testImportOnTopOfExisting()
    {
        $this->loadFixtures([]);
        $reader = new ActivityReader(null, ['en' => __DIR__.'/TestData/activities_en.js']);
        $mapper = new ArrayToObjectMapper();
        /** @var ValidatorInterface $validator */
        $validator = $this->getContainer()->get('validator');
        /** @var ObjectManager $entityManager */
        $entityManager = $this->getContainer()->get('doctrine.orm.entity_manager');
        $activityImporter = new ActivityImporter($entityManager, $reader, $mapper, $validator);

        $activityImporter->import();
        $entityManager->clear();

        $activity2 = $entityManager->getRepository('AppBundle:Activity2')->findOneBy(['retromatId' => 123]);
        $entityManager->remove($activity2);
        $entityManager->flush();
        $this->assertCount(128, $entityManager->getRepository('AppBundle:Activity2')->findAll());

        $activityImporter->import();
        $entityManager->clear();

        $this->assertCount(129, $entityManager->getRepository('AppBundle:Activity2')->findAll());
        $this->assertEquals(
            'Discuss the 12 agile principles and pick one to work on',
            $entityManager->getRepository('AppBundle:Activity2')->findOneBy(['retromatId' => 123])->getSummary()
        );
    }

    public function testImportOnEmptyDbDe()
    {
        $this->loadFixtures([]);
        $reader = new ActivityReader(
            null,
            [
                'en' => __DIR__.'/TestData/activities_en.js',
                'de' => __DIR__.'/TestData/activities_de.js',
            ]
        );
        $mapper = new ArrayToObjectMapper();
        /** @var ValidatorInterface $validator */
        $validator = $this->getContainer()->get('validator');
        /** @var ObjectManager $entityManager */
        $entityManager = $this->getContainer()->get('doctrine.orm.entity_manager');
        $activityImporter = new ActivityImporter($entityManager, $reader, $mapper, $validator, ['de']);

        $activityImporter->import();
        $entityManager->clear();

        // 129, because English is always imported to set the metadate correctly
        $this->assertCount(129, $entityManager->getRepository('AppBundle:Activity2')->findAll());
        $activity2 = $entityManager->getRepository('AppBundle:Activity2')->findOneBy(['retromatId' => 71]);
        $this->assertEquals(
            'Kläre, wie zufrieden das Team ist mit Retro-Ergebnisse der Retrospektive, einer fairen Verteilung der Redezeit und der Stimmung während der Retrospektive war',
            $activity2->translate('de', $fallbackToDefault = false)->getSummary()
        );
        $activity2->setCurrentLocale('de');
        $this->assertEquals(
            'Kläre, wie zufrieden das Team ist mit Retro-Ergebnisse der Retrospektive, einer fairen Verteilung der Redezeit und der Stimmung während der Retrospektive war',
            $activity2->getSummary()
        );
    }

    public function testImportOnEmptyDbEnDe()
    {
        $this->loadFixtures([]);
        $mapper = new ArrayToObjectMapper();
        /** @var ValidatorInterface $validator */
        $validator = $this->getContainer()->get('validator');
        /** @var ObjectManager $entityManager */
        $entityManager = $this->getContainer()->get('doctrine.orm.entity_manager');
        $activityFileNames = [
            'en' => __DIR__.'/TestData/activities_en.js',
            'de' => __DIR__.'/TestData/activities_de.js',
        ];
        $reader = new ActivityReader(null, $activityFileNames);
        $activityImporter = new ActivityImporter($entityManager, $reader, $mapper, $validator, ['en', 'de']);

        $activityImporter->import();
        $entityManager->clear();

        $this->assertCount(129, $entityManager->getRepository('AppBundle:Activity2')->findAll());

        $activity2 = $entityManager->getRepository('AppBundle:Activity2')->findOneBy(['retromatId' => 71]);
        $this->assertEquals(
            'Check satisfaction with retro results, fair distribution of talk time &amp; mood',
            $activity2->translate('en')->getSummary()
        );
        $this->assertEquals(
            'Kläre, wie zufrieden das Team ist mit Retro-Ergebnisse der Retrospektive, einer fairen Verteilung der Redezeit und der Stimmung während der Retrospektive war',
            $activity2->translate('de', $fallbackToDefault = false)->getSummary()
        );

        $activity2->setCurrentLocale('en');
        $this->assertEquals(
            'Check satisfaction with retro results, fair distribution of talk time &amp; mood',
            $activity2->getSummary()
        );
        $activity2->setCurrentLocale('de');
        $this->assertEquals(
            'Kläre, wie zufrieden das Team ist mit Retro-Ergebnisse der Retrospektive, einer fairen Verteilung der Redezeit und der Stimmung während der Retrospektive war',
            $activity2->getSummary()
        );
    }

    public function testImportThrowsExceptionOnInvalidActivity()
    {
        $this->loadFixtures([]);
        $reader = new ActivityReader(null, ['en' => __DIR__.'/TestData/activities_en_1_valid_1_invalid.js']);
        $mapper = new ArrayToObjectMapper();
        /** @var ValidatorInterface $validator */
        $validator = $this->getContainer()->get('validator');
        /** @var ObjectManager $entityManager */
        $entityManager = $this->getContainer()->get('doctrine.orm.entity_manager');
        $activityImporter = new ActivityImporter($entityManager, $reader, $mapper, $validator);

        try {
            $activityImporter->import();
        } catch (InvalidActivityException $exception) {
            $this->assertTrue(true);
        }

        $this->fail('Expected exception not thrown: InvalidActivityException for Activity (type 1).');
    }

    public function testImportThrowsExceptionOnInvalidActivity2Meta()
    {
        $this->loadFixtures([]);
        $reader = new ActivityReader(null, ['en' => __DIR__.'/TestData/activities_en_1_valid_1_invalid.js']);
        $mapper = new ArrayToObjectMapper();
        /** @var ValidatorInterface $validator */
        $validator = $this->getContainer()->get('validator');
        /** @var ObjectManager $entityManager */
        $entityManager = $this->getContainer()->get('doctrine.orm.entity_manager');
        $activityImporter = new ActivityImporter($entityManager, $reader, $mapper, $validator);

        try {
            $activityImporter->import2();
        } catch (InvalidActivityException $exception) {
            $this->assertTrue(true);
        }

        $this->fail('Expected exception not thrown: InvalidActivityException for Activity2 metadata.');
    }

    public function testImportThrowsExceptionOnInvalidActivity2Translation()
    {
        $this->loadFixtures([]);
        $reader = new ActivityReader(
            null, ['en' => __DIR__.'/TestData/activities_en_1_valid_1_invalid_translation.js']
        );

        $mapper = new ArrayToObjectMapper();
        /** @var ValidatorInterface $validator */
        $validator = $this->getContainer()->get('validator');
        /** @var ObjectManager $entityManager */
        $entityManager = $this->getContainer()->get('doctrine.orm.entity_manager');
        $activityImporter = new ActivityImporter($entityManager, $reader, $mapper, $validator);

        try {
            $activityImporter->import2();
        } catch (InvalidActivityException $exception) {
            $this->assertTrue(true);
        }

        $this->fail('Expected exception not thrown: InvalidActivityException for Activity2 translation.');
    }

    public function testImportUpdatesExisting()
    {
        $this->loadFixtures([]);
        $reader = new ActivityReader(null, ['en' => __DIR__.'/TestData/activities_en_esvp.js']);
        $mapper = new ArrayToObjectMapper();
        /** @var ValidatorInterface $validator */
        $validator = $this->getContainer()->get('validator');
        /** @var ObjectManager $entityManager */
        $entityManager = $this->getContainer()->get('doctrine.orm.entity_manager');
        $activityImporter = new ActivityImporter($entityManager, $reader, $mapper, $validator);

        $activityImporter->import();
        $entityManager->clear();

        $this->assertEquals(
            'ESVP',
            $entityManager->getRepository('AppBundle:Activity2')->findOneBy(['retromatId' => 1])->getName()
        );

        $reader2 = new ActivityReader(null, ['en' => __DIR__.'/TestData/activities_en_esvp_updated.js']);
        $activityImporter2 = new ActivityImporter($entityManager, $reader2, $mapper, $validator);

        $activityImporter2->import();
        $entityManager->clear();

        $this->assertEquals(
            'ESVPupdated',
            $entityManager->getRepository('AppBundle:Activity2')->findOneBy(['retromatId' => 1])->getName()
        );
    }

    public function testImport2MultipleImportsAllLanguages()
    {
        $this->loadFixtures([]);
        $mapper = new ArrayToObjectMapper();
        /** @var ValidatorInterface $validator */
        $validator = $this->getContainer()->get('validator');
        /** @var ObjectManager $entityManager */
        $entityManager = $this->getContainer()->get('doctrine.orm.entity_manager');
        $activityFileNames = [
            'en' => __DIR__.'/TestData/activities_en.js',
            'de' => __DIR__.'/TestData/activities_de.js',
        ];
        $reader = new ActivityReader(null, $activityFileNames);
        $activityImporter = new ActivityImporter($entityManager, $reader, $mapper, $validator);

        $activityImporter->import2Multiple(['en', 'de']);
        $entityManager->clear();

        $this->assertCount(129, $entityManager->getRepository('AppBundle:Activity2')->findAll());

        $activity2 = $entityManager->getRepository('AppBundle:Activity2')->findOneBy(['retromatId' => 71]);
        $this->assertEquals(
            'Check satisfaction with retro results, fair distribution of talk time &amp; mood',
            $activity2->translate('en')->getSummary()
        );
        $this->assertEquals(
            'Kläre, wie zufrieden das Team ist mit Retro-Ergebnisse der Retrospektive, einer fairen Verteilung der Redezeit und der Stimmung während der Retrospektive war',
            $activity2->translate('de', $fallbackToDefault = false)->getSummary()
        );

        $activity2->setCurrentLocale('en');
        $this->assertEquals(
            'Check satisfaction with retro results, fair distribution of talk time &amp; mood',
            $activity2->getSummary()
        );
        $activity2->setCurrentLocale('de');
        $this->assertEquals(
            'Kläre, wie zufrieden das Team ist mit Retro-Ergebnisse der Retrospektive, einer fairen Verteilung der Redezeit und der Stimmung während der Retrospektive war',
            $activity2->getSummary()
        );
    }

    public function testImport2MultipleMetaDataFromEnglishOnly()
    {
        $this->loadFixtures([]);
        $mapper = new ArrayToObjectMapper();
        /** @var ValidatorInterface $validator */
        $validator = $this->getContainer()->get('validator');
        /** @var ObjectManager $entityManager */
        $entityManager = $this->getContainer()->get('doctrine.orm.entity_manager');
        $activityFileNames = [
            'en' => __DIR__.'/TestData/activities_en_esvp.js',
            'de' => __DIR__.'/TestData/activities_de_feug_wrong_translated_meta.js',
        ];
        $reader = new ActivityReader(null, $activityFileNames);
        $activityImporter = new ActivityImporter($entityManager, $reader, $mapper, $validator);

        $activityImporter->import2Multiple(['en', 'de']);
        $entityManager->clear();

        $this->assertCount(1, $entityManager->getRepository('AppBundle:Activity2')->findAll());

        $activity2 = $entityManager->getRepository('AppBundle:Activity2')->findOneBy(['retromatId' => 1]);
        $this->assertEquals(
            'Short',
            $activity2->getDuration()
        );
    }

    public function testImport2MultipleNoSuperfluousNonEnglishTransations()
    {
        $this->loadFixtures([]);
        $mapper = new ArrayToObjectMapper();
        /** @var ValidatorInterface $validator */
        $validator = $this->getContainer()->get('validator');
        /** @var ObjectManager $entityManager */
        $entityManager = $this->getContainer()->get('doctrine.orm.entity_manager');
        $activityFileNames = [
            'en' => __DIR__.'/TestData/activities_en_2.js',
            'de' => __DIR__.'/TestData/activities_de_feug_wrong_translated_meta.js',
        ];
        $reader = new ActivityReader(null, $activityFileNames);
        $activityImporter = new ActivityImporter($entityManager, $reader, $mapper, $validator);

        $activityImporter->import2Multiple(['en', 'de']);
        $entityManager->clear();

        $this->assertCount(2, $entityManager->getRepository('AppBundle:Activity2')->findAll());
        $this->assertCount(3, $entityManager->getRepository('AppBundle:Activity2Translation')->findAll());
    }
}
