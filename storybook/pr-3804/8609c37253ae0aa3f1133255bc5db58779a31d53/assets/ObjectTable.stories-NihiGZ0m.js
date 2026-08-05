import{j as i}from"./iframe-emwkUmZM.js";import{O as p}from"./object-table--7Y-NmQh.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D0M9GDHj.js";import"./preload-helper-DhG5IP-3.js";import"./Table-BPAyO7Qt.js";import"./index-Bv42s2zx.js";import"./Dialog-BJ0pnx9g.js";import"./cross-DNRJKzx5.js";import"./svgIconContainer-BZwxzAZ9.js";import"./useBaseUiId-DGMkXjWr.js";import"./InternalBackdrop-CHldKn7q.js";import"./composite-qf_al3LL.js";import"./index-CztgCydP.js";import"./index-Cr7IeRYZ.js";import"./index-DnsXBKrk.js";import"./useEventCallback-LeVVcxTU.js";import"./SkeletonBar-kr7o_Op6.js";import"./LoadingCell-DUpMgp2M.js";import"./ColumnConfigDialog-Cq87tenk.js";import"./DraggableList-86bXnKC5.js";import"./search-aahFShus.js";import"./Input-DvYk7O5S.js";import"./useControlled-gdvUMTCG.js";import"./isEqual-CxdjRH3O.js";import"./isObject-UVVfEMqv.js";import"./Button-Ceu8mR34.js";import"./ActionButton-CqnC07jl.js";import"./Checkbox-BfO7Z8DJ.js";import"./useValueChanged-xUU6Deyp.js";import"./CollapsiblePanel-BSoLtLPS.js";import"./MultiColumnSortDialog-C1p9TTes.js";import"./MenuTrigger-Bps2d7rE.js";import"./CompositeItem-XANTgkhJ.js";import"./ToolbarRootContext-BDzdBlDv.js";import"./getDisabledMountTransitionStyles-BXdIMMYT.js";import"./getPseudoElementBounds-CFB_C73n.js";import"./chevron-down-CXaya3J3.js";import"./index-8JQvc2yz.js";import"./error-DMYyebeG.js";import"./BaseCbacBanner-CnFA6BJV.js";import"./makeExternalStore-D62X0CAn.js";import"./Tooltip-mH2ha4Z3.js";import"./PopoverPopup-5QB-BnzR.js";import"./toNumber-COpu-Ym7.js";import"./useOsdkClient-DXT4JJx_.js";import"./tick-GpDatW4d.js";import"./DropdownField-Dlnq1C8N.js";import"./withOsdkMetrics-DIvrEbIJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
