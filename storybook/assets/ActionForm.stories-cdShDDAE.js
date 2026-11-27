import{j as m,g as d}from"./iframe-BKkgtFSo.js";import{A as l}from"./action-form-sRrXZ8OE.js";import"./preload-helper-Dp1pzeXC.js";import"./useDebouncedCallback-BzoQ_1l9.js";import"./NonIdealState-CcUJbrpE.js";import"./index-Dvbp0kPd.js";import"./isEqual-COOSB5_T.js";import"./_baseIsEqual-D4aVuU6Y.js";import"./PopoverPopup-Dkt2NgPN.js";import"./InternalBackdrop-BpRAUWPw.js";import"./useBaseUiId-BfmvZ33T.js";import"./composite-CVFofIE7.js";import"./index-CNoy-iis.js";import"./index-BDs07rBu.js";import"./index-1AbeELNr.js";import"./getDisabledMountTransitionStyles-X8rUrkvt.js";import"./ToolbarRootContext-CGelScnS.js";import"./Select-CQIz6wip.js";import"./useOsdkClient-DFktUr12.js";import"./Input-ajiamWew.js";import"./useControlled-CiCRPIrb.js";import"./tick-Ch6cMwoK.js";import"./svgIconContainer-Ce9VGxQH.js";import"./small-cross-D5_9Jwec.js";import"./search-VxZ7VsjM.js";import"./cross-5K119jUx.js";import"./useValueChanged-BVys5dm-.js";import"./getPseudoElementBounds-C1szzxdu.js";import"./CompositeItem-B3A9StDG.js";import"./DropdownField-DT-aa1rt.js";import"./makeExternalStore-Qrh_OJH6.js";import"./BaseForm-CPAdu0l-.js";import"./ActionButton-DkNjySCa.js";import"./Button-D0Mtf1Wu.js";import"./SkeletonBar-DCi4lVfd.js";import"./Tooltip-Br4k1WIE.js";import"./info-sign-vVV9Cw6P.js";import"./TimePicker-BLPwYNUR.js";import"./chevron-up-YSHwn7pL.js";import"./chevron-down-C5BYt7gU.js";import"./iconLoader-DWt84vrv.js";import"./Switch-DG3faCiG.js";import"./CompositeRoot-9HaszsTh.js";import"./CollapsiblePanel-BB19Mn1b.js";import"./error-DeWUfdBM.js";import"./assertUnreachable-tCT10eXl.js";import"./index-6As_0jJu.js";import"./withOsdkMetrics-Bs5QRS3m.js";const{expect:n,fn:y,userEvent:t,waitFor:u,within:f}=__STORYBOOK_MODULE_TEST__,h=d.actionDefinition;function b({onSubmit:e}){return m.jsx("div",{className:"osdkFormCard",children:m.jsx(l,{actionDefinition:h,onSubmit:e,showFormTitle:!0})})}const r=y().mockName("onSubmit"),w=e=>{r(e)},ye={title:"Components/ActionForm",component:b,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}},argTypes:{onSubmit:{control:!1,table:{category:"Events"}}}},o={args:{onSubmit:w},play:async({canvasElement:e})=>{r.mockClear();const a=f(e);await t.type(await a.findByRole("textbox",{name:/Full name/u}),"Ada Lovelace");const i=await a.findByRole("textbox",{name:/Years of experience/u});await t.type(i,"3.7"),await n(i).toHaveValue("3.7"),await t.tab(),await n(i).toHaveValue("3"),await t.type(await a.findByRole("combobox",{name:/Start date/u}),"2026-01-15{Enter}"),await t.click(a.getByRole("button",{name:/submit/iu})),await u(()=>n(r).toHaveBeenCalledWith(n.objectContaining({yearsExperience:3,startDate:new Date(2026,0,15).toISOString()})))},parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>`}}}};var p,s,c;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    onSubmit: handleSubmittedValues
  },
  play: async ({
    canvasElement
  }) => {
    submittedValuesSpy.mockClear();
    const canvas = within(canvasElement);
    await userEvent.type(await canvas.findByRole("textbox", {
      name: /Full name/u
    }), "Ada Lovelace");

    // Integer fields keep fractional input while editing and truncate on blur.
    const yearsInput = await canvas.findByRole("textbox", {
      name: /Years of experience/u
    });
    await userEvent.type(yearsInput, "3.7");
    await expect(yearsInput).toHaveValue("3.7");
    await userEvent.tab();
    await expect(yearsInput).toHaveValue("3");
    await userEvent.type(await canvas.findByRole("combobox", {
      name: /Start date/u
    }), "2026-01-15{Enter}");
    await userEvent.click(canvas.getByRole("button", {
      name: /submit/iu
    }));

    // The date picker stores local midnight; submission converts it to ISO.
    await waitFor(() => expect(submittedValuesSpy).toHaveBeenCalledWith(expect.objectContaining({
      yearsExperience: 3,
      startDate: new Date(2026, 0, 15).toISOString()
    })));
  },
  parameters: {
    docs: {
      description: {
        story: "Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."
      },
      source: {
        code: \`import { ActionForm } from "@osdk/react-components/action-form";

// ActionForm reads the action definition metadata and chooses default
// field components for supported parameter types.
//
// This story uses an action with this shape:
//
// {
//   apiName: "generatedFieldsStoryAction",
//   displayName: "Create employee profile",
//   parameters: {
//     fullName: {
//       displayName: "Full name",
//       dataType: { type: "string" },
//       required: true,
//     },
//     yearsExperience: {
//       displayName: "Years of experience",
//       dataType: { type: "integer" },
//     },
//     isRemote: {
//       displayName: "Remote employee",
//       dataType: { type: "boolean" },
//     },
//     startDate: {
//       displayName: "Start date",
//       dataType: { type: "timestamp" },
//     },
//     document: {
//       displayName: "Document",
//       dataType: { type: "attachment" },
//     },
//     manager: {
//       displayName: "Manager",
//       dataType: {
//         type: "object",
//         objectTypeApiName: "Employee",
//       },
//     },
//     reviewPool: {
//       displayName: "Review pool",
//       dataType: {
//         type: "objectSet",
//         objectTypeApiName: "Employee",
//       },
//     },
//   },
// }
//
// No formFieldDefinitions are passed here; the fields are generated from the
// action metadata above.
<ActionForm
  actionDefinition={generatedFieldsStoryAction.actionDefinition}
  showFormTitle={true}
/>\`
      }
    }
  }
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const ue=["Default"];export{o as Default,ue as __namedExportsOrder,ye as default};
