import{j as t,g as n}from"./iframe-DALIkhit.js";import{A as r}from"./action-form-BtI5OLSJ.js";import"./preload-helper-DctxGWdw.js";import"./DropdownField-DRTmVUHk.js";import"./debounce-DBBvjiY6.js";import"./useOsdkClient-DRA9qEhw.js";import"./index-CRXXRxj8.js";import"./Input-lOkk4Did.js";import"./useBaseUiId-DYLAsVU1.js";import"./useControlled-D3lOoo5c.js";import"./index-CoXaz5Dw.js";import"./index-OZ6WyzDP.js";import"./PopoverPopup-BB9pf0-g.js";import"./InternalBackdrop-aOf-2TsU.js";import"./composite-DNV43Yqw.js";import"./index-B4ELnjW2.js";import"./getDisabledMountTransitionStyles-BGaY7OxB.js";import"./ToolbarRootContext-C8BMIZR-.js";import"./tick-DF-H6RV9.js";import"./svgIconContainer-spB4tjSy.js";import"./small-cross-C0Cw1tJu.js";import"./search-DGhvTCsG.js";import"./cross-Lsk0KBg0.js";import"./useValueChanged-ybVWH_rP.js";import"./getPseudoElementBounds-ORsAqzKa.js";import"./CompositeItem-jTsd3S2E.js";import"./makeExternalStore-ByjGMN0z.js";import"./BaseForm-DRMhGetc.js";import"./ActionButton-BxyaPNEd.js";import"./Button-BsqgxFa7.js";import"./SkeletonBar-DxPKDsZj.js";import"./Tooltip-C28mGjrB.js";import"./info-sign-3eP9voJi.js";import"./chevron-up-syz8rgro.js";import"./chevron-down-CAkJr31e.js";import"./useEventCallback-DYhKCTqd.js";import"./iconLoader-BnkyMipw.js";import"./CompositeRoot-CM2_8tSx.js";import"./Switch-CAJwGtrz.js";import"./TimePicker-7nevm3tO.js";import"./CollapsiblePanel-C4equoJ3.js";import"./error-D7k6AgT2.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-YLhbsdmr.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
