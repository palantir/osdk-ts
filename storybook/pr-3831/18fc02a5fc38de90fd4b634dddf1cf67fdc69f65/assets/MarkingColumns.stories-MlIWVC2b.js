import{f as p,j as e}from"./iframe-B4UcJlUn.js";import{O as i}from"./object-table-DiwpuMil.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-nCBdWicC.js";import"./Table-BHvLJsK4.js";import"./index-C8ef4t-Z.js";import"./Dialog-XW8pn7Pw.js";import"./cross-CDlzpv2a.js";import"./svgIconContainer-jV7YtvQC.js";import"./useBaseUiId-B5hZssna.js";import"./InternalBackdrop-Dv95WM47.js";import"./composite-C7ayO821.js";import"./index-9mx_yRh-.js";import"./index-B9KiQzXE.js";import"./index-Bxf9gMnl.js";import"./useEventCallback-Bg9KxLqK.js";import"./SkeletonBar-PtnMdiMD.js";import"./LoadingCell-CTHifDQa.js";import"./ColumnConfigDialog-BWIdVMWN.js";import"./DraggableList-DuKXnODV.js";import"./search-BUVwFVg8.js";import"./Input-eMNIp8tt.js";import"./useControlled-Bi9AY8b2.js";import"./isEqual-DxmTL_oR.js";import"./isObject-Dxu5HMS6.js";import"./Button-BadEAtWa.js";import"./ActionButton-D-tAnNy-.js";import"./Checkbox-BkS2Qobf.js";import"./useValueChanged-DNJ0cUmN.js";import"./CollapsiblePanel-uwjXlVCK.js";import"./MultiColumnSortDialog-CwZaJqvE.js";import"./MenuTrigger-Ck3CLacH.js";import"./CompositeItem-BH6AHNlU.js";import"./ToolbarRootContext-Dvnv9LkO.js";import"./getDisabledMountTransitionStyles-CZklATkN.js";import"./getPseudoElementBounds-CCO8HMN-.js";import"./chevron-down-CeZmVDL8.js";import"./index-CJtYrTIY.js";import"./error-CwHD_sRR.js";import"./BaseCbacBanner-B0N7992P.js";import"./makeExternalStore-CeFMygCV.js";import"./Tooltip-CsX77x6k.js";import"./PopoverPopup-kRZzR8O8.js";import"./toNumber-BnE3Hbyw.js";import"./useOsdkClient-T3cVOfDt.js";import"./tick-BOWGCcMw.js";import"./DropdownField-BimjaBga.js";import"./withOsdkMetrics-BsIweO9h.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
