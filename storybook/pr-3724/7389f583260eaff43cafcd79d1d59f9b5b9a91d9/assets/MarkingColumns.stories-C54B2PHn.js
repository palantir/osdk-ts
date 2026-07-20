import{f as p,j as e}from"./iframe-B918LNJv.js";import{O as i}from"./object-table-DpExOxPf.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C38s4CUI.js";import"./Table-rlWrpyCi.js";import"./index-B_P01xA3.js";import"./Dialog-BhTIF2Ky.js";import"./cross-27JxqPSS.js";import"./svgIconContainer-BYiAy6p0.js";import"./useBaseUiId-BTl9y6re.js";import"./InternalBackdrop-CKTbt8em.js";import"./composite-h6Zbgi7F.js";import"./index-fXEPz3SF.js";import"./index-DDOR1c1N.js";import"./index-CtmGBK31.js";import"./useEventCallback-C2aenZzM.js";import"./SkeletonBar-B0zvJ79q.js";import"./LoadingCell-dgAlOhGS.js";import"./ColumnConfigDialog-DtN32TpS.js";import"./DraggableList-aFnS0dUP.js";import"./search-D4u31a2J.js";import"./Input-98UmijnR.js";import"./useControlled-DNdvLczM.js";import"./isEqual-Clq284dP.js";import"./isObject-Dtt3dYTs.js";import"./Button-DfdrGLkG.js";import"./ActionButton-B92IpvRa.js";import"./Checkbox-CUJg4ULk.js";import"./useValueChanged-g0m1_Jam.js";import"./CollapsiblePanel-DeLpIozM.js";import"./MultiColumnSortDialog-Z8lpFMFM.js";import"./MenuTrigger-vt6xo-TF.js";import"./CompositeItem-Be-t-AGf.js";import"./ToolbarRootContext-BZH61At9.js";import"./getDisabledMountTransitionStyles-Bzlq1xi4.js";import"./getPseudoElementBounds-CYxc3ret.js";import"./chevron-down-Cw1bkhVm.js";import"./index-Dv_wS8KW.js";import"./error-DW-GsfBB.js";import"./BaseCbacBanner-DjKfVLEE.js";import"./makeExternalStore-i_cH52O7.js";import"./Tooltip-BbMLuIqy.js";import"./PopoverPopup-B1YkqBMJ.js";import"./toNumber-CrVTUO-Y.js";import"./useOsdkClient-Dzh9EzvI.js";import"./tick-D8LQGLpc.js";import"./DropdownField-BCZceCoy.js";import"./withOsdkMetrics-BtNBzEPB.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
