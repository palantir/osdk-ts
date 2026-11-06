import{j as t,g as n}from"./iframe-CwWTpKqE.js";import{A as r}from"./action-form-BTL2Soot.js";import"./preload-helper-B09VY0AV.js";import"./DropdownField-D0XUXnSf.js";import"./debounce-BydD4alG.js";import"./useOsdkClient-DMY5woQL.js";import"./index-ibAAsAIP.js";import"./Input-Chlp8aHK.js";import"./useBaseUiId-KfzYfEP4.js";import"./useControlled-Bv0Nsxvt.js";import"./index-nzJ3ZmYt.js";import"./index-lXeJxgff.js";import"./isObject-CkJtIVIY.js";import"./InternalBackdrop-Dn9iyTJK.js";import"./composite-BQxf11e7.js";import"./index-DffI0gsz.js";import"./getDisabledMountTransitionStyles-C2q5byKc.js";import"./ToolbarRootContext-BpNk0gzp.js";import"./tick-Dt7zelIm.js";import"./svgIconContainer-BQKxLrqz.js";import"./small-cross-DyjyycKa.js";import"./search-sqlqxwkc.js";import"./cross-DKdi2fit.js";import"./useValueChanged-KkTgGyCA.js";import"./getPseudoElementBounds-COKxlhPa.js";import"./CompositeItem-DdcfEsM9.js";import"./makeExternalStore-BCW3G7rA.js";import"./BaseForm-Djj0SJ6N.js";import"./ActionButton-CdyawS6Q.js";import"./Button-CRkFmj-6.js";import"./SkeletonBar-B52QORjF.js";import"./Tooltip-DZcs6cWK.js";import"./info-sign-B4V8Op-p.js";import"./chevron-up--_jL__5r.js";import"./chevron-down-CndDBIBA.js";import"./useEventCallback-D71N8cWx.js";import"./iconLoader-BEwEBwsE.js";import"./Switch-BFaiP6oq.js";import"./CompositeRoot-B31q0jDA.js";import"./TimePicker-CHo9JGs9.js";import"./CollapsiblePanel-ClyaxKWN.js";import"./error-DLpjz71D.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CfTZp6DM.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
