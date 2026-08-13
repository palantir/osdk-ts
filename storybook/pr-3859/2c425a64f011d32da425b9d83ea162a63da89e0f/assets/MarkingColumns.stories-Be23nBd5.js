import{f as p,j as e}from"./iframe-B6SlknkT.js";import{O as i}from"./object-table-BjD-a2rM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CiWAtvVo.js";import"./Table-D1uGyHuL.js";import"./index-Cisl_9Mo.js";import"./Dialog-Dht4GjUV.js";import"./cross-K0XOfymX.js";import"./svgIconContainer-DvLmNigv.js";import"./useBaseUiId-DtAmNbh5.js";import"./InternalBackdrop-Dl30yC1C.js";import"./composite-P-ykFSG-.js";import"./index-BBz1sS-n.js";import"./index-BMjONJHt.js";import"./index-DmFxeViZ.js";import"./useEventCallback-NaQY75BS.js";import"./SkeletonBar-Clgo9cjH.js";import"./LoadingCell-CKZuBc9l.js";import"./ColumnConfigDialog-CehpGE9s.js";import"./DraggableList-CwYB9JVt.js";import"./search-xv1rsfPw.js";import"./Input-CXXJHcyj.js";import"./useControlled-PYuq7DgD.js";import"./isEqual-DBNTDdfj.js";import"./isObject-BLnKbGOO.js";import"./Button-F8n7DYb6.js";import"./ActionButton-BodQova9.js";import"./Checkbox-BNp5VU1x.js";import"./useValueChanged-CkgIT0Kx.js";import"./CollapsiblePanel-OFVSuctg.js";import"./MultiColumnSortDialog-CSgNB2hu.js";import"./MenuTrigger-DyWGdBhT.js";import"./CompositeItem-TSZ5fJAo.js";import"./ToolbarRootContext-2IHK8Ctj.js";import"./getDisabledMountTransitionStyles-ZwLnaqle.js";import"./getPseudoElementBounds-Cm2_1p_1.js";import"./chevron-down-DxJyaq1h.js";import"./index-WO9aHBrQ.js";import"./error-Bv29R1uB.js";import"./BaseCbacBanner-DUtQdQpu.js";import"./makeExternalStore-JliLFxhM.js";import"./Tooltip-BlcQGzNj.js";import"./PopoverPopup-Kq1sgNl6.js";import"./toNumber-CjsjmZPP.js";import"./useOsdkClient-6tgWcBTt.js";import"./tick-_Aaq9I8S.js";import"./DropdownField-BUVA7rQ6.js";import"./withOsdkMetrics-YbnoeFLv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
