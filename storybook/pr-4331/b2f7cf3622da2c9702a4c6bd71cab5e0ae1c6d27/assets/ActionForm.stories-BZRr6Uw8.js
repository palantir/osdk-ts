import{j as t,g as n}from"./iframe-Cvj3FNL2.js";import{A as r}from"./action-form-CQsTWrk7.js";import"./preload-helper-CetzPUwQ.js";import"./DropdownField-_3D3jspy.js";import"./debounce-Yet_dmWM.js";import"./useOsdkClient-BassWPUJ.js";import"./index-DH-N1YV0.js";import"./Input-RAe99RCN.js";import"./useBaseUiId-D4o_acv_.js";import"./useControlled-0y2fy9QQ.js";import"./index-B2hgVlCo.js";import"./index-DV2RJSrY.js";import"./isObject-FFGALRWz.js";import"./InternalBackdrop-CATBYZKD.js";import"./composite-BeeOPu6q.js";import"./index-uxZgvSM2.js";import"./getDisabledMountTransitionStyles-8IEwLVYU.js";import"./ToolbarRootContext-C86500_m.js";import"./tick-D3nHgBg9.js";import"./svgIconContainer-2e47raBd.js";import"./small-cross-Cn1GfmeS.js";import"./search-DUdBrB5_.js";import"./cross-BgxfwZhF.js";import"./useValueChanged-D7CgbNdw.js";import"./getPseudoElementBounds-ebP8vgdz.js";import"./CompositeItem-BgbI3PXY.js";import"./makeExternalStore-Crm20JST.js";import"./BaseForm-BluzLU24.js";import"./ActionButton-CFdQScEP.js";import"./Button-BZDb9IOS.js";import"./SkeletonBar-262DGPMI.js";import"./Tooltip-wW5BdC1A.js";import"./info-sign-miv0xY5q.js";import"./chevron-up-DvCDTiVR.js";import"./chevron-down-BLip4j8E.js";import"./useEventCallback-Cqy7o6tW.js";import"./iconLoader-6DJvxYKE.js";import"./Switch-BBiS1EBe.js";import"./CompositeRoot-waF50HIr.js";import"./TimePicker-DW1DPwHs.js";import"./CollapsiblePanel-BiKanzHS.js";import"./error-QqbcWqTY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ChCG3pJN.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
