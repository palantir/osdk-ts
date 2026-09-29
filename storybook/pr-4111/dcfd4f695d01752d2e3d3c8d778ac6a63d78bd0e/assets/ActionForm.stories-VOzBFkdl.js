import{j as t,g as n}from"./iframe-BkR_0Whf.js";import{A as r}from"./action-form-CiXqgguN.js";import"./preload-helper-BZj2lHf4.js";import"./DropdownField-CX_iuiat.js";import"./debounce-DonsOBxM.js";import"./useOsdkClient-pLSvuV2v.js";import"./index-ZGE4mIMl.js";import"./Input-iGBf8GKC.js";import"./useBaseUiId-D0GFLUCc.js";import"./useControlled-qGG-lubz.js";import"./index-BHvnJTnu.js";import"./index-BYjUCuHE.js";import"./PopoverPopup-BFEoSKAS.js";import"./InternalBackdrop-D0JetBQu.js";import"./composite-DK0lUWCR.js";import"./index-CxCc5iXi.js";import"./getDisabledMountTransitionStyles-BmZHkwg0.js";import"./ToolbarRootContext-B0bmzvoG.js";import"./tick-u2RvG_GJ.js";import"./svgIconContainer-Cq5Gigac.js";import"./small-cross-eQubl5AS.js";import"./search-BYwC6oDp.js";import"./cross-Cj_dISDs.js";import"./useValueChanged-Tgi1bGwX.js";import"./getPseudoElementBounds-DddSmM7X.js";import"./CompositeItem-DJJJBa43.js";import"./makeExternalStore-32xgHA4-.js";import"./BaseForm-CgCO0bnH.js";import"./ActionButton-Cq36Fl98.js";import"./Button-9bj61-xy.js";import"./SkeletonBar-9syakgvG.js";import"./Tooltip-W6-jI_uz.js";import"./info-sign-CVijOk6e.js";import"./chevron-up-o1Z4ivEH.js";import"./chevron-down-D-JVojHo.js";import"./useEventCallback-Cdxw0ly7.js";import"./iconLoader-CF-uDkgw.js";import"./Switch-BvG9ME5X.js";import"./CompositeRoot-Dh9p28vf.js";import"./TimePicker-CGPtEigK.js";import"./CollapsiblePanel-DKzvo46z.js";import"./error-CceWhdeD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ejahsq4F.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
