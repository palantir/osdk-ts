import{j as i}from"./iframe-CA9OR36W.js";import{O as p}from"./object-table-Dg45hJld.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-DjTB8kRg.js";import"./preload-helper-Bon2kKhd.js";import"./Table-UIIFlubo.js";import"./index-B68sXqkL.js";import"./Dialog-CnoDnchP.js";import"./cross-BEXTKsVw.js";import"./svgIconContainer-CeElG9sP.js";import"./useBaseUiId-BgUh3svF.js";import"./InternalBackdrop-JZwsIqkQ.js";import"./composite-Bz-KrWYH.js";import"./index-B8B9EgfF.js";import"./index-y3ZmFdkO.js";import"./index-B4EpkH5w.js";import"./useEventCallback-DIoxvDdl.js";import"./SkeletonBar-CVEQK3PW.js";import"./LoadingCell-YFYCkKuO.js";import"./ColumnConfigDialog-DNT7Gnke.js";import"./DraggableList-CACrYVx3.js";import"./search-BMMtCvCc.js";import"./Input-CexGKOKO.js";import"./useControlled-DI90JDHo.js";import"./Button-CP1_IUal.js";import"./small-cross-D_wkcItQ.js";import"./ActionButton-COKreHN7.js";import"./Checkbox-CIeNahPP.js";import"./useValueChanged-CkmYGlvP.js";import"./CollapsiblePanel-KgY9Iaos.js";import"./MultiColumnSortDialog-DnzJ-tS3.js";import"./MenuTrigger-6LAbxucn.js";import"./CompositeItem-DyzBw55k.js";import"./ToolbarRootContext-BVT0PB0Z.js";import"./getDisabledMountTransitionStyles-CYn3iehE.js";import"./getPseudoElementBounds-BUh3aPLZ.js";import"./chevron-down-DnMJpivZ.js";import"./index-B8DsW-Cw.js";import"./error-COtQT1aa.js";import"./BaseCbacBanner-aKw2K9_3.js";import"./makeExternalStore-CEy1rwg3.js";import"./Tooltip-Bkp5cOWe.js";import"./PopoverPopup-DmlxI6AN.js";import"./debounce-B8YN_pz8.js";import"./useOsdkClient-0xBbicQt.js";import"./tick-CqxkYZWw.js";import"./DropdownField-CaFeBBw0.js";import"./isEqual-DSdnsWsX.js";import"./withOsdkMetrics-C5BDt541.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
