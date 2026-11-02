import{j as i}from"./iframe-DFabC9bf.js";import{O as p}from"./object-table-CkSvgxZD.js";import{E as c}from"./Employee-BAk2o20h.js";import{d as l,o as u,T as d,a as y}from"./objectTableStoryHelpers-D-kY8lpR.js";import"./preload-helper-BLxMvu58.js";import"./Table-CnA6SAP4.js";import"./index-DgsFchdG.js";import"./Dialog-BJo6rT1Y.js";import"./cross-ey58JM4H.js";import"./svgIconContainer-CsYtoZH2.js";import"./useBaseUiId-Dxr7oR41.js";import"./InternalBackdrop-C20tnZkX.js";import"./composite-BoRXQVH0.js";import"./index-BHWOd5Tr.js";import"./index-Gxd2oAE6.js";import"./index-B8dgdXG5.js";import"./useEventCallback-Dxsnooid.js";import"./SkeletonBar-DB5TmKcA.js";import"./LoadingCell-DbPuyCqH.js";import"./ColumnConfigDialog-DqfQDf7k.js";import"./DraggableList-BYFQzYt6.js";import"./search-B_WKOos_.js";import"./Input-BZyaCDxG.js";import"./useControlled-B3kUZkdE.js";import"./Button-DIvAKpTN.js";import"./small-cross-C4IRJysc.js";import"./ActionButton-BjOTOAby.js";import"./Checkbox-BY0YL0BC.js";import"./useValueChanged-BLFxNhsm.js";import"./CollapsiblePanel-bxzaQZkR.js";import"./MultiColumnSortDialog-CuxM7pOK.js";import"./MenuTrigger-B-Ap0mFZ.js";import"./CompositeItem-DUW332tM.js";import"./ToolbarRootContext-2AVlTjyA.js";import"./getDisabledMountTransitionStyles-BTShP6Yf.js";import"./getPseudoElementBounds-DqdMi3cO.js";import"./chevron-down-jy1hrUFA.js";import"./index-aUHzwEmK.js";import"./error-f3c_sZgu.js";import"./BaseCbacBanner-BcalAL_E.js";import"./makeExternalStore-D6-6uuSf.js";import"./Tooltip-De3r9uzL.js";import"./PopoverPopup-Dpc77gDV.js";import"./debounce-kIdrhBMS.js";import"./useOsdkClient-qt8uEQ5r.js";import"./tick-DRNk9pjM.js";import"./DropdownField-BmWQkglP.js";import"./isEqual-sHm5R8fg.js";import"./withOsdkMetrics-BCss4ydh.js";const{expect:e,screen:t,userEvent:T,within:f}=__STORYBOOK_MODULE_TEST__,ue={...u,title:"Components/ObjectTable"},n={args:{objectType:c,columnDefinitions:l},parameters:{docs:{description:{story:"Minimal setup showing Employee data with default column definitions."},source:{code:"<ObjectTable objectType={Employee} />"}}},render:o=>i.jsx("div",{className:"object-table-container",style:{height:"600px"},children:i.jsx(p,{...o})}),play:async({canvasElement:o})=>{const a=f(o);await a.findByText(d),await y(a,"fullName"),await e(await t.findByRole("menuitem",{name:"Sort ascending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Sort descending"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Pin column"})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:"Configure Columns"})).toBeInTheDocument(),await T.keyboard("{Escape}")}};var m,r,s;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
