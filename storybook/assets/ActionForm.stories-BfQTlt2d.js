import{j as t,g as n}from"./iframe-C5F37WDS.js";import{A as r}from"./action-form-CbFM1Men.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-BAopx9eZ.js";import"./debounce-CpEt3hrx.js";import"./useOsdkClient-CmCMz8RV.js";import"./index-DPmfEXn1.js";import"./Input-CoBEe8YJ.js";import"./useBaseUiId-BGreBnEl.js";import"./useControlled-BmU56l0K.js";import"./index-_URA0IQM.js";import"./index-DUd2_GTy.js";import"./PopoverPopup-B2-_t_Ne.js";import"./InternalBackdrop-B09mEpfb.js";import"./composite-CGgdtCoR.js";import"./index-kMdysijy.js";import"./getDisabledMountTransitionStyles-DT_lvr6t.js";import"./ToolbarRootContext-DTMhtNND.js";import"./tick-B0_SpxmY.js";import"./svgIconContainer-D5Hoa2ds.js";import"./small-cross-DpbbqTEW.js";import"./search-KDPiG0C3.js";import"./cross-CPshxXyQ.js";import"./useValueChanged-Dyau8co3.js";import"./getPseudoElementBounds-DbutmOr_.js";import"./CompositeItem-CkXf7jgb.js";import"./makeExternalStore-BJFp2_WD.js";import"./BaseForm-QtHJfsR7.js";import"./ActionButton-B_JHD4Kz.js";import"./Button-eBDyeEgi.js";import"./SkeletonBar-COnO3nFT.js";import"./Tooltip-Qr9uHTcA.js";import"./info-sign-DIuCo-Rq.js";import"./chevron-up-DKd8Cyr0.js";import"./chevron-down--665Ugn9.js";import"./useEventCallback-CnBtcH3P.js";import"./iconLoader-DQQr0Vfe.js";import"./CompositeRoot-HvUX-EuB.js";import"./Switch-YqA5h4p_.js";import"./TimePicker-DmyPZmOP.js";import"./CollapsiblePanel-CZBHX6_H.js";import"./error-BZcVMBoG.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BPZHiAPa.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
