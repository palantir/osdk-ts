import{j as i}from"./iframe-BLH-rzjX.js";import{O as p}from"./object-table-D-6ov8rd.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BuxPAH4-.js";import"./preload-helper-Boseizqx.js";import"./Table-C-l9FtnV.js";import"./index-BshiJ0vb.js";import"./Dialog-BbzT8uGy.js";import"./cross-CjxN7NXy.js";import"./svgIconContainer-ClFD8O3h.js";import"./useBaseUiId-_L7E6isP.js";import"./InternalBackdrop-DJXpTlYo.js";import"./composite-CJF2SW-C.js";import"./index-CjzgRjXg.js";import"./index-1GWYtBv5.js";import"./index-DhrrZED7.js";import"./useEventCallback-CvA-dmQo.js";import"./SkeletonBar-2jCSSfIk.js";import"./LoadingCell-Dgx9nWzQ.js";import"./ColumnConfigDialog-CvYNYs5O.js";import"./DraggableList-CQlronkH.js";import"./search-Dcpgl82t.js";import"./Input-ChiRpiSd.js";import"./useControlled-DoMCNvxt.js";import"./Button-Cb7__wFY.js";import"./small-cross-CxW1zdvK.js";import"./ActionButton-CNmUd466.js";import"./Checkbox-CDybbOiX.js";import"./useValueChanged-BtzRyrp7.js";import"./CollapsiblePanel-D2wDAZ7-.js";import"./MultiColumnSortDialog-DtmEBHii.js";import"./MenuTrigger-C_w6gyFE.js";import"./CompositeItem-tv6DhAGC.js";import"./ToolbarRootContext-N5PisKcU.js";import"./getDisabledMountTransitionStyles-D801SK_0.js";import"./getPseudoElementBounds-DPi59aQg.js";import"./chevron-down-gdTU0sCy.js";import"./index-D07nHwth.js";import"./error-CxjKCqiV.js";import"./BaseCbacBanner-Bk_IZ-ld.js";import"./makeExternalStore-VNm4xFie.js";import"./Tooltip-CNF5wHNx.js";import"./PopoverPopup-C1mq6siy.js";import"./debounce-7gj880Zc.js";import"./useOsdkClient-B89sr5Rr.js";import"./tick-Do25CLpe.js";import"./DropdownField-DKQdUIUg.js";import"./isEqual-BYAPAqkH.js";import"./withOsdkMetrics-CNvw97j4.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
