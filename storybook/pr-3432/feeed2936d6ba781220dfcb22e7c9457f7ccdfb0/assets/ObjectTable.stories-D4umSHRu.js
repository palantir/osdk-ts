import{j as i}from"./iframe-DE0qpqxN.js";import{O as p}from"./object-table-DbJ5S0zE.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BnOrKHg6.js";import"./preload-helper-CpAaridb.js";import"./Table-CLqUteim.js";import"./index-BKwUwpqE.js";import"./Dialog-CI3zVTB_.js";import"./cross-DXFMmm20.js";import"./svgIconContainer-Ba0TV_kf.js";import"./useBaseUiId-CudlGyea.js";import"./InternalBackdrop-CPiYpBeU.js";import"./composite-DRL_KXF5.js";import"./index-DfV4aiex.js";import"./index-Cck4Ig_M.js";import"./index-BPQvOeFd.js";import"./useEventCallback-BUxjmxXY.js";import"./SkeletonBar-CpvduLJa.js";import"./LoadingCell-DrGN3jNa.js";import"./ColumnConfigDialog-__eVGQmP.js";import"./DraggableList-LLON-zMc.js";import"./search-DXlkRNHA.js";import"./Input-Cn0Hq5K2.js";import"./useControlled-DrRmZYfs.js";import"./Button-DuyCMj3l.js";import"./small-cross-B02hAhCe.js";import"./ActionButton-DsCMa1vM.js";import"./Checkbox-BAKv0TEC.js";import"./useValueChanged-D7N_kAGm.js";import"./CollapsiblePanel-Uz1jEYN9.js";import"./MultiColumnSortDialog-CHy1ErXk.js";import"./MenuTrigger-9iXGtW5k.js";import"./CompositeItem-B_IgawVY.js";import"./ToolbarRootContext-BFw03ENT.js";import"./getDisabledMountTransitionStyles-CXCRcyvB.js";import"./getPseudoElementBounds-BN-ZpLZI.js";import"./chevron-down-mPM57H-_.js";import"./index-DDu7TN_e.js";import"./error-Bj6pw2ZK.js";import"./BaseCbacBanner-DhRcW7ia.js";import"./makeExternalStore-DvJ09sLw.js";import"./Tooltip-7iC2B0Kg.js";import"./PopoverPopup-D2VElQuj.js";import"./debounce-DcBnAUXM.js";import"./useOsdkClient-CZqafrN0.js";import"./tick-Cl1DbdH2.js";import"./DropdownField-BkMkjAtk.js";import"./isEqual-CthcIQ1v.js";import"./withOsdkMetrics-CjTPft6c.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
