import{j as t,g as n}from"./iframe-D4r_-dEc.js";import{A as r}from"./action-form-CrsKwE_O.js";import"./preload-helper-6ZtcGGS6.js";import"./DropdownField-H8Z-0aRQ.js";import"./debounce-DwQf9jej.js";import"./useOsdkClient-bldReknQ.js";import"./index-7caLYRtX.js";import"./Input-B2HDaQON.js";import"./useBaseUiId-Di53fTVw.js";import"./useControlled-BmrimB4V.js";import"./index-QrOM1WuB.js";import"./index-BMA4s8ZI.js";import"./PopoverPopup-fn5YEEDm.js";import"./InternalBackdrop-CZm9G_S4.js";import"./composite-DCTx9hyK.js";import"./index-CoFQrcih.js";import"./getDisabledMountTransitionStyles-BiBMpt_n.js";import"./ToolbarRootContext-nt_JLtrz.js";import"./tick-D-AaSPeq.js";import"./svgIconContainer-Dh_c1Bbk.js";import"./small-cross-BkHUlaQn.js";import"./search-DXq3JDJP.js";import"./cross-D7UvadIv.js";import"./useValueChanged-C-kvsFRL.js";import"./getPseudoElementBounds-CEVXpGUD.js";import"./CompositeItem-Dyw9HZNd.js";import"./makeExternalStore-6c6hwxKy.js";import"./BaseForm-k6fxwfS1.js";import"./ActionButton-DP6StPqT.js";import"./Button-Bk2BCIeA.js";import"./SkeletonBar-CvzkLxwM.js";import"./Tooltip-C_exduk2.js";import"./info-sign-DwS7DYi7.js";import"./chevron-up-mxO02ags.js";import"./chevron-down-ToRQzCeL.js";import"./useEventCallback-DqALnZfq.js";import"./iconLoader-6C8Pwgho.js";import"./Switch-JdwkNFjZ.js";import"./CompositeRoot-CMhaHLOd.js";import"./TimePicker-C9dfyt5O.js";import"./CollapsiblePanel-yRKwIWIq.js";import"./error-1vTQ2DTJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CYIlN546.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
