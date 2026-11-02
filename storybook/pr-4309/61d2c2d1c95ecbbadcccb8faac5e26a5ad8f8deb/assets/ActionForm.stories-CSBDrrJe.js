import{j as t,g as n}from"./iframe-CHKcZgb7.js";import{A as r}from"./action-form-Bz0s_axi.js";import"./preload-helper-ebqo0JEM.js";import"./DropdownField-JI6iE4-V.js";import"./debounce-BI5dqIT5.js";import"./useOsdkClient-DiOlSmjl.js";import"./index-BACJcPnF.js";import"./Input-ByMels_v.js";import"./useBaseUiId-Cxc3vcrN.js";import"./useControlled-aYGdNSsu.js";import"./index-B0dGrXCM.js";import"./index-DHY3CWWm.js";import"./PopoverPopup-DZPcNR2_.js";import"./InternalBackdrop-CusfxTNT.js";import"./composite-B6ohSiOB.js";import"./index-B7FvQMnW.js";import"./getDisabledMountTransitionStyles-Dg77_XEZ.js";import"./ToolbarRootContext-C-44hQT7.js";import"./tick-Cbk0zspt.js";import"./svgIconContainer-DY2QJrYz.js";import"./small-cross-CG4ID_KO.js";import"./search-B4aplnsV.js";import"./cross-Dk2dXrK7.js";import"./useValueChanged-CeGdvOdh.js";import"./getPseudoElementBounds-CDFDrqWX.js";import"./CompositeItem-Brzkx-fO.js";import"./makeExternalStore-BWTgA4er.js";import"./BaseForm-CZkQVBaG.js";import"./ActionButton-DTs1yjbe.js";import"./Button-CiSWKai0.js";import"./SkeletonBar-BfLhsQBW.js";import"./Tooltip-D7qyJWee.js";import"./info-sign-Dq839c5t.js";import"./chevron-up-kfQOKWTT.js";import"./chevron-down-rruGkt0O.js";import"./useEventCallback-5QUQz0lM.js";import"./iconLoader-DmK45HYz.js";import"./Switch-BhSxfxIR.js";import"./CompositeRoot-D69RRO7Y.js";import"./TimePicker-wdH5uw3I.js";import"./CollapsiblePanel-CoovcH6q.js";import"./error-3jD31VOr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CfcXJ1po.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
