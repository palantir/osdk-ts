import{j as t,g as n}from"./iframe-DyyhsHPN.js";import{A as r}from"./action-form-CnwfdRnQ.js";import"./preload-helper-TecF9w53.js";import"./DropdownField-CtXOtwg0.js";import"./debounce-4BLi9EBr.js";import"./useOsdkClient-oeSeXjY9.js";import"./index-CvvBsxWW.js";import"./Input-DLcXZfv5.js";import"./useBaseUiId-BJ6PIN04.js";import"./useControlled-u76uhEJm.js";import"./index-BbJuL6dd.js";import"./index-CGUIbyJe.js";import"./PopoverPopup-D4mGjEGR.js";import"./InternalBackdrop-BngMdUq0.js";import"./composite-Bsp9V2TC.js";import"./index-Blnj9NS0.js";import"./getDisabledMountTransitionStyles-B07p6-VI.js";import"./ToolbarRootContext-DTFkxjo1.js";import"./tick-3uXgu5u5.js";import"./svgIconContainer-g2nhA_co.js";import"./small-cross-CR1TDLwP.js";import"./search-CPGUiXny.js";import"./cross-DpLnPIVs.js";import"./useValueChanged-DhqK6Cgu.js";import"./getPseudoElementBounds-CmtmchTY.js";import"./CompositeItem-COlnvMhp.js";import"./makeExternalStore-sflRCuNQ.js";import"./BaseForm-CaUNMDeK.js";import"./ActionButton-BPWFDy9w.js";import"./Button-xW-9IrmO.js";import"./SkeletonBar-CFyXvkmW.js";import"./Tooltip-C6FTM4hx.js";import"./info-sign-D0TS8bds.js";import"./chevron-up-DZKDbO-O.js";import"./chevron-down-7VC2t8Hz.js";import"./useEventCallback-BxrNV8_m.js";import"./iconLoader-DtM5xWu-.js";import"./Switch-C-MIBz56.js";import"./CompositeRoot-DBGQOlpG.js";import"./TimePicker-DZ9ggXgD.js";import"./CollapsiblePanel-F0G2oMiY.js";import"./error-CHS0y63D.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DkePQGfR.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
