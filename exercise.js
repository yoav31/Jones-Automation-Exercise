import { chromium } from 'playwright';
(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    try {
        await page.goto('https://test.netlify.app/', {waitUntil: 'networkidle'});
        await page.fill('#name', 'Yoav Vaknin');
        await page.fill('#email', 'yoav31yv@gmail.com');
        await page.fill('#phone', '0502193004');
        await page.fill('#company', 'Jones');
        await page.fill('#website', 'https://www.linkedin.com/in/yoav-vaknin-6b872a242/');
        await page.locator('#employees').selectOption({label: '51-500'});
        await page.screenshot({ path: 'before_submit.png' });
        await page.getByRole('button', {name: 'Request a call back'}).click();
        await page.getByText('Thank You!').waitFor();
        console.log('Reached Thank You page');
    }
    catch (error) {
        console.error('Automation failed:', error);
    }
    finally {
        await browser.close();
    }
})();