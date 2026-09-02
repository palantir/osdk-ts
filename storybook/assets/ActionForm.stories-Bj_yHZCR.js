import{j as t,g as n}from"./iframe-DasplHZn.js";import{A as r}from"./action-form-CbVyW__G.js";import"./preload-helper-Dp1pzeXC.js";import"./DropdownField-DU2AXbuh.js";import"./debounce-BpiLVUTF.js";import"./useOsdkClient-CN1EBquJ.js";import"./index-CeKhiTUl.js";import"./Input-CTs-cY20.js";import"./useBaseUiId-CFSgFdOV.js";import"./useControlled-b2VLkkxd.js";import"./index-BtmJPZwK.js";import"./index-BbWiAGjR.js";import"./PopoverPopup-VT8gRiL_.js";import"./InternalBackdrop-CIHUWHdh.js";import"./composite-BErfcKSH.js";import"./index-C-eBgv4u.js";import"./getDisabledMountTransitionStyles-CrxqcUcl.js";import"./ToolbarRootContext-Dd8U4Uqb.js";import"./tick-VePuyXuh.js";import"./svgIconContainer-4_eO9YAc.js";import"./small-cross-CV_LKxqx.js";import"./search-DjIePqPD.js";import"./cross-CGwwcGII.js";import"./useValueChanged-DgCa_hX9.js";import"./getPseudoElementBounds-Bp3hKR1m.js";import"./CompositeItem-zs15jyVw.js";import"./makeExternalStore-Ce3vwrCY.js";import"./BaseForm-BmIoN_-m.js";import"./ActionButton-BUjGAXRA.js";import"./Button-CUXeq1Mn.js";import"./SkeletonBar-CEfYCKcu.js";import"./Tooltip-G1YFAziJ.js";import"./info-sign-ay6JeUct.js";import"./chevron-up-DFmBdcUS.js";import"./chevron-down-Clwkouj3.js";import"./useEventCallback-CWGG1_eM.js";import"./iconLoader-3HNd4iIm.js";import"./CompositeRoot-CBKnErdx.js";import"./Switch-BKBGg45G.js";import"./TimePicker-Q3qSQJea.js";import"./CollapsiblePanel-BNcZUxvE.js";import"./error-DJObYT-e.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DI4FVnTC.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
        code: \`import { ActionForm } from "@osdk/react-components/experimental";

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
