import{f as p,j as e}from"./iframe-NH2TPfrt.js";import{O as i}from"./object-table-BK__0nSS.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DnfD210b.js";import"./Table-CuUO-8wd.js";import"./index-Dq4weQoF.js";import"./Dialog-BJy3217O.js";import"./cross-24tcUSkS.js";import"./svgIconContainer-BUKRs426.js";import"./useBaseUiId-4nRGSpr1.js";import"./InternalBackdrop-CyExLgCb.js";import"./composite-C2uwlMq3.js";import"./index-UEOUqQcW.js";import"./index-Cj-ZNFWv.js";import"./index-DK-HFNdc.js";import"./useEventCallback-BAyGh-mM.js";import"./SkeletonBar-D5-VroV9.js";import"./LoadingCell-Cd_w0Tes.js";import"./ColumnConfigDialog-DQUyct1S.js";import"./DraggableList-Bf5ssxLW.js";import"./search-3tww_Y-8.js";import"./Input-A00tbVb5.js";import"./useControlled-BF8AHFxI.js";import"./isEqual-0xRPSbep.js";import"./isObject-sRh_S4J1.js";import"./Button-BHf--f-c.js";import"./ActionButton-CaZsvwmy.js";import"./Checkbox-BsgnUcK_.js";import"./useValueChanged-Bu7iX5lg.js";import"./CollapsiblePanel-B45AwlAl.js";import"./MultiColumnSortDialog-NEhtrgyd.js";import"./MenuTrigger-1I8zp5W3.js";import"./CompositeItem-CVj27Z6H.js";import"./ToolbarRootContext-Pl3qLOs4.js";import"./getDisabledMountTransitionStyles-DxJl6O0G.js";import"./getPseudoElementBounds-gWx4w7cR.js";import"./chevron-down-BOaz_Rvj.js";import"./index-Ciy6Wj_i.js";import"./error-B94IGPmw.js";import"./BaseCbacBanner-BxJG3-8s.js";import"./makeExternalStore-CwBhR2PL.js";import"./Tooltip-DOM36q_X.js";import"./PopoverPopup-CONheFa9.js";import"./toNumber-Bw3pxWk0.js";import"./useOsdkClient-CH4mFKyg.js";import"./tick-Dzh3Ithd.js";import"./DropdownField-DEpsAiDX.js";import"./withOsdkMetrics-DL-MS1V5.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
