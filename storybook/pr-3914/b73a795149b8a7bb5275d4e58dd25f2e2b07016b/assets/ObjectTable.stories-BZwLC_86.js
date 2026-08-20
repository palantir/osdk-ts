import{j as i}from"./iframe-CMBFeC_L.js";import{O as p}from"./object-table-BUY3brHZ.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-Dl_0Wg55.js";import"./preload-helper-CS36ADie.js";import"./Table-CGDvEYnD.js";import"./index-D4Y_w0hd.js";import"./Dialog-COkRt85q.js";import"./cross-yG9BF8uH.js";import"./svgIconContainer-DJxkQhhX.js";import"./useBaseUiId-WiYHgttz.js";import"./InternalBackdrop-BSspU4KM.js";import"./composite-W5TWwyjD.js";import"./index-CZe2rHSJ.js";import"./index-CEtYmfNL.js";import"./index-CsQ1yXKY.js";import"./useEventCallback-mcaXVd9k.js";import"./SkeletonBar-8R5SFS8K.js";import"./LoadingCell-BsQRNZqG.js";import"./ColumnConfigDialog-CC3smv9j.js";import"./DraggableList-BZN9CPnY.js";import"./search-CdxSaiZT.js";import"./Input-BxRwyONo.js";import"./useControlled-BjH4SKxs.js";import"./Button-fIVGb80W.js";import"./small-cross-DOBW2WIw.js";import"./ActionButton-C4KQbB77.js";import"./Checkbox-XJwBKcJ6.js";import"./useValueChanged-DYwNaaDF.js";import"./CollapsiblePanel-BDxpXloE.js";import"./MultiColumnSortDialog-BY_WXlLR.js";import"./MenuTrigger-C1xsKVzb.js";import"./CompositeItem-DRB9ulRp.js";import"./ToolbarRootContext-CR2_3FrA.js";import"./getDisabledMountTransitionStyles-C061pxT3.js";import"./getPseudoElementBounds-xuSSDKLP.js";import"./chevron-down-B4P3-pPo.js";import"./index-BS3ExYik.js";import"./error-7AoAvQSe.js";import"./BaseCbacBanner-IssKwBT6.js";import"./makeExternalStore-BHl7EDPd.js";import"./Tooltip-Dq-jKqWq.js";import"./PopoverPopup-F1SSAjsx.js";import"./debounce-C8KBFwLC.js";import"./useOsdkClient-CxHjcBum.js";import"./tick-o8QJ8OhB.js";import"./DropdownField-DeC5UXjq.js";import"./isEqual-DoqdJuwX.js";import"./withOsdkMetrics-Bwu4txGZ.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
