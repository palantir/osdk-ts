import{j as t,g as n}from"./iframe-Ch3dDQ73.js";import{A as r}from"./action-form-XITj0vje.js";import"./preload-helper-Dt5E_MQT.js";import"./DropdownField-BwlReH7s.js";import"./debounce-Bj0CUW6Z.js";import"./useOsdkClient-BEOsOU0g.js";import"./index-BPSQkvlq.js";import"./Input-CyFa-sRf.js";import"./useBaseUiId-BuMyPGEd.js";import"./useControlled-Uo30Ht4a.js";import"./index-CJDfC3kZ.js";import"./index-BcAKrfT8.js";import"./PopoverPopup-CDUt_0V_.js";import"./InternalBackdrop-DnrpHvoH.js";import"./composite-79LVsM0Q.js";import"./index-DvNjnhsf.js";import"./getDisabledMountTransitionStyles-BnreKSZO.js";import"./ToolbarRootContext-BL4WdLNX.js";import"./tick-CdmQNoN2.js";import"./svgIconContainer-DsDanRUJ.js";import"./small-cross-COqMeQyn.js";import"./search-Dq24XcYb.js";import"./cross-BwedcRbE.js";import"./useValueChanged-D8drAKML.js";import"./getPseudoElementBounds-aMC_66Nd.js";import"./CompositeItem-yRGsM-I0.js";import"./makeExternalStore-9OgJXISf.js";import"./BaseForm-DWLq5N21.js";import"./ActionButton-Bq5mCozF.js";import"./Button-BdllNL1h.js";import"./SkeletonBar-DU3E93Ca.js";import"./Tooltip-BdV_g6Rg.js";import"./info-sign-DUOiZ9YM.js";import"./chevron-up-dV5G1tRb.js";import"./chevron-down-DtSbmNQ9.js";import"./useEventCallback-DzSeWiWA.js";import"./iconLoader-BkpUI77B.js";import"./CompositeRoot-8Pra9FHT.js";import"./Switch-vXz_eiKs.js";import"./TimePicker--WhEWqt0.js";import"./CollapsiblePanel-C-zvQjZV.js";import"./error-C6gNYlkP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D3LSYI9p.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
