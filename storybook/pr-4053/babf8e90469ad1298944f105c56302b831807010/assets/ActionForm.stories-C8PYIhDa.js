import{j as t,g as n}from"./iframe-C2B-VFRS.js";import{A as r}from"./action-form-D69uIQAr.js";import"./preload-helper-gVkjcPWs.js";import"./DropdownField-RoShH29N.js";import"./debounce-B7lhl0_T.js";import"./useOsdkClient-GURrMHyG.js";import"./index-CibutWy_.js";import"./Input-FVPyTFRQ.js";import"./useBaseUiId-VQFtxAep.js";import"./useControlled-BCVnds_y.js";import"./index-DV_a4T4n.js";import"./index-BPBEeE2g.js";import"./PopoverPopup-Bl_99L64.js";import"./InternalBackdrop-CJYBMOj7.js";import"./composite-C2cqujK-.js";import"./index-CHTq1_qN.js";import"./getDisabledMountTransitionStyles-CuVxlwmy.js";import"./ToolbarRootContext-CfiR31pw.js";import"./tick-EdYP3z7-.js";import"./svgIconContainer-CM1uLq-t.js";import"./small-cross-Cz9QG-kv.js";import"./search-BLJN7rrF.js";import"./cross-mlHeLHgf.js";import"./useValueChanged-RJlV-1X-.js";import"./getPseudoElementBounds-KVjV016-.js";import"./CompositeItem-CfE-UZcL.js";import"./makeExternalStore-D8T9YNbX.js";import"./BaseForm-CI2v7pi5.js";import"./ActionButton-D85etQjf.js";import"./Button-Mk-BPYCM.js";import"./SkeletonBar-DWukyqXK.js";import"./Tooltip-DnchQPHR.js";import"./info-sign-BZrZOc4F.js";import"./chevron-up-BbSY1X_p.js";import"./chevron-down-BhxKf9kJ.js";import"./useEventCallback-BashrAx4.js";import"./iconLoader-BiRiuo4q.js";import"./Switch-_xd2spfX.js";import"./CompositeRoot-s3xLWfTO.js";import"./TimePicker-DzStJ59d.js";import"./CollapsiblePanel-DS7gWxno.js";import"./error-qCP94tkU.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CLj2Tgqh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
