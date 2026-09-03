import{j as t,g as n}from"./iframe-g6xxvyIV.js";import{A as r}from"./action-form-WKg5kYWR.js";import"./preload-helper-VtRw9ZxB.js";import"./DropdownField-B2rbjyzb.js";import"./debounce-D2Twfe4R.js";import"./useOsdkClient-DQW7wz7c.js";import"./index-CswLMQ0k.js";import"./Input-DvVClOUT.js";import"./useBaseUiId-DXMdH-da.js";import"./useControlled-DBzkXlO9.js";import"./index-B1T8sIVD.js";import"./index-Df1hA2tb.js";import"./PopoverPopup-MFr_6M87.js";import"./InternalBackdrop-B2kPN_TW.js";import"./composite-CidrPxyb.js";import"./index-BqNrJX4d.js";import"./getDisabledMountTransitionStyles-AFQK8iPs.js";import"./ToolbarRootContext-CnYeU0vp.js";import"./tick-BcR7azTr.js";import"./svgIconContainer-TEGni_EK.js";import"./small-cross-DuwCmfeY.js";import"./search-CoUKVa3J.js";import"./cross-ClaRDnYq.js";import"./useValueChanged-DvWpAsov.js";import"./getPseudoElementBounds-COVW9G6p.js";import"./CompositeItem-D8bzrW1A.js";import"./makeExternalStore-BrS-ebeG.js";import"./BaseForm-CWhxQkZN.js";import"./ActionButton-B6C4Psnv.js";import"./Button-BX2PLV5j.js";import"./SkeletonBar-CIK4W8nM.js";import"./Tooltip-82FaG7gZ.js";import"./info-sign-Cd6-ZoIt.js";import"./chevron-up-BEGzBVMx.js";import"./chevron-down-CkRfYs8Z.js";import"./useEventCallback-Q7tlTXVx.js";import"./iconLoader-CrLJxSjt.js";import"./CompositeRoot-Bv12sE0u.js";import"./Switch-I4ebRJTD.js";import"./TimePicker-CnC_Pr6q.js";import"./CollapsiblePanel-RFMs-0SV.js";import"./error-BGoiu4dF.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CfHIwfTt.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
