import{j as t,g as n}from"./iframe-_5xzb7Z5.js";import{A as r}from"./action-form-B5f3WtMn.js";import"./preload-helper-9kDSgaR1.js";import"./DropdownField-DOx-xuVw.js";import"./debounce-Lcm6HHyi.js";import"./useOsdkClient-m9TwflB_.js";import"./index-BQLQ6q72.js";import"./Input-6FTkig4D.js";import"./useBaseUiId-CL6BvqYc.js";import"./useControlled-CaOEMTdE.js";import"./index-Bwe_rVKq.js";import"./index-a6ymnaCE.js";import"./PopoverPopup-CRcIjBTG.js";import"./InternalBackdrop-Cx_q57j2.js";import"./composite-RcxH71Ia.js";import"./index-nvhFONdR.js";import"./getDisabledMountTransitionStyles-B-Suvi-e.js";import"./ToolbarRootContext-BP4N1j53.js";import"./tick-CP0D6HqE.js";import"./svgIconContainer-zoYg_i-y.js";import"./small-cross-yCsD8QJM.js";import"./search-FeXiW-S5.js";import"./cross-DvzeLUuw.js";import"./useValueChanged-CqFQHurj.js";import"./getPseudoElementBounds-BupiSRrq.js";import"./CompositeItem-sQD2esUI.js";import"./makeExternalStore-GpKW6nTD.js";import"./BaseForm-BeGg_itT.js";import"./ActionButton-B002jOVk.js";import"./Button-BN8W0OGL.js";import"./SkeletonBar-BnEWIrOx.js";import"./Tooltip-CiEdThN9.js";import"./info-sign-D2W0g2n9.js";import"./chevron-up-BdNore9n.js";import"./chevron-down-Dc3YtOri.js";import"./useEventCallback-B_bCz7hc.js";import"./iconLoader-DezWg8Vp.js";import"./Switch-Cc2Ccbhm.js";import"./CompositeRoot-BbcxLSvn.js";import"./TimePicker-B3kx3HJv.js";import"./CollapsiblePanel-upvgLUI2.js";import"./error-Ba02y8oz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-uKo-L4d5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
