import{j as t,g as n}from"./iframe-B_zRUDuE.js";import{A as r}from"./action-form-C_Qs6cnt.js";import"./preload-helper-CxVJftgz.js";import"./DropdownField-U6RE18pq.js";import"./debounce-Bz563Y3c.js";import"./useOsdkClient-DO77RjGc.js";import"./index-sn9mtHlU.js";import"./Input-Db4KedVJ.js";import"./useBaseUiId-8u_jCgH6.js";import"./useControlled-DlwI9PYM.js";import"./index-o0vWfmid.js";import"./index-DT6FHhAE.js";import"./isObject-BgbyztzY.js";import"./InternalBackdrop-D-Mc2aWz.js";import"./composite-CiMgDYUm.js";import"./index-CFIH2_Ln.js";import"./getDisabledMountTransitionStyles-CIBqTnBJ.js";import"./ToolbarRootContext-Bj3x-8aq.js";import"./tick-Cso2FHRc.js";import"./svgIconContainer-CxXL_oXh.js";import"./small-cross-CNevPnY1.js";import"./search-C1xWyvK0.js";import"./cross-_ERVYG6L.js";import"./useValueChanged-Bj4HpRwM.js";import"./getPseudoElementBounds-REbqj2aK.js";import"./CompositeItem-LThRFFEu.js";import"./makeExternalStore-DD9WI4JF.js";import"./BaseForm-kiDNiGEn.js";import"./ActionButton-p5CBVKmi.js";import"./Button-CY0tELjq.js";import"./SkeletonBar-_7p8Ae6C.js";import"./Tooltip-D7_c9ORd.js";import"./info-sign-Dmfz4-Cy.js";import"./chevron-up-Cu1qiw7I.js";import"./chevron-down-C87rVGKO.js";import"./useEventCallback-DXtMhdq9.js";import"./iconLoader-DmR9jsix.js";import"./Switch-BBSwAcUW.js";import"./CompositeRoot-DabLffaR.js";import"./TimePicker-lABnVgX3.js";import"./CollapsiblePanel-B55pzrP7.js";import"./error-Co0vxDqJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DrGnBbgp.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
