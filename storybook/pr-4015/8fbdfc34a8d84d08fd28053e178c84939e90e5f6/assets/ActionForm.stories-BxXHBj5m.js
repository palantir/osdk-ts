import{j as t,g as n}from"./iframe-Eth4DscF.js";import{A as r}from"./action-form-Do7C5p0U.js";import"./preload-helper-D5DT8Gvv.js";import"./DropdownField-BY08YoHL.js";import"./debounce-Cu_1wwlT.js";import"./useOsdkClient--sVmWpOM.js";import"./index-CaJ3mqr2.js";import"./Input-4EN0R4Wx.js";import"./useBaseUiId-B7RIhr15.js";import"./useControlled-E-2hYUgD.js";import"./index-Cfo3ydBu.js";import"./index-B8aJ10lX.js";import"./PopoverPopup-C3fOznkb.js";import"./InternalBackdrop-CLNMJjbi.js";import"./composite-qIMfmfrB.js";import"./index-DxmuItap.js";import"./getDisabledMountTransitionStyles-B5ZEbLKX.js";import"./ToolbarRootContext-DZvBkO8Q.js";import"./tick-BmqhilVd.js";import"./svgIconContainer-CoGRC72I.js";import"./small-cross-CJlA-_gF.js";import"./search-CJHLYodH.js";import"./cross-BwB0DXiU.js";import"./useValueChanged-BesFItDX.js";import"./getPseudoElementBounds-BtlXh7MV.js";import"./CompositeItem-DlxbA5eX.js";import"./makeExternalStore-2rYtWHIa.js";import"./BaseForm-CT1CMnBw.js";import"./ActionButton-C6R1Vics.js";import"./Button-DxVY95w9.js";import"./SkeletonBar-DiGFHRwx.js";import"./Tooltip-drCTzUWh.js";import"./info-sign-Jwn_3N5U.js";import"./chevron-up-DDlbaCce.js";import"./chevron-down-CqqSfn04.js";import"./useEventCallback-CCdM5L8S.js";import"./iconLoader-DrC83Weq.js";import"./CompositeRoot-BrF6aMnq.js";import"./Switch-Cre8xL3D.js";import"./TimePicker-CTlzC6Mq.js";import"./CollapsiblePanel-yBgFB804.js";import"./error-BXTM1REk.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-HAEG8t0o.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
