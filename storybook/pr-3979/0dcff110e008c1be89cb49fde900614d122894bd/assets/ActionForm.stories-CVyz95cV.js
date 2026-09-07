import{j as t,g as n}from"./iframe-vkoUEtx2.js";import{A as r}from"./action-form-B15LuSWz.js";import"./preload-helper-CY67mq_z.js";import"./DropdownField-B5znI0v8.js";import"./debounce-B3rNx3B-.js";import"./useOsdkClient-1czjWT3K.js";import"./index-CnABB2cx.js";import"./Input-DILwrgB_.js";import"./useBaseUiId-Cn9qEQr-.js";import"./useControlled-BjJao8Of.js";import"./index-Cg_Ca4SJ.js";import"./index-CTa-81VF.js";import"./PopoverPopup-DmfHqgAT.js";import"./InternalBackdrop-DvtCmbub.js";import"./composite-CNJa8zsy.js";import"./index-BzU6qHej.js";import"./getDisabledMountTransitionStyles-t_o23Sl1.js";import"./ToolbarRootContext-DG-oSyQ3.js";import"./tick-OUtJmbiv.js";import"./svgIconContainer-CTvbg6Kf.js";import"./small-cross-CEVVBQcQ.js";import"./search-BJuRvFPW.js";import"./cross-DTB4NCzU.js";import"./useValueChanged-BU9oYbVe.js";import"./getPseudoElementBounds-DQfoju0G.js";import"./CompositeItem-B2YXnViz.js";import"./makeExternalStore-BZrOFzyq.js";import"./BaseForm-6DSpHTR6.js";import"./ActionButton-DC04mOud.js";import"./Button-yBKPIwwM.js";import"./SkeletonBar-r9iUkffY.js";import"./Tooltip-BP2G_ScW.js";import"./info-sign-BlyNh9zd.js";import"./chevron-up-DJZspjx-.js";import"./chevron-down-B0GhQ5QL.js";import"./useEventCallback-CxBnJXYy.js";import"./iconLoader-BdYCjDtv.js";import"./CompositeRoot-DLGY_SvR.js";import"./Switch-vRC5CDHY.js";import"./TimePicker-Bh8StvBq.js";import"./CollapsiblePanel-DCq2pf_O.js";import"./error-WzD0MOfh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-1oalfrhO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
