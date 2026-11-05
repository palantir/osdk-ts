import{j as t,g as n}from"./iframe-DbsqonCE.js";import{A as r}from"./action-form-BBKAmXRm.js";import"./preload-helper-j-tWLxPO.js";import"./DropdownField-jTLe7uIN.js";import"./debounce-BsTQJeH4.js";import"./useOsdkClient-5br-viQH.js";import"./index-BcP7gLrZ.js";import"./Input-CUOKus6W.js";import"./useBaseUiId-mLSoMawn.js";import"./useControlled-DjGJelPK.js";import"./index-BeGCx8DT.js";import"./index-sTgTffNL.js";import"./PopoverPopup-hUOJJqgD.js";import"./InternalBackdrop-BBrETTbv.js";import"./composite-CWSSZekk.js";import"./index-CPbyyhi1.js";import"./getDisabledMountTransitionStyles-DjGsekTm.js";import"./ToolbarRootContext-Dy_E221D.js";import"./tick-Dw_xLuw5.js";import"./svgIconContainer-dTQS0Q1O.js";import"./small-cross-Bz1qN0Fj.js";import"./search-CKNMsX_Q.js";import"./cross-CjgfYmIf.js";import"./useValueChanged-DhjL6tSV.js";import"./getPseudoElementBounds-DTkCd2MG.js";import"./CompositeItem-ClfgExBb.js";import"./makeExternalStore-C9jMv8gA.js";import"./BaseForm-Z9Z3R44t.js";import"./ActionButton-eD9eoVja.js";import"./Button-CuTOWFQU.js";import"./SkeletonBar-Cqg3iKwl.js";import"./Tooltip-DXmh_6cJ.js";import"./info-sign-DgXL53WC.js";import"./chevron-up-CUypRg05.js";import"./chevron-down-C_Jq6VbG.js";import"./useEventCallback-C5plIhZm.js";import"./iconLoader-CexKZVQ0.js";import"./Switch-i9MTXJKp.js";import"./CompositeRoot-CrT5nmMY.js";import"./TimePicker-BNyaQunr.js";import"./CollapsiblePanel-CeGg5-MP.js";import"./error-Cdk7CynS.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D9Ly-VH2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
