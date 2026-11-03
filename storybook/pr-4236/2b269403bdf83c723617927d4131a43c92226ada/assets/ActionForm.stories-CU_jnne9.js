import{j as t,g as n}from"./iframe-htyY8WGh.js";import{A as r}from"./action-form-Bx26Ujs1.js";import"./preload-helper-BZEQ7CCm.js";import"./DropdownField-BgjFXt3p.js";import"./debounce-BFJO43v6.js";import"./useOsdkClient-bA8p7394.js";import"./index-9XAE-P5N.js";import"./Input-B_148gGT.js";import"./useBaseUiId-B5naUVoF.js";import"./useControlled-jlfCPDon.js";import"./index-BRbgX3T0.js";import"./index-BmvQUuUh.js";import"./PopoverPopup-VfPjnT9d.js";import"./InternalBackdrop-sMqyjWxo.js";import"./composite-DLA5e3bM.js";import"./index-DMt3BqCf.js";import"./getDisabledMountTransitionStyles-DNIZXeN8.js";import"./ToolbarRootContext-CvT5UyxT.js";import"./tick-Oy4Dyy5w.js";import"./svgIconContainer-DDCQ6k8x.js";import"./small-cross-BG5UjiFv.js";import"./search-BARUS6xQ.js";import"./cross-zUtY8fYt.js";import"./useValueChanged-BuXRFnHI.js";import"./getPseudoElementBounds-ehODIuKj.js";import"./CompositeItem-CuUp7unb.js";import"./makeExternalStore-CvyNaZuu.js";import"./BaseForm-B1iv40yP.js";import"./ActionButton-BGplWwX2.js";import"./Button-CugfLHha.js";import"./SkeletonBar-Dr30uUnV.js";import"./Tooltip-wud2Jc0O.js";import"./info-sign-B9I5Gl8a.js";import"./chevron-up-DQVHfWYR.js";import"./chevron-down-CPTHUdZ2.js";import"./useEventCallback-BPbziyI1.js";import"./iconLoader-riRhE6VV.js";import"./Switch-CPCsvpR6.js";import"./CompositeRoot-BROkna6b.js";import"./TimePicker-C3kmuSZy.js";import"./CollapsiblePanel-D5f1Ks-a.js";import"./error-B5cHozqr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B5xof_Ab.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
