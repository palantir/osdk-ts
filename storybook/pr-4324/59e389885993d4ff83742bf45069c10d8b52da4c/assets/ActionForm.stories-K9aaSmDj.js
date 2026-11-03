import{j as t,g as n}from"./iframe-Beajvbu-.js";import{A as r}from"./action-form-DWL7t5PE.js";import"./preload-helper-dZkoR4F_.js";import"./DropdownField-B3UK3okG.js";import"./debounce-DMOv5NrL.js";import"./useOsdkClient-DkQyt0z3.js";import"./index-AV0Zt5q4.js";import"./Input-CusKMl7d.js";import"./useBaseUiId-D9Gk7Ps8.js";import"./useControlled-BgXewBwk.js";import"./index-DJbbiMo-.js";import"./index-DHfuPCUx.js";import"./PopoverPopup-CLmwgmKW.js";import"./InternalBackdrop-CaxlX099.js";import"./composite-B77JxL2r.js";import"./index-CigOb2f9.js";import"./getDisabledMountTransitionStyles-2F0S6DHA.js";import"./ToolbarRootContext-DQCYszJ6.js";import"./tick-ByR4FmU5.js";import"./svgIconContainer-BOWvIcxU.js";import"./small-cross-CBKgWU-e.js";import"./search-WL4FSHko.js";import"./cross-KOMA-dmo.js";import"./useValueChanged-C6EHjupA.js";import"./getPseudoElementBounds-BvsNaSZR.js";import"./CompositeItem-Dxfd76IV.js";import"./makeExternalStore-t469AycL.js";import"./BaseForm-xsKzGE1E.js";import"./ActionButton-RaZCtRc3.js";import"./Button-D4EG1oUS.js";import"./SkeletonBar-DjvCRCop.js";import"./Tooltip-C0_dK_lR.js";import"./info-sign-DPEw_oLo.js";import"./chevron-up-CgFVH5HQ.js";import"./chevron-down-BTZVhACL.js";import"./useEventCallback-BvQAVvQb.js";import"./iconLoader-DT8IdTCB.js";import"./Switch-Bl757_8h.js";import"./CompositeRoot-X2byanou.js";import"./TimePicker-cq27W6zv.js";import"./CollapsiblePanel-DRA-iOzD.js";import"./error-DahJGZf3.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-QZ1lgR_i.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
