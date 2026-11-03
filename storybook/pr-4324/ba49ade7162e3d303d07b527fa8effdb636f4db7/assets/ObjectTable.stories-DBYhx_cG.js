import{j as i}from"./iframe-DEUQfbyJ.js";import{O as p}from"./object-table-cFeBBSw4.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-B1WnCtaJ.js";import"./preload-helper-DDtbSBML.js";import"./Table-Bd5XrgZX.js";import"./index-C6_mThYo.js";import"./Dialog-BSvKxkhq.js";import"./cross-BJMUt8op.js";import"./svgIconContainer-Cb_T1wEM.js";import"./useBaseUiId-CRei-m-p.js";import"./InternalBackdrop-Aqi47OUJ.js";import"./composite-Bu1RP316.js";import"./index-5cIFHse-.js";import"./index-DlbzGHlu.js";import"./index-AzDJyk_j.js";import"./useEventCallback-CRDTuIQt.js";import"./SkeletonBar-DvYOZTAf.js";import"./LoadingCell-Cl7o_rtR.js";import"./ColumnConfigDialog-BUTGFTNl.js";import"./DraggableList-Bby71G5h.js";import"./search-bO4Ln9fx.js";import"./Input-Bp3cyvX_.js";import"./useControlled-BF2EiofB.js";import"./Button-PnV_trQF.js";import"./small-cross-CX9XBHyk.js";import"./ActionButton-CL0HGLP3.js";import"./Checkbox-CKLhUd_K.js";import"./useValueChanged-D5ajVfmi.js";import"./CollapsiblePanel-xExM-9G0.js";import"./MultiColumnSortDialog-LT5sxkuL.js";import"./MenuTrigger-CFReuUPx.js";import"./CompositeItem-zXsqXwGS.js";import"./ToolbarRootContext-D3nYLoXj.js";import"./getDisabledMountTransitionStyles-XgqHg06x.js";import"./getPseudoElementBounds-CuNE1gbu.js";import"./chevron-down-Dri7QTYH.js";import"./index-Cb73vfBj.js";import"./error-CqWSLLge.js";import"./BaseCbacBanner-CJ05xbWq.js";import"./makeExternalStore-DBpHlW_G.js";import"./Tooltip-B21lyOBo.js";import"./PopoverPopup-Cp92vqrR.js";import"./debounce-BX-I8tYB.js";import"./useOsdkClient-CLqlE-Zc.js";import"./tick-BxydVJl6.js";import"./DropdownField-Dlw4EWWr.js";import"./isEqual-C1-q93yY.js";import"./withOsdkMetrics-GkFpiJAY.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
