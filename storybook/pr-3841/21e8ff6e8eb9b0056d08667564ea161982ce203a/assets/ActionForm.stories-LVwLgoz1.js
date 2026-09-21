import{j as t,g as n}from"./iframe-CPDW-PQM.js";import{A as r}from"./action-form-BtKYptwy.js";import"./preload-helper-DLPPZvQy.js";import"./DropdownField-DJ9z17_O.js";import"./debounce-XSxzF9O8.js";import"./useOsdkClient-i81o04a7.js";import"./index-BD9zYiqo.js";import"./Input-CD_gqaHO.js";import"./useBaseUiId-B5I3_RDX.js";import"./useControlled-i4DTbWgc.js";import"./index-fIzLT5CY.js";import"./index-BTWFHyEC.js";import"./PopoverPopup-BdxYHBaz.js";import"./InternalBackdrop-DdjQtzae.js";import"./composite-p-h0KAPd.js";import"./index-B7g8W8Zp.js";import"./getDisabledMountTransitionStyles-Dto8xlJk.js";import"./ToolbarRootContext-OaLx1XI9.js";import"./tick-BD10YuUL.js";import"./svgIconContainer-C7wqaI1B.js";import"./small-cross-CSCn7V4Z.js";import"./search-BZvDdvYt.js";import"./cross-DR7gxXwq.js";import"./useValueChanged-f6yxC0pT.js";import"./getPseudoElementBounds-Dfn0jdGk.js";import"./CompositeItem-BKuiG4wu.js";import"./makeExternalStore-EbQWCuwR.js";import"./BaseForm-nVHuF2Q5.js";import"./ActionButton-J4pZ9dww.js";import"./Button-CRJqCk8i.js";import"./SkeletonBar-CXBL3BvT.js";import"./Tooltip-B-fohL4X.js";import"./info-sign-D3Axwvts.js";import"./chevron-up-Bq9Sdb4M.js";import"./chevron-down-BhbuOWem.js";import"./useEventCallback-CD0AM3jl.js";import"./iconLoader-jGy_hkcM.js";import"./CompositeRoot-CMpp6cZL.js";import"./Switch-BxNWqYJc.js";import"./TimePicker-Du54LeaU.js";import"./CollapsiblePanel-CoH06yjt.js";import"./error-BojBsd96.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BSyWaS_D.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
