import{f as p,j as e}from"./iframe-DB-361_v.js";import{O as i}from"./object-table-DygeJIg-.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-zvjHNL09.js";import"./Table-BMddCm1U.js";import"./index-DdwLnrfs.js";import"./Dialog-C_ZEA6-F.js";import"./cross-CgBmw6jw.js";import"./svgIconContainer-tDogG8TB.js";import"./useBaseUiId-Dyby1NGR.js";import"./InternalBackdrop-DH85mJku.js";import"./composite-CEGpAhVN.js";import"./index-Bd_TtvqJ.js";import"./index-LD-tkTix.js";import"./index-BdeL7aWA.js";import"./useEventCallback-BkCnz6o6.js";import"./SkeletonBar-CNIBkP7B.js";import"./LoadingCell-BzxB7WCq.js";import"./ColumnConfigDialog-DE30qmZG.js";import"./DraggableList-UkQ3xT_w.js";import"./search-Y_2o6rdR.js";import"./Input-Du43rCnX.js";import"./useControlled-B9yE7kao.js";import"./isEqual-Dc-n6KEk.js";import"./isObject-CfOFIxrc.js";import"./Button-B9h9wyoq.js";import"./ActionButton-BLU-1Wm8.js";import"./Checkbox-Daxi2-nV.js";import"./useValueChanged-SAxhXoib.js";import"./CollapsiblePanel-Cb4bdYA2.js";import"./MultiColumnSortDialog-CtDren4G.js";import"./MenuTrigger-mj7T66LW.js";import"./CompositeItem-DCbSD_ZK.js";import"./ToolbarRootContext-DLRpCM8y.js";import"./getDisabledMountTransitionStyles-xd7EQLxb.js";import"./getPseudoElementBounds-qNjk-dq5.js";import"./chevron-down-DXD_htwf.js";import"./index-z1u9RwtB.js";import"./error-B4op4QY1.js";import"./BaseCbacBanner-Cw82aSH0.js";import"./makeExternalStore-D-AXHTbe.js";import"./Tooltip-BYVX-p84.js";import"./PopoverPopup-CdAETliG.js";import"./toNumber-D4zUsFv4.js";import"./useOsdkClient-Rh48KMqD.js";import"./tick-DIaQ-Rv8.js";import"./DropdownField-CO0ZSj3k.js";import"./withOsdkMetrics-5AfJM7Y3.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
