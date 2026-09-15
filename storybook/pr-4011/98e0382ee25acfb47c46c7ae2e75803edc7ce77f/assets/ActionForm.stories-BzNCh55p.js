import{j as t,g as n}from"./iframe-W9lZ6KB9.js";import{A as r}from"./action-form-kR_4SF_4.js";import"./preload-helper-FRDH_-i6.js";import"./DropdownField-f_oplqdE.js";import"./debounce-AKwKS-26.js";import"./useOsdkClient-CfTr_FGX.js";import"./index-zvENON5K.js";import"./Input-BE9q1hzT.js";import"./useBaseUiId-CM8bj9T3.js";import"./useControlled-BibYMAkB.js";import"./index-Do1aQnY4.js";import"./index-CiBIb1Hm.js";import"./PopoverPopup-BW5x1WJ1.js";import"./InternalBackdrop-CxePxxDd.js";import"./composite-Dds-kjO9.js";import"./index-ChcUrjTS.js";import"./getDisabledMountTransitionStyles-DN13DrMz.js";import"./ToolbarRootContext-DwUbHsl_.js";import"./tick-CTwnnC4O.js";import"./svgIconContainer-GBMBocam.js";import"./small-cross-C2YcwmE1.js";import"./search-DtUsUWlr.js";import"./cross-BA2Nf7ni.js";import"./useValueChanged-CclPVhvR.js";import"./getPseudoElementBounds-DgIVsabS.js";import"./CompositeItem-9LwIi5rO.js";import"./makeExternalStore-Bh-hA2FN.js";import"./BaseForm-aFZA010O.js";import"./ActionButton-D1zQD0P_.js";import"./Button-Cgco6Fdx.js";import"./SkeletonBar-D_VpdDsY.js";import"./Tooltip-B0ah55oe.js";import"./info-sign-B_9hDdtO.js";import"./chevron-up-DYacBVi1.js";import"./chevron-down-CPOSM9ve.js";import"./useEventCallback-D0v7edrX.js";import"./iconLoader-BSIQhj_f.js";import"./CompositeRoot-ChTmxUvs.js";import"./Switch-BeOF4QwF.js";import"./TimePicker-EpFXt2mP.js";import"./CollapsiblePanel-Cz6nNrqA.js";import"./error-DJOARvPR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BEDTYsPk.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
