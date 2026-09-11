import{f as p,j as e}from"./iframe-B9P_guYe.js";import{O as i}from"./object-table-DRHuz0_X.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DZKvLzKM.js";import"./Table-DGeyv1ad.js";import"./index-BmU_yXsT.js";import"./Dialog-jWuaiD-I.js";import"./cross-B0jMy4Xj.js";import"./svgIconContainer-86dgqwTy.js";import"./useBaseUiId-4Ig60Xd8.js";import"./InternalBackdrop-DymGob4l.js";import"./composite-0HTyS9cl.js";import"./index-3EbL4LBn.js";import"./index-CucgTNc9.js";import"./index-BoCFIwDC.js";import"./useEventCallback-4v2rm6Uv.js";import"./SkeletonBar-DQJfJoRc.js";import"./LoadingCell-WwbEycft.js";import"./ColumnConfigDialog-BusJQA3j.js";import"./DraggableList-D2J35TZN.js";import"./search-_dMlLuUD.js";import"./Input-CexEAM7S.js";import"./useControlled-CCs_p_PA.js";import"./Button-BKlQWyYX.js";import"./small-cross-BEzF29wK.js";import"./ActionButton-39cEgkXv.js";import"./Checkbox-CPiNSmDf.js";import"./useValueChanged-BD6-HJ6i.js";import"./CollapsiblePanel-P4ySmzrR.js";import"./MultiColumnSortDialog-DFMlcDqx.js";import"./MenuTrigger-Db1xRho6.js";import"./CompositeItem-G1VIkMjr.js";import"./ToolbarRootContext-CMDQJiC4.js";import"./getDisabledMountTransitionStyles-Bqo4m5rG.js";import"./getPseudoElementBounds-BJ2IJ4R6.js";import"./chevron-down-CL_Pf9bS.js";import"./index-UwB-iCL8.js";import"./error-B_xrvVtR.js";import"./BaseCbacBanner-BTeEBxtL.js";import"./makeExternalStore-B4SarOE2.js";import"./Tooltip-CyCLgWwQ.js";import"./PopoverPopup-Cr6J1DLL.js";import"./debounce-C8ZI9wGu.js";import"./useOsdkClient-BUXnWXUj.js";import"./tick-B8u-WlBN.js";import"./DropdownField-2HC-0Khs.js";import"./isEqual-BER4d_e_.js";import"./withOsdkMetrics-C2y3Ga9u.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
