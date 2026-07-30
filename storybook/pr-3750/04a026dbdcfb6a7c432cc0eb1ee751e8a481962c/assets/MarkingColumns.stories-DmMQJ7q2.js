import{f as p,j as e}from"./iframe-DuxpSVeu.js";import{O as i}from"./object-table-C939L43N.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CVqn3HQv.js";import"./Table-DjLwXHQc.js";import"./index-Dbf3XMP5.js";import"./Dialog-DfrL6k9H.js";import"./cross-ByskZVKs.js";import"./svgIconContainer-D81CTfk3.js";import"./useBaseUiId-CFJYUser.js";import"./InternalBackdrop-C0KpYaZu.js";import"./composite-Bv0d7hMq.js";import"./index-B7GSl1cF.js";import"./index-Db0VOaPK.js";import"./index-BJdDgk1_.js";import"./useEventCallback-DDUzUWfE.js";import"./SkeletonBar-DsJHAsa6.js";import"./LoadingCell-CjuoF-Gl.js";import"./ColumnConfigDialog-BCMc9_F6.js";import"./DraggableList-D3b9eCh7.js";import"./search-C3puoylr.js";import"./Input-BRm5VqU-.js";import"./useControlled-CUzvhz2W.js";import"./isEqual-CcLD5HAO.js";import"./isObject-0ofookEW.js";import"./Button-LWb_6Tdn.js";import"./ActionButton-1_m7nH98.js";import"./Checkbox-CIand9sc.js";import"./useValueChanged-BdU0Smwa.js";import"./CollapsiblePanel-Cd7daTfo.js";import"./MultiColumnSortDialog-r93u9dFu.js";import"./MenuTrigger-yO33KpiI.js";import"./CompositeItem-DVPpXfkZ.js";import"./ToolbarRootContext-D_pMZLcD.js";import"./getDisabledMountTransitionStyles-DkCuaO2I.js";import"./getPseudoElementBounds-ZVlk_Kim.js";import"./chevron-down-BLjWGzzL.js";import"./index-DxCyc1SX.js";import"./error-BqVc61FN.js";import"./BaseCbacBanner-B_-o7ENS.js";import"./makeExternalStore-CVmgvRee.js";import"./Tooltip-C1_rLlVZ.js";import"./PopoverPopup-D8uDacjF.js";import"./toNumber-BIjSEtt0.js";import"./useOsdkClient-Dp8UoSK2.js";import"./tick-D7pRbUig.js";import"./DropdownField-BoJ4CmTZ.js";import"./withOsdkMetrics-uRRxlu8C.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
