import{j as t,g as n}from"./iframe-DfEkohu4.js";import{A as r}from"./action-form-I08nvo9W.js";import"./preload-helper-DFhwYWPX.js";import"./DropdownField-BqAebNxN.js";import"./debounce-CtoYG2yf.js";import"./useOsdkClient-CcG1MUqc.js";import"./index-BScMX4pI.js";import"./Input-BPcgfpFu.js";import"./useBaseUiId-B77SsLeT.js";import"./useControlled-BtbuRmOW.js";import"./index-JsvBI6N5.js";import"./index-DeVDv3z2.js";import"./PopoverPopup-uQDnUDEP.js";import"./InternalBackdrop-DXqBVLJs.js";import"./composite-Bps_FR72.js";import"./index-hIEvmrlT.js";import"./getDisabledMountTransitionStyles-BYqMdHQa.js";import"./ToolbarRootContext-CElxzA4r.js";import"./tick-CjKE3w4f.js";import"./svgIconContainer-52IA31OT.js";import"./small-cross-DDNeE2US.js";import"./search-B6VKD1Dj.js";import"./cross-BPfWpbhR.js";import"./useValueChanged-DA_n1_wF.js";import"./getPseudoElementBounds-ibDNbMG2.js";import"./CompositeItem-Efavp-9X.js";import"./makeExternalStore-D77TIE_F.js";import"./BaseForm-O5fGmAuN.js";import"./ActionButton-BGdEaaKW.js";import"./Button-hRgK4Dbu.js";import"./SkeletonBar-DVdvzFwN.js";import"./Tooltip-CU1xiDOq.js";import"./info-sign-ClEf-1s9.js";import"./chevron-up-BLj9cjIl.js";import"./chevron-down-BPKdn-wb.js";import"./useEventCallback-DfD6b3pP.js";import"./iconLoader-Dkv_Y2qK.js";import"./Switch-l2TReGSo.js";import"./CompositeRoot-BHbMOPqa.js";import"./TimePicker-wRObqPjO.js";import"./CollapsiblePanel-Cfd-QJkm.js";import"./error-CvHPy682.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CSBiz8Z-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
