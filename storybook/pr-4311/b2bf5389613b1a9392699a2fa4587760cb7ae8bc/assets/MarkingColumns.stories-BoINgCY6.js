import{f as p,j as e}from"./iframe-DyyhsHPN.js";import{O as i}from"./object-table-Cbpj0r1f.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-TecF9w53.js";import"./Table-CNKLhBjA.js";import"./index-CvvBsxWW.js";import"./Dialog-DUBU3nXc.js";import"./cross-DpLnPIVs.js";import"./svgIconContainer-g2nhA_co.js";import"./useBaseUiId-BJ6PIN04.js";import"./InternalBackdrop-BngMdUq0.js";import"./composite-Bsp9V2TC.js";import"./index-BbJuL6dd.js";import"./index-CGUIbyJe.js";import"./index-Blnj9NS0.js";import"./useEventCallback-BxrNV8_m.js";import"./SkeletonBar-CFyXvkmW.js";import"./LoadingCell-DfavFaJ0.js";import"./ColumnConfigDialog-Byb5jzNj.js";import"./DraggableList-BcHgLABh.js";import"./search-CPGUiXny.js";import"./Input-DLcXZfv5.js";import"./useControlled-u76uhEJm.js";import"./Button-xW-9IrmO.js";import"./small-cross-CR1TDLwP.js";import"./ActionButton-BPWFDy9w.js";import"./Checkbox-DBJ2rOf5.js";import"./useValueChanged-DhqK6Cgu.js";import"./CollapsiblePanel-F0G2oMiY.js";import"./MultiColumnSortDialog-CFnl3gHS.js";import"./MenuTrigger-C4sLaFn-.js";import"./CompositeItem-COlnvMhp.js";import"./ToolbarRootContext-DTFkxjo1.js";import"./getDisabledMountTransitionStyles-B07p6-VI.js";import"./getPseudoElementBounds-CmtmchTY.js";import"./chevron-down-7VC2t8Hz.js";import"./index-Bb3R8qQ9.js";import"./error-CHS0y63D.js";import"./BaseCbacBanner-DwHDFIk2.js";import"./makeExternalStore-sflRCuNQ.js";import"./Tooltip-C6FTM4hx.js";import"./PopoverPopup-D4mGjEGR.js";import"./debounce-4BLi9EBr.js";import"./useOsdkClient-oeSeXjY9.js";import"./tick-3uXgu5u5.js";import"./DropdownField-CtXOtwg0.js";import"./isEqual-BoU7v8bO.js";import"./withOsdkMetrics-DkePQGfR.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
