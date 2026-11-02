import{j as t,g as n}from"./iframe-DUqIITxH.js";import{A as r}from"./action-form-DrdGYJt4.js";import"./preload-helper-DRNNkrJi.js";import"./DropdownField-D8f8SQmJ.js";import"./debounce-8IWhPKp0.js";import"./useOsdkClient-DYmfz7qm.js";import"./index-CfKxCZr0.js";import"./Input-Ck3038DH.js";import"./useBaseUiId-kMUnh5gd.js";import"./useControlled-DnwEhQGz.js";import"./index-Dsym8n4N.js";import"./index-GkXmmaX0.js";import"./PopoverPopup-Cb4S25yO.js";import"./InternalBackdrop-BhomPwEy.js";import"./composite-DJRtaiwf.js";import"./index-BLlR331c.js";import"./getDisabledMountTransitionStyles-g7BSBpZk.js";import"./ToolbarRootContext-B4KY25qe.js";import"./tick-BKBNrx8N.js";import"./svgIconContainer-6SFRCpjB.js";import"./small-cross-DiAkLgef.js";import"./search-BZkb1jfI.js";import"./cross-CNr5tSf5.js";import"./useValueChanged-QI-v-4Vm.js";import"./getPseudoElementBounds-BB5-HDV6.js";import"./CompositeItem-DA_aeyOT.js";import"./makeExternalStore-C3reCNG-.js";import"./BaseForm-A_SaBPL2.js";import"./ActionButton-w4Urkbcz.js";import"./Button-DxPOU_Mc.js";import"./SkeletonBar-fzqq3kFc.js";import"./Tooltip-C187RPOh.js";import"./info-sign-CV3vLhWO.js";import"./chevron-up-D34ATitk.js";import"./chevron-down-5LJm5ghw.js";import"./useEventCallback-CA5SU1AH.js";import"./iconLoader-SRK_C_ID.js";import"./Switch-BzrN__BF.js";import"./CompositeRoot-D8brjfqv.js";import"./TimePicker-B-qwHz5g.js";import"./CollapsiblePanel-BoajmFi9.js";import"./error-BA5REKvs.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-NmiraHl_.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
