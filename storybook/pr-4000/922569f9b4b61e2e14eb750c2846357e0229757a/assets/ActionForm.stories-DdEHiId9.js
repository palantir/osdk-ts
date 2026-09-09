import{j as t,g as n}from"./iframe-BBZCzStV.js";import{A as r}from"./action-form-DUjGpVgu.js";import"./preload-helper-5SQDyWdl.js";import"./DropdownField-CcyuWoJs.js";import"./debounce-CV2RI2D0.js";import"./useOsdkClient-qOAfm0EP.js";import"./index-B0mBcXI4.js";import"./Input-CSnQRyFu.js";import"./useBaseUiId-B2Dwi3UQ.js";import"./useControlled-DoPklQtk.js";import"./index-Cj4Q5m-x.js";import"./index-V3B_uiL2.js";import"./PopoverPopup-Ct6679Cx.js";import"./InternalBackdrop-B_1kGoJ6.js";import"./composite-CFasADcm.js";import"./index-Csh22FK0.js";import"./getDisabledMountTransitionStyles-p7s1v2Wq.js";import"./ToolbarRootContext-BJ5gq2Ug.js";import"./tick-BCDmZou0.js";import"./svgIconContainer-DfBgJD9-.js";import"./small-cross-DTHtoiVl.js";import"./search-vc9aoGpm.js";import"./cross-CPvMVENn.js";import"./useValueChanged-DDicrYhc.js";import"./getPseudoElementBounds-CGyVBiW9.js";import"./CompositeItem-DCNZBIgo.js";import"./makeExternalStore-C0iVHY1V.js";import"./BaseForm-BLqq9qT5.js";import"./ActionButton-NPe1j-Pf.js";import"./Button-CfbDmY7F.js";import"./SkeletonBar-Dh6u025G.js";import"./Tooltip-CIld4EMB.js";import"./info-sign-Db5iavMZ.js";import"./chevron-up-BZkwAn-s.js";import"./chevron-down-CMFHrqJp.js";import"./useEventCallback-C7wdVJUu.js";import"./iconLoader-plfZbFi_.js";import"./CompositeRoot-BYRK20jY.js";import"./Switch-D1diXmF3.js";import"./TimePicker-CcyZS_tj.js";import"./CollapsiblePanel-DRW0CG7D.js";import"./error-DTmGvXOz.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-mfymYHOu.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
