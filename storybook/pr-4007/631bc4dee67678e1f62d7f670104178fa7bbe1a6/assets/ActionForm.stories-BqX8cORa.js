import{j as t,g as n}from"./iframe-BU8GFPxQ.js";import{A as r}from"./action-form-DZXg0NsK.js";import"./preload-helper-BSSMxuAV.js";import"./DropdownField-B8coeO1y.js";import"./debounce-CEAcWSfb.js";import"./useOsdkClient-CxUbeAk0.js";import"./index-Bj-f6_Qj.js";import"./Input-BKDA3F0b.js";import"./useBaseUiId-BwjQR-o4.js";import"./useControlled-D1XH3a1Z.js";import"./index-RL0-TRLi.js";import"./index-BXjwg4tu.js";import"./PopoverPopup-DzgCN5FT.js";import"./InternalBackdrop-4G36EFVK.js";import"./composite-Boe3qmtr.js";import"./index-C_kynsOY.js";import"./getDisabledMountTransitionStyles-DdQ32HlV.js";import"./ToolbarRootContext-C_zt0aic.js";import"./tick-p7Xjilvh.js";import"./svgIconContainer-TGaOK_qc.js";import"./small-cross-ByWRQaND.js";import"./search-BzzxBGZs.js";import"./cross-DWZb8fnb.js";import"./useValueChanged-DEn3Bp16.js";import"./getPseudoElementBounds-CVkJL-hX.js";import"./CompositeItem-CKxdCuih.js";import"./makeExternalStore-BQ9uq3hP.js";import"./BaseForm-Bpmp1csv.js";import"./ActionButton-DwMdzrCh.js";import"./Button-BVSo85zW.js";import"./SkeletonBar-CPA8YoA_.js";import"./Tooltip-_KniFWIt.js";import"./info-sign-C_WMlReo.js";import"./chevron-up-CJMheTzz.js";import"./chevron-down-Cmk3gaNN.js";import"./useEventCallback-DG6Athm7.js";import"./iconLoader-Bf0VGMYw.js";import"./CompositeRoot-CcOKlLIN.js";import"./Switch-DpegqqXJ.js";import"./TimePicker-BkBcxXlJ.js";import"./CollapsiblePanel-DvEibyNb.js";import"./error-DmWc08dY.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-NEaJKOCO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
