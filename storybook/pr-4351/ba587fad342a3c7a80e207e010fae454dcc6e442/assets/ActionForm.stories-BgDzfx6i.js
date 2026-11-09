import{j as t,g as n}from"./iframe-BCHKv9OM.js";import{A as r}from"./action-form-BwzhmCnl.js";import"./preload-helper-VdwPsvvy.js";import"./DropdownField-Ce9UBfUI.js";import"./debounce-CdYSIISE.js";import"./useOsdkClient-BaaChpHI.js";import"./index-Bwt2nvxG.js";import"./Input-sKzdlVIX.js";import"./useBaseUiId-D9fN6cGs.js";import"./useControlled-BHnn3yAy.js";import"./index-BkIhD60u.js";import"./index-z0BP5rZZ.js";import"./isObject-BYugPURt.js";import"./InternalBackdrop-C0GHdOIg.js";import"./composite-C-pKBr51.js";import"./index-DwHqoGtG.js";import"./getDisabledMountTransitionStyles-5PmgAQkM.js";import"./ToolbarRootContext-CwhQOyHm.js";import"./tick-D35hPI0R.js";import"./svgIconContainer-DyfXuRzr.js";import"./small-cross-95SsO8Gt.js";import"./search-DF6xe5EC.js";import"./cross-2PepCGpt.js";import"./useValueChanged-C7KiF5LC.js";import"./getPseudoElementBounds-UEouzKLj.js";import"./CompositeItem-BMLR6r4a.js";import"./makeExternalStore-CbzDxk6X.js";import"./BaseForm-CVF9W1_y.js";import"./ActionButton-8LNq2ikE.js";import"./Button-C3RFGMgN.js";import"./SkeletonBar-B3WDYch4.js";import"./Tooltip-DBSqCNw9.js";import"./info-sign-DyFiXiiG.js";import"./chevron-up-BDepI66l.js";import"./chevron-down-BKy1nerW.js";import"./useEventCallback-DEkx1Ulc.js";import"./iconLoader-D2oLWXOF.js";import"./Switch-C2_cKk5Q.js";import"./CompositeRoot-CVWrQ93x.js";import"./TimePicker-CbH6laUj.js";import"./CollapsiblePanel-BbSBPuZD.js";import"./error-6YNMu2Ib.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DIduflDc.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
