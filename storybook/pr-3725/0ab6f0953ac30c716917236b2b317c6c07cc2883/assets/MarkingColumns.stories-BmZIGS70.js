import{f as p,j as e}from"./iframe-BbjW9ru2.js";import{O as i}from"./object-table-BBsIVRju.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BBqenLAY.js";import"./Table--MLVRFDo.js";import"./index-D6yb_Az8.js";import"./Dialog-4AbL7KG2.js";import"./cross-Df-G8xzA.js";import"./svgIconContainer-B3OjmCik.js";import"./useBaseUiId-CvuxzwAh.js";import"./InternalBackdrop-tnvec0Tt.js";import"./composite-G5vT1uE0.js";import"./index-CTTYMewW.js";import"./index-1oGZAAbg.js";import"./index-TOKmGKHA.js";import"./useEventCallback-BW6gu2Rn.js";import"./SkeletonBar-BeihCZ-J.js";import"./LoadingCell-IO6iOam8.js";import"./ColumnConfigDialog-CBxVrw6D.js";import"./DraggableList-JHVSkCWp.js";import"./search-C-32WFYh.js";import"./Input-BI9XOSMU.js";import"./useControlled-CCGxAKe6.js";import"./isEqual-CsVc_e52.js";import"./isObject-gtwe7U2X.js";import"./Button-Cud-V5j3.js";import"./ActionButton-D9t5Cr9E.js";import"./Checkbox-xIoq5pKk.js";import"./useValueChanged-BzhPzziE.js";import"./CollapsiblePanel-CA3hBng5.js";import"./MultiColumnSortDialog-D5NM_5eD.js";import"./MenuTrigger-n1NUP6YF.js";import"./CompositeItem-Bb53XA62.js";import"./ToolbarRootContext-DpLajBJ1.js";import"./getDisabledMountTransitionStyles-COzVsMhX.js";import"./getPseudoElementBounds-DfQi2vam.js";import"./chevron-down-CO2xg-to.js";import"./index-CRtvo395.js";import"./error-Cp-Qt5xo.js";import"./BaseCbacBanner-BbNNP4O8.js";import"./makeExternalStore-Cj7p7gMA.js";import"./Tooltip-BD386Ujy.js";import"./PopoverPopup-bib0K7Tx.js";import"./toNumber-DyqaTaif.js";import"./useOsdkClient-DPOKUXDn.js";import"./tick-CiqjUs2a.js";import"./DropdownField-CKqGOUyd.js";import"./withOsdkMetrics-K7yNfEUf.js";const or={title:"Components/ObjectTable/Features",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
