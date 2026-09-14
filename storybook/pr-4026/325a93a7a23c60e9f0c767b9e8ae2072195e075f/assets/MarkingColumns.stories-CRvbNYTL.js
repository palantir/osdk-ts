import{f as p,j as e}from"./iframe-NlvaTXdz.js";import{O as i}from"./object-table-sckLgGSi.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-11218VAb.js";import"./Table-tpwkwsOf.js";import"./index-B0X1kouN.js";import"./Dialog-CbrM7LOV.js";import"./cross-3E2um-ab.js";import"./svgIconContainer-Dx3Wsu_D.js";import"./useBaseUiId-Cak_Gf6y.js";import"./InternalBackdrop-81BDBXVN.js";import"./composite-BVOO1HYh.js";import"./index-zA5UJtgN.js";import"./index-BKEieiUG.js";import"./index-CVSwwXpW.js";import"./useEventCallback-DIZPvIjV.js";import"./SkeletonBar-BEPts0M1.js";import"./LoadingCell-ByZgSJdg.js";import"./ColumnConfigDialog-5g3qFlze.js";import"./DraggableList-Dc8tW3gn.js";import"./search-JCoXnDaS.js";import"./Input-ec2719nZ.js";import"./useControlled-Dr03MbeI.js";import"./Button-Cj6didcq.js";import"./small-cross-9qxQlKft.js";import"./ActionButton-D2vkEZRA.js";import"./Checkbox-E09LMdpJ.js";import"./useValueChanged-DDbbsCD3.js";import"./CollapsiblePanel-DnncBNgb.js";import"./MultiColumnSortDialog-B5eU55ys.js";import"./MenuTrigger-CFUy_u8Y.js";import"./CompositeItem--ZMxCD0o.js";import"./ToolbarRootContext-BusYBQnb.js";import"./getDisabledMountTransitionStyles-DMxebDRk.js";import"./getPseudoElementBounds-CgEw87z9.js";import"./chevron-down-dfuDLNdx.js";import"./index-Cub9R0HW.js";import"./error-CV3Wyi-T.js";import"./BaseCbacBanner-BcV7RFqw.js";import"./makeExternalStore-BJZbhgwh.js";import"./Tooltip-Bu2sAhK0.js";import"./PopoverPopup-CVjAB-qP.js";import"./debounce-BGWK8YL4.js";import"./useOsdkClient-FuspldWR.js";import"./tick-DMWwchqI.js";import"./DropdownField-BOcDuARz.js";import"./isEqual-BdTIqhZC.js";import"./withOsdkMetrics-zr1-J277.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
