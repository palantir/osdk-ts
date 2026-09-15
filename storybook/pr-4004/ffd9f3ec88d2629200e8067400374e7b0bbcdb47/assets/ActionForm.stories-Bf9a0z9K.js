import{j as t,g as n}from"./iframe-Ds1oJ6aB.js";import{A as r}from"./action-form-CcYkmX-5.js";import"./preload-helper-BuU6EXxB.js";import"./DropdownField--RBhVTBF.js";import"./debounce-CaEJ8DE5.js";import"./useOsdkClient-Dx_YLbK3.js";import"./index-DV-RsCBD.js";import"./Input-DCigff7H.js";import"./useBaseUiId-SveB9MiJ.js";import"./useControlled-Bb3j5PDR.js";import"./index-Z-0SkI97.js";import"./index-Dg7JsOD2.js";import"./PopoverPopup-BW8M19fp.js";import"./InternalBackdrop-dHXXhMSx.js";import"./composite-B685C7pj.js";import"./index-DjBs4z29.js";import"./getDisabledMountTransitionStyles-M6DMXfnH.js";import"./ToolbarRootContext-D5DhHef8.js";import"./tick-4HEv4TzV.js";import"./svgIconContainer-DhoJ1wKf.js";import"./small-cross-OSqOWbbs.js";import"./search-C9RUzGD8.js";import"./cross-GX9DzQOW.js";import"./useValueChanged-DiKNib74.js";import"./getPseudoElementBounds-BevdPYrx.js";import"./CompositeItem-DRYBX4C7.js";import"./makeExternalStore-Bpmh1YoV.js";import"./BaseForm-D-NNrgjA.js";import"./ActionButton-y1-kR7HQ.js";import"./Button-DEZznyRx.js";import"./SkeletonBar-CgiMkEwi.js";import"./Tooltip-CiCS2vte.js";import"./info-sign-Dr7dFTHZ.js";import"./chevron-up-BFdcJJnz.js";import"./chevron-down-BTaheqba.js";import"./useEventCallback-BIuUY0VI.js";import"./iconLoader-D2PHe8yH.js";import"./CompositeRoot-D-aRvgIt.js";import"./Switch-Df_pycm7.js";import"./TimePicker-BrzP5o6p.js";import"./CollapsiblePanel-DJPu7lg7.js";import"./error-Cpa8ixp-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BWv1tGJm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
