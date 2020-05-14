/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
const {
    resolve
} = require('path');

const {
    group,
    webpack: {
        entry,
        alias
    }
} = require('../../smartedit-build/builders');

const commonsAlias = alias('smartedittrailcommons', resolve('./jsTarget/web/features/smartedittrailcommons'));

const smartedit = group(
    commonsAlias,
    alias('smartedittrail', resolve('./jsTarget/web/features/smartedittrail'))
);
const smarteditContainer = group(
    commonsAlias,
    alias('smartedittrailcontainer', resolve('./jsTarget/web/features/smartedittrailContainer')),
);

module.exports = {
    ySmarteditKarma: () => group(
        smartedit
    ),
    ySmarteditContainerKarma: () => group(
        smarteditContainer
    ),
    ySmartedit: () => group(
        smartedit,
        entry({
            smartedittrail: resolve('./jsTarget/web/features/smartedittrail/smartedittrailModule.ts')
        })
    ),
    ySmarteditContainer: () => group(
        smarteditContainer,
        entry({
            smartedittrailContainer: resolve('./jsTarget/web/features/smartedittrailContainer/smartedittrailcontainerModule.ts')
        })
    )
};
