import{j as t,g as n}from"./iframe-Ce1nas-A.js";import{A as r}from"./action-form-BDVGKV9s.js";import"./preload-helper-DcZRzKsw.js";import"./DropdownField-CNUDLDKP.js";import"./debounce-BJwq-W7n.js";import"./useOsdkClient-YT7s1JaQ.js";import"./index-DxkusUp0.js";import"./Input-BkD6sM5Z.js";import"./useBaseUiId-DjCVaNnh.js";import"./useControlled-HDcnxMGz.js";import"./index-CuuyYF8k.js";import"./index-C9gjttHq.js";import"./PopoverPopup-D21lDN1V.js";import"./InternalBackdrop-B-W0bTB1.js";import"./composite-DmeYZGjI.js";import"./index-DVNB7RLR.js";import"./getDisabledMountTransitionStyles-DliKnPBx.js";import"./ToolbarRootContext-DETOyxOk.js";import"./tick-Bc-8vFey.js";import"./svgIconContainer-C2K9KBka.js";import"./small-cross-CUbbmEa4.js";import"./search-CeMBlWp8.js";import"./cross-BfauTbl-.js";import"./useValueChanged-CNmQlOiE.js";import"./getPseudoElementBounds-cUIgxq13.js";import"./CompositeItem-Ci-C3Qdf.js";import"./makeExternalStore-pm8795BR.js";import"./BaseForm-Cdzgu3QB.js";import"./ActionButton-CJN2LFZu.js";import"./Button-Dug6UdNF.js";import"./SkeletonBar-CGzZv0LQ.js";import"./Tooltip-D2u6OBrC.js";import"./info-sign-DJd68_x0.js";import"./chevron-up-BJ3NCprr.js";import"./chevron-down-BWpGIUiv.js";import"./useEventCallback-Cbw47kNr.js";import"./iconLoader-i1SLVdoG.js";import"./CompositeRoot-DdpiDHhx.js";import"./Switch-C3c3iBNI.js";import"./TimePicker-BbdhxLxP.js";import"./CollapsiblePanel-BCEUBNV9.js";import"./error-C2DVXeGz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Oy1nTjGv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/experimental";

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
