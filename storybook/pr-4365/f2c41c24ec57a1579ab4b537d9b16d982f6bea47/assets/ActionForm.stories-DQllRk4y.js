import{j as t,g as n}from"./iframe-B1cjW9lN.js";import{A as r}from"./action-form-CbLEXmTD.js";import"./preload-helper-esge5jOw.js";import"./DropdownField-Bhsc50nt.js";import"./debounce-BsGa84tP.js";import"./useOsdkClient-DPZRapDv.js";import"./index-DBKcAKBa.js";import"./Input-DbrQZdXa.js";import"./useBaseUiId-CtX_9P1W.js";import"./useControlled-DdMiAZ8X.js";import"./index-CuHejiQW.js";import"./index-CalZYv_8.js";import"./isObject-ekK2jEIM.js";import"./InternalBackdrop-wKJgBdeU.js";import"./composite-rAM9AtlZ.js";import"./index-Bql2IapG.js";import"./getDisabledMountTransitionStyles-B5gHyAnx.js";import"./ToolbarRootContext-CQYaUzuu.js";import"./tick-7_Cax-oj.js";import"./svgIconContainer-z9g6oSzF.js";import"./small-cross-BVJ_zxjg.js";import"./search-050tV6oC.js";import"./cross-B-sNKi3J.js";import"./useValueChanged-CEYyAvOZ.js";import"./getPseudoElementBounds-Cs7nJpkY.js";import"./CompositeItem-CR9WkMFf.js";import"./makeExternalStore-CvmwDfYu.js";import"./BaseForm-h72JJKWt.js";import"./ActionButton-3Dynih0B.js";import"./Button-Dy6NAp_j.js";import"./SkeletonBar-BLVnUxZg.js";import"./Tooltip-DzMrezpL.js";import"./info-sign-LuxzXQbx.js";import"./chevron-up-D8Q_lFV8.js";import"./chevron-down-Qs9iMpX5.js";import"./useEventCallback-92aUWZ3N.js";import"./iconLoader-GW3t00Qd.js";import"./Switch-CTCWykhv.js";import"./CompositeRoot-C1BaCtLB.js";import"./TimePicker-B4KaJFeO.js";import"./CollapsiblePanel-56xbF4C6.js";import"./error-4QB3sX_8.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-NF_KYzrC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
