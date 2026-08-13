import{j as i}from"./iframe-Mtgd1DTS.js";import{O as p}from"./object-table-DZcbuhax.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D4z2kjs2.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-B0i-YCE7.js";import"./index-DGQ1D5ZF.js";import"./Dialog-BUwRTkBO.js";import"./cross-nE9MHaq6.js";import"./svgIconContainer-BTXfnqy-.js";import"./useBaseUiId-gk6HeQ4v.js";import"./InternalBackdrop-C3FLzDyf.js";import"./composite-BOi5r20r.js";import"./index-DWBX8AGA.js";import"./index-DVZkzu80.js";import"./index-BLZbP_iP.js";import"./useEventCallback-Otl2FIIq.js";import"./SkeletonBar-Bjmn4nj7.js";import"./LoadingCell-CWKO4sHJ.js";import"./ColumnConfigDialog-CTJhoKGI.js";import"./DraggableList-BJ0RDZMA.js";import"./search-B4_r-kWC.js";import"./Input-BuQB-8kT.js";import"./useControlled-Bdc-9JPt.js";import"./Button-BRDaSx2s.js";import"./small-cross-B5fbwO-C.js";import"./ActionButton-JooCSyPg.js";import"./Checkbox-BUFEp9JI.js";import"./useValueChanged-JDBorrlu.js";import"./CollapsiblePanel-BjaTBsUI.js";import"./MultiColumnSortDialog-BNPHleDp.js";import"./MenuTrigger-Bs70PEvm.js";import"./CompositeItem-CvGV1Dn5.js";import"./ToolbarRootContext-C7D-uVC_.js";import"./getDisabledMountTransitionStyles-DyU0dy72.js";import"./getPseudoElementBounds-CKwpRTNx.js";import"./chevron-down-Bvy3Wm81.js";import"./index-D3rG4xmO.js";import"./error-O-ALRXAM.js";import"./BaseCbacBanner-CSkg4fga.js";import"./makeExternalStore-BPm4QJ00.js";import"./Tooltip-BP1dRkR8.js";import"./PopoverPopup-WtLbH-U4.js";import"./debounce-BsdStdiQ.js";import"./useOsdkClient-0d2T-tjR.js";import"./tick-CGp3ABT2.js";import"./DropdownField-CAtdjvP3.js";import"./isEqual-CbNbEIQW.js";import"./withOsdkMetrics-B9hm1gbS.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
