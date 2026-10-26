import{f as p,j as e}from"./iframe-I-oDj4Zf.js";import{O as i}from"./object-table-BDzyk2ws.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-DoR3GGZy.js";import"./Table-BbncEI9K.js";import"./index-QR0ynjTm.js";import"./Dialog-DqQkO56R.js";import"./cross-CX2gEjus.js";import"./svgIconContainer-BrWiwUny.js";import"./useBaseUiId-DbsMUGHz.js";import"./InternalBackdrop-CfSb4ma1.js";import"./composite-CVLqeN_f.js";import"./index-D2sLcc-K.js";import"./index-CPedUlI1.js";import"./index-DpMDyn81.js";import"./useEventCallback-Bc6J5k71.js";import"./SkeletonBar-CGYOp5T6.js";import"./LoadingCell-BoayzotZ.js";import"./ColumnConfigDialog-D2jY4VLY.js";import"./DraggableList-LDR0wrNb.js";import"./search-CIYeg_xA.js";import"./Input-QRcBEz-L.js";import"./useControlled-CphiSNJu.js";import"./Button-DZTSIR38.js";import"./small-cross-D7PZgAK5.js";import"./ActionButton-C-BKMT4N.js";import"./Checkbox-C0EGJ27n.js";import"./useValueChanged-CiTYSghQ.js";import"./CollapsiblePanel-BGlZd1qK.js";import"./MultiColumnSortDialog-Cn0wU-xj.js";import"./MenuTrigger-DMkgApeK.js";import"./CompositeItem-Bh0NB-Cc.js";import"./ToolbarRootContext-DOAo9bSD.js";import"./getDisabledMountTransitionStyles-yOgeaO0s.js";import"./getPseudoElementBounds-Cs3Xa3sB.js";import"./chevron-down-DsdifgPL.js";import"./index-COac3hDI.js";import"./error-DQf4Jva_.js";import"./BaseCbacBanner-PQFEbr0C.js";import"./makeExternalStore-DSBRYZ6v.js";import"./Tooltip-DkmWZB-H.js";import"./PopoverPopup-D4Yb-OFT.js";import"./debounce-D5e0wjoa.js";import"./useOsdkClient-CEoxI4QC.js";import"./tick-BrOwqOvA.js";import"./DropdownField-I4HAtEDY.js";import"./isEqual-CssyDgHr.js";import"./withOsdkMetrics-CzZMIy3-.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
