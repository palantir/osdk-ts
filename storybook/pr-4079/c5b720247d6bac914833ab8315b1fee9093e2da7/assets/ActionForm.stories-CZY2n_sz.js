import{j as t,g as n}from"./iframe-BF6_9Xjc.js";import{A as r}from"./action-form-CTVbffcz.js";import"./preload-helper-CVsiSqQ7.js";import"./DropdownField-BB4TjDf4.js";import"./debounce-BsKaorv7.js";import"./useOsdkClient-B4LNNlf9.js";import"./index-B1Ya2fBr.js";import"./Input-RBsPV06C.js";import"./useBaseUiId-s3ehRo10.js";import"./useControlled-BXYuK13Z.js";import"./index-CYSW1VxS.js";import"./index-aIhJZAmJ.js";import"./PopoverPopup-BBXIONb1.js";import"./InternalBackdrop-D1tqsc6f.js";import"./composite-BGGp11kx.js";import"./index-eQPCQQYr.js";import"./getDisabledMountTransitionStyles-DNoRrnCX.js";import"./ToolbarRootContext-DHHYvc0f.js";import"./tick-BHeRwjB9.js";import"./svgIconContainer-CQE4WPFB.js";import"./small-cross-B8TwzzPi.js";import"./search-BUGVh3PQ.js";import"./cross-_UU9sZ5F.js";import"./useValueChanged-CYAv_T9U.js";import"./getPseudoElementBounds-BD65du9n.js";import"./CompositeItem-DI8gVSRQ.js";import"./makeExternalStore-BGO-jF6d.js";import"./BaseForm-Bl7dzPTz.js";import"./ActionButton-BpRFGqnw.js";import"./Button-SD0gx5bd.js";import"./SkeletonBar-B8Ad8ahg.js";import"./Tooltip-CPZeRJjC.js";import"./info-sign-BgIvAtAh.js";import"./chevron-up-DFcX3ZbM.js";import"./chevron-down-CVGUePFi.js";import"./useEventCallback-n4YXn8jD.js";import"./iconLoader-DLKsKQ35.js";import"./Switch-D9QG-r2K.js";import"./CompositeRoot-DgAY31Ct.js";import"./TimePicker-HHOZRI-g.js";import"./CollapsiblePanel-CZ9dHRXC.js";import"./error-Dk0JQDUN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-R2jYMWim.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
