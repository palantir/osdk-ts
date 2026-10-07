import{j as t,g as n}from"./iframe-CvX9Pygi.js";import{A as r}from"./action-form-B8qd8ojD.js";import"./preload-helper-BB8WBYsV.js";import"./DropdownField-5zyXtgzR.js";import"./debounce-BfCJX0Ug.js";import"./useOsdkClient-BkDk9PCS.js";import"./index-BZTqeQuD.js";import"./Input-B4YDDaMi.js";import"./useBaseUiId-BW2Ufhyw.js";import"./useControlled-qJqObmnH.js";import"./index-C3D6pCjL.js";import"./index-EBKlSRA8.js";import"./PopoverPopup-CFZCCanB.js";import"./InternalBackdrop-KsToEN62.js";import"./composite-B1Ef3_vs.js";import"./index-BRzHUjU3.js";import"./getDisabledMountTransitionStyles-Oyv5nHgL.js";import"./ToolbarRootContext-BT80oNNA.js";import"./tick-Cu_c34Lw.js";import"./svgIconContainer-Cik9z__5.js";import"./small-cross-BfYBNzN7.js";import"./search-D9_8mB8g.js";import"./cross-a0pxU8ye.js";import"./useValueChanged-CN40AKPX.js";import"./getPseudoElementBounds-vWAS2NT6.js";import"./CompositeItem-LESBwLaD.js";import"./makeExternalStore-M2yjAWof.js";import"./BaseForm-CLh6hExP.js";import"./ActionButton-BG0rIOTw.js";import"./Button-D5Y-liWD.js";import"./SkeletonBar-Bnfzc4A1.js";import"./Tooltip-Bd17w1nK.js";import"./info-sign-DpMv7G0q.js";import"./chevron-up-DKdg2fIw.js";import"./chevron-down-o9sdxfCV.js";import"./useEventCallback-Cd4IUoh5.js";import"./iconLoader-Dg-DsDq9.js";import"./Switch-DiKRzgoX.js";import"./CompositeRoot-1OzStjU4.js";import"./TimePicker-Dam1Ps0C.js";import"./CollapsiblePanel-DiQ0neqE.js";import"./error-B2uabQYe.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DTO1kugV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
