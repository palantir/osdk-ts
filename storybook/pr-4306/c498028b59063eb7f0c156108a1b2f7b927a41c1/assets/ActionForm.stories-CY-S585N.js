import{j as t,g as n}from"./iframe-Bjmz4Pw6.js";import{A as r}from"./action-form-Br7L_l65.js";import"./preload-helper-ChdqJ_Fk.js";import"./DropdownField-E6FKc9RM.js";import"./debounce-BS14Ht-K.js";import"./useOsdkClient-DWH25UnA.js";import"./index-CteV8V5-.js";import"./Input-CYsfOYNb.js";import"./useBaseUiId-Dab5gkr1.js";import"./useControlled-UgrzeJ-P.js";import"./index-B0jhHXrB.js";import"./index-xuV1OxFF.js";import"./PopoverPopup-B8vKH9Gz.js";import"./InternalBackdrop-wmuwnNCk.js";import"./composite-D5kvXpM3.js";import"./index-DXs3na67.js";import"./getDisabledMountTransitionStyles-BclIXzND.js";import"./ToolbarRootContext-D0yTrMZy.js";import"./tick-DI_p6XGO.js";import"./svgIconContainer-waXVP79l.js";import"./small-cross-CwgSRf6S.js";import"./search-BFNLN2pg.js";import"./cross-DLiU4vOO.js";import"./useValueChanged-CtNi9ozz.js";import"./getPseudoElementBounds-CVsUqdMo.js";import"./CompositeItem-XruUBT06.js";import"./makeExternalStore-Czv1SlrP.js";import"./BaseForm-zZF1dlk3.js";import"./ActionButton-BXkFs4JK.js";import"./Button-gMxn8bZ8.js";import"./SkeletonBar-RK8wJKnc.js";import"./Tooltip-B6HLdM-u.js";import"./info-sign-B3ahRT9z.js";import"./chevron-up-CqPzjhrI.js";import"./chevron-down-DYnrRDqf.js";import"./useEventCallback-CEkSFShG.js";import"./iconLoader-CMYR7km_.js";import"./Switch-D4_eBnWU.js";import"./CompositeRoot-Cv00B2tO.js";import"./TimePicker-D6ggQIPv.js";import"./CollapsiblePanel-7Vg1XIbp.js";import"./error-DXq7Sg4A.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DHpFVYZj.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
