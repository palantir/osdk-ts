import{f as p,j as e}from"./iframe-BIj6bFPD.js";import{O as i}from"./object-table-DbiEHEtX.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-CnFW70BH.js";import"./Table-Cl5RC9Dy.js";import"./index-EzVNlF2P.js";import"./Dialog-DU8IN4It.js";import"./cross-CIvbz3fr.js";import"./svgIconContainer-DL-G0QrC.js";import"./useBaseUiId-DVJNGTFF.js";import"./InternalBackdrop-DxOsgfPJ.js";import"./composite-COFb-sDn.js";import"./index-Cbfdor1M.js";import"./index-DhR718jz.js";import"./index-6zRHdDey.js";import"./useEventCallback-tYIYtrHJ.js";import"./SkeletonBar-DH9VYcWT.js";import"./LoadingCell-Dt98umfs.js";import"./ColumnConfigDialog-Bu43fLwi.js";import"./DraggableList-DO4yU3as.js";import"./search-BeRqVnC2.js";import"./Input-DlOQmL8-.js";import"./useControlled-J3hwkrOU.js";import"./isEqual-BRtcnRU9.js";import"./isObject-CXKkwPCq.js";import"./Button-BGebXm9d.js";import"./ActionButton-Xfr9hThM.js";import"./Checkbox-CJqKBJ8t.js";import"./useValueChanged-CsS6AYiu.js";import"./CollapsiblePanel-B1b8w9ck.js";import"./MultiColumnSortDialog-BqGwcs90.js";import"./MenuTrigger-DMKts1uV.js";import"./CompositeItem-BCndZLGz.js";import"./ToolbarRootContext-CUP1TrgR.js";import"./getDisabledMountTransitionStyles-BMBUc-yd.js";import"./getPseudoElementBounds-senjx62T.js";import"./chevron-down-BrYXFGIg.js";import"./index-dkrXtuUJ.js";import"./error-DibXa5zr.js";import"./BaseCbacBanner-BBfv4xvp.js";import"./makeExternalStore-DDikwGdp.js";import"./Tooltip-BuEsOcB2.js";import"./PopoverPopup-B43QKyOO.js";import"./toNumber-D55U6XTD.js";import"./useOsdkClient-BTO9c-w9.js";import"./tick-uEmvjTqW.js";import"./DropdownField-2-yUUqef.js";import"./withOsdkMetrics-Mx1JK8yZ.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
