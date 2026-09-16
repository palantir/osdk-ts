import{j as t,g as n}from"./iframe-CChix_Ju.js";import{A as r}from"./action-form-D9z9YFB6.js";import"./preload-helper-DGn9W5qi.js";import"./DropdownField-BHcpSdCb.js";import"./debounce-y_QKH6vw.js";import"./useOsdkClient-BuYYPMjl.js";import"./index-pvPqNL-H.js";import"./Input-BRtUQT1Y.js";import"./useBaseUiId-4A8uRFRe.js";import"./useControlled-CG8Zt7_4.js";import"./index-CHXlKmK_.js";import"./index-BdOozmQn.js";import"./PopoverPopup-ZgO3OX-R.js";import"./InternalBackdrop-0GHCyljD.js";import"./composite-Ctdw8swW.js";import"./index-DzZ5SHau.js";import"./getDisabledMountTransitionStyles-Dqw8IpJe.js";import"./ToolbarRootContext-4N77tOAl.js";import"./tick-BaB62fCb.js";import"./svgIconContainer-BeYzdFE0.js";import"./small-cross-CocjBOU4.js";import"./search-CX5b2IB4.js";import"./cross-CUi9b35_.js";import"./useValueChanged-5TXMPTNO.js";import"./getPseudoElementBounds-BZu9KNVE.js";import"./CompositeItem-Dh0FwBF1.js";import"./makeExternalStore-Cw3jon-H.js";import"./BaseForm-ime58jQ1.js";import"./ActionButton-BOCIBxLx.js";import"./Button-BRITeuER.js";import"./SkeletonBar-CyTCelnP.js";import"./Tooltip-D0QIy-LD.js";import"./info-sign-DP9Mk2HG.js";import"./chevron-up-Oj87dN5x.js";import"./chevron-down-DL0MqWR7.js";import"./useEventCallback-omUHy35f.js";import"./iconLoader-Dj1dKlYn.js";import"./Switch-BPJgigox.js";import"./CompositeRoot-BcTFP5xH.js";import"./TimePicker-Cyt3FK41.js";import"./CollapsiblePanel-C6nKBTkT.js";import"./error-fDpd87S9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DIof6Ugt.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
