<?php
declare(strict_types = 1);

namespace App\Tests\Controller;

use App\Tests\AbstractTestCase;

class ActivityEditorControllerTest extends AbstractTestCase
{
    public function setUp(): void
    {
        // empty database before each test.
        // any test that needs data to function has to specify the data needed explicitly.
        $this->loadFixtures([]);
    }

    public function testCreateNewActivityUsesNextFreeRetromatIdEmptyDb()
    {
        $client = $this->makeClientLoginAdmin();

        $crawler = $client->request('GET', '/en/team/activity/new');
        $prefilledRetromatId = $crawler->filter('#appbundle_activity2_retromatId')->eq(0)->attr('value');

        $this->assertEquals(1, $prefilledRetromatId);
    }

    public function testCreateNewActivityUsesNextFreeRetromatIdFullDb()
    {
        $client = $this->makeClientLoginAdminLoadFixtures();

        $crawler = $client->request('GET', '/en/team/activity/new');
        $prefilledRetromatId = $crawler->filter('#appbundle_activity2_retromatId')->eq(0)->attr('value');

        $this->assertEquals(132, $prefilledRetromatId);
    }

    public function testCreateNewActivityPhase1()
    {
        $client = $this->makeClientLoginAdmin();

        $crawler = $client->request('GET', '/en/team/activity/new');
        $form = $crawler->selectButton('Publish')->form()->setValues(
            [
                'appbundle_activity2[phase]' => 1,
                'appbundle_activity2[name]' => 'foo',
                'appbundle_activity2[summary]' => 'bar',
                'appbundle_activity2[desc]' => 'la',
            ]
        );
        $crawler = $client->submit($form);

        $this->assertStatusCode(302, $client);
        $this->assertEquals(
            'http://localhost/en/team/activity/1',
            $crawler->selectLink('/en/team/activity/1')->link()->getUri()
        );
    }

    public function testCreateNewActivityPhase0()
    {
        $client = $this->makeClientLoginAdmin();

        $crawler = $client->request('GET', '/en/team/activity/new');
        $form = $crawler->selectButton('Publish')->form()->setValues(
            [
                'appbundle_activity2[phase]' => 0,
                'appbundle_activity2[name]' => 'foo',
                'appbundle_activity2[summary]' => 'bar',
                'appbundle_activity2[desc]' => 'la',
            ]
        );
        $crawler = $client->submit($form);

        $this->assertStatusCode(302, $client);
        $this->assertEquals(
            'http://localhost/en/team/activity/1',
            $crawler->selectLink('/en/team/activity/1')->link()->getUri()
        );
    }

    public function testCreateNewActivityMultiple()
    {
        $client = $this->makeClientLoginAdmin();

        $crawler = $client->request('GET', '/en/team/activity/new');
        $form = $crawler->selectButton('Publish')->form()->setValues(
            [
                'appbundle_activity2[phase]' => 1,
                'appbundle_activity2[name]' => 'foo',
                'appbundle_activity2[summary]' => 'bar',
                'appbundle_activity2[desc]' => 'la',
            ]
        );
        $crawler = $client->submit($form);

        $this->assertStatusCode(302, $client);
        $this->assertEquals(
            'http://localhost/en/team/activity/1',
            $crawler->selectLink('/en/team/activity/1')->link()->getUri()
        );

        $crawler = $client->request('GET', '/en/team/activity/new');
        $form = $crawler->selectButton('Publish')->form()->setValues(
            [
                'appbundle_activity2[phase]' => 2,
                'appbundle_activity2[name]' => 'qq',
                'appbundle_activity2[summary]' => 'ww',
                'appbundle_activity2[desc]' => 'ee',
            ]
        );
        $crawler = $client->submit($form);

        $this->assertStatusCode(302, $client);
        $this->assertEquals(
            'http://localhost/en/team/activity/2',
            $crawler->selectLink('/en/team/activity/2')->link()->getUri()
        );
    }

    public function testIndexContainsOnlyTranslatedActivities()
    {
        $client = $this->makeClientLoginAdminLoadFixtures();

        $crawler = $client->request('GET', '/de/team/activity/');
        $this->assertCount(75 + 1, $crawler->filter('tr'));

        $crawler = $client->request('GET', '/en/team/activity/');
        $this->assertCount(131 + 1, $crawler->filter('tr'));

        $crawler = $client->request('GET', '/es/team/activity/');
        $this->assertCount(95 + 1, $crawler->filter('tr'));

        $crawler = $client->request('GET', '/fr/team/activity/');
        $this->assertCount(50 + 1, $crawler->filter('tr'));

        $crawler = $client->request('GET', '/nl/team/activity/');
        $this->assertCount(101 + 1, $crawler->filter('tr'));
    }

    public function testCreateNewActivityTranslationDeForCorrectId()
    {
        $client = $this->makeClientLoginAdminLoadFixtures();

        $crawler = $client->request('GET', '/de/team/activity/new');
        $this->assertEquals(75 + 1, $crawler->filter('#appbundle_activity2_retromatId')->attr('value'));
    }

    public function testCreateNewActivityTranslationDeFormOnlyShowsTranslatableFields()
    {
        $client = $this->makeClientLoginAdminLoadFixtures();

        $crawler = $client->request('GET', '/de/team/activity/new');

        $formValues = $crawler->selectButton('Publish')->form()->getPhpValues();
        $translatableFields = ['name', 'summary', 'desc', '_token'];
        $this->assertEquals($translatableFields, array_keys($formValues['appbundle_activity2']));
    }

    public function testCreateNewActivityTranslationDe()
    {
        $client = $this->makeClientLoginAdminLoadFixtures();

        $crawler = $client->request('GET', '/de/team/activity/new');
        $form = $crawler->selectButton('Publish')->form()->setValues(
            [
                'appbundle_activity2[name]' => 'foo',
                'appbundle_activity2[summary]' => 'bar',
                'appbundle_activity2[desc]' => 'la',
            ]
        );
        $crawler = $client->submit($form);

        $this->assertStatusCode(302, $client);
        $this->assertEquals(
            'http://localhost/de/team/activity/'.(75 + 1),
            $crawler->selectLink('/de/team/activity/'.(75 + 1))->link()->getUri()
        );
    }

    public function testCreateNewActivityNoPrefilledContentForEn()
    {
        $client = $this->makeClientLoginAdminLoadFixtures();

        $crawler = $client->request('GET', '/en/team/activity/new');

        $prefilled = $crawler->selectButton('Publish')->form()->getValues();

        $this->assertEmpty($prefilled['appbundle_activity2[name]']);
        $this->assertEmpty($prefilled['appbundle_activity2[summary]']);
        $this->assertEmpty($prefilled['appbundle_activity2[desc]']);
    }

    public function testCreateNewActivityTranslationDePrefilledFromEn()
    {
        $client = $this->makeClientLoginAdminLoadFixtures();

        $crawler = $client->request('GET', '/de/team/activity/new');

        $prefilled = $crawler->selectButton('Publish')->form()->getValues();

        $this->assertEquals('Round of Admiration', $prefilled['appbundle_activity2[name]']);
        $this->assertEquals(
            'Participants express what they admire about one another',
            $prefilled['appbundle_activity2[summary]']
        );
        $this->assertEquals(
            'Start a round of admiration by facing your neighbour and stating \'What I admire most about you is ...\' Then your neighbour says what she admires about her neighbour and so on until the last participants admires you. Feels great, doesn\'t it?',
            $prefilled['appbundle_activity2[desc]']
        );
    }

    /**
     * @return \Symfony\Bundle\FrameworkBundle\Client
     */
    private function makeClientLoginAdmin(): \Symfony\Bundle\FrameworkBundle\Client
    {
        $refRepo = $this->loadFixtures(['App\Tests\Controller\DataFixtures\LoadUsers'])->getReferenceRepository();
        try {
            $this->loginAs($refRepo->getReference('admin'), 'main');
        } catch (\Exception $e) {
            $this->fail($e);
        }
        $client = $this->makeClient();

        return $client;
    }

    /**
     * @return \Symfony\Bundle\FrameworkBundle\Client
     */
    private function makeClientLoginAdminLoadFixtures(): \Symfony\Bundle\FrameworkBundle\Client
    {
        $refRepo = $this->loadFixtures(
            [
                'App\Tests\Controller\DataFixtures\LoadActivityData',
                'App\Tests\Controller\DataFixtures\LoadUsers',
            ]
        )->getReferenceRepository();
        try {
            $this->loginAs($refRepo->getReference('admin'), 'main');
        } catch (\Exception $e) {
            $this->fail($e);
        }
        $client = $this->makeClient();

        return $client;
    }
}
