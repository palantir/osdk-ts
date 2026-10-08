import{j as t,g as n}from"./iframe-Dh2xvDPL.js";import{A as r}from"./action-form-BPOB5lAb.js";import"./preload-helper-SAHcs0zZ.js";import"./DropdownField-CXn8MxM3.js";import"./debounce-DG8yYAXE.js";import"./useOsdkClient-BDIRf078.js";import"./index-Dr7bSUf-.js";import"./Input-D6WeFSc3.js";import"./useBaseUiId-X9Y2KA52.js";import"./useControlled-Cuxd_f5K.js";import"./index-CT9Bx1MM.js";import"./index-n6Qd_eA8.js";import"./PopoverPopup-BCrdCA5S.js";import"./InternalBackdrop-C2q5bYna.js";import"./composite-KqTwPrS-.js";import"./index-BM8dCjb_.js";import"./getDisabledMountTransitionStyles-DxtpCxOq.js";import"./ToolbarRootContext-D8HNRzfl.js";import"./tick-1mKZAjPR.js";import"./svgIconContainer-BHSUSAvD.js";import"./small-cross-DJlalsgy.js";import"./search-DmyvADcW.js";import"./cross-ZJLJ2cFd.js";import"./useValueChanged-DhcPVJzs.js";import"./getPseudoElementBounds-BI_64AOy.js";import"./CompositeItem-DLX8hiU0.js";import"./makeExternalStore-DYD0iaqF.js";import"./BaseForm-CGkzlWDQ.js";import"./ActionButton-CGAhjyey.js";import"./Button-YpbDPlK1.js";import"./SkeletonBar-DlK6Lvgg.js";import"./Tooltip-C-gFw6R-.js";import"./info-sign-Czvfs3WW.js";import"./chevron-up-BqauzORh.js";import"./chevron-down-Bnx_kJUl.js";import"./useEventCallback-C1LEHjlu.js";import"./iconLoader-DSEgPAPq.js";import"./Switch-BNffka_0.js";import"./CompositeRoot-BaMuCCzO.js";import"./TimePicker-BVZ51m0q.js";import"./CollapsiblePanel-Bx6XMZE8.js";import"./error-DKTxybZv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DzUlIuBm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
