import{j as t,g as n}from"./iframe-CStnt8bf.js";import{A as r}from"./action-form-DkZEC6ol.js";import"./preload-helper-BHFu-ydw.js";import"./DropdownField-eRFOlzDf.js";import"./debounce-CBH2mxRm.js";import"./useOsdkClient-Jni9x8Xr.js";import"./index-bIM1mjE2.js";import"./Input-BxZoPAuB.js";import"./useBaseUiId-D9TkSWZv.js";import"./useControlled-B4F-euPl.js";import"./index-Dubonfnq.js";import"./index-VT6Dn2OL.js";import"./isObject-DTA28_gJ.js";import"./InternalBackdrop-dpQuuCiD.js";import"./composite-DIpMeE4S.js";import"./index-DyrSN_o7.js";import"./getDisabledMountTransitionStyles-9rWadWne.js";import"./ToolbarRootContext-Dy3DBHgn.js";import"./tick-B9r2rV47.js";import"./svgIconContainer-CBrsISO6.js";import"./small-cross-DKMVFFWv.js";import"./search-BrGXguj5.js";import"./cross-CzL3ilF7.js";import"./useValueChanged-DwaCIejN.js";import"./getPseudoElementBounds-BjFdhu5l.js";import"./CompositeItem-BdSAWgXI.js";import"./makeExternalStore-Cv8ow0-9.js";import"./BaseForm-x16ZLAbq.js";import"./ActionButton-DOBKUozS.js";import"./Button-BTOFQ1SZ.js";import"./SkeletonBar-6Pwtzhfc.js";import"./Tooltip-BV608A00.js";import"./info-sign-_Y1JFE1Z.js";import"./chevron-up-DMi2jV1g.js";import"./chevron-down-DP-5q6nZ.js";import"./useEventCallback-Ds_cQgpI.js";import"./iconLoader-BFgJ8XjG.js";import"./Switch-TPC7EwJC.js";import"./CompositeRoot-Blxr2LDg.js";import"./TimePicker-f-kCn9nB.js";import"./CollapsiblePanel-BDHPVZWV.js";import"./error-CM07sBvh.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-8Qsa17lA.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
