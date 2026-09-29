import{j as t,g as n}from"./iframe-DwbDsShL.js";import{A as r}from"./action-form-yoDZTXTn.js";import"./preload-helper-DhhmyXUk.js";import"./DropdownField-k94eZHLI.js";import"./debounce-DIDHBmIq.js";import"./useOsdkClient-DayV63R7.js";import"./index-BELzmUVs.js";import"./Input-CMFW6oif.js";import"./useBaseUiId-CKINu-S2.js";import"./useControlled-DY8ufjhO.js";import"./index-DYqy7FgF.js";import"./index-DL-SFPZn.js";import"./PopoverPopup-BUbu0rVo.js";import"./InternalBackdrop-CkMaO7_K.js";import"./composite-Dplovskw.js";import"./index-TAMkn_jr.js";import"./getDisabledMountTransitionStyles-BugVbO8p.js";import"./ToolbarRootContext-BPuHUJNX.js";import"./tick-cgtgvDhU.js";import"./svgIconContainer-xLBfLuAm.js";import"./small-cross--zSCPQCk.js";import"./search-D1hGu4NI.js";import"./cross-CsyWmC2B.js";import"./useValueChanged-BgzkqT_-.js";import"./getPseudoElementBounds-FBgTSxcr.js";import"./CompositeItem-DOXgLazM.js";import"./makeExternalStore-y7bd8937.js";import"./BaseForm-BamoUyxF.js";import"./ActionButton-CcahO6-X.js";import"./Button-DphpaBib.js";import"./SkeletonBar-hzcPKCTf.js";import"./Tooltip-zs9usS6P.js";import"./info-sign-DUJnLsGr.js";import"./chevron-up-hGe-tVgP.js";import"./chevron-down-ckW8ziB1.js";import"./useEventCallback-D_o7AQG5.js";import"./iconLoader-DuNXC3L5.js";import"./Switch-DTK37NEL.js";import"./CompositeRoot-8ml9yAPi.js";import"./TimePicker-CSwW6knX.js";import"./CollapsiblePanel-BDW-Fe21.js";import"./error-BJfNfAJx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BqWyBjIv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
