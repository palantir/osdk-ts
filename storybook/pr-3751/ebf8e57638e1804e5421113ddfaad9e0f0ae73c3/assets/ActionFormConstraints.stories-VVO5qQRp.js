import{r,j as u,c as y}from"./iframe-BvlK2p8r.js";import{F as v,S as B}from"./SubmissionOutputPanel-Bwy8sE1E.js";import{A as S}from"./action-form-CLX-q8Iq.js";import"./preload-helper-Bf1QTDA3.js";import"./useEventCallback-YMzXT1lg.js";import"./isEqual-D0ITe3HQ.js";import"./small-cross-C2NIy0Lo.js";import"./svgIconContainer-CLWMH6Fx.js";import"./index-CJtyvgYT.js";import"./Switch-Dd-eJuH9.js";import"./Combobox-B-MC9o5q.js";import"./useOsdkClient-CJwHvTQr.js";import"./Input-5I-CO4CQ.js";import"./useBaseUiId-DiGEHRWv.js";import"./useControlled-B_OuFYE6.js";import"./index-BXSqz-r8.js";import"./index-DR4zhZlK.js";import"./PopoverPopup-DzIb0oW3.js";import"./InternalBackdrop-Cvxe13O2.js";import"./composite-DLYbiM9i.js";import"./index-BXKLk0LB.js";import"./getDisabledMountTransitionStyles-DDUBMXqp.js";import"./ToolbarRootContext-B8YXpq5u.js";import"./tick-DDScHrxu.js";import"./search-CWi8yKUA.js";import"./cross-XBkVoEMi.js";import"./useValueChanged-DColRsxd.js";import"./getPseudoElementBounds-BoJCJ9ri.js";import"./CompositeItem-DBLtjtTq.js";import"./DropdownField-CjecytYH.js";import"./makeExternalStore-uNOWdKm-.js";import"./BaseForm-Bymir5a8.js";import"./ActionButton-6FVwa-nx.js";import"./Button-CwuonV3H.js";import"./SkeletonBar-CGq0TYtq.js";import"./Tooltip-Dl9Maat9.js";import"./info-sign-ByW_17yd.js";import"./chevron-up-BKan1BT8.js";import"./chevron-down-Bpyob3k8.js";import"./iconLoader-Br_CHa0i.js";import"./CompositeRoot-BCPSBy2O.js";import"./TimePicker-BcvmmD3a.js";import"./CollapsiblePanel-B2S2rCZq.js";import"./error-CHnt8F1v.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BEFCVJp2.js";const{expect:e,userEvent:s,waitFor:T,within:D}=__STORYBOOK_MODULE_TEST__,I=y.actionDefinition,A={role:"designer",level:5,email:"not-an-email"};function E(){const[l,t]=r.useState(A),[p,a]=r.useState({status:"idle"}),o=r.useCallback(n=>{a(d=>({...d,status:"success",response:n}))},[]),i=r.useCallback(n=>{a(d=>({...d,status:"error",error:n}))},[]);return u.jsx(v,{output:u.jsx(B,{idleMessage:"Submit the form to see the action response.",snapshot:p}),children:u.jsx(S,{actionDefinition:I,formState:l,onError:i,onFormStateChange:t,onSuccess:o,showFormTitle:!0})})}const vt={title:"Components/ActionForm/Constraints",component:E,tags:["beta"],parameters:{docs:{description:{component:"Demonstrates ActionForm rendering constraints returned by an action's validate-only response: `oneOf` (role, dropdown), `stringLength` (bio), `range` (level), `arraySize` (tags), and `stringRegexMatch` (email)."}}}},c={parameters:{docs:{description:{story:"Renders the constraints action with a seeded form state so the oneOf-driven dropdown, and the stringLength/range hints, are visible without any interaction."},source:{code:`<ActionForm
  actionDefinition={constraintsStoryAction.actionDefinition}
  formState={{ role: "designer", level: 5, email: "not-an-email" }}
  showFormTitle={true}
/>`}}}},m={play:async({canvasElement:l})=>{const t=D(l),p=await t.findByRole("combobox",{},{timeout:5e3});await e(p).toBeInTheDocument();const a=await t.findByRole("textbox",{name:/^level/u});await e(a.getAttribute("min")).toBe("1"),await e(a.getAttribute("max")).toBe("10");const o=await t.findByRole("textbox",{name:/^bio/u});await e(o.getAttribute("minlength")).toBe("10"),await e(o.getAttribute("maxlength")).toBe("200");const i=await t.findByRole("button",{name:/submit/iu});await s.click(i),await e(await t.findByRole("alert")).toBeInTheDocument(),await e(await t.findByText("Enter a valid email address")).toBeInTheDocument();const n=await t.findByRole("textbox",{name:/^email/u});await s.clear(n),await s.type(n,"grace@example.com"),await s.click(i),await T(async()=>{await e(await t.findByText("Submit succeeded.")).toBeInTheDocument()})},parameters:{docs:{description:{story:"Exercises the constraint-validation feature end to end: the oneOf dropdown and range/stringLength hints render from the canned validation response, an invalid email is rejected with the constraint's configured message, and correcting it lets the action apply."}}}};var h,w,g;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Renders the constraints action with a seeded form state so the oneOf-driven dropdown, and the stringLength/range hints, are visible without any interaction."
      },
      source: {
        code: \`<ActionForm
  actionDefinition={constraintsStoryAction.actionDefinition}
  formState={{ role: "designer", level: 5, email: "not-an-email" }}
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(g=(w=c.parameters)==null?void 0:w.docs)==null?void 0:g.source}}};var f,b,x;m.parameters={...m.parameters,docs:{...(f=m.parameters)==null?void 0:f.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The \`role\` parameter's \`oneOf\` constraint swaps it to a dropdown once
    // the canned validation response loads.
    const roleDropdown = await canvas.findByRole("combobox", {}, {
      timeout: 5000
    });
    await expect(roleDropdown).toBeInTheDocument();

    // The \`level\` parameter's \`range\` constraint surfaces as min/max hints.
    const levelInput = await canvas.findByRole("textbox", {
      name: /^level/u
    });
    await expect(levelInput.getAttribute("min")).toBe("1");
    await expect(levelInput.getAttribute("max")).toBe("10");

    // The \`bio\` parameter's \`stringLength\` constraint surfaces as
    // minLength/maxLength hints.
    const bioInput = await canvas.findByRole("textbox", {
      name: /^bio/u
    });
    await expect(bioInput.getAttribute("minlength")).toBe("10");
    await expect(bioInput.getAttribute("maxlength")).toBe("200");

    // The seeded email fails the \`stringRegexMatch\` constraint, so submit is
    // blocked with the constraint's configured failure message.
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu
    });
    await userEvent.click(submitButton);
    await expect(await canvas.findByRole("alert")).toBeInTheDocument();
    await expect(await canvas.findByText("Enter a valid email address")).toBeInTheDocument();

    // Fixing the email lets the action apply successfully.
    const emailInput = await canvas.findByRole("textbox", {
      name: /^email/u
    });
    await userEvent.clear(emailInput);
    await userEvent.type(emailInput, "grace@example.com");
    await userEvent.click(submitButton);
    await waitFor(async () => {
      await expect(await canvas.findByText("Submit succeeded.")).toBeInTheDocument();
    });
  },
  parameters: {
    docs: {
      description: {
        story: "Exercises the constraint-validation feature end to end: the oneOf dropdown and range/stringLength hints render from the canned validation response, an invalid email is rejected with the constraint's configured message, and correcting it lets the action apply."
      }
    }
  }
}`,...(x=(b=m.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};const Bt=["Default","ConstraintValidation"];export{m as ConstraintValidation,c as Default,Bt as __namedExportsOrder,vt as default};
