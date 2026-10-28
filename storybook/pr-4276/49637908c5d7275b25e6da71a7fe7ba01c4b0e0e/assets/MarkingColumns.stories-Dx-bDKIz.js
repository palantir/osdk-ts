import{f as p,j as e}from"./iframe-BFVvXCDn.js";import{O as i}from"./object-table-D3-elgUM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-50_WzFUV.js";import"./Table-CrnkCGgg.js";import"./index-QM5k4kGb.js";import"./Dialog-ChCe0ln8.js";import"./cross-BFaVqKHr.js";import"./svgIconContainer-BV-Z1JXi.js";import"./useBaseUiId-B694u7eA.js";import"./InternalBackdrop-DBCVqNCu.js";import"./composite-CzVxjBsa.js";import"./index-iRevsRnR.js";import"./index-BOeHgaJB.js";import"./index-CqQv2dpe.js";import"./useEventCallback-mJtTvRIv.js";import"./SkeletonBar-Bmfk3osh.js";import"./LoadingCell-BCQcznuJ.js";import"./ColumnConfigDialog-B4G1AxcS.js";import"./DraggableList-DsdqaVxR.js";import"./search-CW9s8WSc.js";import"./Input-Dtig63-B.js";import"./useControlled-DyhWa7C1.js";import"./Button-Dcbnl--f.js";import"./small-cross-BxlAPzIk.js";import"./ActionButton-1gMKJ2dZ.js";import"./Checkbox-BtI0IIOe.js";import"./useValueChanged-BGrg1pf-.js";import"./CollapsiblePanel-5KoLIkeE.js";import"./MultiColumnSortDialog-C7gZDRiC.js";import"./MenuTrigger-P7WZCQyo.js";import"./CompositeItem-f5g69QxK.js";import"./ToolbarRootContext-CrlmdYIj.js";import"./getDisabledMountTransitionStyles-BOSuCcSN.js";import"./getPseudoElementBounds-D-HLiNmi.js";import"./chevron-down-BOFD2Flq.js";import"./index-BMCmLaDr.js";import"./error-DOU--p1t.js";import"./BaseCbacBanner-DO3fHETM.js";import"./makeExternalStore-BWSWF8JC.js";import"./Tooltip-CALPreUU.js";import"./isObject-C2c9eo6X.js";import"./debounce-DWkSOkQq.js";import"./useOsdkClient-Cl7GKeeY.js";import"./tick-CoqVexrK.js";import"./DropdownField-DspSlDyP.js";import"./isEqual-B-ghy4pr.js";import"./_baseIsEqual-Cw0xf_Tt.js";import"./withOsdkMetrics-NltFnboY.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const ir=["MarkingColumns"];export{r as MarkingColumns,ir as __namedExportsOrder,nr as default};
