import{j as t,g as n}from"./iframe-tJoiUnOU.js";import{A as r}from"./action-form-lgor4_ln.js";import"./preload-helper-q_roJb3L.js";import"./DropdownField-CVHEoHqX.js";import"./debounce-CkWR7YVQ.js";import"./useOsdkClient-C-pct-id.js";import"./index-wkjAOCKp.js";import"./Input-Dbo8bi4g.js";import"./useBaseUiId-BiDCPQhp.js";import"./useControlled-B_scRK6a.js";import"./index-D3jnN6Jh.js";import"./index-VD2PRP19.js";import"./PopoverPopup-D2CFDvFx.js";import"./InternalBackdrop-CiNn4aLK.js";import"./composite-DOEUwxcs.js";import"./index-SeseWBh6.js";import"./getDisabledMountTransitionStyles-D1n5Dxzz.js";import"./ToolbarRootContext-ekETqF8a.js";import"./tick-CFI6xm9s.js";import"./svgIconContainer-D0F8gB11.js";import"./small-cross-C-UfEnxt.js";import"./search-CgsmrxMy.js";import"./cross-6Rc2LF7n.js";import"./useValueChanged-BXd8sVHl.js";import"./getPseudoElementBounds-CXXoJKvV.js";import"./CompositeItem-BDVYJdc3.js";import"./makeExternalStore-nQCgHpFY.js";import"./BaseForm-72mRsmna.js";import"./ActionButton-CiYF1Zig.js";import"./Button-D_5bqoFg.js";import"./SkeletonBar-cCyX40Gf.js";import"./Tooltip-P6WDKgxT.js";import"./info-sign-Bc-14rVc.js";import"./chevron-up-BFkKNiN6.js";import"./chevron-down-CUB7Aj2S.js";import"./useEventCallback-CPmd0Kz4.js";import"./iconLoader-BKeJezzC.js";import"./CompositeRoot-DM2Hbp5W.js";import"./Switch-DnuC68du.js";import"./TimePicker-AwWIm58b.js";import"./CollapsiblePanel-fXxTLN8h.js";import"./error-B-PeBpWB.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DhS6V5OD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
