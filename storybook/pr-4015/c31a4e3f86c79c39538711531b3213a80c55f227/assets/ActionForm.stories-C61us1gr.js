import{j as t,g as n}from"./iframe-DNRgqJZG.js";import{A as r}from"./action-form-ClCKrMsB.js";import"./preload-helper-B4MzypZ7.js";import"./DropdownField-Cu20yd1p.js";import"./debounce-BA7m7sn4.js";import"./useOsdkClient-CgS_42xe.js";import"./index--r_AATYa.js";import"./Input-DaU9Iq4Y.js";import"./useBaseUiId-k1HsK5LP.js";import"./useControlled-B0UDo4VH.js";import"./index-D50m2_yv.js";import"./index-Bb2PTGBq.js";import"./PopoverPopup-TzHKm3nq.js";import"./InternalBackdrop-C6yPahMN.js";import"./composite-BhLw2OB1.js";import"./index-J6FCVwwh.js";import"./getDisabledMountTransitionStyles-4L_cObYh.js";import"./ToolbarRootContext-DAyCAc-p.js";import"./tick-DfDE1bdF.js";import"./svgIconContainer-RGbg_3In.js";import"./small-cross-BtT2butt.js";import"./search-2pDcyK1J.js";import"./cross-fnGpeSL_.js";import"./useValueChanged-D_w674cM.js";import"./getPseudoElementBounds-DyKgoU5n.js";import"./CompositeItem-GzRDip0q.js";import"./makeExternalStore-D4vVBx2o.js";import"./BaseForm-CBAwEOqW.js";import"./ActionButton-Dmy_y5QF.js";import"./Button-DrBYvyjr.js";import"./SkeletonBar-BdIO37It.js";import"./Tooltip-DHSrIuxD.js";import"./info-sign-CF8fGY_R.js";import"./chevron-up-BzEHjWeV.js";import"./chevron-down-BGaiaEhj.js";import"./useEventCallback-DAfTLw81.js";import"./iconLoader-_ixQHtKm.js";import"./CompositeRoot-wORx0fzE.js";import"./Switch-CwxydNuX.js";import"./TimePicker-CRjqgJPa.js";import"./CollapsiblePanel-BlCOPMVs.js";import"./error-DII-yisC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B_v8QCh0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
