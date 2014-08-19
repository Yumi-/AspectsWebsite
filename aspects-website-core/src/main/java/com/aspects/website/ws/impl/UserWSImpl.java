package com.aspects.website.ws.impl;

import com.aspects.website.model.User;
import com.aspects.website.service.IUserService;
import com.aspects.website.ws.IUserWS;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * Implementation of user WS Impl
 *
 * Created on 19/08/2014
 */
@Path("/user")
@Component
public class UserWSImpl implements IUserWS {

    /**
     * The user service
     */
    @Autowired
    private IUserService userService;

    /**
     * Get user by id
     *
     * @param pUserId the user id
     * @return the response
     */
    @GET
    @Path("/get/{userId}")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Response getUserById(@PathParam("userId")final Integer pUserId){
        User user = userService.getUserById(pUserId);
        return Response.status(Response.Status.OK).entity(user).build();
    }

    /**
     * Add a user
     *
     * @return the response
     */
    @GET
    @Path("/add")
    public Response addUser(){
        User user = new User();
        user.setUsername("John");
        userService.saveUser(user);
        return Response.status(Response.Status.OK).build();
    }

}
