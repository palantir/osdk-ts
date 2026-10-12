import{j as t,g as n}from"./iframe-DfvwHsY4.js";import{A as r}from"./action-form-Dl2USXlr.js";import"./preload-helper-B_za76P1.js";import"./DropdownField-CbJ9aycC.js";import"./debounce-D2BrHLFh.js";import"./useOsdkClient-BtLJAOm0.js";import"./index-CQtOsoXK.js";import"./Input-BPNZHdpC.js";import"./useBaseUiId-B0xqZb_O.js";import"./useControlled-BjeqQkUk.js";import"./index-DR_LgGEH.js";import"./index-DVBjGa5t.js";import"./PopoverPopup-DGBwl_YH.js";import"./InternalBackdrop-CKWiJoCa.js";import"./composite-CSX6Mrkw.js";import"./index-CnrsCr2B.js";import"./getDisabledMountTransitionStyles-ClgRaisB.js";import"./ToolbarRootContext-rYStqux1.js";import"./tick-CoDkmvvi.js";import"./svgIconContainer-B9JqQ2wt.js";import"./small-cross-D42sc0mE.js";import"./search-CsmvFGw5.js";import"./cross-fqG1RiYl.js";import"./useValueChanged-BBJPtzLX.js";import"./getPseudoElementBounds-CWn3civw.js";import"./CompositeItem-DMwkjAkb.js";import"./makeExternalStore-B0EaqGDc.js";import"./BaseForm-CuAQMN_Y.js";import"./ActionButton-D564RM3o.js";import"./Button-Ca04rN16.js";import"./SkeletonBar-Dkqc5Z-q.js";import"./Tooltip-DJljNE8z.js";import"./info-sign-BehZkLCX.js";import"./chevron-up-c_-7H9zc.js";import"./chevron-down-B-w_aZMu.js";import"./useEventCallback-CHZTTgQU.js";import"./iconLoader-BgPPVUAw.js";import"./Switch-ybJ9V7vg.js";import"./CompositeRoot-BCH0SjIT.js";import"./TimePicker-CrKLRADO.js";import"./CollapsiblePanel-Bny2eGkF.js";import"./error-1veqZu6X.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-5OCT_Jru.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
