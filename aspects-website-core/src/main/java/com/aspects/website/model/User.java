package com.aspects.website.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * User
 *
 * Created on 19/08/2014
 */
@Entity
@Table(name = "USER")
public class User {

    /**
     * Id
     */
    @Id
    @Column(name = "ID", nullable = false)
    private Integer userId;

    /**
     * Name
     */
    @Column(name = "NAME", nullable = false)
    private String username;

    /**
     * Getter for property 'userId'.
     *
     * @return Value for property 'userId'.
     */
    public Integer getUserId() {
        return userId;
    }

    /**
     * Setter for property 'userId'.
     *
     * @param pUserId Value to set for property 'userId'.
     */
    public void setUserId(final Integer pUserId) {
        userId = pUserId;
    }

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
