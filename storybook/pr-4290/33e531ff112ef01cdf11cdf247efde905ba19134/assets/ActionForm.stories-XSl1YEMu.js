import{j as t,g as n}from"./iframe-D8AA8tZ5.js";import{A as r}from"./action-form-fYykVPGG.js";import"./preload-helper-BH6-9HD1.js";import"./DropdownField-BB9zKVZW.js";import"./debounce-DEqKAPEE.js";import"./useOsdkClient-F0ZDWn2o.js";import"./index-CukSKf6K.js";import"./Input-CB7rgA9u.js";import"./useBaseUiId-DoN4Gm5G.js";import"./useControlled-B43d18Tf.js";import"./index-BngeOfUA.js";import"./index-Beb-N8jB.js";import"./PopoverPopup-B5uG5joS.js";import"./InternalBackdrop-Cf7I9NhM.js";import"./composite-BXcEZn4p.js";import"./index-B03lQs5E.js";import"./getDisabledMountTransitionStyles-tQXpWGZy.js";import"./ToolbarRootContext-BfpPUsVU.js";import"./tick-vp302nI_.js";import"./svgIconContainer-M2XD2W51.js";import"./small-cross-BPpJlDWz.js";import"./search-g_GQHQvF.js";import"./cross-hRHI0Bet.js";import"./useValueChanged-DNIrywMU.js";import"./getPseudoElementBounds-CD0IqPws.js";import"./CompositeItem-DyTH_2rH.js";import"./makeExternalStore-CuMj3UXB.js";import"./BaseForm-DPzA4ysy.js";import"./ActionButton-0Dyhpxhu.js";import"./Button-DM4RbJ0A.js";import"./SkeletonBar-C33imfSE.js";import"./Tooltip-DaRA4zwN.js";import"./info-sign-D0MN8gxi.js";import"./chevron-up-DjAOzO7D.js";import"./chevron-down-CUVA2CdW.js";import"./useEventCallback-C9xuvvfm.js";import"./iconLoader-CpIYzF06.js";import"./Switch-Dgaty3Ju.js";import"./CompositeRoot-BG_c5da8.js";import"./TimePicker-DdeAO6sk.js";import"./CollapsiblePanel-BDhpShGL.js";import"./error-CvnJxzc0.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BRgNGg7P.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
