import{f as p,j as e}from"./iframe-BRewJKLI.js";import{O as i}from"./object-table-D5TlWZ46.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Th7jsi9T.js";import"./Table-Dc0qfuKa.js";import"./index-CsEIXvZI.js";import"./Dialog-DaDhDBbi.js";import"./cross-CRuUYbdJ.js";import"./svgIconContainer-YEGGrYC5.js";import"./useBaseUiId-BirOMeO-.js";import"./InternalBackdrop-BPogiAuS.js";import"./composite-DPZfXKt9.js";import"./index-CdNujWPa.js";import"./index-DLtzTCbX.js";import"./index-DhG0LkJ4.js";import"./useEventCallback-DBAxwR-4.js";import"./SkeletonBar-BqTc4Ala.js";import"./LoadingCell-YHsTiX7l.js";import"./ColumnConfigDialog-BGrtzyJ_.js";import"./DraggableList-vym7ucgl.js";import"./search-CNN9U08N.js";import"./Input-Dfhle3pE.js";import"./useControlled-BuUPxEIC.js";import"./isEqual-D6mfypIN.js";import"./isObject-Dc4jCNfw.js";import"./Button-D-a4uE4Q.js";import"./ActionButton-C5TNkQ1_.js";import"./Checkbox-Cd_u_cft.js";import"./useValueChanged-2DZs80zy.js";import"./CollapsiblePanel-jZGrsHaA.js";import"./MultiColumnSortDialog-d_cl-_yn.js";import"./MenuTrigger-TkYbVTdx.js";import"./CompositeItem-8uv7pmSI.js";import"./ToolbarRootContext-5hsijlsK.js";import"./getDisabledMountTransitionStyles-CLgG3HXO.js";import"./getPseudoElementBounds-BP7MwREj.js";import"./chevron-down-C8r7y8He.js";import"./index-B-MYbMMb.js";import"./error-DE-DySAz.js";import"./BaseCbacBanner-qKzx03a8.js";import"./makeExternalStore-BJhUGNS3.js";import"./Tooltip-Bpropqbk.js";import"./PopoverPopup-BiGoYvvc.js";import"./toNumber-CG15L9if.js";import"./useOsdkClient-DI0Ym6Cu.js";import"./tick-ROx4W5IJ.js";import"./DropdownField-BEiOxIDI.js";import"./withOsdkMetrics-DXH1scdv.js";const or={title:"Components/ObjectTable/Features/Advanced",component:i,tags:["beta"],parameters:{msw:{handlers:[...p.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},parameters:{docs:{source:{code:`const columnDefinitions = [
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
