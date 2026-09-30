import{j as i}from"./iframe-BLOGWzes.js";import{O as p}from"./object-table-CsIXDMq0.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-BCJZugdm.js";import"./preload-helper-DKYPYdJ1.js";import"./Table-SG7EtYJY.js";import"./index-Dw_R0R3u.js";import"./Dialog-D_X4CI00.js";import"./cross-81MWidH4.js";import"./svgIconContainer-DOUGpiyN.js";import"./useBaseUiId-0dkTavyr.js";import"./InternalBackdrop-C7ZwjG_B.js";import"./composite-BaecbUIv.js";import"./index-C_xx75lm.js";import"./index-CURDKWBa.js";import"./index-_ogkwLFC.js";import"./useEventCallback-DOR7ddeL.js";import"./SkeletonBar-CQnlCQ4P.js";import"./LoadingCell-BV3nAEVD.js";import"./ColumnConfigDialog-BnQ3wHRv.js";import"./DraggableList-DngOd2Pk.js";import"./search-DLp12F_x.js";import"./Input-BWx5Xf6Z.js";import"./useControlled-sfZuFzcU.js";import"./Button-BCMvPzPq.js";import"./small-cross-BfNan5YN.js";import"./ActionButton-d0qDXU7F.js";import"./Checkbox-BhIE-LLh.js";import"./useValueChanged-BAxxlU-6.js";import"./CollapsiblePanel-C8EuAByc.js";import"./MultiColumnSortDialog-n2Vo9i4d.js";import"./MenuTrigger-DIFG2ArH.js";import"./CompositeItem-B6ZRSaDZ.js";import"./ToolbarRootContext-Y2iZ9Ujq.js";import"./getDisabledMountTransitionStyles-DaPF4otG.js";import"./getPseudoElementBounds-DOWThf3d.js";import"./chevron-down-Eag7e6pI.js";import"./index-BIwD5Jbf.js";import"./error-CiKKwT6x.js";import"./BaseCbacBanner-B4c_Rabd.js";import"./makeExternalStore-DETb4-Ws.js";import"./Tooltip-DPnWTDYN.js";import"./PopoverPopup-BqAXUtPT.js";import"./debounce-R97o068-.js";import"./useOsdkClient-D9f4bCNA.js";import"./tick-CtDA2FHx.js";import"./DropdownField-DOctIr4W.js";import"./isEqual-C1zrLI8K.js";import"./withOsdkMetrics-DrML1D1X.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
