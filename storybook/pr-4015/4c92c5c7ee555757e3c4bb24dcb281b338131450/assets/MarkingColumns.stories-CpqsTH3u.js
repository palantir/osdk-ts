import{f as p,j as e}from"./iframe-gIP5vbeg.js";import{O as i}from"./object-table-BTUbDvfH.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DCg2y8p9.js";import"./Table-BHUmFmlp.js";import"./index-Wi5AWfmM.js";import"./Dialog-DYoPLec3.js";import"./cross-B_HnIjdo.js";import"./svgIconContainer-DxHht3SG.js";import"./useBaseUiId-Dr1rdLlf.js";import"./InternalBackdrop-CCoswTJ_.js";import"./composite-DMSJBqo2.js";import"./index-Cj6M27jD.js";import"./index-Dq6-SYm_.js";import"./index-9oyPmpRn.js";import"./useEventCallback-N163Ubom.js";import"./SkeletonBar-jY_IAvUh.js";import"./LoadingCell-De1aeIAY.js";import"./ColumnConfigDialog-CC9aBHAY.js";import"./DraggableList-DzPDeTXj.js";import"./search-CUlcmVhj.js";import"./Input-BP15Y0-R.js";import"./useControlled-Ch-R23iR.js";import"./Button-CcxNlLiB.js";import"./small-cross-BtgfJF3w.js";import"./ActionButton-DOUTcJvC.js";import"./Checkbox-DamPzVbT.js";import"./useValueChanged-PwGMfD57.js";import"./CollapsiblePanel-DLO1bg9n.js";import"./MultiColumnSortDialog-JtDqanXj.js";import"./MenuTrigger-DIIl-KUX.js";import"./CompositeItem-GAdV3l7-.js";import"./ToolbarRootContext-B8olE9Qo.js";import"./getDisabledMountTransitionStyles-9Dn4HHWl.js";import"./getPseudoElementBounds-BNdUGtxd.js";import"./chevron-down-DCLBAa3z.js";import"./index-TRPDJKbO.js";import"./error-3Pj1FJ1e.js";import"./BaseCbacBanner-DvQO403k.js";import"./makeExternalStore-CwiGseBr.js";import"./Tooltip-xk86MvJJ.js";import"./PopoverPopup-BRrodumS.js";import"./debounce-I28cmmgy.js";import"./useOsdkClient-DkjZXsOx.js";import"./tick-Dx25vGYA.js";import"./DropdownField-B1srtEQF.js";import"./isEqual-DFNZxvw8.js";import"./withOsdkMetrics-CUsP9g0j.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
