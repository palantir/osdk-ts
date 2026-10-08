import{j as t,g as n}from"./iframe-COeKHpt9.js";import{A as r}from"./action-form-DEM95y7x.js";import"./preload-helper-BpPSpj7h.js";import"./DropdownField-C5e04fQa.js";import"./debounce-DGv_zF9U.js";import"./useOsdkClient-0CShZdbB.js";import"./index--VOZVAr7.js";import"./Input-BgvgMSkQ.js";import"./useBaseUiId-AZYk0Vbu.js";import"./useControlled-Bj6n9A7a.js";import"./index-vOPTDT5X.js";import"./index-Crl2o2c4.js";import"./PopoverPopup-Bmo2uNMt.js";import"./InternalBackdrop-QLXBjkD3.js";import"./composite-DvaIADEs.js";import"./index-Ds0VFbur.js";import"./getDisabledMountTransitionStyles-BWgLfYBf.js";import"./ToolbarRootContext-DpPmKmnD.js";import"./tick-C0ONndDH.js";import"./svgIconContainer-DtZ0wDAF.js";import"./small-cross-6sOeNBT7.js";import"./search-CcRznbWc.js";import"./cross-D5gXcdmB.js";import"./useValueChanged-D7ycyibz.js";import"./getPseudoElementBounds-CH-q1Mo7.js";import"./CompositeItem-Dt_9zGFK.js";import"./makeExternalStore-BnwQyhvv.js";import"./BaseForm-DgRJl9Bc.js";import"./ActionButton-BZHW0fe2.js";import"./Button-BcUZxYUb.js";import"./SkeletonBar-V0L810li.js";import"./Tooltip-JasgHE7P.js";import"./info-sign-CibrLSlT.js";import"./chevron-up-BHvOrBFw.js";import"./chevron-down-BCN0Zf9y.js";import"./useEventCallback-BWCgnPIj.js";import"./iconLoader-BjshuBkN.js";import"./Switch-CVWclBZO.js";import"./CompositeRoot-CgJy1gw_.js";import"./TimePicker-D-3dTM9_.js";import"./CollapsiblePanel-y0qJ1Rd6.js";import"./error-cky3iDMt.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-b9tLwYR2.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
