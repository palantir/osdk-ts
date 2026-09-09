import{f as p,j as e}from"./iframe-ca23OhYy.js";import{O as i}from"./object-table-wEaVQDYc.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CpBe6w6L.js";import"./Table-BP5JyPSM.js";import"./index-CSQGa-uf.js";import"./Dialog-Bg0B1dRX.js";import"./cross-CETsQjwW.js";import"./svgIconContainer-DY2iVrle.js";import"./useBaseUiId-BFRON7cN.js";import"./InternalBackdrop-BD_kNEKT.js";import"./composite-D8ER8GvA.js";import"./index-rx-oKm__.js";import"./index-4C3ZxLWs.js";import"./index-_isEvDLT.js";import"./useEventCallback-B5TdNu7r.js";import"./SkeletonBar-iGP3E_gb.js";import"./LoadingCell-DUpYKrDI.js";import"./ColumnConfigDialog-D1XljsR8.js";import"./DraggableList-CmOHeOhh.js";import"./search-RTWZj0KA.js";import"./Input-CDnjWJWA.js";import"./useControlled-C1AlQciX.js";import"./Button-DRovoLAj.js";import"./small-cross-DKWrBlfW.js";import"./ActionButton--CJ0iKEB.js";import"./Checkbox-DYNFlkDz.js";import"./useValueChanged-D-liDC3H.js";import"./CollapsiblePanel-CO3SJ3wp.js";import"./MultiColumnSortDialog-BSJEKruq.js";import"./MenuTrigger-BD0ejQtC.js";import"./CompositeItem-B-dNGI5-.js";import"./ToolbarRootContext-sGl4TGZ5.js";import"./getDisabledMountTransitionStyles-F_MGGD3V.js";import"./getPseudoElementBounds-DOG3HfD3.js";import"./chevron-down-CIVY1k1-.js";import"./index-DwmipJz1.js";import"./error-BW4SFkbJ.js";import"./BaseCbacBanner-oOnZG3e4.js";import"./makeExternalStore-BRJsYdtc.js";import"./Tooltip-0Szhy22Z.js";import"./PopoverPopup-i0IaPECP.js";import"./debounce-Cqzs3vCN.js";import"./useOsdkClient-BgRNBudR.js";import"./tick-MfwPO4IK.js";import"./DropdownField-Bx2rVDJP.js";import"./isEqual-B49J3Sid.js";import"./withOsdkMetrics-DVtZ9wxA.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
