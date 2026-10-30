import{j as t,g as n}from"./iframe-C8YzkEKz.js";import{A as r}from"./action-form-CqoB3Fd7.js";import"./preload-helper-B8sJgEbx.js";import"./DropdownField-BCYfPW_3.js";import"./debounce-B0L2FpgR.js";import"./useOsdkClient-vAKVtB8q.js";import"./index-C-Vxog0Y.js";import"./Input-XPv58Dmh.js";import"./useBaseUiId-4XXFTLSd.js";import"./useControlled-CCblLEGd.js";import"./index-Sammz_NI.js";import"./index-DWcboD_p.js";import"./PopoverPopup-LsEw6BHM.js";import"./InternalBackdrop-dIKvouY1.js";import"./composite-DSkWtwuy.js";import"./index-CdSI9hhO.js";import"./getDisabledMountTransitionStyles-Ck8jkMVH.js";import"./ToolbarRootContext-B7rZx-C2.js";import"./tick-DweM-Z-r.js";import"./svgIconContainer-_UKoevk1.js";import"./small-cross-Dk2yMoi_.js";import"./search-0pSkbv3G.js";import"./cross-CSu4FEcq.js";import"./useValueChanged-DNAGv0cE.js";import"./getPseudoElementBounds-DDudvtJw.js";import"./CompositeItem-CygnWs4n.js";import"./makeExternalStore-DCdwwz1M.js";import"./BaseForm-DNT8QT7e.js";import"./ActionButton-Bcfn6CfF.js";import"./Button-XJjUiBNX.js";import"./SkeletonBar-BWSmrnL_.js";import"./Tooltip-DvVaVw7C.js";import"./info-sign-Dnc8_Zea.js";import"./chevron-up-B3GxVzPg.js";import"./chevron-down-DAumFw1T.js";import"./useEventCallback-CCpgUzuf.js";import"./iconLoader-K9Ok5-Nn.js";import"./Switch-DXRAy8Ko.js";import"./CompositeRoot-BDdZPLcg.js";import"./TimePicker-BGe8mZS0.js";import"./CollapsiblePanel-DlES1K8I.js";import"./error-C6Q2i6Lc.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-ClUT4fsQ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
