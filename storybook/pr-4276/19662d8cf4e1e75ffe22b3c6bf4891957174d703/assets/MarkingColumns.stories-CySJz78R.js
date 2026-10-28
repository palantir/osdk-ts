import{f as p,j as e}from"./iframe-CStnt8bf.js";import{O as i}from"./object-table-DFsXId9i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BHFu-ydw.js";import"./Table-DBS6XJdH.js";import"./index-bIM1mjE2.js";import"./Dialog-CkqR53d9.js";import"./cross-CzL3ilF7.js";import"./svgIconContainer-CBrsISO6.js";import"./useBaseUiId-D9TkSWZv.js";import"./InternalBackdrop-dpQuuCiD.js";import"./composite-DIpMeE4S.js";import"./index-Dubonfnq.js";import"./index-VT6Dn2OL.js";import"./index-DyrSN_o7.js";import"./useEventCallback-Ds_cQgpI.js";import"./SkeletonBar-6Pwtzhfc.js";import"./LoadingCell-DbhG2pOg.js";import"./ColumnConfigDialog-Cx-LiGAh.js";import"./DraggableList-DHNVyXK9.js";import"./search-BrGXguj5.js";import"./Input-BxZoPAuB.js";import"./useControlled-B4F-euPl.js";import"./Button-BTOFQ1SZ.js";import"./small-cross-DKMVFFWv.js";import"./ActionButton-DOBKUozS.js";import"./Checkbox-Dx3AAe_X.js";import"./useValueChanged-DwaCIejN.js";import"./CollapsiblePanel-BDHPVZWV.js";import"./MultiColumnSortDialog-D2eHp6DO.js";import"./MenuTrigger-NDl8CeUW.js";import"./CompositeItem-BdSAWgXI.js";import"./ToolbarRootContext-Dy3DBHgn.js";import"./getDisabledMountTransitionStyles-9rWadWne.js";import"./getPseudoElementBounds-BjFdhu5l.js";import"./chevron-down-DP-5q6nZ.js";import"./index-BZfBBfBl.js";import"./error-CM07sBvh.js";import"./BaseCbacBanner-D4DXqewK.js";import"./makeExternalStore-Cv8ow0-9.js";import"./Tooltip-BV608A00.js";import"./isObject-DTA28_gJ.js";import"./debounce-CBH2mxRm.js";import"./useOsdkClient-Jni9x8Xr.js";import"./tick-B9r2rV47.js";import"./DropdownField-eRFOlzDf.js";import"./isEqual-DcoImb_5.js";import"./_baseIsEqual-CQQa-Rsq.js";import"./withOsdkMetrics-8Qsa17lA.js";const nr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
