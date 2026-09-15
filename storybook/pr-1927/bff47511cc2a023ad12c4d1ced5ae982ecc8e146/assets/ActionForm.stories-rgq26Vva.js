import{j as t,g as n}from"./iframe-B441qIYR.js";import{A as r}from"./action-form-iYFZZydA.js";import"./preload-helper-BQxy24fI.js";import"./DropdownField-DPKco6cz.js";import"./debounce-D_X6R-CZ.js";import"./useOsdkClient-BsFxQUuE.js";import"./index-CqjhHzve.js";import"./Input-QLiOOLjz.js";import"./useBaseUiId-CAzOpzCv.js";import"./useControlled-CWP741nv.js";import"./index-TqQ_ZGFy.js";import"./index-B-mP9lvr.js";import"./PopoverPopup-D6B75mLS.js";import"./InternalBackdrop-DmeCQFx1.js";import"./composite-CzbYCu9o.js";import"./index-CGHV9asT.js";import"./getDisabledMountTransitionStyles-BjyDpkoM.js";import"./ToolbarRootContext-CYvhcckZ.js";import"./tick-ClXuYj6h.js";import"./svgIconContainer-BSmiGxdz.js";import"./small-cross-DlCMMKuZ.js";import"./search-DUz8ofCX.js";import"./cross-BNrt0aH1.js";import"./useValueChanged-CifPK3o3.js";import"./getPseudoElementBounds-C-3tqagg.js";import"./CompositeItem-C8CTVhA-.js";import"./makeExternalStore-D5BQihPb.js";import"./BaseForm-K-ZIi92g.js";import"./ActionButton-C-ago1dj.js";import"./Button-DzRMTkim.js";import"./SkeletonBar-Cf_A4GXZ.js";import"./Tooltip-DAmduYRB.js";import"./info-sign-BkQoYvfx.js";import"./chevron-up-CPD49t63.js";import"./chevron-down-DNBdHWh5.js";import"./useEventCallback-Dkln44I2.js";import"./iconLoader-Bbxh6Acq.js";import"./CompositeRoot-CD6Rf4h6.js";import"./Switch-B7wOVml2.js";import"./TimePicker-B6iVuYMT.js";import"./CollapsiblePanel-BFH9uHwC.js";import"./error-bNXgEpmP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BIArtGAT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
