import{j as t,g as n}from"./iframe-BSB0HYWK.js";import{A as r}from"./action-form-CGmkY7Sh.js";import"./preload-helper-BkFYvt7D.js";import"./DropdownField-t0KVkBHv.js";import"./debounce-CV5acG61.js";import"./useOsdkClient-fF8P9Svw.js";import"./index-CFn7NuDF.js";import"./Input-BwaAEQhC.js";import"./useBaseUiId-DOYgZcYk.js";import"./useControlled-CPd31jrj.js";import"./index-qi5mcdT7.js";import"./index-UxDU_lnD.js";import"./PopoverPopup-D5lvrcxC.js";import"./InternalBackdrop-rCZWLdBO.js";import"./composite-DrFNuPAr.js";import"./index-BWL2KDwg.js";import"./getDisabledMountTransitionStyles-MdauVsir.js";import"./ToolbarRootContext-BHLo6WQV.js";import"./tick-MzeZ9_PK.js";import"./svgIconContainer-ZqmkZwCg.js";import"./small-cross-xl9eyWoT.js";import"./search-DVQNznbm.js";import"./cross-CyBS2Nke.js";import"./useValueChanged-DEyO1HnO.js";import"./getPseudoElementBounds-DO90Z8uF.js";import"./CompositeItem-DFUc4zP3.js";import"./makeExternalStore-dBNRhzI_.js";import"./BaseForm-kC4hOZAN.js";import"./ActionButton-SFqgFBPz.js";import"./Button-odXi-ust.js";import"./SkeletonBar-AS4gHbaK.js";import"./Tooltip-BcbU3cUH.js";import"./info-sign-Cnqd7uqH.js";import"./chevron-up-CFLZDerz.js";import"./chevron-down-eX4f9a69.js";import"./useEventCallback-BmJuJRN8.js";import"./iconLoader-BPMv-Anh.js";import"./Switch-D6W24EQ8.js";import"./CompositeRoot-C4garnxN.js";import"./TimePicker-BAzeLs10.js";import"./CollapsiblePanel-BKaGtf_t.js";import"./error-Bf4UPDqQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BSqN_NUg.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
