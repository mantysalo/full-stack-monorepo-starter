import request from "supertest";
import { app } from "./app";

test("Hello world works", async () => {
  const response = await request(app.callback()).get("/api/");
  expect(response.status).toBe(200);
  expect(response.body).toMatchObject({ data: "Hello from API." });
});
