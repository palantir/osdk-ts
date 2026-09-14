import{f as p,j as e}from"./iframe-D3DqoIpf.js";import{O as i}from"./object-table-5-cStO1F.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Bur1EzB5.js";import"./Table-DnIRlfeH.js";import"./index-BThkDgxi.js";import"./Dialog-Dt93nrAE.js";import"./cross-CAMhptAD.js";import"./svgIconContainer-CoUDa19N.js";import"./useBaseUiId-BOGuxokK.js";import"./InternalBackdrop-CX5pFpyQ.js";import"./composite-DOJBzh5B.js";import"./index-BF36rFqh.js";import"./index-CaWcagsp.js";import"./index-CLu7smVU.js";import"./useEventCallback-BwRfc_LO.js";import"./SkeletonBar-DhPBeMf1.js";import"./LoadingCell-DYjb1NAx.js";import"./ColumnConfigDialog-B-slaITe.js";import"./DraggableList-hn4vdS_9.js";import"./search-DzOWxMYj.js";import"./Input-Ba9sqiE-.js";import"./useControlled-R3QnTpFh.js";import"./Button-D1m-bnZN.js";import"./small-cross-Cx3vpP8Z.js";import"./ActionButton-BmFxbrY9.js";import"./Checkbox-BnWvCHaF.js";import"./useValueChanged-h8m0Y_Ok.js";import"./CollapsiblePanel-CvE2FJWC.js";import"./MultiColumnSortDialog-B3C3keJ9.js";import"./MenuTrigger-Do9R63Sr.js";import"./CompositeItem-DmhK9sjv.js";import"./ToolbarRootContext-FLVSUoPt.js";import"./getDisabledMountTransitionStyles-MKKxqo0-.js";import"./getPseudoElementBounds-DoOAyvUg.js";import"./chevron-down-BYhG0KSh.js";import"./index-CAWoAfLN.js";import"./error-DmP3oCyF.js";import"./BaseCbacBanner-CCzrCVQf.js";import"./makeExternalStore-CWigMI40.js";import"./Tooltip-BFQd_OrJ.js";import"./PopoverPopup-Cv0Kt1cr.js";import"./debounce-QvYOae8J.js";import"./useOsdkClient-BZ2Q6Hqc.js";import"./tick-C5EOZ80L.js";import"./DropdownField-CwjqwoqN.js";import"./isEqual-DNuZwAZe.js";import"./withOsdkMetrics-Dzhtom8t.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />`}}},render:a=>e.jsx("div",{style:{height:480},children:e.jsx(i,{...a})})};var t,o,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  parameters: {
    docs: {
      source: {
        code: \`const columnDefinitions = [
  { locator: { type: "property", id: "fullName" } },
  { locator: { type: "property", id: "department" } },
  // MANDATORY marking — rendered as one banner per marking
  { locator: { type: "property", id: "classificationMarking" } },
  // CBAC marking — rendered with CbacBanner
  { locator: { type: "property", id: "clearanceMarking" } },
];

<ObjectTable objectType={Employee} columnDefinitions={columnDefinitions} />\`
      }
    }
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const nr=["MarkingColumns"];export{r as MarkingColumns,nr as __namedExportsOrder,or as default};
