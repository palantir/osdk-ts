import{j as q}from"./iframe-Da42tfo0.js";import{h as G,d as M,e as K,a as z,C as J,f as w,s as S,g as f,i as v,j as b}from"./actionFormStoryHelpers-y2-VAFUJ.js";import"./preload-helper-DAikJXZa.js";import"./SubmissionOutputPanel-DG4irKhJ.js";import"./action-form-9YcgzqiP.js";import"./DropdownField-lD6ZutwA.js";import"./toNumber-B2CaCxn8.js";import"./useOsdkClient-BxBRpG4B.js";import"./index-Bomen_f9.js";import"./Input-CsGs3Ea-.js";import"./useBaseUiId-BeAjw0Pz.js";import"./useControlled-tfkpEIEU.js";import"./index-CMocEMCd.js";import"./index-B31UFyDN.js";import"./PopoverPopup-B2KF4r0_.js";import"./InternalBackdrop-B0vh3c6g.js";import"./composite-BM8dnVYH.js";import"./index-Dneb3Ic8.js";import"./getDisabledMountTransitionStyles-BcsBiRAn.js";import"./ToolbarRootContext-BmwtS_AT.js";import"./tick-Djt3HCnR.js";import"./svgIconContainer-C1uFDFQ-.js";import"./isObject-GrzurbJg.js";import"./search-CMGFB0Gl.js";import"./cross-DG6Fu1MX.js";import"./useValueChanged-Cr9sCKBo.js";import"./getPseudoElementBounds-BkbDXquO.js";import"./CompositeItem-BgwdEem5.js";import"./makeExternalStore-DY6l4t0Z.js";import"./BaseForm-BisQz914.js";import"./ActionButton-BvqT7-oi.js";import"./Button-DNGlddJW.js";import"./SkeletonBar-BqNP19Zt.js";import"./Tooltip-s5Zvo8l1.js";import"./info-sign-Bw_bRdxv.js";import"./chevron-up-HpUmaoT2.js";import"./chevron-down-B9ztHwbJ.js";import"./useEventCallback-DQIdBA5X.js";import"./Switch-CnAP0jNF.js";import"./iconLoader-CUqjgfX-.js";import"./CompositeRoot-4xhbfFIS.js";import"./TimePicker-CtZZuoEY.js";import"./CollapsiblePanel-DPDXkpk-.js";import"./error-C20szSnY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DcVf3U6k.js";const{expect:e,userEvent:o,waitFor:r,within:s}=__STORYBOOK_MODULE_TEST__,Wt={...z,title:"Components/ActionForm/Features/States & Submission"},m={play:async({canvasElement:a})=>{b.mockClear();const t=s(a),n=await t.findByRole("textbox",{name:/^fullName/u}),i=await t.findByRole("button",{name:/submit/iu});await o.type(n,"Ada Lovelace"),await o.click(i),await r(()=>e(b).toHaveBeenCalled()),await e(await t.findByText("Submit succeeded.")).toBeInTheDocument(),await e(await t.findByText(/Ada Lovelace/u)).toBeInTheDocument()}},c={args:{onSubmit:K},play:async({canvasElement:a})=>{f.mockClear(),v.mockClear();const t=s(a),n=await t.findByRole("textbox",{name:/^fullName/u}),i=await t.findByRole("button",{name:/submit/iu});await o.type(n,"Margaret Hamilton"),await o.click(i),await r(()=>e(v).toHaveBeenCalled()),await r(()=>e(f).toHaveBeenCalled()),await e(await t.findByText("Submit failed.")).toBeInTheDocument(),await e(await t.findByText(/Demo submission failed/u)).toBeInTheDocument()},parameters:{docs:{description:{story:"Uses a failing custom submit handler so the story shows the error state and serialized error response."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>`}}}},u={play:async({canvasElement:a})=>{b.mockClear();const t=s(a);await t.findByRole("textbox",{name:/^fullName/u});const n=await t.findByRole("button",{name:/submit/iu});await o.click(n),await e(await t.findByRole("alert")).toBeInTheDocument(),await e(b).not.toHaveBeenCalled()},parameters:{docs:{description:{story:"Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."}}}},l={args:{isSubmitDisabled:!0},play:async({canvasElement:a})=>{const t=s(a);await e(await t.findByRole("button",{name:/submit/iu})).toBeDisabled()}},p={args:{onSubmit:M},play:async({canvasElement:a})=>{S.mockClear();const t=s(a),n=await t.findByRole("textbox",{name:/^fullName/u}),i=await t.findByRole("button",{name:/submit/iu});await o.type(n,"Katherine Johnson"),await o.click(i),await r(()=>e(S).toHaveBeenCalled()),await e(await t.findByRole("button",{name:/submitting/iu})).toBeDisabled()},parameters:{docs:{description:{story:"Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>`}}}},d={name:"Custom Submit Wrapper",args:{onSubmit:G},play:async({canvasElement:a})=>{w.mockClear();const t=s(a),n=await t.findByRole("textbox",{name:/^fullName/u}),i=await t.findByRole("button",{name:/submit/iu});await o.type(n,"Grace Hopper"),await o.click(i),await r(()=>e(w).toHaveBeenCalledWith(e.objectContaining({fullName:"Grace Hopper"})))},parameters:{docs:{description:{story:"Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action."},source:{code:`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>`}}}},y={render:()=>q.jsx(J,{}),parameters:{docs:{source:{code:`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>`}}}};var B,h,x;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    successSpy.mockClear();
    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/u
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu
    });
    await userEvent.type(fullNameInput, "Ada Lovelace");
    await userEvent.click(submitButton);
    await waitFor(() => expect(successSpy).toHaveBeenCalled());
    await expect(await canvas.findByText("Submit succeeded.")).toBeInTheDocument();
    await expect(await canvas.findByText(/Ada Lovelace/u)).toBeInTheDocument();
  }
}`,...(x=(h=m.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,C,E;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    onSubmit: handleFailingSubmit
  },
  play: async ({
    canvasElement
  }) => {
    errorSpy.mockClear();
    failingSubmitSpy.mockClear();
    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/u
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu
    });
    await userEvent.type(fullNameInput, "Margaret Hamilton");
    await userEvent.click(submitButton);
    await waitFor(() => expect(failingSubmitSpy).toHaveBeenCalled());
    await waitFor(() => expect(errorSpy).toHaveBeenCalled());
    await expect(await canvas.findByText("Submit failed.")).toBeInTheDocument();
    await expect(await canvas.findByText(/Demo submission failed/u)).toBeInTheDocument();
  },
  parameters: {
    docs: {
      description: {
        story: "Uses a failing custom submit handler so the story shows the error state and serialized error response."
      },
      source: {
        code: \`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async () => {
    throw new Error("Demo submission failed");
  }}
/>\`
      }
    }
  }
}`,...(E=(C=c.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var A,R,F;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    successSpy.mockClear();
    const canvas = within(canvasElement);
    await canvas.findByRole("textbox", {
      name: /^fullName/u
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu
    });
    await userEvent.click(submitButton);
    await expect(await canvas.findByRole("alert")).toBeInTheDocument();
    await expect(successSpy).not.toHaveBeenCalled();
  },
  parameters: {
    docs: {
      description: {
        story: "Submits the untouched form to show the required-field validation summary. The action is not applied until required fields are valid."
      }
    }
  }
}`,...(F=(R=u.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var D,N,T;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    isSubmitDisabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(await canvas.findByRole("button", {
      name: /submit/iu
    })).toBeDisabled();
  }
}`,...(T=(N=l.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var k,I,H;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    onSubmit: handleSlowSubmit
  },
  play: async ({
    canvasElement
  }) => {
    slowSubmitSpy.mockClear();
    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/u
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu
    });
    await userEvent.type(fullNameInput, "Katherine Johnson");
    await userEvent.click(submitButton);
    await waitFor(() => expect(slowSubmitSpy).toHaveBeenCalled());
    await expect(await canvas.findByRole("button", {
      name: /submitting/iu
    })).toBeDisabled();
  },
  parameters: {
    docs: {
      description: {
        story: "Uses a delayed custom submit handler so users can see the pending button state without needing a real backend slowdown."
      },
      source: {
        code: \`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    await showReviewStep(formState);
    await applyAction(formState);
  }}
/>\`
      }
    }
  }
}`,...(H=(I=p.parameters)==null?void 0:I.docs)==null?void 0:H.source}}};var _,L,U;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Custom Submit Wrapper",
  args: {
    onSubmit: handleCustomSubmit
  },
  play: async ({
    canvasElement
  }) => {
    customSubmitSpy.mockClear();
    const canvas = within(canvasElement);
    const fullNameInput = await canvas.findByRole("textbox", {
      name: /^fullName/u
    });
    const submitButton = await canvas.findByRole("button", {
      name: /submit/iu
    });
    await userEvent.type(fullNameInput, "Grace Hopper");
    await userEvent.click(submitButton);
    await waitFor(() => expect(customSubmitSpy).toHaveBeenCalledWith(expect.objectContaining({
      fullName: "Grace Hopper"
    })));
  },
  parameters: {
    docs: {
      description: {
        story: "Wraps the default applyAction call with custom logic. Use this pattern to inspect, log, confirm, or transform submitted values before applying the action."
      },
      source: {
        code: \`<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  onSubmit={async (formState, applyAction) => {
    console.log("Reviewing before submit", formState);
    return applyAction(formState);
  }}
/>\`
      }
    }
  }
}`,...(U=(L=d.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var j,W,O;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ControlledActionFormStory />,
  parameters: {
    docs: {
      source: {
        code: \`const [formState, setFormState] = useState({
  fullName: "Ada Lovelace",
  yearsExperience: 5,
  isRemote: true,
  isFullTime: true,
});

<ActionForm
  actionDefinition={updateEmployeeStoryAction}
  formState={formState}
  onFormStateChange={setFormState}
/>\`
      }
    }
  }
}`,...(O=(W=y.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const Ot=["SubmitSuccess","SubmitFailure","ValidationErrors","SubmitDisabled","SlowCustomSubmit","CustomSubmitHandler","ControlledFormState"];export{y as ControlledFormState,d as CustomSubmitHandler,p as SlowCustomSubmit,l as SubmitDisabled,c as SubmitFailure,m as SubmitSuccess,u as ValidationErrors,Ot as __namedExportsOrder,Wt as default};
