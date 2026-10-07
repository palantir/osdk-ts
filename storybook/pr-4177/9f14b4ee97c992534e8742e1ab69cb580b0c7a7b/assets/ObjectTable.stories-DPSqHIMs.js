import{j as i}from"./iframe-DXrbmFQU.js";import{O as p}from"./object-table-CZgdmLOz.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BIV4Unq6.js";import"./preload-helper-BpeD6mmz.js";import"./Table-C_vJuGXT.js";import"./index-CC0lkARs.js";import"./Dialog-BSRL8opj.js";import"./cross-CS_4qYPy.js";import"./svgIconContainer-D3MknpC0.js";import"./useBaseUiId-Bmo8e_yl.js";import"./InternalBackdrop-CZ7SS8XL.js";import"./composite-CtPqGv2Q.js";import"./index-C1FzfM-T.js";import"./index-F1aEIIjQ.js";import"./index-CIJdhEvE.js";import"./useEventCallback-D7stwHp4.js";import"./SkeletonBar-D5AKklLC.js";import"./LoadingCell-BVwkbAMD.js";import"./ColumnConfigDialog-CNe6t6jf.js";import"./DraggableList-D4sOGYVr.js";import"./search-B06mFuBu.js";import"./Input-sDtqAHjV.js";import"./useControlled-B7qMp3Jr.js";import"./Button-CaEsIWhF.js";import"./small-cross-op6IWr8S.js";import"./ActionButton-zcaUPaLa.js";import"./Checkbox-CrDOEg-9.js";import"./useValueChanged-DqKKufXw.js";import"./CollapsiblePanel-BcteEw7K.js";import"./MultiColumnSortDialog-CbkKxFNz.js";import"./MenuTrigger-DLWZFo83.js";import"./CompositeItem-BFe5eqlW.js";import"./ToolbarRootContext-D7OAZc3v.js";import"./getDisabledMountTransitionStyles-C_81mHPe.js";import"./getPseudoElementBounds-BxGouxy3.js";import"./chevron-down-Dt-I4rTn.js";import"./index-Cmhl-M1L.js";import"./error-DTlfxxBy.js";import"./BaseCbacBanner-CQVfVEFg.js";import"./makeExternalStore-CmG1_iz5.js";import"./Tooltip-DqU4cO90.js";import"./PopoverPopup-BkZ0u7Nq.js";import"./debounce-CPG8fLwA.js";import"./useOsdkClient-DVkOG91y.js";import"./tick-BRRV4IxG.js";import"./DropdownField-B-USOmOG.js";import"./isEqual-0AwzXC1p.js";import"./withOsdkMetrics-CrZM7ObA.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
