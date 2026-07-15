import{f as n,j as t}from"./iframe-BFjDjldP.js";import{O as p}from"./object-table-DzHHOnDZ.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-C4pZiwVf.js";import"./Table-3v_gwBWr.js";import"./index-CAZUQTDj.js";import"./Dialog-829lqEUK.js";import"./cross-BcaWw6F5.js";import"./svgIconContainer-CGD7gnUj.js";import"./useBaseUiId-CZ-M6IZx.js";import"./InternalBackdrop-BFL0ppWh.js";import"./composite-GlzD71Ug.js";import"./index-WnNqCI-y.js";import"./index-DoxA6u-7.js";import"./index-BIqccblu.js";import"./useEventCallback-G9rlIAQ1.js";import"./SkeletonBar-DZ-IjKaA.js";import"./LoadingCell-C_4hGxTc.js";import"./ColumnConfigDialog-D1Nenok-.js";import"./DraggableList-DmXDelyd.js";import"./search-BuWIhr19.js";import"./Input-CmdAyOYS.js";import"./useControlled-yW-lRQwM.js";import"./Button-cQOGqwaF.js";import"./small-cross-Cv21Vx3n.js";import"./ActionButton-C1ER4vI7.js";import"./Checkbox-ISYnRfKe.js";import"./useValueChanged-D1b0TeIc.js";import"./CollapsiblePanel-C9ZuFXDe.js";import"./MultiColumnSortDialog-CE0TBqfO.js";import"./MenuTrigger-BfegW3hw.js";import"./CompositeItem-PrDZaJD1.js";import"./ToolbarRootContext-D2niHTK6.js";import"./getDisabledMountTransitionStyles-CwbkB3BS.js";import"./getPseudoElementBounds-DvQGhbYr.js";import"./chevron-down-Bdbwp4Pa.js";import"./index-CUUG7iJB.js";import"./error-Ds7N_mns.js";import"./BaseCbacBanner-EbNQ6A37.js";import"./makeExternalStore-BeTIfd3z.js";import"./Tooltip-BH0Z4wSw.js";import"./PopoverPopup-DxETHebR.js";import"./toNumber-CbJrAcJX.js";import"./useOsdkClient-tCVr19c5.js";import"./tick-C2vnM4aw.js";import"./DropdownField-BGyw82nF.js";import"./withOsdkMetrics-CgiiyEtX.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
