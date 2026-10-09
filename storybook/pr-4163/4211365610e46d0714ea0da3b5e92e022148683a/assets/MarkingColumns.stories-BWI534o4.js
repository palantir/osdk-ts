import{f as p,j as e}from"./iframe-DKjGRkFv.js";import{O as i}from"./object-table-P6HhlI8x.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C6rqf7Sg.js";import"./Table-BZ_fhjEt.js";import"./index-_KqllXCA.js";import"./Dialog-BUWkJvJD.js";import"./cross-Byw5v4Q_.js";import"./svgIconContainer-D-LkokGt.js";import"./useBaseUiId-jPX4s7al.js";import"./InternalBackdrop-BxtymM3X.js";import"./composite-Be6SAy6p.js";import"./index-BP_2hfUi.js";import"./index-Bcv2oXK6.js";import"./index-CQPVNm9V.js";import"./useEventCallback-BdnTh0Kq.js";import"./SkeletonBar-Eqz4moCH.js";import"./LoadingCell-CMdJ_9OA.js";import"./ColumnConfigDialog-z-zlKVrA.js";import"./DraggableList-DkY7Kz_a.js";import"./search-CvJrksrv.js";import"./Input-Cl-jE7Eu.js";import"./useControlled-BvxP1vnA.js";import"./Button-CT84oTMh.js";import"./small-cross-Cxklwva_.js";import"./ActionButton-DAdOrkYi.js";import"./Checkbox-DQBk6DW9.js";import"./useValueChanged-HwxNHl9M.js";import"./CollapsiblePanel-DC1OaWK6.js";import"./MultiColumnSortDialog-D9-ihbRr.js";import"./MenuTrigger-Dbm1l1kq.js";import"./CompositeItem-CdsaUFys.js";import"./ToolbarRootContext-VDTGiuqQ.js";import"./getDisabledMountTransitionStyles-DRdQhkzq.js";import"./getPseudoElementBounds-DHlxXCHC.js";import"./chevron-down-zDaWrCdE.js";import"./index-CVidFmw5.js";import"./error-CIT7Z9G8.js";import"./BaseCbacBanner-Bx7lFHvv.js";import"./makeExternalStore-BnEyfyYD.js";import"./Tooltip-KIWE0Mve.js";import"./PopoverPopup--8y4HuFf.js";import"./debounce-BuHDhe6S.js";import"./useOsdkClient-BBbCJZXc.js";import"./tick-jLPbNGml.js";import"./DropdownField-BHrdVt_T.js";import"./isEqual-Bo497v3Z.js";import"./withOsdkMetrics-e_OoMjHx.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
