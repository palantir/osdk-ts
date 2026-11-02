import{j as t,g as n}from"./iframe-CZ6tfr7m.js";import{A as r}from"./action-form-Dy9Ak7gp.js";import"./preload-helper-CkfrOY1H.js";import"./DropdownField-BZy1OgIR.js";import"./debounce-C_YW27Xf.js";import"./useOsdkClient-BF1kH45K.js";import"./index-DLNBYVnV.js";import"./Input-BkVAz5rQ.js";import"./useBaseUiId-Cj6LeXHN.js";import"./useControlled-BvU1uW5X.js";import"./index-DeteMldf.js";import"./index-BfO80qBP.js";import"./PopoverPopup-spGWFYuF.js";import"./InternalBackdrop-D2Gwq_Q6.js";import"./composite-BbwXcuXn.js";import"./index-DnDjlS1X.js";import"./getDisabledMountTransitionStyles-iXD11Bdm.js";import"./ToolbarRootContext-CRrNmffx.js";import"./tick-DoJkCuSU.js";import"./svgIconContainer-Dvg9KYVw.js";import"./small-cross-uWgOqzJ0.js";import"./search-ztvSGVr9.js";import"./cross-CPXyH5jR.js";import"./useValueChanged-CyVp-7ed.js";import"./getPseudoElementBounds-ClrkBtWE.js";import"./CompositeItem-Cl5PbTL3.js";import"./makeExternalStore-D-O-FofH.js";import"./BaseForm-CyGjqCrf.js";import"./ActionButton-f-TJoADH.js";import"./Button-3RbWO35b.js";import"./SkeletonBar-CXPy7H-j.js";import"./Tooltip-XgUBv2UC.js";import"./info-sign-CS7-wAqV.js";import"./chevron-up-DRnXouIx.js";import"./chevron-down-DVcYPRuD.js";import"./useEventCallback-CbplXCH5.js";import"./iconLoader-DawoksOT.js";import"./Switch-Cdmsmoeh.js";import"./CompositeRoot-Crsul0J8.js";import"./TimePicker-mMP9pIjM.js";import"./CollapsiblePanel-CN460M1M.js";import"./error-d7pkadgS.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B2DbhWLJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
