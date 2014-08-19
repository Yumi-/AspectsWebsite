package com.aspects.website.controller;

import com.aspects.website.model.User;
import com.aspects.website.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/**
 * Controller for start
 *
 * Created on 19/08/2014
 */
@Configuration
@EnableTransactionManagement
public class StartController {

    /**
     * User service
     */
    @Autowired
    private IUserService userService;

    /**
     * Start
     */
    public void start(){
        User user = new User();
        user.setUsername("John");
        userService.saveUser(user);

        User user2 = new User();
        user2.setUsername("Emily");
        userService.saveUser(user2);

        User user3 = new User();
        user3.setUsername("David");
        userService.saveUser(user3);
    }

}
