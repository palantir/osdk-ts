import{f as p,j as e}from"./iframe-Cko_WFf-.js";import{O as i}from"./object-table-Ch529tBT.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Cs73q2ui.js";import"./Table-IeH6N1e1.js";import"./index-2T8Wwein.js";import"./Dialog-BR6pkPqn.js";import"./cross-CBXHEXHr.js";import"./svgIconContainer-DUJTWNCq.js";import"./useBaseUiId-DydFiAor.js";import"./InternalBackdrop-Be4bBso-.js";import"./composite-BgWWCC0G.js";import"./index-C5PQsA1_.js";import"./index-Ba2bjKcU.js";import"./index-C-alEbte.js";import"./useEventCallback-F2alGF6R.js";import"./SkeletonBar-wTcJ9b1g.js";import"./LoadingCell-B8WfG5Sx.js";import"./ColumnConfigDialog-8y7Tj8ex.js";import"./DraggableList-BTP6KGBD.js";import"./search-DlsTvmsp.js";import"./Input-CP5Ce819.js";import"./useControlled-D2dKgCSU.js";import"./Button-B8X7gllj.js";import"./small-cross-CBW8u4eS.js";import"./ActionButton-C4kdXe-J.js";import"./Checkbox-D-KYaXtb.js";import"./useValueChanged-BzJUwUky.js";import"./CollapsiblePanel-CmnzNIvq.js";import"./MultiColumnSortDialog-Cd_ag-W4.js";import"./MenuTrigger-BcxS-dsu.js";import"./CompositeItem-CFHidUeB.js";import"./ToolbarRootContext-BZHxz8Zf.js";import"./getDisabledMountTransitionStyles-CO6R2Nlo.js";import"./getPseudoElementBounds-DV7dVXJb.js";import"./chevron-down-tjDGGRSV.js";import"./index-gK3sTX7L.js";import"./error-iyVGDwHQ.js";import"./BaseCbacBanner-COWJ2yUY.js";import"./makeExternalStore-CEUQtvPO.js";import"./Tooltip-BDxS5uB9.js";import"./PopoverPopup-D5S6yAxs.js";import"./debounce-JLZVI0I7.js";import"./useOsdkClient-BT_HUqnV.js";import"./tick-BFsL_7kT.js";import"./DropdownField-C0-1Vjc_.js";import"./isEqual-BVP2R1OT.js";import"./withOsdkMetrics-jyd-_lK5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
