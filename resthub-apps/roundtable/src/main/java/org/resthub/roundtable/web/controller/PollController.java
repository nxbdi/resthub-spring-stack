package org.resthub.roundtable.web.controller;

import javax.inject.Inject;
import javax.inject.Named;
import javax.ws.rs.Path;

import org.resthub.core.service.ResourceGenericService;
import org.resthub.roundtable.domain.model.Poll;
import org.resthub.web.controller.GenericResourceController;

/**
 * Poll controller.
 * @author Nicolas Carlier (mailto:pouicbox@yahoo.fr)
 */
@Path("/poll")
@Named("pollController")
public class PollController extends GenericResourceController<Poll> {

    @Inject
    @Named("pollService")
    @Override
    public void setResourceService(ResourceGenericService<Poll> resourceService) {
        this.resourceService = resourceService;
    }
}