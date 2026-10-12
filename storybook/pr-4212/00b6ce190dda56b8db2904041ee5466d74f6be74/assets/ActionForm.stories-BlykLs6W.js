import{j as t,g as n}from"./iframe-De0JvUDI.js";import{A as r}from"./action-form-CiHO1Z0r.js";import"./preload-helper-DW0Viam7.js";import"./DropdownField-Bkm-lwWx.js";import"./debounce-C6Uj-jcf.js";import"./useOsdkClient-DKAeWvuz.js";import"./index-D2ucVBaK.js";import"./Input-C_CGkTkl.js";import"./useBaseUiId-ClfRKfDN.js";import"./useControlled-CRrAgDjk.js";import"./index-DSWLkZGL.js";import"./index-DRUMpWwL.js";import"./PopoverPopup-DNrWS3x8.js";import"./InternalBackdrop-BdrWkdLQ.js";import"./composite-Un7w28gc.js";import"./index-DPn3VSK_.js";import"./getDisabledMountTransitionStyles-BkAZ14rI.js";import"./ToolbarRootContext-Bxy7ajQD.js";import"./tick-CabygoeH.js";import"./svgIconContainer-C40TH68P.js";import"./small-cross--9BOpqr2.js";import"./search-MoU8b7Yy.js";import"./cross-D3NokT3S.js";import"./useValueChanged-B_zks5LA.js";import"./getPseudoElementBounds-6gBn4IJF.js";import"./CompositeItem-w6RFopZN.js";import"./makeExternalStore-CvSmdJRq.js";import"./BaseForm-DY-xmk3P.js";import"./ActionButton-DqBp-oot.js";import"./Button-Bn-SxZv6.js";import"./SkeletonBar-CWa0WbiQ.js";import"./Tooltip-DXEGgoGu.js";import"./info-sign-OoFEgkhd.js";import"./chevron-up-jDR939ib.js";import"./chevron-down-Yz9bQ-ge.js";import"./useEventCallback-CU5U5yco.js";import"./iconLoader-CI59noof.js";import"./Switch-Dm4P-fDC.js";import"./CompositeRoot-B46m9bWT.js";import"./TimePicker-DCgug531.js";import"./CollapsiblePanel-TSUxngdh.js";import"./error-D8UWFeng.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DlBld6qB.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
