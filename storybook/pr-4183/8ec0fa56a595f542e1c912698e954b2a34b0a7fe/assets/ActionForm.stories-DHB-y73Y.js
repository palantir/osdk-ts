import{j as t,g as n}from"./iframe-C4U2JRoY.js";import{A as r}from"./action-form-DVxC8KsX.js";import"./preload-helper-DN3ZEv3h.js";import"./DropdownField-DM7w76cT.js";import"./debounce-X49geldC.js";import"./useOsdkClient-BAmivmrL.js";import"./index-sST8iqoh.js";import"./Input-Bt5QmGO0.js";import"./useBaseUiId-t75_1mYb.js";import"./useControlled-DgRL6il9.js";import"./index-CwxTqGIm.js";import"./index-BAotWep5.js";import"./PopoverPopup-DnvLtuHj.js";import"./InternalBackdrop-DLXodZp2.js";import"./composite-DyzBkCx-.js";import"./index-C6xQgxB6.js";import"./getDisabledMountTransitionStyles-BTRmRtbC.js";import"./ToolbarRootContext-BAVcRF15.js";import"./tick-BWNn2Zwm.js";import"./svgIconContainer-Bqyk4ukb.js";import"./small-cross-CD5bCdAl.js";import"./search-DGpCoBRn.js";import"./cross-BjW1gIQB.js";import"./useValueChanged-CVpGeeut.js";import"./getPseudoElementBounds-Gnx7A5W2.js";import"./CompositeItem-2E0ykI3P.js";import"./makeExternalStore-BDSIsETy.js";import"./BaseForm-j8Fb1vcX.js";import"./ActionButton-NrurrT_q.js";import"./Button-_EOncV-8.js";import"./SkeletonBar-CA43xrQl.js";import"./Tooltip-CcfNdB-z.js";import"./info-sign-DkmO0WNQ.js";import"./chevron-up-5MsGEDsY.js";import"./chevron-down-dh5AFKhr.js";import"./useEventCallback-DztBvHUA.js";import"./iconLoader-CVkX9q9S.js";import"./Switch-ClJ3Uqka.js";import"./CompositeRoot-Ds9KXhrb.js";import"./TimePicker-DOvn1rkW.js";import"./CollapsiblePanel-e6QLkFeN.js";import"./error-CEamcZeP.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DqoHWRxV.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
