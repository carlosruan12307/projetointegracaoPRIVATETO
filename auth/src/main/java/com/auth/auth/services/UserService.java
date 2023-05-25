package com.auth.auth.services;

import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.auth.auth.enums.RoleEnum;
import com.auth.auth.models.RoleModel;
import com.auth.auth.models.UserModel;
import com.auth.auth.repositorys.RoleRepository;
import com.auth.auth.repositorys.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    public void cadastrarUsuario(UserModel user) {
        RoleModel roleModel = roleRepository.findByname(RoleEnum.ROLE_USER).orElseThrow(null);
        user.setRoles(Collections.singletonList(roleModel));
        user.setPictureURL("http://localhost:8080/images/teste.png");
        userRepository.save(user);
    }

}
