import{j as t,g as n}from"./iframe-BJHh5Vyz.js";import{A as r}from"./action-form-8H11QRKk.js";import"./preload-helper-BEOBDvBb.js";import"./DropdownField-DEchhT8v.js";import"./debounce-Gc9yJQdi.js";import"./useOsdkClient-BZwIY2z4.js";import"./index-C19RBoJu.js";import"./Input-DhkgM9Ni.js";import"./useBaseUiId-eHvFwl9q.js";import"./useControlled-DRblTyuY.js";import"./index-FPDQ-3J4.js";import"./index-DuAaKh8Z.js";import"./PopoverPopup-fac766Lw.js";import"./InternalBackdrop-BqbazbcZ.js";import"./composite-CQHPO_Bw.js";import"./index-BcNome8U.js";import"./getDisabledMountTransitionStyles-D3dYUIEg.js";import"./ToolbarRootContext-CNIddhOS.js";import"./tick-CjnLz9Ic.js";import"./svgIconContainer-Oo_WGWgj.js";import"./small-cross-BcJCT5oZ.js";import"./search-CygATN7t.js";import"./cross-BcEML_Ki.js";import"./useValueChanged-CIPyPD3s.js";import"./getPseudoElementBounds-CT0X_ePj.js";import"./CompositeItem-6AqsuMkJ.js";import"./makeExternalStore-nf7wa3ij.js";import"./BaseForm-CJAdj62Z.js";import"./ActionButton-UaUebUqN.js";import"./Button-XY8oXyEd.js";import"./SkeletonBar-CpykcO5g.js";import"./Tooltip-BJV71zjW.js";import"./info-sign-D7ietGoX.js";import"./chevron-up-DCmetB5B.js";import"./chevron-down-g5IBPJxD.js";import"./useEventCallback-SQylOg7X.js";import"./iconLoader-Bc7dzNaB.js";import"./Switch-Czf67oMP.js";import"./CompositeRoot-B6V7gv9d.js";import"./TimePicker-Cl4O6xGs.js";import"./CollapsiblePanel-CGqwtuWj.js";import"./error-D2VhnADa.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-DZ9Y5lOn.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
