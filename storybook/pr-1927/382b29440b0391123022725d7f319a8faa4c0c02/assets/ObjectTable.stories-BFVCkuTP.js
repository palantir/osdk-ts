import{j as i}from"./iframe-_L5VjRrt.js";import{O as p}from"./object-table-vrHGfDA2.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-cjuQxasS.js";import"./preload-helper-2Th1jMen.js";import"./Table-BgyDI0P0.js";import"./index-C21TqT6A.js";import"./Dialog-T3kPpvfF.js";import"./cross-CeGchC5k.js";import"./svgIconContainer-BHdOMCzo.js";import"./useBaseUiId-CLf0rG-Y.js";import"./InternalBackdrop-CVobSM-Y.js";import"./composite-BKH4xaR3.js";import"./index-C59OjD3A.js";import"./index-CAYM-DXb.js";import"./index-BWg3v_Cb.js";import"./useEventCallback-CCz9s_PD.js";import"./SkeletonBar-DCXS-4Lv.js";import"./LoadingCell-BPbHXBpz.js";import"./ColumnConfigDialog-qpdQOzBp.js";import"./DraggableList-DX1Q01Z2.js";import"./search-R2xVmJoP.js";import"./Input-CBdQ7CLm.js";import"./useControlled-BOvXcwwU.js";import"./Button-3S271LoP.js";import"./small-cross-DCVV53M4.js";import"./ActionButton-BNAbHBhx.js";import"./Checkbox-IuxkZPag.js";import"./useValueChanged-CT291c3y.js";import"./CollapsiblePanel-dyMCKZQz.js";import"./MultiColumnSortDialog-D3Dzmy9A.js";import"./MenuTrigger-Zqdvbqhh.js";import"./CompositeItem-CGUDnveH.js";import"./ToolbarRootContext-DgA7tKZV.js";import"./getDisabledMountTransitionStyles-B0LZucnd.js";import"./getPseudoElementBounds-dkD9ei8K.js";import"./chevron-down-C1AwO93k.js";import"./index-CgBjnwND.js";import"./error-CIgeHO6b.js";import"./BaseCbacBanner-qj0KxNTh.js";import"./makeExternalStore-T_eRZyL4.js";import"./Tooltip-B51qexXS.js";import"./PopoverPopup-ejbGtFr0.js";import"./debounce-Bph0YPdb.js";import"./useOsdkClient-Dngj-l1S.js";import"./tick-3efxYCqZ.js";import"./DropdownField-CSmhnhSy.js";import"./isEqual-CYCC0neJ.js";import"./withOsdkMetrics-Clckg0kN.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
