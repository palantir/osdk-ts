import{j as t,g as n}from"./iframe-BHPDqCFq.js";import{A as r}from"./action-form-BG_smt0C.js";import"./preload-helper-C8dKT6c-.js";import"./DropdownField-CDw7d_jR.js";import"./debounce-DVRH7VUD.js";import"./useOsdkClient-DdfWwqYU.js";import"./index-Cxj4mfK8.js";import"./Input-BmuqUAJQ.js";import"./useBaseUiId-CT4jboOp.js";import"./useControlled-BLanU1Cz.js";import"./index-DJH664Hp.js";import"./index-JmqbywhK.js";import"./PopoverPopup-CnlmGlie.js";import"./InternalBackdrop-Csoal8gm.js";import"./composite-BIm8cUf1.js";import"./index-DX8xiCXa.js";import"./getDisabledMountTransitionStyles-BYu2K8x7.js";import"./ToolbarRootContext-BieBN5Ud.js";import"./tick-CJnrQrNa.js";import"./svgIconContainer-COam26m3.js";import"./small-cross-DRE_PaJF.js";import"./search-ROafySNP.js";import"./cross-BHJaWm-f.js";import"./useValueChanged-D1mPBuzM.js";import"./getPseudoElementBounds-CM7RrIA6.js";import"./CompositeItem-BRFTKS6k.js";import"./makeExternalStore-CIZbbQ8M.js";import"./BaseForm-Bf23h23h.js";import"./ActionButton--zxznfMJ.js";import"./Button-D6w0YH3F.js";import"./SkeletonBar-P8jlFumX.js";import"./Tooltip-CCOQG__R.js";import"./info-sign-Dj9U61oP.js";import"./chevron-up-CforyBWp.js";import"./chevron-down-X9qExTnz.js";import"./useEventCallback-Ddnv-q8o.js";import"./iconLoader-Bt7A1m-y.js";import"./Switch-Tp8aJBL4.js";import"./CompositeRoot-C5DOsv6-.js";import"./TimePicker-CuSNCjqi.js";import"./CollapsiblePanel-COsf17xI.js";import"./error-Wz7v_t0s.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Ben-Mf35.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
