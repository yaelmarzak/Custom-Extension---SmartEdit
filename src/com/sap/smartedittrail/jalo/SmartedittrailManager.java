/*
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */
package com.sap.smartedittrail.jalo;

import de.hybris.platform.jalo.JaloSession;
import de.hybris.platform.jalo.extension.ExtensionManager;
import com.sap.smartedittrail.constants.SmartedittrailConstants;
import org.apache.log4j.Logger;

@SuppressWarnings("PMD")
public class SmartedittrailManager extends GeneratedSmartedittrailManager
{
	@SuppressWarnings("unused")
	private static Logger log = Logger.getLogger( SmartedittrailManager.class.getName() );
	
	public static final SmartedittrailManager getInstance()
	{
		ExtensionManager em = JaloSession.getCurrentSession().getExtensionManager();
		return (SmartedittrailManager) em.getExtension(SmartedittrailConstants.EXTENSIONNAME);
	}
	
}
