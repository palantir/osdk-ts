import{j as t,g as n}from"./iframe-CuKia_EN.js";import{A as r}from"./action-form-CDzhr63N.js";import"./preload-helper-DZuarx_D.js";import"./DropdownField-DQBcY_Rm.js";import"./debounce-KF7wF3li.js";import"./useOsdkClient-nV1NX6Cm.js";import"./index-CVRiO_BO.js";import"./Input-BIdaiZoI.js";import"./useBaseUiId-C8uIC3Bm.js";import"./useControlled-UwQVkGem.js";import"./index-q4KNVnv_.js";import"./index-Dx9fpQkg.js";import"./PopoverPopup-BZX5fwgl.js";import"./InternalBackdrop-ofNkj6qc.js";import"./composite-Cpd5KJD8.js";import"./index-DRmu1dZx.js";import"./getDisabledMountTransitionStyles-CjBLuMnB.js";import"./ToolbarRootContext-Bn8zU9xQ.js";import"./tick-_5nSoxyV.js";import"./svgIconContainer-6Becg_K2.js";import"./small-cross-BeBD9G2Y.js";import"./search-Bab6PZbG.js";import"./cross-X509BjS9.js";import"./useValueChanged-ChchmKxl.js";import"./getPseudoElementBounds-BKhdgpRc.js";import"./CompositeItem-CJjI731A.js";import"./makeExternalStore-DzI0MTA7.js";import"./BaseForm-DfaAnGuq.js";import"./ActionButton-DU7cLlj1.js";import"./Button-CVMu9YDi.js";import"./SkeletonBar-CQrsNGDe.js";import"./Tooltip-3KVWe3HV.js";import"./info-sign-D_bghwzX.js";import"./chevron-up-3T6V1inz.js";import"./chevron-down-DJVJwxKZ.js";import"./useEventCallback-eNr2_rgV.js";import"./iconLoader-DkoLdpcG.js";import"./CompositeRoot-LXs6UxVj.js";import"./Switch-K9WDN1GV.js";import"./TimePicker-FhiywzNm.js";import"./CollapsiblePanel-HNtDo0gw.js";import"./error-C19RYWaj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-5runl_VG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
