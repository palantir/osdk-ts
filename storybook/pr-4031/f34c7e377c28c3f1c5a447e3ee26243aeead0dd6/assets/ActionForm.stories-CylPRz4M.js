import{j as t,g as n}from"./iframe-DbTMqywr.js";import{A as r}from"./action-form-BlYy5XWP.js";import"./preload-helper-CplCMsOq.js";import"./DropdownField-AShWiiqn.js";import"./debounce-BgRvR_Oe.js";import"./useOsdkClient-T0bLDe_N.js";import"./index-DrdNpw1u.js";import"./Input-BLknSyNo.js";import"./useBaseUiId-kPb3HUGs.js";import"./useControlled-DbEVD0lO.js";import"./index-B_vDPu9R.js";import"./index-BCeNJbNy.js";import"./PopoverPopup-yvtzY1iK.js";import"./InternalBackdrop-C2r_bKtU.js";import"./composite-EoFmCbIV.js";import"./index-D8QZGzUD.js";import"./getDisabledMountTransitionStyles-CKr3XGAi.js";import"./ToolbarRootContext-D1MHZAC5.js";import"./tick-Dk-mGEMR.js";import"./svgIconContainer-1kdK0av6.js";import"./small-cross-Ch5rXEbe.js";import"./search-CUcR83Lr.js";import"./cross-D4suWXRq.js";import"./useValueChanged-bqR-PJWE.js";import"./getPseudoElementBounds-H03pfPE9.js";import"./CompositeItem-hF1oPeOK.js";import"./makeExternalStore-mtSSB5CA.js";import"./BaseForm-CRy24wUI.js";import"./ActionButton-L8rz2KEU.js";import"./Button-B7bNBfe0.js";import"./SkeletonBar-DxAs7_Je.js";import"./Tooltip-X97LD_qB.js";import"./info-sign-DzlDlXWf.js";import"./chevron-up-B7W8AI3f.js";import"./chevron-down-Bh3KWvIp.js";import"./useEventCallback-BukFJMlj.js";import"./iconLoader-Cy3O06LB.js";import"./Switch-D1Z-PxNK.js";import"./CompositeRoot-B-w8dHhW.js";import"./TimePicker-BVgmFx2c.js";import"./CollapsiblePanel-C4Fd8GWr.js";import"./error-Du92aaZX.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C049M_96.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
