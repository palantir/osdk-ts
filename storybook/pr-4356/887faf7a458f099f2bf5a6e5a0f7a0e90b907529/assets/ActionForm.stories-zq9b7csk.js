import{j as t,g as n}from"./iframe-CO_TqB81.js";import{A as r}from"./action-form-i2M_9x5l.js";import"./preload-helper-Cb9TEUNK.js";import"./DropdownField-DKbARUIc.js";import"./debounce-qC38IiRW.js";import"./useOsdkClient-CJEtUc7d.js";import"./index-BG1T9Qar.js";import"./Input-C4_accH4.js";import"./useBaseUiId-CQDh8HZx.js";import"./useControlled-BzsK2z1m.js";import"./index-Vp2_lvOX.js";import"./index-BpkhN8QR.js";import"./PopoverPopup-CHZBqC1j.js";import"./InternalBackdrop-XEvqPvZO.js";import"./composite-ksiLQPWX.js";import"./index-C44jrtj9.js";import"./getDisabledMountTransitionStyles-BDEY_Zeb.js";import"./ToolbarRootContext-C89jM3yj.js";import"./tick-DMb7PR_x.js";import"./svgIconContainer-9GB5-wwK.js";import"./small-cross-DJUC3vxT.js";import"./search-CL2g-V2W.js";import"./cross-BWp6Y9Mg.js";import"./useValueChanged-BRD8TdqI.js";import"./getPseudoElementBounds-DqXRckai.js";import"./CompositeItem-DiNcRYV6.js";import"./makeExternalStore-BrsByTNH.js";import"./BaseForm-JElJgFK2.js";import"./ActionButton-B2_yFJBm.js";import"./Button-DcLBkUW1.js";import"./SkeletonBar-DfcLnHzw.js";import"./Tooltip-9tmkcTTw.js";import"./info-sign-DKhews2h.js";import"./chevron-up-Cc9rzh_V.js";import"./chevron-down-Cz7E_Xzc.js";import"./useEventCallback-Da1PZug2.js";import"./iconLoader-C3aVef5k.js";import"./Switch-CXwE3uyU.js";import"./CompositeRoot-bAavk3zN.js";import"./TimePicker-BL3I5I5x.js";import"./CollapsiblePanel-D_HvnvuL.js";import"./error-CQK0rvpI.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DUnq64Xh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
