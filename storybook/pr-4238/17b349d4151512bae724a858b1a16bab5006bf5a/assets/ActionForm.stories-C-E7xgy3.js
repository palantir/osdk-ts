import{j as t,g as n}from"./iframe-3DYs7LO7.js";import{A as r}from"./action-form-BCRGoAjK.js";import"./preload-helper-BDRkpYDH.js";import"./DropdownField-BfdPwUa1.js";import"./debounce-Dx93VxJF.js";import"./useOsdkClient-CWVCE7e7.js";import"./index-Dksq0QWW.js";import"./Input-Bbtubjan.js";import"./useBaseUiId-CeE4102D.js";import"./useControlled-LDymMyjQ.js";import"./index-Bg_CqW7M.js";import"./index-DNpL3p8G.js";import"./PopoverPopup-BfUZB0MB.js";import"./InternalBackdrop-CPdSJMpf.js";import"./composite-BCO-9Moa.js";import"./index-CJTVlVv5.js";import"./getDisabledMountTransitionStyles-CfKy3gzP.js";import"./ToolbarRootContext-CEG1pZ6f.js";import"./tick-lA4emHrS.js";import"./svgIconContainer-E5ErPZjm.js";import"./small-cross-DdM0FPfO.js";import"./search-D5yGPAlT.js";import"./cross-BiEQYoFR.js";import"./useValueChanged-BQpMrMLa.js";import"./getPseudoElementBounds-RIT9EOF5.js";import"./CompositeItem-D-tb1HU0.js";import"./makeExternalStore-DOhtyVO-.js";import"./BaseForm-DxryuFqW.js";import"./ActionButton-Cbyc9XzM.js";import"./Button-Co786LuF.js";import"./SkeletonBar-BfJniFPr.js";import"./Tooltip-RwDgrf4M.js";import"./info-sign-2yFmdsy0.js";import"./chevron-up-BUZkPf7V.js";import"./chevron-down-DLvTPfQ9.js";import"./useEventCallback-DwsRMbJG.js";import"./iconLoader-CJbWFV1Z.js";import"./Switch-D2oHj4V8.js";import"./CompositeRoot-CQgdIGqY.js";import"./TimePicker-tTvzPkau.js";import"./CollapsiblePanel-DVs4UHLN.js";import"./error-B7nnIe8L.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dte6-FPa.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
