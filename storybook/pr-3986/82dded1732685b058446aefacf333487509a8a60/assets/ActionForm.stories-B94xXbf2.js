import{j as t,g as n}from"./iframe-BtBIXkF3.js";import{A as r}from"./action-form-Cg9KG3XW.js";import"./preload-helper-KCRTf-fU.js";import"./DropdownField-CeeFHjMT.js";import"./debounce-fpq53JQI.js";import"./useOsdkClient-Dw51PFJi.js";import"./index-BGAjKCp6.js";import"./Input-CZ_pHuwE.js";import"./useBaseUiId-CzkvuYxc.js";import"./useControlled-Bsm9yLUZ.js";import"./index-DnxktrWp.js";import"./index-Bg1G_Vw4.js";import"./PopoverPopup-CII93Llt.js";import"./InternalBackdrop-CxX8IWWG.js";import"./composite-Bn3hBJno.js";import"./index-D1E8i8Wn.js";import"./getDisabledMountTransitionStyles-D444HRMW.js";import"./ToolbarRootContext-B_9qz0NR.js";import"./tick-BfzomYJ0.js";import"./svgIconContainer-CclLyuS6.js";import"./small-cross-D7pBBSfk.js";import"./search-DV3YNQgX.js";import"./cross-B9mjFWYU.js";import"./useValueChanged-DWNSNYCY.js";import"./getPseudoElementBounds-DWPVaQIw.js";import"./CompositeItem-BCTeJPmX.js";import"./makeExternalStore-CMGSbNhD.js";import"./BaseForm-DVVSv3uV.js";import"./ActionButton-CXzhKuCF.js";import"./Button-FoDlRoyn.js";import"./SkeletonBar-BNOhPsmd.js";import"./Tooltip-BzRRe3iu.js";import"./info-sign-D9gWb1bT.js";import"./chevron-up-BaMY7_Jh.js";import"./chevron-down-BHLBt5vn.js";import"./useEventCallback-BQpb3sO5.js";import"./iconLoader-Cazm_30t.js";import"./CompositeRoot-B-jp7Oin.js";import"./Switch-CY3WqUBH.js";import"./TimePicker-pKzIGGlC.js";import"./CollapsiblePanel-CZO-nI2a.js";import"./error-VXjIMzYn.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CEusHpqR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
