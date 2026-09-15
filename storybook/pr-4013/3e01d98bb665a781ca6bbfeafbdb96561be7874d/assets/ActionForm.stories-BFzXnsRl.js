import{j as t,g as n}from"./iframe-BlKCTUed.js";import{A as r}from"./action-form-Dchbc9Ot.js";import"./preload-helper-BUGYiWCP.js";import"./DropdownField-B9RkrUKl.js";import"./debounce-BdvSF5Dr.js";import"./useOsdkClient-imyPShfg.js";import"./index-CI0skb4B.js";import"./Input-B33yNZZn.js";import"./useBaseUiId-DkP_imTM.js";import"./useControlled-7Fk4n3DI.js";import"./index-DxXrW0wp.js";import"./index-DDp_OGDu.js";import"./PopoverPopup-CTOgqJnQ.js";import"./InternalBackdrop-h-3naHFk.js";import"./composite-DiiB6odo.js";import"./index-Devgl1Vj.js";import"./getDisabledMountTransitionStyles-Bk1M6moe.js";import"./ToolbarRootContext-BHdJXOoh.js";import"./tick-CJ-rmnk9.js";import"./svgIconContainer-1UB6FZGc.js";import"./small-cross-Ds6jcFq4.js";import"./search-CVcVTR0T.js";import"./cross-CqaO5DBE.js";import"./useValueChanged-ChY0oQrW.js";import"./getPseudoElementBounds-CEIumeIp.js";import"./CompositeItem-CV5UwX2b.js";import"./makeExternalStore-D5c3nlfz.js";import"./BaseForm-BYukt943.js";import"./ActionButton-BV0JGXeO.js";import"./Button-3Efar3GG.js";import"./SkeletonBar-A5cBM3D2.js";import"./Tooltip-CiH_3FgC.js";import"./info-sign-CeMxT5Gg.js";import"./chevron-up-CgpGYa5r.js";import"./chevron-down-FWs3P9jd.js";import"./useEventCallback-meJSs_jZ.js";import"./iconLoader-i1dZ-RSt.js";import"./CompositeRoot-CHoCXPs8.js";import"./Switch-BrVYnQBP.js";import"./TimePicker-CG0A5_DT.js";import"./CollapsiblePanel-DhQw-8XY.js";import"./error-D-1ezCIE.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ClE-4wO4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
