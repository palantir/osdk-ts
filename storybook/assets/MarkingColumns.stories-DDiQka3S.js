import{f as p,j as e}from"./iframe-sFkKU2EW.js";import{O as i}from"./object-table-B3v0WA7i.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-lMjGN9O9.js";import"./index-C1mtpbbb.js";import"./Dialog-Dr0_knAV.js";import"./cross-Bblj5XEn.js";import"./svgIconContainer-CTKs33eW.js";import"./useBaseUiId-2GBtkKH8.js";import"./InternalBackdrop-DMI4zPFa.js";import"./composite-BWqY2mYD.js";import"./index-D9YZPkpb.js";import"./index-MBbYPXaC.js";import"./index-DMVl0OVE.js";import"./useEventCallback-DTEoozzd.js";import"./SkeletonBar-yb79BTsc.js";import"./LoadingCell-BbboCVej.js";import"./ColumnConfigDialog-a2pYwYfl.js";import"./DraggableList-ShBPaOoB.js";import"./search-C5MyxlXn.js";import"./Input-HNcQN8UH.js";import"./useControlled-CO-q6SPI.js";import"./isEqual-Bie7IRiN.js";import"./isObject-izUB8-_H.js";import"./Button-BzrUlVJG.js";import"./ActionButton-B2-nWb-3.js";import"./Checkbox-DER-NUfx.js";import"./useValueChanged-Cs053s6l.js";import"./CollapsiblePanel-Cr-QFvJF.js";import"./MultiColumnSortDialog-0vEef6gt.js";import"./MenuTrigger-Dcbu3aeb.js";import"./CompositeItem-eIp0TU0l.js";import"./ToolbarRootContext-D3tP2Ava.js";import"./getDisabledMountTransitionStyles-J18KEhlf.js";import"./getPseudoElementBounds-DUtwLibb.js";import"./chevron-down-ClDz1vs8.js";import"./index-KH1gmPLT.js";import"./error-BZvSZmgV.js";import"./BaseCbacBanner-1WcoocYE.js";import"./makeExternalStore-CocMOkpk.js";import"./Tooltip-CYG3Z_J6.js";import"./PopoverPopup-a3UQvS-R.js";import"./toNumber-UiKID2wH.js";import"./useOsdkClient-Cbm-ZTUZ.js";import"./tick-DzJzocCC.js";import"./DropdownField-Df3bZfRm.js";import"./withOsdkMetrics-BHzd1wiG.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
