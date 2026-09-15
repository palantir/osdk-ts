import{j as t,g as n}from"./iframe-DSG-Gahl.js";import{A as r}from"./action-form-B1ixJFqT.js";import"./preload-helper-DD3-CUB8.js";import"./DropdownField-CjqZMfYC.js";import"./debounce-MyXx4KSr.js";import"./useOsdkClient-0TCUTiK2.js";import"./index-4o4hAzg4.js";import"./Input-DBWCKen9.js";import"./useBaseUiId-Br7wSVRu.js";import"./useControlled-BS70aI_K.js";import"./index-BRRswYIi.js";import"./index-CphGNIJN.js";import"./PopoverPopup-B_5MQfps.js";import"./InternalBackdrop-CYQOhGhx.js";import"./composite-WUh_Mv2U.js";import"./index-XAVsYiFD.js";import"./getDisabledMountTransitionStyles-W0Uyfg0E.js";import"./ToolbarRootContext-B8oHTFsm.js";import"./tick-DEJdcIdx.js";import"./svgIconContainer-CkL2iDb7.js";import"./small-cross-CqhPSG41.js";import"./search-Cif2ZQOV.js";import"./cross-DzIvG2rT.js";import"./useValueChanged-B-UgLZ_R.js";import"./getPseudoElementBounds-DDNjc80p.js";import"./CompositeItem-spSeCvAe.js";import"./makeExternalStore-eZw-8kVK.js";import"./BaseForm-BzsXQHhO.js";import"./ActionButton-CuCH1v84.js";import"./Button-DCXgUJWi.js";import"./SkeletonBar-D83dsI7U.js";import"./Tooltip-Ci09cpDJ.js";import"./info-sign-kaCJjUNb.js";import"./chevron-up-X8KdYBdz.js";import"./chevron-down-CBanfjsL.js";import"./useEventCallback-QoQzxgWp.js";import"./iconLoader-BzUmyXST.js";import"./CompositeRoot-CgYyjO2Y.js";import"./Switch-DjW-ba7x.js";import"./TimePicker-DByqktNh.js";import"./CollapsiblePanel-VPfhnzag.js";import"./error-DgA6RGKH.js";import"./assertUnreachable-tCT10eXl.js";import"./withOsdkMetrics-CBCC75vt.js";const p=n.actionDefinition;function m(){return t.jsx("div",{className:"osdkFormCard",children:t.jsx(r,{actionDefinition:p,showFormTitle:!0})})}const $={title:"Components/ActionForm",component:m,tags:["beta"],parameters:{controls:{expanded:!0},docs:{description:{component:"ActionForm fetches action metadata through @osdk/react, renders fields for each action parameter, validates user input, and submits through useOsdkAction."}}}},e={parameters:{docs:{description:{story:"Shows ActionForm's default behavior: it maps action metadata to generated field components when no formFieldDefinitions are provided."},source:{code:`import { ActionForm } from "@osdk/react-components/action-form";

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
