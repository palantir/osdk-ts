import{j as t,g as n}from"./iframe-bxHnXZZE.js";import{A as r}from"./action-form-tZlK9xZl.js";import"./preload-helper-7NwT3r5e.js";import"./DropdownField-D9Q5H1vn.js";import"./debounce-BCNGKG7N.js";import"./useOsdkClient-CZNO-BM3.js";import"./index-C6fHHFsn.js";import"./Input-DlQ75Tiv.js";import"./useBaseUiId-QHeSB_uY.js";import"./useControlled-DQ7SFQLa.js";import"./index-fMg1ul0K.js";import"./index-pscJp3QG.js";import"./PopoverPopup-B4w-OJGK.js";import"./InternalBackdrop-DBcnV2IB.js";import"./composite-16NtQKdD.js";import"./index-Dx6jXTMT.js";import"./getDisabledMountTransitionStyles-2zUc2nSg.js";import"./ToolbarRootContext-BNi8FLUA.js";import"./tick-C0QgRHXL.js";import"./svgIconContainer-DFa2cGRe.js";import"./small-cross-rdg52v-X.js";import"./search-B9cWql5S.js";import"./cross-BUbLZE-A.js";import"./useValueChanged-LREb8VW3.js";import"./getPseudoElementBounds-B5V39s0c.js";import"./CompositeItem-Dt9_APYR.js";import"./makeExternalStore-BU1dPe3S.js";import"./BaseForm-vqURSz3r.js";import"./ActionButton-CgLa61YP.js";import"./Button-CnrUq9Aa.js";import"./SkeletonBar-DXwufme4.js";import"./Tooltip-B1qA2z5a.js";import"./info-sign-J9zljXlx.js";import"./chevron-up-L_ZEPEZh.js";import"./chevron-down-MvzNfmay.js";import"./useEventCallback-wa1M1mLo.js";import"./iconLoader-BzBgdt4f.js";import"./Switch-lmmNLin6.js";import"./CompositeRoot-eNfpFpuA.js";import"./TimePicker-CVU_Omfs.js";import"./CollapsiblePanel-BIKCw0VK.js";import"./error-5Rk85rBd.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-iUvejygz.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
