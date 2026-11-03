import{j as t,g as n}from"./iframe-vcLMjbea.js";import{A as r}from"./action-form-qvYUeI3R.js";import"./preload-helper-RU1OdimD.js";import"./DropdownField-DHSmAbjS.js";import"./debounce-N0qJ7Xu9.js";import"./useOsdkClient-DE3ZbsH3.js";import"./index-CG3KkM6y.js";import"./Input-B07SGOjF.js";import"./useBaseUiId-DnJ4weT2.js";import"./useControlled-BXjUIo-l.js";import"./index-BIHIRrhw.js";import"./index-CU58PLdw.js";import"./PopoverPopup-Bma8tsO9.js";import"./InternalBackdrop-HVYVXyCg.js";import"./composite-CT0DZWF7.js";import"./index-NU5zO8vj.js";import"./getDisabledMountTransitionStyles-CMJs3FOY.js";import"./ToolbarRootContext-6uR7xL1n.js";import"./tick-DMkp_lOe.js";import"./svgIconContainer-Gicaxf1s.js";import"./small-cross-Bp4GK8nv.js";import"./search-3IXTuiXl.js";import"./cross-D-EFak3i.js";import"./useValueChanged-Fi604hGA.js";import"./getPseudoElementBounds-CVVRvaQ5.js";import"./CompositeItem-BN5pExu_.js";import"./makeExternalStore-SiSiEnyI.js";import"./BaseForm-IoXrRwE2.js";import"./ActionButton-BgFvfHoG.js";import"./Button-DY9kTYfp.js";import"./SkeletonBar-sPDIVMCS.js";import"./Tooltip-bH_4JHn2.js";import"./info-sign-hSnnUik8.js";import"./chevron-up-BF_YOLkd.js";import"./chevron-down-CCBKa1Fl.js";import"./useEventCallback-D6NEmK7_.js";import"./iconLoader-Bk1bvv43.js";import"./Switch-DfUvH5Go.js";import"./CompositeRoot-h-5MBkNI.js";import"./TimePicker-BjmPHIon.js";import"./CollapsiblePanel-DiUY56Er.js";import"./error-CrN3ijuU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BcVOHfX1.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
