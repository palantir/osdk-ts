import{j as t,g as n}from"./iframe-BTFFJnjn.js";import{A as r}from"./action-form-BF7PCLCT.js";import"./preload-helper-CSZsPkfX.js";import"./DropdownField-CINIO7u-.js";import"./debounce-COoRFcah.js";import"./useOsdkClient-6aibAJDm.js";import"./index-C_Z722LV.js";import"./Input-D5tlOD_j.js";import"./useBaseUiId-DHyYX2RX.js";import"./useControlled-DbgXwRAA.js";import"./index-B4NnbGlh.js";import"./index-CrQcuE9G.js";import"./PopoverPopup-Cc0ymlLC.js";import"./InternalBackdrop-BHLBjXqJ.js";import"./composite-DBRlpOlr.js";import"./index-0gaZ0R5v.js";import"./getDisabledMountTransitionStyles-DPkci45d.js";import"./ToolbarRootContext-BsMzvLUB.js";import"./tick-BwSmQKfq.js";import"./svgIconContainer-gp9RWo3r.js";import"./small-cross-DcEGFbkq.js";import"./search-DOiBQX63.js";import"./cross-LRAZ9qps.js";import"./useValueChanged-BrxBLzAH.js";import"./getPseudoElementBounds-C_NyFnLm.js";import"./CompositeItem-0772M-C_.js";import"./makeExternalStore-Dk37SoTO.js";import"./BaseForm-BY2VIFyX.js";import"./ActionButton-BOqgyglZ.js";import"./Button-XND01Fh-.js";import"./SkeletonBar-CyQFjxNz.js";import"./Tooltip-D6bixjsm.js";import"./info-sign-CClnZ9sW.js";import"./chevron-up-Dn_PwlAj.js";import"./chevron-down-C34taKQb.js";import"./useEventCallback-D2JKsoPj.js";import"./iconLoader-CJEvveOS.js";import"./Switch-BniKq3Dc.js";import"./CompositeRoot-BiHmR4nq.js";import"./TimePicker-9ZEAp5zx.js";import"./CollapsiblePanel--hZtn4S3.js";import"./error-D1AJOnUs.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B7f6_6X-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
