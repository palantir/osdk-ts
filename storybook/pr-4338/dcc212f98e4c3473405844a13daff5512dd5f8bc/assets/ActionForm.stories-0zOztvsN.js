import{j as t,g as n}from"./iframe-B1HXhuEn.js";import{A as r}from"./action-form-6SRLHdxX.js";import"./preload-helper-BS8U_QDO.js";import"./DropdownField-DL5ULeUx.js";import"./debounce-CfR5LM8L.js";import"./useOsdkClient-BzBnYvs_.js";import"./index-CXhpMXAp.js";import"./Input-v3aPKgft.js";import"./useBaseUiId-hdD3ov8Q.js";import"./useControlled-BhBQWUYI.js";import"./index-DPC2Y4e5.js";import"./index-3H2Ar6XW.js";import"./PopoverPopup-Bf-4BBva.js";import"./InternalBackdrop-DKFVVvCs.js";import"./composite-DedIsNbG.js";import"./index-HdEyMueC.js";import"./getDisabledMountTransitionStyles-eJMFQEJH.js";import"./ToolbarRootContext-37rMdX1G.js";import"./tick-CNzVeS2N.js";import"./svgIconContainer-DzUf9ieK.js";import"./small-cross-CvU0Mbeq.js";import"./search-oaLO-0GK.js";import"./cross-BttX5lBy.js";import"./useValueChanged-xoX0cu1s.js";import"./getPseudoElementBounds-S_dxWTa-.js";import"./CompositeItem-BMKkQOtg.js";import"./makeExternalStore-eAcHCFEV.js";import"./BaseForm-ConP9Oa8.js";import"./ActionButton-DWc1Bu8W.js";import"./Button-C9BX79xl.js";import"./SkeletonBar-mpMkjWBx.js";import"./Tooltip-jSRDry3w.js";import"./info-sign-TN5jqiJX.js";import"./chevron-up-CjrnijYZ.js";import"./chevron-down-D8b4kkiL.js";import"./useEventCallback-t3hd_q7S.js";import"./iconLoader-CBwrM1hQ.js";import"./Switch-___EVpGB.js";import"./CompositeRoot-B5zvPrAA.js";import"./TimePicker-3VfkgRm-.js";import"./CollapsiblePanel-Dob9z54l.js";import"./error-CgwFWGpg.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BDRjMbuS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
