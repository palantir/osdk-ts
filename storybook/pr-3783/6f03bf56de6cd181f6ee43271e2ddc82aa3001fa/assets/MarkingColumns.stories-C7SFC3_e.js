import{f as p,j as e}from"./iframe-gzVrYTak.js";import{O as i}from"./object-table-C-sLm1HQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-L3pE98T_.js";import"./Table-BkXDUvyw.js";import"./index-RDVHJcvo.js";import"./Dialog-NA1whH4o.js";import"./cross-CM3TMApR.js";import"./svgIconContainer-kSLl__Df.js";import"./useBaseUiId-B81zB54n.js";import"./InternalBackdrop-CxXYb1xI.js";import"./composite-DQVnyrFk.js";import"./index-Cj4q3NWW.js";import"./index-CrUm-nlo.js";import"./index-YkVJ8bwT.js";import"./useEventCallback-CaYSsoFe.js";import"./SkeletonBar-CuVXQn97.js";import"./LoadingCell-BvfCkKa7.js";import"./ColumnConfigDialog-CCz4bxdY.js";import"./DraggableList-CowK3uFp.js";import"./search-DQCB2p55.js";import"./Input-vdipARBj.js";import"./useControlled-IkTNQ6K_.js";import"./isEqual-DAOgit_z.js";import"./isObject-ne5OPKUP.js";import"./Button-iNtaOIhz.js";import"./ActionButton-DkjqAK9y.js";import"./Checkbox-u3pEtOb0.js";import"./useValueChanged-C32Qdb5x.js";import"./CollapsiblePanel-DSjaRvCE.js";import"./MultiColumnSortDialog-XfHjxf5h.js";import"./MenuTrigger-DZ9_zWX7.js";import"./CompositeItem-Y24lxPAU.js";import"./ToolbarRootContext-BEITgtkO.js";import"./getDisabledMountTransitionStyles-BFYTmhnF.js";import"./getPseudoElementBounds-BC-J1AwV.js";import"./chevron-down-ErG01cxd.js";import"./index-BxtnWxzi.js";import"./error-DbGHRKTj.js";import"./BaseCbacBanner-iBnAmYD-.js";import"./makeExternalStore-Cb7zye3Q.js";import"./Tooltip-YgeU8akB.js";import"./PopoverPopup-CX4ORbOa.js";import"./toNumber-Cw2vjGar.js";import"./useOsdkClient-DTgVoOP6.js";import"./tick-BfZPsX8z.js";import"./DropdownField-Cg5Ze26h.js";import"./withOsdkMetrics-CkrFpESP.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
