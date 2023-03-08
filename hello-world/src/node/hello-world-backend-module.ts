import { ContainerModule, injectable } from "@theia/core/shared/inversify";
import { LocalizationContribution, LocalizationRegistry } from "@theia/core/lib/node/i18n/localization-contribution";

export default new ContainerModule(bind => {
    bind(CustomLocalizationContribution).toSelf().inSingletonScope();
    bind(LocalizationContribution).toService(CustomLocalizationContribution);
});

@injectable()
class CustomLocalizationContribution implements LocalizationContribution {
    async registerLocalizations(registry: LocalizationRegistry): Promise<void> {
        registry.registerLocalizationFromRequire('de', require('../../i18n/de.json'));
    }
}