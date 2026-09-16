import{j as t,g as n}from"./iframe-C_0-Ny_N.js";import{A as r}from"./action-form-B8S8OTlR.js";import"./preload-helper-Cs_UzwR6.js";import"./DropdownField-DvVkFAtM.js";import"./debounce-CsMAmyDS.js";import"./useOsdkClient-qcjIUx1B.js";import"./index-BCapEaKB.js";import"./Input-BF9DmCeg.js";import"./useBaseUiId-B7Keq3x8.js";import"./useControlled-DmQkJsyf.js";import"./index-Bewi1ToU.js";import"./index-D3nPMosa.js";import"./PopoverPopup-CA1dNHn3.js";import"./InternalBackdrop-DSC0itKR.js";import"./composite-BKxtxXCT.js";import"./index-DCJ2O27O.js";import"./getDisabledMountTransitionStyles-CpRzurrr.js";import"./ToolbarRootContext-DkY9S2-W.js";import"./tick-CZldnOuP.js";import"./svgIconContainer-DAGFJod5.js";import"./small-cross-CFI7QvS0.js";import"./search-BKcV1gVw.js";import"./cross-Dhbxwhb2.js";import"./useValueChanged-CdL69oAW.js";import"./getPseudoElementBounds-NZN6UuUV.js";import"./CompositeItem-BeOy_iQJ.js";import"./makeExternalStore-CXzzR7o8.js";import"./BaseForm-DDHsDpBH.js";import"./ActionButton-D9LJ1Y0h.js";import"./Button-g8Y5a3bQ.js";import"./SkeletonBar-CoeG_Gyn.js";import"./Tooltip-CSoPyId7.js";import"./info-sign-DqdkoZjh.js";import"./chevron-up-Bfn8ktxO.js";import"./chevron-down-C0ibfMMv.js";import"./useEventCallback-CHNZdE5h.js";import"./iconLoader-BnFKk8U1.js";import"./Switch-CjKgECOk.js";import"./CompositeRoot-CF8DINrA.js";import"./TimePicker-ChIx5DVX.js";import"./CollapsiblePanel-CL0PnPaH.js";import"./error-DAsTyxDt.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-rrME1YBQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
