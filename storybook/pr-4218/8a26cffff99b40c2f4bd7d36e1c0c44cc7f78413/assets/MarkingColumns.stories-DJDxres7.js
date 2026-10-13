import{f as p,j as e}from"./iframe-qlavKhcC.js";import{O as i}from"./object-table-DhiZdnvj.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C1Px9yiL.js";import"./Table-DbQ4W-EG.js";import"./index-B67iUNS7.js";import"./Dialog-BY4Z7Ubb.js";import"./cross-_jhIc_Zd.js";import"./svgIconContainer-B4I2H2FD.js";import"./useBaseUiId-D99Is1tN.js";import"./InternalBackdrop-CstziURT.js";import"./composite-BRoxV9_z.js";import"./index-Br0Vgd-J.js";import"./index-ZYLeOkr2.js";import"./index-DQnoF5JT.js";import"./useEventCallback-BOOCKsQK.js";import"./SkeletonBar-BIIetOih.js";import"./LoadingCell-BNdMNVbo.js";import"./ColumnConfigDialog-Cnx4R8p0.js";import"./DraggableList-CfQeV_Eu.js";import"./search-UuNwtUH-.js";import"./Input-CtY9R5P4.js";import"./useControlled-DfaRfuwf.js";import"./Button-r2aYddAL.js";import"./small-cross-BiYV0tez.js";import"./ActionButton-CnFjisnJ.js";import"./Checkbox-BQbg4nhN.js";import"./useValueChanged-BTXhrJc6.js";import"./CollapsiblePanel-c5DyBahg.js";import"./MultiColumnSortDialog-BREwVqvQ.js";import"./MenuTrigger-CMkq6Pon.js";import"./CompositeItem-DQfjGBA0.js";import"./ToolbarRootContext-CciloOLN.js";import"./getDisabledMountTransitionStyles-CQfW0Yzy.js";import"./getPseudoElementBounds-BG6WHPgG.js";import"./chevron-down-CeWg8uEU.js";import"./index-8MYCUco8.js";import"./error-DGVK5Ulu.js";import"./BaseCbacBanner-sBOnvXxB.js";import"./makeExternalStore-DOTLplCc.js";import"./Tooltip-DipLFS6Y.js";import"./PopoverPopup-Cm3EjpO-.js";import"./debounce-CvczMDGy.js";import"./useOsdkClient-ByR-C6Rs.js";import"./tick-BlSBD_8E.js";import"./DropdownField-TZaSBJ1a.js";import"./isEqual-Dh5UEpaX.js";import"./withOsdkMetrics-EXt5SwEJ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
