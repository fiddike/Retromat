<?php

declare(strict_types=1);

namespace App\Tests\Activity;

use App\Entity\Activity;
use App\Model\Activity\Expander\ActivityExpander;
use PHPUnit\Framework\TestCase;
use Symfony\Component\Yaml\Yaml;

final class ActivityExpanderTest extends TestCase
{
    public function testExpandSourceWithSimpleStringRawHtml(): void
    {
        $activityExpander = new ActivityExpander([]);
        $activity = new Activity();

        $activity->setSource("<a href='http://fairlygoodpractices.com/samolo.htm'>Fairly good practices</a>");
        $activityExpander->expandSource($activity);

        $this->assertEquals(
            '<a href="http://fairlygoodpractices.com/samolo.htm">Fairly good practices</a>',
            $activity->getSource()
        );

        $activity->setSource("<a href='http://www.infoq.com/minibooks/agile-retrospectives-value'>Luis Goncalves</a>");
        $activityExpander->expandSource($activity);

        $this->assertEquals(
            '<a href="http://www.infoq.com/minibooks/agile-retrospectives-value">Luis Goncalves</a>',
            $activity->getSource()
        );
    }

    public function testExpandSourceWithPlaceholderRawHtml(): void
    {
        $activityExpander = new ActivityExpander($this->getSourcesYaml());
        $activity = new Activity();

        $activity->setSource('source_judith');
        $activityExpander->expandSource($activity);

        $this->assertEquals(
            '<a href="https://leanpub.com/ErfolgreicheRetrospektiven">Judith Andresen</a>',
            $activity->getSource()
        );

        $activity->setSource('source_findingMarbles');
        $activityExpander->expandSource($activity);

        $this->assertEquals(
            '<a href="http://www.finding-marbles.com/">Corinna Baldauf</a>',
            $activity->getSource()
        );
    }

    public function testExpandSourceWithPlaceholderAndStringRawHtml(): void
    {
        $activityExpander = new ActivityExpander($this->getSourcesYaml());
        $activity = new Activity();

        $activity->setSource(
            'source_agileRetrospectives + " who took it from \'The Satir Model: Family Therapy and Beyond\'"'
        );
        $activityExpander->expandSource($activity);

        $this->assertEquals(
            '<a href="http://www.amazon.com/Agile-Retrospectives-Making-Teams-Great/dp/0977616649/">Agile Retrospectives</a> who took it from \'The Satir Model: Family Therapy and Beyond\'',
            $activity->getSource()
        );

        $activity->setSource(
            'source_innovationGames + ", found at <a href=\'http://www.ayeconference.com/appreciativeretrospective/\'>Diana Larsen</a>"'
        );
        $activityExpander->expandSource($activity);

        $this->assertEquals(
            '<a href="http://www.amazon.com/Innovation-Games-Creating-Breakthrough-Collaborative/dp/0321437292/">Luke Hohmann</a>, found at <a href="http://www.ayeconference.com/appreciativeretrospective/">Diana Larsen</a>',
            $activity->getSource()
        );
    }

    public function testExpandSourceStringAndPlaceholderRawHtml(): void
    {
        $activityExpander = new ActivityExpander($this->getSourcesYaml());
        $activity = new Activity();

        $activity->setSource('"ALE 2011, " + source_findingMarbles');
        $activityExpander->expandSource($activity);

        $this->assertEquals(
            'ALE 2011, <a href="http://www.finding-marbles.com/">Corinna Baldauf</a>',
            $activity->getSource()
        );

        $activity->setSource(
            '"<a href=\'http://blog.8thlight.com/doug-bradbury/2011/09/19/apreciative_inquiry_retrospectives.html\'>Doug Bradbury</a>, adapted for SW development by " + source_findingMarbles'
        );
        $activityExpander->expandSource($activity);

        $this->assertEquals(
            '<a href="http://blog.8thlight.com/doug-bradbury/2011/09/19/apreciative_inquiry_retrospectives.html">Doug Bradbury</a>, adapted for SW development by <a href="http://www.finding-marbles.com/">Corinna Baldauf</a>',
            $activity->getSource()
        );
    }

    private function getSourcesYaml(): array
    {
        $yaml = <<<YAML
source_agileRetrospectives: "<a href=\"http://www.amazon.com/Agile-Retrospectives-Making-Teams-Great/dp/0977616649/\">Agile Retrospectives<\/a>"
source_findingMarbles: "<a href=\"http://www.finding-marbles.com/\">Corinna Baldauf<\/a>"
source_kalnin: "<a href=\"http://vinylbaustein.net/tag/retrospective/\">Thorsten Kalnin<\/a>"
source_innovationGames: "<a href=\"http://www.amazon.com/Innovation-Games-Creating-Breakthrough-Collaborative/dp/0321437292/\">Luke Hohmann<\/a>"
source_facilitatorsGuide: "<a href=\"http://www.amazon.de/Facilitators-Participatory-Decision-Making-Jossey-Bass-Management/dp/0787982660/\">Facilitator's Guide to Participatory Decision-Making<\/a>"
source_skycoach: "<a href=\"http://skycoach.be/ss/\">Nick Oostvogels</a>"
source_judith: "<a href=\"https://leanpub.com/ErfolgreicheRetrospektiven\">Judith Andresen</a>"
source_unknown: "Unknown"
YAML;

        return Yaml::parse($yaml);
    }
}
