import{j as t,g as n}from"./iframe-ME9jEV4B.js";import{A as r}from"./action-form-ri4FMNnb.js";import"./preload-helper-CAlbxuMw.js";import"./DropdownField-CaUmxcLV.js";import"./debounce-BRk1tey9.js";import"./useOsdkClient-Dx8qUr5J.js";import"./index-BwQPjFr5.js";import"./Input-CE0w_ENc.js";import"./useBaseUiId-BRBkTzbz.js";import"./useControlled-BiaTOKvQ.js";import"./index-BfDcgSaT.js";import"./index-By_4WpJv.js";import"./PopoverPopup-DfqLPctH.js";import"./InternalBackdrop-w_eWpjif.js";import"./composite-DGm-qDkX.js";import"./index-D8F1bo2b.js";import"./getDisabledMountTransitionStyles-CzotrHFI.js";import"./ToolbarRootContext-DM1MG67c.js";import"./tick-BEcsmCA5.js";import"./svgIconContainer-C0iDRr5R.js";import"./small-cross-D6DBal5p.js";import"./search-Dg6pBwm_.js";import"./cross-BDVa-Vs8.js";import"./useValueChanged-hB8TkC-G.js";import"./getPseudoElementBounds-DGRmUR-d.js";import"./CompositeItem-CxooWEv2.js";import"./makeExternalStore-DFLhgaAs.js";import"./BaseForm-CioKFF6j.js";import"./ActionButton-CEmm2wPj.js";import"./Button-Da4t_kgJ.js";import"./SkeletonBar-M59GNBZ4.js";import"./Tooltip-BEcZHd4g.js";import"./info-sign-aDlmoVMS.js";import"./chevron-up-4p7biAv6.js";import"./chevron-down-6_LddkfR.js";import"./useEventCallback-DhdZk0w1.js";import"./iconLoader-CDacaiFO.js";import"./CompositeRoot-Brjb4gET.js";import"./Switch-B-jqELNS.js";import"./TimePicker-CJehs7lo.js";import"./CollapsiblePanel-DquoQgDU.js";import"./error-Y3Mhwjiz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DcyxtP_A.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
