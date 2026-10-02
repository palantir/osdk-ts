import{j as t,g as n}from"./iframe-BYO6buG4.js";import{A as r}from"./action-form-CTW__ASC.js";import"./preload-helper-BghxL7kB.js";import"./DropdownField-CSPCixRr.js";import"./debounce-BTsoIqCY.js";import"./useOsdkClient-DoQ52jay.js";import"./index-BoyptyOK.js";import"./Input-T9JgejYL.js";import"./useBaseUiId-DSjvVVjS.js";import"./useControlled-Cg_ccIWb.js";import"./index-CsWBFdKT.js";import"./index-1LA5lE3C.js";import"./PopoverPopup-DeSSS8K8.js";import"./InternalBackdrop-idagBMen.js";import"./composite-Od8Flb7p.js";import"./index-NS6h_AVZ.js";import"./getDisabledMountTransitionStyles-B-bqpDLb.js";import"./ToolbarRootContext-BKI2aJJ6.js";import"./tick-BkEOGkDA.js";import"./svgIconContainer-56E6UlaN.js";import"./small-cross-FoG8HaIL.js";import"./search-Ci90mlVI.js";import"./cross-Db1-xEOp.js";import"./useValueChanged-CrS2COC5.js";import"./getPseudoElementBounds-BcYivqxs.js";import"./CompositeItem-CN9f57ba.js";import"./makeExternalStore-Cjetkmua.js";import"./BaseForm-D5Xy7VSR.js";import"./ActionButton-DqJ5wns_.js";import"./Button-DMsIowuw.js";import"./SkeletonBar-ClyXBwkY.js";import"./Tooltip-DipSBfOt.js";import"./info-sign-Lj8MAp1Q.js";import"./chevron-up-DejLKhPH.js";import"./chevron-down-DqQBT-ce.js";import"./useEventCallback-mMKXwGEF.js";import"./iconLoader-D6cYGGQ-.js";import"./Switch-BOeeWOpr.js";import"./CompositeRoot-z65sOQfO.js";import"./TimePicker-CkIRtNT8.js";import"./CollapsiblePanel-BZo8Mo6J.js";import"./error-DvNb2Jgd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DdFROTWY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
