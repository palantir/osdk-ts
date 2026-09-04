import{j as t,g as n}from"./iframe-DhfS3RZc.js";import{A as r}from"./action-form-C1ciXl75.js";import"./preload-helper-DURZGd9r.js";import"./DropdownField-CvT9323I.js";import"./debounce-CUoR3aUb.js";import"./useOsdkClient-I8SPvkL2.js";import"./index-CmWcsqzv.js";import"./Input-3HEaYe6X.js";import"./useBaseUiId-DfXKjGnz.js";import"./useControlled-DdFF90Aj.js";import"./index-B97WNJKr.js";import"./index-DZobiGK0.js";import"./PopoverPopup-Ci542wak.js";import"./InternalBackdrop-DBGl_T4H.js";import"./composite-DAyuLXEI.js";import"./index-s0PrsLZK.js";import"./getDisabledMountTransitionStyles-CjkU88c4.js";import"./ToolbarRootContext-BXCR2bw0.js";import"./tick-DMUoUbt9.js";import"./svgIconContainer-kbCk0NE_.js";import"./small-cross-CjiaImbP.js";import"./search-Bpp188FL.js";import"./cross-BcryMkCa.js";import"./useValueChanged-TUXL-Whv.js";import"./getPseudoElementBounds-BowutHEK.js";import"./CompositeItem-Dq06wRHV.js";import"./makeExternalStore-C0FFZIpP.js";import"./BaseForm-LTFV6-WN.js";import"./ActionButton-ClS-793Z.js";import"./Button-r9_lJTgE.js";import"./SkeletonBar-yG-gm33m.js";import"./Tooltip-B6gLwk9y.js";import"./info-sign-DCoNB3Hc.js";import"./chevron-up-JY78tIhj.js";import"./chevron-down-BFTO0kIL.js";import"./useEventCallback-DfaqPmrk.js";import"./iconLoader-BRfmM221.js";import"./CompositeRoot-C57XkL-W.js";import"./Switch-MHCR6ij-.js";import"./TimePicker-DK60qB4I.js";import"./CollapsiblePanel-DDymuiwU.js";import"./error-B7gsEzyH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-huuH2-qQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
