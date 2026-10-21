import{j as t,g as n}from"./iframe-DjY-zq4T.js";import{A as r}from"./action-form-BS11Dhov.js";import"./preload-helper-CSEk-Qtk.js";import"./DropdownField-DRuEdDXo.js";import"./debounce-Dw9byVJT.js";import"./useOsdkClient-B0KEPQnu.js";import"./index-06oOGq9j.js";import"./Input-C4MHDVmb.js";import"./useBaseUiId-DFp5uyUH.js";import"./useControlled-B48Xem7I.js";import"./index-BMjnIn7f.js";import"./index-DcxaLnPt.js";import"./PopoverPopup-CTuviyVj.js";import"./InternalBackdrop-D26JwQLJ.js";import"./composite-DCY6uWMU.js";import"./index-DGTC5i-x.js";import"./getDisabledMountTransitionStyles-6jqwt93X.js";import"./ToolbarRootContext-Ck5kVxm5.js";import"./tick-BxkXNXsP.js";import"./svgIconContainer-CNapEC-k.js";import"./small-cross-BKuGvg88.js";import"./search-BkyKKFx6.js";import"./cross-DERUs9CV.js";import"./useValueChanged-CSpnuk84.js";import"./getPseudoElementBounds-By1yLBCg.js";import"./CompositeItem-OryclLtR.js";import"./makeExternalStore-CXgGJpDa.js";import"./BaseForm-CKbo28be.js";import"./ActionButton-ftxjW6SC.js";import"./Button-DVfilVoY.js";import"./SkeletonBar-Dx8ysvQu.js";import"./Tooltip-C_N0df2q.js";import"./info-sign-Qu8s75Rs.js";import"./chevron-up-D2US2pCd.js";import"./chevron-down-KVYlhqEa.js";import"./useEventCallback-PzgcCUA9.js";import"./iconLoader-TzfwtDJC.js";import"./Switch-C1AyCY0f.js";import"./CompositeRoot-imtxFA0F.js";import"./TimePicker-o92n8QWd.js";import"./CollapsiblePanel-DgbylnBx.js";import"./error-g17Ipf4s.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CBDxrN4p.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
