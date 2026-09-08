import{j as t,g as n}from"./iframe-Bl9Agv3T.js";import{A as r}from"./action-form-Do-Hj7P0.js";import"./preload-helper-C2Q81Ac3.js";import"./DropdownField-BaZrA__h.js";import"./debounce-B0RIZne8.js";import"./useOsdkClient-KsFQc-mA.js";import"./index-DsMKsdV8.js";import"./Input-BPwTrKsb.js";import"./useBaseUiId-CxMJijpy.js";import"./useControlled-BFzsGkd0.js";import"./index-Bqfpj0Ej.js";import"./index-DTOWBSwW.js";import"./PopoverPopup-BlQUb6MZ.js";import"./InternalBackdrop-C4VzyeDT.js";import"./composite-BXwJLY2p.js";import"./index-D-bhGtGz.js";import"./getDisabledMountTransitionStyles-CmUtvBkr.js";import"./ToolbarRootContext-DtF-FbA5.js";import"./tick-BQpeZs08.js";import"./svgIconContainer-CYsYLgfA.js";import"./small-cross-DDl_mPr6.js";import"./search-BMgb5_aJ.js";import"./cross-DNHfVbpu.js";import"./useValueChanged-Z7Be-pzQ.js";import"./getPseudoElementBounds-BLuA6Yh1.js";import"./CompositeItem-D_lixxrU.js";import"./makeExternalStore-D9cq61Qp.js";import"./BaseForm-BU1gFjbk.js";import"./ActionButton-sQxxk7Mn.js";import"./Button-C9n-JPHB.js";import"./SkeletonBar-KfT1mCrA.js";import"./Tooltip-CfmWYMwT.js";import"./info-sign-B8dlbljA.js";import"./chevron-up-BZDHc_ym.js";import"./chevron-down-BpdWjY1P.js";import"./useEventCallback-dyRpDIhK.js";import"./iconLoader-BVGmi294.js";import"./CompositeRoot-La5M5RJu.js";import"./Switch-B0KOI6kF.js";import"./TimePicker-BGPoWhu8.js";import"./CollapsiblePanel-B4rX7D3r.js";import"./error-BNDEYQ-r.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-Bn6nYcc2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
