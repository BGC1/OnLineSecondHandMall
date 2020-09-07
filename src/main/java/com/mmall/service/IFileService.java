package com.mmall.service;

import org.springframework.web.multipart.MultipartFile;

/**
 * Created by bgc
 */
public interface IFileService {

    String upload(MultipartFile file, String path);
}
