import{j as t,g as n}from"./iframe-DlL407jt.js";import{A as r}from"./action-form-CvGFHWdD.js";import"./preload-helper-BJD3fY2z.js";import"./DropdownField-o_FquzSc.js";import"./debounce-CQmlcroi.js";import"./useOsdkClient-DuswpGgS.js";import"./index-DZmZFRgP.js";import"./Input-D4IoTLF7.js";import"./useBaseUiId-kFFF_95H.js";import"./useControlled-BgQSSZgH.js";import"./index-h5_pJtzr.js";import"./index-CTSKtE65.js";import"./isObject-BLEUFFKV.js";import"./InternalBackdrop-1eYHITMY.js";import"./composite-CnW58q4R.js";import"./index-CD3lFFWF.js";import"./getDisabledMountTransitionStyles-Cs7LUNTv.js";import"./ToolbarRootContext-FpY3GT5-.js";import"./tick-CyzaHOGg.js";import"./svgIconContainer-C3aprzty.js";import"./small-cross-CVMu3gSR.js";import"./search-CHs1cMQF.js";import"./cross-CzAlhRHv.js";import"./useValueChanged-TEcie-Mz.js";import"./getPseudoElementBounds-CS3-8zt_.js";import"./CompositeItem-EF9Yfn-T.js";import"./makeExternalStore-DASQ1Znf.js";import"./BaseForm-BWfdRZtC.js";import"./ActionButton-eiflqw4G.js";import"./Button-DMVMokIc.js";import"./SkeletonBar-BGe_x6tw.js";import"./Tooltip-DBCzdDEt.js";import"./info-sign-DBm5JqfZ.js";import"./chevron-up-LCaCSvlT.js";import"./chevron-down-D5Po3Ct_.js";import"./useEventCallback-CP9Yx8kI.js";import"./iconLoader-CG-RuCoa.js";import"./Switch-CjsBMJPx.js";import"./CompositeRoot-x0fbnMU8.js";import"./TimePicker-kEKTDhNl.js";import"./CollapsiblePanel-DQTz5N7k.js";import"./error-BAaXixX9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C_49vYYy.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
