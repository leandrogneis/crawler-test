'use strict';

const target = {
    url: "https://esaj.tjsp.jus.br/cpopg/open.do",
    // url: "http://esaj.tjsp.jus.br/cpopg/open.do",
    execute: (crawlerTest, sendResult) => {
        let result = {
            url: target.url
        };

        crawlerTest.start();

        // crawlerTest.takeScreenshot();

        crawlerTest.getText('//*[@id="formConsulta"]/div/table[1]/tbody/tr/td[1]/h2').then(version => {
            result.data = version;
        });

        crawlerTest.flow(() => {
            sendResult(result);
        });
    }
};

exports.target = target;




