import{j as i}from"./iframe-QDaBOsra.js";import{O as p}from"./object-table-BKqIvi-i.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D8BYOcCm.js";import"./preload-helper-jyefFMUr.js";import"./Table-CjizmD6_.js";import"./index-D2vpxCu8.js";import"./Dialog-NOed3MXB.js";import"./cross-iJjTw1OM.js";import"./svgIconContainer-CvV-2N9f.js";import"./useBaseUiId-DjqNfgzR.js";import"./InternalBackdrop-Dg-ePZWC.js";import"./composite-BAT7e_UE.js";import"./index-BlPi3lSf.js";import"./index-DKL8AmRe.js";import"./index-BqZA6QHe.js";import"./useEventCallback-BjGyJBWU.js";import"./SkeletonBar-fZmLCcbb.js";import"./LoadingCell-BZuObAeC.js";import"./ColumnConfigDialog-BggjWMt9.js";import"./DraggableList-y-d7ko1t.js";import"./search-kqukl_jl.js";import"./Input-rRK-xJ54.js";import"./useControlled-FhAUZFAL.js";import"./Button-DkAvArvY.js";import"./small-cross--x_z2UwR.js";import"./ActionButton-DqO5e5ax.js";import"./Checkbox-DyooxNyF.js";import"./useValueChanged-CssPl65C.js";import"./CollapsiblePanel-DdjBa-EN.js";import"./MultiColumnSortDialog-BzWsNy6c.js";import"./MenuTrigger-Bwpm1z4T.js";import"./CompositeItem-BZpx2jPT.js";import"./ToolbarRootContext-C6_BvipF.js";import"./getDisabledMountTransitionStyles-BexZtf_H.js";import"./getPseudoElementBounds-DkaQLMrl.js";import"./chevron-down-B1cL2irb.js";import"./index-BpZcid6-.js";import"./error-DIA5xUfH.js";import"./BaseCbacBanner-DrXTtVeG.js";import"./makeExternalStore-CTZ1pZcF.js";import"./Tooltip-BC3kcowS.js";import"./PopoverPopup-CVJvgmsF.js";import"./debounce-DCZQrZ2_.js";import"./useOsdkClient-BIlIYc3q.js";import"./tick-Dp13d1sN.js";import"./DropdownField-LTytfUX6.js";import"./isEqual-CmM27koz.js";import"./withOsdkMetrics-CaEkt7Mu.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
