import{j as t,g as n}from"./iframe-DRNk89ZH.js";import{A as r}from"./action-form-D9HGKZem.js";import"./preload-helper-CL4j9Mgj.js";import"./DropdownField-BLLbuNZd.js";import"./debounce-CZTrh2IE.js";import"./useOsdkClient-Bnc6agZG.js";import"./index-CS7yPxi2.js";import"./Input-DehlDyjB.js";import"./useBaseUiId-DA__XCsT.js";import"./useControlled-CE505VKa.js";import"./index-DZWIzD1L.js";import"./index-Du8pqTKc.js";import"./PopoverPopup-C0n4VFaw.js";import"./InternalBackdrop-DyXkqyZv.js";import"./composite-8utJ-QhI.js";import"./index-CR7ijv3D.js";import"./getDisabledMountTransitionStyles-BQM7zsXg.js";import"./ToolbarRootContext-BDHJtdhK.js";import"./tick-C69MPngT.js";import"./svgIconContainer-BYMe6jPQ.js";import"./small-cross-Blo856Jy.js";import"./search-Cy6sHHpP.js";import"./cross-CdajDpt0.js";import"./useValueChanged-BB_kvMD4.js";import"./getPseudoElementBounds-BcErDK4h.js";import"./CompositeItem-DF-AHu7i.js";import"./makeExternalStore-B6lEYqi9.js";import"./BaseForm-BscnFf6A.js";import"./ActionButton-ByUIz9Jq.js";import"./Button-Br4k3ffi.js";import"./SkeletonBar-D55GtZ7r.js";import"./Tooltip-YY6aadVm.js";import"./info-sign-Y0pHsf-r.js";import"./chevron-up-Cc-nqik3.js";import"./chevron-down-CphPepB3.js";import"./useEventCallback-Dix1JuJQ.js";import"./iconLoader-ipHcEf6u.js";import"./Switch-B8qnMaxt.js";import"./CompositeRoot-l49tAaAH.js";import"./TimePicker-BTPiwXtf.js";import"./CollapsiblePanel-Bwzr5sqV.js";import"./error-B_EjGR4-.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-B1ACrfWT.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
