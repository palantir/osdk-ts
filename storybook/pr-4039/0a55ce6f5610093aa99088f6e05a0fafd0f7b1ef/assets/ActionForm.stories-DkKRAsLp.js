import{j as t,g as n}from"./iframe-KFmuHpi6.js";import{A as r}from"./action-form-reK4KKzL.js";import"./preload-helper-DA3sodJk.js";import"./DropdownField-CGz7tZKd.js";import"./debounce-JwfeVHKk.js";import"./useOsdkClient-jK4jvHg5.js";import"./index-CBTTDR05.js";import"./Input-B-ppJqtJ.js";import"./useBaseUiId-CrXnmgW5.js";import"./useControlled-D9mNQgHG.js";import"./index-BkMhET5E.js";import"./index-Di_4vTer.js";import"./PopoverPopup-oWKBQoRn.js";import"./InternalBackdrop-CHvDuBxy.js";import"./composite-Bv5M65D9.js";import"./index-D41spogg.js";import"./getDisabledMountTransitionStyles-v24lbGuZ.js";import"./ToolbarRootContext-DPZQ9O-r.js";import"./tick-yLHvFrbb.js";import"./svgIconContainer-D_AfyEve.js";import"./small-cross-D9wsbyzz.js";import"./search-Bq4-27c_.js";import"./cross-BxqJFApi.js";import"./useValueChanged-YKfipK9M.js";import"./getPseudoElementBounds-CCT63s9j.js";import"./CompositeItem-BqmVxYgk.js";import"./makeExternalStore-C27aCTGI.js";import"./BaseForm-CeHTDyqY.js";import"./ActionButton-NpNjrugw.js";import"./Button-CS75p-oM.js";import"./SkeletonBar-BMkWU_25.js";import"./Tooltip-CBzWZ40Q.js";import"./info-sign-DtyfqmCR.js";import"./chevron-up-DPcbr57D.js";import"./chevron-down-BDNkXUjZ.js";import"./useEventCallback-CjOHxRvH.js";import"./iconLoader-Dg9zAGVk.js";import"./CompositeRoot-D5JUsLnP.js";import"./Switch-MFSi55Pg.js";import"./TimePicker-Cw-4nHzr.js";import"./CollapsiblePanel-TR3Y0YZC.js";import"./error-BbvMlxw1.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BaXo7wYf.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
