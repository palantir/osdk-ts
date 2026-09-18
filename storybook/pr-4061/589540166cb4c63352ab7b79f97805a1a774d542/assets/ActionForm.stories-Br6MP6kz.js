import{j as t,g as n}from"./iframe-BDa8Fqup.js";import{A as r}from"./action-form-DAcnCn_x.js";import"./preload-helper-C9_zurnG.js";import"./DropdownField-SuU-thQx.js";import"./debounce-OmcTsIux.js";import"./useOsdkClient-CB0wGX_k.js";import"./index-pjqeNj_i.js";import"./Input-mz3axp_m.js";import"./useBaseUiId-XTCdzLB-.js";import"./useControlled-C8kqLhB2.js";import"./index-DR8p4qUn.js";import"./index-DCtmNJWH.js";import"./PopoverPopup-DGGaNiSQ.js";import"./InternalBackdrop-DZXQO9MH.js";import"./composite-DOKDZZ1y.js";import"./index-eQmTP4uG.js";import"./getDisabledMountTransitionStyles-DcsKWw9B.js";import"./ToolbarRootContext-bJCZq9fk.js";import"./tick-SdtlPGo8.js";import"./svgIconContainer-DdVraw0H.js";import"./small-cross-nilyHMIW.js";import"./search-DMOASIyP.js";import"./cross-CptJAf1F.js";import"./useValueChanged-CtmzMV14.js";import"./getPseudoElementBounds-B0Ifv5Xb.js";import"./CompositeItem-CxqNqspP.js";import"./makeExternalStore-CrFgIlYD.js";import"./BaseForm-D8iA3B4P.js";import"./ActionButton-D3yPDPia.js";import"./Button-By4eZEsF.js";import"./SkeletonBar-B9ofcDWv.js";import"./Tooltip-BM2piRgB.js";import"./info-sign-ClwhvHaN.js";import"./chevron-up-BgbPZoMo.js";import"./chevron-down-XbIjVc8V.js";import"./useEventCallback-DxebTLhO.js";import"./iconLoader-qEjsSR9J.js";import"./Switch-z0fSKwWG.js";import"./CompositeRoot-FW-11geX.js";import"./TimePicker-d78cfC6i.js";import"./CollapsiblePanel-IYSRIgVb.js";import"./error-DaHq0ZVm.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-VckxLh6W.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
