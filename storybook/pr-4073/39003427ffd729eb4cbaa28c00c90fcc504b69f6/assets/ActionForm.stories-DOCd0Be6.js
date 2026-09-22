import{j as t,g as n}from"./iframe-CNVlK6B5.js";import{A as r}from"./action-form-DYjjfD0M.js";import"./preload-helper-D6U9hvSn.js";import"./DropdownField-JZsjxyDw.js";import"./debounce-LvB1QRts.js";import"./useOsdkClient-DSUKa8VK.js";import"./index-BIcFjsCk.js";import"./Input-BcMyy9hm.js";import"./useBaseUiId-oIpQHClg.js";import"./useControlled-CIn-ajlC.js";import"./index-CRgut8Os.js";import"./index-CRWNiz7H.js";import"./PopoverPopup-B9T3QljB.js";import"./InternalBackdrop-BLlX82gh.js";import"./composite-9AJkVSIl.js";import"./index-bx27PV2G.js";import"./getDisabledMountTransitionStyles-BQG1c3sQ.js";import"./ToolbarRootContext-B65PxelA.js";import"./tick-hJyc2tqL.js";import"./svgIconContainer-CkEgUKYH.js";import"./small-cross-DbE0dAvf.js";import"./search-CqRM5I4x.js";import"./cross-Cd5yBkhc.js";import"./useValueChanged-COVZ159z.js";import"./getPseudoElementBounds-DOWcaHQH.js";import"./CompositeItem-DhWvIZCc.js";import"./makeExternalStore-AThIzlcn.js";import"./BaseForm-CwLZ01Aw.js";import"./ActionButton-CeSKu1lp.js";import"./Button-BTD6ABzp.js";import"./SkeletonBar-C22W37Hx.js";import"./Tooltip-BydjewTb.js";import"./info-sign-DCL2jjyp.js";import"./chevron-up-BZUKeeD1.js";import"./chevron-down-D3H5NEc0.js";import"./useEventCallback-BYr5JJCz.js";import"./iconLoader-BFGbkgQ_.js";import"./Switch-C9JK_Xdd.js";import"./CompositeRoot-CWbC-1lW.js";import"./TimePicker-DRKO2BSh.js";import"./CollapsiblePanel-Di-Gvidl.js";import"./error-Cf_L3Bxv.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-oHno8_nm.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
