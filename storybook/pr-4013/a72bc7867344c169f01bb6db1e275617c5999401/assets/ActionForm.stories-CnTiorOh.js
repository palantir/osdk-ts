import{j as t,g as n}from"./iframe-nH92Qb6I.js";import{A as r}from"./action-form-DF8RbDy6.js";import"./preload-helper-DVpIcuXN.js";import"./DropdownField-n4Cp-XVI.js";import"./debounce-By_2G3GA.js";import"./useOsdkClient-CgXm7UOo.js";import"./index-wUFT2bRw.js";import"./Input-DzMyb8hK.js";import"./useBaseUiId-Dbvfrb6U.js";import"./useControlled-B8icxwdl.js";import"./index-CYsOJOxV.js";import"./index-CcpfuVHT.js";import"./PopoverPopup-Cu27jEST.js";import"./InternalBackdrop-CHH-xVa7.js";import"./composite-B2ptXcYf.js";import"./index-CPIitDS-.js";import"./getDisabledMountTransitionStyles-BhkjVSc5.js";import"./ToolbarRootContext-DlwWE9QZ.js";import"./tick-oJtSbIPn.js";import"./svgIconContainer-CCtPkDCx.js";import"./small-cross-BSOPXnkj.js";import"./search-D5Opa-iA.js";import"./cross-HApDVAUs.js";import"./useValueChanged-DlL26KZ1.js";import"./getPseudoElementBounds-fd5QWVwB.js";import"./CompositeItem-BF333Zgu.js";import"./makeExternalStore-CLbnsWAa.js";import"./BaseForm-Bn-gC-vK.js";import"./ActionButton-DoSazfb4.js";import"./Button-w7xoCEq9.js";import"./SkeletonBar-Bynzqc4g.js";import"./Tooltip-DSvaFKNo.js";import"./info-sign-C80PxkcJ.js";import"./chevron-up-CjBACsrO.js";import"./chevron-down-CBmuqb-m.js";import"./useEventCallback-Pw8NUu2g.js";import"./iconLoader-DsAlCmM7.js";import"./CompositeRoot-C5RkKO9N.js";import"./Switch-BXWvpT7h.js";import"./TimePicker-BValTtad.js";import"./CollapsiblePanel-CapZ9VU7.js";import"./error-BXUm0BgQ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Cz8MJ3YO.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
