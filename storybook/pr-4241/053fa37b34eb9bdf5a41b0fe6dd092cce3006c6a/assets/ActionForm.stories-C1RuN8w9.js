import{j as t,g as n}from"./iframe-AXAl_lkK.js";import{A as r}from"./action-form-DE-m8emX.js";import"./preload-helper-CmOyIjss.js";import"./DropdownField-zE-ANVSd.js";import"./debounce-DoYq5Fyf.js";import"./useOsdkClient-UMx75Wu3.js";import"./index-WwDO5TYI.js";import"./Input-rah5Oh7j.js";import"./useBaseUiId-Z03BErLK.js";import"./useControlled-CwZsDCym.js";import"./index-waMJrP0w.js";import"./index-BfO3FL2b.js";import"./PopoverPopup-P-aEfD8I.js";import"./InternalBackdrop-hFYkRxh1.js";import"./composite-DhTcvoOi.js";import"./index--PmXZ_gO.js";import"./getDisabledMountTransitionStyles-Cg9BxDUe.js";import"./ToolbarRootContext-Bjje7bvz.js";import"./tick-BKo5ivYX.js";import"./svgIconContainer-C41-1JgD.js";import"./small-cross-Dbzif9Zo.js";import"./search-DSOJHa0m.js";import"./cross-CQtMlVpl.js";import"./useValueChanged-DttVAdvH.js";import"./getPseudoElementBounds-CBJSNv6r.js";import"./CompositeItem-3bSE7nfu.js";import"./makeExternalStore-xudMkMrV.js";import"./BaseForm-CnidVu-I.js";import"./ActionButton-BVOTHsC2.js";import"./Button-PnLOiyuX.js";import"./SkeletonBar-B1COelSe.js";import"./Tooltip-OQ9Lr3E8.js";import"./info-sign-Bix4wX4L.js";import"./chevron-up-5Z9e1fPn.js";import"./chevron-down-Bzpri4FT.js";import"./useEventCallback-Djw-n0Ln.js";import"./iconLoader-ZBEJKokF.js";import"./Switch-BK1JNwsv.js";import"./CompositeRoot-CLadqUzK.js";import"./TimePicker-B1iUEek1.js";import"./CollapsiblePanel-DVYu9T5b.js";import"./error-DelAmSaO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CZL_7UfS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
