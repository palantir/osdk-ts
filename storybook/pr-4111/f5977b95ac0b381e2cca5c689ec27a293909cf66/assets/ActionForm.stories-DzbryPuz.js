import{j as t,g as n}from"./iframe-CSmstThV.js";import{A as r}from"./action-form-Dg-wcf1A.js";import"./preload-helper-CQQlEffD.js";import"./DropdownField-CcJaOmXn.js";import"./debounce-aX7sjs20.js";import"./useOsdkClient-XXkLSmqd.js";import"./index-L8cshBl8.js";import"./Input-1EXkKDbs.js";import"./useBaseUiId-BiI5AoOG.js";import"./useControlled-CNZAIfTk.js";import"./index-CZXhyyfI.js";import"./index-DfIv01yj.js";import"./PopoverPopup-X1QJW8UM.js";import"./InternalBackdrop-Dbs4xP0U.js";import"./composite-D-st0uki.js";import"./index-6VBvVHdU.js";import"./getDisabledMountTransitionStyles-BRgSEEls.js";import"./ToolbarRootContext-D3qIfWMT.js";import"./tick-BFPZziq8.js";import"./svgIconContainer-BHO01tKx.js";import"./small-cross-CBcN5a2q.js";import"./search-DOAaZcfu.js";import"./cross-D9KoCzL1.js";import"./useValueChanged-B7kTE-jt.js";import"./getPseudoElementBounds-fscGHaQm.js";import"./CompositeItem-BaYmn_Wk.js";import"./makeExternalStore-DWrbiT-Y.js";import"./BaseForm-TbZ1Dmj-.js";import"./ActionButton-CsW1cROw.js";import"./Button-DI_WLWpV.js";import"./SkeletonBar-CD6igyAS.js";import"./Tooltip-B7jbz24u.js";import"./info-sign-ClLQKGoj.js";import"./chevron-up-BVjnXGuR.js";import"./chevron-down-Dn4WYVvB.js";import"./useEventCallback-FJVX4Oe4.js";import"./iconLoader-CJ-OUVo2.js";import"./Switch-6-EiuteG.js";import"./CompositeRoot-gxqN6m5H.js";import"./TimePicker-79_3gJHO.js";import"./CollapsiblePanel-pP6ofbVg.js";import"./error-Cu8ttO5d.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-V02XcVkv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
