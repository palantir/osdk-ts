import{f as p,j as e}from"./iframe-ByGxztuR.js";import{O as i}from"./object-table-DZyoOWLx.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-DqetcjwK.js";import"./index-C_NmzukE.js";import"./Dialog-B7Nbacy1.js";import"./cross-EOhwFFJB.js";import"./svgIconContainer-GMqm2qsj.js";import"./useBaseUiId-CwX2o4Wt.js";import"./InternalBackdrop-DgqbQRDj.js";import"./composite-DJoo4D6V.js";import"./index-YFgfuOe9.js";import"./index-Das4h1Wa.js";import"./index-CkNTyrKZ.js";import"./useEventCallback-jNWNQjbn.js";import"./SkeletonBar-D-CJ2Xd8.js";import"./LoadingCell-sPBSsQMc.js";import"./ColumnConfigDialog--2P7KNXB.js";import"./DraggableList-CA2K9bf_.js";import"./search-CzmiRz1J.js";import"./Input-CuOC6fkL.js";import"./useControlled-BeV8RDqE.js";import"./Button-BOr-KM70.js";import"./small-cross-BEW2vdRK.js";import"./ActionButton-BlTtKw0A.js";import"./Checkbox-DBVoCxJX.js";import"./useValueChanged-Z8Bv9K84.js";import"./CollapsiblePanel-DhK36AQZ.js";import"./MultiColumnSortDialog-DhbVIDQv.js";import"./MenuTrigger-DLhrvdAe.js";import"./CompositeItem-CzWKxF8z.js";import"./ToolbarRootContext-CvTQ741x.js";import"./getDisabledMountTransitionStyles-C7v_y2WO.js";import"./getPseudoElementBounds-TA-1Gcka.js";import"./chevron-down-Bod3Eu0k.js";import"./index-Bv7C6Zcf.js";import"./error-DHSjI_y4.js";import"./BaseCbacBanner-D1Lz2cp9.js";import"./makeExternalStore-BO8GdXCg.js";import"./Tooltip-DIrk5jKg.js";import"./PopoverPopup-CaNVB3SN.js";import"./Select-CvqHSLxV.js";import"./useOsdkClient-CVOauZ1U.js";import"./tick-BQpeUazS.js";import"./DropdownField-Ce4MJtTK.js";import"./useDebouncedCallback-CiTG6wRJ.js";import"./isEqual-DF2C28I7.js";import"./_baseIsEqual-Ck41N75x.js";import"./stableSerialize-BgLLW9e2.js";import"./withOsdkMetrics-CzSXt9I1.js";const ar={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const pr=["MarkingColumns"];export{r as MarkingColumns,pr as __namedExportsOrder,ar as default};
