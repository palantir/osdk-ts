import{j as i}from"./iframe-zfG254O_.js";import{O as p}from"./object-table-DdTuYXq6.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Cvw3n_ir.js";import"./preload-helper-BVR1mWVD.js";import"./Table-bJGCKuIo.js";import"./index-Wj2BR0GO.js";import"./Dialog-ClRyKcve.js";import"./cross-CetEVi0b.js";import"./svgIconContainer-QVUVb6tE.js";import"./useBaseUiId-DDNAeb_I.js";import"./InternalBackdrop-CzqyYOYM.js";import"./composite-DJ7hFQoT.js";import"./index-DqcYQoAX.js";import"./index-6IcmwpRJ.js";import"./index-CYmueTj6.js";import"./useEventCallback-CBXBr67p.js";import"./SkeletonBar-CZ4qcvgs.js";import"./LoadingCell-BSeA2jL5.js";import"./ColumnConfigDialog-DFiNFeKf.js";import"./DraggableList-BhXMEoLZ.js";import"./search-C1O_20Mr.js";import"./Input-DnoFtOsb.js";import"./useControlled-CYuH3Kw2.js";import"./Button-XkjDQhxK.js";import"./small-cross-BPAsGbUn.js";import"./ActionButton-C6sVQTm3.js";import"./Checkbox-BZvshDW-.js";import"./useValueChanged-CfrpKOZJ.js";import"./CollapsiblePanel-7gx9FNyA.js";import"./MultiColumnSortDialog-DF4qRTXJ.js";import"./MenuTrigger-DDjdPw8E.js";import"./CompositeItem-7b58zS75.js";import"./ToolbarRootContext-CfVpNXkd.js";import"./getDisabledMountTransitionStyles-DQWp1vNz.js";import"./getPseudoElementBounds-DaQ8_6-7.js";import"./chevron-down-omzDCKN7.js";import"./index-Cfc9ne_z.js";import"./error-CZvS_ur6.js";import"./BaseCbacBanner-BUYNHHUj.js";import"./makeExternalStore-Br87Teca.js";import"./Tooltip-1C_rhTkJ.js";import"./PopoverPopup-xGPdUl_L.js";import"./debounce-CDvtvBim.js";import"./useOsdkClient-CX8pU5qt.js";import"./tick-BSe8OeQ4.js";import"./DropdownField-Bk22B-qN.js";import"./isEqual-NQiw9Ucd.js";import"./withOsdkMetrics-BSCahypJ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
