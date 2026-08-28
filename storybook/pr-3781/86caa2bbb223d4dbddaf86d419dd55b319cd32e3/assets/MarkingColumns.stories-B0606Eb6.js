import{f as p,j as e}from"./iframe-BzTrYIGj.js";import{O as i}from"./object-table-B-Ijnqri.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DN18uj2q.js";import"./Table-D6xe963K.js";import"./index-BrLV4dFb.js";import"./Dialog-B4_vQQmg.js";import"./cross-C6h0gf3C.js";import"./svgIconContainer-BZmpt804.js";import"./useBaseUiId-BnkVlZO6.js";import"./InternalBackdrop-BxTdVsU4.js";import"./composite-BD8s54zP.js";import"./index-BwQpmBgV.js";import"./index-Cb5QJVzG.js";import"./index-CTFSiazZ.js";import"./useEventCallback-lPJeV2ho.js";import"./SkeletonBar-HJjKmAs4.js";import"./LoadingCell--wQm6AzL.js";import"./ColumnConfigDialog-B52kott7.js";import"./DraggableList-D95DUzYE.js";import"./search-C0_wSRgh.js";import"./Input-DYoLRy9q.js";import"./useControlled-DOebwg81.js";import"./Button-iX8EOfC8.js";import"./small-cross-BlolGBAt.js";import"./ActionButton-D-Tq9Dhs.js";import"./Checkbox-CM3qffdw.js";import"./useValueChanged-BS2UNk3o.js";import"./CollapsiblePanel-fkBpzIbF.js";import"./MultiColumnSortDialog-hI5XWovP.js";import"./MenuTrigger-Bzv7UvTk.js";import"./CompositeItem-BftnSL_x.js";import"./ToolbarRootContext-BxcZ8iGZ.js";import"./getDisabledMountTransitionStyles-DT16cxHd.js";import"./getPseudoElementBounds-CKv8RmSv.js";import"./chevron-down-BgrpuhFy.js";import"./index-Cetl04Gl.js";import"./error-gmpJmGSg.js";import"./BaseCbacBanner-CylE7vdU.js";import"./makeExternalStore-TyTg8pnL.js";import"./Tooltip-CY7RNSdr.js";import"./PopoverPopup-XLUtI616.js";import"./debounce-O82EKYE8.js";import"./useOsdkClient-BwFfMjb6.js";import"./tick-C06aFeyp.js";import"./DropdownField-CzeFiqs2.js";import"./isEqual-DMiOnRvx.js";import"./withOsdkMetrics-B4hlBqzl.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
