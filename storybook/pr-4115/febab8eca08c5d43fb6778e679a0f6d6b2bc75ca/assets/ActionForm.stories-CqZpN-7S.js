import{j as t,g as n}from"./iframe-DJpO_6mK.js";import{A as r}from"./action-form-DQDOIupm.js";import"./preload-helper-GI-tMhcV.js";import"./DropdownField-QCgrRwcb.js";import"./debounce-8z5zliAt.js";import"./useOsdkClient-B5AQFXxh.js";import"./index-Da0zq60o.js";import"./Input-DGLD7TKX.js";import"./useBaseUiId-V4YDTLU-.js";import"./useControlled-qKe1fmb3.js";import"./index-Lks_ei54.js";import"./index-THQXJEcW.js";import"./PopoverPopup-DsCmiqgE.js";import"./InternalBackdrop-C73rlr0M.js";import"./composite-BF9Swh2Y.js";import"./index-CoNUXFpY.js";import"./getDisabledMountTransitionStyles-BVq8IuaH.js";import"./ToolbarRootContext-BlqCCViI.js";import"./tick-C6jkrubs.js";import"./svgIconContainer-BXariDMs.js";import"./small-cross-BCt-wViZ.js";import"./search-yqKQokLr.js";import"./cross-7wx910Yp.js";import"./useValueChanged-D5XUhKWQ.js";import"./getPseudoElementBounds-DvuhtSAs.js";import"./CompositeItem-9_63dtCO.js";import"./makeExternalStore-DoNjT8AE.js";import"./BaseForm-B3eocWRX.js";import"./ActionButton-wdIB-PMi.js";import"./Button-CwysH2z4.js";import"./SkeletonBar-B9TWtrAf.js";import"./Tooltip-Df3DP3K9.js";import"./info-sign-DHicAWVQ.js";import"./chevron-up-ycY5gt-z.js";import"./chevron-down-BVx0EdZG.js";import"./useEventCallback-BqBJVn3L.js";import"./iconLoader-DePDoXF7.js";import"./Switch-SiPNYUjE.js";import"./CompositeRoot-D9yXIfWf.js";import"./TimePicker-CMb9jRCg.js";import"./CollapsiblePanel-BI6lLrWz.js";import"./error-xwSiXxIa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CaCBUU14.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
