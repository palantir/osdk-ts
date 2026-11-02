import{f as p,j as e}from"./iframe-DSFURlDA.js";import{O as i}from"./object-table-UUemqtA3.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-B1VAjeN0.js";import"./Table-D-44ggYt.js";import"./index-n2cVRLUV.js";import"./Dialog-CH-s4w18.js";import"./cross-BfC9nIFZ.js";import"./svgIconContainer-DdvBD_9a.js";import"./useBaseUiId-CPQbMaU1.js";import"./InternalBackdrop-i93WBNhG.js";import"./composite-zLymdlB4.js";import"./index-DEWyNal3.js";import"./index-DatMcuFW.js";import"./index-1g8QVa9w.js";import"./useEventCallback-D-jfKQ1Z.js";import"./SkeletonBar-BAkRYcYG.js";import"./LoadingCell-BD5eCvTL.js";import"./ColumnConfigDialog-wvEfUZ8D.js";import"./DraggableList-CM0711ve.js";import"./search-BUp5dxQj.js";import"./Input-TT4Euawv.js";import"./useControlled-C2QQWcpQ.js";import"./Button-B9oX6qDj.js";import"./small-cross-1OkFxGzR.js";import"./ActionButton-63CS6rUE.js";import"./Checkbox-DrDolBYQ.js";import"./useValueChanged-CboUDFgk.js";import"./CollapsiblePanel-7-q3gSlS.js";import"./MultiColumnSortDialog-Dm-0rn5u.js";import"./MenuTrigger-idfC3K8M.js";import"./CompositeItem-4TlbRyqO.js";import"./ToolbarRootContext-D4dmc43x.js";import"./getDisabledMountTransitionStyles-C6-Suj3S.js";import"./getPseudoElementBounds-B4-845mD.js";import"./chevron-down-DT3G6LtT.js";import"./index-ojfPVnys.js";import"./error-DUIlp0md.js";import"./BaseCbacBanner-Bomlyg8i.js";import"./makeExternalStore-DipsHuCX.js";import"./Tooltip-D-FrCqJr.js";import"./PopoverPopup-BM6OifUC.js";import"./debounce-BCr80lUe.js";import"./useOsdkClient-B7Ec3XZP.js";import"./tick-Bd1kaq1w.js";import"./DropdownField-Ewv0QYli.js";import"./isEqual-DjH9X7M3.js";import"./withOsdkMetrics-CcZF-o22.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
