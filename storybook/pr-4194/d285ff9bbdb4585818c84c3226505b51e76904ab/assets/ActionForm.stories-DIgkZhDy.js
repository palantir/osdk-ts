import{j as t,g as n}from"./iframe-BLtbB9yL.js";import{A as r}from"./action-form-DKCEnUrV.js";import"./preload-helper-NY6L4APl.js";import"./DropdownField-DbhYDUVf.js";import"./debounce-DSB8VkTp.js";import"./useOsdkClient-kJp2DoWV.js";import"./index-Dzu4b_IB.js";import"./Input-BiA-3KH_.js";import"./useBaseUiId-DmOmCKZO.js";import"./useControlled-WQcnYS8e.js";import"./index-Dq2eIlq8.js";import"./index-u2zPfote.js";import"./PopoverPopup-DUjFzwE3.js";import"./InternalBackdrop-DMzDeexZ.js";import"./composite-Cypvm6OB.js";import"./index-SyXOuBxU.js";import"./getDisabledMountTransitionStyles-KNC7oIQb.js";import"./ToolbarRootContext-DdGg-Lfa.js";import"./tick-3ZiA6yfA.js";import"./svgIconContainer-cTxegse7.js";import"./small-cross-8u8HOGrz.js";import"./search-1AInKOFa.js";import"./cross-C7Pfqsgy.js";import"./useValueChanged-BZ3-3RtY.js";import"./getPseudoElementBounds-DaOCuufP.js";import"./CompositeItem-DNKgQIaZ.js";import"./makeExternalStore-Bw178tiK.js";import"./BaseForm-DSrRAmig.js";import"./ActionButton-CFQJm7v4.js";import"./Button-B6pZtsky.js";import"./SkeletonBar-Gao4JZhU.js";import"./Tooltip-BEj70Lhq.js";import"./info-sign-Da1b5BAf.js";import"./chevron-up-BVr3oU-0.js";import"./chevron-down-BhpG0rg7.js";import"./useEventCallback-Iu0smDrU.js";import"./iconLoader-D27xToM6.js";import"./Switch-Dz9Uga98.js";import"./CompositeRoot-BD6WdsPb.js";import"./TimePicker-gdGgD--j.js";import"./CollapsiblePanel-PGaxeolw.js";import"./error-BGqP2VaS.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CFSyk5hC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
