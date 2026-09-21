import{j as t,g as n}from"./iframe-8LpzfSDn.js";import{A as r}from"./action-form-TKmGkvoK.js";import"./preload-helper-DtRM003F.js";import"./DropdownField-64H1OXM1.js";import"./debounce-IDNd93md.js";import"./useOsdkClient-CNaHcQUk.js";import"./index-BUf0-n6f.js";import"./Input-Dv-by0TU.js";import"./useBaseUiId-4wN8rdaw.js";import"./useControlled-CoRLjGHB.js";import"./index-RVyoUJfW.js";import"./index-BjrAvEhr.js";import"./PopoverPopup-2AhTF_FP.js";import"./InternalBackdrop-S-BNADSf.js";import"./composite-2A5pk4b0.js";import"./index-CCORHeEv.js";import"./getDisabledMountTransitionStyles-Mf_ToGG9.js";import"./ToolbarRootContext-40dyuA6p.js";import"./tick-C-vIWgEC.js";import"./svgIconContainer-BKZgIvjb.js";import"./small-cross-Cd-SXCdz.js";import"./search-zhneh-KF.js";import"./cross-CCb0fI9c.js";import"./useValueChanged-BozjWAfd.js";import"./getPseudoElementBounds-DU8qDaFN.js";import"./CompositeItem-CnGxkne-.js";import"./makeExternalStore-DEN8pBF9.js";import"./BaseForm-BtS9DQ_g.js";import"./ActionButton-Bxy-NTOO.js";import"./Button-BApq-zP_.js";import"./SkeletonBar-C1CeiyuW.js";import"./Tooltip-hbbCevp2.js";import"./info-sign-DDTQauTr.js";import"./chevron-up-ViIGz9oL.js";import"./chevron-down-DsREyE6f.js";import"./useEventCallback-D7bgDq2J.js";import"./iconLoader-jFJXKtc-.js";import"./Switch-Dp7PnJEi.js";import"./CompositeRoot-BrfRlm5J.js";import"./TimePicker-B5QD09ve.js";import"./CollapsiblePanel-DTSInNYa.js";import"./error-B-6NO-zU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-eiA9ax16.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
