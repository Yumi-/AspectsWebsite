package com.aspects.website.dto;

import java.io.Serializable;

/**
 * Dto for User
 *
 * Created on 19/08/2014
 */
public class UserDto implements Serializable {

    /**
     * The username
     */
    private String username;

    /**
     * Getter for property 'username'.
     *
     * @return Value for property 'username'.
     */
    public String getUsername() {
        return username;
    }

    /**
     * Setter for property 'username'.
     *
     * @param pUsername Value to set for property 'username'.
     */
    public void setUsername(final String pUsername) {
        username = pUsername;
    }
}
