import{j as t,g as n}from"./iframe-CPz-wzhp.js";import{A as r}from"./action-form-a8y6DAJ4.js";import"./preload-helper-B3PLv50W.js";import"./DropdownField-BJnpWJam.js";import"./debounce-DaKFtC_V.js";import"./useOsdkClient-eahsPVnP.js";import"./index-CtV6ZPdt.js";import"./Input-BO6jo4k5.js";import"./useBaseUiId-bEyq9hSb.js";import"./useControlled-7vp-sIj7.js";import"./index-DzRVDHUw.js";import"./index-BRVvkZ9q.js";import"./PopoverPopup-Bh7nIoKv.js";import"./InternalBackdrop-BrVnOHT7.js";import"./composite-Dda615xV.js";import"./index-q41jJGqb.js";import"./getDisabledMountTransitionStyles-Bznae3H_.js";import"./ToolbarRootContext-ClJ_sUWs.js";import"./tick-C0JYyDJw.js";import"./svgIconContainer-B99gTCIO.js";import"./small-cross-CUpJa2rI.js";import"./search-CPfH1VP1.js";import"./cross-DRBzl1mu.js";import"./useValueChanged-sLT7_-gz.js";import"./getPseudoElementBounds-zuJ-zqHd.js";import"./CompositeItem-t2T-QHuZ.js";import"./makeExternalStore-Ba5nMm5U.js";import"./BaseForm-zNvQ0n4p.js";import"./ActionButton-DvbMI2E1.js";import"./Button-6LWfTNU-.js";import"./SkeletonBar-CCqJKh0H.js";import"./Tooltip-MzGB87hV.js";import"./info-sign-BYAayp7z.js";import"./chevron-up-DuRMlZ8v.js";import"./chevron-down-BNy5Nzph.js";import"./useEventCallback-D-a5Riu5.js";import"./iconLoader-D4g3wjsd.js";import"./Switch-DROlER9x.js";import"./CompositeRoot-C8X-4Z7i.js";import"./TimePicker-yWylC102.js";import"./CollapsiblePanel-Bv-tJbaL.js";import"./error-BD3e32HB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BXgZN6T2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
