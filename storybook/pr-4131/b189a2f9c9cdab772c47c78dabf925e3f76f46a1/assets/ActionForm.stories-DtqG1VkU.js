import{j as t,g as n}from"./iframe-t8tzCNQG.js";import{A as r}from"./action-form-BYGJ-Bea.js";import"./preload-helper-DgmnFE1F.js";import"./DropdownField-Di9jrMNs.js";import"./debounce-DlkfzBW4.js";import"./useOsdkClient-DVOxrQDN.js";import"./index-B2ZMYIpf.js";import"./Input-hnDJE6Oy.js";import"./useBaseUiId-5tpyF_oD.js";import"./useControlled-C3Y23C1t.js";import"./index-D86oorM3.js";import"./index-BUDOFPoc.js";import"./PopoverPopup-BK-uWVpQ.js";import"./InternalBackdrop-DRHhQcWa.js";import"./composite-CtIsJulR.js";import"./index-CPjyfk9f.js";import"./getDisabledMountTransitionStyles-d1tAtN98.js";import"./ToolbarRootContext-HtRVgU8t.js";import"./tick-Bh48FDPD.js";import"./svgIconContainer-BMtFokv3.js";import"./small-cross-bmT9fHJd.js";import"./search-CeoT8iOL.js";import"./cross-BlbUaBXV.js";import"./useValueChanged-iJtQDgJE.js";import"./getPseudoElementBounds-D5yioJI0.js";import"./CompositeItem-BgkQkbdd.js";import"./makeExternalStore-tE7kFU6z.js";import"./BaseForm-CAU30MAl.js";import"./ActionButton-DYfkYb1s.js";import"./Button-DJ3cf7JH.js";import"./SkeletonBar-Ctmv_DKB.js";import"./Tooltip-QQ-ZZ6je.js";import"./info-sign-BWW3B8mf.js";import"./chevron-up-0Ha6kq4G.js";import"./chevron-down-Dw7pUuxv.js";import"./useEventCallback-Du7sw565.js";import"./iconLoader-LXM4ZOyy.js";import"./Switch-DAGoSE5M.js";import"./CompositeRoot-BFFS3acU.js";import"./TimePicker-DhuokJS-.js";import"./CollapsiblePanel-CLzEHlgM.js";import"./error-ByvTRN4V.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D05rZYt3.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
