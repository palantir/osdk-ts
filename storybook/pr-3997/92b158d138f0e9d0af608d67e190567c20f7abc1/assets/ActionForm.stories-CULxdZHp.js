import{j as t,g as n}from"./iframe-CxUFDRLk.js";import{A as r}from"./action-form-riA9cxYw.js";import"./preload-helper-BOCVFqPP.js";import"./DropdownField-DPW3dnFU.js";import"./debounce-CAh4NXmJ.js";import"./useOsdkClient-BpG5SD2k.js";import"./index-D3P2PnfT.js";import"./Input-BnQ1Pqm-.js";import"./useBaseUiId-B_I-AE6w.js";import"./useControlled-i_PgyXUB.js";import"./index-CfF-bhSp.js";import"./index-BzoE9HQS.js";import"./PopoverPopup-pze7gDjU.js";import"./InternalBackdrop-2L9B9MFF.js";import"./composite-C6x_RQDW.js";import"./index-D6DNyq_c.js";import"./getDisabledMountTransitionStyles-kKhuwNUe.js";import"./ToolbarRootContext-DgN8QGqs.js";import"./tick-D4sARw8j.js";import"./svgIconContainer-lhP_uqYt.js";import"./small-cross-HxQFWB4N.js";import"./search-Bycz8Mke.js";import"./cross-BABVEZtV.js";import"./useValueChanged-DiYqY4ta.js";import"./getPseudoElementBounds-0LLCjN2z.js";import"./CompositeItem-Bm2eQNpM.js";import"./makeExternalStore-YOPDBlSx.js";import"./BaseForm-C3KhuETe.js";import"./ActionButton-D1b2dROh.js";import"./Button-DfD1hoUH.js";import"./SkeletonBar-B-5lxJx6.js";import"./Tooltip-CMU-bxvV.js";import"./info-sign-DeVJYC26.js";import"./chevron-up-m4GjfVhN.js";import"./chevron-down-CGVLA0Cv.js";import"./useEventCallback-ZNNLb4EC.js";import"./iconLoader-DVxgZMfQ.js";import"./CompositeRoot-D76SJMup.js";import"./Switch-Doeu28Un.js";import"./TimePicker-Bkw4X3Pf.js";import"./CollapsiblePanel-KaZ7CRFP.js";import"./error-D-IJQZZn.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CPTjHpfw.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
