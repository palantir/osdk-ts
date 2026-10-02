import{j as t,g as n}from"./iframe-BwJP8SAz.js";import{A as r}from"./action-form-W4UmDCZI.js";import"./preload-helper-C__v2HQV.js";import"./DropdownField-Bgmj7boA.js";import"./debounce-4RuFCHX-.js";import"./useOsdkClient-DNt2UGx3.js";import"./index-B1xmU5ac.js";import"./Input-Biv1kBRN.js";import"./useBaseUiId-C34DKKh6.js";import"./useControlled-ZLl_p6JX.js";import"./index-C-xvBHp4.js";import"./index-Bx66jA38.js";import"./PopoverPopup-Bi4N4TLm.js";import"./InternalBackdrop-KutqEmqy.js";import"./composite-a2q1QDdA.js";import"./index-B0qPlz_Q.js";import"./getDisabledMountTransitionStyles-DUZGhC9n.js";import"./ToolbarRootContext-CBbcQ6qS.js";import"./tick-DOgiNo6k.js";import"./svgIconContainer-DMpafcgu.js";import"./small-cross-C6anClUq.js";import"./search-CesJa2BL.js";import"./cross-DiTZc7QM.js";import"./useValueChanged-o1Jhr7NX.js";import"./getPseudoElementBounds-B49v7X00.js";import"./CompositeItem-BsMyIE9-.js";import"./makeExternalStore-BWpOLj7v.js";import"./BaseForm-BZXP3_DR.js";import"./ActionButton-DMCSebnl.js";import"./Button-C4Q4ezlI.js";import"./SkeletonBar-CizSDGiZ.js";import"./Tooltip-Crxsicsv.js";import"./info-sign-CShJdO_R.js";import"./chevron-up-Dd5v-fVE.js";import"./chevron-down-DSU29Yd7.js";import"./useEventCallback-BFud_X33.js";import"./iconLoader-BGWBE1xQ.js";import"./Switch-iU27Gx1i.js";import"./CompositeRoot-DBOoRp9o.js";import"./TimePicker-m4vHDa7e.js";import"./CollapsiblePanel-Xr396GTI.js";import"./error-DWAlVBAx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CHhNGKv-.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
