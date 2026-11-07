import{f as p,j as e}from"./iframe-DQCdqfg5.js";import{O as i}from"./object-table-D2fFBTXM.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BnuMKywq.js";import"./Table-eSFOwLQi.js";import"./index-vgggs2zv.js";import"./Dialog-Be0MXF1L.js";import"./cross-BM5-gN2O.js";import"./svgIconContainer-DQ3vDY3d.js";import"./useBaseUiId-uJtwceXU.js";import"./InternalBackdrop-mKo4eMuU.js";import"./composite-CLQo-Wfa.js";import"./index-BsqPh63C.js";import"./index-TXPEMxyc.js";import"./index-DkmdKJbM.js";import"./useEventCallback-DI2LvAvB.js";import"./SkeletonBar-BMXSVux8.js";import"./LoadingCell-DAvwNT84.js";import"./ColumnConfigDialog-GU-s4XaF.js";import"./DraggableList-vr-wvdOw.js";import"./search-BVksAAy0.js";import"./Input-BTifrhUx.js";import"./useControlled-ChMbt_Fz.js";import"./Button-DNN3wzC1.js";import"./small-cross-B8kNhtpM.js";import"./ActionButton-8qbOBxU2.js";import"./Checkbox-DSNDjp2T.js";import"./useValueChanged-BB3_bFNq.js";import"./CollapsiblePanel-B0RAMB_a.js";import"./MultiColumnSortDialog-CXJqFtZO.js";import"./MenuTrigger-SW6vTO-P.js";import"./CompositeItem-BV9j03E3.js";import"./ToolbarRootContext-DIjdh_Ow.js";import"./getDisabledMountTransitionStyles-BryvnPSi.js";import"./getPseudoElementBounds-SCb5Bi3b.js";import"./chevron-down-s9at5FCB.js";import"./index-C7x5V-MA.js";import"./error-LGbg2EdJ.js";import"./BaseCbacBanner-CIJ1yjYq.js";import"./makeExternalStore-DhC3eF_c.js";import"./Tooltip-F2HH1cxW.js";import"./PopoverPopup-CvC35ehe.js";import"./debounce-DHf3w8rI.js";import"./useOsdkClient-DpwLfZR6.js";import"./tick-BNBx5Vf4.js";import"./DropdownField-NOLN6HRJ.js";import"./isEqual-oQJ7iNOI.js";import"./withOsdkMetrics-B1flG_2m.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
