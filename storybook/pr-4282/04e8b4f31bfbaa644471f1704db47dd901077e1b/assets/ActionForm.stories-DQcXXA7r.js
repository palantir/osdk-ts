import{j as t,g as n}from"./iframe-DWrTLUp6.js";import{A as r}from"./action-form-DszPb-RE.js";import"./preload-helper-G5GldQrR.js";import"./DropdownField-CQ3rIRKm.js";import"./debounce-Bw-UdsSq.js";import"./useOsdkClient-DR78McuN.js";import"./index-tEnhVYEp.js";import"./Input-Dd76dU6P.js";import"./useBaseUiId-X8UvLlac.js";import"./useControlled-BL4uBJXc.js";import"./index-m17_hvWN.js";import"./index-DtPEGSb3.js";import"./PopoverPopup-CSl22ryn.js";import"./InternalBackdrop-CyXd8Wg7.js";import"./composite-CZ2VobqK.js";import"./index-B_mSXvUP.js";import"./getDisabledMountTransitionStyles-CGESU4zi.js";import"./ToolbarRootContext-Bh1zwv5x.js";import"./tick-C8bPj3R_.js";import"./svgIconContainer-BsgOYiaE.js";import"./small-cross-B8JdY_sl.js";import"./search-Cj067yfV.js";import"./cross-rPpE888H.js";import"./useValueChanged-DT_nuOVZ.js";import"./getPseudoElementBounds-CjM3OLtE.js";import"./CompositeItem-BpSxYl_N.js";import"./makeExternalStore-BVTsUjUO.js";import"./BaseForm-CF_YSXzL.js";import"./ActionButton-Ce4LrRpa.js";import"./Button-kvP0U3yl.js";import"./SkeletonBar-BIwjOvZv.js";import"./Tooltip-sCGgggo5.js";import"./info-sign-B3lMZqyw.js";import"./chevron-up-rKTYpzDt.js";import"./chevron-down-BdqS2CCw.js";import"./useEventCallback-DDhfB_BM.js";import"./iconLoader-DOawcuKw.js";import"./Switch-DRyNJ4xX.js";import"./CompositeRoot-r3dy_26P.js";import"./TimePicker-BDaftYnG.js";import"./CollapsiblePanel-B0Fh3EI1.js";import"./error-mT38HeTS.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DjJmHGOy.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
