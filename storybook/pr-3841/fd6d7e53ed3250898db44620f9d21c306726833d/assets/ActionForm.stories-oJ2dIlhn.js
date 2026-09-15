import{j as t,g as n}from"./iframe-lPbU9V6o.js";import{A as r}from"./action-form-BG_5uXO5.js";import"./preload-helper-CfcQGX_H.js";import"./DropdownField-C-MLBQws.js";import"./debounce-Cj3rKq4j.js";import"./useOsdkClient-DdgRVKHN.js";import"./index-BgY5H93d.js";import"./Input-Bs12mOix.js";import"./useBaseUiId-B5KMMy-h.js";import"./useControlled-DmJZYhoD.js";import"./index-D_uPtWn9.js";import"./index-Dw0sPzkR.js";import"./PopoverPopup-Bdk46Ceq.js";import"./InternalBackdrop-BhwiTjVN.js";import"./composite-COK8eLgF.js";import"./index-BQiDKTAm.js";import"./getDisabledMountTransitionStyles-BP3w0PCy.js";import"./ToolbarRootContext-CioZEdCf.js";import"./tick-DR2B2bzz.js";import"./svgIconContainer-DdnoMbP6.js";import"./small-cross-BMajOB7A.js";import"./search-BpuAyapl.js";import"./cross-1MrZuHJo.js";import"./useValueChanged-D78zyaD8.js";import"./getPseudoElementBounds-C_eOrCbl.js";import"./CompositeItem-vBOQ9KDG.js";import"./makeExternalStore-CvGEVSlU.js";import"./BaseForm-Cb9bCkde.js";import"./ActionButton-Ct_RY74Q.js";import"./Button-B8cvgo0T.js";import"./SkeletonBar-BqV2iuqD.js";import"./Tooltip-DX66rpSM.js";import"./info-sign-C1NT0URC.js";import"./chevron-up-r2qKlYwL.js";import"./chevron-down-BHa1JvBu.js";import"./useEventCallback-CQBa0_96.js";import"./iconLoader-Bvv6oEr-.js";import"./CompositeRoot-DfcDDWcP.js";import"./Switch-CndnY88X.js";import"./TimePicker-BPTKJZ6o.js";import"./CollapsiblePanel-D3QrSoDf.js";import"./error-Ba94mTx6.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CF099yPb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
