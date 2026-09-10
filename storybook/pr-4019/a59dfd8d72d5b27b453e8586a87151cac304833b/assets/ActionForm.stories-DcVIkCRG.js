import{j as t,g as n}from"./iframe-BP2VUYWC.js";import{A as r}from"./action-form-CBw-JSJn.js";import"./preload-helper-BbwyyhLF.js";import"./DropdownField-GomfOeRU.js";import"./debounce-2s8xu7yX.js";import"./useOsdkClient-CuR5pRcj.js";import"./index-B3KCIuhY.js";import"./Input-DpmPrvJG.js";import"./useBaseUiId-CYXU-WIp.js";import"./useControlled-CeB8N0Pd.js";import"./index-NspJIeyA.js";import"./index-DhixDc4A.js";import"./PopoverPopup-wwj7egFy.js";import"./InternalBackdrop-r9gAECWy.js";import"./composite-DVGPAs_G.js";import"./index-DaoL6F_8.js";import"./getDisabledMountTransitionStyles-DOtULwnT.js";import"./ToolbarRootContext-Dpyy3jMP.js";import"./tick-Z8pTNBDG.js";import"./svgIconContainer-CMKl73gN.js";import"./small-cross-RfyOkJqj.js";import"./search-DINZsCiw.js";import"./cross-DeTD0CpU.js";import"./useValueChanged-z-dahWB0.js";import"./getPseudoElementBounds-Blw9_fDf.js";import"./CompositeItem-CSy4C5-C.js";import"./makeExternalStore-BtzD4IhM.js";import"./BaseForm-Bi0W0-en.js";import"./ActionButton-P7WnwUh9.js";import"./Button-pnZeIBQ4.js";import"./SkeletonBar-9y-j050X.js";import"./Tooltip-DIJzoANq.js";import"./info-sign-DEBXGLgo.js";import"./chevron-up-BgJMdGcr.js";import"./chevron-down-DV6qQJYt.js";import"./useEventCallback-BDFp3vdh.js";import"./iconLoader-B8DV_5jT.js";import"./CompositeRoot-Bx2Zrm7f.js";import"./Switch-zelBxfQZ.js";import"./TimePicker-DW7SShSc.js";import"./CollapsiblePanel-BIqJgZTu.js";import"./error-CPXKUEGb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CDKAmrIU.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
