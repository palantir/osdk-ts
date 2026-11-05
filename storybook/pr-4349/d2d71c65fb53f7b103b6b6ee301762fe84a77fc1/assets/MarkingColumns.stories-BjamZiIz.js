import{f as p,j as e}from"./iframe-Co9BLc26.js";import{O as i}from"./object-table-CLwi_Yce.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CjIZGyxJ.js";import"./Table-CifDJqyc.js";import"./index-CaXavGNz.js";import"./Dialog-lgpNH8YB.js";import"./cross-CdeazAmw.js";import"./svgIconContainer-XH9sO27g.js";import"./useBaseUiId-B7X46CyE.js";import"./InternalBackdrop-BPl8mach.js";import"./composite-Bs7VpVD-.js";import"./index-83om9hRt.js";import"./index-DuuftHJS.js";import"./index-ft_Pdv6a.js";import"./useEventCallback-C2F-xdBM.js";import"./SkeletonBar-hmw1BSr0.js";import"./LoadingCell-Z-Oxz0e-.js";import"./ColumnConfigDialog-Hrpl0G3s.js";import"./DraggableList-CQJmGSr0.js";import"./search-DQyAxhHi.js";import"./Input-B7An9dFp.js";import"./useControlled-Dm9Z_trU.js";import"./Button-CKhU91Nr.js";import"./small-cross-Clv-yC5T.js";import"./ActionButton-D9teap9J.js";import"./Checkbox-DQJvh9sN.js";import"./useValueChanged-CdK4eivV.js";import"./CollapsiblePanel-GyOfNAAh.js";import"./MultiColumnSortDialog-fQcgWBnJ.js";import"./MenuTrigger-C8J89teT.js";import"./CompositeItem-v285VzZv.js";import"./ToolbarRootContext-CL3VUEMw.js";import"./getDisabledMountTransitionStyles-Bm6XJ5DP.js";import"./getPseudoElementBounds-BE5wQuFp.js";import"./chevron-down-C2RhY0pV.js";import"./index-D2VnSIP3.js";import"./error-DApxBtMc.js";import"./BaseCbacBanner-DCA480_X.js";import"./makeExternalStore-C6cHHmQm.js";import"./Tooltip-YDfZI3Un.js";import"./PopoverPopup-DcMrtKCc.js";import"./debounce-BCFaqdaB.js";import"./useOsdkClient-CASwPT7t.js";import"./tick-OrqCabsC.js";import"./DropdownField-YJ5OIQJX.js";import"./isEqual-LvWzQAZT.js";import"./withOsdkMetrics-D1C2IRuJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
