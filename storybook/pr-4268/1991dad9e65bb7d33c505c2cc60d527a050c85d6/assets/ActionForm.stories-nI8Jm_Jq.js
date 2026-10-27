import{j as t,g as n}from"./iframe-BaflQOGd.js";import{A as r}from"./action-form-Q3dMsM2x.js";import"./preload-helper-p4HJijQg.js";import"./DropdownField-BKcx8XSW.js";import"./debounce-Bxc3LUXI.js";import"./useOsdkClient-BRi0iGfs.js";import"./index-Cdh_dFWj.js";import"./Input-C7CjAQyY.js";import"./useBaseUiId-pk7UMSg-.js";import"./useControlled-BHd0pcmo.js";import"./index-BbhGUNVZ.js";import"./index-8FM1YS3J.js";import"./PopoverPopup-wC024HyS.js";import"./InternalBackdrop-BXpufEJp.js";import"./composite-Bz466JDP.js";import"./index-gtiiyw16.js";import"./getDisabledMountTransitionStyles-Zf4kfjLM.js";import"./ToolbarRootContext-CwJdNdBU.js";import"./tick-DGqr-KEb.js";import"./svgIconContainer-C8p2nfID.js";import"./small-cross-CskAyC0y.js";import"./search-BBcvVFuT.js";import"./cross-BGrOCP65.js";import"./useValueChanged-BkzyuB8t.js";import"./getPseudoElementBounds-CHW9P6Nq.js";import"./CompositeItem-nIPenTO0.js";import"./makeExternalStore-C2juSaVb.js";import"./BaseForm-DhHtdwVz.js";import"./ActionButton-DIqkcEFC.js";import"./Button-Bdo2X4x8.js";import"./SkeletonBar-p10R1lcv.js";import"./Tooltip-BRluqZVE.js";import"./info-sign-DXDcT1Cb.js";import"./chevron-up-B9vqlMsz.js";import"./chevron-down-Cnmtw8e6.js";import"./useEventCallback-CKswwic-.js";import"./iconLoader-CRpcWbiG.js";import"./Switch-4NinpUGy.js";import"./CompositeRoot-SWHLt1FW.js";import"./TimePicker-DykilkwG.js";import"./CollapsiblePanel-BDr9gif1.js";import"./error-DIEj2ztu.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CP1M_ZfY.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
