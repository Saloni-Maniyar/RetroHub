package com.retrohub.utils;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DbConnection {
	  private static final String URL = "jdbc:postgresql://localhost:5432/retrohub"; // change db name if needed
	    private static final String USER = "postgres"; // your postgres username
	    private static final String PASSWORD = "s1234"; // your password

	    public static Connection getConnection() throws SQLException {
	        try {
	            Class.forName("org.postgresql.Driver");
	            System.out.println("connected ");
	            return DriverManager.getConnection(URL, USER, PASSWORD);
	        } catch (ClassNotFoundException e) {
	            throw new SQLException("PostgreSQL JDBC Driver not found!", e);
	        }
	    }
}
