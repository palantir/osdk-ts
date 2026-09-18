import{j as t,g as n}from"./iframe-Csm-gXDM.js";import{A as r}from"./action-form-pOK0WBtE.js";import"./preload-helper-B2pQoQF5.js";import"./DropdownField-C6s4GoHW.js";import"./debounce-BWlbUKap.js";import"./useOsdkClient-D66R8lyo.js";import"./index-DSOkxNmo.js";import"./Input-CmyNmn-U.js";import"./useBaseUiId-BvtcsR9k.js";import"./useControlled-DlN8ExsH.js";import"./index-D8ourLLB.js";import"./index-DK8dF11E.js";import"./PopoverPopup-CN55iEhH.js";import"./InternalBackdrop-PYXL4FuF.js";import"./composite-Cd3ThWKg.js";import"./index-Bz_Scb7W.js";import"./getDisabledMountTransitionStyles-f3cbN-9y.js";import"./ToolbarRootContext-6VqAIkkQ.js";import"./tick-D0oIP5GF.js";import"./svgIconContainer-D8CdVdTF.js";import"./small-cross-TUSxa0rW.js";import"./search-BWu2Apub.js";import"./cross-D5yi1h_k.js";import"./useValueChanged-ARdcJoaj.js";import"./getPseudoElementBounds-DF7dHhi1.js";import"./CompositeItem-BGdHymE8.js";import"./makeExternalStore-DYZ91XmC.js";import"./BaseForm-CoELgFYX.js";import"./ActionButton-D_Y5O8mn.js";import"./Button-D7cNt94b.js";import"./SkeletonBar-ExHoWVim.js";import"./Tooltip-CYtmaZF0.js";import"./info-sign-Cxl1KYzh.js";import"./chevron-up-CYO7QViH.js";import"./chevron-down-K33gEoQm.js";import"./useEventCallback-C21WKomU.js";import"./iconLoader-B47wAhnt.js";import"./Switch-yHA62Sj6.js";import"./CompositeRoot-D8vqm_44.js";import"./TimePicker-CGW3JOQl.js";import"./CollapsiblePanel-BL19iTTX.js";import"./error-ptWpun4u.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BGSXyq-B.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
