import{j as t,g as n}from"./iframe-B4_LdmvC.js";import{A as r}from"./action-form-RXgfUv1V.js";import"./preload-helper-NaiMF-0L.js";import"./DropdownField-DDgNN9YF.js";import"./debounce-C1TMjKV3.js";import"./useOsdkClient-CJsnDWQX.js";import"./index-DjXxmUSg.js";import"./Input-D84OA9Cn.js";import"./useBaseUiId-D49bnhC0.js";import"./useControlled-BCVYzpl3.js";import"./index-CDFbUPsJ.js";import"./index-DMnPNpwI.js";import"./PopoverPopup-UdMkbeCN.js";import"./InternalBackdrop-CSZNBoeU.js";import"./composite-C8-JBw2s.js";import"./index-BTH-2SAP.js";import"./getDisabledMountTransitionStyles-CK9EkuFU.js";import"./ToolbarRootContext-IBMmFjEY.js";import"./tick-B07mwDIZ.js";import"./svgIconContainer-CqdyD_06.js";import"./small-cross-CNTQ5kNU.js";import"./search-CuDduKs4.js";import"./cross-ByyhMC0G.js";import"./useValueChanged-gJKbZz5S.js";import"./getPseudoElementBounds-DZtnlOKj.js";import"./CompositeItem-Te1LxRX_.js";import"./makeExternalStore-DG8fJp9Q.js";import"./BaseForm-C7iqu2Q8.js";import"./ActionButton-BCapXp1v.js";import"./Button-DMJfC-Jo.js";import"./SkeletonBar-CH4Er-h8.js";import"./Tooltip-a9nGNvDJ.js";import"./info-sign-DXjfNtlu.js";import"./chevron-up-sZgoCKpY.js";import"./chevron-down-C6pppJ5O.js";import"./useEventCallback-DiEJ97Pr.js";import"./iconLoader-CvVLbVnp.js";import"./Switch-Cn8FNDxA.js";import"./CompositeRoot-Bqepm-wk.js";import"./TimePicker-HVFBgR1c.js";import"./CollapsiblePanel-Cq6d-sf2.js";import"./error-De7UK8KB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-gLpSEa_H.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
