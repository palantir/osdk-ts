import{j as t,g as n}from"./iframe-CYWKmKsr.js";import{A as r}from"./action-form-CVcEBUth.js";import"./preload-helper-CZxqSgr4.js";import"./DropdownField-D7boWEU7.js";import"./debounce-FzhUUz5q.js";import"./useOsdkClient-KfXWcl-D.js";import"./index-BjhNRAAe.js";import"./Input-DhtTH-yg.js";import"./useBaseUiId-CUYHUXgP.js";import"./useControlled-Cmfvaful.js";import"./index-BIzhtmMD.js";import"./index-CV_T3ZWx.js";import"./isObject-BtxB2d-s.js";import"./InternalBackdrop-o-O31_oB.js";import"./composite-BLYmi_ZT.js";import"./index-E5eoVw6A.js";import"./getDisabledMountTransitionStyles-jsr2iyKL.js";import"./ToolbarRootContext-D-OgFfxn.js";import"./tick-D7vMFMoW.js";import"./svgIconContainer-uvoYHEep.js";import"./small-cross-Bq0Rd3mQ.js";import"./search-DEjEejFg.js";import"./cross-DwHZ8wsx.js";import"./useValueChanged-CyYxoKaI.js";import"./getPseudoElementBounds-CdbUSWec.js";import"./CompositeItem-DES--d3v.js";import"./makeExternalStore-BcIe4sBs.js";import"./BaseForm-CKF8l85v.js";import"./ActionButton-D6ugCtzY.js";import"./Button-Dsxz3sQ9.js";import"./SkeletonBar-BmvrkymP.js";import"./Tooltip-d1W559-2.js";import"./info-sign-BnZdsj18.js";import"./chevron-up-D0YBQb2g.js";import"./chevron-down-CS2_34kJ.js";import"./useEventCallback-CEYn9Z7G.js";import"./iconLoader-u1C63oal.js";import"./Switch-CwlGiDCw.js";import"./CompositeRoot-QE5K7UBS.js";import"./TimePicker-DNyxWyXi.js";import"./CollapsiblePanel-CNqItG4o.js";import"./error-D0LuxI0-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-C5qHzwaF.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
