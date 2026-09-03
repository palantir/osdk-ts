import{f as p,j as e}from"./iframe-BjvWEpQn.js";import{O as i}from"./object-table-Dghp8cw1.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DLthBjEH.js";import"./index-C0GV4moV.js";import"./Dialog-BBM57mMr.js";import"./cross-B1SVZ_Mp.js";import"./svgIconContainer-Bo_QeWGy.js";import"./useBaseUiId-CuHKCZXA.js";import"./InternalBackdrop-DqYDuaqF.js";import"./composite-DOEC86eV.js";import"./index-CX-tc54H.js";import"./index-Blnua_Xd.js";import"./index-NbBH4Ipg.js";import"./useEventCallback-DL6bVjfT.js";import"./SkeletonBar-BzIzSJzJ.js";import"./LoadingCell-PgqUTkYp.js";import"./ColumnConfigDialog-r73jCqBV.js";import"./DraggableList-BtUBQ6G2.js";import"./search-BShNJex1.js";import"./Input-mEIrwYjz.js";import"./useControlled-CIGB80Ap.js";import"./Button-D0Bo1X54.js";import"./small-cross-Db3oVUgZ.js";import"./ActionButton-DMX27iON.js";import"./Checkbox-DvdYscQS.js";import"./useValueChanged-J-bwa0r9.js";import"./CollapsiblePanel-CgTIoXrP.js";import"./MultiColumnSortDialog-CNc6LB8T.js";import"./MenuTrigger-C5cq2d3B.js";import"./CompositeItem-CsOj8GEh.js";import"./ToolbarRootContext-BFzaK2vL.js";import"./getDisabledMountTransitionStyles-D8IcwD5G.js";import"./getPseudoElementBounds-DmjliHjc.js";import"./chevron-down-CIsozBEz.js";import"./index-CpObZ_CB.js";import"./error-0abisA4-.js";import"./BaseCbacBanner-DbMNALsK.js";import"./makeExternalStore-CgVUsbup.js";import"./Tooltip-CbDWIJZu.js";import"./PopoverPopup-DO5dKOfH.js";import"./debounce-DYSSvrJG.js";import"./useOsdkClient-zYvlR-4-.js";import"./tick-DxLK2qZe.js";import"./DropdownField-BlMUNrNh.js";import"./isEqual-CicbEOiS.js";import"./withOsdkMetrics-BESKZGnm.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
