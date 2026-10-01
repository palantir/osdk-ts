import{j as t,g as n}from"./iframe-BHP--iSv.js";import{A as r}from"./action-form-CEx3q_v8.js";import"./preload-helper-4Y0sWPF7.js";import"./DropdownField-CdixWEkP.js";import"./debounce-B6E0h1Dy.js";import"./useOsdkClient-Bt205Lro.js";import"./index-CuQOASnK.js";import"./Input-DBfp7isZ.js";import"./useBaseUiId-txgvadn-.js";import"./useControlled-DACQJINy.js";import"./index-BMZH6GYS.js";import"./index-CjU2x-RF.js";import"./PopoverPopup-sbiZa-o-.js";import"./InternalBackdrop-BaP5BEVm.js";import"./composite-CY1_GtTz.js";import"./index-_cBTnAHR.js";import"./getDisabledMountTransitionStyles-D9c4uTR_.js";import"./ToolbarRootContext-i6dOGAi5.js";import"./tick-Dy2Ajo8a.js";import"./svgIconContainer-XMK9JozI.js";import"./small-cross-CT1xO2rS.js";import"./search-gxC0SZFk.js";import"./cross-D3_DOx--.js";import"./useValueChanged-MdzQIZy9.js";import"./getPseudoElementBounds-CL-DWHCc.js";import"./CompositeItem-QqJnKLYC.js";import"./makeExternalStore-nAPJO73f.js";import"./BaseForm-DbMXai51.js";import"./ActionButton-CgEHLRCh.js";import"./Button-cuAOjsWC.js";import"./SkeletonBar-3dHEcipt.js";import"./Tooltip-B6i-uyb3.js";import"./info-sign-DjgXQEP-.js";import"./chevron-up-DlTqZtCt.js";import"./chevron-down-BptITD6J.js";import"./useEventCallback-By_yXujH.js";import"./iconLoader-BHNtKlyJ.js";import"./Switch-TAjffq_S.js";import"./CompositeRoot-0xPDRjkT.js";import"./TimePicker-CZUQjhJW.js";import"./CollapsiblePanel-BStH85wc.js";import"./error-Bl2IH4zy.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-xpnG9elc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
