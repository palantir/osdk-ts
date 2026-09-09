import{j as t,g as n}from"./iframe-CK77c45c.js";import{A as r}from"./action-form-32qQRePU.js";import"./preload-helper-DbNEja4W.js";import"./DropdownField-DZE5zpKv.js";import"./debounce-BKHqtWZX.js";import"./useOsdkClient-Tt2idpLi.js";import"./index-C442JOIH.js";import"./Input-DeIqzZkQ.js";import"./useBaseUiId-dVZqGFlU.js";import"./useControlled-jnmU5UAL.js";import"./index-qnj-Mesk.js";import"./index-BoFZ_UqF.js";import"./PopoverPopup-BOimy_Ld.js";import"./InternalBackdrop-C6LC9TgG.js";import"./composite-Dh-nFKNO.js";import"./index-DlpSJTu4.js";import"./getDisabledMountTransitionStyles-CaJMflFk.js";import"./ToolbarRootContext-BQcuSjIX.js";import"./tick-sW9HqPYz.js";import"./svgIconContainer-L_jjiIf-.js";import"./small-cross-BtlEs72Q.js";import"./search-CV_E7rKM.js";import"./cross-CwI5OEk2.js";import"./useValueChanged-BaVslEYl.js";import"./getPseudoElementBounds-nGyt1hPn.js";import"./CompositeItem-CAzkW6h4.js";import"./makeExternalStore-C2N1fTLN.js";import"./BaseForm-DNc0Nz20.js";import"./ActionButton-CLfSCTXA.js";import"./Button-CWY22zau.js";import"./SkeletonBar-X3eUnAaJ.js";import"./Tooltip-CY4cYmbh.js";import"./info-sign-Bt944y0v.js";import"./chevron-up-B2kOBdV2.js";import"./chevron-down-CFkNPRkg.js";import"./useEventCallback-ClxfXOPq.js";import"./iconLoader-BPQFc0k_.js";import"./CompositeRoot-DzPqxPrx.js";import"./Switch-BKrHGpTy.js";import"./TimePicker-BUszH6Gy.js";import"./CollapsiblePanel-BCyMY8rI.js";import"./error-BvwPFshU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-7D8iT2W4.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
