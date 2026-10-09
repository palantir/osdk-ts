import{j as t,g as n}from"./iframe-eOIbuNqJ.js";import{A as r}from"./action-form-DF24zPME.js";import"./preload-helper-CgIJPkyR.js";import"./DropdownField-DVCiuc26.js";import"./debounce-DuqXkYiy.js";import"./useOsdkClient-D-YKzOkS.js";import"./index-Dk7CsQL8.js";import"./Input-Dseoi2Bs.js";import"./useBaseUiId-BGt5np_k.js";import"./useControlled-D-af9sp-.js";import"./index-DSnIaanU.js";import"./index-CFmwThG4.js";import"./PopoverPopup-DVnqpSim.js";import"./InternalBackdrop-uUv9MGMr.js";import"./composite-Bd6nPt4i.js";import"./index-904NSARe.js";import"./getDisabledMountTransitionStyles-BebC4cTU.js";import"./ToolbarRootContext-D7liU5HL.js";import"./tick-B8P9ON5a.js";import"./svgIconContainer-rhD8_llD.js";import"./small-cross-CTDjsytU.js";import"./search-sJO-f4KO.js";import"./cross-BcLTDviE.js";import"./useValueChanged-Cyy6383A.js";import"./getPseudoElementBounds-CstG7_ji.js";import"./CompositeItem-CilfwKya.js";import"./makeExternalStore-DO8UH6Jn.js";import"./BaseForm-rWbFPemO.js";import"./ActionButton-C40yhSRc.js";import"./Button-mtLpgF2-.js";import"./SkeletonBar-BEmPZtKd.js";import"./Tooltip-DuWPukYN.js";import"./info-sign-D3Pi2b4C.js";import"./chevron-up-BmqQWHaw.js";import"./chevron-down-BTesjy4Z.js";import"./useEventCallback-WZf0a_bB.js";import"./iconLoader-CUN0JhBa.js";import"./Switch-DPgkN-5a.js";import"./CompositeRoot-CC623icI.js";import"./TimePicker-LxG9ene8.js";import"./CollapsiblePanel-Cfs2diUt.js";import"./error-DBxXNUf_.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DMw3oRZ7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
