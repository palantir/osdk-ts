import{j as t,g as n}from"./iframe-nHeyQ6G0.js";import{A as r}from"./action-form-Cy2Wn9aw.js";import"./preload-helper-CQHnyaJj.js";import"./DropdownField-B02tWq-y.js";import"./debounce-DpokpJG9.js";import"./useOsdkClient-DdGx6s8m.js";import"./index-Cepl2Gdo.js";import"./Input-LHo6mX7j.js";import"./useBaseUiId-WP9Qsa8B.js";import"./useControlled-BEwPeN8G.js";import"./index-DDrT1OpE.js";import"./index-BwIe69Hj.js";import"./PopoverPopup-3A5a03nx.js";import"./InternalBackdrop-BhOu_nRs.js";import"./composite-BYQJTx_c.js";import"./index-B4LSn0e3.js";import"./getDisabledMountTransitionStyles-B3-icwrX.js";import"./ToolbarRootContext-CrhI_j71.js";import"./tick-Baztb2JM.js";import"./svgIconContainer-CLZNV5by.js";import"./small-cross-D5y46BPP.js";import"./search-nN6muyjH.js";import"./cross-BY7_vW_g.js";import"./useValueChanged-CTSv8K7w.js";import"./getPseudoElementBounds-CFXLoVOU.js";import"./CompositeItem-Y1Nghizw.js";import"./makeExternalStore-COs31IKH.js";import"./BaseForm-BDFuDVTE.js";import"./ActionButton-BdRYsIpx.js";import"./Button-OJtt4Wi3.js";import"./SkeletonBar-B4LZAubO.js";import"./Tooltip-ewszX06o.js";import"./info-sign-QnbrXsxE.js";import"./chevron-up-CL7eFYbY.js";import"./chevron-down-DWkmyfL1.js";import"./useEventCallback-DDta6l4G.js";import"./iconLoader-DVuNT74j.js";import"./Switch-DB5oswmz.js";import"./CompositeRoot-DVmkgFb8.js";import"./TimePicker-CIWjL40d.js";import"./CollapsiblePanel-DGVjgwmu.js";import"./error-qX2wkXkr.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CYsyTWZq.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
