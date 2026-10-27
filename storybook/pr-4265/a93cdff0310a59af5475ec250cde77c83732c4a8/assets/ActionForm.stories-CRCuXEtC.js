import{j as t,g as n}from"./iframe-DT3_qYOR.js";import{A as r}from"./action-form-C10jdN2C.js";import"./preload-helper-DJcbeZXn.js";import"./DropdownField-B0T5PFQN.js";import"./debounce-CFakeUey.js";import"./useOsdkClient-CznSanA6.js";import"./index-Bms-eX8O.js";import"./Input-Lzcgvy8p.js";import"./useBaseUiId-Btj_fTu8.js";import"./useControlled-CTkDHUnO.js";import"./index-BgPwEE_0.js";import"./index-BqtCGU3q.js";import"./PopoverPopup-Dx9-HY9B.js";import"./InternalBackdrop-MxsP_9qP.js";import"./composite-CY9Hfsj0.js";import"./index-6H1C3WRO.js";import"./getDisabledMountTransitionStyles-DjG_Q61Q.js";import"./ToolbarRootContext-DRepvQNE.js";import"./tick-B8N-pAWH.js";import"./svgIconContainer-Dzwe0jqD.js";import"./small-cross-BRV7Mx-Q.js";import"./search-mMYnAHur.js";import"./cross-DsVapprp.js";import"./useValueChanged-ObbzXgJ2.js";import"./getPseudoElementBounds-BwMDZbAq.js";import"./CompositeItem-DAx93KY8.js";import"./makeExternalStore-xyuIW0T9.js";import"./BaseForm-CF2sCcP7.js";import"./ActionButton-CoR5hB92.js";import"./Button-URBwxfkh.js";import"./SkeletonBar-CnPcaADz.js";import"./Tooltip-DwSDVBmI.js";import"./info-sign-D3p871XP.js";import"./chevron-up-tzlIvMDo.js";import"./chevron-down-CQZ2GZcC.js";import"./useEventCallback-BU0W5FVD.js";import"./iconLoader-DFw1zE-Q.js";import"./Switch-BY8Pic8Y.js";import"./CompositeRoot-ykWtA3-w.js";import"./TimePicker-DCM2dWsC.js";import"./CollapsiblePanel-DspifK_d.js";import"./error-CfEF0UDB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-pibb9djU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
