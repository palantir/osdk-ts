import{j as t,g as n}from"./iframe-C9Yk6gDU.js";import{A as r}from"./action-form-CYxVyZSc.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-DhZIM-xb.js";import"./debounce-BTWXBbIs.js";import"./useOsdkClient-BnQc_DSv.js";import"./index-C1LUXaZv.js";import"./Input-DAXz4YJS.js";import"./useBaseUiId-b5v8aEB7.js";import"./useControlled-DMm9xSYk.js";import"./index-BqzRBHu8.js";import"./index-CvC-GtCK.js";import"./PopoverPopup-B_2bYS3U.js";import"./InternalBackdrop-C7n6oAdh.js";import"./composite-DaJF-Ug9.js";import"./index-Pn3t-jka.js";import"./getDisabledMountTransitionStyles-O3sebmRm.js";import"./ToolbarRootContext-mnplRdcK.js";import"./tick-iNYSCbk-.js";import"./svgIconContainer-Vc9A0mR-.js";import"./small-cross-CbivvQt1.js";import"./search-7dKohem7.js";import"./cross--AbW-HvV.js";import"./useValueChanged-RmTUBVN2.js";import"./getPseudoElementBounds-BNgO_MWm.js";import"./CompositeItem-BZYu3hRC.js";import"./makeExternalStore-BIsaNjNd.js";import"./BaseForm-yTiJI7-B.js";import"./ActionButton-dAjZm_x0.js";import"./Button-y2WBjgut.js";import"./SkeletonBar-DdG9T8Ii.js";import"./Tooltip-CPPwTdsT.js";import"./info-sign-P0BcrPpK.js";import"./chevron-up-s6PJ3s7h.js";import"./chevron-down-C4Xw0sT3.js";import"./useEventCallback-CKcNtt_k.js";import"./iconLoader-CiEbnDAO.js";import"./Switch-DvCLjnjD.js";import"./CompositeRoot-CBufOtjp.js";import"./TimePicker-BixA1mpx.js";import"./CollapsiblePanel-C_lIliGf.js";import"./error-c-8HRK8d.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-OfArat_u.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
