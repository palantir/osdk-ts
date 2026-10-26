import{j as t,g as n}from"./iframe-7zkNpsTb.js";import{A as r}from"./action-form-DPhdgkTw.js";import"./preload-helper-BcwadNu2.js";import"./DropdownField-C8ry4gZT.js";import"./debounce-CddDKvV0.js";import"./useOsdkClient-Vip7aKrf.js";import"./index-D2Ps7yda.js";import"./Input-Qt7qv0fd.js";import"./useBaseUiId-KSlThZEb.js";import"./useControlled-CgLNclS7.js";import"./index-CVa5QU3-.js";import"./index-DD_YShHf.js";import"./PopoverPopup-D-_EHFJQ.js";import"./InternalBackdrop-BHCJp7SO.js";import"./composite-BrxcTD8Y.js";import"./index-B8Wuwd1p.js";import"./getDisabledMountTransitionStyles-DWBf3DRe.js";import"./ToolbarRootContext-DK5I1UJe.js";import"./tick-BYcH1X9T.js";import"./svgIconContainer-WZg9oowH.js";import"./small-cross-Cqucs5l-.js";import"./search-LTMAICSm.js";import"./cross-CuqDFG72.js";import"./useValueChanged-CcWIuI5C.js";import"./getPseudoElementBounds-CRqDORYM.js";import"./CompositeItem-B9MRs6kj.js";import"./makeExternalStore-DZpAF_p8.js";import"./BaseForm-LJQPG8mJ.js";import"./ActionButton-DOn_4WcG.js";import"./Button-CF1rIE6I.js";import"./SkeletonBar-DOAgUDTQ.js";import"./Tooltip-ClphVmvg.js";import"./info-sign-DnaKCAVo.js";import"./chevron-up--u-AHcXJ.js";import"./chevron-down-R1agRcMd.js";import"./useEventCallback-CNj_iPP2.js";import"./iconLoader-BYXdgJua.js";import"./Switch-CS9uflav.js";import"./CompositeRoot-_klf7eT0.js";import"./TimePicker-BlIjwo4z.js";import"./CollapsiblePanel-BJ-_vjCN.js";import"./error-CKvp5L_L.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BuwNXHNi.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
