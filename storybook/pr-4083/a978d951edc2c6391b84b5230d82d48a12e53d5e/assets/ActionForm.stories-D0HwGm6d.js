import{j as t,g as n}from"./iframe-D-ZGqhox.js";import{A as r}from"./action-form-DoEptHw3.js";import"./preload-helper-BHmHhg6q.js";import"./DropdownField-WB5QGntE.js";import"./debounce-CEBh1i8u.js";import"./useOsdkClient-_IYUYQJJ.js";import"./index-DMbZcvzJ.js";import"./Input-Cb6mwwI7.js";import"./useBaseUiId-UHE7cq6V.js";import"./useControlled-DZViTlY6.js";import"./index-LOlNiB8m.js";import"./index-BaNxBZm4.js";import"./PopoverPopup-DmqcRuFP.js";import"./InternalBackdrop-C63SxHNb.js";import"./composite-BwjOgotZ.js";import"./index-DGIXwIHP.js";import"./getDisabledMountTransitionStyles-BrJtjLyN.js";import"./ToolbarRootContext-C0KaRFai.js";import"./tick-Cm9W0Mqj.js";import"./svgIconContainer-DynaZTrl.js";import"./small-cross-zLLYVOtd.js";import"./search-Df3zpGfV.js";import"./cross-C-5SE6cr.js";import"./useValueChanged-B65vtIly.js";import"./getPseudoElementBounds-Ds3bNVw-.js";import"./CompositeItem-BUGdCkRP.js";import"./makeExternalStore-BUNud_OP.js";import"./BaseForm-Kk-bqaCX.js";import"./ActionButton-BTMY82P_.js";import"./Button-BX_hSGAP.js";import"./SkeletonBar-BP7hF3Zr.js";import"./Tooltip-DsJKDnDl.js";import"./info-sign-BlfQjreU.js";import"./chevron-up-Bvk8StUb.js";import"./chevron-down-TA05iMki.js";import"./useEventCallback-CBryEak9.js";import"./iconLoader-C1mJ_7LM.js";import"./Switch-BcPMMubx.js";import"./CompositeRoot-BOyjU3DD.js";import"./TimePicker-CzU8SZKQ.js";import"./CollapsiblePanel-DTrAe8QH.js";import"./error-I7Ps8uLh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CNUwJgZ9.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
