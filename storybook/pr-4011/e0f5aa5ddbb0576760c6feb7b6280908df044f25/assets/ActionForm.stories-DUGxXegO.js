import{j as t,g as n}from"./iframe-CfT8oSzl.js";import{A as r}from"./action-form-CGlH0leS.js";import"./preload-helper-Ck2G3lhL.js";import"./DropdownField-cTMj70TI.js";import"./debounce-eSR8WnsM.js";import"./useOsdkClient-CeYb4mIi.js";import"./index-BpawNvzq.js";import"./Input-frvZccMj.js";import"./useBaseUiId-D4xhi0G6.js";import"./useControlled-C4oVQ_PT.js";import"./index-DvoLa0A4.js";import"./index-UxUlnqFt.js";import"./PopoverPopup-D5R3Wt8N.js";import"./InternalBackdrop-DbdxTKbh.js";import"./composite-CCZTgGc-.js";import"./index-ClAIatsn.js";import"./getDisabledMountTransitionStyles-DSlo8AiB.js";import"./ToolbarRootContext-CiSOROzl.js";import"./tick-3Sqmfbum.js";import"./svgIconContainer-ya4CV7y2.js";import"./small-cross-B1GJDPeO.js";import"./search-CeTlWaJs.js";import"./cross-BDq3cq5E.js";import"./useValueChanged-D06smhY0.js";import"./getPseudoElementBounds-B5D0r4zv.js";import"./CompositeItem-B7Z5vov3.js";import"./makeExternalStore-Bq85hlSU.js";import"./BaseForm-B4Q8ahjh.js";import"./ActionButton-Ce-MUeV5.js";import"./Button-RnGlAnHy.js";import"./SkeletonBar-CQtM8ssv.js";import"./Tooltip-DolSoQfn.js";import"./info-sign-DM-X6HCl.js";import"./chevron-up-CZ51cXHG.js";import"./chevron-down-hfFWURIG.js";import"./useEventCallback-CSvW4qDl.js";import"./iconLoader-CxZygRIo.js";import"./CompositeRoot-DywOp6_S.js";import"./Switch-BQV5QUQ0.js";import"./TimePicker-JxFyC4jZ.js";import"./CollapsiblePanel-CHkL4bVQ.js";import"./error-CTOxDA6S.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BzsRVIUg.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
