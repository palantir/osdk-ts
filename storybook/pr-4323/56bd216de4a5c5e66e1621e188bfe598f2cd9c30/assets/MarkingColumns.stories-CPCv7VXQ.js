import{f as p,j as e}from"./iframe-xO7-cFQE.js";import{O as i}from"./object-table-DPPomAoY.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CjE4C0sP.js";import"./Table-DkXla0eu.js";import"./index-BOQrkF-F.js";import"./Dialog-C8Or7tBX.js";import"./cross-D5U-IDeN.js";import"./svgIconContainer-Bxzx9KVi.js";import"./useBaseUiId-DvKVHufz.js";import"./InternalBackdrop-C9ZmsvjR.js";import"./composite-CWWmbaS7.js";import"./index-BJwULR6g.js";import"./index-CXPZCOfE.js";import"./index-1a1U9ieG.js";import"./useEventCallback-fopAPD8Y.js";import"./SkeletonBar-f3m0sjLr.js";import"./LoadingCell-0MQBRXiw.js";import"./ColumnConfigDialog-CKmlFPhZ.js";import"./DraggableList-D_G4MIOq.js";import"./search-Bazo2FVF.js";import"./Input-99mwA4VF.js";import"./useControlled-Wgq9Q75K.js";import"./Button-BCHzki1U.js";import"./small-cross-BYaqaz9R.js";import"./ActionButton-DJcroEAc.js";import"./Checkbox-B89KfeZF.js";import"./useValueChanged-Dgs0e82c.js";import"./CollapsiblePanel-CGLiej8s.js";import"./MultiColumnSortDialog-wtHUP_vi.js";import"./MenuTrigger-u1xB01Kq.js";import"./CompositeItem-BPvfL8qH.js";import"./ToolbarRootContext-D7XQqVeD.js";import"./getDisabledMountTransitionStyles-aVxKVFQR.js";import"./getPseudoElementBounds-C2y6c8Y1.js";import"./chevron-down-hptZ4LWp.js";import"./index-DDxyKWUj.js";import"./error-n609TGyv.js";import"./BaseCbacBanner-cN_njO3E.js";import"./makeExternalStore-Czx_Amad.js";import"./Tooltip-DPJAxssW.js";import"./PopoverPopup-hp660gJk.js";import"./debounce-GWee0BQR.js";import"./useOsdkClient-CDqxUxHE.js";import"./tick-C49IxArq.js";import"./DropdownField-ScPov9Rd.js";import"./isEqual-DQYCwzyu.js";import"./withOsdkMetrics-BDGk6jsR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
