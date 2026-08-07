import{f as p,j as e}from"./iframe-BrodOdVa.js";import{O as i}from"./object-table-idZQuqXF.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-BtXh37L-.js";import"./Table-C5250XeL.js";import"./index-nUEOyMBU.js";import"./Dialog-EOZh6rtT.js";import"./cross-BpGLYQ9Z.js";import"./svgIconContainer-B4AqVu0w.js";import"./useBaseUiId-BTSlrQJt.js";import"./InternalBackdrop-Bjvbe2IQ.js";import"./composite-B1APNlh4.js";import"./index-c-nuxmn_.js";import"./index-BvXrNTm7.js";import"./index-Btb8e17T.js";import"./useEventCallback-EWFzwAHE.js";import"./SkeletonBar--6NjKTds.js";import"./LoadingCell-CIxkpBsl.js";import"./ColumnConfigDialog-CIOUoVyJ.js";import"./DraggableList-CsbqB8Uy.js";import"./search-DqsOFw0-.js";import"./Input-iiNc2naG.js";import"./useControlled-Cs7ltDfx.js";import"./small-cross-Br4CldP7.js";import"./Button-TfoAXQA0.js";import"./ActionButton-6EKtVdWc.js";import"./Checkbox-8q2mtsln.js";import"./useValueChanged-Df2xctWW.js";import"./CollapsiblePanel-D69D5MUo.js";import"./MultiColumnSortDialog-JqfUC0Kd.js";import"./MenuTrigger-C93NcQUY.js";import"./CompositeItem-BiidShqS.js";import"./ToolbarRootContext-Ch6E_QUO.js";import"./getDisabledMountTransitionStyles-BVIpZ_My.js";import"./getPseudoElementBounds-CZj0yuu2.js";import"./chevron-down-CncSp1oW.js";import"./index-CVc025-m.js";import"./error-DFX2T5hJ.js";import"./BaseCbacBanner-CYteqHtp.js";import"./makeExternalStore-C91wvf2v.js";import"./Tooltip-CNNDCbNt.js";import"./PopoverPopup-BEwNTt9o.js";import"./Combobox-De7QdF7N.js";import"./useOsdkClient-DDpROb7V.js";import"./tick-DNasZ5Uq.js";import"./DropdownField-P2AbbCFB.js";import"./withOsdkMetrics-CdZtg9n6.js";const tr={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
