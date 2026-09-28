import{j as t,g as n}from"./iframe-D7UqPUqg.js";import{A as r}from"./action-form-DMJGfZE5.js";import"./preload-helper-Cn4dnxMR.js";import"./DropdownField-BUbtVZGf.js";import"./debounce-DIX7Ivt7.js";import"./useOsdkClient-DnJBDK7E.js";import"./index-B1myIupO.js";import"./Input-DUMT1c48.js";import"./useBaseUiId-cZ22buUA.js";import"./useControlled-BvzqTfft.js";import"./index-zv9FWzoH.js";import"./index-CvRiwgND.js";import"./PopoverPopup-CCdaFP9f.js";import"./InternalBackdrop-BU5zmbya.js";import"./composite-CksaxzsE.js";import"./index-DCkE7DLE.js";import"./getDisabledMountTransitionStyles-Sn4rIzKN.js";import"./ToolbarRootContext-CLsWTMgH.js";import"./tick-ZzmVR9ck.js";import"./svgIconContainer-CDkwNXGT.js";import"./small-cross-DrNCWiY1.js";import"./search-Da0O3BMF.js";import"./cross-Bj6j_CtG.js";import"./useValueChanged-D2bDRlLV.js";import"./getPseudoElementBounds-D3vL17pM.js";import"./CompositeItem-DTU093CG.js";import"./makeExternalStore-hhxh63bW.js";import"./BaseForm-DSgJypSg.js";import"./ActionButton-TjtigKOe.js";import"./Button-zkNcwcgB.js";import"./SkeletonBar-rSY0Z5ln.js";import"./Tooltip-DRRdorsF.js";import"./info-sign-BW_WalNy.js";import"./chevron-up-B4rNVdRr.js";import"./chevron-down-DzpLubs1.js";import"./useEventCallback-DpQrdmgu.js";import"./iconLoader-CYkeJmP0.js";import"./Switch-BtI_A0Zt.js";import"./CompositeRoot-DcOfLjWr.js";import"./TimePicker-BK3S0b6b.js";import"./CollapsiblePanel-BpT5d_FH.js";import"./error-n93hCEyg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CutvgG7T.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
