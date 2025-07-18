module.exports = class Page {
    get loginWidget() {
        return $('//*[@content-desc="Login"]');
    }

    get formsWidget() {
        return $('//*[@content-desc="Forms"]');
    }
}