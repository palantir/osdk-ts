import{j as t,g as n}from"./iframe-DmE1XkBG.js";import{A as r}from"./action-form-ByzsYQIf.js";import"./preload-helper-CXlVQXKb.js";import"./DropdownField-DYMCaG07.js";import"./debounce-DVfO0w3J.js";import"./useOsdkClient-COMtbyLT.js";import"./index-kStVVneq.js";import"./Input-BwNWBTCC.js";import"./useBaseUiId-BBFoTCwh.js";import"./useControlled-Ceu9BId1.js";import"./index-ks1cIWqU.js";import"./index-DXBXi0eZ.js";import"./PopoverPopup-D4DXdieW.js";import"./InternalBackdrop-CiHjM1hr.js";import"./composite-Dj1kIl2K.js";import"./index-BSV59ZpO.js";import"./getDisabledMountTransitionStyles-C0PIglyQ.js";import"./ToolbarRootContext-CmqDJjBa.js";import"./tick-BV927XEn.js";import"./svgIconContainer-BYLHbmus.js";import"./small-cross-CdTrWr6f.js";import"./search-DLAneuKN.js";import"./cross-DJt4HA-N.js";import"./useValueChanged-CEMHgm4B.js";import"./getPseudoElementBounds-BdUsSKfU.js";import"./CompositeItem-C3J_zDNM.js";import"./makeExternalStore-C84QYiDy.js";import"./BaseForm-Ze4rNUG1.js";import"./ActionButton-D7gNEyrg.js";import"./Button-CjFhiXn4.js";import"./SkeletonBar-CEiG_Olh.js";import"./Tooltip-Bn2W5oJX.js";import"./info-sign-CNu2f1KS.js";import"./chevron-up-CyI9h9vB.js";import"./chevron-down-Dg6DJkU-.js";import"./useEventCallback-vgEMvYMu.js";import"./iconLoader-B730UsFG.js";import"./Switch-CJwUpB-g.js";import"./CompositeRoot-CBWEowFY.js";import"./TimePicker-yA4ZfiLw.js";import"./CollapsiblePanel-F_JsFxPB.js";import"./error-B3TY1Brr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DXKPSTbY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
