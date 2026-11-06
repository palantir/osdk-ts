import{j as t,g as n}from"./iframe-BL-M0CJv.js";import{A as r}from"./action-form-D1JNlLBx.js";import"./preload-helper-C0zkmkXS.js";import"./DropdownField-CYb_vMw7.js";import"./debounce-zXiB5GmY.js";import"./useOsdkClient-Dx2Qs5xK.js";import"./index-Db0LO39w.js";import"./Input-EsCXPtCp.js";import"./useBaseUiId-TPr_qZ_1.js";import"./useControlled-CKiiitZS.js";import"./index-Bt9OIo2s.js";import"./index-DIwpmFcE.js";import"./PopoverPopup-B1aR8zHS.js";import"./InternalBackdrop-DQF7Nf_d.js";import"./composite-Dx0NSDUH.js";import"./index-H5T9X240.js";import"./getDisabledMountTransitionStyles-D6fdD7kD.js";import"./ToolbarRootContext-D7bnZbhq.js";import"./tick-Ba6iW8gF.js";import"./svgIconContainer-BX2v_cR0.js";import"./small-cross-BM9iFkVs.js";import"./search-BiWkoGJW.js";import"./cross-x8jhhqfq.js";import"./useValueChanged-DM3_Gsn0.js";import"./getPseudoElementBounds-KY_ZlW1R.js";import"./CompositeItem-XRZQ4yN6.js";import"./makeExternalStore-DG0rmoX7.js";import"./BaseForm-BnahRCnu.js";import"./ActionButton-bQlrAOg4.js";import"./Button-CC9Ubwa3.js";import"./SkeletonBar-D3gneFRh.js";import"./Tooltip-CZJO9zR4.js";import"./info-sign-BB27M5IW.js";import"./chevron-up-BgUSDG1D.js";import"./chevron-down-5PA4SDET.js";import"./useEventCallback-ClZrDBfO.js";import"./iconLoader-CMDfbsi0.js";import"./Switch-BO7hrSQf.js";import"./CompositeRoot-CepNNprH.js";import"./TimePicker-BUkZ0RcU.js";import"./CollapsiblePanel-nIuDIxIE.js";import"./error-BIo7wVIV.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BYapBjuA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
