import{j as t,g as n}from"./iframe-CvQ7w9cm.js";import{A as r}from"./action-form-8_JIdnyD.js";import"./preload-helper-DQXfiblR.js";import"./DropdownField-DM7hESN-.js";import"./debounce-DMAHBIBw.js";import"./useOsdkClient-CHxvOOOU.js";import"./index-2iDqrev3.js";import"./Input-DHzSCAAb.js";import"./useBaseUiId-Dm6kpRCs.js";import"./useControlled-D1WZsU2S.js";import"./index-Ban7KgTd.js";import"./index-DRIyOfaO.js";import"./isObject-HYSX2VgC.js";import"./InternalBackdrop-CwQyz_cr.js";import"./composite-BwPwzWwu.js";import"./index-DnyowYhp.js";import"./getDisabledMountTransitionStyles-BKY7Nc99.js";import"./ToolbarRootContext-DjbW4ahc.js";import"./tick-92o4E8CL.js";import"./svgIconContainer-DN6Jj3b-.js";import"./small-cross-B8OuHgpK.js";import"./search-D1f6LLc_.js";import"./cross-xNEqMC60.js";import"./useValueChanged-g749mAHL.js";import"./getPseudoElementBounds-P4K_6V9u.js";import"./CompositeItem-BhDBjBvE.js";import"./makeExternalStore-BQ0wnuzx.js";import"./BaseForm-dPvTn7Xy.js";import"./ActionButton-BLcdgpDk.js";import"./Button-Cq3u6MOe.js";import"./SkeletonBar-xL8OjV1Y.js";import"./Tooltip-C4qhRtMx.js";import"./info-sign-9PJ1visN.js";import"./chevron-up-CnOWiwR0.js";import"./chevron-down-CVrOZp8I.js";import"./useEventCallback-LDd7TooX.js";import"./iconLoader-BpJI7nN9.js";import"./Switch-DDz4Bzhu.js";import"./CompositeRoot-DNGKXjyy.js";import"./TimePicker-BXyoVKWT.js";import"./CollapsiblePanel-KnikiUjX.js";import"./error-S-GP8zQ9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-YRpFiv4w.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
