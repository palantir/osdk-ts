import{j as t,g as n}from"./iframe-oUWpW2hj.js";import{A as r}from"./action-form-Br_p7_17.js";import"./preload-helper-Yv6afaVL.js";import"./DropdownField-BXlACZnb.js";import"./debounce-iJ8ACcNG.js";import"./useOsdkClient-TI1xoQcl.js";import"./index-CgvqzYiy.js";import"./Input-BW0wlw1T.js";import"./useBaseUiId-CNXzk4iF.js";import"./useControlled-C-y7Ct0C.js";import"./index-BbYayOBF.js";import"./index-Cg1Ec0a0.js";import"./PopoverPopup-BaCxp5C7.js";import"./InternalBackdrop-DCSUOs2p.js";import"./composite-DXJqaJaP.js";import"./index-DK-jKqOF.js";import"./getDisabledMountTransitionStyles-kmT_SUYl.js";import"./ToolbarRootContext-CoDK9tvS.js";import"./tick-CTaqXIni.js";import"./svgIconContainer-CfDlmTSN.js";import"./small-cross-Dg6oYX1r.js";import"./search-OfzKiz9h.js";import"./cross-DH6uOwyM.js";import"./useValueChanged-Dkm3d1mT.js";import"./getPseudoElementBounds-BFXXGwBb.js";import"./CompositeItem-mpma5yoQ.js";import"./makeExternalStore-DCxwJsFe.js";import"./BaseForm-fBdtP4zL.js";import"./ActionButton-vLUx2x9T.js";import"./Button-D0GlSb4-.js";import"./SkeletonBar-ClsJkh65.js";import"./Tooltip-u5Tt69vN.js";import"./info-sign-DMhHuyF9.js";import"./chevron-up-BGNeoamU.js";import"./chevron-down-B1zztQ-L.js";import"./useEventCallback-DZOwbbJq.js";import"./iconLoader-CchsUNyX.js";import"./Switch-CUyRsrJB.js";import"./CompositeRoot-B0P6wVHU.js";import"./TimePicker-mKJ4ZvCm.js";import"./CollapsiblePanel-BfXlQFaO.js";import"./error-DWxhuhX7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-JDMrgbFb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
