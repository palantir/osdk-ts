import{j as t,g as n}from"./iframe-B3Tmb11O.js";import{A as r}from"./action-form-DGK_XWCQ.js";import"./preload-helper-gakQdOi4.js";import"./DropdownField-T9pQTlKf.js";import"./debounce-CWwSNpvq.js";import"./useOsdkClient-CEGzqg9X.js";import"./index-kZbgPBf-.js";import"./Input-CWGLraK0.js";import"./useBaseUiId-Bm-vJATe.js";import"./useControlled-uOco89xC.js";import"./index-DfPJChMi.js";import"./index-QmBbQjFR.js";import"./PopoverPopup-B8BhyguS.js";import"./InternalBackdrop-BOPEQbPn.js";import"./composite-2j3kB3hN.js";import"./index-e_qtktns.js";import"./getDisabledMountTransitionStyles-BzgaS7Qg.js";import"./ToolbarRootContext-CqEf4XEU.js";import"./tick-Cl-i5oQo.js";import"./svgIconContainer-BsQARODV.js";import"./small-cross-DXMdsdMX.js";import"./search-ZvK9KowR.js";import"./cross-C-JhHfM1.js";import"./useValueChanged-BchUu2C7.js";import"./getPseudoElementBounds-DAnTahBd.js";import"./CompositeItem-BKoGSNiO.js";import"./makeExternalStore-fsIP6Iuw.js";import"./BaseForm-DyKb7dnE.js";import"./ActionButton-BTBAdMJU.js";import"./Button-BRlUcQED.js";import"./SkeletonBar-C_iP2YwF.js";import"./Tooltip-DlikgLh9.js";import"./info-sign-Cy1hUIRM.js";import"./chevron-up-BRvUcC8v.js";import"./chevron-down-CsQH01fJ.js";import"./useEventCallback-B042jdme.js";import"./iconLoader-D8EdW_0J.js";import"./CompositeRoot-Rjl5Ixan.js";import"./Switch-CKLsQLG4.js";import"./TimePicker-DkFV7jJI.js";import"./CollapsiblePanel-DLuGcKFZ.js";import"./error-DCFU_pHO.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BtfS3RDS.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
