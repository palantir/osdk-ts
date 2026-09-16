import{j as t,g as n}from"./iframe-B151MY39.js";import{A as r}from"./action-form-CJzakKgh.js";import"./preload-helper-DjBvu03A.js";import"./DropdownField-CwwIu_a4.js";import"./debounce-BOhPi2_d.js";import"./useOsdkClient-O0WN_-TA.js";import"./index-D4Ktja5K.js";import"./Input-BdL2sxgE.js";import"./useBaseUiId-B-w6rIot.js";import"./useControlled-hVx5IBvW.js";import"./index-_YRtSbhr.js";import"./index-K9vP9MSb.js";import"./PopoverPopup-G017xcEQ.js";import"./InternalBackdrop-ClpqOn9m.js";import"./composite-DsqMStnD.js";import"./index-CbZBg5h_.js";import"./getDisabledMountTransitionStyles-Cs8S1gEh.js";import"./ToolbarRootContext-CRksDvpW.js";import"./tick-CyZYyki1.js";import"./svgIconContainer-BLEuJ5z1.js";import"./small-cross-CYn2ZJWp.js";import"./search-Cy5Pb8DF.js";import"./cross-DQu9BvYN.js";import"./useValueChanged-INCVVQ2-.js";import"./getPseudoElementBounds-D90KllDw.js";import"./CompositeItem-DsqHLl_J.js";import"./makeExternalStore-DSGfAMdD.js";import"./BaseForm-xKlJGn9p.js";import"./ActionButton-zvOE960M.js";import"./Button-D77_sTH4.js";import"./SkeletonBar-B37BkS3P.js";import"./Tooltip-Dx4JilCx.js";import"./info-sign-DJHt57C2.js";import"./chevron-up-C-piif9x.js";import"./chevron-down-C7ZT7QCO.js";import"./useEventCallback-D9a4k8dW.js";import"./iconLoader-D7ETSv3p.js";import"./Switch-Dzr1E5IC.js";import"./CompositeRoot-ECSxg4XD.js";import"./TimePicker-CdkU1UCl.js";import"./CollapsiblePanel-aefLeZnL.js";import"./error-BXj6iPTB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bw9JRCxa.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
