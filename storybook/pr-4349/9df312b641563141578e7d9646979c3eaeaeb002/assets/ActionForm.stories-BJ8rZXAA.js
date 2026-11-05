import{j as t,g as n}from"./iframe-BqTu4XiU.js";import{A as r}from"./action-form-B03WnINc.js";import"./preload-helper-CLwPNuFm.js";import"./DropdownField-CSfoNHLP.js";import"./debounce-CinR7-WT.js";import"./useOsdkClient-CY3-Qcbp.js";import"./index-n4P62ULA.js";import"./Input-CyJM7H_A.js";import"./useBaseUiId-DOa2ktQ_.js";import"./useControlled-BTMI3vML.js";import"./index-DPw1J95l.js";import"./index-XmYkAd4i.js";import"./isObject-ck1XpDGo.js";import"./InternalBackdrop-BWQJzTSw.js";import"./composite-Uju8Gyxg.js";import"./index-C7HdEQi2.js";import"./getDisabledMountTransitionStyles-Dm1GabcS.js";import"./ToolbarRootContext-I9KV8qho.js";import"./tick-vL6Zu8Fr.js";import"./svgIconContainer-ssNd1Mel.js";import"./small-cross-CbYqYfDd.js";import"./search-CGymVd3o.js";import"./cross-Bf-ZTIWt.js";import"./useValueChanged-MQHCd7Zh.js";import"./getPseudoElementBounds-DFuKTwTc.js";import"./CompositeItem-2LiZgC-6.js";import"./makeExternalStore-CD6czKDm.js";import"./BaseForm--Ollbs-o.js";import"./ActionButton-B-w92oTU.js";import"./Button-B0Jsn_TB.js";import"./SkeletonBar-Cm27X7lR.js";import"./Tooltip-Ce85HlPx.js";import"./info-sign-Dz7J9Gbg.js";import"./chevron-up-CRQKPQXv.js";import"./chevron-down-BzSkZyB8.js";import"./useEventCallback-CSmK-UP6.js";import"./iconLoader-BmkU8rXO.js";import"./Switch-COlLeawa.js";import"./CompositeRoot-BMVN0e69.js";import"./TimePicker-BZlo4f3A.js";import"./CollapsiblePanel-7y2KhLQa.js";import"./error-gQVPInMQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BmTAUVUD.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
