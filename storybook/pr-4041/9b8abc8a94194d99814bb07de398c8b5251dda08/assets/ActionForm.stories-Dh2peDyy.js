import{j as t,g as n}from"./iframe-C2aef3Jo.js";import{A as r}from"./action-form-DIj6KA0e.js";import"./preload-helper-B0E-WsIe.js";import"./DropdownField-CILDnmw3.js";import"./debounce-BmYDT_B0.js";import"./useOsdkClient-2T4P3ooX.js";import"./index-CsHYpv_s.js";import"./Input-DZdZFiVD.js";import"./useBaseUiId-BjYhZ9YY.js";import"./useControlled-D_x1ayHM.js";import"./index-DQucsIw7.js";import"./index-Cp-EDvHL.js";import"./PopoverPopup-DvqStvko.js";import"./InternalBackdrop-BlKAfi2x.js";import"./composite-B2RxptoP.js";import"./index-CyH7L4rU.js";import"./getDisabledMountTransitionStyles-BNLNL_0E.js";import"./ToolbarRootContext-B7lRNTOm.js";import"./tick-CqaW51QZ.js";import"./svgIconContainer-BXdP-ypI.js";import"./small-cross-DtWUwlkL.js";import"./search-D59Jmp9F.js";import"./cross-mqWCDQwu.js";import"./useValueChanged-CVWJNNpw.js";import"./getPseudoElementBounds-CD5dDWGk.js";import"./CompositeItem-083J1aRu.js";import"./makeExternalStore-Bm5e9_5-.js";import"./BaseForm-DA2IUdDQ.js";import"./ActionButton-CfluOSPS.js";import"./Button-Cg9SUJSs.js";import"./SkeletonBar-gnedLyA8.js";import"./Tooltip-DPyBGWcj.js";import"./info-sign-gIzflo3-.js";import"./chevron-up-DQKJPKTK.js";import"./chevron-down-DQZukdfl.js";import"./useEventCallback-CoxthiVL.js";import"./iconLoader-kj19l41m.js";import"./Switch-Ck0rLN0t.js";import"./CompositeRoot-B0A_RBGx.js";import"./TimePicker-CFM1o9kO.js";import"./CollapsiblePanel-BUi3el3A.js";import"./error-D0kSZtEZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DRjEcDDc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
