import{f as p,j as e}from"./iframe-h1qnQQVx.js";import{O as i}from"./object-table-CCB2sUYl.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-ADovFD1C.js";import"./Table-BgITRHQ7.js";import"./index-DD5KPom6.js";import"./Dialog-D_qB_2bQ.js";import"./cross-D4ej-8wY.js";import"./svgIconContainer-Ca3ASY3c.js";import"./useBaseUiId-hqOZCtk1.js";import"./InternalBackdrop-DzsQOQ6H.js";import"./composite-DEzICmec.js";import"./index-YrVkhqd3.js";import"./index-XQODY1Mp.js";import"./index-bgANXVO3.js";import"./useEventCallback-CAa8wROE.js";import"./SkeletonBar-CZuoXFeA.js";import"./LoadingCell-Dlk9LDgi.js";import"./ColumnConfigDialog--b3u250j.js";import"./DraggableList-DCSYf_a_.js";import"./search-DcazpnHi.js";import"./Input-Cf0RIFeN.js";import"./useControlled-BQy-u6tQ.js";import"./Button-dm1NzbtL.js";import"./small-cross-FuKyHVfD.js";import"./ActionButton-NhxG-Rd-.js";import"./Checkbox-CAMoMPDw.js";import"./useValueChanged-Bp8vrCQO.js";import"./CollapsiblePanel-BDa3QWHs.js";import"./MultiColumnSortDialog-DqDflPY8.js";import"./MenuTrigger-fV8ObzjY.js";import"./CompositeItem-CTw2DdEJ.js";import"./ToolbarRootContext-BYONpLtc.js";import"./getDisabledMountTransitionStyles-M7Lz_Jwx.js";import"./getPseudoElementBounds-25R6sRkV.js";import"./chevron-down-CivjtU0i.js";import"./index-BlgrCeK6.js";import"./error-DJpMatiu.js";import"./BaseCbacBanner-8PJVPI9r.js";import"./makeExternalStore-NEI1OBmX.js";import"./Tooltip-B55QNhDI.js";import"./PopoverPopup-CrYZUhxY.js";import"./debounce-7u23BgIJ.js";import"./useOsdkClient-D3paodEw.js";import"./tick-CkX4BKXY.js";import"./DropdownField-CCAidc8X.js";import"./isEqual-CoPuQcQe.js";import"./withOsdkMetrics-DQ_0oDdX.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
