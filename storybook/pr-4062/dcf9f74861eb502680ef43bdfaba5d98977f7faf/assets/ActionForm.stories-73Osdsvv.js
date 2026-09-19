import{j as t,g as n}from"./iframe-BTDvHL3g.js";import{A as r}from"./action-form-BekIXyK5.js";import"./preload-helper-D9Z_UkK8.js";import"./DropdownField-BQkHbNRZ.js";import"./debounce-CuJqoMgC.js";import"./useOsdkClient-BUTuIt2q.js";import"./index-C2WocGyz.js";import"./Input-B9motj4l.js";import"./useBaseUiId-Ca42jcOp.js";import"./useControlled-DZa6FNla.js";import"./index-CtTeoyvV.js";import"./index-Cs7K0AYs.js";import"./PopoverPopup-DgDU7fL-.js";import"./InternalBackdrop-DvugTWWQ.js";import"./composite-CR_T3dDP.js";import"./index-CI1rDDbd.js";import"./getDisabledMountTransitionStyles-BdwhjLM3.js";import"./ToolbarRootContext-D_KZXAup.js";import"./tick-pW-8BtNc.js";import"./svgIconContainer-Dt86stim.js";import"./small-cross-AHNwKH-0.js";import"./search-BZZDgwTx.js";import"./cross-Cp0W9YlM.js";import"./useValueChanged-LafOKdn0.js";import"./getPseudoElementBounds-DRV3tTt5.js";import"./CompositeItem-SQA_IIyG.js";import"./makeExternalStore-D99Ax1Zi.js";import"./BaseForm-QB5XJgGO.js";import"./ActionButton-DKYyXSbF.js";import"./Button-2AhFByte.js";import"./SkeletonBar-4ynmEfK8.js";import"./Tooltip-CUxqTMTK.js";import"./info-sign-iqndLPPr.js";import"./chevron-up-C1KNjqHU.js";import"./chevron-down-B2G_smGI.js";import"./useEventCallback-Djm2_lIv.js";import"./iconLoader-BJSVmid2.js";import"./Switch-rThwCiJt.js";import"./CompositeRoot-DjSKGjLy.js";import"./TimePicker-DprZceGe.js";import"./CollapsiblePanel-Xwe8c9pF.js";import"./error-7FvWp7D0.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BVhEzQUJ.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
