import{j as t,g as n}from"./iframe-CvOjOlaX.js";import{A as r}from"./action-form-7AJUTRPe.js";import"./preload-helper-CMIwN0Ht.js";import"./DropdownField-BRePIiwE.js";import"./debounce-BV_6a4Da.js";import"./useOsdkClient-uMKq4cOq.js";import"./index-CrAKByIV.js";import"./Input-B3WzxSEN.js";import"./useBaseUiId-2b2yWiLC.js";import"./useControlled-Bk4S-y5O.js";import"./index-3CFeZz8S.js";import"./index-BfsFuLyL.js";import"./PopoverPopup-C2Gwi9qi.js";import"./InternalBackdrop-DV_lxe_-.js";import"./composite-DBq50y_B.js";import"./index-Dr1wgK35.js";import"./getDisabledMountTransitionStyles-DS8rYKRs.js";import"./ToolbarRootContext-jTzvi3TC.js";import"./tick-BMOBXLnC.js";import"./svgIconContainer-CCgDAq3h.js";import"./small-cross-Ckd7tyu3.js";import"./search-C9_Jgha_.js";import"./cross-DiBcry41.js";import"./useValueChanged-Dv0LQJsd.js";import"./getPseudoElementBounds-BnWyijzd.js";import"./CompositeItem-CqY36BxB.js";import"./makeExternalStore-Bvn4jvir.js";import"./BaseForm-D0vQi6I1.js";import"./ActionButton-C7XwUYyd.js";import"./Button-VY6TA0Ac.js";import"./SkeletonBar-DzLaCov9.js";import"./Tooltip-D2aVKWxO.js";import"./info-sign-Cg9FnZ6S.js";import"./chevron-up-CGfHgAPT.js";import"./chevron-down-DE6gjpOR.js";import"./useEventCallback-C-ZadIlY.js";import"./iconLoader-DZT985MB.js";import"./Switch-BKCxWfYl.js";import"./CompositeRoot-Dik6S4f6.js";import"./TimePicker-CuS1SO9s.js";import"./CollapsiblePanel-D-wmv3DK.js";import"./error-BYaZivRW.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BRorics0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
