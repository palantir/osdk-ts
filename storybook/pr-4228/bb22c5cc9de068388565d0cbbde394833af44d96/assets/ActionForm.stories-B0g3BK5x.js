import{j as t,g as n}from"./iframe-DKFdWtvL.js";import{A as r}from"./action-form-Cunwhfn_.js";import"./preload-helper-CE0EJEax.js";import"./DropdownField-BJbaqXN1.js";import"./debounce-BET9pivF.js";import"./useOsdkClient-oJ76J3S4.js";import"./index-Zr7MzFSe.js";import"./Input-veW-XqjJ.js";import"./useBaseUiId-wiNmPbxB.js";import"./useControlled-xNoP3k9v.js";import"./index-CKHkcl8C.js";import"./index-BEWpIeZQ.js";import"./PopoverPopup-BZY02nqM.js";import"./InternalBackdrop-CKISU8v0.js";import"./composite-Cu9id-g4.js";import"./index-CMS4oCXy.js";import"./getDisabledMountTransitionStyles-DN20IWb_.js";import"./ToolbarRootContext-CrA7gaTE.js";import"./tick-DJb0ub8N.js";import"./svgIconContainer-mDDpTeTZ.js";import"./small-cross-DbCXQWOu.js";import"./search-DRLDRoqN.js";import"./cross-DwMbeucq.js";import"./useValueChanged-DNoCn35O.js";import"./getPseudoElementBounds-Brijrk7L.js";import"./CompositeItem-BafBUoyW.js";import"./makeExternalStore-De86ji-X.js";import"./BaseForm-DeLF4Uf3.js";import"./ActionButton-Hgu8HEXX.js";import"./Button-DqI2Ud1s.js";import"./SkeletonBar-DudztDAH.js";import"./Tooltip-tuRx1ZD5.js";import"./info-sign-BY85LcAq.js";import"./chevron-up-BtJVnOvE.js";import"./chevron-down-BKXttnNC.js";import"./useEventCallback-CdZBxG17.js";import"./iconLoader-DZ68iub2.js";import"./Switch-qMGW4Cuz.js";import"./CompositeRoot-Dk2X-VSV.js";import"./TimePicker-dfTEnZUH.js";import"./CollapsiblePanel-DFGZ9fUj.js";import"./error-D3OaIHY1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DUGrXPH7.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
