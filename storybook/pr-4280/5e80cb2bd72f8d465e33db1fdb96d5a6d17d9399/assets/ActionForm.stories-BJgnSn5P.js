import{j as t,g as n}from"./iframe-D9bc5sGs.js";import{A as r}from"./action-form-CjxdjKPh.js";import"./preload-helper-vGOnJPAI.js";import"./DropdownField-Chrmpf_E.js";import"./debounce-7BefPhSx.js";import"./useOsdkClient-CSlIz3Zl.js";import"./index-CEam5gFO.js";import"./Input-D8Pr2sKK.js";import"./useBaseUiId-DLMQDqLu.js";import"./useControlled-DNEcMFJZ.js";import"./index-ClW3grIR.js";import"./index-BdCRvfl5.js";import"./PopoverPopup-DbOGNWOA.js";import"./InternalBackdrop-VOmSs6FM.js";import"./composite-BeRvyJhW.js";import"./index-ZYtQI0k4.js";import"./getDisabledMountTransitionStyles-C4hp9GAV.js";import"./ToolbarRootContext-Be9Mfuy4.js";import"./tick-jhbvcied.js";import"./svgIconContainer-Dhw0ma3V.js";import"./small-cross-DB8z7y2Q.js";import"./search-Bf3j8VuO.js";import"./cross-BPOrfQFo.js";import"./useValueChanged-BshnFGHt.js";import"./getPseudoElementBounds-Bb0zZX2S.js";import"./CompositeItem-DUTzLbNz.js";import"./makeExternalStore-DCoCUTl5.js";import"./BaseForm-TPMdtYh5.js";import"./ActionButton-ByEZi_P7.js";import"./Button-FP5Viz1l.js";import"./SkeletonBar-DcN0x3Jd.js";import"./Tooltip-zRPANrX1.js";import"./info-sign-CKcfkLdT.js";import"./chevron-up-BazAfeWZ.js";import"./chevron-down-Cyz2_1Cu.js";import"./useEventCallback-BoorzceT.js";import"./iconLoader-CZUScMqC.js";import"./Switch-BqI3MgF_.js";import"./CompositeRoot-DUgonIjt.js";import"./TimePicker-YURFw6kj.js";import"./CollapsiblePanel-DHmmGhnb.js";import"./error-Df3SJLzh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B-tcpkdE.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
