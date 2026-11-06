import{j as t,g as n}from"./iframe-Bq9JkkcV.js";import{A as r}from"./action-form-B5_nJVKi.js";import"./preload-helper-Cqv5s2jj.js";import"./DropdownField-DAKJZGR4.js";import"./debounce-CzyUj9dS.js";import"./useOsdkClient-44rjUua8.js";import"./index-LFRJGjst.js";import"./Input-CVFiTt6w.js";import"./useBaseUiId-CRKQdUfR.js";import"./useControlled-BOwVH0ok.js";import"./index-BLJWGSk2.js";import"./index-CiXmcJM_.js";import"./isObject-CmhVC78r.js";import"./InternalBackdrop-BQMKI1KR.js";import"./composite-B8AhlmVu.js";import"./index-BNaE_Tt-.js";import"./getDisabledMountTransitionStyles-BX0EtKPr.js";import"./ToolbarRootContext-Cg88OliQ.js";import"./tick-BFpzlNMH.js";import"./svgIconContainer-Cf0ZuXQT.js";import"./small-cross-BnGu73G1.js";import"./search-BNWG7jMi.js";import"./cross-Bk3fKCS7.js";import"./useValueChanged-smqOtCks.js";import"./getPseudoElementBounds-CerPCRKU.js";import"./CompositeItem-CNijsmc1.js";import"./makeExternalStore-BoBeGpud.js";import"./BaseForm-BWjsGtqB.js";import"./ActionButton-DsKQLZsS.js";import"./Button-CXvtykDV.js";import"./SkeletonBar-DXhct9uD.js";import"./Tooltip-Dq_sB7xx.js";import"./info-sign-DMHZkvhS.js";import"./chevron-up-CjQlwaLo.js";import"./chevron-down-BLdYc2zE.js";import"./useEventCallback-D9Esi33T.js";import"./iconLoader-DaLp_2G0.js";import"./Switch-CgHXw7jV.js";import"./CompositeRoot-Aca42CFo.js";import"./TimePicker-B-bjWvmE.js";import"./CollapsiblePanel-BzrJ9qI-.js";import"./error-Bc6kFz4J.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BtcppCcW.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
