import{f as p,j as e}from"./iframe-Cw_qhF0N.js";import{O as i}from"./object-table-DjPGM6wa.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BOMIoqbF.js";import"./Table-DSSm1fKK.js";import"./index-TvapIid3.js";import"./Dialog-CLJKeedb.js";import"./cross-D-XWoAQF.js";import"./svgIconContainer-BTHlx_Hh.js";import"./useBaseUiId-BNu8us2u.js";import"./InternalBackdrop-DHfQ_n5T.js";import"./composite-Cn4M-AS0.js";import"./index-lqLv8je1.js";import"./index-Di-hPO50.js";import"./index-w42VGXsS.js";import"./useEventCallback-Bj9dX_fk.js";import"./SkeletonBar-CUo2yd26.js";import"./LoadingCell-gfwDxef7.js";import"./ColumnConfigDialog-BlQkjEzx.js";import"./DraggableList-Bo3Tcy6E.js";import"./search-BrIW3_zE.js";import"./Input-Bfec5TXw.js";import"./useControlled-5GWIAJrV.js";import"./isEqual-8Gu1sET9.js";import"./isObject-CJz3e4Br.js";import"./Button-rFXve3X8.js";import"./ActionButton-CrbFv_hF.js";import"./Checkbox-BOh-AO8R.js";import"./useValueChanged-ZB7hU4o5.js";import"./CollapsiblePanel-BKTgJMbu.js";import"./MultiColumnSortDialog-wT10UvvH.js";import"./MenuTrigger-DUfNfRvP.js";import"./CompositeItem-Dxc3ZApE.js";import"./ToolbarRootContext-BIaEKKO2.js";import"./getDisabledMountTransitionStyles-ByhIP2yz.js";import"./getPseudoElementBounds-DgyzHOri.js";import"./chevron-down-IhPewwA3.js";import"./index-7blLQTYn.js";import"./error-qvLsAaDE.js";import"./BaseCbacBanner-mENaFGSF.js";import"./makeExternalStore-CcclNskg.js";import"./Tooltip-XdCb1jYX.js";import"./PopoverPopup-BdOGuII2.js";import"./toNumber-DU1_CO-_.js";import"./useOsdkClient-DoF29EO5.js";import"./tick-BZ6PljLM.js";import"./DropdownField-CmpIuvUo.js";import"./withOsdkMetrics-C81Q0htC.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
