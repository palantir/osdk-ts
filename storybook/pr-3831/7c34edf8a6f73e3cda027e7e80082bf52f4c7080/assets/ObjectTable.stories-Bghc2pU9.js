import{j as i}from"./iframe-MD_hxJ5J.js";import{O as p}from"./object-table-BysSjEUR.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cwxi1gtA.js";import"./preload-helper-CxmPmWZ8.js";import"./Table-C0PNNGWc.js";import"./index-64-1SNr_.js";import"./Dialog-D69y0_7h.js";import"./cross-D46twNIG.js";import"./svgIconContainer-BvauezIc.js";import"./useBaseUiId-ChxOhtPS.js";import"./InternalBackdrop-Cqjgz7i6.js";import"./composite-C2KSVEv8.js";import"./index-BZUy6kD9.js";import"./index-Cg6AvCFD.js";import"./index-D4y1rNQs.js";import"./useEventCallback-C5sJ9WEe.js";import"./SkeletonBar-Hr-KZlfW.js";import"./LoadingCell-CsGyK1hi.js";import"./ColumnConfigDialog-BYmJzKVj.js";import"./DraggableList-CPFfWHpr.js";import"./search-7pK9Rle0.js";import"./Input-0PB2eg3D.js";import"./useControlled-C8cjmXAr.js";import"./isEqual-tprnv5r8.js";import"./isObject-DUcirasF.js";import"./Button-DTHIbyog.js";import"./ActionButton-B6Tvr6s_.js";import"./Checkbox-Gr2j_OCE.js";import"./useValueChanged-BooVG2Ea.js";import"./CollapsiblePanel-B36qfma4.js";import"./MultiColumnSortDialog-CsWcyhKj.js";import"./MenuTrigger-DRuvgmkE.js";import"./CompositeItem-CADo38Yn.js";import"./ToolbarRootContext-BSmt9IfE.js";import"./getDisabledMountTransitionStyles-CtRo1WPu.js";import"./getPseudoElementBounds-XHz08wL-.js";import"./chevron-down-BLw2RaDz.js";import"./index-Bke-1tqH.js";import"./error-BL4ywDu6.js";import"./BaseCbacBanner-C8xLY8Qd.js";import"./makeExternalStore-CQNZO13J.js";import"./Tooltip-CEMJXePV.js";import"./PopoverPopup-BiefuPNN.js";import"./toNumber-CZGYHYtn.js";import"./useOsdkClient-DKSwjyPJ.js";import"./tick-5aivGE4p.js";import"./DropdownField-TiPjHrlF.js";import"./withOsdkMetrics-DoESnEyg.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
