import{j as t,g as n}from"./iframe-DZ1IfAc9.js";import{A as r}from"./action-form-CTvqTMNw.js";import"./preload-helper-FioNmaYc.js";import"./DropdownField-Co-1Lqep.js";import"./debounce--VQS0Dqu.js";import"./useOsdkClient-G1l4twLo.js";import"./index-DlgarWWe.js";import"./Input-BVSO0T6H.js";import"./useBaseUiId-D5mFLOde.js";import"./useControlled-CK492yS4.js";import"./index-BqCJp_mQ.js";import"./index-Dm0H4d0k.js";import"./isObject-BzWFEdJL.js";import"./InternalBackdrop-71qlqQsM.js";import"./composite-naZtYWyA.js";import"./index-D8BPITj7.js";import"./getDisabledMountTransitionStyles-CbTtYX3G.js";import"./ToolbarRootContext-ATEsw9kW.js";import"./tick-DJ6zublk.js";import"./svgIconContainer-BMPgpSIt.js";import"./small-cross-k0iuPUUj.js";import"./search-DX_EHnIw.js";import"./cross-9jSrVJX7.js";import"./useValueChanged-DOaXJk-l.js";import"./getPseudoElementBounds-oqBrWOWr.js";import"./CompositeItem-BRIYvu0B.js";import"./makeExternalStore-DT9sfKcd.js";import"./BaseForm-BzdUSxHm.js";import"./ActionButton-C59C2SC2.js";import"./Button-CEdONvfh.js";import"./SkeletonBar-Poc6NUlG.js";import"./Tooltip-BVGKe7Gt.js";import"./info-sign-CI4QeKjI.js";import"./chevron-up-BTu3XJwr.js";import"./chevron-down-ClTS_TF6.js";import"./useEventCallback-CivKyEqa.js";import"./iconLoader-DvwrOjMb.js";import"./Switch-CVBnUpaq.js";import"./CompositeRoot-CxJC_zTS.js";import"./TimePicker-BqoPCWEW.js";import"./CollapsiblePanel-DFS5HvYG.js";import"./error-CK66UUTY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DkI7OiMa.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
