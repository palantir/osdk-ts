import{j as t,g as n}from"./iframe-D07nCh-w.js";import{A as r}from"./action-form--Y9eNBlG.js";import"./preload-helper-CmcD2_D_.js";import"./DropdownField-DWMnKMar.js";import"./debounce-CLiKICQw.js";import"./useOsdkClient-Bz66Th9p.js";import"./index-BuDZJHpF.js";import"./Input-98CZZbi3.js";import"./useBaseUiId-psA3q1id.js";import"./useControlled-CXqQNY_F.js";import"./index-BIjdr9-z.js";import"./index-BrNSxG5V.js";import"./PopoverPopup-De9oms5K.js";import"./InternalBackdrop-CoeQ5ndg.js";import"./composite-C9jYcXJr.js";import"./index-CeN_u9Sa.js";import"./getDisabledMountTransitionStyles-B1bj1ZX9.js";import"./ToolbarRootContext-DqdX595l.js";import"./tick-C06-S_iw.js";import"./svgIconContainer-PtRD7k8A.js";import"./small-cross--WdO_ezs.js";import"./search-CytW_RDV.js";import"./cross-CTO9sPn-.js";import"./useValueChanged-C_Y8WMPp.js";import"./getPseudoElementBounds-BBf48KpN.js";import"./CompositeItem-Br0cx3Iq.js";import"./makeExternalStore-D0hTV5Nv.js";import"./BaseForm-D3BysK7U.js";import"./ActionButton-BtMU_wua.js";import"./Button-DEuGu2m_.js";import"./SkeletonBar-Dpb84ZTI.js";import"./Tooltip-CtckguA7.js";import"./info-sign-DL88D9nz.js";import"./chevron-up-uIPDCvf4.js";import"./chevron-down-dIbn2_mD.js";import"./useEventCallback-BpGNXSJx.js";import"./iconLoader-Bws5nPz8.js";import"./Switch-CpirsjGj.js";import"./CompositeRoot-DJ0tY9Cs.js";import"./TimePicker-CK7ZWTlD.js";import"./CollapsiblePanel-C4kSjDma.js";import"./error-ByDyMI-d.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BiT0eK7g.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
