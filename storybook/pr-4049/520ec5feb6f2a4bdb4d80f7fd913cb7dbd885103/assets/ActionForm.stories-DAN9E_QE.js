import{j as t,g as n}from"./iframe-CJFgfqJQ.js";import{A as r}from"./action-form-B_IMlchl.js";import"./preload-helper-CB2bVH8w.js";import"./DropdownField-DwonOWM7.js";import"./debounce-CeHNcT_D.js";import"./useOsdkClient-DsGPKyv1.js";import"./index-BDuqkffg.js";import"./Input-DmfjYINK.js";import"./useBaseUiId-KMobehZg.js";import"./useControlled-HhXb2sFD.js";import"./index-D8JNb3--.js";import"./index-DCMHFOQf.js";import"./PopoverPopup-Cs5VOili.js";import"./InternalBackdrop-DVgaqM5_.js";import"./composite-D_U5DxNy.js";import"./index-Dmlu-QeK.js";import"./getDisabledMountTransitionStyles-B5vF6vDs.js";import"./ToolbarRootContext-DJb0kYMX.js";import"./tick-DFl5nZ0u.js";import"./svgIconContainer-SiM3kExX.js";import"./small-cross-Bvt4-Cci.js";import"./search-DdMhLoUU.js";import"./cross-CGqAK_rm.js";import"./useValueChanged-DDVfSaOH.js";import"./getPseudoElementBounds-BJ_KrdWI.js";import"./CompositeItem-8xWeC0Vv.js";import"./makeExternalStore-v_n6tY7p.js";import"./BaseForm-BuvRk7nr.js";import"./ActionButton-qaoG7oqA.js";import"./Button-cr6PNOy5.js";import"./SkeletonBar-dUsinxB7.js";import"./Tooltip-Dv9997-7.js";import"./info-sign-CO3ZVrzz.js";import"./chevron-up-BmG3vX6H.js";import"./chevron-down-DGQA7IYp.js";import"./useEventCallback-DwOB9kEk.js";import"./iconLoader-BhYCZ9xw.js";import"./Switch-C28SKP2P.js";import"./CompositeRoot-Cc2xxpdp.js";import"./TimePicker-CPRsp_2R.js";import"./CollapsiblePanel-B5YF5ZIm.js";import"./error-DUmxQ8UR.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DL4u8lDZ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
