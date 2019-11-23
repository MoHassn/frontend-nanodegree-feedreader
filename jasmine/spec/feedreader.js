/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* This test is to make sure that every element(feed) in
         * allFeeds Array has a url propery and that the URL is not empty.
         */
        it('Each feed has a URL', function() {
            // the returned value of every() is true if all elements
            // in allFeeds Array has a url property with truthy value.
            let allHaveURL = allFeeds.every(feed => feed.url);

            expect(allHaveURL).toBeTruthy();
        });


        /* This test is to ensure that each feed in the allFeeds
         * Array has a name property with a value and not empty
         */
        it('Each feed has a name', function() {
            let allHaveName = allFeeds.every(feed => feed.name);

            expect(allHaveName).toBeTruthy();
        });
    });



    /**
     * This test suite is to ensure that the menu is hidden
     * by default and it changes visibility when the menu icon
     * is clicked.
     */
    describe('The menu', function() {
        /**
         * This spec to ensure that the menu is hidden by default.
         */
        it('The menu is hidden by default', function() {
            let hidden = document.querySelector('body').classList.contains('menu-hidden');

            expect(hidden).toBe(true);
        });

        /**
         * This spec to ensure that the menu changes the visibility when
         * clicking the menu icon.
         */
        it('The menu changes visibility when the menu icon is clicked', function() {
            let menuIcon = document.querySelector('.menu-icon-link');
            let body = document.querySelector('body');

            menuIcon.click(); // Simulates a mouse click on an element.
            expect(body.classList.contains('menu-hidden')).toBe(false);

            menuIcon.click();
            expect(body.classList.contains('menu-hidden')).toBe(true);
        });

    });

    /**
     * This suite is to ensure that after the loadFeed
     * finishes the .feed has at least .entry inside it.
     */
    describe('Initial Entries', function() {
        // To ensure that the loadFeed() finishes before
        // running the test specs
        beforeEach(function(done){
            loadFeed(0, function() {
                done();
            });
        });
        /**
         * This spec is to ensure that the .feed has at least .entry
         * element after the loadFeed() finishes
         */
        it('There is at least a single element withing feed container after calling loadFeed()', function(done){

            expect($('.feed').has('.entry').length).toBeTruthy();
            done();
        });
    });


    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
