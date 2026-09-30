import{j as t,g as n}from"./iframe-mIKFVahX.js";import{A as r}from"./action-form-CPq405kH.js";import"./preload-helper-DQmtxJ1O.js";import"./DropdownField-DRer5ayG.js";import"./debounce-ahFHSZsE.js";import"./useOsdkClient-Dtz0cA44.js";import"./index-eiO_d1ck.js";import"./Input-C9PDTVtY.js";import"./useBaseUiId-CgEi7PVt.js";import"./useControlled-XyEjnDFJ.js";import"./index-Dr8o4W-0.js";import"./index-CRsq_c05.js";import"./PopoverPopup-DVmf3a0F.js";import"./InternalBackdrop-Cdrrn7aO.js";import"./composite-D6bfVeDu.js";import"./index-Pl8i-n3y.js";import"./getDisabledMountTransitionStyles-BBJk5-bd.js";import"./ToolbarRootContext-xG4QpLCn.js";import"./tick-D0ywqUCl.js";import"./svgIconContainer-CQHualxO.js";import"./small-cross-CuoPPjey.js";import"./search-BUcn5JQ5.js";import"./cross-UeuWwKaz.js";import"./useValueChanged-BD4JYKkh.js";import"./getPseudoElementBounds-BHyVtr05.js";import"./CompositeItem-CiILW6_Z.js";import"./makeExternalStore-BtEilyBA.js";import"./BaseForm-Dbu0isL4.js";import"./ActionButton-D0IxPZVx.js";import"./Button-D5NXSYW3.js";import"./SkeletonBar-Uz0c5MYh.js";import"./Tooltip-DaMgYhHZ.js";import"./info-sign-C0DpUb3u.js";import"./chevron-up-BIMYUXIf.js";import"./chevron-down-BpXaL00s.js";import"./useEventCallback-ByOT_zkS.js";import"./iconLoader-CaFxPXY0.js";import"./Switch-C6k7N7fJ.js";import"./CompositeRoot-Ch7lFv2f.js";import"./TimePicker-ByvCEEwK.js";import"./CollapsiblePanel--mOZhS6t.js";import"./error-Jm4hVuYR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-f8AFQ5tL.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
