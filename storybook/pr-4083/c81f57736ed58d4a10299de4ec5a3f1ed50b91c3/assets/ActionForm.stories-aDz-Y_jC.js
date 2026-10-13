import{j as t,g as n}from"./iframe-C9OBkxCO.js";import{A as r}from"./action-form-BAoo6u3F.js";import"./preload-helper-DzUjaibC.js";import"./DropdownField-DMyThSPG.js";import"./debounce-QFWpzeYe.js";import"./useOsdkClient-BkQTDtpM.js";import"./index-CFjFkJ-v.js";import"./Input-DCcVeBLD.js";import"./useBaseUiId-DrS8qHSd.js";import"./useControlled-B3h0MmL1.js";import"./index-Ddu0h4gv.js";import"./index-_alj9X0j.js";import"./PopoverPopup-DvMdOZuS.js";import"./InternalBackdrop-CTmndIKQ.js";import"./composite-BI-3SHGF.js";import"./index-Bz5VFwta.js";import"./getDisabledMountTransitionStyles-BYJIZN46.js";import"./ToolbarRootContext-BjF8crHV.js";import"./tick-BLKcW3rj.js";import"./svgIconContainer-BvHwqNKP.js";import"./small-cross-Bpi6NFfA.js";import"./search-Cdrrqif2.js";import"./cross-DLECAn5_.js";import"./useValueChanged-Cja-sQjh.js";import"./getPseudoElementBounds-ChGaSxDt.js";import"./CompositeItem-ByNf42qV.js";import"./makeExternalStore-C1NBDQik.js";import"./BaseForm-DfbXLi9e.js";import"./ActionButton-CPbx2fv2.js";import"./Button-DNW3Z-M9.js";import"./SkeletonBar-B8LNf0OH.js";import"./Tooltip-BCMNs8th.js";import"./info-sign-BjOxhQtu.js";import"./chevron-up-Bg5sdZNr.js";import"./chevron-down-CRsfqdiU.js";import"./useEventCallback-DMriD0tz.js";import"./iconLoader-y5adq0y6.js";import"./Switch-Co4sYkxr.js";import"./CompositeRoot-z7aM2QO0.js";import"./TimePicker-B36H1mLc.js";import"./CollapsiblePanel-89P4kXtj.js";import"./error-uXY_ifTf.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BMU2Z44Q.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
