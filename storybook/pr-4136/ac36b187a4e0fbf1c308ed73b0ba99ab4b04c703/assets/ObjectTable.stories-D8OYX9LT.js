import{j as i}from"./iframe-i61RpjX7.js";import{O as p}from"./object-table-qScOeZBt.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Bui9tAxD.js";import"./preload-helper-BXpoIj2B.js";import"./Table-DPaGzcaT.js";import"./index-DdznE6qG.js";import"./Dialog-n8hWaEri.js";import"./cross-BJRIAlLu.js";import"./svgIconContainer-BKu8iYZ4.js";import"./useBaseUiId-Dw1mKB5r.js";import"./InternalBackdrop-DQMAcjr6.js";import"./composite-q6o4xbG3.js";import"./index-B1Q3wqWk.js";import"./index-CFOl5jJr.js";import"./index-Clsp1HuI.js";import"./useEventCallback-Nm08Lt1H.js";import"./SkeletonBar-Cude-n-r.js";import"./LoadingCell-BdnUyRGB.js";import"./ColumnConfigDialog-CbRaWZqK.js";import"./DraggableList-CvhN3Aeo.js";import"./search-DcyXoMY2.js";import"./Input-BXW8qVNh.js";import"./useControlled-Bd2D0MOS.js";import"./Button-B7Ybnvxm.js";import"./small-cross-CIYzC3ci.js";import"./ActionButton-wKRTt0XG.js";import"./Checkbox-CHjLExp_.js";import"./useValueChanged-Cinp2v4c.js";import"./CollapsiblePanel-SYw_Fpkn.js";import"./MultiColumnSortDialog-CbME9xje.js";import"./MenuTrigger-DimCL05E.js";import"./CompositeItem-CfdrXiQ-.js";import"./ToolbarRootContext-BlDscewO.js";import"./getDisabledMountTransitionStyles-CVMvranO.js";import"./getPseudoElementBounds-CSfNVXL_.js";import"./chevron-down-BtDuC_bB.js";import"./index-DR7wvRAh.js";import"./error-DfGDPEBO.js";import"./BaseCbacBanner-D0JlEcok.js";import"./makeExternalStore-BnbaQL1F.js";import"./Tooltip-Wp77QFzG.js";import"./PopoverPopup-DWX144ju.js";import"./debounce-Du4i-gbv.js";import"./useOsdkClient-ABekNhIh.js";import"./tick-DDsYIRYo.js";import"./DropdownField-B2dzXe09.js";import"./isEqual-C0H2NPAK.js";import"./withOsdkMetrics-Cw5kaJur.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
