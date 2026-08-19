import{j as i}from"./iframe-CGqc1mNB.js";import{O as p}from"./object-table-CZvyIlfB.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D2AZpA9F.js";import"./preload-helper-BJdpauA9.js";import"./Table-AaR6pvOa.js";import"./index-Dgk2zAqJ.js";import"./Dialog-CNejIhKL.js";import"./cross-XlQOrTFd.js";import"./svgIconContainer-CBRazqRm.js";import"./useBaseUiId-CLH5ZdSv.js";import"./InternalBackdrop-C-zUCy48.js";import"./composite-D6bWet8H.js";import"./index-Dp5yRYTx.js";import"./index-DbvXLa6Y.js";import"./index-D1snueEy.js";import"./useEventCallback-Dk3_50Ao.js";import"./SkeletonBar-Dq5kGonv.js";import"./LoadingCell---M2Y8x3.js";import"./ColumnConfigDialog-BvvF93p6.js";import"./DraggableList-BG62YbY1.js";import"./search-DpFh14Cw.js";import"./Input-BrLbJg7l.js";import"./useControlled-BVW9yO_V.js";import"./Button-BDmqxq31.js";import"./small-cross-thz1Z2sy.js";import"./ActionButton-ObfHG4WA.js";import"./Checkbox-Dh2IMSOE.js";import"./useValueChanged-fsujBZUg.js";import"./CollapsiblePanel-D2eiku1v.js";import"./MultiColumnSortDialog-9dILp4tw.js";import"./MenuTrigger-6n7-f6B8.js";import"./CompositeItem-CUyPJbYK.js";import"./ToolbarRootContext-BdKEdjkY.js";import"./getDisabledMountTransitionStyles-B1I7mcq2.js";import"./getPseudoElementBounds-DBuVCIci.js";import"./chevron-down-UapZ8jOT.js";import"./index-BtlPha85.js";import"./error-U35dGLvC.js";import"./BaseCbacBanner-l3IWoUW7.js";import"./makeExternalStore-B9NtbuNt.js";import"./Tooltip-DNiBwXUD.js";import"./PopoverPopup-Ds1pQBCB.js";import"./debounce-CaPbwKEN.js";import"./useOsdkClient-KrpErzls.js";import"./tick-CgkwFM7w.js";import"./DropdownField-Be4XT9or.js";import"./isEqual-1eZ0xhVS.js";import"./withOsdkMetrics-Ct9fR7z_.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
