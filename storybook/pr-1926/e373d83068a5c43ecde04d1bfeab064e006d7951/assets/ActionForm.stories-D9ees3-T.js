import{j as t,g as n}from"./iframe-0Iz5vwcT.js";import{A as r}from"./action-form-5aWLNyuz.js";import"./preload-helper-DPuYeI1F.js";import"./DropdownField-DFrco9Qo.js";import"./debounce-B18_zKUH.js";import"./useOsdkClient-BuNKTI6L.js";import"./index-CwqL2BSp.js";import"./Input-CxV_aY0Y.js";import"./useBaseUiId-BzcgVOgr.js";import"./useControlled-BgJ32gqU.js";import"./index-Fpqw52jH.js";import"./index-CJbD8PH4.js";import"./PopoverPopup-CowTNg7A.js";import"./InternalBackdrop-CIp9NUV4.js";import"./composite-N0Lz-u2v.js";import"./index-BZki0KLB.js";import"./getDisabledMountTransitionStyles-Cx-ixMqU.js";import"./ToolbarRootContext-C3DWskzf.js";import"./tick-Jp1l8F3U.js";import"./svgIconContainer--rVYZd1H.js";import"./small-cross-CVGlFgTv.js";import"./search-C60pdPoy.js";import"./cross-zS2Wnz2V.js";import"./useValueChanged-C8jXi1Db.js";import"./getPseudoElementBounds-BUv5HBAP.js";import"./CompositeItem-DmRUbVI5.js";import"./makeExternalStore-CFnbMMz3.js";import"./BaseForm-jkj9KfGN.js";import"./ActionButton-C5FOmGzz.js";import"./Button-DmPkGrX2.js";import"./SkeletonBar-B5YslJhy.js";import"./Tooltip-BVWIJEtT.js";import"./info-sign-DqQzZxn9.js";import"./chevron-up-DcAtfW_g.js";import"./chevron-down-BAJ5mZyN.js";import"./useEventCallback-OZngxyt9.js";import"./iconLoader-CspPIW6H.js";import"./Switch-B6kDMBYV.js";import"./CompositeRoot-CNlW4c9i.js";import"./TimePicker-Dp_OAAZu.js";import"./CollapsiblePanel-BCIeAMta.js";import"./error-D9h6iLxx.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-kzWOWE3o.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
