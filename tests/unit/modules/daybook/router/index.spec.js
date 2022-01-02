import daybookRouter from "@/modules/daybook/router/index";

describe("Pruebas en el router module de daybook", () => {
  test("El router debe tener esta configuracion", () => {
    expect(daybookRouter).toMatchObject({
      name: "daybook",
      component: expect.any(Function),
      children: [
        {
          path: "",
          name: "no-entry",
          component: expect.any(Function),
        },
        {
          path: ":entryId",
          name: "entry",
          component: expect.any(Function),
          props: expect.any(Function),
        },
      ],
    });
  });
});
