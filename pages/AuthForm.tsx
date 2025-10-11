"use client";
import styles from "../styles/AuthForm.module.css";
import { useState } from "react";
import Link from "next/link";
import { TextField, Button, CircularProgress } from "@mui/material";

interface AuthFormProps {
  mode: "login" | "signup";
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const isLogin = mode === "login";

  return (
    <div id={styles.form} className={styles.container}>
      <h2 className={styles.title}>
        {isLogin ? "Welcome Back to EdMira" : "Create Your EdMira Account"}
      </h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          InputProps={{ style: { borderRadius: 12 } }}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          required
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          InputProps={{ style: { borderRadius: 12 } }}
        />

        {!isLogin && (
          <TextField
            label="Confirm Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            InputProps={{ style: { borderRadius: 12 } }}
          />
        )}

        <Button
          type="submit"
          fullWidth
          variant="contained"
          className={styles.submitButton}
          disabled={loading}
        >
          {loading ? (
            <CircularProgress size={24} color="inherit" />
          ) : isLogin ? (
            "Sign In"
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>

      <p className={styles.switchText}>
        {isLogin ? (
          <>
            Don’t have an account?{" "}
            <Link href="/signup" className={styles.link}>
              Create one
            </Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/" className={styles.link}>
              Anticipate
            </Link>
          </>
        )}
      </p>
    </div>
  );
}
