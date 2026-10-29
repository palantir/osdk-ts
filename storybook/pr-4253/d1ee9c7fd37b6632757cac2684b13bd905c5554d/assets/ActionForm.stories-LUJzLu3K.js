import{j as t,g as n}from"./iframe-C7u8teZW.js";import{A as r}from"./action-form-DdzyrIsZ.js";import"./preload-helper-BksW-fLa.js";import"./DropdownField-C_ts6lDO.js";import"./debounce-CiptvIy5.js";import"./useOsdkClient-C3xSadaC.js";import"./index-BhN64Vkr.js";import"./Input-CkX7hrVd.js";import"./useBaseUiId-DhUQmONl.js";import"./useControlled-wz_zz6UQ.js";import"./index-ClHt_xjm.js";import"./index-B0vLTinM.js";import"./PopoverPopup-20OsJ-7t.js";import"./InternalBackdrop-CiuI9iXh.js";import"./composite-zfEBFY2E.js";import"./index-BfFTxu65.js";import"./getDisabledMountTransitionStyles-NTCPfN1w.js";import"./ToolbarRootContext-CtUE7M4a.js";import"./tick-yfLFJlQJ.js";import"./svgIconContainer-BCJkHoyI.js";import"./small-cross-BXAWZBeP.js";import"./search-D1b21RXS.js";import"./cross-DxUgqzoH.js";import"./useValueChanged-BeaCU65z.js";import"./getPseudoElementBounds-CERtdroa.js";import"./CompositeItem-DBCCEsi2.js";import"./makeExternalStore-MBK88X8R.js";import"./BaseForm-DmCNKCV0.js";import"./ActionButton-hbhMcRNO.js";import"./Button-ItUG0RJE.js";import"./SkeletonBar-Cx2TnRLV.js";import"./Tooltip-CMWksZUd.js";import"./info-sign-Ds-zk2pX.js";import"./chevron-up-DyfwyxfJ.js";import"./chevron-down-CkA7RfLP.js";import"./useEventCallback-BFNSOXZ0.js";import"./iconLoader-Po9_VsVQ.js";import"./Switch-DWmaaLY2.js";import"./CompositeRoot-ZD0MP6fn.js";import"./TimePicker-by7pI9D0.js";import"./CollapsiblePanel-GTw3JwtT.js";import"./error-CEH3koMg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-GebS3Gu5.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
