import{f as p,j as e}from"./iframe-BQVGbu2k.js";import{O as i}from"./object-table-BqXF4WqQ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-BKGJNGqH.js";import"./index-UjJLQ6cm.js";import"./Dialog-4N8q7UIT.js";import"./cross-BY7NjonN.js";import"./svgIconContainer-DtRLntwQ.js";import"./useBaseUiId-ITjE-Rop.js";import"./InternalBackdrop-sVoUUnLk.js";import"./composite-DWUjzrFv.js";import"./index-C2Nrwejt.js";import"./index-aze0ecBd.js";import"./index-DjKj0FGI.js";import"./useEventCallback-C05J9RUs.js";import"./SkeletonBar-CdM4w0Of.js";import"./LoadingCell-C8mxc3uX.js";import"./ColumnConfigDialog-Cmf7zNmb.js";import"./DraggableList-DA3yQ5R1.js";import"./search-yNRsiLRX.js";import"./Input-CTofJ1Il.js";import"./useControlled-jw0vZUxO.js";import"./Button-BlwOAbpp.js";import"./small-cross-ErM1txrK.js";import"./ActionButton-B_edPDtE.js";import"./Checkbox-D53WToAL.js";import"./useValueChanged-B9a68oJh.js";import"./CollapsiblePanel-BiGXvvij.js";import"./MultiColumnSortDialog-Bi5oPt8Z.js";import"./MenuTrigger-CZuy8IJF.js";import"./CompositeItem-BDrCuzn_.js";import"./ToolbarRootContext-BOIrYkCq.js";import"./getDisabledMountTransitionStyles-BkkRRDMh.js";import"./getPseudoElementBounds-BhASupvS.js";import"./chevron-down-BeSKiCuv.js";import"./index-B6njuCdz.js";import"./error-DfudzLdK.js";import"./BaseCbacBanner-C5uBCO22.js";import"./makeExternalStore-rvCXuzIs.js";import"./Tooltip-BwDvlCYm.js";import"./PopoverPopup-dEhDkVAm.js";import"./toNumber-D7lw-MaU.js";import"./useOsdkClient-C3PTxFgv.js";import"./tick-d0gjkIzW.js";import"./DropdownField-BFMYBHk8.js";import"./withOsdkMetrics-iKiCFPY5.js";const tr={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
}`,...(n=(o=r.parameters)==null?void 0:o.docs)==null?void 0:n.source}}};const or=["MarkingColumns"];export{r as MarkingColumns,or as __namedExportsOrder,tr as default};
