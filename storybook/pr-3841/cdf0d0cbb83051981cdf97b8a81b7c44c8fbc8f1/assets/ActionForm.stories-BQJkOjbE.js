import{j as t,g as n}from"./iframe-B8cnvOYh.js";import{A as r}from"./action-form-DOD5vGRH.js";import"./preload-helper-LnHSiiGM.js";import"./DropdownField-kPr-3fnd.js";import"./debounce-C4M36uj5.js";import"./useOsdkClient-CNX5cvgx.js";import"./index-B3ykqjKt.js";import"./Input-DjBLxYPn.js";import"./useBaseUiId-BfhiVoPE.js";import"./useControlled-Bd_oVfJe.js";import"./index-Br3P2ZZs.js";import"./index-Btox6Sl3.js";import"./PopoverPopup-ZEHuNINK.js";import"./InternalBackdrop-DBB8A_Xe.js";import"./composite-CpLfOjCv.js";import"./index-BriJK3jE.js";import"./getDisabledMountTransitionStyles-BS_53I9A.js";import"./ToolbarRootContext-GOwsslzm.js";import"./tick-C0_exER5.js";import"./svgIconContainer-DXuXKKtJ.js";import"./small-cross-CAHXVf7A.js";import"./search-Dy-VZ8UW.js";import"./cross-CRSXtga6.js";import"./useValueChanged-W50UaXFT.js";import"./getPseudoElementBounds-nJ_aPL17.js";import"./CompositeItem-BZ4KTjXl.js";import"./makeExternalStore-D8SbLzm4.js";import"./BaseForm-B6La2dPL.js";import"./ActionButton-B9jE2LPd.js";import"./Button-BXcD7GGd.js";import"./SkeletonBar-DpIUlSQd.js";import"./Tooltip-C7t2fm4N.js";import"./info-sign-rjm_A1p-.js";import"./chevron-up-6l7dLMhq.js";import"./chevron-down-CKQT8552.js";import"./useEventCallback-CWz421aU.js";import"./iconLoader-BsVuH0ig.js";import"./CompositeRoot-BGdctOya.js";import"./Switch-COJXeWu9.js";import"./TimePicker-C6S5aG0g.js";import"./CollapsiblePanel-DYmS8znM.js";import"./error-Bttrd0IT.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dc0ezLCb.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
