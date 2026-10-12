import{j as t,g as n}from"./iframe-3uOeStlO.js";import{A as r}from"./action-form-D-gzmIoI.js";import"./preload-helper-B_uYGV8k.js";import"./DropdownField-DiWe0nIp.js";import"./debounce-D-3tGswa.js";import"./useOsdkClient-BR5uz5xP.js";import"./index-B_qY6xMA.js";import"./Input-CYQFeP5H.js";import"./useBaseUiId-DFf4k_ND.js";import"./useControlled-Iq2zkhRy.js";import"./index-CkR9lTv2.js";import"./index-CV8wC36m.js";import"./PopoverPopup-B8-ohf43.js";import"./InternalBackdrop-DeK6mcEC.js";import"./composite-DbFqwck4.js";import"./index-K1gQz8hL.js";import"./getDisabledMountTransitionStyles-BEO9K8qN.js";import"./ToolbarRootContext-Dbkjbr9t.js";import"./tick-Cvl3VbM3.js";import"./svgIconContainer-BXcgfdNM.js";import"./small-cross-DBqN_GPD.js";import"./search-DB4T2psl.js";import"./cross-waxScdAW.js";import"./useValueChanged-BPuYePe0.js";import"./getPseudoElementBounds-hiaVLHB1.js";import"./CompositeItem-B84OCPkr.js";import"./makeExternalStore-B5qagnOI.js";import"./BaseForm-CM72q69r.js";import"./ActionButton-B-_2-j29.js";import"./Button-B1JQinsR.js";import"./SkeletonBar-Cx2xW1pn.js";import"./Tooltip-CiOtNwo6.js";import"./info-sign-CitfiD1W.js";import"./chevron-up-CNa9vMzR.js";import"./chevron-down-Bzj-jMLe.js";import"./useEventCallback-B_uqfwHC.js";import"./iconLoader-oTwkd8o3.js";import"./Switch-CnrTygf8.js";import"./CompositeRoot-C9-5DIug.js";import"./TimePicker-jwy4TfCR.js";import"./CollapsiblePanel-o2O4Ppa4.js";import"./error-BXiGRUyR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DtWegvZ6.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
