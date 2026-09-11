import{j as t,g as n}from"./iframe-CZuJk2mr.js";import{A as r}from"./action-form-CB-feDcp.js";import"./preload-helper-D-OLzWEl.js";import"./DropdownField-v7pGuAWY.js";import"./debounce-BD5a1j86.js";import"./useOsdkClient-BPa-6pZZ.js";import"./index-DDksSLCw.js";import"./Input-CRD7X-5R.js";import"./useBaseUiId-oT1O9JCt.js";import"./useControlled-Bv0HDfXo.js";import"./index-Db51obv8.js";import"./index-CwqMcoP9.js";import"./PopoverPopup-Cbun7Jdd.js";import"./InternalBackdrop-D7By8IzE.js";import"./composite-sxVd7y-x.js";import"./index-CchHo8N5.js";import"./getDisabledMountTransitionStyles-wKWoptbs.js";import"./ToolbarRootContext-DCv4bsB-.js";import"./tick-DsvM9X65.js";import"./svgIconContainer-D_03U5sn.js";import"./small-cross-Cks8he4h.js";import"./search-2YrO29UM.js";import"./cross-cMU2e2iq.js";import"./useValueChanged-B3gY-jcJ.js";import"./getPseudoElementBounds-B7h64O9N.js";import"./CompositeItem-CuTnwCK-.js";import"./makeExternalStore-BxStD-Ll.js";import"./BaseForm-VWkm9IuO.js";import"./ActionButton-Y1hJnLuM.js";import"./Button-8AWdZuBH.js";import"./SkeletonBar-KIkU-F0P.js";import"./Tooltip-pvJM2LHO.js";import"./info-sign-09UMJa3r.js";import"./chevron-up-Cbd9982B.js";import"./chevron-down-CxdBBEPV.js";import"./useEventCallback-C-Y_eJLU.js";import"./iconLoader-Bm8priNq.js";import"./CompositeRoot-CvipESF0.js";import"./Switch-BNTxqlqf.js";import"./TimePicker-DFxu0njg.js";import"./CollapsiblePanel-BSzHq4mN.js";import"./error-BX22AwHJ.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-D7T9qYjs.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
