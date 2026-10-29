import{j as t,g as n}from"./iframe-DvwH42FA.js";import{A as r}from"./action-form-mzmVHTWw.js";import"./preload-helper-DEybsrDJ.js";import"./DropdownField-B2W4HxFF.js";import"./debounce-Ca-_00LJ.js";import"./useOsdkClient-D8ctbvIl.js";import"./index-J26QqFGl.js";import"./Input-CtJ7UKD6.js";import"./useBaseUiId-tOAOUQiJ.js";import"./useControlled-BhMAv1ps.js";import"./index-BdNMK7Gf.js";import"./index-B7x2aIOS.js";import"./PopoverPopup-Dz8cYHRU.js";import"./InternalBackdrop-C9rZ6hh4.js";import"./composite-D2TyNObR.js";import"./index-BMcLikr0.js";import"./getDisabledMountTransitionStyles-QU60JeOn.js";import"./ToolbarRootContext-BV3Ciak4.js";import"./tick-BjZRSTbc.js";import"./svgIconContainer-BNUkj3Pd.js";import"./small-cross-DfjEbz9b.js";import"./search-Cl4hDVdp.js";import"./cross-BN0lcpY0.js";import"./useValueChanged-BDGiJFuk.js";import"./getPseudoElementBounds-Dr6gOvy1.js";import"./CompositeItem-DeFaZgPZ.js";import"./makeExternalStore-CKGyOq0N.js";import"./BaseForm-BRp8_lih.js";import"./ActionButton-BHPoqNul.js";import"./Button-C8MB2pGs.js";import"./SkeletonBar-BmJJEjRs.js";import"./Tooltip-D2_zsHn4.js";import"./info-sign-BGPpcUXw.js";import"./chevron-up-DW0uuBQK.js";import"./chevron-down-DclS5GqO.js";import"./useEventCallback-jKMhLcqs.js";import"./iconLoader-D-pD4xvM.js";import"./Switch-FpR1qL5L.js";import"./CompositeRoot-CC4Zn8iN.js";import"./TimePicker-BWPYpX5K.js";import"./CollapsiblePanel-gRNf6Seh.js";import"./error-yeSVRC55.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B8wi7VI0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
