import{j as t,g as n}from"./iframe-BI8s_LEM.js";import{A as r}from"./action-form-Bq9sTjuu.js";import"./preload-helper-2UIxwTHe.js";import"./DropdownField-DIawgDE5.js";import"./debounce-CKraKVTC.js";import"./useOsdkClient-C2fsiA5n.js";import"./index-Cdoej1rc.js";import"./Input-BsZHTTke.js";import"./useBaseUiId-BeAhLVth.js";import"./useControlled-C9KhyXIr.js";import"./index-BYp5baBX.js";import"./index-D73snmm6.js";import"./PopoverPopup-Bj-c1PFc.js";import"./InternalBackdrop-DhaouQlo.js";import"./composite-DBRFQf_M.js";import"./index-Hn1Gkz3-.js";import"./getDisabledMountTransitionStyles-BaieG3-u.js";import"./ToolbarRootContext-DK00e0CZ.js";import"./tick-BswIpFNK.js";import"./svgIconContainer-BP-rj0xG.js";import"./small-cross-DqUYI6od.js";import"./search-Du5SutCf.js";import"./cross-BMpmO8GH.js";import"./useValueChanged-B0lFUv3p.js";import"./getPseudoElementBounds-BQKwbblt.js";import"./CompositeItem-LJzGPuj_.js";import"./makeExternalStore-CASfG9zJ.js";import"./BaseForm-DcfhBRw_.js";import"./ActionButton-BDTQjYJK.js";import"./Button-CleaIGAw.js";import"./SkeletonBar-Qw-6NH1E.js";import"./Tooltip-zQvEcTLq.js";import"./info-sign-BGmgCxRR.js";import"./chevron-up-Dc1j2y_D.js";import"./chevron-down-C-PF6_L5.js";import"./useEventCallback-DSgoeTO5.js";import"./iconLoader-FvRY52d8.js";import"./CompositeRoot-DFiEk9pV.js";import"./Switch-BeSRAHRK.js";import"./TimePicker-GldurHZL.js";import"./CollapsiblePanel-AqkBPfsf.js";import"./error-BKT0KUzG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BNQD1U6q.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
