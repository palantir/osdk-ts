import{j as t,g as n}from"./iframe-BLyAG4qt.js";import{A as r}from"./action-form-DBCVVm3K.js";import"./preload-helper-X2unNE1v.js";import"./DropdownField-BLxC4wsP.js";import"./debounce-oQzszjOg.js";import"./useOsdkClient-BX4YSqf_.js";import"./index-DRHjeWhY.js";import"./Input-COYDi8CV.js";import"./useBaseUiId-BsqYTkrj.js";import"./useControlled-vEPHT0r_.js";import"./index-DSTh4XEz.js";import"./index-DfIb261n.js";import"./PopoverPopup-B6km_FCr.js";import"./InternalBackdrop-CwfcL7hz.js";import"./composite-DXp5HadG.js";import"./index-C9NYWSwp.js";import"./getDisabledMountTransitionStyles-DigoJAfC.js";import"./ToolbarRootContext-t3Sav1_0.js";import"./tick-Mv4hM8lK.js";import"./svgIconContainer-BYhpNXbV.js";import"./small-cross-D36GncLx.js";import"./search-BnzIM1pO.js";import"./cross-zpmkdN3j.js";import"./useValueChanged-Csg5b8FM.js";import"./getPseudoElementBounds-CmuMJUdB.js";import"./CompositeItem-DKNH-seI.js";import"./makeExternalStore-B6gSjutd.js";import"./BaseForm-Ge1fma9Y.js";import"./ActionButton-CDA8eLMX.js";import"./Button-C4LVX8xd.js";import"./SkeletonBar-DPmC_kej.js";import"./Tooltip-BCO_7oJW.js";import"./info-sign-BZGUhj35.js";import"./chevron-up-DarVkq9V.js";import"./chevron-down-Dl_PyCCQ.js";import"./useEventCallback-6AhhLJg7.js";import"./iconLoader-CDTSVSb3.js";import"./Switch-BWnIGzA7.js";import"./CompositeRoot-CvOAWP7c.js";import"./TimePicker-C1exohIJ.js";import"./CollapsiblePanel-BMZ6E2uP.js";import"./error-CALDIyj0.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-hrd9pp_O.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
