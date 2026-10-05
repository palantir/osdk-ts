import{j as t,g as n}from"./iframe-axSYt9jb.js";import{A as r}from"./action-form-Do434d9a.js";import"./preload-helper-5clZkVbz.js";import"./DropdownField-CLQ_cIrg.js";import"./debounce-eexPevCv.js";import"./useOsdkClient-DIUBL3TL.js";import"./index-CLjZOMbp.js";import"./Input-nobTN-9C.js";import"./useBaseUiId-CfampI5m.js";import"./useControlled-BSRNruV1.js";import"./index-DpGvCUsF.js";import"./index-6T9wCtxW.js";import"./PopoverPopup-Smoy6HlE.js";import"./InternalBackdrop-73Bsxdw-.js";import"./composite-G1l_cMk8.js";import"./index-DNBA_y2P.js";import"./getDisabledMountTransitionStyles-5OnvXmo8.js";import"./ToolbarRootContext-HNR9-LxP.js";import"./tick-BUmA3zHD.js";import"./svgIconContainer-CvOpWe1G.js";import"./small-cross-4Md-SBDX.js";import"./search-B_GR0Y0K.js";import"./cross-BV4PjvJc.js";import"./useValueChanged-BLlZH5mo.js";import"./getPseudoElementBounds-Bw-YTuG9.js";import"./CompositeItem-E4JqZHrS.js";import"./makeExternalStore-7VGeqAOs.js";import"./BaseForm-B53Ssh9l.js";import"./ActionButton-BPhZ5AgD.js";import"./Button-DBXdKKko.js";import"./SkeletonBar-ClNzeAGH.js";import"./Tooltip-CqT7nzyV.js";import"./info-sign-CbZbtKT6.js";import"./chevron-up-BwJfLwK2.js";import"./chevron-down-BijfbkW5.js";import"./useEventCallback-BY8e2U_8.js";import"./iconLoader-CzuIYyZJ.js";import"./Switch-pdfLC4FG.js";import"./CompositeRoot-dqWaQ6Hj.js";import"./TimePicker-DnRZIA64.js";import"./CollapsiblePanel-Dmb31jh2.js";import"./error-dOvZleMr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DSBcYRdu.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
