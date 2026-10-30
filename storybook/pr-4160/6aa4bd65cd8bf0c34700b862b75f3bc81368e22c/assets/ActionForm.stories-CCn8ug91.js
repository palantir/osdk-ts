import{j as t,g as n}from"./iframe-B5CnmteN.js";import{A as r}from"./action-form-DE_4-1oH.js";import"./preload-helper-BvIIyaRb.js";import"./DropdownField-BGVoK-k4.js";import"./debounce-B-2K-o_A.js";import"./useOsdkClient-qcHJ86eJ.js";import"./index-8frbvTc0.js";import"./Input-BFwAdaEg.js";import"./useBaseUiId-CpmUOtyx.js";import"./useControlled-BIkM9vG3.js";import"./index-DJMwC2E0.js";import"./index-COZUZoux.js";import"./PopoverPopup-BFzT61y-.js";import"./InternalBackdrop-6TwkoN7E.js";import"./composite-DzRtfXwG.js";import"./index-CiKFFLFD.js";import"./getDisabledMountTransitionStyles-BgPPzZOr.js";import"./ToolbarRootContext-BCLdmU7d.js";import"./tick-DQyZDVkc.js";import"./svgIconContainer-Q-T6gYyn.js";import"./small-cross-CxROeBHB.js";import"./search-BS3g1UNT.js";import"./cross-pkR4RJ0Q.js";import"./useValueChanged-DAkLpCOr.js";import"./getPseudoElementBounds-C6KAFL2T.js";import"./CompositeItem-GDYb2RvJ.js";import"./makeExternalStore-DQ9Dnm6S.js";import"./BaseForm-CBM3IeWx.js";import"./ActionButton-DGDbhDGz.js";import"./Button-k7Ft62HK.js";import"./SkeletonBar-CKpapgR8.js";import"./Tooltip-CT-rD5V_.js";import"./info-sign-DH7QcCzE.js";import"./chevron-up-DjQU85Ir.js";import"./chevron-down-Yu587uLP.js";import"./useEventCallback-H_-RfLRz.js";import"./iconLoader-BJIKptjH.js";import"./Switch-CJOPdvv7.js";import"./CompositeRoot-BQsQ6gQs.js";import"./TimePicker-wWYfU8oV.js";import"./CollapsiblePanel-Cb_s5Izf.js";import"./error-DnL9Bib9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dx9osySV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
