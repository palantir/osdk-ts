import{j as t,g as n}from"./iframe-NFk5yTCl.js";import{A as r}from"./action-form-yzVdZ1Mb.js";import"./preload-helper-DnA7Db5H.js";import"./DropdownField-Dyz2YO0r.js";import"./debounce-DP-BMAVq.js";import"./useOsdkClient-gFFrbC9S.js";import"./index-BgVD2xhp.js";import"./Input-BW26RmLS.js";import"./useBaseUiId-DI_-ZcoF.js";import"./useControlled-fqF1Rj4F.js";import"./index-BMMU7vD9.js";import"./index-DvY3t6Bt.js";import"./PopoverPopup-5q1wytvg.js";import"./InternalBackdrop-C2Dw-qqf.js";import"./composite-CPOhVi5o.js";import"./index-D-jKR7g2.js";import"./getDisabledMountTransitionStyles-Cflekvz6.js";import"./ToolbarRootContext-BwRqIVN-.js";import"./tick-CZZLmvI5.js";import"./svgIconContainer-BhRqV9Gd.js";import"./small-cross-C5dljSWN.js";import"./search-DY6YLRUw.js";import"./cross-DRob9Y80.js";import"./useValueChanged-BaXAbe4f.js";import"./getPseudoElementBounds-C48v4aEa.js";import"./CompositeItem-ZF-3iBYW.js";import"./makeExternalStore-MEUeb9Nq.js";import"./BaseForm-Cmeh8ft6.js";import"./ActionButton-CwKbdIeo.js";import"./Button-BVh6l18o.js";import"./SkeletonBar-Csl4r0el.js";import"./Tooltip-BVpMXNPC.js";import"./info-sign-Dsgy8cvL.js";import"./chevron-up-DEfJdtC0.js";import"./chevron-down-Bk9vMPo2.js";import"./useEventCallback-x3ZKmgNJ.js";import"./iconLoader-y-2YHE6H.js";import"./Switch-ogP8XDyj.js";import"./CompositeRoot-8eNQV2oW.js";import"./TimePicker-Deo8w06y.js";import"./CollapsiblePanel-g_CPEQOy.js";import"./error-B1DXlG8k.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D_cxEN1y.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
