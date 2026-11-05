import{j as t,g as n}from"./iframe-CSMdLy_I.js";import{A as r}from"./action-form-De9bgp0t.js";import"./preload-helper-BCwYmOqM.js";import"./DropdownField-DIrWqSq3.js";import"./debounce-Bv9TTPnt.js";import"./useOsdkClient-DQvQ58tC.js";import"./index-DGS2fgyr.js";import"./Input-4tMRpSwt.js";import"./useBaseUiId-DtXDl3EO.js";import"./useControlled-gwPjRggQ.js";import"./index-BhZRCTRM.js";import"./index-DLB3_ur9.js";import"./isObject-C3_fL553.js";import"./InternalBackdrop-BfeMZC_0.js";import"./composite-Cr1W43yt.js";import"./index-QJiueyA8.js";import"./getDisabledMountTransitionStyles-D6grOVXg.js";import"./ToolbarRootContext-2k2UafpN.js";import"./tick-DhgTEvaD.js";import"./svgIconContainer-CrtGHbrd.js";import"./small-cross-BwgGFbKS.js";import"./search-WBNkBZFc.js";import"./cross-rRwDjGT0.js";import"./useValueChanged-C8niT4lC.js";import"./getPseudoElementBounds-C6u0lb-d.js";import"./CompositeItem-CQ_4wlFD.js";import"./makeExternalStore-ToHZ88Vl.js";import"./BaseForm-C18ubMYP.js";import"./ActionButton-CeW5NSaB.js";import"./Button-BsIC8U9B.js";import"./SkeletonBar-C4tzn2dO.js";import"./Tooltip-ccVO4Ah8.js";import"./info-sign-B1nu7HHQ.js";import"./chevron-up-CmdegmPQ.js";import"./chevron-down-Cct1BoUi.js";import"./useEventCallback-W8UKu-Ag.js";import"./iconLoader-YghVMlaX.js";import"./Switch-DalvNV6Y.js";import"./CompositeRoot-BUIpC0WX.js";import"./TimePicker-BlXW_mbl.js";import"./CollapsiblePanel-rhXz0ewg.js";import"./error-Duh78PLb.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DOaLQ3Zd.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
