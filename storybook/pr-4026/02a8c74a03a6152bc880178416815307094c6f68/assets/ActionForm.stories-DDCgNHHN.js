import{j as t,g as n}from"./iframe-BWi1ACEM.js";import{A as r}from"./action-form-BOFmQ87L.js";import"./preload-helper-CMYTaGeR.js";import"./DropdownField-BiyDva_F.js";import"./debounce-DVadtkz9.js";import"./useOsdkClient-BKedMyb4.js";import"./index-D-2uEljO.js";import"./Input-rlMpFyex.js";import"./useBaseUiId-YvjxUiEU.js";import"./useControlled-CfVPwlXb.js";import"./index-B_isAlQk.js";import"./index-DUFPmdn4.js";import"./PopoverPopup-Crv4q3Zt.js";import"./InternalBackdrop-C8uaHnmS.js";import"./composite-4nRCZoba.js";import"./index-DMoEONJx.js";import"./getDisabledMountTransitionStyles-CGzwzFIs.js";import"./ToolbarRootContext--XbyivlW.js";import"./tick-Dgs22XJr.js";import"./svgIconContainer-Cw0fxZBh.js";import"./small-cross-7-aG10PZ.js";import"./search-C-U4g2F4.js";import"./cross-CMcFjheT.js";import"./useValueChanged-CBGJApuu.js";import"./getPseudoElementBounds-DO2DurOI.js";import"./CompositeItem-BGhZB90A.js";import"./makeExternalStore-DOcJRkhv.js";import"./BaseForm-Dzw3KkqK.js";import"./ActionButton-ClnNG4Uj.js";import"./Button-W_tcCiCZ.js";import"./SkeletonBar-BHvw9YSk.js";import"./Tooltip-C1JoGvq6.js";import"./info-sign-CpPF11jV.js";import"./chevron-up-CjmvI4Vt.js";import"./chevron-down-Dyruysbi.js";import"./useEventCallback-Dvu0LVj3.js";import"./iconLoader-CrQDW67T.js";import"./CompositeRoot-DiFiBBXK.js";import"./Switch-Ckci3AQa.js";import"./TimePicker-BrIjkyKh.js";import"./CollapsiblePanel-cAHkXya3.js";import"./error-Ru_WceS-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BqK1HlYa.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
