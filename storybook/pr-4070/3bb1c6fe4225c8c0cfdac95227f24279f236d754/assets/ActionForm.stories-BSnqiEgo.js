import{j as t,g as n}from"./iframe-NgqvngwL.js";import{A as r}from"./action-form-B0JxMEiP.js";import"./preload-helper-C7qDpPhw.js";import"./DropdownField-fe_Mf-M6.js";import"./debounce-CuGvF61s.js";import"./useOsdkClient-CbLO7ws_.js";import"./index-qNBEcOe2.js";import"./Input-CVgaaiBC.js";import"./useBaseUiId-usyGi_EF.js";import"./useControlled-eXO0aHwT.js";import"./index-PMXb-wuA.js";import"./index-DpzlvyBx.js";import"./PopoverPopup-U9kUO_es.js";import"./InternalBackdrop-irI5Oo7V.js";import"./composite-D8ywKD-R.js";import"./index-DUSkmaua.js";import"./getDisabledMountTransitionStyles-Dx4TXj1A.js";import"./ToolbarRootContext-CPIM7tk6.js";import"./tick-BX_Ynmx5.js";import"./svgIconContainer-Dg9noX_E.js";import"./small-cross-DVdjFEnO.js";import"./search-Dwv2h1CQ.js";import"./cross-B13Y_yM6.js";import"./useValueChanged-DiEkonDj.js";import"./getPseudoElementBounds-D1HMYsHr.js";import"./CompositeItem-C3cyTcS-.js";import"./makeExternalStore-BhuLMaNX.js";import"./BaseForm-BG3b7fDX.js";import"./ActionButton-B466E0uY.js";import"./Button-oU3-hekz.js";import"./SkeletonBar-BEIw4nVm.js";import"./Tooltip-C4PI_X-z.js";import"./info-sign-DPa5iHXM.js";import"./chevron-up-DL4ATUq1.js";import"./chevron-down-Bn4ZfVbM.js";import"./useEventCallback-DrH7Jh0v.js";import"./iconLoader-BUvHD_yg.js";import"./Switch-kEFO_Txn.js";import"./CompositeRoot-JwrOlmdH.js";import"./TimePicker-CXnlPwLY.js";import"./CollapsiblePanel-BGz8oV02.js";import"./error-BXs3tL6Z.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-pTfsj7aC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
/>`}}}};var o,a,i;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(i=(a=e.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};const ee=["Default"];export{e as Default,ee as __namedExportsOrder,$ as default};
