import{j as t,g as n}from"./iframe-DAMQ0kJi.js";import{A as r}from"./action-form-lWnwWlHd.js";import"./preload-helper-B_MKI7VB.js";import"./DropdownField-DNoVk62f.js";import"./debounce-CTk30Vh4.js";import"./useOsdkClient-rfrnBJy_.js";import"./index-Bp0gXdhg.js";import"./Input-CyyvCwcw.js";import"./useBaseUiId-CZjCaxZv.js";import"./useControlled-DC6nW2lc.js";import"./index-8-mAEuet.js";import"./index-D8IRtIy_.js";import"./PopoverPopup-DEz0V8jj.js";import"./InternalBackdrop-CKMU2rkm.js";import"./composite-BYBlPAgy.js";import"./index-C9gl1QHm.js";import"./getDisabledMountTransitionStyles-1cZ4ebyu.js";import"./ToolbarRootContext-DNW6tFJb.js";import"./tick-Cy96E2pR.js";import"./svgIconContainer-CVBLUyxF.js";import"./small-cross-Cq43VNdb.js";import"./search-AYrmuoce.js";import"./cross-DxIbIlzH.js";import"./useValueChanged-DjExxn5b.js";import"./getPseudoElementBounds-COCrN9V9.js";import"./CompositeItem-BDbWSvwq.js";import"./makeExternalStore-BpUsTfEq.js";import"./BaseForm-B5nUioG9.js";import"./ActionButton-CDelunAe.js";import"./Button-5SDZ05K4.js";import"./SkeletonBar-BxVkW2-h.js";import"./Tooltip-DHasjvAh.js";import"./info-sign-SQYQZnp0.js";import"./chevron-up-BziSE6gz.js";import"./chevron-down-CXmtiTux.js";import"./useEventCallback-ghRGpfyt.js";import"./iconLoader-CL3q2X3P.js";import"./Switch-h60m1SEX.js";import"./CompositeRoot-BRnpOY_R.js";import"./TimePicker-BgSQObiZ.js";import"./CollapsiblePanel-0-xMKkM2.js";import"./error-COQAffC4.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D6W1KI3Y.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
