import{j as t,g as n}from"./iframe-AuAaB4HI.js";import{A as r}from"./action-form-BFScIpE2.js";import"./preload-helper-qH-vyE7r.js";import"./DropdownField-uNE4h0vC.js";import"./debounce-DfeaP7BT.js";import"./useOsdkClient-BVW8BASE.js";import"./index-BKkpZaGC.js";import"./Input-DkM5HnnT.js";import"./useBaseUiId-C8uvXzmq.js";import"./useControlled-D-wnjZuk.js";import"./index-De6CDc-m.js";import"./index-BGK8CIIz.js";import"./PopoverPopup-uo-vkHCz.js";import"./InternalBackdrop-BY0s6ZkK.js";import"./composite-OHdH01L1.js";import"./index-B03wNI31.js";import"./getDisabledMountTransitionStyles-BoDOk_4Q.js";import"./ToolbarRootContext-CDLutxqH.js";import"./tick-DYRfQajR.js";import"./svgIconContainer-CNBq2Qvc.js";import"./small-cross-BIOH-3UI.js";import"./search-MZDtJj7T.js";import"./cross-B_t7xRmp.js";import"./useValueChanged-BzNV50BT.js";import"./getPseudoElementBounds-BUuKa4di.js";import"./CompositeItem-BPZ7rSFH.js";import"./makeExternalStore-BZZHokGM.js";import"./BaseForm-C_zUAmIm.js";import"./ActionButton-Bce2G-nj.js";import"./Button-BkBIeHIG.js";import"./SkeletonBar-DUAi2JRR.js";import"./Tooltip-DiHHkjyw.js";import"./info-sign-DOG_VEdL.js";import"./chevron-up-D1GauO-V.js";import"./chevron-down-C-dLVWDH.js";import"./useEventCallback-CPYY-2RY.js";import"./iconLoader-V-EJyxhF.js";import"./CompositeRoot-DXAEUa84.js";import"./Switch-g2rG_s_T.js";import"./TimePicker-c9QxGwOg.js";import"./CollapsiblePanel-DJjrjh2j.js";import"./error-CZom1ueN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ChC8Do0m.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
