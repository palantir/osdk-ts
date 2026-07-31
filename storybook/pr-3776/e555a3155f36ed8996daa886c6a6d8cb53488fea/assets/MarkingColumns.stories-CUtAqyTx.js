import{f as p,j as e}from"./iframe-B88mVS7j.js";import{O as i}from"./object-table-DNn1aq8t.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Uh0wBuM7.js";import"./Table-C9amQtpi.js";import"./index-CHR_FX06.js";import"./Dialog-BqiW6w-x.js";import"./cross-Btk_mk5d.js";import"./svgIconContainer-DzGpDek4.js";import"./useBaseUiId-B57MJH3J.js";import"./InternalBackdrop-AjIOHMnw.js";import"./composite-CMcpDiPw.js";import"./index-CW2oecwS.js";import"./index-kGWOF-P0.js";import"./index-C3DNoegO.js";import"./useEventCallback-BOjwi_-M.js";import"./SkeletonBar-eH1Cw7eQ.js";import"./LoadingCell-n-qnNa3r.js";import"./ColumnConfigDialog-CUbQ3dGA.js";import"./DraggableList-CRSNi5y7.js";import"./search-SYzB7163.js";import"./Input-CF934myu.js";import"./useControlled-DYXt92Xk.js";import"./isEqual-DQCuYCo-.js";import"./isObject-DTjtTHQp.js";import"./Button-BdjBpoPj.js";import"./ActionButton-BvVwXU_I.js";import"./Checkbox-N1OTZTa9.js";import"./useValueChanged-Be0DaIrx.js";import"./CollapsiblePanel-BuNMefI-.js";import"./MultiColumnSortDialog-8UVxX1bE.js";import"./MenuTrigger-VK-rUh4l.js";import"./CompositeItem-B9Z5xrKg.js";import"./ToolbarRootContext-pC6zktu4.js";import"./getDisabledMountTransitionStyles-C2ONeXVG.js";import"./getPseudoElementBounds-BX0gj9Cd.js";import"./chevron-down-CgY_yXxx.js";import"./index-BEsZpRLK.js";import"./error-TTEpjfmJ.js";import"./BaseCbacBanner-DRiogddk.js";import"./makeExternalStore-Cu3F9xH0.js";import"./Tooltip-CNxWZpwW.js";import"./PopoverPopup-JIs4CT0a.js";import"./toNumber-CCDIu-4N.js";import"./useOsdkClient-ra61qNU0.js";import"./tick-D1eJMyLY.js";import"./DropdownField-B_ROMpHU.js";import"./withOsdkMetrics-D0OzWSyM.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
