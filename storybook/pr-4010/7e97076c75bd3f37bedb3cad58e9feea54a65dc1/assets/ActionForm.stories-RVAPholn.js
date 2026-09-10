import{j as t,g as n}from"./iframe-DieBzf9y.js";import{A as r}from"./action-form-BjUyoEcp.js";import"./preload-helper-nfOhyenq.js";import"./DropdownField-B2xBQaH4.js";import"./debounce-C1gLi99b.js";import"./useOsdkClient-DA_4AswE.js";import"./index-CueLTBHP.js";import"./Input-Ckaolz8l.js";import"./useBaseUiId-Bxe_lFSq.js";import"./useControlled-D4dAPTSV.js";import"./index-BSQeylJ3.js";import"./index-QupaIjGx.js";import"./PopoverPopup-BZdc9gni.js";import"./InternalBackdrop-BaJX2BYz.js";import"./composite-BvpzVpYi.js";import"./index-aUc9Sjup.js";import"./getDisabledMountTransitionStyles-DXokCC_W.js";import"./ToolbarRootContext-SW8tVZST.js";import"./tick-DDUBOGMn.js";import"./svgIconContainer-C4rlmgrB.js";import"./small-cross-jMIhgwaN.js";import"./search-LxBHfv5l.js";import"./cross-t6O5j7uz.js";import"./useValueChanged-DqTy5Eu1.js";import"./getPseudoElementBounds-D6AwDuKV.js";import"./CompositeItem-Bk12yzpP.js";import"./makeExternalStore-Bmuig1mM.js";import"./BaseForm-B7iJBLAx.js";import"./ActionButton-CYr-60__.js";import"./Button-C1caW-IN.js";import"./SkeletonBar-Bkw74uaU.js";import"./Tooltip-aV81X3rV.js";import"./info-sign-CpNHceGm.js";import"./chevron-up-t1l06puB.js";import"./chevron-down-MpT91KZy.js";import"./useEventCallback-jKF40GPJ.js";import"./iconLoader-DbHQEk40.js";import"./CompositeRoot-j7SquUIt.js";import"./Switch-DByO87rT.js";import"./TimePicker-IawUrUet.js";import"./CollapsiblePanel-LFl_eO9r.js";import"./error-BL3TgcOC.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-LkUW4C5C.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
