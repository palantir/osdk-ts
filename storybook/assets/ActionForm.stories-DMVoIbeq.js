import{j as t,g as n}from"./iframe-CnAEf3IJ.js";import{A as r}from"./action-form-Al4lK_Xx.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-DKvh0G9S.js";import"./debounce-CxmUTlgJ.js";import"./useOsdkClient-Cy9h7b-X.js";import"./index-B8Nz7JJW.js";import"./Input-x_02lyVD.js";import"./useBaseUiId-CeIC7NO6.js";import"./useControlled-B_4lFiHq.js";import"./index-BcvNcIza.js";import"./index-CX6f-w2g.js";import"./PopoverPopup-CUX5PsPP.js";import"./InternalBackdrop-YQuz4Vbl.js";import"./composite-CL6haQa-.js";import"./index-Cig9tftr.js";import"./getDisabledMountTransitionStyles-DPIKQDtQ.js";import"./ToolbarRootContext-CoOtTfWl.js";import"./tick-IIhkou4I.js";import"./svgIconContainer-BIdExII8.js";import"./small-cross-BLoBHL9y.js";import"./search-CEklk6Yi.js";import"./cross-Dt0cGPfd.js";import"./useValueChanged-Ch6t91n6.js";import"./getPseudoElementBounds-DpmHiwP5.js";import"./CompositeItem-ByBfsUTK.js";import"./makeExternalStore-DBD3eHtk.js";import"./BaseForm-CyNYpUeZ.js";import"./ActionButton-DZsexcaK.js";import"./Button-C2qyHp3c.js";import"./SkeletonBar-BTUrihaF.js";import"./Tooltip-bXPrz9QG.js";import"./info-sign-DhaReIYq.js";import"./chevron-up-jF1Dl8Jv.js";import"./chevron-down-Bwa7GCIs.js";import"./useEventCallback-BWgthKhM.js";import"./iconLoader-BccEQLQm.js";import"./CompositeRoot-DynRPe8o.js";import"./Switch-C6LGZ8yG.js";import"./TimePicker-D0WLs3y5.js";import"./CollapsiblePanel-Di9dac_w.js";import"./error-1wJ1mTzx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B8y7kht9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
