import{j as i}from"./iframe-xO7-cFQE.js";import{O as p}from"./object-table-DPPomAoY.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-CyXuExSv.js";import"./preload-helper-CjE4C0sP.js";import"./Table-DkXla0eu.js";import"./index-BOQrkF-F.js";import"./Dialog-C8Or7tBX.js";import"./cross-D5U-IDeN.js";import"./svgIconContainer-Bxzx9KVi.js";import"./useBaseUiId-DvKVHufz.js";import"./InternalBackdrop-C9ZmsvjR.js";import"./composite-CWWmbaS7.js";import"./index-BJwULR6g.js";import"./index-CXPZCOfE.js";import"./index-1a1U9ieG.js";import"./useEventCallback-fopAPD8Y.js";import"./SkeletonBar-f3m0sjLr.js";import"./LoadingCell-0MQBRXiw.js";import"./ColumnConfigDialog-CKmlFPhZ.js";import"./DraggableList-D_G4MIOq.js";import"./search-Bazo2FVF.js";import"./Input-99mwA4VF.js";import"./useControlled-Wgq9Q75K.js";import"./Button-BCHzki1U.js";import"./small-cross-BYaqaz9R.js";import"./ActionButton-DJcroEAc.js";import"./Checkbox-B89KfeZF.js";import"./useValueChanged-Dgs0e82c.js";import"./CollapsiblePanel-CGLiej8s.js";import"./MultiColumnSortDialog-wtHUP_vi.js";import"./MenuTrigger-u1xB01Kq.js";import"./CompositeItem-BPvfL8qH.js";import"./ToolbarRootContext-D7XQqVeD.js";import"./getDisabledMountTransitionStyles-aVxKVFQR.js";import"./getPseudoElementBounds-C2y6c8Y1.js";import"./chevron-down-hptZ4LWp.js";import"./index-DDxyKWUj.js";import"./error-n609TGyv.js";import"./BaseCbacBanner-cN_njO3E.js";import"./makeExternalStore-Czx_Amad.js";import"./Tooltip-DPJAxssW.js";import"./PopoverPopup-hp660gJk.js";import"./debounce-GWee0BQR.js";import"./useOsdkClient-CDqxUxHE.js";import"./tick-C49IxArq.js";import"./DropdownField-ScPov9Rd.js";import"./isEqual-DQYCwzyu.js";import"./withOsdkMetrics-BDGk6jsR.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
