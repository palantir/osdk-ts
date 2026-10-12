import{j as t,g as n}from"./iframe-8RY7zcAm.js";import{A as r}from"./action-form-D3B0vrWn.js";import"./preload-helper-BGkfdM1d.js";import"./DropdownField-0aYp1GEb.js";import"./debounce-B7Gynz3E.js";import"./useOsdkClient-P54WfxAq.js";import"./index-F16GWZJ_.js";import"./Input-CMi9rgRv.js";import"./useBaseUiId-D3Is5SDV.js";import"./useControlled-knRgQYvS.js";import"./index-DR56g2UK.js";import"./index-CFR66S1o.js";import"./PopoverPopup-BTcWcv1_.js";import"./InternalBackdrop-CEKxxXVK.js";import"./composite-BDnjYEG7.js";import"./index-Cp_HTgiP.js";import"./getDisabledMountTransitionStyles-C7O4Eqmv.js";import"./ToolbarRootContext-xvpkFEWT.js";import"./tick-5ikQBC0o.js";import"./svgIconContainer-Bnw3Cx_6.js";import"./small-cross-BtCoVVKf.js";import"./search-C17XLT_W.js";import"./cross-aMDWg1-0.js";import"./useValueChanged-Do7jw3sZ.js";import"./getPseudoElementBounds-Cf6FS6bo.js";import"./CompositeItem-CgF-gvX4.js";import"./makeExternalStore-C5QucHCB.js";import"./BaseForm-BED1NaM-.js";import"./ActionButton-D-4IyjVA.js";import"./Button-CAL7_9_d.js";import"./SkeletonBar-Bkq728Iu.js";import"./Tooltip-BlXoDKth.js";import"./info-sign-DcehQeC7.js";import"./chevron-up-CfJhacN-.js";import"./chevron-down-h5bw2Tva.js";import"./useEventCallback-DbbrRawA.js";import"./iconLoader-eg-AQzCD.js";import"./Switch-sjmTKVwR.js";import"./CompositeRoot-BeDj6e0l.js";import"./TimePicker-BaFjTdc_.js";import"./CollapsiblePanel-C2F04vFW.js";import"./error-DN4E4s-5.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DZUKZj-t.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
