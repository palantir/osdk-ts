import{j as t,g as n}from"./iframe-BV--DL-R.js";import{A as r}from"./action-form-C0WFshnb.js";import"./preload-helper-BfGADaHb.js";import"./DropdownField-CqJYsTEQ.js";import"./debounce-yjhqSwaL.js";import"./useOsdkClient-BpiaH7Up.js";import"./index-CpBKC5uG.js";import"./Input-CryKSl2-.js";import"./useBaseUiId-rbddndRR.js";import"./useControlled-CdeR330J.js";import"./index-EXqXv7zU.js";import"./index-B1MBKIV9.js";import"./PopoverPopup-Dab1ytdf.js";import"./InternalBackdrop-A29j3Jv_.js";import"./composite-CQeJ_a4C.js";import"./index-BxGUdqqq.js";import"./getDisabledMountTransitionStyles-B1E7AbBw.js";import"./ToolbarRootContext-BKEdcjiV.js";import"./tick-BN4lQriL.js";import"./svgIconContainer-vnkw8afj.js";import"./small-cross-DRxw8mHr.js";import"./search-BMQtt1GF.js";import"./cross-D8EsCuc2.js";import"./useValueChanged-CJeYGrcH.js";import"./getPseudoElementBounds-Bw9teYEa.js";import"./CompositeItem-CftYIfuS.js";import"./makeExternalStore-CbX_-WII.js";import"./BaseForm-CNdE0WzO.js";import"./ActionButton-kVCpi8C7.js";import"./Button-D-B9BslW.js";import"./SkeletonBar-CQF-UYPc.js";import"./Tooltip-CVaWVMU1.js";import"./info-sign-D8yPFbF0.js";import"./chevron-up-BvTtcjbK.js";import"./chevron-down-DLz3NkpP.js";import"./useEventCallback-DLQ-P11x.js";import"./iconLoader-BDRSrdoP.js";import"./CompositeRoot-CostxhIo.js";import"./Switch-BljQHlFI.js";import"./TimePicker-4vpTjN9H.js";import"./CollapsiblePanel-S4FPv7iH.js";import"./error-CX8ETYns.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-bx0PT80C.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
