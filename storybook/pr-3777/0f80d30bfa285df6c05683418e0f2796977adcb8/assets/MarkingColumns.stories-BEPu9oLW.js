import{f as p,j as e}from"./iframe-Cw1OzJXI.js";import{O as i}from"./object-table-BlvqIoek.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-VRjhiqdY.js";import"./Table-DO7lkPbv.js";import"./index-AdREiO06.js";import"./Dialog-CbtyUsmU.js";import"./cross-ByiNeePx.js";import"./svgIconContainer-CJz7g1GO.js";import"./useBaseUiId-kN-BHrn3.js";import"./InternalBackdrop-CIdeallu.js";import"./composite-DRnZZr1P.js";import"./index-I5TpdhWE.js";import"./index-BeY0cXRG.js";import"./index-2hLGIw1B.js";import"./useEventCallback-uoKbu4Qz.js";import"./SkeletonBar-DgfxUmTQ.js";import"./LoadingCell-CG_NKa2D.js";import"./ColumnConfigDialog-BmMKxIMW.js";import"./DraggableList-BqQahWmY.js";import"./search-B4Tj6n8T.js";import"./Input-D9ScyRrt.js";import"./useControlled-VUUaWxro.js";import"./isEqual-euZqodRa.js";import"./isObject-aq3xhs3E.js";import"./Button-UoOH76gu.js";import"./ActionButton-B01RMwt0.js";import"./Checkbox-CyI65MON.js";import"./useValueChanged-D5y9aqHu.js";import"./CollapsiblePanel-sIQ6S6_y.js";import"./MultiColumnSortDialog-Buq6GvoR.js";import"./MenuTrigger-BG0EgYHE.js";import"./CompositeItem-Wo-fO6cE.js";import"./ToolbarRootContext-D1YXlWsx.js";import"./getDisabledMountTransitionStyles-Ga8q-nXB.js";import"./getPseudoElementBounds-G7cdBYEe.js";import"./chevron-down-BF3wpGep.js";import"./index-Br682WIl.js";import"./error-DCuGKUxC.js";import"./BaseCbacBanner-BgGnqnzz.js";import"./makeExternalStore-Cti64u7E.js";import"./Tooltip-DPCzxURL.js";import"./PopoverPopup-Y3is10A5.js";import"./toNumber-lmVKIlAb.js";import"./useOsdkClient-Dbtl-Pan.js";import"./tick-x37joSps.js";import"./DropdownField-DmLcWF-C.js";import"./withOsdkMetrics-uQ7KoVP0.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
