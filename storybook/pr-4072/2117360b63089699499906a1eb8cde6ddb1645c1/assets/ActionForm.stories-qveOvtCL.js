import{j as t,g as n}from"./iframe-DFjxEBRl.js";import{A as r}from"./action-form-6PXZz5Bu.js";import"./preload-helper-YLQ76DnX.js";import"./DropdownField-CStCtQro.js";import"./debounce-vz83BYcu.js";import"./useOsdkClient-DtVD0JhY.js";import"./index-RHDnv4KE.js";import"./Input-BTdzd0gA.js";import"./useBaseUiId-DHc-L81w.js";import"./useControlled-CQ5aYrLf.js";import"./index-Ct3A8526.js";import"./index-C1k9WrZP.js";import"./PopoverPopup-BZUXpB4m.js";import"./InternalBackdrop-C6P7pfbM.js";import"./composite-CbdzgRs5.js";import"./index-DpB4gLVj.js";import"./getDisabledMountTransitionStyles-sjb--ufQ.js";import"./ToolbarRootContext-B6U_uFKg.js";import"./tick-DJLdpaHq.js";import"./svgIconContainer-BJy48zyG.js";import"./small-cross-DqyJwNHG.js";import"./search-BBZ2n1GL.js";import"./cross-CCUsZu-F.js";import"./useValueChanged-gLgp5WvO.js";import"./getPseudoElementBounds-MBQcfjsr.js";import"./CompositeItem-CAkiPkQz.js";import"./makeExternalStore-DFJcPXqp.js";import"./BaseForm-BcpS2_X6.js";import"./ActionButton-DNxDDubl.js";import"./Button-Del4UdCp.js";import"./SkeletonBar-CnK8k0Bo.js";import"./Tooltip-DOMen-IA.js";import"./info-sign-zGXpRDVF.js";import"./chevron-up-BpSC9Zv4.js";import"./chevron-down-Bha1TG_6.js";import"./useEventCallback-Dsnixxz2.js";import"./iconLoader-D72S2KKc.js";import"./Switch-gMgBaEJN.js";import"./CompositeRoot-BM14AdfU.js";import"./TimePicker-HvVlYM3O.js";import"./CollapsiblePanel-ByT148KK.js";import"./error-WmDbCKs9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DIfFeIX-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
