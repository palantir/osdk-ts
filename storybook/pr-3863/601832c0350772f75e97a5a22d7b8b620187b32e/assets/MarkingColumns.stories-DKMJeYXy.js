import{f as p,j as e}from"./iframe-O0prbF-O.js";import{O as i}from"./object-table-CyA9NVMi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BqjLgX7i.js";import"./Table-DfMGlvWA.js";import"./index-D3_kNOcu.js";import"./Dialog-BOTrMu9R.js";import"./cross-EqH9AD7w.js";import"./svgIconContainer-D708LBZG.js";import"./useBaseUiId-CF66BVsU.js";import"./InternalBackdrop-DBKeGWdw.js";import"./composite-CBSaDCOL.js";import"./index-DlLn8lVY.js";import"./index-CO7cUuHh.js";import"./index-Cb14-kzt.js";import"./useEventCallback-CI7uH06C.js";import"./SkeletonBar-BoocyUZM.js";import"./LoadingCell-4o2z_nRc.js";import"./ColumnConfigDialog-BnMcit-A.js";import"./DraggableList-CbxkUNCT.js";import"./search-BZRyw4sv.js";import"./Input-DALr2Z65.js";import"./useControlled-DTs4YsMd.js";import"./Button-B2dXrYMV.js";import"./small-cross-3PczLChY.js";import"./ActionButton-DlLbzVoC.js";import"./Checkbox-CUIX5M1x.js";import"./useValueChanged-BA2LO4xE.js";import"./CollapsiblePanel-BEvSUTtF.js";import"./MultiColumnSortDialog-C2vJ_N3H.js";import"./MenuTrigger-0pjqaEFx.js";import"./CompositeItem-Cx6Y5iRt.js";import"./ToolbarRootContext-B9PiDCp_.js";import"./getDisabledMountTransitionStyles-Dxu7DtWP.js";import"./getPseudoElementBounds-xaQ_TG8i.js";import"./chevron-down-NYKhWxp5.js";import"./index-JUBariVe.js";import"./error-CBnxuMvh.js";import"./BaseCbacBanner-CX3faeRn.js";import"./makeExternalStore-DO75Ws4H.js";import"./Tooltip-BcwYOBDs.js";import"./PopoverPopup-C8bmh7JY.js";import"./toNumber-mpunM_CU.js";import"./useOsdkClient-D80isL3g.js";import"./tick-a2QdToMK.js";import"./DropdownField-a5Wh6R5w.js";import"./withOsdkMetrics-h2oIPj-a.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
