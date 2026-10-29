import{j as t,g as n}from"./iframe-CiSKHfyc.js";import{A as r}from"./action-form-xDbaymuB.js";import"./preload-helper-CWupNPgO.js";import"./DropdownField-CYqYbFgh.js";import"./debounce-C0MW0JLZ.js";import"./useOsdkClient-rmpyupkX.js";import"./index-D3wSasD3.js";import"./Input-Cul32AIH.js";import"./useBaseUiId-b_FN5CrC.js";import"./useControlled-CiZcMD85.js";import"./index-B_PLf88V.js";import"./index-EV91z822.js";import"./PopoverPopup-BFyTaDus.js";import"./InternalBackdrop-D3k0KQi8.js";import"./composite-jZQCk-zR.js";import"./index-DiV7dZco.js";import"./getDisabledMountTransitionStyles-B0YJZ1gZ.js";import"./ToolbarRootContext-D7bvCCy6.js";import"./tick-Dt1Daxrw.js";import"./svgIconContainer-BJUr7DHQ.js";import"./small-cross-B8GBbM76.js";import"./search-DZapC1lH.js";import"./cross-DLLCkXVB.js";import"./useValueChanged-Cy7TI7KD.js";import"./getPseudoElementBounds-CF1HuyZT.js";import"./CompositeItem-_hXBxygC.js";import"./makeExternalStore-BA-q_GW8.js";import"./BaseForm-Cgnmae7q.js";import"./ActionButton-BQXgRd_a.js";import"./Button-Cmyv-rnS.js";import"./SkeletonBar-CPu9e21L.js";import"./Tooltip-DEc9D41A.js";import"./info-sign-C08RfU2X.js";import"./chevron-up-Dlo1kaVg.js";import"./chevron-down-D5jrtiFY.js";import"./useEventCallback-sqYZKM0w.js";import"./iconLoader-DhETvbmZ.js";import"./Switch-DlSw35aP.js";import"./CompositeRoot-DGORO-V9.js";import"./TimePicker-CcNc6G11.js";import"./CollapsiblePanel-CI66v9kn.js";import"./error-CDPXWVFZ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CWRpGlls.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
