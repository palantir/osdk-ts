import{j as i}from"./iframe-BHoRCdfJ.js";import{O as p}from"./object-table-BT4epL3E.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-C5X4YiAF.js";import"./preload-helper-PcfL1ZgJ.js";import"./Table-BogWTrQo.js";import"./index-CRbMuko2.js";import"./Dialog-CtEDH1Qe.js";import"./cross-o6c578IU.js";import"./svgIconContainer-Ddyj85do.js";import"./useBaseUiId-B3Ti1xga.js";import"./InternalBackdrop-C3Nd8T8u.js";import"./composite-DA-yFNZT.js";import"./index-KzV2K_a8.js";import"./index-BqxqbHVw.js";import"./index-1ksykTop.js";import"./useEventCallback-DvYBJvtj.js";import"./SkeletonBar-2AkWt2iD.js";import"./LoadingCell-BAYgpWEj.js";import"./ColumnConfigDialog-tSFHX2X-.js";import"./DraggableList-dOoeduXW.js";import"./search-CzBp321S.js";import"./Input-RRy85S6o.js";import"./useControlled-CXIbMiD_.js";import"./Button-GIqq_QaR.js";import"./small-cross-CbXKVrFp.js";import"./ActionButton-DaKwbCzu.js";import"./Checkbox-zBVDZpOJ.js";import"./useValueChanged-DU5TUzSb.js";import"./CollapsiblePanel-DeE2lA1F.js";import"./MultiColumnSortDialog-DxH9yAog.js";import"./MenuTrigger-Df17ZxAj.js";import"./CompositeItem-C8lI6v5m.js";import"./ToolbarRootContext-VQGHIcMO.js";import"./getDisabledMountTransitionStyles-BazN2qJZ.js";import"./getPseudoElementBounds-BKvO9qL5.js";import"./chevron-down-DCJDhdZ9.js";import"./index-CQXq0Q8i.js";import"./error-D1WxR2nX.js";import"./BaseCbacBanner-CmoBi3TT.js";import"./makeExternalStore-_J7Y5wzS.js";import"./Tooltip-4dHsdJ7I.js";import"./PopoverPopup-Cu_vPmGM.js";import"./debounce-Bv9XGbP2.js";import"./useOsdkClient-CKwE1qLu.js";import"./tick-C9oldqOI.js";import"./DropdownField-C17krznx.js";import"./isEqual-ld1BIUQT.js";import"./withOsdkMetrics-DiUqqX9-.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: defaultEmployeeColumns
  },
  parameters: {
    docs: {
      description: {
        story: "Minimal setup showing Employee data with default column definitions."
      },
      source: {
        code: \`<ObjectTable objectType={Employee} />\`
      }
    }
  },
  render: args => <div className="object-table-container" style={{
    height: "600px"
  }}>
      <ObjectTable {...args} />
    </div>,
  // Loads data, then opens a column header menu to confirm the default,
  // out-of-the-box header features are all present.
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Wait for the (MSW-mocked) rows to load.
    await canvas.findByText(TARGET_DATA);
    await openHeaderMenu(canvas, "fullName");
    await expect(await screen.findByRole("menuitem", {
      name: "Sort ascending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Sort descending"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Pin column"
    })).toBeInTheDocument();
    await expect(screen.getByRole("menuitem", {
      name: "Configure Columns"
    })).toBeInTheDocument();

    // Dismiss the menu so the story is left in a clean state.
    await userEvent.keyboard("{Escape}");
  }
}`,...(s=(r=n.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};const de=["Default"];export{n as Default,de as __namedExportsOrder,ue as default};
