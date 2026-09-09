import{f as p,j as e}from"./iframe-CK77c45c.js";import{O as i}from"./object-table-CD9xgxQ4.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DbNEja4W.js";import"./Table-Cv6K4vEv.js";import"./index-C442JOIH.js";import"./Dialog-BL8f_VaG.js";import"./cross-CwI5OEk2.js";import"./svgIconContainer-L_jjiIf-.js";import"./useBaseUiId-dVZqGFlU.js";import"./InternalBackdrop-C6LC9TgG.js";import"./composite-Dh-nFKNO.js";import"./index-qnj-Mesk.js";import"./index-BoFZ_UqF.js";import"./index-DlpSJTu4.js";import"./useEventCallback-ClxfXOPq.js";import"./SkeletonBar-X3eUnAaJ.js";import"./LoadingCell-BRV08XBm.js";import"./ColumnConfigDialog-Cy2f2WtW.js";import"./DraggableList-zAtO2Yt3.js";import"./search-CV_E7rKM.js";import"./Input-DeIqzZkQ.js";import"./useControlled-jnmU5UAL.js";import"./Button-CWY22zau.js";import"./small-cross-BtlEs72Q.js";import"./ActionButton-CLfSCTXA.js";import"./Checkbox-CWGtiWas.js";import"./useValueChanged-BaVslEYl.js";import"./CollapsiblePanel-BCyMY8rI.js";import"./MultiColumnSortDialog-CxJXY1yp.js";import"./MenuTrigger-GGTOeyws.js";import"./CompositeItem-CAzkW6h4.js";import"./ToolbarRootContext-BQcuSjIX.js";import"./getDisabledMountTransitionStyles-CaJMflFk.js";import"./getPseudoElementBounds-nGyt1hPn.js";import"./chevron-down-CFkNPRkg.js";import"./index-1zjImjvm.js";import"./error-BvwPFshU.js";import"./BaseCbacBanner-DUD1Qbr1.js";import"./makeExternalStore-C2N1fTLN.js";import"./Tooltip-CY4cYmbh.js";import"./PopoverPopup-BOimy_Ld.js";import"./debounce-BKHqtWZX.js";import"./useOsdkClient-Tt2idpLi.js";import"./tick-sW9HqPYz.js";import"./DropdownField-DZE5zpKv.js";import"./isEqual-DbplaoR8.js";import"./withOsdkMetrics-7D8iT2W4.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
