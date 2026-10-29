import{j as t,g as n}from"./iframe-BJfHzdWS.js";import{A as r}from"./action-form-DX_0Tn2w.js";import"./preload-helper-Be4hJibr.js";import"./DropdownField-BpAH7R9v.js";import"./debounce-DdyhzCuY.js";import"./useOsdkClient-_bAI4gJ8.js";import"./index-BSLvxwbk.js";import"./Input-D-4Pcd1I.js";import"./useBaseUiId-Xn3MqoRt.js";import"./useControlled-wFQSRpl4.js";import"./index-C38cjlXr.js";import"./index-2WXta-5x.js";import"./PopoverPopup-CX838QZ3.js";import"./InternalBackdrop-BzTHj0lc.js";import"./composite-CrQSucJ3.js";import"./index-SmxUvTww.js";import"./getDisabledMountTransitionStyles-COzoDZ6v.js";import"./ToolbarRootContext-C9Lowhby.js";import"./tick-DV36iul2.js";import"./svgIconContainer-BhMqWeRt.js";import"./small-cross-Cz9VsZUQ.js";import"./search-BzsA8JvQ.js";import"./cross-VeKqoNmu.js";import"./useValueChanged-CGAdYuDI.js";import"./getPseudoElementBounds-zMviCxRX.js";import"./CompositeItem-BKpyjtDM.js";import"./makeExternalStore-DIVL--_e.js";import"./BaseForm-Dv3bNny-.js";import"./ActionButton-oml20GK7.js";import"./Button-CRGaJZKK.js";import"./SkeletonBar-bDcSNPdy.js";import"./Tooltip-C_0TZ3Gg.js";import"./info-sign-CQgURK9b.js";import"./chevron-up-CR-MXKfI.js";import"./chevron-down-DcDfg2mn.js";import"./useEventCallback-CZI3wJzb.js";import"./iconLoader-BCiJd0Oa.js";import"./Switch-DfR5AcNA.js";import"./CompositeRoot-CglYgtPC.js";import"./TimePicker-Pl0LSIiB.js";import"./CollapsiblePanel-D9aghLn1.js";import"./error-D3R8RgSf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DUXg2PFQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
