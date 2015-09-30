package main.java.com.app.web.tracker.server.fw;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import main.java.com.app.web.tracker.beans.User;



public interface NativeService {
	public Object process(Map<String, String[]> map,User user,HttpServletRequest request,HttpServletResponse response,HttpSession session);
}
