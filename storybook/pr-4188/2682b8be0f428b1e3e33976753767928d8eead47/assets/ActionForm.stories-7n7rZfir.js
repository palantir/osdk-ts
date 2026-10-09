import{j as t,g as n}from"./iframe-D64bY6TH.js";import{A as r}from"./action-form-CSyW8ma9.js";import"./preload-helper-C76Jrfws.js";import"./DropdownField-BfpsV4IR.js";import"./debounce-Cg8_SxcC.js";import"./useOsdkClient-IPsSAxyW.js";import"./index-Cc3FeXj1.js";import"./Input-QZumNvU1.js";import"./useBaseUiId-CFOcLwn4.js";import"./useControlled-CxTqzmL5.js";import"./index-bp5PTA0n.js";import"./index-B70IpAtL.js";import"./PopoverPopup-Be8aQKMg.js";import"./InternalBackdrop-Bc_2TPL1.js";import"./composite-DAqKTlgI.js";import"./index-DpWxliah.js";import"./getDisabledMountTransitionStyles-C0e0B9o7.js";import"./ToolbarRootContext-CrHW8pig.js";import"./tick-foI34yl5.js";import"./svgIconContainer-CfgNuiYE.js";import"./small-cross-CwHEtqN2.js";import"./search-Bfu3ziqv.js";import"./cross-D6Cdabtd.js";import"./useValueChanged-Cfe25gjJ.js";import"./getPseudoElementBounds-C8omZZgw.js";import"./CompositeItem-9LTTeiMZ.js";import"./makeExternalStore-DhnEC1sn.js";import"./BaseForm-CRUDFNsR.js";import"./ActionButton-BVVdRIEF.js";import"./Button-BmCoWmmM.js";import"./SkeletonBar-BlBlU7HK.js";import"./Tooltip-By2rP-Yc.js";import"./info-sign-DFXkL-zM.js";import"./chevron-up-IUoQvKLG.js";import"./chevron-down-CihExyy-.js";import"./useEventCallback-CgjSN3m2.js";import"./iconLoader-6rYSBmj7.js";import"./Switch-8y6vM4Em.js";import"./CompositeRoot-CwbZNo2h.js";import"./TimePicker-BqUWk30G.js";import"./CollapsiblePanel-D4Pc_im2.js";import"./error-DEgvCPew.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Dszg8kI0.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
