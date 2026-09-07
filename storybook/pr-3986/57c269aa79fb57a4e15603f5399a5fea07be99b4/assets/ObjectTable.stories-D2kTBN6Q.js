import{j as i}from"./iframe-CyooYLyM.js";import{O as p}from"./object-table-D2vNArqQ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D6lw9nw3.js";import"./preload-helper-Bngm7-ol.js";import"./Table-z9goVWNW.js";import"./index-CIHNhV_V.js";import"./Dialog-EepA0i_O.js";import"./cross-ECBcZMsc.js";import"./svgIconContainer-BUB4CTcl.js";import"./useBaseUiId-B6QldWDF.js";import"./InternalBackdrop-CdJ1CYip.js";import"./composite-Ct2KL6gZ.js";import"./index-CeYxTKYZ.js";import"./index-CYfla4gt.js";import"./index-DJrmSdlL.js";import"./useEventCallback-BoCra72q.js";import"./SkeletonBar-DOUvjjDK.js";import"./LoadingCell-LsIhRtPF.js";import"./ColumnConfigDialog-CLqK_x10.js";import"./DraggableList-DPEz_ect.js";import"./search-B3kqtI7c.js";import"./Input-COiGAk6z.js";import"./useControlled-i1Ezl6Tl.js";import"./Button-BmMB6JHM.js";import"./small-cross-BC6HSGjl.js";import"./ActionButton-DMpxTXkE.js";import"./Checkbox-DPeuERNM.js";import"./useValueChanged-DMjW1Np8.js";import"./CollapsiblePanel-D8wSVDSv.js";import"./MultiColumnSortDialog-OC_EtbbE.js";import"./MenuTrigger-Tft-1JTt.js";import"./CompositeItem-Bl-YA0xX.js";import"./ToolbarRootContext-D7fAF7oZ.js";import"./getDisabledMountTransitionStyles-CtwlLgnw.js";import"./getPseudoElementBounds-BmACaDew.js";import"./chevron-down-B96rYcxD.js";import"./index-LrFKMTxg.js";import"./error-CQMuKd3b.js";import"./BaseCbacBanner-COsBoy9s.js";import"./makeExternalStore-DQfo9etd.js";import"./Tooltip-C4Nyw1my.js";import"./PopoverPopup-BV24RTcO.js";import"./debounce-BAPzRuvt.js";import"./useOsdkClient-DaN5XCxO.js";import"./tick-BvxF-FNa.js";import"./DropdownField-BNmEjlHT.js";import"./isEqual-CD-9D1bD.js";import"./withOsdkMetrics-D__EiDJX.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
