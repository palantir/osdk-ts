import{j as t,g as n}from"./iframe-DZdi5qVl.js";import{A as r}from"./action-form-B05G5IhK.js";import"./preload-helper-Uouo8HcN.js";import"./DropdownField-xv8_ACXP.js";import"./debounce-BSOX5tNy.js";import"./useOsdkClient-D0sO6BtF.js";import"./index-Bg61eIIa.js";import"./Input-I_C95g_4.js";import"./useBaseUiId-Mz3L6_Ly.js";import"./useControlled-BxMGJ1iI.js";import"./index-CVgHOiGf.js";import"./index-DFxmPpXp.js";import"./PopoverPopup-CSHu41HL.js";import"./InternalBackdrop-vWueL81t.js";import"./composite-D3C2nmMl.js";import"./index-CK_zKJ7H.js";import"./getDisabledMountTransitionStyles-Bgmfz7Hi.js";import"./ToolbarRootContext-CRfH5r80.js";import"./tick-CSSMXgbf.js";import"./svgIconContainer-DxhMpPws.js";import"./small-cross-DP0jWCcr.js";import"./search-1yJPrdVL.js";import"./cross-B9sTw1kj.js";import"./useValueChanged-4m8KuuR6.js";import"./getPseudoElementBounds-CVv7wXsz.js";import"./CompositeItem-CidR49nz.js";import"./makeExternalStore-COQibzUC.js";import"./BaseForm-D6qzMgHP.js";import"./ActionButton-Dh4c5JV5.js";import"./Button-Bc-yRCfH.js";import"./SkeletonBar-D7h-d6LQ.js";import"./Tooltip-CUbiiQ57.js";import"./info-sign-gPrFGUGN.js";import"./chevron-up-DH0JxGmo.js";import"./chevron-down-DWbMZGTs.js";import"./useEventCallback-CHzTdRmo.js";import"./iconLoader-C1DJl5pc.js";import"./Switch-BBKEiTgC.js";import"./CompositeRoot-DWpC5yO1.js";import"./TimePicker-Ce5_NTsM.js";import"./CollapsiblePanel-CaTF9gHO.js";import"./error-CzW1HZwX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CA01Qt6R.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
