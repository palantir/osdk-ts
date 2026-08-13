import{f as p,j as e}from"./iframe-Bbj8rm_V.js";import{O as i}from"./object-table-5_esxdbq.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-D6Fx-mKo.js";import"./Table-CX7l8D-O.js";import"./index-Dq2MMzil.js";import"./Dialog-PqyQrZYx.js";import"./cross-DBtpPd0D.js";import"./svgIconContainer-BUx50-vg.js";import"./useBaseUiId-DNWEd936.js";import"./InternalBackdrop-kx6x5ne-.js";import"./composite-Dd0Cawl-.js";import"./index-wCPgzdXR.js";import"./index-DijupkwT.js";import"./index-DpjApppD.js";import"./useEventCallback-wJ0LYxwh.js";import"./SkeletonBar-DmRq_NJ3.js";import"./LoadingCell-GH6mJhL-.js";import"./ColumnConfigDialog-CWmXgvHX.js";import"./DraggableList-rWaVA9Cc.js";import"./search-PnNyfQZV.js";import"./Input-CHlhWJjT.js";import"./useControlled-CA2uOZy1.js";import"./Button-Dy0jx2Ef.js";import"./small-cross-CLfkAhz4.js";import"./ActionButton-C-i_Pxdj.js";import"./Checkbox-pjKjAT32.js";import"./useValueChanged-f5I0dvEN.js";import"./CollapsiblePanel-C_9NzZbd.js";import"./MultiColumnSortDialog-eUHVzGJ9.js";import"./MenuTrigger-DhLXHFbW.js";import"./CompositeItem-CBUY4KWM.js";import"./ToolbarRootContext-ZiL2Vz-F.js";import"./getDisabledMountTransitionStyles-CGbcTXfA.js";import"./getPseudoElementBounds-VeOlnm8c.js";import"./chevron-down-CHGSFnin.js";import"./index-BFuwLodk.js";import"./error-UxBVQGvQ.js";import"./BaseCbacBanner-B26VtbjG.js";import"./makeExternalStore-B9UD_2Tu.js";import"./Tooltip-DrOHS7nL.js";import"./PopoverPopup-CdeNDKDp.js";import"./debounce-D6u-Quyv.js";import"./useOsdkClient-CWIMLvdJ.js";import"./tick-H1bNLZVn.js";import"./DropdownField-CbgT0A6x.js";import"./isEqual-B2OLfJBW.js";import"./withOsdkMetrics-BeB3Egw6.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
