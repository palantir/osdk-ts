import{j as t,g as n}from"./iframe-DfKl0JGk.js";import{A as r}from"./action-form-DBUrAnt0.js";import"./preload-helper-D2qZKtpg.js";import"./DropdownField-DWj7vxDR.js";import"./debounce-BoOWLf3v.js";import"./useOsdkClient-D-epmGHT.js";import"./index-aB099sio.js";import"./Input-DOLGbI8I.js";import"./useBaseUiId-BFnbzIXU.js";import"./useControlled-CuqWKABX.js";import"./index-CPvTwKaJ.js";import"./index-Cu8ZN5fR.js";import"./isObject-D8Oji8bH.js";import"./InternalBackdrop-DQiuVbxP.js";import"./composite-DoivXE_r.js";import"./index-CKLNQuck.js";import"./getDisabledMountTransitionStyles-CvD_X3uJ.js";import"./ToolbarRootContext-Djhkt96c.js";import"./tick-Bf5SboOl.js";import"./svgIconContainer-BAQrNZDY.js";import"./small-cross-l23fMmT-.js";import"./search-BwIUQD_S.js";import"./cross-BNEnN7HL.js";import"./useValueChanged-BcrLWEfZ.js";import"./getPseudoElementBounds-CiQNVwt7.js";import"./CompositeItem-DCu8K_u-.js";import"./makeExternalStore-CSIEjtLx.js";import"./BaseForm-KuLVvF1J.js";import"./ActionButton-BwTBHLns.js";import"./Button-B7sS73TJ.js";import"./SkeletonBar-C3WAp5HN.js";import"./Tooltip-bZjfkZin.js";import"./info-sign-DbjulfLp.js";import"./chevron-up-DPoCXFRN.js";import"./chevron-down-CdRuI-bU.js";import"./useEventCallback-BPj-zmzp.js";import"./iconLoader-ClLLM8Du.js";import"./Switch-D8N1Vq2j.js";import"./CompositeRoot-DRavsj11.js";import"./TimePicker-CXbqMqHo.js";import"./CollapsiblePanel-CgKpLYfM.js";import"./error-Ci3w5MtL.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DiSdxyjG.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
