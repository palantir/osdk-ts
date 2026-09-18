import{j as t,g as n}from"./iframe-DJaET-4W.js";import{A as r}from"./action-form-CehYwCSK.js";import"./preload-helper-BLsfXLTb.js";import"./DropdownField-Bf4KN3tx.js";import"./debounce-D8PkG1oB.js";import"./useOsdkClient-CVweCxJ6.js";import"./index-CXAjf3Lj.js";import"./Input-Ckb4ze0a.js";import"./useBaseUiId-C64d8rt1.js";import"./useControlled-CUKxlT-G.js";import"./index-DBzGUm2T.js";import"./index-BtLQLn9f.js";import"./PopoverPopup-BCoOy9bx.js";import"./InternalBackdrop-BLBvj5zY.js";import"./composite-DJhk57sk.js";import"./index-w7P2l7vQ.js";import"./getDisabledMountTransitionStyles-DhGiANWb.js";import"./ToolbarRootContext-geDYh26O.js";import"./tick-DE6CHk5m.js";import"./svgIconContainer-ZOxHgtx1.js";import"./small-cross-BsEXntmc.js";import"./search-DhdNxuaM.js";import"./cross-DREoRCVi.js";import"./useValueChanged-Bp7ZN932.js";import"./getPseudoElementBounds-BuefBtP4.js";import"./CompositeItem-DfP3tBe3.js";import"./makeExternalStore-Bp_quvMW.js";import"./BaseForm-AZ1N7wKA.js";import"./ActionButton-BmGbsUdR.js";import"./Button-BMrMSDOy.js";import"./SkeletonBar-Bcjdnsfw.js";import"./Tooltip-CSQ5aHI4.js";import"./info-sign-9Xw5gNG9.js";import"./chevron-up-3GBfYp9-.js";import"./chevron-down-LDtg690T.js";import"./useEventCallback-CXs_hqhL.js";import"./iconLoader-CnuiBLCu.js";import"./Switch-Db-HUaqg.js";import"./CompositeRoot-CQnKrQdm.js";import"./TimePicker-BzV1EE5D.js";import"./CollapsiblePanel--Hfy1MmM.js";import"./error-BfaKs4G2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DfivTNsf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
