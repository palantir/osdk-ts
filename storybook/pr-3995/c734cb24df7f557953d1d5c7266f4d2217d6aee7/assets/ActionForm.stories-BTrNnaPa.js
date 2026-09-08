import{j as t,g as n}from"./iframe-Bx-FSmYs.js";import{A as r}from"./action-form-Q3hJOm-r.js";import"./preload-helper-DgijergL.js";import"./DropdownField-BNciL4Ne.js";import"./debounce-D3Ov_i6N.js";import"./useOsdkClient-4GcPKkIA.js";import"./index-xwvc2Shv.js";import"./Input-Cv-wNC9i.js";import"./useBaseUiId-BGi2L2nz.js";import"./useControlled-DFOJ9xFP.js";import"./index-CIkpzaA0.js";import"./index-Ye47VGO5.js";import"./PopoverPopup-CKS7Qwq2.js";import"./InternalBackdrop-B8hquDAO.js";import"./composite-mmpRjkxT.js";import"./index-xtICGEp3.js";import"./getDisabledMountTransitionStyles-CvhueaJp.js";import"./ToolbarRootContext-DpyqD2o0.js";import"./tick-DWhWBN2e.js";import"./svgIconContainer-CBLTX1NK.js";import"./small-cross-C5HaUcq8.js";import"./search-CdlZ7Qxj.js";import"./cross-BOo5QBm9.js";import"./useValueChanged-CaNUz0pS.js";import"./getPseudoElementBounds-tUYGl_H1.js";import"./CompositeItem-CMA7rFte.js";import"./makeExternalStore-CCy_wMev.js";import"./BaseForm-DHqbodq4.js";import"./ActionButton-D6Z09ARR.js";import"./Button--MuiOxa3.js";import"./SkeletonBar-BFUHP2GD.js";import"./Tooltip-LQkFV94i.js";import"./info-sign-B3hrbkY9.js";import"./chevron-up-K8CVZpQ3.js";import"./chevron-down-Buw4ucuN.js";import"./useEventCallback-BGLusK4B.js";import"./iconLoader-I-sM8Pqf.js";import"./CompositeRoot-BIY8rNAr.js";import"./Switch-DssR-Yam.js";import"./TimePicker-CIDqrlBo.js";import"./CollapsiblePanel-D8RgHLfO.js";import"./error-DdvC7qFd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-UuLHfX-P.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
