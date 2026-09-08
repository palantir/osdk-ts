import{j as t,g as n}from"./iframe-BXNko62s.js";import{A as r}from"./action-form-C1OcXrQy.js";import"./preload-helper-Bj6UNjqi.js";import"./DropdownField--_gkEn_J.js";import"./debounce-DTLh2Ef3.js";import"./useOsdkClient-Cn5D3g-o.js";import"./index-BraeF99A.js";import"./Input-DXEo1WM0.js";import"./useBaseUiId-Ca98QWO9.js";import"./useControlled-B2FQFptp.js";import"./index-BFgBDgmk.js";import"./index-CCQ5u4Ue.js";import"./PopoverPopup-fmJe70Q9.js";import"./InternalBackdrop-BbBElhcW.js";import"./composite-C9CWzIa9.js";import"./index-BJy_f7fa.js";import"./getDisabledMountTransitionStyles-DcJvx271.js";import"./ToolbarRootContext-BpFYZMLv.js";import"./tick-qSbAdot2.js";import"./svgIconContainer-DY8ASQOr.js";import"./small-cross-C8K6sWXT.js";import"./search-0j6eRv30.js";import"./cross-CxMC5EUY.js";import"./useValueChanged-BQ311yh_.js";import"./getPseudoElementBounds-8XCyV84c.js";import"./CompositeItem-BnI6v8nN.js";import"./makeExternalStore-BdN3LE2k.js";import"./BaseForm-CR7QlpBQ.js";import"./ActionButton-BE6hJp0R.js";import"./Button-Cb25ceXV.js";import"./SkeletonBar-D1qxCam4.js";import"./Tooltip-Cy_tDvEN.js";import"./info-sign-D_aqqUbd.js";import"./chevron-up-CXqsWlQ8.js";import"./chevron-down-Za9QV_62.js";import"./useEventCallback-DgeT9ZNj.js";import"./iconLoader-Dmlfhs90.js";import"./CompositeRoot-LFz6s7of.js";import"./Switch-K2PHsJQo.js";import"./TimePicker-cEiSnGzI.js";import"./CollapsiblePanel-Cyvbu1GF.js";import"./error-CgTFtvP9.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-BmO3Nivv.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
