import{j as t,g as n}from"./iframe-BMD419ka.js";import{A as r}from"./action-form-CnnitJSC.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-CJedxo24.js";import"./debounce-189bBZdJ.js";import"./useOsdkClient-C_nRFm8v.js";import"./index-kQgthC1n.js";import"./Input-Bra7C-xN.js";import"./useBaseUiId-BBA3Ojwf.js";import"./useControlled-7nsHaAUN.js";import"./index-DoLcuz7h.js";import"./index-CxpxkMGG.js";import"./PopoverPopup-Cev_zMr-.js";import"./InternalBackdrop-BzOsWlKG.js";import"./composite-C219b2sQ.js";import"./index-CZl_v7Sd.js";import"./getDisabledMountTransitionStyles-C6hYXqqN.js";import"./ToolbarRootContext-COV-S0gg.js";import"./tick-CWpYZ4jJ.js";import"./svgIconContainer-CHQFiUDX.js";import"./small-cross-Cwk34a2M.js";import"./search-EKHgMBUJ.js";import"./cross-C-Zn05Sh.js";import"./useValueChanged-BsnzqRt6.js";import"./getPseudoElementBounds-CHbR_S8R.js";import"./CompositeItem-Bp6sOKGe.js";import"./makeExternalStore-CFbDS87k.js";import"./BaseForm-CRYCkjIU.js";import"./ActionButton-CTFg_lcv.js";import"./Button-LjQK0IIe.js";import"./SkeletonBar-DEGMKOtH.js";import"./Tooltip-CS3G91Py.js";import"./info-sign-Cbv_F74O.js";import"./chevron-up-BLN4BLrL.js";import"./chevron-down-Amjm1ssN.js";import"./useEventCallback-p3w8y99Z.js";import"./iconLoader-Bw0D8oeN.js";import"./Switch-C90XeGqU.js";import"./CompositeRoot-WdT9HUBt.js";import"./TimePicker-DGJfM2ap.js";import"./CollapsiblePanel-BRTyuHlQ.js";import"./error-3ACxWnPD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-JpL78Mh0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
