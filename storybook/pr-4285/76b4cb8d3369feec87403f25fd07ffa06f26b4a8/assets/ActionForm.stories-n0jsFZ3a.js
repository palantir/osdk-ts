import{j as t,g as n}from"./iframe-CZB8iCrN.js";import{A as r}from"./action-form-DpdPZiBW.js";import"./preload-helper-Bfp8b3lb.js";import"./DropdownField-Bru52TRy.js";import"./debounce-5SpNsm5N.js";import"./useOsdkClient-BcxP6QNS.js";import"./index-B20F_8Db.js";import"./Input-mSuQxNwT.js";import"./useBaseUiId-Dl-CxI70.js";import"./useControlled-CISHEyOE.js";import"./index-DadbORQH.js";import"./index-DiIHqUbm.js";import"./PopoverPopup-DlycPGOu.js";import"./InternalBackdrop-CZc7gtvF.js";import"./composite-7sRBgyZt.js";import"./index-BA1zjzC9.js";import"./getDisabledMountTransitionStyles-C0YnDowy.js";import"./ToolbarRootContext-Xc9NkH4h.js";import"./tick-DJ7lwI6u.js";import"./svgIconContainer-C34Xeufa.js";import"./small-cross-CHUBqXu0.js";import"./search-FLqm4c0t.js";import"./cross-BaVj46vf.js";import"./useValueChanged-BCYX16oW.js";import"./getPseudoElementBounds-zdwXg5BV.js";import"./CompositeItem-BGy1WNiQ.js";import"./makeExternalStore-Bemx5W1x.js";import"./BaseForm-r3tJFzXO.js";import"./ActionButton-D-kvs5NB.js";import"./Button-CN7eBVL6.js";import"./SkeletonBar-BSHJjhv4.js";import"./Tooltip-Dza2UVUK.js";import"./info-sign-jWUiAVt0.js";import"./chevron-up-C1YtvBR9.js";import"./chevron-down-CyERpmZf.js";import"./useEventCallback-BfsfIFjp.js";import"./iconLoader-DwnOlrLF.js";import"./Switch-kob-gMEt.js";import"./CompositeRoot-DeCtH-KB.js";import"./TimePicker-BwEu2XBn.js";import"./CollapsiblePanel-DKs8Sotj.js";import"./error-BrUtxvkn.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CrKh0O5J.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
