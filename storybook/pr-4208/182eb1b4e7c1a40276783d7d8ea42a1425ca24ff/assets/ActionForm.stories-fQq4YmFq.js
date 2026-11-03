import{j as t,g as n}from"./iframe-Bp6ykM_Q.js";import{A as r}from"./action-form-DLF7HlSM.js";import"./preload-helper-hhg-UuLO.js";import"./DropdownField-CHmFTRiZ.js";import"./debounce-DeyxfuXX.js";import"./useOsdkClient-BXI0wDfp.js";import"./index-CkmqH5v_.js";import"./Input-8kWtUrGW.js";import"./useBaseUiId-B9JaL3lL.js";import"./useControlled-DfSSocWG.js";import"./index-D7B9vPdC.js";import"./index-DPOB5ZLL.js";import"./PopoverPopup-DgjT7gOt.js";import"./InternalBackdrop-CUeGJ88S.js";import"./composite-CELT5bVY.js";import"./index-6iOBoNLd.js";import"./getDisabledMountTransitionStyles-BlFqDN7h.js";import"./ToolbarRootContext-DvDyj9lB.js";import"./tick-CwYSeXXI.js";import"./svgIconContainer-Bbfw_TbJ.js";import"./small-cross-DKRvvaJW.js";import"./search-oCnrD3HI.js";import"./cross-C2XcpcwW.js";import"./useValueChanged-BRLBb_6E.js";import"./getPseudoElementBounds-DT01MB08.js";import"./CompositeItem-DEa3hl5L.js";import"./makeExternalStore-D6cQ2Vrj.js";import"./BaseForm-CfHVmm8j.js";import"./ActionButton-CG_FRqzp.js";import"./Button-CqF-mJTx.js";import"./SkeletonBar-CD8Roa0c.js";import"./Tooltip-CPA2WKzn.js";import"./info-sign-B6L31O0t.js";import"./chevron-up-DZIBKwFV.js";import"./chevron-down-DzC25JPe.js";import"./useEventCallback-ZDpPV_9c.js";import"./iconLoader-BlHpjs0D.js";import"./Switch-xSl-z_3p.js";import"./CompositeRoot-Dqk5RuUP.js";import"./TimePicker-B7TmYV3m.js";import"./CollapsiblePanel-DcU2Xohc.js";import"./error-pcj4mGvq.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BuzXmon2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
