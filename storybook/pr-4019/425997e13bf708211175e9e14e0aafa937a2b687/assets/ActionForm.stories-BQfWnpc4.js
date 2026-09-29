import{j as t,g as n}from"./iframe-CN_vvEvV.js";import{A as r}from"./action-form-DCrp6npE.js";import"./preload-helper-WuzznOu3.js";import"./DropdownField-D5NveR3K.js";import"./debounce-DK3ARArn.js";import"./useOsdkClient-DrtQRBcg.js";import"./index-Yn_grBDh.js";import"./Input-D-TN7H1o.js";import"./useBaseUiId-D6GNKrv7.js";import"./useControlled-DY8zlZhG.js";import"./index-DmpSrWu6.js";import"./index-BZSZGkip.js";import"./PopoverPopup-B_u8qz4L.js";import"./InternalBackdrop-cUW2sy_R.js";import"./composite-Dgt1ShdF.js";import"./index-CCC1qb5m.js";import"./getDisabledMountTransitionStyles-BMjHeHnL.js";import"./ToolbarRootContext-DFFN_XcR.js";import"./tick-DRndoMTx.js";import"./svgIconContainer-Cuv7eTan.js";import"./small-cross-Bnuet9W-.js";import"./search-BL454ash.js";import"./cross-BTNfX9AB.js";import"./useValueChanged-BAUdQdKF.js";import"./getPseudoElementBounds-Blrc2Fw3.js";import"./CompositeItem-CUoXO_HL.js";import"./makeExternalStore-DNuR4f-v.js";import"./BaseForm-CXL1mpia.js";import"./ActionButton-DNB_8X09.js";import"./Button-GYys4WHS.js";import"./SkeletonBar-DfT678KI.js";import"./Tooltip-CEURmlww.js";import"./info-sign-CRHMitcY.js";import"./chevron-up-AznQUx3F.js";import"./chevron-down-CuRI24Zn.js";import"./useEventCallback-CKtb97LM.js";import"./iconLoader-Bs9fX1lx.js";import"./Switch-hBaihu-5.js";import"./CompositeRoot-Bq5PblYB.js";import"./TimePicker-iXVnEo6S.js";import"./CollapsiblePanel-Btx1XCpX.js";import"./error-DJd0ydtA.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C7EoGoEb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
