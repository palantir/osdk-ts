import{f as p,j as e}from"./iframe-CVTiJeQi.js";import{O as i}from"./object-table-DJZTt8bt.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-t7rd3I4r.js";import"./Table-8EndMb32.js";import"./index-E2SQRiqv.js";import"./Dialog-B-tbGosM.js";import"./cross-B5gOJ5k8.js";import"./svgIconContainer-BDwZKmGj.js";import"./useBaseUiId-DCP2Zvxd.js";import"./InternalBackdrop-BkUjUod8.js";import"./composite-A_bH19bq.js";import"./index-CYUJLH8p.js";import"./index-C4JTvluE.js";import"./index-BhlUc49_.js";import"./useEventCallback-sTRrgaEh.js";import"./SkeletonBar-BXUEt9Lb.js";import"./LoadingCell-NipEXl9e.js";import"./ColumnConfigDialog-3553yyb_.js";import"./DraggableList-Cuy6EvKn.js";import"./search-3AANI0BG.js";import"./Input-DZ_dZ4XX.js";import"./useControlled-ede6ACjE.js";import"./isEqual-B9kebFL3.js";import"./isObject-BRZAXYo4.js";import"./Button-D6FXTgGy.js";import"./ActionButton-BE90nuOS.js";import"./Checkbox-DvEgZuG2.js";import"./useValueChanged-DpEGNgcg.js";import"./CollapsiblePanel-Df2ertO8.js";import"./MultiColumnSortDialog-u5aH6WlB.js";import"./MenuTrigger-OB-54OXo.js";import"./CompositeItem-DXy3Ipuq.js";import"./ToolbarRootContext-Zp3TmphN.js";import"./getDisabledMountTransitionStyles-Ca3SCTwd.js";import"./getPseudoElementBounds-CdMsvGEZ.js";import"./chevron-down-BGjb3XaZ.js";import"./index-H9AGIUUX.js";import"./error-WiBmvjTj.js";import"./BaseCbacBanner-sOZ15i4z.js";import"./makeExternalStore-BfMKfAmM.js";import"./Tooltip-CwBlMz-1.js";import"./PopoverPopup-Br61KHTt.js";import"./toNumber-Dy9GpxJY.js";import"./useOsdkClient-DGKjFxqb.js";import"./tick-CMDinfGm.js";import"./DropdownField-BjKiSpWL.js";import"./withOsdkMetrics-CsIC7rEQ.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
