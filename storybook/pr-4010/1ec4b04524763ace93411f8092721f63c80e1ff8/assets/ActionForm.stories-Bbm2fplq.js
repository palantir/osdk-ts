import{j as t,g as n}from"./iframe-g7EXj__l.js";import{A as r}from"./action-form-fuG86ak3.js";import"./preload-helper-D8k1PL_q.js";import"./DropdownField-vSeRPihM.js";import"./debounce-BTft0WlZ.js";import"./useOsdkClient-DDtgbU-m.js";import"./index-STGRTw-I.js";import"./Input-B51qbm94.js";import"./useBaseUiId-JhwK1l7S.js";import"./useControlled-Bl9w2UKC.js";import"./index-B0EzKUi-.js";import"./index-C-z8TFzf.js";import"./PopoverPopup-kmYtvjiL.js";import"./InternalBackdrop-DAPPStaY.js";import"./composite-CTFcElLo.js";import"./index-B1IG8Yi1.js";import"./getDisabledMountTransitionStyles-C2M1pWlv.js";import"./ToolbarRootContext-BDh1zVyN.js";import"./tick-Dss7UdqX.js";import"./svgIconContainer-DFRoFWsy.js";import"./small-cross-Cmov1ycc.js";import"./search-Dyr6dgW-.js";import"./cross-DMuPKEQ0.js";import"./useValueChanged-D8GvB5cP.js";import"./getPseudoElementBounds-CQh8woL5.js";import"./CompositeItem-C0TLzRF2.js";import"./makeExternalStore-B5gQKQXN.js";import"./BaseForm-BNHi9rlQ.js";import"./ActionButton-K4ZhL1v-.js";import"./Button-bn5eeaYG.js";import"./SkeletonBar-D6lZdVq4.js";import"./Tooltip-CuGUkUwF.js";import"./info-sign-CyjA87UU.js";import"./chevron-up-iBR_txD1.js";import"./chevron-down-DYMGKjqf.js";import"./useEventCallback-DRPgLmUn.js";import"./iconLoader-u7CuQQBU.js";import"./CompositeRoot-CTDiglAD.js";import"./Switch-doYvG-Wi.js";import"./TimePicker-BTpJGjy2.js";import"./CollapsiblePanel-QedkUBfr.js";import"./error-CiSXC6k7.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DC-0ZtoG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
