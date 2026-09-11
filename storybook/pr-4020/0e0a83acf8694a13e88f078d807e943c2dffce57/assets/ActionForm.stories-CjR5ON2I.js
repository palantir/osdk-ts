import{j as t,g as n}from"./iframe-t6gOiOpP.js";import{A as r}from"./action-form-C_lrxfFs.js";import"./preload-helper-CV5pzfbJ.js";import"./DropdownField-BxmxCkTC.js";import"./debounce-7GEDpMki.js";import"./useOsdkClient-lwd_qzlK.js";import"./index-B8f3749n.js";import"./Input-DFrbhTU8.js";import"./useBaseUiId-D0UWHXkS.js";import"./useControlled-BZFiwdLD.js";import"./index-DaGdI8vt.js";import"./index-8kYg-C7M.js";import"./PopoverPopup-C9ka-zpy.js";import"./InternalBackdrop--ckurpTO.js";import"./composite-CFO_COst.js";import"./index-DxstgvF0.js";import"./getDisabledMountTransitionStyles-CvywptPR.js";import"./ToolbarRootContext-DZ6RrQxV.js";import"./tick-DyExF_WY.js";import"./svgIconContainer-B5Lj2eIE.js";import"./small-cross-6H0sIvkE.js";import"./search-DBk5UsI-.js";import"./cross-DD5o22Zb.js";import"./useValueChanged-DdQntC3G.js";import"./getPseudoElementBounds-U7mN2tqj.js";import"./CompositeItem-BYApWBRb.js";import"./makeExternalStore-Y2a1OF7x.js";import"./BaseForm-C8Oio2og.js";import"./ActionButton-lPYhjhek.js";import"./Button-CSkSEq0A.js";import"./SkeletonBar-CM0U4JXQ.js";import"./Tooltip-C6huUy0h.js";import"./info-sign-BtBOLZ72.js";import"./chevron-up-CcFOAH3K.js";import"./chevron-down-DJ9UCW_x.js";import"./useEventCallback-Ch6gIkUP.js";import"./iconLoader-CFzc-mVn.js";import"./CompositeRoot-BEpYd6BS.js";import"./Switch-B3lSxWE_.js";import"./TimePicker-DIZZKK2g.js";import"./CollapsiblePanel-Z1wCWvPx.js";import"./error-CgIajBJj.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bdbjb4hh.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
