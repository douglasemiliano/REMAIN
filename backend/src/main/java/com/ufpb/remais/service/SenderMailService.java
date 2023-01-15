package com.ufpb.remais.service;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

@Service
public class SenderMailService {

    @Autowired
    private JavaMailSender mailSender;

    public  String sendMail(String email, String name) {
    	try {
            MimeMessage mail = mailSender.createMimeMessage();

            MimeMessageHelper helper = new MimeMessageHelper( mail );
            helper.setTo(email);
            helper.setSubject( "Você tem materiais pendentes para aceitar!" );
            helper.setText("<!DOCTYPE html>\r\n"
            		+ "<html>\r\n"
            		+ "\r\n"
            		+ "<body>\r\n"
            		+ "\r\n"
            		+ "	<div class=\"container body-02\" style=\"font-family: Arial, Helvetica, sans-serif; text-align: center;\">\r\n"
            		+ "		<div class=\"container\">\r\n"
            		+ "			<div class=\"row row-02\" style=\"background-color: white;\">\r\n"
            		+ "				<img class=\"img\" src=\"https://i.imgur.com/3onBlhj.png\" style=\"margin-top: 3rem; width: 30%;\">\r\n"
            		+ "				<div class=\"col-12\">\r\n"
            		+ "					<h4>Olá " + name +",</h4>\r\n"
            		+ "					<p>\r\n"
            		+ "						Você possui materiais pendentes no Remain para aprovação, acesse o sistema para aprovar os\r\n"
            		+ "						mesmos.\r\n"
            		+ "\r\n"
            		+ "					</p>\r\n"
            		+ "				</div>\r\n"
            		+ "				<div class=\"col-12\">\r\n"
            		+ "					<p style=\"margin-bottom: 2rem; margin-top: 3rem;\">Clique aqui para acessar o Remain.</p>\r\n"
            		+ "\r\n"
            		+ "					<a href=\"http://www.remain-ufpb.site/\">\r\n"
            		+ "						<span class=\"btn\"\r\n"
            		+ "						style=\"font-size: large; margin-top: 3em; padding: 1rem 3rem; background-color: #ff6600; color: white; border-radius: 4px; cursor: pointer;\"> Regularizar\r\n"
            		+ "					</span>\r\n"
            		+ "					</a>\r\n"
            		+ "				</div>\r\n"
            		+ "			</div>\r\n"
            		+ "\r\n"
            		+ "			<div class=\"row footer-row\" style=\"padding: 2em; background-color: white;text-align: center;\">\r\n"
            		+ "				<div class=\"col-12\">\r\n"
            		+ "					<footer class=\"blockquote-footer\">\r\n"
            		+ "						<p style=\"font-size: smaller; color: gray;\">Este email foi gerado automaticamente pelo sistema\r\n"
            		+ "							Remain.\r\n"
            		+ "							<br>Copyright @2022 - Todos os direitos reservados\r\n"
            		+ "						</p>\r\n"
            		+ "					</footer>\r\n"
            		+ "				</div>\r\n"
            		+ "			</div>\r\n"
            		+ "\r\n"
            		+ "\r\n"
            		+ "\r\n"
            		+ "		</div>\r\n"
            		+ "	</div>\r\n"
            		+ "\r\n"
            		+ "\r\n"
            		+ "</body>\r\n"
            		+ "\r\n"
            		+ "</html>", true);
            mailSender.send(mail);

            return "OK";
        } catch (Exception e) {
            e.printStackTrace();
            return "Erro ao enviar e-mail";
        }
    }
}
