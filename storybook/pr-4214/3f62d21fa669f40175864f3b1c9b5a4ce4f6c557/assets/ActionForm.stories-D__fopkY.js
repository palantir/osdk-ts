import{j as t,g as n}from"./iframe-CofS9Mjv.js";import{A as r}from"./action-form-Dsv_llTb.js";import"./preload-helper-DCg3GuVE.js";import"./DropdownField-Bix-FJpy.js";import"./debounce-DZR19dzG.js";import"./useOsdkClient-CEI0BVbt.js";import"./index-Dba1-hqN.js";import"./Input-Bk5_B8IH.js";import"./useBaseUiId-BkkGBRPa.js";import"./useControlled-Dhms1Lp4.js";import"./index-FNQL6Pr9.js";import"./index-KxxBCqJY.js";import"./PopoverPopup-CuVPSugr.js";import"./InternalBackdrop-qRjGdl8e.js";import"./composite-BDNG4DUT.js";import"./index-BHS0czud.js";import"./getDisabledMountTransitionStyles-4uwyOcbE.js";import"./ToolbarRootContext-B8GhaGLP.js";import"./tick-B5fekc3f.js";import"./svgIconContainer-rLHaF5xG.js";import"./small-cross-DKt2prc5.js";import"./search-CbFqNZT1.js";import"./cross-5sYjwK4P.js";import"./useValueChanged-BdhihQIl.js";import"./getPseudoElementBounds-YLTZgyuZ.js";import"./CompositeItem-GQbg_S7m.js";import"./makeExternalStore-BJ0PmYe7.js";import"./BaseForm-gBHpiUGr.js";import"./ActionButton-DNNEXv6M.js";import"./Button-3zEBIt6E.js";import"./SkeletonBar-Aa10YgO8.js";import"./Tooltip-Ceoi_Zxm.js";import"./info-sign-DMPiXJ5G.js";import"./chevron-up-CA9F1BNS.js";import"./chevron-down-CACMHp08.js";import"./useEventCallback-lNR3-f9S.js";import"./iconLoader-XNh8dSaQ.js";import"./Switch-fFfTc3_f.js";import"./CompositeRoot-BDFEKOSr.js";import"./TimePicker-BaIYivqY.js";import"./CollapsiblePanel-P6K_7Hb6.js";import"./error-DOmo2qFa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-PwzVtj_c.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
