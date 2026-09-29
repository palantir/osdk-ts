import{j as t,g as n}from"./iframe-zPv4Qzqd.js";import{A as r}from"./action-form-BXcIeb3v.js";import"./preload-helper-PJxV9mQF.js";import"./DropdownField-CqnJScbI.js";import"./debounce-BrLoezJi.js";import"./useOsdkClient-BGVTEbj_.js";import"./index-CBKHTxLZ.js";import"./Input-BZ1hKq3S.js";import"./useBaseUiId-DVjOyWmw.js";import"./useControlled-0ViRdTwH.js";import"./index-LSfGN98D.js";import"./index-Dqw7fhLs.js";import"./PopoverPopup-D_yXP70P.js";import"./InternalBackdrop-CBe1boE7.js";import"./composite-B2SBl57g.js";import"./index-CNxBS-8s.js";import"./getDisabledMountTransitionStyles-Ck2s3g2H.js";import"./ToolbarRootContext-CKYx1umj.js";import"./tick-DG8Ui0fG.js";import"./svgIconContainer-vb3o1rNS.js";import"./small-cross-VYccQ32Y.js";import"./search-CQlxqsQe.js";import"./cross--dxagHok.js";import"./useValueChanged-n6G7gR_P.js";import"./getPseudoElementBounds-NPMWYZIY.js";import"./CompositeItem-CdWRe_DK.js";import"./makeExternalStore-Bpbj6CnC.js";import"./BaseForm-DiK-5iEs.js";import"./ActionButton-BfWfVjYe.js";import"./Button-Bpg2U0NI.js";import"./SkeletonBar-YCmzJufB.js";import"./Tooltip-DVU7TgEy.js";import"./info-sign-DOfheCGQ.js";import"./chevron-up-CFXIk0Il.js";import"./chevron-down-Bq07BQjw.js";import"./useEventCallback-DQ_0G6aA.js";import"./iconLoader-CSEbUI6x.js";import"./Switch-C48tHmvr.js";import"./CompositeRoot-BfSNPEGA.js";import"./TimePicker-I9-3UmrO.js";import"./CollapsiblePanel-BFa8buwC.js";import"./error-DWSHpljN.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DD1axzdT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
