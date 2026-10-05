import{j as t,g as n}from"./iframe-BmTfPnlj.js";import{A as r}from"./action-form-ET9Lyxyk.js";import"./preload-helper-Bt_1BQmW.js";import"./DropdownField-CWmI2VfS.js";import"./debounce-rwBGYxkZ.js";import"./useOsdkClient-Cv-kkUDW.js";import"./index-Bm1AuuXK.js";import"./Input-DCbUCzbU.js";import"./useBaseUiId-CCBNiAGi.js";import"./useControlled-DnL-NKvx.js";import"./index-CXPEIkSW.js";import"./index-SU5jaKKw.js";import"./PopoverPopup-DP_BVDXy.js";import"./InternalBackdrop-D1OaTL7l.js";import"./composite-EJeYuU8b.js";import"./index-CpTFd5F4.js";import"./getDisabledMountTransitionStyles-BN0kS-V3.js";import"./ToolbarRootContext-BGVsEm7y.js";import"./tick-BZF5qhIw.js";import"./svgIconContainer-B7k9FdbM.js";import"./small-cross-C79mcn34.js";import"./search-CB8fQpSi.js";import"./cross-1FUbPxXE.js";import"./useValueChanged-DFht__m8.js";import"./getPseudoElementBounds-DXAkgdW7.js";import"./CompositeItem-BMTpDb-Q.js";import"./makeExternalStore-D35ZSxQs.js";import"./BaseForm-DSmQizUW.js";import"./ActionButton-cPylYcIf.js";import"./Button-B5eSVAk7.js";import"./SkeletonBar-xGbITfKH.js";import"./Tooltip-BF_5RxMC.js";import"./info-sign-DoxAkaWL.js";import"./chevron-up-CFQIPoji.js";import"./chevron-down-BcbzO8DN.js";import"./useEventCallback-CthUr-8o.js";import"./iconLoader-BJl4gC3Z.js";import"./Switch-BNmIM0mj.js";import"./CompositeRoot-CTluaeFS.js";import"./TimePicker-DK9L4kVs.js";import"./CollapsiblePanel-Gfd_BnuO.js";import"./error-DAivNTLD.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-NcWgtcUH.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
